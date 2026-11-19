"""Textauszug aus einer Datei (PDF mit Seitenmarken und OCR für Scans, XLSX, DOCX, EML, Text, PNG)."""
import email
import os
import subprocess
import tempfile
from email import policy


def _pdf(p):
    info = subprocess.run(['pdfinfo', p], capture_output=True, text=True).stdout
    n = int(next(l for l in info.splitlines() if l.startswith('Pages:')).split()[1])
    parts = []
    for i in range(1, n + 1):
        t = subprocess.run(['pdftotext', '-layout', '-f', str(i), '-l', str(i), p, '-'],
                           capture_output=True, text=True).stdout
        if len(t.strip()) < 30:  # Scan ohne Textschicht
            with tempfile.TemporaryDirectory() as d:
                img = os.path.join(d, 'page')
                subprocess.run(['pdftoppm', '-r', '200', '-f', str(i), '-l', str(i), '-png', '-singlefile', p, img])
                t = '[OCR] ' + subprocess.run(['tesseract', img + '.png', '-', '-l', 'deu'],
                                              capture_output=True, text=True).stdout
        parts.append(f'--- Seite {i} ---\n{t}')
    return '\n'.join(parts)


def _xlsx(p):
    import openpyxl
    wb = openpyxl.load_workbook(p, data_only=True)
    out = []
    for ws in wb.worksheets:
        out.append(f'--- Blatt {ws.title} ---')
        for row in ws.iter_rows(values_only=True):
            if any(c is not None for c in row):
                out.append(' | '.join('' if c is None else str(c) for c in row))
    return '\n'.join(out)


def _eml(p):
    with open(p, 'rb') as f:
        m = email.message_from_binary_file(f, policy=policy.default)
    body = m.get_body(preferencelist=('plain', 'html'))
    hdr = '\n'.join(f'{k}: {m[k]}' for k in ('From', 'To', 'Cc', 'Date', 'Subject') if m[k])
    return hdr + '\n\n' + (body.get_content() if body else '')


def extract(p):
    ext = p.rsplit('.', 1)[-1].lower()
    try:
        if ext == 'pdf':
            return _pdf(p)
        if ext == 'xlsx':
            return _xlsx(p)
        if ext == 'docx':
            return subprocess.run(['pandoc', p, '-t', 'plain', '--wrap=none'], capture_output=True, text=True).stdout
        if ext == 'eml':
            return _eml(p)
        if ext in ('md', 'txt', 'csv', 'ics'):
            return open(p, encoding='utf-8', errors='replace').read().lstrip('﻿')
        if ext == 'png':
            return '[OCR] ' + subprocess.run(['tesseract', p, '-', '-l', 'deu'], capture_output=True, text=True).stdout
    except Exception as e:  # noqa: BLE001
        return f'[Text konnte nicht gelesen werden: {e}]'
    return ''
