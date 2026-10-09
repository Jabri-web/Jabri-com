"""
Generates figure1.png and Z_values.csv for Jabri-RiemannOS v3.2.2.
Run:  python make_figure.py
"""

import numpy as np
import matplotlib
matplotlib.use("Agg")
import matplotlib.pyplot as plt
import csv

GAMMAS = np.array([
    14.134725141734693, 21.022039638771555, 25.010857580145688,
    30.424876125859513, 32.935061587739189, 37.586178158825671,
    40.918719012147495, 43.327073280914999, 48.005150881167159,
    49.773832477672302, 52.970321477714460, 56.446247697063394,
    59.347044002602353, 60.831778524609809, 65.112544048081606,
    67.079810529494173, 69.546401711173979, 72.067157674481907,
    75.704690699083933, 77.144840068874805, 79.337375020249367,
    82.910380854086030, 84.735492980517050, 87.425274613125229,
    88.809111207634465, 92.491899270558484, 94.651344040519886,
    95.870634228245309, 98.831194218193692, 101.317851005731391,
])

def Z(x):    return -np.sum(2.0*x / (x**2 + GAMMAS**2))
def Zp(x):   return -np.sum(2.0*(GAMMAS**2 - x**2) / (x**2 + GAMMAS**2)**2)
def Zpp(x):  return -np.sum(4.0*x*(x**2 - 3*GAMMAS**2) / (x**2 + GAMMAS**2)**3)
def Zppp(x): return  np.sum(12.0*(x**4 - 6*x**2*GAMMAS**2 + GAMMAS**4) / (x**2 + GAMMAS**2)**4)

def w_proxy(x):
    zp = Zp(x)
    return np.nan if abs(zp) < 1e-12 else -1.0 + Zppp(x)/zp

# --- Figure ---
xs = np.linspace(5.0, 45.0, 2000)
Zs = np.array([Z(x)  for x in xs])
Zps = np.array([Zp(x) for x in xs])

xc = 27.817274  # from verify script

fig, ax = plt.subplots(figsize=(8, 4.5))
ax.plot(xs, Zs,  label=r"$Z(x)$",   color="navy")
ax.plot(xs, Zps, label=r"$Z'(x)$", color="darkred", linestyle="--")
ax.axhline(0, color="grey", linewidth=0.5)
ax.plot([xc], [Z(xc)], "o", color="red", markersize=7,
        label=fr"$Z'=0$ at $x_c\approx{xc:.3f}$")
ax.set_xlabel(r"$x$")
ax.set_ylabel(r"$Z,\ Z'$")
ax.set_title("Mother function and its derivative (Jabri-RiemannOS v3.2.2)")
ax.legend(loc="upper right", fontsize=9)
ax.grid(alpha=0.3)
plt.tight_layout()
plt.savefig("figure1.png", dpi=180)
print("wrote figure1.png")

# --- CSV ---
rows = []
for x in [12.0, 20.0, 27.817274, 32.935062, 40.0]:
    rows.append((x, Z(x), Zp(x), Zpp(x), w_proxy(x)))

with open("Z_values.csv", "w", newline="") as f:
    w = csv.writer(f)
    w.writerow(["x", "Z", "Z_prime", "Z_double_prime", "w_proxy"])
    for r in rows:
        w.writerow([f"{r[0]:.6f}", f"{r[1]:.9f}",
                    f"{r[2]:.6e}", f"{r[3]:.6e}",
                    "nan" if np.isnan(r[4]) else f"{r[4]:.6f}"])
print("wrote Z_values.csv")