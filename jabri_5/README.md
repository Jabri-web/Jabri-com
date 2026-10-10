# jabri_5

**On the Zeros of the Field**
`Z(x) = x⁻⁵ · ln(x) · sin(2π/x) · e^(-x/21)`

Author: **Abdulla M. N. Al-Jabri**
Independent Researcher — Sana'a, Yemen
jabri62018@gmail.com

---

## Overview

A short mathematical note on the elementary field `Z(x)`,
studied on the positive real axis and on the Riemann critical
line `x = 1/2 + i·t`.

## Result

**Analytic zeros on `x > 0`:**

    w_n = 2/n,    n = 1, 2, 3, ...

The zero set is exactly `{2/n : n ∈ ℕ}`. Proof: the factor
`sin(2π/x)` vanishes iff `2π/x = nπ` iff `x = 2/n`.

**Numerical zeros on the critical line** (`t ∈ [0, 60]`, 80-digit):

| Root | t              | Interval     |
|------|----------------|--------------|
| R₁   | 0.0907486257   | (0, 1)       |
| R₂   | 0.2196313827   | (0, 1)       |
| R₃   | 0.3403140486   | (0, 1)       |
| R₄   | 0.4798481018   | (0, 1)       |
| R₅   | 0.6703777044   | (0, 1)       |
| R₆   | 0.9957246005   | (0, 1)       |
| R₇   | 1.8809618716   | outlier      |
| R₈   | 15.0539247442  | far outlier  |

## Files

| File            | Description                              |
|-----------------|------------------------------------------|
| `jabri_5.pdf`   | Compiled paper (3 pages)                 |
| `jabri_5.tex`   | LaTeX source                             |
| `jabri_5.ipynb` | Reproduces the 8 numerical zeros         |
| `jabri_5.csv`   | Numerical output                         |
| `jabri_5.png`   | Plot of Im[Z(1/2 + i·t)] over t ∈ [0,60] |

## Reproduce

Open `jabri_5.ipynb` in Jupyter or Colab. Requires:

    pip install mpmath numpy pandas matplotlib

Run all cells. The script evaluates `Im[Z(1/2 + i·t)]` at 80-digit
precision, brackets sign changes with step `0.005`, and refines
each zero by a secant solver. Runtime ≈ 15 seconds.

## Citation

If you use this note, please cite:

    Al-Jabri, A. M. N. (2026).
    On the Zeros of the Field Z(x) = x⁻⁵ ln(x) sin(2π/x) e^(-x/21).
    Zenodo. https://doi.org/10.5281/zenodo.XXXXXXX

## License

CC BY 4.0

---

## نظرة عامة (بالعربية)

ملاحظة رياضية قصيرة حول الدالة الأولية `Z(x) = x⁻⁵ · ln(x) · sin(2π/x) · e^(-x/21)`
على المحور الحقيقي الموجب وعلى الخط الحرج لريمان `x = 1/2 + i·t`.

**النتائج:**

- **برهان تحليلي:** أصفار `Z` على `x > 0` هي بالضبط `w_n = 2/n`.
- **بحث عددي:** ثمانية أصفار على الخط الحرج في `t ∈ [0, 60]`،
  ستة منها في `(0, 1)` واثنان خارجها.

**الملفات:** الورقة (pdf/tex)، الكود (ipynb)، البيانات (csv)، الرسم (png).

**التشغيل:** افتح `jabri_5.ipynb` في Jupyter أو Colab، وشغّل كل الخلايا.

---

**Sana'a, Yemen — October 2026**