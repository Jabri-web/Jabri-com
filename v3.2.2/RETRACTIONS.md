# Retractions: Jabri-RiemannOS v3.2.1 → v3.2.2

**Date:** 9 May 2026
**Author:** Abdulla Al-Jabri (ORCID: 0009-0003-3319-3822)
**Supersedes:** v3.2.1 (DOI: 10.5281/zenodo.19644688)

---

## Purpose

This document records, in plain text, every claim from v3.2.1 that has been
withdrawn or corrected in v3.2.2. All values in the "Reality" column are
outputs of `jabri-zx-v3.2.2.py`, not inputs. The predecessor version is
retained on Zenodo for historical record only.

---

## 1. Redefinition of the Mother Function

**v3.2.1 claim:**
    Z_t(x) = Z(x) + C + A
    with Z(x) = x^2 ln(x) sin(2π · 10^15 x) exp(-10^10 x)

**v3.2.2 correction:**
    Z(x) = -Σ_k 2x / (x^2 + γ_k^2)

where γ_k are the imaginary parts of nontrivial Riemann zeta zeros.

The previous form contained hand-inserted exponents 10^15 and 10^10 with no
derivation. The new form has no free parameters. It is the standard kernel
of the Riemann–Weil explicit formula (Weil 1952; Edwards 1974), not a new
mathematical object.

---

## 2. Full Retraction Table

| # | Claim in v3.2.1                                    | Reality in v3.2.2 (code output)                    |
|---|----------------------------------------------------|----------------------------------------------------|
| 1 | C = 1.2 = Z(12)                                    | Z(12) = -0.243374. C was hand-inserted.            |
| 2 | A = Z'(12) calibrates H_0 = 67.4                   | Z'(12) = -1.1139e-2. No H_0 derived.               |
| 3 | JR = ∞ (no critical points)                        | Z'(x) = 0 at x_c ≈ 27.817274. JR claim is false.   |
| 4 | G ∝ 1/Z' = 6.67e-11                                | 1/Z'(12) = -89.76. Diverges at x_c. Not G.         |
| 5 | w = -1.03 exactly                                  | w_proxy(32.935) = -1.01623. Close, not equal.      |
| 6 | Zero parameters solve Hubble, G, α                 | No physical quantity derived from Z(x) yet.        |
| 7 | Element 119 half-life = 100,000 years              | Not derived from Z(x). Retracted.                  |
| 8 | G(LHC)/G = 0.999999                                | Not derived from Z(x). Retracted.                  |
| 9 | Unified Lagrangian for 4 forces                    | Not written. Claim retracted.                      |
| 10| Riemann zeros = quantum vacuum resonances          | Not established. Speculative. Retracted.           |
| 11| Planck units derived from γ_1, γ_2 only            | Not derived. Retracted.                            |
| 12| "Zero free parameters"                             | v3.2.2 satisfies this; v3.2.1 did not.             |

---

## 3. Numerical Values in v3.2.2 (verified)

| Quantity           | Value              | Source                    |
|--------------------|--------------------|---------------------------|
| Z(12)              | -0.243374          | jabri-zx-v3.2.2.py        |
| Z'(12)             | -1.1139e-2         | jabri-zx-v3.2.2.py        |
| Z''(12)            |  1.35066e-3        | jabri-zx-v3.2.2.py        |
| x_c (Z' = 0)       |  27.817274         | bisection, tol 1e-12      |
| Z(x_c)             | -0.288...          | jabri-zx-v3.2.2.py        |
| w_proxy(32.935)    | -1.01623           | jabri-zx-v3.2.2.py        |

Convergence: Z(12) stabilizes to -0.243374 for N ≥ 20 zeros
(Δ < 3e-4 between N=20 and N=30).

---

## 4. Notation Correction

**v3.2.1:** w(x) = -1 + Z'''(x)/Z'(x) labeled as "Equation of State".

**v3.2.2:** renamed to **w_proxy(x)**. This quantity has no derived relation
to the dark-energy equation of state. It is reported for reference only and
will be removed in future versions unless a derivation is found.

---

## 5. What Remains After Retraction

- A well-defined real-analytic function Z(x) with no free parameters.
- A reproducible Python verification script.
- Numerical values that any reader can recompute.
- An honest statement: **no physical quantity is derived from Z(x)**.

This is a technical note in computational mathematics, not a physical theory.

---

## 6. What Would Restore the Physical Claims

The following would be required for any claim of physical derivation:

1. A functional F[Z] yielding G with correct dimensions [L^3 M^-1 T^-2],
   without inserting ħc/m_p^2 or any other hand-chosen constant.
2. One falsifiable prediction that differs from the Standard Model or ΛCDM
   by a measurable amount, derived from Z(x) alone.
3. A principled reason why this Z(x), and not any other f(γ_k).

Until (1), (2), and (3) are satisfied, no physical claim is made.

---

## 7. Statement of Good Faith

The author invites criticism and will publish further retractions if
warranted. The purpose of this document is to record the correction of
errors transparently, so that future work — by the author or by others —
does not repeat them.

---

## 8. References

- A. Weil, *Sur les "formules explicites" de la théorie des nombres premiers*,
  Comm. Sém. Math. Univ. Lund (1952), 252–265.
- H. M. Edwards, *Riemann's Zeta Function*, Academic Press, 1974.

---

*All numbers above are outputs of jabri-zx-v3.2.2.py, not inputs.*
*Truth over beauty.*