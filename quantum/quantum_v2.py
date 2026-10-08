"""
Non-circular CHSH test of real-valued Mother Function Z(x)
V2 Constraint Paper - Sundus Theory
quantum_v2.py - reproduces Table 1 and Figure paper2-figure.png
Author: Abdulla Al-Jabri - jabri62018@gmail.com
Result: S_Z = 1.82 < 2 (Bell local bound)
"""

import numpy as np
from scipy.integrate import trapezoid
import matplotlib.pyplot as plt

# 1. تعريف الدالة الأم Z(x)
def Z(x, xp=1.22):
    x = np.asarray(x, float)
    res = np.zeros_like(x)
    m = x > 1e-6
    res[m] = (x[m]**5) * np.log(x[m]) * np.sin(2*np.pi/x[m]) * np.exp(-x[m]/xp)
    return res

# شبكة التكامل - غير دائرية: x منفصل تماما عن زوايا القياس a,b
x_grid = np.linspace(0.05, 30, 200000)
p = Z(x_grid)**2
p /= trapezoid(p, x_grid) # p(x)=|Z|^2 / norm

# 2. نموذج المتغير الخفي المحلي
def m_func(x, ang):
    """m_a(x)=sign[sin(2pi/x + a)]"""
    return np.sign(np.sin(2*np.pi/x + ang))

def E_Z(a, b):
    """E(a,b)=∫ p(x) m_a(x) m_b(x) dx -> محلي بالضرورة"""
    return trapezoid(p * m_func(x_grid, a) * m_func(x_grid, b), x_grid)

# 3. الجدول غير الدائري
print("=== Table 1: Non-circular test ===")
angles_deg = [0, 22.5, 45, 67.5, 90, 112.5, 135, 157.5, 180]
for deg in angles_deg:
    th = np.deg2rad(deg)
    ez = E_Z(0, th)
    eqm = -np.cos(th)
    print(f"{deg:6.1f} deg | E_QM={eqm:7.4f} | E_Z={ez:7.4f}")

# 4. CHSH S
a, ap, b, bp = 0, np.pi/2, np.pi/4, -np.pi/4
S_Z = E_Z(a, b) - E_Z(a, bp) + E_Z(ap, b) + E_Z(ap, bp)
print(f"\nS_Z = {S_Z:.4f} (local bound 2, QM 2.828)")
print("The numerical value S_Z = 1.82 is not a discovery; it is the expected consequence of Bell's theorem applied to a local hidden-variable model.")

# 5. الرسم
thetas = np.deg2rad(np.linspace(0, 180, 361))
eqm_curve = -np.cos(thetas)
ez_curve = np.array([E_Z(0, th) for th in thetas])

plt.figure(figsize=(8, 5))
plt.plot(np.rad2deg(thetas), eqm_curve, 'k--', label='QM E=-cos(theta)', linewidth=2)
plt.plot(np.rad2deg(thetas), ez_curve, 'b-', label='Z(x) local model E_Z', linewidth=2)
plt.xlabel('Theta (deg) a-b'); plt.ylabel('Correlation E')
plt.title('V2 Constraint: Real-valued Z(x) is Local (S_Z=1.82 < 2)')
plt.legend(); plt.grid(True, alpha=0.3); plt.tight_layout()
plt.savefig('paper2-figure.png', dpi=300)
plt.savefig('quantum_v2-figure.png', dpi=300)