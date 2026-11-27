أبشر يا دكتور، هذا هو `README.md` 👇

انسخه في جذر المشروع، وانسخ نفس المحتوى في `/oe/README.md` لو حبيت.
# OE = Odd-Even | الزوجي والفردي

> **صيغة الجبري**
> **Z + C + A = 1**
> الزوجي + الفردي + الشبكة = الواحد الأحد
> Even + Odd + Network = The One

👁️ 👀 🌎 👁️ 👀

[🏝️ الواحة / Oasis](https://jabri-com.vercel.app/) | [🇸🇦 عربي /oe/oe.html](https://jabri-com.vercel.app/oe/oe.html) | [🇬🇧 English /oe/oe-en.html](https://jabri-com.vercel.app/oe/oe-en.html)

---

## 🔒 Def. 0.0 - Notation Lock - قفل الترميز

**Never changes in all files. لا يتغير أبداً في كل ملفات `/oe/`**

| Symbol / الرمز | Direction / الاتجاه | Formula / الصيغة | Example / مثال |
| --- | --- | --- | --- |
| `3n+1` | Down ↓ نازل | `C(n) = 3n+1` if odd / فردي | `5 → 16` |
| `n/2` | Down ↓ نازل | `C(n) = n/2` if even / زوجي | `16 → 8` |
| `2n` | Up ↑ صاعد | Inverse of `n/2` - always / دائماً | `8 → 16` |
| `(n-1)/3` | Up ↑ صاعد | Inverse of `3n+1` - if `(n-1) mod 3 = 0` | `16 → 5` |
| `(2^k n -1)/3` | Up ↑ صاعد | Inverse of `S` - general case / الحالة العامة | `1 → 5` |

### Formula / الصيغة

S(n) = n / 2^ν₂(n)         if n even / زوجي
S(n) = (3n+1) / 2^ν₂(3n+1) if n odd / فردي, n > 1

S⁻¹(n) = {2n} ∪ {(2^k n -1)/3 | 2^k n ≡ 1 (mod 3)}

---

## 📂 Files / الملفات - `/oe/oe-files.txt`

/oe/
├── http://README.md              # هذا الملف - This file
├── http://oe-files.txt           # فهرس الملفات - File index
├── http://oe-proof.md            # الإثبات الكامل - عربي
├── http://oe-proof-en.md         # Full Proof - English
├── http://oe.md                  # الشرح - عربي
├── http://oe.ipynb               # كود - عربي
├── http://oe-en.ipynb            # Code - English
├── http://oe.html                # الصفحة - عربي
├── http://oe-en.html             # Page - English
├── http://oe-tree1.png           # رسمتك اليدوية - رقمية / Handwritten tree, digitized
├── http://oe-tree2.png           # شجرة 2
└── http://oe-tree.png            # الشبكة الكاملة / Full network

---

## 🧾 Proofs / الإثباتات

| File | Language | Link |
| --- | --- | --- |
| `oe-proof.md` | 🇸🇦 عربي | [oe-proof.md](https://jabri-com.vercel.app/oe/oe-proof.md) |
| `oe-proof-en.md` | 🇬🇧 English | [oe-proof-en.md](https://jabri-com.vercel.app/oe/oe-proof-en.md) |

**Summary / الخلاصة:**

| Step / الخطوة | Status / الحالة |
| --- | --- |
| Definition of `S` and `T*` / تعريف `S` و `T*` | ✅ Complete / مكتمل |
| Inverse lemma `m = (2^k n -1)/3` / ليما العكس | ✅ Complete / مكتمل |
| Equivalence of network and conjecture / تكافؤ الشبكة والحدسية | ✅ Complete / مكتمل |
| Completeness = Conjecture / الاكتمال = الحدسية | ✅ Complete / مكتمل |
| Lyapunov function / دالة ليابونوف | ❌ Open / مفتوح - the conjecture itself |

Honest conclusion / الاستنتاج الصادق: The reverse network gives an elegant equivalent formulation, but does not by itself produce a proof. الشبكة تعطي صياغة مكافئة أنيقة، لكنها لا تنتج إثباتاً وحدها.

---

## 💻 Code / الكود - Quick Start

```bash
# Install / تثبيت
pip install networkx matplotlib

# Run / تشغيل
jupyter notebook oe/oe.ipynb
# or / أو
jupyter notebook oe/oe-en.ipynb
def nu2(x: int) -> int:
    k = 0
    while x % 2 == 0:
        x //= 2
        k += 1
    return k

def S(n: int) -> int:
    if n % 2 == 0:
        return n // 2
    return (3 * n + 1) // (2 ** nu2(3 * n + 1))

# Examples / أمثلة
print(S(27))  # 41
print(S(5))   # 1
print(S(16))  # 8
*Verification / التحقق:* For every edge `n -> m` in the tree: `S(n) = m`. لكل حافة `n -> m`: `S(n) = m`.

---

## 🌳 Trees / الأشجار
Image	Description / الوصف
`oe-tree1.png`	رسمتك اليدوية بعد التحويل الرقمي / Your handwritten tree, digitized - `1 → 2 → 4 → 8 → 16 → 5 → 10 → 20 → 40`
`oe-tree2.png`	شجرة 2 / Tree 2
`oe-tree.png`	الشبكة الكاملة / Full network
---

## 🌐 Pages / الصفحات
Page	Link
🇸🇦 Arabic / عربي	https://jabri-com.vercel.app/oe/oe.html
🇬🇧 English	https://jabri-com.vercel.app/oe/oe-en.html
Both pages include: Notation Lock + Interactive Network + All file links.
الصفحتين فيها: قفل الترميز + شبكة تفاعلية + كل روابط الملفات.

---

## 🤝 Contributing / المساهمة

1. Do not change Def. 0.0 without updating *all* files. لا تغير قفل الترميز بدون تحديث *كل* الملفات.
2. Arabic and English files must stay mirrors. الملف العربي والإنجليزي لازم يبقوا مرآة لبعض.
3. Every edge must satisfy `S(n) = m`. كل حافة لازم تحقق `S(n) = m`.

---

## 📜 License / الرخصة

Open for learning and research. مفتوح للتعلم والبحث.

---

👁️ 👀 🌎 👁️ 👀 | OE = Odd-Even | `/oe/` | https://jabri-com.vercel.app/

---

وبكذا يا دكتور، صار عندك **المشروع كامل 100%** ✅

| الملف | الحالة |
| --- | --- |
| `README.md` | ✅ هذا الملف - جاهز |
| `/oe/oe-proof.md` | ✅ |
| `/oe/oe-proof-en.md` | ✅ |
| `/oe/oe.html` | ✅ |
| `/oe/oe-en.html` | ✅ |
| `/oe/oe.ipynb` | ✅ |
| `/oe/oe-en.ipynb` | ✅ |
| `/oe/oe-tree1.png` | ✅ |

ألف تحية وسلام لك، الله يحفظك 🌹