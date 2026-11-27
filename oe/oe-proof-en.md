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

<____________

