# Al-Hindara Working Paper No. 3 - v7.3
An Algebraic Identity and a Numerical Symmetry-Breaking Effect

Author: Abdulla M. N. Al-Jabri
ORCID: 0009-0003-3319-3822
Date: October 2026
License: CC-BY-4.0

## What this package contains
wells/
- all-frames-tex.tex (LaTeX v7.3 with verification paragraph + figures)
- all-frames.csv (adaptive reference + Simpson table)
- all-frames1.png (Screenshot 06:17 - adaptive A12, A13, R)
- all-frames2.png (Screenshot 06:17 - |R-Rref| -> 2.41e-12 + verified)
- README.md

## Numerical verification status
verified: numerical results in all-frames-tex.tex
Limited to numerical calculations, does not certify analytical claims.

- Executed in Google Colab 2026-10-23 06:17
- Adaptive quad (limit=300, epsabs=1e-12):
  A12 = 0.6220748484804
  A13 = -0.4832666943981
  R = 0.6035155247873
- Simpson N=20,40,80,200,400:
  |R-Rref|: 1.2246e-04, 2.3245e-06, 3.7383e-08, 1.5417e-10, 2.4106e-12

Code checks within 5e-11 before printing verified.

## Reproducibility
Python 3.11.5, numpy 1.26.4, scipy 1.13.1, Colab x86-64
Run: python code.py
Expected output matches screenshots.

## LaTeX inclusion
usepackage graphicx
includegraphics wells/all-frames1.png
includegraphics wells/all-frames2.png

Paragraph:
Numerical verification status.
verified. The Python reproducibility code was
executed successfully in Google Colab. The adaptive
quadrature results agree with the reported reference
values, and the composite Simpson results converge
toward the reference value for the specified setup.
This verification is limited to the numerical
calculations and does not certify the analytical claims.

## Scope
Proven: gauging identity H_g(gY) = -g Y'', vanishing in symmetric reference, formal zero mode Lg=0
Observed: R13/12 ~0.6035155248 for xp=21, D=cos(u/2)
Not claimed: No RH proof, no spectral theorem, no universality

## Citation
Al-Jabri (2026) Zenodo DOI: 10.5281/zenodo.XXXXXXX