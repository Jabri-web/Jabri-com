# Jabri-RiemannOS v3.2.2 — Self-Correction

This script produces negative results as often as positive ones.
It is designed to falsify claims, not confirm them.

## What it does

- Defines `Z(x) = -sum_k 2x / (x^2 + gamma_k^2)`, the standard kernel of the
  Riemann–Weil explicit formula (Weil 1952; Edwards, *Riemann's Zeta Function*).
- Computes Z, Z', Z'', Z''' analytically (no numerical differentiation).
- Checks convergence of Z(12) versus number of zeros.
- Locates the first critical point Z' = 0 at x ≈ 27.817 via bisection.
- Prints a full retraction table of v3.2.1 claims.

## How to run

    pip install numpy
    python jabri-zx-v3.2.2.py

No other dependencies. Output is deterministic.

## Files

- `jabri-zx-v3.2.2.py`   — verification script (main entry point)
- `make_figure.py`       — regenerates figure1.png and Z_values.csv
- `jabri-zx-v3.2.2.tex`  — technical note (compile with pdflatex)
- `figure1.png`          — Z(x) and Z'(x) on [5, 45]
- `Z_values.csv`         — tabulated x, Z, Z', Z'', w_proxy
- `RETRACTIONS.md`       — plain-text retraction table
- `CITATION.cff`         — citation metadata
- `LICENSE`              — MIT

## Citation

See `CITATION.cff`.

## Status

No physical quantity is derived from Z(x) in this version.
This is a technical note, not a physical theory.