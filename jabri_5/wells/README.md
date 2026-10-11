# Zeros of the Al-Jabri Field

**Author:** Eng. Abdulla M. N. Al-Jabri — Sana'a, Yemen  
**DOI:** [10.5281/zenodo.23285748](https://doi.org/10.5281/zenodo.23285748)  
**Zenodo:** https://zenodo.org/records/23285748

---

## Overview

Study of the elementary field  
$Z(x) = x^{-5}\ln(x)\sin(2\pi/x)e^{-x/21}$  
on the Riemann critical line $x = \tfrac12 + it$.

**Main results:**
1. 8 numerical zeros on the critical line, $t \in (0,60]$.
2. Statistical independence from Riemann zeros (KS $p=0.75$).
3. Asymptotic coefficient $C = 2\pi e^{-1/42} \approx 6.1358$.

---

## Files

### Main paper
| File | Description |
|------|-------------|
| `jabri_5.tex` | LaTeX source of the paper |
| `jabri_5.pdf` | Compiled PDF |
| `jabri_5.ipynb` | Zero-search notebook (80 DPS) |
| `jabri_5.png` | Figure 1 — zeros on critical line |

### Appendix C — Independence Test
| File | Description |
|------|-------------|
| `wells/Wells.ipynb` | Statistical test code |
| `wells/jabri_v2_appendix.png` | Figure C1 |

### Appendix D — Asymptotic Coefficient
| File | Description |
|------|-------------|
| `wells/appendix-d.ipynb` | Extraction code |
| `wells/appendix-d.png` | Figure D1 |
| `wells/appendix-d_full.csv` | 100 sampled points |
| `wells/appendix-d_summary.csv` | Summary statistics |

---

## Reproducing

```bash
pip install mpmath numpy matplotlib scipy pandas

# Run each notebook top-to-bottom
jupyter notebook jabri_5.ipynb
jupyter notebook wells/Wells.ipynb
jupyter notebook wells/appendix-d.ipynb

# Compile the paper (needs jabri_5.png and jabri_appendix_D.png in root)
pdflatex jabri_5.tex
pdflatex jabri_5.tex