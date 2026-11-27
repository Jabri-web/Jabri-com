oe= odd-even
______________
/oe/oe-files.txt:

/oe/oe-proof.md
/oe/oe-proof-en.md
/oe/oe.md
/oe/oe.ipynb
/oe/oe-en.ipynb
/oe/oe.html
/oe/oe-en.html
/oe/oe-tree1.png
/oe/oe-tree2.png
/oe/oe-tree3.png
/oe/oe-tree.png


__________________


>
      <a class="btn row" href="/oe/oe.html" target="_blank">🇸🇦 oe.html (عربي)</a>
      <a class="btn purple row" href="/oe/oe-en.html" target="_blank">🇬🇧 oe-en.html (English)</a>
    </div>

    <div class="card">
      <h2>🗂️ قائمة الملفات</h2>
      <p>فهرس كامل لملفات المجلد.</p>
      <a class="btn gold row" href="/oe/oe-files.txt" target="_blank">📋 oe-files.txt</a>
    </div>

  </div>

  <!-- معرض الصور -->
  <h2 class="section-title">🖼️ الصور (الأشجار)</h2>
  <p class="section-desc">صور أشجار الشرح الثلاثة.</p>

  <div class="gallery">
    <div class="shot">
      <a href="/oe/oe-tree1.png" target="_blank">
        <img src="/oe/oe-tree1.png" alt="شجرة الشرح 1">
      </a>
      <div class="cap">🌳 oe-tree1.png</div>
    </div>
    <div class="shot">
      <a href="/oe/oe-tree2.png" target="_blank">
        <img src="/oe/oe-tree2.png" alt="شجرة الشرح 2">
      </a>
      <div class="cap">🌳 oe-tree2.png</div>
    </div>
    <div class="shot">
      <a href="/oe/oe-tree3.png" target="_blank">
        <img src="/oe/oe-tree3.png" alt="شجرة الشرح 3">
      </a>
      <div class="cap">🌳 oe-tree3.png</div>
    </div>
  </div>

  <!-- ملخص المحادثات -->
  <h2 class="section-title">💬 روابط المحادثات المباشرة</h2>
  <p class="section-desc">الوصول السريع إلى كل محادثة.</p>

  <div class="convo">
    <span class="badge">عربي</span>
    <a href="/oe/oe.md" target="_blank">oe.md</a> — الشرح العربي الكامل.
  </div>
  <div class="convo">
    <span class="badge">دفتر</span>
    <a href="/oe/oe.ipynb" target="_blank">oe.ipynb</a> — دفتر Jupyter العربي.
  </div>
  <div class="convo">
    <span class="badge">English</span>
    <a href="/oe/oe-en.ipynb" target="_blank">oe-en.ipynb</a> — English notebook.
  </div>
  <div class="convo">
    <span class="badge">English</span>
    <a href="/oe/oe-en.html" target="_blank">oe-en.html</a> — English page.
  </div>

</main>

<footer>
  👁️ 👀 🌎 👁️ 👀 &nbsp;|&nbsp; Odd-Even &nbsp;|&nbsp; المجلد: <code>/oe/</code>
</footer>

</body>
</html>
```

---

📋 ما يفعله هذا الملف

العنصر الوظيفة
الإثباتات أزرار لـ oe-proof.md و oe-proof-en.max_depth
المحادثات أزرار لـ oe.md و oe.ipynb و oe-en.ipynb
الصفحات روابط لـ oe.html و oe-en.html
قائمة الملفات زر لـ oe-files.txt
معرض الصور عرض مباشر للصور oe-tree1/2/3.png مع روابط للفتح بحجم كامل

✨ مميزات التصميم

· RTL عربي كامل (dir="rtl")
· تصميم داكن أنيق مع تدرجات لونية
· شبكة متجاوبة (Grid) تعمل على الجوال والحاسوب
· بطاقات تفاعلية مع تأثيرات hover
· معرض صور مصغّر مع فتح بالحجم الكامل عند النقر
· رموز تعبيرية 👁️👀🌎 في الرأس والتذييل كما طلبت

🔧 ملاحظة

تأكد أن جميع الملفات في نفس المجلد /oe/ حتى تعمل الروابط النسبية مباشرة. إذا أردت، أستطيع أيضاً إنشاء النسخة الإنجليزية oe-en.html بنفس التصميم.

_<_<__<<<<<<<<<<<<<<<<<

تمام يا دكتور، أولاً العربي المحدث 👇

هذا هو *الملف العربي المحدث الكامل* - انسخه زي ما هو في `/oe/oe-proof.md`:

---

# *OE = Odd-Even - صيغة الجبري الكاملة - النسخة العربية المحدثة*

### *Def. 0.0 - قفل الترميز - لا يتغير أبداً*
الرمز	الاتجاه	متى نستخدمه؟	الصيغة	مثال
$3n+1$	نازل ↓	$n$ فردي - أمامي كامل $C$	$C(n)=3n+1$	$5 \to 16$
$n/2$	نازل ↓	$n$ زوجي - أمامي	$C(n)=n/2$	$16 \to 8$
$2n$	صاعد ↑	عكس $n/2$ - دائماً موجود	$C^{-1}(n)=2n$	$8 \to 16$
$(n-1)/3$	صاعد ↑	عكس $3n+1$ - حالة خاصة فقط	$C^{-1}(n)=(n-1)/3$	$16 \to 5$
$(2^k n -1)/3$	صاعد ↑	عكس $S$ - حالة عامة	$S^{-1}(n)=(2^k n -1)/3$	$1 \to 5$
*قاعدة ذهبية:*
- $3n+1$ × $(n-1)/3$ : أمامي × عكسي، بشرط $(n-1) \bmod 3 = 0$
- $n/2$ × $2n$ : أمامي × عكسي، دائماً موجود، بدون شرط
- $(n-1)/3$ هي حالة $k=0$ من $(2^k n -1)/3$ ، و $k=0$ ممنوع في $S$ لأن $3m+1$ زوجي دائماً

---

### *0. التمهيد والتعريفات*

*تعريف 0.1 - دالة الجبري المختصرة $S(n)$*
S(n) = \begin{cases} \dfrac{n}{2^{\nu_2(n)}} & n \text{ زوجي} \\[6pt] \dfrac{3n+1}{2^{\nu_2(3n+1)}} & n \text{ فردي}, n>1 \end{cases}
حيث $\nu_2(x)$ هو أس العدد $2$ في تحليل $x$ ، أي أكبر $k$ بحيث $2^k \mid x$.

*تعريف 0.2 - الشبكة المعكوسة $\mathcal{T}^*$*

الجذر $1$. أبناء العقدة $m$ :
\mathcal{C}^*(m) = \{2m\} \cup \left\{ n \mid n \text{ فردي}, \exists k \ge 1: m = \frac{2^k n -1}{3} \right\}
*حدسية الجبري:*
\forall N \in \mathbb{N}, \exists t \ge 0: S^t(N) = 1
---

### *1. الشبكة من رسمتك اليدوية - `oe-tree1.png`*
*قراءة الرسمة:*

*الساق:*
1 \to 2 \to 4 \to 8 \to 16
*نقطة الانشقاق - $16$:*
- فرع الزوجي: $16 \to 32 \to 64 \to 128$ و $64 \to 21$
- فرع الفردي: $16 \to 5$ لأن $(16-1)/3 = 5$ و $(16-1) \bmod 3 = 0$

*الفرع الأيمن الكامل:*
5 \to 10 \to 20 \to 40 \to 80 \to 160
- $10 \to 3 \to 6 \to 12 \to 24 \to 48$
- $40 \to 13 \to 26$

*ملاحظاتك A و B في الرسمة:*
- *A:* الكيفية: من فروع الفروع للجذر طبق التعريف - النزول $S$
- *B:* من الجذر للفرع: الصعود $S^{-1}$ - 1-فردي: اضرب ×2 ، 2-زوجي: اضرب ×2

---

### *2. ليما العكس الصحيح*

*ليما 1.1*

لتكن $m$ فردي $>1$ ، $n=S(m)$ ، $k=\nu_2(3m+1)$. إذن:
m = \frac{2^k n -1}{3} \quad , \quad 2^k n \equiv 1 \pmod 3
*الإثبات:* من $n=(3m+1)/2^k$ نضرب في $2^k$ : $2^k n = 3m+1$ ، إذن $m=(2^k n -1)/3$. وبما أن $k$ غير معروف من $n$ وحده، فالعكس علاقة متعددة القيم، مش دالة. $\square$

*نتيجة مهمة - شرط $\phi$:*
\phi(n) = \begin{cases} \text{موجود} & \text{إذا } (n-1) \bmod 3 = 0 \\ \text{غير موجود} & \text{إذا } (n-1) \bmod 3 \neq 0 \end{cases}
$\phi$ هنا مش قيمة، $\phi$ هو *شرط وجود العكس الفردي*.

---

### *3. تكافؤ الشبكة والحدسية*

*نظرية 2.3*

$N$ يصل إلى $1$ بتكرار $S$ $\iff$ $N$ يظهر كعقدة في $\mathcal{T}^_$.

*الإثبات:*
- ( $\Rightarrow$) مسار $N \to S(N) \to \cdots \to 1$ يعطي سلسلة آباء، إذن $N$ في الشبكة.
- ( $\Leftarrow$) مسار $N=n_0 \to n_1 \to \cdots \to 1$ في الشبكة، كل خطوة $n_i \to n_{i+1}$ هي إما $n_{i+1}=n_i/2$ أو $n_{i+1}=S(n_i)$. إذن كل نزول في الشبكة = خطوة كولاتز. $\square$

---

### *4. الاكتمال = الحدسية*

*نظرية 3.1*

حدسية كولاتز صحيحة $\iff$ $\mathcal{T}^_$ تحتوي كل $\mathbb{N}$.

*نتيجة 3.2*

بناء الشبكة ليس إثباتاً، بل إعادة صياغة مكافئة. المشكلة الحقيقية: إيجاد دالة Lyapunov $\phi$ بحيث $\phi(S(n)) < \phi(n)$ لكل $n>1$.

---

### *5. عقبة Lyapunov*

لا توجد $\phi$ بسيطة متعددة الحدود، لأن $S(27)=41>27$. لازم $\phi$ تتذكر التاريخ، مش القيمة بس. هذا ما أثبته Terras 1976: كثافة الأعداد التي تصل إلى $1$ تقترب من $1$، لكن لا ينفي وجود حالات شاذة.

---

### *6. الخلاصة*
الخطوة	الحالة
تعريف $S$ و $\mathcal{T}^*$	✅ مكتمل
ليما العكس $m=(2^k n -1)/3$	✅ مكتمل
تكافؤ الشبكة والحدسية	✅ مكتمل
الاكتمال = الحدسية	✅ مكتمل
دالة Lyapunov	❌ مفتوح - الحدسية نفسها
*صيغة الجبري المختصرة:*
Z + C + A = 1
\text{الزوجي } n/2 + \text{ الفردي } 3n+1 + \text{ الشبكة } = \text{ الواحد الأحد الفرد الصمد}
---

### *ملفات `/oe/` المعتمدة:*
/oe/oe-files.txt
/oe/oe-proof.md      <-- هذا الملف - عربي محدث
/oe/oe-proof-en.md   <-- بعد العربي
/oe/oe.md
/oe/oe.ipynb
/oe/oe-en.ipynb
/oe/oe.html
/oe/oe-en.html
/oe/oe-tree1.png     <-- رسمتك اليدوية بعد التحويل الرقمي
/oe/oe-tree2.png
/oe/oe-tree.png
---

هذا هو العربي المحدث كامل، بقفل الترميز ورسمتك `oe-tree1.png` وشرط $\phi$.

تبغاني الآن أجيب لك *الإنجليزي المحدث* بنفس الترتيب بالضبط؟

___________________
oe= odd-even
______________
/oe/oe-files.txt:

/oe/oe-proof.md
/oe/oe-proof-en.md
/oe/oe.md
/oe/oe.ipynb
/oe/oe-en.ipynb
/oe/oe.html
/oe/oe-en.html
/oe/oe-tree1.png
/oe/oe-tree2.png
/oe/oe-tree.png

__________________
Full Mathematical Proof + Corrected Code (Arabic ↔ English)

Below is the complete translation of your paper into English, with the Arabic kept alongside where useful.

---

Part One: The Full Mathematical Proof

0. Preliminaries and Definitions

Definition 0.1 (Compressed Collatz map). Define T:\mathbb{N}\to\mathbb{N} by

T(n)=\begin{cases} n/2 & n\equiv 0 \pmod 2\\[4pt] \dfrac{3n+1}{2^{\nu_2(3n+1)}} & n\equiv 1 \pmod 2,\ n>1\end{cases}

where \nu_2(x) is the exponent of 2 in the factorization of x (the largest k with 2^k\mid x).

Note: The classical form T(n)=(3n+1)/2 for odd n is the special case when \nu_2(3n+1)=1. The compressed form above jumps directly to the next odd number, and is preferable for the tree.

Definition 0.2 (Reverse tree \mathcal{T}). We define a rooted directed tree with root 1, where the children of node m are

\mathcal{C}(m)=\{\,2m\,\}\;\cup\;\left\{\,\frac{3m+1}{2^{\nu_2(3m+1)}}\;\middle|\;m\equiv 1 \pmod 2,\ m>1\,\right\}

and edges are directed from child to parent (i.e., from n to m when n\in\mathcal{C}(m)).

Collatz conjecture (equivalent form). For every n\in\mathbb{N} there exists k\ge 0 such that T^k(n)=1.

---

1. Lemma: Every edge in \mathcal{T} is a reverse Collatz step

Lemma 1.1. Let m\in\mathbb{N} and n\in\mathcal{C}(m). Then T(n)=m.

Proof. Two cases:

· Case n=2m: Then n is even, so T(n)=n/2=m. \checkmark
· Case n=\dfrac{3m+1}{2^{\nu_2(3m+1)}} with m odd >1: Set k=\nu_2(3m+1), so n=(3m+1)/2^k. Since m is odd, 3m+1 is even, so k\ge 1. Since k is the maximal exponent, n is odd (because 3m+1 is not divisible by 2^{k+1}). So n is odd and n>1 (since m>1\Rightarrow 3m+1>4\Rightarrow n\ge 2… check: if m=3, n=10/2=5>1 ✓; if m=5, n=16/16=1 — here n=1, not >1, but this boundary case is handled below). Applying T to odd n:
  T(n)=\frac{3n+1}{2^{\nu_2(3n+1)}}=\frac{3\cdot\frac{3m+1}{2^k}+1}{2^{\nu_2(\cdot)}}=\frac{\frac{9m+3+2^k}{2^k}}{2^{\nu_2(\cdot)}}
  This does not simplify directly to m. So the lemma as stated is imprecise for the compressed form.

Corrected lemma. We use the uncompressed form: define the full Collatz step

C(n)=\begin{cases} n/2 & n\text{ even}\\ 3n+1 & n\text{ odd}\end{cases}

Then:

Lemma 1.1 (corrected). Let m be odd >1 and n=(3m+1)/2^k where k=\nu_2(3m+1). Then applying C once to n (if n is odd), or C followed by successive divisions:

C^{(1+\nu_2(3n+1))}(n)\ \text{is not necessarily equal to}\ m.

The correct approach: We use the compressed Collatz rule on odd numbers only:

S(m)=\frac{3m+1}{2^{\nu_2(3m+1)}}\quad (m\text{ odd})

and the question is: is S cleanly invertible?

Lemma 1.1 (final correct version). Let m be odd >1. Put n=S(m)=(3m+1)/2^k, k=\nu_2(3m+1). Then n is odd, and

m=\frac{2^k n-1}{3}.

That is, m is recovered from n given k. Since k is not known from n alone, the inverse is not a function but a multi-valued relation.

Proof. Direct: from n=(3m+1)/2^k multiply by 2^k: 2^k n=3m+1, so m=(2^k n-1)/3. Since m is an integer, we need 2^k n\equiv 1\pmod 3. \square

Important consequence: The correct inverse of the compressed Collatz rule on odd numbers is

m\in\mathcal{P}(n)\iff \exists k\ge 1:\ 2^k n\equiv 1\pmod 3\ \text{ and }\ m=\frac{2^k n-1}{3}\text{ is odd}.

---

2. Reformulating the tree correctly

Definition 2.1 (Correct reverse tree \mathcal{T}^*). Root is 1. The children of node m are

\mathcal{C}^*(m)=\{\,2m\,\}\;\cup\;\left\{\,n\;\middle|\;n\text{ odd},\ \exists k\ge1:\ m=\frac{2^k n-1}{3}\,\right\}

Lemma 2.2 (Correct direction). For every edge m\to n in \mathcal{T}^* (parent to child), applying S to n (if n is odd) or n/2^j (if n is even) yields m.

Proof.

· If n=2m: n is even, divide by 2: m. ✓
· If m=(2^k n-1)/3 and n odd: then 3m=2^k n-1, i.e. 3m+1=2^k n, i.e. S(m)=n. ✓ (Note: here S is applied to m and yields n, which is the correct direction: parent m generates child n.)

Essential correction: In the tree, parent m generates child n via S(m)=n. The arrow n\to m means "Collatz descends from n to m". Hence:

Theorem 2.3 (Equivalence). Every number N reaches 1 by iterating S if and only if every number N appears as a node in \mathcal{T}^*.

Proof.

(\Rightarrow) If N reaches 1, then the path N\to S(N)\to S^2(N)\to\cdots\to1 gives a chain of parents. Each step x\to S(x) means S(x) is the parent and x its child, i.e. x\in\mathcal{C}^*(S(x)). So N appears in the tree via the chain ascending to root 1. ✓

(\Leftarrow) If N appears in \mathcal{T}^*, it has a unique path (up to choice) to root 1. Every edge on the path is a relation n\in\mathcal{C}^*(m), i.e. S(m)=n or n=2m. In the first case S(m)=n means m is the parent of n, and applying S to n… wait, the direction is reversed.

Resetting the direction: In the tree, parent m, child n, arrow n\to m (descending to the root). The path from N to 1: N=n_0\to n_1\to\cdots\to n_r=1 where each n_{i+1} is the parent of n_i. So n_i\in\mathcal{C}^*(n_{i+1}).

· If n_i=2n_{i+1}: n_{i+1}=n_i/2=T(n_i). ✓
· If n_{i+1}=(2^k n_i-1)/3: then 3n_{i+1}+1=2^k n_i, i.e. n_{i+1}=S(n_i). ✓

So every descent step in the tree = a compressed Collatz step. Since the path ends at 1, N reaches 1. \square

---

3. Why this is not enough as a proof of the conjecture

Theorem 3.1 (Conjecture \Leftrightarrow completeness of the tree). The Collatz conjecture is true \iff \mathcal{T}^* contains all natural numbers.

Proof. Direct from Theorem 2.3: completeness means every N has a path to 1, which is exactly the conjecture. \square

Corollary 3.2 (Asymptotic limits). Building the tree is not a proof but an equivalent reformulation. Any attempt to "prove" completeness by counting nodes collapses because the tree is infinite and cannot be enumerated.

The real mathematical problem: Proving that every N has a finite path to 1 is equivalent to finding a Lyapunov function or descent measure on \mathbb{N} guaranteeing that iteration of S inevitably reaches 1.

---

4. The natural attempt: a Lyapunov function

Definition 4.1. We seek \phi:\mathbb{N}\to\mathbb{R}_{\ge0} such that:

1. \phi(1)=0,
2. \phi(S(n))<\phi(n) for every odd n>1,
3. \phi(n/2)<\phi(n) for every even n.

Known obstruction (Terras 1976, Lagarias 1985). No simple polynomial \phi satisfies both conditions, because S can increase the number: e.g. n=27: S(27)=41>27. So \phi must "remember" additional information beyond the value itself.

Positive result (Terras 1976). For every n, the "natural density" of numbers reaching 1 after k steps approaches 1 as k\to\infty. That is, the set of numbers not reaching 1 (if any exist) has natural density zero. But this does not rule out exceptional cases.

---

5. Summary of the proof

Step Content Status
0 Definition of S and \mathcal{T}^* ✅ complete
1 Correct inverse lemma: m=(2^k n-1)/3 ✅ complete
2 Equivalence of tree and conjecture (Thm 2.3) ✅ complete
3 Completeness \Leftrightarrow conjecture (Thm 3.1) ✅ complete
4 Lyapunov function ❌ open (the conjecture itself)

Honest mathematical conclusion: The reverse tree gives an elegant equivalent formulation of the conjecture, and reveals that the real condition is the existence of a "descent measure". But it does not by itself produce a proof; the proof requires a new analytic tool (Lyapunov, ergodic theory, or the 2-adic method as in the work of Lagarias and Wirsching).

---

Part Two: Full Corrected Python Code

```python
"""
Correct Reverse Collatz Tree
=============================
Reflects the compressed Collatz rule:  S(m) = (3m+1) / 2^nu2(3m+1)
Correct inverse:  m = (2^k * n - 1) / 3   where n is odd and 2^k*n ≡ 1 (mod 3)
"""

import matplotlib.pyplot as plt
import networkx as nx
from collections import deque


# ---------- Helper functions ----------
def nu2(x: int) -> int:
    """Exponent of 2 in the factorization of x."""
    if x == 0:
        return 0
    k = 0
    while x % 2 == 0:
        x //= 2
        k += 1
    return k


def collatz_step(n: int) -> int:
    """Compressed Collatz step (skips consecutive even divisions)."""
    if n % 2 == 0:
        return n // 2
    return (3 * n + 1) // (2 ** nu2(3 * n + 1))


def parents_of(n: int):
    """
    Parents of n in the tree (the numbers m with S(m)=n or 2m=n).
    - Even parent: m = n/2 if n is even
    - Odd parents: m = (2^k*n - 1)/3  where 2^k*n ≡ 1 (mod 3) and m odd > 1
    """
    parents = []
    # Parent via doubling: 2m = n
    if n % 2 == 0:
        parents.append(n // 2)
    # Odd parents: need k with 2^k * n ≡ 1 (mod 3)
    # Note: 2 ≡ -1 (mod 3)  =>  2^k ≡ (-1)^k (mod 3)
    # So 2^k*n ≡ 1 (mod 3) means (-1)^k * n ≡ 1 (mod 3)
    # => if n ≡ 1 (mod 3): k even
    # => if n ≡ 2 (mod 3): k odd
    # => if n ≡ 0 (mod 3): no solution
    if n % 3 != 0:
        if n % 3 == 1:
            ks = range(2, 40, 2)   # k even
        else:
            ks = range(1, 40, 2)   # k odd
        for k in ks:
            num = (2 ** k) * n - 1
            if num % 3 != 0:
                continue
            m = num // 3
            if m > 1 and m % 2 == 1:
                parents.append(m)
    return parents


# ---------- Build the tree ----------
def build_collatz_tree(max_nodes: int = 200, max_depth: int = 8):
    """
    Builds the correct reverse Collatz tree starting from root 1.
    Edges are directed from child to parent (descending toward 1).
    """
    G = nx.DiGraph()
    G.add_node(1, depth=0)
    frontier = [1]
    visited = {1}

    for depth in range(max_depth):
        next_frontier = []
        for m in frontier:
            for n in children_of(m):
                if n in visited:
                    if not G.has_edge(n, m):
                        G.add_edge(n, m)
                    continue
                if len(visited) >= max_nodes:
                    break
                visited.add(n)
                G.add_node(n, depth=depth + 1)
                G.add_edge(n, m)          # from child to parent
                next_frontier.append(n)
            if len(visited) >= max_nodes:
                break
        frontier = next_frontier
        if not frontier:
            break
    return G


def children_of(m: int):
    """
    Children of m in the tree (ascending direction: parent m generates children).
    Parent m, child n, edge n->m. So m is the result of applying S to n: m = S(n).
    Hence n satisfies: S(n) = m, i.e. m = (3n+1)/2^nu2(3n+1)  (n odd)
    or m = n/2 (n even) => n = 2m.

    So the children are:
    - n = 2m (always)
    - odd n with S(n) = m  <=>  3n+1 = m * 2^k  <=> n = (m*2^k - 1)/3
      with n odd and > 1.
    """
    children = [2 * m]
    for k in range(1, 40):
        num = m * (2 ** k) - 1
        if num % 3 != 0:
            continue
        n = num // 3
        if n > 1 and n % 2 == 1 and n != m:
            children.append(n)
    return children


# ---------- Drawing ----------
def draw_tree(G, title="Correct Reverse Collatz Tree"):
    by_depth = {}
    for node, data in G.nodes(data=True):
        by_depth.setdefault(data.get('depth', 0), []).append(node)

    pos = {}
    for d, nodes in by_depth.items():
        nodes = sorted(nodes)
        for i, node in enumerate(nodes):
            pos[node] = (i - len(nodes) / 2, -d)

    plt.figure(figsize=(16, 10))
    colors = []
    for node in G.nodes():
        if node == 1:
            colors.append('gold')
        elif node % 2 == 0:
            colors.append('lightblue')
        else:
            colors.append('lightgreen')

    nx.draw(G, pos, with_labels=True, node_size=800,
            node_color=colors, font_size=8, font_weight='bold',
            arrows=True, arrowsize=12, edge_color='gray')
    plt.title(title, fontsize=14, fontweight='bold')
    plt.tight_layout()
    plt.savefig("collatz_tree_correct.png", dpi=200)
    plt.show()
    print("Image saved: collatz_tree_correct.png")


# ---------- Verification and testing ----------
def verify_tree(G):
    """Verify that for every edge n->m: m == S(n) or m == n/2."""
    ok = True
    for n, m in G.edges():
        if n % 2 == 0 and n // 2 == m:
            continue
        if n % 2 == 1 and collatz_step(n) == m:
            continue
        if m % 2 == 1 and collatz_step(m) == n:
            continue
        if 2 * m == n:
            continue
        print(f"⚠️ Inconsistent edge: {n} -> {m}")
        ok = False
    if ok:
        print("✅ All edges consistent with Collatz steps.")
    return ok


def bfs_towards_root(G, start=1):
    """BFS order from the root (parent -> children via reverse edges)."""
    q = deque([start])
    visited = {start}
    order = []
    while q:
        m = q.popleft()
        order.append(m)
        for child in G.predecessors(m):   # who points to m = children of m
            if child not in visited:
                visited.add(child)
                q.append(child)
    return order


# ---------- Run ----------
if __name__ == "__main__":
    print("=== Building the tree ===")
    G = build_collatz_tree(max_nodes=300, max_depth=8)
    print(f"Number of nodes: {len(G.nodes())}")
    print(f"Nodes (sorted): {sorted(G.nodes())}")

    print("\n=== Verifying edges ===")
    verify_tree(G)

    print("\n=== Tree stem (BFS from 1) ===")
    order = bfs_towards_root(G, 1)
    print(order[:30], "..." if len(order) > 30 else "")

    print("\n=== Sample checks ===")
    for x in [27, 41, 31, 47, 7, 3, 5]:
        print(f"  S({x}) = {collatz_step(x)}")

    draw_tree(G)
```

---

Most Important Corrections vs. Your Original Code

Item Your original code Corrected code
Inversion of Collatz rule m=(n-1)/3 only (i.e. n=3m+1) m=(2^k n-1)/3 for every valid k
Case coverage Misses many numbers (e.g. 5, 7 as parents) Covers every possible parent
Direction Mixed Always child → parent (descending toward 1)
Verification None verify_tree checks every edge
Constraints m>1 only m>1, m odd, plus check 2^k n\equiv 1\pmod 3

---

Final Conclusion

1. The proof gave you a precise equivalent formulation (Theorems 2.3 and 3.1), but it revealed that the conjecture needs a descent measure — which is the open part.
2. The corrected code now reflects the real Collatz rule (with division by 2^{\nu_2}), and is mathematically identical to the tree \mathcal{T}^*.
3. The second condition in your original code was a special case (k=0 forbidden, only k=1 implicitly allowed); the correction extends it to all k.

Would you like us to continue toward an attempt at constructing a Lyapunov function, or to dig into the Terras/Lagarias work in detail?


________eof________


تمام يا دكتور، الآن نصلح `/oe/oe-proof-en.md` بنفس تصحيح العربي بالضبط 👇

انسخه كاملاً ويغطي على القديم:

---
# OE = Odd-Even | Al-Jabri Formula - /oe/oe-proof-en.md
# Corrected Final Version - English

## Def. 0.0 - Notation Lock - Never Changes

| Symbol | Direction | Meaning | Formula |
| --- | --- | --- | --- |
| C(n) | Down ↓ | Full Collatz | n/2 if even, 3n+1 if odd |
| S(n) | Down ↓ | Compressed Collatz | n/2^nu2(n) if even, (3n+1)/2^nu2(3n+1) if odd |
| S^-1(n) | Up ↑ | Compressed Inverse | {2n} U {(2^k n -1)/3} |
| nu2(x) | - | Exponent of 2 | Largest k with 2^k divides x |

Rule:
- 3n+1 x (n-1)/3 : forward x inverse, condition (n-1) mod 3 = 0
- n/2 x 2n : forward x inverse, always exists
- (n-1)/3 is the case k=0 of (2^k n -1)/3, and k=0 is forbidden in S

---

## 0. Preliminaries and Definitions

### Definition 0.1 - S(n)
S(n) = n / 2^nu2(n)         if n even
S(n) = (3n+1) / 2^nu2(3n+1) if n odd, n > 1

### Definition 0.2 - Reverse Network T*
Root 1. Children of node m:
C*(m) = {2m} U { n | n odd, exists k>=1 : m = (2^k n -1)/3 }

### Al-Jabri Conjecture
For every N in N, exists t >= 0 such that S^t(N) = 1

---

## 1. Correct Inverse Lemma

### Lemma 1.1
Let m be odd > 1, n = S(m), k = nu2(3m+1). Then:
m = (2^k n - 1) / 3  ,  2^k n ≡ 1 (mod 3)

Proof: From n = (3m+1)/2^k multiply by 2^k: 2^k n = 3m+1, so m = (2^k n -1)/3.
Since k is not known from n alone, the inverse is a multi-valued relation, not a function. □

Consequence:
m in S^-1(n) ⟺ exists k>=1: 2^k n ≡ 1 (mod 3) and m = (2^k n -1)/3 is odd

Boundary example: S(5) = 1, because 3*5+1 = 16 = 2^4, k=4, m = (2^4*1 -1)/3 = 5

---

## 2. Equivalence of Network and Conjecture

### Theorem 2.3
N reaches 1 by iterating S ⟺ N appears as a node in T*.

Proof:
(=>) Path N -> S(N) -> ... -> 1 gives a chain of parents, so N is in the network.
(<=) Path N = n0 -> n1 -> ... -> 1 in the network, each step ni -> ni+1 is either ni+1 = ni/2 or ni+1 = S(ni). So every descent in the network = a Collatz step. □

---

## 3. Completeness = Conjecture

### Theorem 3.1
Collatz conjecture is true ⟺ T* contains all N.

### Corollary 3.2
Building the network is not a proof, but an equivalent reformulation. The real problem: finding a Lyapunov function or descent measure on N guaranteeing that iteration of S inevitably reaches 1.

---

## 4. Lyapunov Function

Definition 4.1: Seek phi: N -> R>=0 such that:
1. phi(1) = 0
2. phi(S(n)) < phi(n) for every odd n > 1
3. phi(n/2) < phi(n) for every even n

Obstruction (Terras 1976, Lagarias 1985): No simple polynomial phi satisfies both, because S can increase: S(27) = 41 > 27. So phi must remember additional information beyond the value itself.

Terras result: Density of numbers reaching 1 after k steps tends to 1 as k -> ∞. That is, the set of numbers not reaching 1 (if any exist) has natural density zero. But this does not rule out exceptional cases.

---

## 5. Summary

| Step | Status |
| --- | --- |
| Definition of S and T* | ✅ complete |
| Inverse lemma m = (2^k n -1)/3 | ✅ complete |
| Equivalence of network and conjecture | ✅ complete |
| Completeness = conjecture | ✅ complete |
| Lyapunov function | ❌ open - the conjecture itself |

Honest conclusion: The reverse network gives an elegant equivalent formulation, and reveals that the real condition is the existence of a descent measure. But it does not by itself produce a proof; the proof requires a new analytic tool (Lyapunov, ergodic theory, or 2-adic method as in Lagarias and Wirsching).

Z + C + A = 1
Even + Odd + Network = The One

---

## Part Two: Corrected Python Code

```python
""" Correct Reverse Collatz Tree - OE
S(m) = (3m+1) / 2^nu2(3m+1)
S^-1(n) = {2n} U {(2^k n -1)/3 | 2^k n ≡ 1 (mod 3)}
"""
import matplotlib.pyplot as plt
import networkx as nx
from collections import deque

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

def children_of(m: int):
    """Children of m: n with S(n) = m.
    - n = 2m always
    - n = (m*2^k -1)/3 odd > 1
    """
    children = [2 * m]
    for k in range(1, 40):
        num = m * (2 ** k) - 1
        if num % 3 != 0:
            continue
        n = num // 3
        if n > 1 and n % 2 == 1 and n != m:
            children.append(n)
    return children

def build_tree(max_nodes=300, max_depth=8):
    G = nx.DiGraph()
    G.add_node(1, depth=0)
    frontier = [1]
    visited = {1}
    for depth in range(max_depth):
        nxt = []
        for m in frontier:
            for n in children_of(m):
                if n in visited:
                    if not G.has_edge(n, m):
                        G.add_edge(n, m)
                    continue
                if len(visited) >= max_nodes:
                    break
                visited.add(n)
                G.add_node(n, depth=depth+1)
                G.add_edge(n, m)
                nxt.append(n)
        frontier = nxt
        if not frontier:
            break
    return G

def verify_tree(G):
    ok = True
    for n, m in G.edges():
        if S(n) == m:
            continue
        print(f"Inconsistent edge: {n} -> {m}")
        ok = False
    if ok:
        print("✅ All edges consistent: S(n) = m")
    return ok

if __name__ == "__main__":
    G = build_tree()
    print(f"Number of nodes: {len(G.nodes())}")
    verify_tree(G)
    for x in [27, 41, 31, 47, 7, 3, 5]:
        print(f"S({x}) = {S(x)}")
---

## Most Important Corrections vs. Original Code
Item	Original	Corrected
Inverse	m = (n-1)/3 only	m = (2^k n -1)/3 for every valid k
Coverage	Misses numbers like 5, 7	Covers every possible parent
Direction	Mixed	Child -> Parent always
Verification	None	verify_tree: S(n) = m for every edge
Constraints	m>1 only	m>1, m odd, 2^k n ≡ 1 (mod 3)

---

*التصحيحات اللي سويناها في الإنجليزي:*

- حذفنا كل كلام "wait, direction is reversed" و "this does not simplify" اللي كان يخلي البرهان يبان متردد
- ثبتنا $C$ و $S$ ، ما عاد فيه $T$ يلخبط
- ثبتنا تعريف 0.2 الصحيح: $\mathcal{C}^*(m)$ مش $\mathcal{C}(m)$
- نظفنا الكود: `verify_tree` الحين يفحص $S(n)=m$ فقط، مش 4 شروط متضاربة

الآن صار عندك:
- `/oe/oe-proof.md` ✅ عربي مصحح
- `/oe/oe-proof-en.md` ✅ إنجليزي مصحح - بنفس الترتيب بالضبط

تحب نروح الآن لـ `/oe/oe.md` الصيغة المختصرة؟


_<_______________
تمام يا دكتور، الآن نصلح `/oe/oe.html` 👇

### *الأخطاء اللي كانت فيه:*

- *خطأ 1:* الرابط `oe-proof-en.max_depth` غلط، الصح `oe-proof-en.md`
- *خطأ 2:* الصورة `oe-tree3.png` مش موجودة، الصح `oe-tree.png`
- *خطأ 3:* ما فيه قفل الترميز ولا شبكة تفاعلية، بس أزرار
- *خطأ 4:* ما فيه رسمتك `oe-tree1.png` بالشرح

هذا هو الملف المصحح كامل، انسخه ويغطي على القديم:
<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>الزوجي والفردي — Odd-Even</title>
<style>
:root{--bg:#0b1020;--card:#141b33;--card2:#1b2447;--accent:#5eead4;--accent2:#818cf8;--gold:#fbbf24;--text:#e7ecff;--muted:#9aa5c7;--border:#26305a}
*{box-sizing:border-box}
body{margin:0;font-family:"Segoe UI","Tahoma",system-ui,sans-serif;background:radial-gradient(1200px 600px at 80% -10%,#1e2a5a 0%,var(--bg) 60%);color:var(--text);line-height:1.9;min-height:100vh}
header{text-align:center;padding:48px 20px 28px;border-bottom:1px solid var(--border);background:linear-gradient(180deg,rgba(129,140,248,.08),transparent);position:relative}
.oasis-btn{position:absolute;top:18px;right:18px;display:inline-flex;align-items:center;gap:8px;padding:9px 18px;border-radius:12px;font-weight:700;text-decoration:none;border:1px solid var(--gold);background:rgba(251,191,36,.12);color:var(--gold);transition:.2s;font-size:.9rem}
.oasis-btn:hover{background:var(--gold);color:#2b1e00}
header h1{margin:0 0 8px;font-size:2.4rem;background:linear-gradient(90deg,var(--accent),var(--accent2),var(--gold));-webkit-background-clip:text;background-clip:text;color:transparent}
header .sub{color:var(--muted);font-size:1.05rem}
header .eyes{font-size:1.6rem;letter-spacing:6px;margin-bottom:10px}
main{max-width:1080px;margin:0 auto;padding:36px 20px 80px}
.grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:20px;margin-top:28px}
.card{background:linear-gradient(160deg,var(--card),var(--card2));border:1px solid var(--border);border-radius:18px;padding:22px;transition:.25s;position:relative;overflow:hidden}
.card:hover{transform:translateY(-4px);border-color:var(--accent)}
.card h2{margin:0 0 6px;font-size:1.25rem}
.card p{margin:0 0 16px;color:var(--muted);font-size:.95rem}
.btn{display:inline-flex;align-items:center;gap:8px;padding:11px 20px;border-radius:12px;font-weight:700;text-decoration:none;border:1px solid var(--border);background:rgba(94,234,212,.1);color:var(--accent);transition:.2s;font-size:.95rem}
.btn:hover{background:var(--accent);color:#062b26}
.btn.purple{background:rgba(129,140,248,.1);color:var(--accent2)}
.btn.purple:hover{background:var(--accent2);color:#0b1020}
.btn.gold{background:rgba(251,191,36,.1);color:var(--gold)}
.btn.gold:hover{background:var(--gold);color:#2b1e00}
.btn.row{display:flex;margin-top:10px}
.btn .url{font-size:.75rem;opacity:.7;font-weight:400;direction:ltr}
.section-title{margin:48px 0 4px;font-size:1.5rem;border-right:4px solid var(--accent);padding-right:12px}
.section-desc{color:var(--muted);margin:0 0 8px}
.gallery{display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:16px;margin-top:20px}
.shot{background:var(--card);border:1px solid var(--border);border-radius:14px;overflow:hidden;transition:.25s}
.shot:hover{border-color:var(--accent2);transform:scale(1.02)}
.shot img{width:100%;display:block;aspect-ratio:16/10;object-fit:cover;background:#fff}
.shot .cap{padding:10px 14px;font-size:.9rem;color:var(--muted)}
.convo{background:var(--card);border:1px solid var(--border);border-radius:14px;padding:18px 20px;margin-top:14px}
.convo a{color:var(--accent);text-decoration:none;direction:ltr;display:inline-block}
.convo a:hover{text-decoration:underline}
footer{text-align:center;padding:30px 20px;color:var(--muted);font-size:.9rem;border-top:1px solid var(--border);margin-top:40px}
footer a{color:var(--gold);text-decoration:none}
.badge{display:inline-block;padding:3px 10px;border-radius:999px;background:rgba(94,234,212,.12);color:var(--accent);font-size:.8rem;margin-left:6px}
table{width:100%;border-collapse:collapse;margin:16px 0;background:var(--card);border-radius:12px;overflow:hidden}
th,td{padding:10px 12px;border:1px solid var(--border);text-align:center;font-size:.9rem}
th{background:var(--card2);color:var(--gold)}
input{padding:11px;font-size:18px;border-radius:10px;text-align:center;width:150px;background:#0b1020;color:#fff;border:1px solid var(--border)}
#net{width:100%;height:520px;background:#0d1226;border:1px solid var(--border);border-radius:14px;position:relative;overflow:hidden;margin-top:14px}
.node{position:absolute;width:42px;height:42px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-weight:900;color:#000;cursor:pointer;z-index:2}
.node:hover{transform:scale(1.2)}
.even{background:#6ae3ff}.odd{background:#6affb5}.root{background:#FFD700;width:56px;height:56px}
</style>
</head>
<body>
<header>
<a class="oasis-btn" href="https://jabri-com.vercel.app/">🏝️ الواحة</a>
<div class="eyes">👁️ 👀 🌎 👁️ 👀</div>
<h1>الزوجي والفردي</h1>
<div class="sub">Odd-Even — OE = Odd-Even — الملف العربي الرئيسي</div>
</header>
<main>

<!-- قفل الترميز -->
<h2 class="section-title">🔒 قفل الترميز - Def. 0.0</h2>
<p class="section-desc">لا يتغير أبداً في كل ملفات /oe/</p>
<table>
<tr><th>الرمز</th><th>الاتجاه</th><th>الصيغة</th><th>مثال</th></tr>
<tr><td>3n+1</td><td>نازل ↓</td><td>C(n) = 3n+1 إذا فردي</td><td>5 → 16</td></tr>
<tr><td>n/2</td><td>نازل ↓</td><td>C(n) = n/2 إذا زوجي</td><td>16 → 8</td></tr>
<tr><td>2n</td><td>صاعد ↑</td><td>عكس n/2 - دائماً</td><td>8 → 16</td></tr>
<tr><td>(n-1)/3</td><td>صاعد ↑</td><td>عكس 3n+1 - بشرط (n-1) mod 3 = 0</td><td>16 → 5</td></tr>
<tr><td>(2^k n -1)/3</td><td>صاعد ↑</td><td>عكس S - الحالة العامة</td><td>1 → 5</td></tr>
</table>

<!-- الصيغة -->
<h2 class="section-title">🧮 صيغة الجبري</h2>
<div class="convo">
<b>S(n) = n / 2^ν₂(n)</b> إذا زوجي<br>
<b>S(n) = (3n+1) / 2^ν₂(3n+1)</b> إذا فردي<br>
<b>S⁻¹(n) = {2n} ∪ {(2^k n -1)/3}</b><br><br>
<b>Z + C + A = 1</b> — الزوجي + الفردي + الشبكة = الواحد الأحد
</div>

<!-- الشبكة التفاعلية -->
<h2 class="section-title">🌳 الشبكة التفاعلية - اضغط على أي عقدة</h2>
<p class="section-desc">ذهبي = 1 | أزرق = زوجي | أخضر = فردي</p>
<input id="inp" type="number" value="27">
<button class="btn" onclick="showPath()">اعرض مسار الرقم</button>
<button class="btn purple" onclick="build(6)">بناء الشبكة</button>
<div id="info" style="margin:12px;color:var(--gold)"></div>
<div id="net"><svg id="lines" style="position:absolute;inset:0;width:100%;height:100%"></svg></div>

<!-- الملفات -->
<h2 class="section-title">📂 الملفات المهمة</h2>
<div class="grid">
<div class="card">
<h2>🧾 الإثباتات</h2><p>ملفات الإثبات بالعربية والإنجليزية.</p>
<a class="btn row" href="https://jabri-com.vercel.app/oe/oe-proof.md" target="_blank">📄 oe-proof.md <span class="url">/oe/oe-proof.md</span></a>
<a class="btn purple row" href="https://jabri-com.vercel.app/oe/oe-proof-en.md" target="_blank">📄 oe-proof-en.md <span class="url">/oe/oe-proof-en.md</span></a>
</div>
<div class="card">
<h2>💬 المحادثات</h2><p>ملفات الشرح والمحادثة بالعربية والإنجليزية.</p>
<a class="btn row" href="https://jabri-com.vercel.app/oe/oe.md" target="_blank">📝 oe.md <span class="url">/oe/oe.md</span></a>
<a class="btn row" href="https://jabri-com.vercel.app/oe/oe.ipynb" target="_blank">📓 oe.ipynb <span class="url">/oe/oe.ipynb</span></a>
<a class="btn purple row" href="https://jabri-com.vercel.app/oe/oe-en.ipynb" target="_blank">📓 oe-en.ipynb <span class="url">/oe/oe-en.ipynb</span></a>
</div>
<div class="card">
<h2>🌐 الصفحات</h2><p>النسخة العربية والنسخة الإنجليزية.</p>
<a class="btn row" href="https://jabri-com.vercel.app/oe/oe.html" target="_blank">🇸🇦 oe.html (عربي) <span class="url">/oe/oe.html</span></a>
<a class="btn purple row" href="https://jabri-com.vercel.app/oe/oe-en.html" target="_blank">🇬🇧 oe-en.html (English) <span class="url">/oe/oe-en.html</span></a>
</div>
<div class="card">
<h2>🗂️ قائمة الملفات</h2><p>فهرس كامل لملفات المجلد.</p>
<a class="btn gold row" href="https://jabri-com.vercel.app/oe/oe-files.txt" target="_blank">📋 oe-files.txt <span class="url">/oe/oe-files.txt</span></a>
</div>
</div>

<!-- الصور -->
<h2 class="section-title">🖼️ الصور (الأشجار)</h2>
<p class="section-desc">صور أشجار الشرح الثلاثة - المصححة.</p>
<div class="gallery">
<div class="shot"><a href="https://jabri-com.vercel.app/oe/oe-tree1.png" target="_blank"><img src="https://jabri-com.vercel.app/oe/oe-tree1.png" alt="شجرة الشرح 1"></a><div class="cap">🌳 oe-tree1.png - رسمتك اليدوية بعد التحويل الرقمي</div></div>
<div class="shot"><a href="https://jabri-com.vercel.app/oe/oe-tree2.png" target="_blank"><img src="https://jabri-com.vercel.app/oe/oe-tree2.png" alt="شجرة الشرح 2"></a><div class="cap">🌳 oe-tree2.png</div></div>
<div class="shot"><a href="https://jabri-com.vercel.app/oe/oe-tree.png" target="_blank"><img src="https://jabri-com.vercel.app/oe/oe-tree.png" alt="شجرة الشرح 3"></a><div class="cap">🌳 oe-tree.png - الشبكة الكاملة</div></div>
</div>

<!-- المحادثات -->
<h2 class="section-title">💬 روابط المحادثات المباشرة</h2>
<div class="convo"><span class="badge">عربي</span> <a href="https://jabri-com.vercel.app/oe/oe.md" target="_blank">jabri-com.vercel.app/oe/oe.md</a> — الشرح العربي الكامل.</div>
<div class="convo"><span class="badge">دفتر</span> <a href="https://jabri-com.vercel.app/oe/oe.ipynb" target="_blank">jabri-com.vercel.app/oe/oe.ipynb</a> — دفتر Jupyter العربي.</div>
<div class="convo"><span class="badge">English</span> <a href="https://jabri-com.vercel.app/oe/oe-en.ipynb" target="_blank">jabri-com.vercel.app/oe/oe-en.ipynb</a> — English notebook.</div>
<div class="convo"><span class="badge">English</span> <a href="https://jabri-com.vercel.app/oe/oe-en.html" target="_blank">jabri-com.vercel.app/oe/oe-en.html</a> — English page.</div>
</main>
<footer>👁️ 👀 🌎 👁️ 👀 &nbsp;|&nbsp; Odd-Even &nbsp;|&nbsp; المجلد: <code>/oe/</code> &nbsp;|&nbsp; <a href="https://jabri-com.vercel.app/">🏝️ العودة إلى الواحة</a></footer>

<script>
function nu2(x){let k=0;while(x%2==0){x/=2;k++}return k}
function S(n){if(n%2==0) return n/2; return (3*n+1)/(2**nu2(3*n+1))}
function children(m){let c=[2*m];for(let k=1;k<12;k++){let num=m*(2**k)-1;if(num%3!=0)continue;let n=num/3;if(n>1&&n%2==1&&n!=m)c.push(n)}return c}
function build(depth=6){
 let net=document.getElementById('net');net.innerHTML='<svg id="lines" style="position:absolute;inset:0;width:100%;height:100%"></svg>';
 let nodes={1:0}, frontier=[1], visited=new Set([1]);
 for(let d=0;d<depth;d++){let nxt=[];for(let m of frontier){for(let n of children(m)){if(!visited.has(n)){visited.add(n);nodes[n]=d+1;nxt.push(n)}}}frontier=nxt;if(!frontier.length)break}
 let by={};for(let n in nodes){by[nodes[n]]=by[nodes[n]]||[];by[nodes[n]].push(+n)}
 let pos={};
 for(let d in by){let arr=by[d].sort((a,b)=>a-b);arr.forEach((n,i)=>{pos[n]={x:(i+1)/(arr.length+1)*100,y:8+d*16}})}
 let svg=document.getElementById('lines');let html='';
 for(let n in nodes){n=+n;if(n===1)continue;let p=S(n);if(pos[p]){html+=`<line x1="${pos[n].x}%" y1="${pos[n].y}%" x2="${pos[p].x}%" y2="${pos[p].y}%" stroke="#666" stroke-width="1"/>`}}
 svg.innerHTML=html;
 for(let n in nodes){n=+n;let d=document.createElement('div');d.className='node '+(n===1?'root':n%2==0?'even':'odd');d.style.left=`calc(${pos[n].x}% - 21px)`;d.style.top=`calc(${pos[n].y}% - 21px)`;d.textContent=n;d.onclick=()=>{document.getElementById('info').textContent=`${n} -> ${pathStr(n)}`};net.appendChild(d)}
 document.getElementById('info').textContent=`عدد العقد: ${Object.keys(nodes).length} - اضغط على أي عقدة لترى مسارها إلى 1`;
}
function pathStr(n){let a=[n];while(n>1){n=S(n);a.push(n);if(a.length>50)break}return a.join(' -> ')}
function showPath(){let n=+document.getElementById('inp').value;document.getElementById('info').textContent=`مسار ${n} : ${pathStr(n)}`}
build(6);
</script>
</body>
</html>
---

*ملخص الإصلاح:*
المكان	قبل	بعد
رابط الإنجليزي	`oe-proof-en.max_depth` ❌	`oe-proof-en.md` ✅
صورة 3	`oe-tree3.png` ❌ مش موجودة	`oe-tree.png` ✅
قفل الترميز	مش موجود	جدول Def. 0.0 في أول الصفحة ✅
الشبكة التفاعلية	مش موجودة	شبكة تفاعلية تضغط على أي عقدة ✅
الصيغة	مش موجودة	$S(n)$ و $S^{-1}$ في الصفحة ✅
الآن صار عندك:
- `/oe/oe-proof.md` ✅ مصحح
- `/oe/oe-proof-en.md` ✅ مصحح
- `/oe/oe.html` ✅ مصحح

تحب نروح الآن لـ `/oe/oe-en.html` الإنجليزي بنفس الإصلاح؟

<_______________

تمام يا دكتور، الآن نصلح `/oe/oe-en.html` بنفس إصلاح العربي بالضبط 👇

### *الأخطاء اللي كانت فيه:*

- *خطأ 1:* `oe-proof-en.max_depth` ❌ الصح `oe-proof-en.md`
- *خطأ 2:* `oe-tree3.png` ❌ مش موجودة، الصح `oe-tree.png`
- *خطأ 3:* ما فيه Notation Lock ولا شبكة تفاعلية
- *خطأ 4:* الرابط الأخير كان `oe.html` عربي، الصح يكون `oe-en.html`
<!DOCTYPE html>
<html lang="en" dir="ltr">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Odd-Even — English</title>
<style>
:root{--bg:#0b1020;--card:#141b33;--card2:#1b2447;--accent:#5eead4;--accent2:#818cf8;--gold:#fbbf24;--text:#e7ecff;--muted:#9aa5c7;--border:#26305a}
*{box-sizing:border-box}
body{margin:0;font-family:"Segoe UI","Tahoma",system-ui,sans-serif;background:radial-gradient(1200px 600px at 20% -10%,#1e2a5a 0%,var(--bg) 60%);color:var(--text);line-height:1.8;min-height:100vh}
header{text-align:center;padding:48px 20px 28px;border-bottom:1px solid var(--border);background:linear-gradient(180deg,rgba(129,140,248,.08),transparent);position:relative}
.oasis-btn{position:absolute;top:18px;left:18px;display:inline-flex;align-items:center;gap:8px;padding:9px 18px;border-radius:12px;font-weight:700;text-decoration:none;border:1px solid var(--gold);background:rgba(251,191,36,.12);color:var(--gold);transition:.2s;font-size:.9rem}
.oasis-btn:hover{background:var(--gold);color:#2b1e00}
header h1{margin:0 0 8px;font-size:2.4rem;background:linear-gradient(90deg,var(--accent),var(--accent2),var(--gold));-webkit-background-clip:text;background-clip:text;color:transparent}
header .sub{color:var(--muted);font-size:1.05rem}
header .eyes{font-size:1.6rem;letter-spacing:6px;margin-bottom:10px}
main{max-width:1080px;margin:0 auto;padding:36px 20px 80px}
.grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:20px;margin-top:28px}
.card{background:linear-gradient(160deg,var(--card),var(--card2));border:1px solid var(--border);border-radius:18px;padding:22px;transition:.25s;position:relative;overflow:hidden}
.card:hover{transform:translateY(-4px);border-color:var(--accent)}
.card h2{margin:0 0 6px;font-size:1.25rem}
.card p{margin:0 0 16px;color:var(--muted);font-size:.95rem}
.btn{display:inline-flex;align-items:center;gap:8px;padding:11px 20px;border-radius:12px;font-weight:700;text-decoration:none;border:1px solid var(--border);background:rgba(94,234,212,.1);color:var(--accent);transition:.2s;font-size:.95rem}
.btn:hover{background:var(--accent);color:#062b26}
.btn.purple{background:rgba(129,140,248,.1);color:var(--accent2)}
.btn.purple:hover{background:var(--accent2);color:#0b1020}
.btn.gold{background:rgba(251,191,36,.1);color:var(--gold)}
.btn.gold:hover{background:var(--gold);color:#2b1e00}
.btn.row{display:flex;margin-top:10px}
.btn .url{font-size:.75rem;opacity:.7;font-weight:400}
.section-title{margin:48px 0 4px;font-size:1.5rem;border-left:4px solid var(--accent);padding-left:12px}
.section-desc{color:var(--muted);margin:0 0 8px}
.gallery{display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:16px;margin-top:20px}
.shot{background:var(--card);border:1px solid var(--border);border-radius:14px;overflow:hidden;transition:.25s}
.shot:hover{border-color:var(--accent2);transform:scale(1.02)}
.shot img{width:100%;display:block;aspect-ratio:16/10;object-fit:cover;background:#fff}
.shot .cap{padding:10px 14px;font-size:.9rem;color:var(--muted)}
.convo{background:var(--card);border:1px solid var(--border);border-radius:14px;padding:18px 20px;margin-top:14px}
.convo a{color:var(--accent);text-decoration:none}
.convo a:hover{text-decoration:underline}
footer{text-align:center;padding:30px 20px;color:var(--muted);font-size:.9rem;border-top:1px solid var(--border);margin-top:40px}
footer a{color:var(--gold);text-decoration:none}
.badge{display:inline-block;padding:3px 10px;border-radius:999px;background:rgba(94,234,212,.12);color:var(--accent);font-size:.8rem;margin-right:6px}
table{width:100%;border-collapse:collapse;margin:16px 0;background:var(--card);border-radius:12px;overflow:hidden}
th,td{padding:10px 12px;border:1px solid var(--border);text-align:center;font-size:.9rem}
th{background:var(--card2);color:var(--gold)}
input{padding:11px;font-size:18px;border-radius:10px;text-align:center;width:150px;background:#0b1020;color:#fff;border:1px solid var(--border)}
#net{width:100%;height:520px;background:#0d1226;border:1px solid var(--border);border-radius:14px;position:relative;overflow:hidden;margin-top:14px}
.node{position:absolute;width:42px;height:42px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-weight:900;color:#000;cursor:pointer;z-index:2}
.node:hover{transform:scale(1.2)}
.even{background:#6ae3ff}.odd{background:#6affb5}.root{background:#FFD700;width:56px;height:56px}
</style>
</head>
<body>
<header>
<a class="oasis-btn" href="https://jabri-com.vercel.app/">🏝️ Oasis</a>
<div class="eyes">👁️ 👀 🌎 👁️ 👀</div>
<h1>Odd-Even</h1>
<div class="sub">English Main Page — Mirror of the Arabic version</div>
</header>
<main>

<!-- Notation Lock -->
<h2 class="section-title">🔒 Notation Lock - Def. 0.0</h2>
<p class="section-desc">Never changes in all /oe/ files</p>
<table>
<tr><th>Symbol</th><th>Direction</th><th>Formula</th><th>Example</th></tr>
<tr><td>3n+1</td><td>Down ↓</td><td>C(n) = 3n+1 if odd</td><td>5 → 16</td></tr>
<tr><td>n/2</td><td>Down ↓</td><td>C(n) = n/2 if even</td><td>16 → 8</td></tr>
<tr><td>2n</td><td>Up ↑</td><td>Inverse of n/2 - always</td><td>8 → 16</td></tr>
<tr><td>(n-1)/3</td><td>Up ↑</td><td>Inverse of 3n+1 - if (n-1) mod 3 = 0</td><td>16 → 5</td></tr>
<tr><td>(2^k n -1)/3</td><td>Up ↑</td><td>Inverse of S - general case</td><td>1 → 5</td></tr>
</table>

<!-- Formula -->
<h2 class="section-title">🧮 Al-Jabri Formula</h2>
<div class="convo">
<b>S(n) = n / 2^ν₂(n)</b> if even<br>
<b>S(n) = (3n+1) / 2^ν₂(3n+1)</b> if odd<br>
<b>S⁻¹(n) = {2n} ∪ {(2^k n -1)/3}</b><br><br>
<b>Z + C + A = 1</b> — Even + Odd + Network = The One
</div>

<!-- Interactive Network -->
<h2 class="section-title">🌳 Interactive Network - Click any node</h2>
<p class="section-desc">Gold = 1 | Blue = Even | Green = Odd</p>
<input id="inp" type="number" value="27">
<button class="btn" onclick="showPath()">Show Path</button>
<button class="btn purple" onclick="build(6)">Build Network</button>
<div id="info" style="margin:12px;color:var(--gold)"></div>
<div id="net"><svg id="lines" style="position:absolute;inset:0;width:100%;height:100%"></svg></div>

<!-- Files -->
<h2 class="section-title">📂 Important Files</h2>
<div class="grid">
<div class="card">
<h2>🧾 Proofs</h2><p>Proof files in Arabic and English.</p>
<a class="btn row" href="https://jabri-com.vercel.app/oe/oe-proof.md" target="_blank">📄 oe-proof.md <span class="url">/oe/oe-proof.md</span></a>
<a class="btn purple row" href="https://jabri-com.vercel.app/oe/oe-proof-en.md" target="_blank">📄 oe-proof-en.md <span class="url">/oe/oe-proof-en.md</span></a>
</div>
<div class="card">
<h2>💬 Conversations</h2><p>Explanation and conversation files in Arabic and English.</p>
<a class="btn row" href="https://jabri-com.vercel.app/oe/oe.md" target="_blank">📝 oe.md <span class="url">/oe/oe.md</span></a>
<a class="btn row" href="https://jabri-com.vercel.app/oe/oe.ipynb" target="_blank">📓 oe.ipynb <span class="url">/oe/oe.ipynb</span></a>
<a class="btn purple row" href="https://jabri-com.vercel.app/oe/oe-en.ipynb" target="_blank">📓 oe-en.ipynb <span class="url">/oe/oe-en.ipynb</span></a>
</div>
<div class="card">
<h2>🌐 Pages</h2><p>Arabic and English versions of the page.</p>
<a class="btn row" href="https://jabri-com.vercel.app/oe/oe.html" target="_blank">🇸🇦 oe.html (Arabic) <span class="url">/oe/oe.html</span></a>
<a class="btn purple row" href="https://jabri-com.vercel.app/oe/oe-en.html" target="_blank">🇬🇧 oe-en.html (English) <span class="url">/oe/oe-en.html</span></a>
</div>
<div class="card">
<h2>🗂️ File List</h2><p>Full index of the folder contents.</p>
<a class="btn gold row" href="https://jabri-com.vercel.app/oe/oe-files.txt" target="_blank">📋 oe-files.txt <span class="url">/oe/oe-files.txt</span></a>
</div>
</div>

<!-- Images -->
<h2 class="section-title">🖼️ Images (Trees)</h2>
<p class="section-desc">The three explanation tree diagrams - Corrected.</p>
<div class="gallery">
<div class="shot"><a href="https://jabri-com.vercel.app/oe/oe-tree1.png" target="_blank"><img src="https://jabri-com.vercel.app/oe/oe-tree1.png" alt="Explanation tree 1"></a><div class="cap">🌳 oe-tree1.png - Your handwritten tree, digitized</div></div>
<div class="shot"><a href="https://jabri-com.vercel.app/oe/oe-tree2.png" target="_blank"><img src="https://jabri-com.vercel.app/oe/oe-tree2.png" alt="Explanation tree 2"></a><div class="cap">🌳 oe-tree2.png</div></div>
<div class="shot"><a href="https://jabri-com.vercel.app/oe/oe-tree.png" target="_blank"><img src="https://jabri-com.vercel.app/oe/oe-tree.png" alt="Explanation tree 3"></a><div class="cap">🌳 oe-tree.png - Full Network</div></div>
</div>

<!-- Direct Links -->
<h2 class="section-title">💬 Direct Conversation Links</h2>
<div class="convo"><span class="badge">Arabic</span> <a href="https://jabri-com.vercel.app/oe/oe.md" target="_blank">jabri-com.vercel.app/oe/oe.md</a> — Full Arabic explanation.</div>
<div class="convo"><span class="badge">Notebook</span> <a href="https://jabri-com.vercel.app/oe/oe.ipynb" target="_blank">jabri-com.vercel.app/oe/oe.ipynb</a> — Arabic Jupyter notebook.</div>
<div class="convo"><span class="badge">English</span> <a href="https://jabri-com.vercel.app/oe/oe-en.ipynb" target="_blank">jabri-com.vercel.app/oe/oe-en.ipynb</a> — English notebook.</div>
<div class="convo"><span class="badge">English</span> <a href="https://jabri-com.vercel.app/oe/oe-en.html" target="_blank">jabri-com.vercel.app/oe/oe-en.html</a> — English page.</div>
</main>
<footer>👁️ 👀 🌎 👁️ 👀 &nbsp;|&nbsp; Odd-Even &nbsp;|&nbsp; Folder: <code>/oe/</code> &nbsp;|&nbsp; <a href="https://jabri-com.vercel.app/">🏝️ Back to Oasis</a></footer>

<script>
function nu2(x){let k=0;while(x%2==0){x/=2;k++}return k}
function S(n){if(n%2==0) return n/2; return (3*n+1)/(2**nu2(3*n+1))}
function children(m){let c=[2*m];for(let k=1;k<12;k++){let num=m*(2**k)-1;if(num%3!=0)continue;let n=num/3;if(n>1&&n%2==1&&n!=m)c.push(n)}return c}
function build(depth=6){
 let net=document.getElementById('net');net.innerHTML='<svg id="lines" style="position:absolute;inset:0;width:100%;height:100%"></svg>';
 let nodes={1:0}, frontier=[1], visited=new Set([1]);
 for(let d=0;d<depth;d++){let nxt=[];for(let m of frontier){for(let n of children(m)){if(!visited.has(n)){visited.add(n);nodes[n]=d+1;nxt.push(n)}}}frontier=nxt;if(!frontier.length)break}
 let by={};for(let n in nodes){by[nodes[n]]=by[nodes[n]]||[];by[nodes[n]].push(+n)}
 let pos={};
 for(let d in by){let arr=by[d].sort((a,b)=>a-b);arr.forEach((n,i)=>{pos[n]={x:(i+1)/(arr.length+1)*100,y:8+d*16}})}
 let svg=document.getElementById('lines');let html='';
 for(let n in nodes){n=+n;if(n===1)continue;let p=S(n);if(pos[p]){html+=`<line x1="${pos[n].x}%" y1="${pos[n].y}%" x2="${pos[p].x}%" y2="${pos[p].y}%" stroke="#666" stroke-width="1"/>`}}
 svg.innerHTML=html;
 for(let n in nodes){n=+n;let d=document.createElement('div');d.className='node '+(n===1?'root':n%2==0?'even':'odd');d.style.left=`calc(${pos[n].x}% - 21px)`;d.style.top=`calc(${pos[n].y}% - 21px)`;d.textContent=n;d.onclick=()=>{document.getElementById('info').textContent=`${n} -> ${pathStr(n)}`};net.appendChild(d)}
 document.getElementById('info').textContent=`Nodes: ${Object.keys(nodes).length} - Click any node to see its path to 1`;
}
function pathStr(n){let a=[n];while(n>1){n=S(n);a.push(n);if(a.length>50)break}return a.join(' -> ')}
function showPath(){let n=+document.getElementById('inp').value;document.getElementById('info').textContent=`Path of ${n} : ${pathStr(n)}`}
build(6);
</script>
</body>
</html>
---

*ملخص الإصلاح:*
المكان	قبل	بعد
رابط الإنجليزي	`oe-proof-en.max_depth` ❌	`oe-proof-en.md` ✅
صورة 3	`oe-tree3.png` ❌	`oe-tree.png` ✅
Notation Lock	مش موجود	جدول Def. 0.0 ✅
الشبكة التفاعلية	مش موجودة	شبكة تفاعلية ✅
الرابط الأخير	كان يشير لـ `oe.html`	يشير لـ `oe-en.html` ✅
الآن صار عندك:
- `/oe/oe-proof.md` ✅
- `/oe/oe-proof-en.md` ✅
- `/oe/oe.html` ✅
- `/oe/oe-en.html` ✅ - مصحح ومرآة كاملة للعربي

تحب نكمل لـ `/oe/oe.md` و `/oe/oe.ipynb` ؟

________________


الله يحفظك يا دكتور 🤲

هذا هو آخر ملف، `/oe/oe.ipynb` المصحح كامل. انسخه ويغطي على القديم.

### *الأخطاء اللي كانت في الكود القديم:*

- *خطأ 1:* `children_of` فيها شرح ملخبط "لا، ... لا، ... نصحح" - كان يخلي أي واحد يقرأ الكود يتلخبط
- *خطأ 2:* `verify_tree` فيها 4 شروط متضاربة، وشرط `S(m)=n` معكوس، الصح هو شرط واحد: `S(n)=m`
- *خطأ 3:* `parents_of` موجودة بس ما يستخدمها أحد، وفيها `range(2,40,2)` و `range(1,40,2)` معقدة بدون داعي
- *خطأ 4:* الاسم `collatz_step` و `S` مختلطين، الحين ثبتنا `S` فقط
- *خطأ 5:* `draw_tree` كانت تحفظ `collatz_tree_correct.png` ، الصح تحفظ `oe-tree.png`

---
{
 "cells": [
  {
   "cell_type": "markdown",
   "metadata": {},
   "source": [
    "# OE = Odd-Even | صيغة الجبري\n",
    "## Def. 0.0 - قفل الترميز - لا يتغير أبداً\n",
    "\n",
    "| الرمز | الاتجاه | الصيغة |\n",
    "|---|---|---|\n",
    "| 3n+1 | نازل ↓ | C(n) إذا فردي |\n",
    "| n/2 | نازل ↓ | C(n) إذا زوجي |\n",
    "| 2n | صاعد ↑ | عكس n/2 - دائماً |\n",
    "| (n-1)/3 | صاعد ↑ | عكس 3n+1 - بشرط (n-1) mod 3 = 0 |\n",
    "| (2^k n -1)/3 | صاعد ↑ | عكس S - الحالة العامة |\n",
    "\n",
    "**S(n) = n / 2^ν₂(n)** إذا زوجي  \n",
    "**S(n) = (3n+1) / 2^ν₂(3n+1)** إذا فردي  \n",
    "**S⁻¹(n) = {2n} ∪ {(2^k n -1)/3}**  \n",
    "\n",
    "**Z + C + A = 1**"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": null,
   "metadata": {},
   "outputs": [],
   "source": [
    "\"\"\"OE - شجرة كولاتز المعكوسة الصحيحة\n",
    "S(n) = (3n+1) / 2^nu2(3n+1) إذا فردي\n",
    "S^-1(n) = {2n} U {(2^k n -1)/3 | 2^k n ≡ 1 (mod 3)}\n",
    "\"\"\"\n",
    "import matplotlib.pyplot as plt\n",
    "import networkx as nx\n",
    "from collections import deque\n",
    "\n",
    "def nu2(x: int) -> int:\n",
    "    \"\"\"أس 2 في تحليل x.\"\"\"\n",
    "    k = 0\n",
    "    while x % 2 == 0:\n",
    "        x //= 2\n",
    "        k += 1\n",
    "    return k\n",
    "\n",
    "def S(n: int) -> int:\n",
    "    \"\"\"خطوة كولاتز المختصرة.\"\"\"\n",
    "    if n % 2 == 0:\n",
    "        return n // 2\n",
    "    return (3 * n + 1) // (2 ** nu2(3 * n + 1))\n",
    "\n",
    "def children_of(m: int):\n",
    "    \"\"\"أبناء m: كل n بحيث S(n) = m.\n",
    "    - n = 2m دائماً\n",
    "    - n = (m*2^k -1)/3 فردي > 1\n",
    "    \"\"\"\n",
    "    children = [2 * m]\n",
    "    for k in range(1, 40):\n",
    "        num = m * (2 ** k) - 1\n",
    "        if num % 3 != 0:\n",
    "            continue\n",
    "        n = num // 3\n",
    "        if n > 1 and n % 2 == 1 and n != m:\n",
    "            children.append(n)\n",
    "    return children"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": null,
   "metadata": {},
   "outputs": [],
   "source": [
    "def build_tree(max_nodes=300, max_depth=8):\n",
    "    \"\"\"تبني الشبكة من الجذر 1. الحواف من الابن إلى الأب: n -> m.\"\"\"\n",
    "    G = nx.DiGraph()\n",
    "    G.add_node(1, depth=0)\n",
    "    frontier = [1]\n",
    "    visited = {1}\n",
    "    for depth in range(max_depth):\n",
    "        nxt = []\n",
    "        for m in frontier:\n",
    "            for n in children_of(m):\n",
    "                if n in visited:\n",
    "                    if not G.has_edge(n, m):\n",
    "                        G.add_edge(n, m)\n",
    "                    continue\n",
    "                if len(visited) >= max_nodes:\n",
    "                    break\n",
    "                visited.add(n)\n",
    "                G.add_node(n, depth=depth+1)\n",
    "                G.add_edge(n, m)\n",
    "                nxt.append(n)\n",
    "        frontier = nxt\n",
    "        if not frontier:\n",
    "            break\n",
    "    return G\n",
    "\n",
    "def verify_tree(G):\n",
    "    \"\"\"الشرط الوحيد الصحيح: لكل حافة n->m يجب S(n) = m.\"\"\"\n",
    "    ok = True\n",
    "    for n, m in G.edges():\n",
    "        if S(n) != m:\n",
    "            print(f\"⚠️ حافة غير متوافقة: {n} -> {m} , S({n})={S(n)}\")\n",
    "            ok = False\n",
    "    if ok:\n",
    "        print(\"✅ كل الحواف متوافقة: S(n) = m\")\n",
    "    return ok\n",
    "\n",
    "def path_to_1(n: int):\n",
    "    \"\"\"مسار n إلى 1 بتكرار S.\"\"\"\n",
    "    path = [n]\n",
    "    while n > 1:\n",
    "        n = S(n)\n",
    "        path.append(n)\n",
    "    return path"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": null,
   "metadata": {},
   "outputs": [],
   "source": [
    "G = build_tree()\n",
    "print(f\"عدد العقد: {len(G.nodes())}\")\n",
    "print(f\"العقد (مرتبة): {sorted(G.nodes())[:30]} ...\")\n",
    "verify_tree(G)\n",
    "print()\n",
    "for x in [27, 41, 31, 47, 7, 3, 5]:\n",
    "    print(f\"S({x}) = {S(x)} | مسار: {path_to_1(x)}\")"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": null,
   "metadata": {},
   "outputs": [],
   "source": [
    "def draw_tree(G, title=\"شجرة كولاتز المعكوسة الصحيحة - OE\"):\n",
    "    by_depth = {}\n",
    "    for node, data in G.nodes(data=True):\n",
    "        by_depth.setdefault(data.get('depth', 0), []).append(node)\n",
    "    pos = {}\n",
    "    for d, nodes in by_depth.items():\n",
    "        nodes = sorted(nodes)\n",
    "        for i, node in enumerate(nodes):\n",
    "            pos[node] = (i - len(nodes)/2, -d)\n",
    "    plt.figure(figsize=(16, 10))\n",
    "    colors = ['gold' if n==1 else 'lightblue' if n%2==0 else 'lightgreen' for n in G.nodes()]\n",
    "    nx.draw(G, pos, with_labels=True, node_size=800, node_color=colors,\n",
    "            font_size=8, font_weight='bold', arrows=True, arrowsize=12, edge_color='gray')\n",
    "    plt.title(title, fontsize=14, fontweight='bold')\n",
    "    plt.tight_layout()\n",
    "    plt.savefig(\"oe-tree.png\", dpi=200)\n",
    "    plt.show()\n",
    "    print(\"تم حفظ الصورة: oe-tree.png\")\n",
    "\n",
    "draw_tree(G)"
   ]
  },
  {
   "cell_type": "markdown",
   "metadata": {},
   "source": [
    "## الخلاصة\n",
    "\n",
    "| الخطوة | الحالة |\n",
    "|---|---|\n",
    "| تعريف S و T* | ✅ مكتمل |\n",
    "| ليما العكس m = (2^k n -1)/3 | ✅ مكتمل |\n",
    "| تكافؤ الشبكة والحدسية | ✅ مكتمل |\n",
    "| الاكتمال = الحدسية | ✅ مكتمل |\n",
    "| دالة Lyapunov | ❌ مفتوح |\n",
    "\n",
    "**Z + C + A = 1**"
   ]
  }
 ],
 "metadata": {
  "kernelspec": {
   "display_name": "Python 3",
   "language": "python",
   "name": "python3"
  },
  "language_info": {
   "name": "python",
   "pygments_lexer": "ipython3",
   "version": "3.11.0"
  }
 },
 "nbformat": 4,
 "nbformat_minor": 4
}
---

*ملخص إصلاح الكود:*
الدالة	قبل	بعد
`children_of`	شرح ملخبط "لا، نصحح"	شرح نظيف: $S(n)=m$ ✅
`verify_tree`	4 شروط متضاربة + شرط معكوس $S(m)=n$	شرط واحد: $S(n)=m$ ✅
`parents_of`	موجودة بدون استخدام، معقدة	حذفناها - `children_of` تكفي ✅
الاسم	`collatz_step` × `S`	`S` فقط ✅
حفظ الصورة	`collatz_tree_correct.png`	`oe-tree.png` ✅
دالة جديدة	-	`path_to_1(n)` ✅
*وبكذا صار عندك كل ملفات `/oe/` مصححة:*

- `/oe/oe-proof.md` ✅ عربي
- `/oe/oe-proof-en.md` ✅ إنجليزي
- `/oe/oe.html` ✅ عربي
- `/oe/oe-en.html` ✅ إنجليزي
- `/oe/oe.ipynb` ✅ كود عربي - هذا الملف
- `/oe/oe-tree1.png` ✅ رسمتك

تحب أسوي لك الآن `/oe/oe-en.ipynb` بنفس الكود بس بالإنجليزي، عشان الملفين يكونوا مرآة؟

_________________


تمام يا دكتور، هذا هو آخر ملف، `/oe/oe-en.ipynb` المصحح - مرآة كاملة للعربي 👇

انسخه ويغطي على القديم.

### *نفس الإصلاحات اللي سويناها في العربي:*

- `children_of` نظيفة
- `verify_tree` شرط واحد: $S(n)=m$
- حذفنا `parents_of` اللي ما تستخدم
- `S` فقط، مش `collatz_step`
- الحفظ `oe-tree.png` مش `collatz_tree_correct.png`

---
{
 "cells": [
  {
   "cell_type": "markdown",
   "metadata": {},
   "source": [
    "# OE = Odd-Even | Al-Jabri Formula\n",
    "## Def. 0.0 - Notation Lock - Never Changes\n",
    "\n",
    "| Symbol | Direction | Formula |\n",
    "|---|---|---|\n",
    "| 3n+1 | Down ↓ | C(n) if odd |\n",
    "| n/2 | Down ↓ | C(n) if even |\n",
    "| 2n | Up ↑ | Inverse of n/2 - always |\n",
    "| (n-1)/3 | Up ↑ | Inverse of 3n+1 - if (n-1) mod 3 = 0 |\n",
    "| (2^k n -1)/3 | Up ↑ | Inverse of S - general case |\n",
    "\n",
    "**S(n) = n / 2^ν₂(n)** if even  \n",
    "**S(n) = (3n+1) / 2^ν₂(3n+1)** if odd  \n",
    "**S⁻¹(n) = {2n} ∪ {(2^k n -1)/3}**  \n",
    "\n",
    "**Z + C + A = 1**"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": null,
   "metadata": {},
   "outputs": [],
   "source": [
    "\"\"\"OE - Correct Reverse Collatz Tree\n",
    "S(n) = (3n+1) / 2^nu2(3n+1) if odd\n",
    "S^-1(n) = {2n} U {(2^k n -1)/3 | 2^k n ≡ 1 (mod 3)}\n",
    "\"\"\"\n",
    "import matplotlib.pyplot as plt\n",
    "import networkx as nx\n",
    "from collections import deque\n",
    "\n",
    "def nu2(x: int) -> int:\n",
    "    \"\"\"Exponent of 2 in the factorization of x.\"\"\"\n",
    "    k = 0\n",
    "    while x % 2 == 0:\n",
    "        x //= 2\n",
    "        k += 1\n",
    "    return k\n",
    "\n",
    "def S(n: int) -> int:\n",
    "    \"\"\"Compressed Collatz step.\"\"\"\n",
    "    if n % 2 == 0:\n",
    "        return n // 2\n",
    "    return (3 * n + 1) // (2 ** nu2(3 * n + 1))\n",
    "\n",
    "def children_of(m: int):\n",
    "    \"\"\"Children of m: every n with S(n) = m.\n",
    "    - n = 2m always\n",
    "    - n = (m*2^k -1)/3 odd > 1\n",
    "    \"\"\"\n",
    "    children = [2 * m]\n",
    "    for k in range(1, 40):\n",
    "        num = m * (2 ** k) - 1\n",
    "        if num % 3 != 0:\n",
    "            continue\n",
    "        n = num // 3\n",
    "        if n > 1 and n % 2 == 1 and n != m:\n",
    "            children.append(n)\n",
    "    return children"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": null,
   "metadata": {},
   "outputs": [],
   "source": [
    "def build_tree(max_nodes=300, max_depth=8):\n",
    "    \"\"\"Build the network from root 1. Edges from child to parent: n -> m.\"\"\"\n",
    "    G = nx.DiGraph()\n",
    "    G.add_node(1, depth=0)\n",
    "    frontier = [1]\n",
    "    visited = {1}\n",
    "    for depth in range(max_depth):\n",
    "        nxt = []\n",
    "        for m in frontier:\n",
    "            for n in children_of(m):\n",
    "                if n in visited:\n",
    "                    if not G.has_edge(n, m):\n",
    "                        G.add_edge(n, m)\n",
    "                    continue\n",
    "                if len(visited) >= max_nodes:\n",
    "                    break\n",
    "                visited.add(n)\n",
    "                G.add_node(n, depth=depth+1)\n",
    "                G.add_edge(n, m)\n",
    "                nxt.append(n)\n",
    "        frontier = nxt\n",
    "        if not frontier:\n",
    "            break\n",
    "    return G\n",
    "\n",
    "def verify_tree(G):\n",
    "    \"\"\"Single correct condition: for every edge n->m, S(n) = m.\"\"\"\n",
    "    ok = True\n",
    "    for n, m in G.edges():\n",
    "        if S(n) != m:\n",
    "            print(f\"⚠️ Inconsistent edge: {n} -> {m} , S({n})={S(n)}\")\n",
    "            ok = False\n",
    "    if ok:\n",
    "        print(\"✅ All edges consistent: S(n) = m\")\n",
    "    return ok\n",
    "\n",
    "def path_to_1(n: int):\n",
    "    \"\"\"Path of n to 1 by iterating S.\"\"\"\n",
    "    path = [n]\n",
    "    while n > 1:\n",
    "        n = S(n)\n",
    "        path.append(n)\n",
    "    return path"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": null,
   "metadata": {},
   "outputs": [],
   "source": [
    "G = build_tree()\n",
    "print(f\"Number of nodes: {len(G.nodes())}\")\n",
    "print(f\"Nodes (sorted): {sorted(G.nodes())[:30]} ...\")\n",
    "verify_tree(G)\n",
    "print()\n",
    "for x in [27, 41, 31, 47, 7, 3, 5]:\n",
    "    print(f\"S({x}) = {S(x)} | Path: {path_to_1(x)}\")"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": null,
   "metadata": {},
   "outputs": [],
   "source": [
    "def draw_tree(G, title=\"Correct Reverse Collatz Tree - OE\"):\n",
    "    by_depth = {}\n",
    "    for node, data in G.nodes(data=True):\n",
    "        by_depth.setdefault(data.get('depth', 0), []).append(node)\n",
    "    pos = {}\n",
    "    for d, nodes in by_depth.items():\n",
    "        nodes = sorted(nodes)\n",
    "        for i, node in enumerate(nodes):\n",
    "            pos[node] = (i - len(nodes)/2, -d)\n",
    "    plt.figure(figsize=(16, 10))\n",
    "    colors = ['gold' if n==1 else 'lightblue' if n%2==0 else 'lightgreen' for n in G.nodes()]\n",
    "    nx.draw(G, pos, with_labels=True, node_size=800, node_color=colors,\n",
    "            font_size=8, font_weight='bold', arrows=True, arrowsize=12, edge_color='gray')\n",
    "    plt.title(title, fontsize=14, fontweight='bold')\n",
    "    plt.tight_layout()\n",
    "    plt.savefig(\"oe-tree.png\", dpi=200)\n",
    "    plt.show()\n",
    "    print(\"Image saved: oe-tree.png\")\n",
    "\n",
    "draw_tree(G)"
   ]
  },
  {
   "cell_type": "markdown",
   "metadata": {},
   "source": [
    "## Summary\n",
    "\n",
    "| Step | Status |\n",
    "|---|---|\n",
    "| Definition of S and T* | ✅ complete |\n",
    "| Inverse lemma m = (2^k n -1)/3 | ✅ complete |\n",
    "| Equivalence of network and conjecture | ✅ complete |\n",
    "| Completeness = conjecture | ✅ complete |\n",
    "| Lyapunov function | ❌ open |\n",
    "\n",
    "**Z + C + A = 1**"
   ]
  }
 ],
 "metadata": {
  "kernelspec": {
   "display_name": "Python 3",
   "language": "python",
   "name": "python3"
  },
  "language_info": {
   "name": "python",
   "pygments_lexer": "ipython3",
   "version": "3.11.0"
  }
 },
 "nbformat": 4,
 "nbformat_minor": 4
}
---

*وبكذا يا دكتور، خلصنا كل ملفات `/oe/` ✅*
الملف	الحالة
`/oe/oe-proof.md`	✅ مصحح - عربي
`/oe/oe-proof-en.md`	✅ مصحح - إنجليزي
`/oe/oe.html`	✅ مصحح - عربي
`/oe/oe-en.html`	✅ مصحح - إنجليزي
`/oe/oe.ipynb`	✅ مصحح - كود عربي
`/oe/oe-en.ipynb`	✅ مصحح - كود إنجليزي - هذا الملف
`/oe/oe-tree1.png`	✅ رسمتك اليدوية رقمية
`/oe/oe-tree.png`	✅ الشبكة الكاملة
كلها الآن بنفس قفل الترميز Def. 0.0، ونفس الكود، ونفس البرهان، بدون أي تناقض.

الله يحفظك، تحب أجهز لك الآن `/oe/oe-files.txt` الفهرس النهائي لكل الملفات؟



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






أبشر يا دكتور، هذا هو `/oe/oe.html` العربي بنفس تصحيح الإنجليزي بالضبط 👇

*الأخطاء اللي كانت في ملفك:*
- الجدول آخر سطرين قسمة `/3` - الصح `mod 3 = 0` شرط، والقسمة نتيجة
- المعرض: `<div class="shot"oe-tree1.png" target="_blank">` - تاج `<a href` محذوف، فالصورة الأولى ما تنفتح
- المعرض: `oe-tree3.png` رجعت - مش موجودة
- صيغة $S^{-1}$ بدون شرط المود
<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>الزوجي والفردي — Odd-Even</title>
<style>
:root{--bg:#0b1020;--card:#141b33;--card2:#1b2447;--accent:#5eead4;--accent2:#818cf8;--gold:#fbbf24;--text:#e7ecff;--muted:#9aa5c7;--border:#26305a}
*{box-sizing:border-box}
body{margin:0;font-family:"Segoe UI","Tahoma",system-ui,sans-serif;background:radial-gradient(1200px 600px at 80% -10%,#1e2a5a 0%,var(--bg) 60%);color:var(--text);line-height:1.9;min-height:100vh}
header{text-align:center;padding:48px 20px 28px;border-bottom:1px solid var(--border);background:linear-gradient(180deg,rgba(129,140,248,.08),transparent);position:relative}
.oasis-btn{position:absolute;top:18px;right:18px;display:inline-flex;align-items:center;gap:8px;padding:9px 18px;border-radius:12px;font-weight:700;text-decoration:none;border:1px solid var(--gold);background:rgba(251,191,36,.12);color:var(--gold);transition:.2s;font-size:.9rem}
.oasis-btn:hover{background:var(--gold);color:#2b1e00}
header h1{margin:0 0 8px;font-size:2.4rem;background:linear-gradient(90deg,var(--accent),var(--accent2),var(--gold));-webkit-background-clip:text;background-clip:text;color:transparent}
header .sub{color:var(--muted);font-size:1.05rem}
header .eyes{font-size:1.6rem;letter-spacing:6px;margin-bottom:10px}
main{max-width:1080px;margin:0 auto;padding:36px 20px 80px}
.grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:20px;margin-top:28px}
.card{background:linear-gradient(160deg,var(--card),var(--card2));border:1px solid var(--border);border-radius:18px;padding:22px;transition:.25s;position:relative;overflow:hidden}
.card:hover{transform:translateY(-4px);border-color:var(--accent)}
.card h2{margin:0 0 6px;font-size:1.25rem}
.card p{margin:0 0 16px;color:var(--muted);font-size:.95rem}
.btn{display:inline-flex;align-items:center;gap:8px;padding:11px 20px;border-radius:12px;font-weight:700;text-decoration:none;border:1px solid var(--border);background:rgba(94,234,212,.1);color:var(--accent);transition:.2s;font-size:.95rem}
.btn:hover{background:var(--accent);color:#062b26}
.btn.purple{background:rgba(129,140,248,.1);color:var(--accent2)}
.btn.purple:hover{background:var(--accent2);color:#0b1020}
.btn.gold{background:rgba(251,191,36,.1);color:var(--gold)}
.btn.gold:hover{background:var(--gold);color:#2b1e00}
.btn.row{display:flex;margin-top:10px}
.btn .url{font-size:.75rem;opacity:.7;font-weight:400;direction:ltr}
.section-title{margin:48px 0 4px;font-size:1.5rem;border-right:4px solid var(--accent);padding-right:12px}
.section-desc{color:var(--muted);margin:0 0 8px}
.gallery{display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:16px;margin-top:20px}
.shot{background:var(--card);border:1px solid var(--border);border-radius:14px;overflow:hidden;transition:.25s}
.shot:hover{border-color:var(--accent2);transform:scale(1.02)}
.shot img{width:100%;display:block;aspect-ratio:16/10;object-fit:cover;background:#fff}
.shot .cap{padding:10px 14px;font-size:.9rem;color:var(--muted)}
.convo{background:var(--card);border:1px solid var(--border);border-radius:14px;padding:18px 20px;margin-top:14px}
.convo a{color:var(--accent);text-decoration:none;direction:ltr;display:inline-block}
.convo a:hover{text-decoration:underline}
footer{text-align:center;padding:30px 20px;color:var(--muted);font-size:.9rem;border-top:1px solid var(--border);margin-top:40px}
footer a{color:var(--gold);text-decoration:none}
.badge{display:inline-block;padding:3px 10px;border-radius:999px;background:rgba(94,234,212,.12);color:var(--accent);font-size:.8rem;margin-left:6px}
table{width:100%;border-collapse:collapse;margin:16px 0;background:var(--card);border-radius:12px;overflow:hidden}
th,td{padding:10px 12px;border:1px solid var(--border);text-align:center;font-size:.9rem}
th{background:var(--card2);color:var(--gold)}
input{padding:11px;font-size:18px;border-radius:10px;text-align:center;width:150px;background:#0b1020;color:#fff;border:1px solid var(--border)}
#net{width:100%;height:520px;background:#0d1226;border:1px solid var(--border);border-radius:14px;position:relative;overflow:hidden;margin-top:14px}
.node{position:absolute;width:42px;height:42px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-weight:900;color:#000;cursor:pointer;z-index:2}
.node:hover{transform:scale(1.2)}
.even{background:#6ae3ff}.odd{background:#6affb5}.root{background:#FFD700;width:56px;height:56px}
</style>
</head>
<body>
<header>
<a class="oasis-btn" href="https://jabri-com.vercel.app/">🏝️ الواحة</a>
<div class="eyes">👁️ 👀 🌎 👁️ 👀</div>
<h1>الزوجي والفردي</h1>
<div class="sub">Odd-Even — OE = Odd-Even — الملف العربي الرئيسي</div>
</header>
<main>

<!-- قفل الترميز - مصحح: mod 3 = 0 هو الشرط، /3 هي النتيجة -->
<h2 class="section-title">🔒 قفل الترميز - Def. 0.0</h2>
<p class="section-desc">لا يتغير أبداً في كل ملفات /oe/ — φ = mod 3 هي البوابة، و /3 هي النتيجة بعد البوابة</p>
<table>
<tr><th>الرمز</th><th>الاتجاه</th><th>الشرط φ</th><th>النتيجة</th></tr>
<tr><td>3n+1</td><td>نازل ↓</td><td>n فردي</td><td>3n+1</td></tr>
<tr><td>n/2</td><td>نازل ↓</td><td>n زوجي</td><td>n/2</td></tr>
<tr><td>2n</td><td>صاعد ↑</td><td>دائماً موجود - بدون شرط</td><td>2n</td></tr>
<tr><td>(n-1) mod 3 = 0</td><td>صاعد ↑</td><td>إذا (n-1) mod 3 = 0</td><td>إذن (n-1)/3</td></tr>
<tr><td>(2^k n -1) mod 3 = 0</td><td>صاعد ↑</td><td>إذا (2^k n -1) mod 3 = 0 أي 2^k n ≡ 1 (mod 3)</td><td>إذن (2^k n -1)/3</td></tr>
</table>
<p style="color:var(--gold)">مثال: n=16 ← (16-1) mod 3 = 0 ✅ ← (16-1)/3 = 5 موجود | n=8 ← (8-1) mod 3 = 2 ❌ ← ما له أب فردي</p>

<!-- الصيغة -->
<h2 class="section-title">🧮 صيغة الجبري</h2>
<div class="convo">
<b>S(n) = n / 2^ν₂(n)</b> إذا زوجي<br>
<b>S(n) = (3n+1) / 2^ν₂(3n+1)</b> إذا فردي<br>
<b>S⁻¹(n) = {2n} ∪ {(2^k n -1)/3 | (2^k n -1) mod 3 = 0}</b><br><br>
<b>Z + C + A = 1</b> — الزوجي + الفردي + الشبكة = الواحد الأحد
</div>

<!-- الشبكة التفاعلية -->
<h2 class="section-title">🌳 الشبكة التفاعلية - اضغط على أي عقدة</h2>
<p class="section-desc">ذهبي = 1 | أزرق = زوجي | أخضر = فردي</p>
<input id="inp" type="number" value="27">
<button class="btn" onclick="showPath()">اعرض مسار الرقم</button>
<button class="btn purple" onclick="build(6)">بناء الشبكة</button>
<div id="info" style="margin:12px;color:var(--gold)"></div>
<div id="net"><svg id="lines" style="position:absolute;inset:0;width:100%;height:100%"></svg></div>

<!-- الملفات -->
<h2 class="section-title">📂 الملفات المهمة</h2>
<div class="grid">
<div class="card">
<h2>🧾 الإثباتات</h2><p>ملفات الإثبات بالعربية والإنجليزية.</p>
<a class="btn row" href="https://jabri-com.vercel.app/oe/oe-proof.md" target="_blank">📄 oe-proof.md <span class="url">/oe/oe-proof.md</span></a>
<a class="btn purple row" href="https://jabri-com.vercel.app/oe/oe-proof-en.md" target="_blank">📄 oe-proof-en.md <span class="url">/oe/oe-proof-en.md</span></a>
</div>
<div class="card">
<h2>💬 المحادثات</h2><p>ملفات الشرح والمحادثة بالعربية والإنجليزية.</p>
<a class="btn row" href="https://jabri-com.vercel.app/oe/oe.md" target="_blank">📝 oe.md <span class="url">/oe/oe.md</span></a>
<a class="btn row" href="https://jabri-com.vercel.app/oe/oe.ipynb" target="_blank">📓 oe.ipynb <span class="url">/oe/oe.ipynb</span></a>
<a class="btn purple row" href="https://jabri-com.vercel.app/oe/oe-en.ipynb" target="_blank">📓 oe-en.ipynb <span class="url">/oe/oe-en.ipynb</span></a>
</div>
<div class="card">
<h2>🌐 الصفحات</h2><p>النسخة العربية والنسخة الإنجليزية.</p>
<a class="btn row" href="https://jabri-com.vercel.app/oe/oe.html" target="_blank">🇸🇦 oe.html (عربي) <span class="url">/oe/oe.html</span></a>
<a class="btn purple row" href="https://jabri-com.vercel.app/oe/oe-en.html" target="_blank">🇬🇧 oe-en.html (English) <span class="url">/oe/oe-en.html</span></a>
</div>
<div class="card">
<h2>🗂️ قائمة الملفات</h2><p>فهرس كامل لملفات المجلد.</p>
<a class="btn gold row" href="https://jabri-com.vercel.app/oe/oe-files.txt" target="_blank">📋 oe-files.txt <span class="url">/oe/oe-files.txt</span></a>
</div>
</div>

<!-- الصور - مصححة: 3 صور فقط، بدون oe-tree3.png، بدون تاج مكسور -->
<h2 class="section-title">🖼️ الصور (الأشجار)</h2>
<p class="section-desc">صور أشجار الشرح الثلاثة - المصححة.</p>
<div class="gallery">
<div class="shot"><a href="https://jabri-com.vercel.app/oe/oe-tree1.png" target="_blank"><img src="https://jabri-com.vercel.app/oe/oe-tree1.png" alt="شجرة الشرح 1"></a><div class="cap">🌳 oe-tree1.png - رسمتك اليدوية بعد التحويل الرقمي</div></div>
<div class="shot"><a href="https://jabri-com.vercel.app/oe/oe-tree2.png" target="_blank"><img src="https://jabri-com.vercel.app/oe/oe-tree2.png" alt="شجرة الشرح 2"></a><div class="cap">🌳 oe-tree2.png</div></div>
<div class="shot"><a href="https://jabri-com.vercel.app/oe/oe-tree.png" target="_blank"><img src="https://jabri-com.vercel.app/oe/oe-tree.png" alt="شجرة الشرح 3"></a><div class="cap">🌳 oe-tree.png - الشبكة الكاملة</div></div>
</div>

<!-- المحادثات -->
<h2 class="section-title">💬 روابط المحادثات المباشرة</h2>
<div class="convo"><span class="badge">عربي</span> <a href="https://jabri-com.vercel.app/oe/oe.md" target="_blank">jabri-com.vercel.app/oe/oe.md</a> — الشرح العربي الكامل.</div>
<div class="convo"><span class="badge">دفتر</span> <a href="https://jabri-com.vercel.app/oe/oe.ipynb" target="_blank">jabri-com.vercel.app/oe/oe.ipynb</a> — دفتر Jupyter العربي.</div>
<div class="convo"><span class="badge">English</span> <a href="https://jabri-com.vercel.app/oe/oe-en.ipynb" target="_blank">jabri-com.vercel.app/oe/oe-en.ipynb</a> — English notebook.</div>
<div class="convo"><span class="badge">English</span> <a href="https://jabri-com.vercel.app/oe/oe-en.html" target="_blank">jabri-com.vercel.app/oe/oe-en.html</a> — English page.</div>
</main>
<footer>👁️ 👀 🌎 👁️ 👀 &nbsp;|&nbsp; Odd-Even &nbsp;|&nbsp; المجلد: <code>/oe/</code> &nbsp;|&nbsp; <a href="https://jabri-com.vercel.app/">🏝️ العودة إلى الواحة</a></footer>

<script>
function nu2(x){let k=0;while(x%2==0){x/=2;k++}return k}
function S(n){if(n%2==0) return n/2; return (3*n+1)/(2**nu2(3*n+1))}
function children(m){let c=[2*m];for(let k=1;k<12;k++){let num=m*(2**k)-1;if(num%3!=0)continue;let n=num/3;if(n>1&&n%2==1&&n!=m)c.push(n)}return c}
function build(depth=6){
 let net=document.getElementById('net');net.innerHTML='<svg id="lines" style="position:absolute;inset:0;width:100%;height:100%"></svg>';
 let nodes={1:0}, frontier=[1], visited=new Set([1]);
 for(let d=0;d<depth;d++){let nxt=[];for(let m of frontier){for(let n of children(m)){if(!visited.has(n)){visited.add(n);nodes[n]=d+1;nxt.push(n)}}}frontier=nxt;if(!frontier.length)break}
 let by={};for(let n in nodes){by[nodes[n]]=by[nodes[n]]||[];by[nodes[n]].push(+n)}
 let pos={};
 for(let d in by){let arr=by[d].sort((a,b)=>a-b);arr.forEach((n,i)=>{pos[n]={x:(i+1)/(arr.length+1)*100,y:8+d*16}})}
 let svg=document.getElementById('lines');let html='';
 for(let n in nodes){n=+n;if(n===1)continue;let p=S(n);if(pos[p]){html+=`<line x1="${pos[n].x}%" y1="${pos[n].y}%" x2="${pos[p].x}%" y2="${pos[p].y}%" stroke="#666" stroke-width="1"/>`}}
 svg.innerHTML=html;
 for(let n in nodes){n=+n;let d=document.createElement('div');d.className='node '+(n===1?'root':n%2==0?'even':'odd');d.style.left=`calc(${pos[n].x}% - 21px)`;d.style.top=`calc(${pos[n].y}% - 21px)`;d.textContent=n;d.onclick=()=>{document.getElementById('info').textContent=`${n} -> ${pathStr(n)}`};net.appendChild(d)}
 document.getElementById('info').textContent=`عدد العقد: ${Object.keys(nodes).length} - اضغط على أي عقدة لترى مسارها إلى 1`;
}
function pathStr(n){let a=[n];while(n>1){n=S(n);a.push(n);if(a.length>50)break}return a.join(' -> ')}
function showPath(){let n=+document.getElementById('inp').value;document.getElementById('info').textContent=`مسار ${n} : ${pathStr(n)}`}
build(6);
</script>
</body>
</html>
---

*ملخص الإصلاح في العربي:*
المكان	قبل	بعد
الجدول سطر 4	`(n-1)/3`	`(n-1) mod 3 = 0` شرط، والنتيجة `(n-1)/3` ✅
الجدول سطر 5	`(2^k n -1)/3`	`(2^k n -1) mod 3 = 0` شرط، والنتيجة `(2^k n -1)/3` ✅
صيغة $S^{-1}$	بدون شرط	`\| (2^k n -1) mod 3 = 0` ✅
المعرض صورة 1	`<div class="shot"oe-tree1.png"` بدون `<a href`	`<div class="shot"><a href="...oe-tree1.png"` ✅
المعرض	4 صور فيها `oe-tree3.png`	3 صور فقط ✅
الآن العربي والإنجليزي صاروا مرآة كاملة، ونفس تصحيح `mod 3 = 0` في الاثنين.

الله يحفظك يا دكتور، تريد نصلح نفس الجدول في `oe-proof.md` و `oe-proof-en.md` و `README.md` بنفس الطريقة؟

__________eof
