# jabri-zx-v3.4.0

Numerical convergence of
Z_N(x) = -sum_{k=1}^{N} 2x / (x^2 + gamma_k^2)

## Files

- `jabri-zx-v3.4.0.tex`  -- the note (compile with pdfLaTeX)
- `jabri-zx-v3.4.0.py`   -- reference implementation
- `README.md`             -- this file

## Run

    python jabri-zx-v3.4.0.py

Expected output (x = 44):

    N = 10   -> -0.286869
    N = 30   -> -0.517821
    N = 50   -> -0.622073
    N = 100  -> -0.741834

## Status

Numerical note. No claim about RH, no physical constant derived.

## Author

Abdulla M. Al-Jabri
ORCID: 0009-0003-3319-3822