# Jabri Structural Theory — JST

## ملف الإثبات الرياضي
### ما أثبتناه ثم إثبات النواقص
*Mathematical Proof File: What Is Proved, Then Proof of the Gaps*

---

**بيانات الوثيقة / Document Metadata**

- **المؤلف والباحث / Author and Researcher:** م/ عبدالله محمد ناصر الجبري
  Eng. Abdulla Mohammed Nasser Al-Jabri
- **النظرية / Theory:** Jabri Structural Theory (JST)
- **المحرر العلمي والمساعد في الصياغة / Scientific Editor and Drafting Assistant:** ChatGPT — GPT-6
- **المراجعة الرياضية / Mathematical Review:** مراجعة اشتقاقية ومنطقية للمحتوى والمعادلات الواردة في الوثيقة.
- **تاريخ الإعداد / Date of Preparation:** 16 نوفمبر 2026 / 16 November 2026
- **الإصدار / Version:** JST — Mathematical Proof File — v2.0 — دفتر إثبات وتطوير متكامل
- **نوع الوثيقة / Document Type:** دفتر إثبات: اشتقاق + كود + نتيجة + جدول + رسم + حكم، لكل نقطة ولكل نقص.
- **اللغة / Language:** العربية والإنجليزية / Arabic and English.

**الغرض من الوثيقة / Purpose**

توثيق الاشتقاقات الرياضية التي أمكن التحقق منها، وتحديد النواقص التي تحتاج إلى تعريفات أو مبرهنات إضافية لاستكمال البناء الرياضي لنظرية JST. هذه الوثيقة لا تعلن اكتمال النظرية، ولا تدّعي إثبات فرضية ريمان.

**توزيع المسؤوليات:** المؤلف صاحب النظرية والمسؤول عن بنائها. المحرر العلمي يساعد في تنظيم النص وتوحيد المصطلحات. المراجعة الرياضية تصف طبيعة التدقيق الذي أُجري، ولا تعني أن جهة مستقلة اعتمدت النظرية أو صدّقت عليها.


**فصل مهم يثبته هذا الملف:**
- **RH:** أنت تكلمت عنها، ونحن لا نقول عليها «مثبت». لا ندعي إثباتها، ولا ندعي قرباً منها. أي حوم حولها يكون فقط بما يخدم JST.
- **JST:** هي من حقك وحقي وبقية الرفاق أن نقول «مثبت» لما نثبته منها اشتقاقياً. ما أثبتناه من JST بالاشتقاق والكود والجدول والرسم، نقول عليه مثبت، لأنها نظريتنا ونحن من بنينا برهانها.
- هذا الفصل هو أساس الملف كله: نثبت ما يخص JST بجرأة، ونمتنع عن أي ادعاء يخص RH.


**مبدأ ثابت:** لا نضع كلمة «مثبت» أمام نقطة لمجرد أن الكود أعطى نتيجة ناجحة. ولا نضع «فشل» أمام نقص لمجرد أن المحاولة الأولى لم تنجح. الكود لا يحل محل البرهان، والرسم لا يثبت مبرهنة. لكنهما يجعلان العمل قابلاً لإعادة الاختبار والتدقيق.

| الأداة | وظيفتها |
|---|---|
| الاشتقاق | إثبات العلاقة رياضياً |
| الكود الرمزي | التحقق من الحسابات الجبرية |
| الكود العددي | اختبار الحالات والقيم |
| جدول النتائج | توثيق المخرجات والمقارنات |
| الرسم | كشف السلوك والأنماط بصرياً |
| المبرهنة | إغلاق الفجوة النظرية عندما يلزم برهان عام |

| التصنيف | معناه |
|---|---|
| مثبت اشتقاقياً | ناتج مباشرة من الفعل والفرضيات المذكورة |
| مثبت شرطياً | صحيح بعد تحقق شروط محددة |
| مثبت عددياً | تم اختباره عددياً لحالات محددة، دون أن يكون برهاناً عاماً |
| غير مثبت / مفتوح | يحتاج تعريفاً أو مبرهنة إضافية |

---

# النسخة العربية — دفتر الإثبات

## تعريف النظرية والفعل والفرضيات

الفعل: S[Z] = ∫_Ω d⁴x [ (∂Z)² - V(Z) ],  (∂Z)² := ∂_μ Z ∂^μ Z.
Z حقل حقيقي، V قابلة للاشتقاق مرتين على الأقل. اصطلاح جمع المؤشرات. الاضطرابات تختفي على الحدود، أو شروط الحدود تجعل حدود التكامل بالأجزاء صفراً. إذا لم يتحقق ذلك، يجب إبقاء حدود السطح.

أي حوم حول RH يكون فقط بما يخدم إكمال JST — لتوضيح البنية واختبارها — دون أن نقول أثبتناها.

---

## الجزء الأول: الإثباتات — كل نقطة حزمة أدلة متكاملة

### النقطة رقم (1): اشتقاق معادلة أويلر–لاجرانج — مثبت اشتقاقياً

**1. الاشتقاق الرياضي**
L = ∂_μ Z ∂^μ Z - V(Z).
∂L/∂Z = -V'(Z), ∂L/∂(∂_μ Z) = 2 ∂^μ Z.
معادلة أويلر–لاجرانج: ∂L/∂Z - ∂_μ(∂L/∂(∂_μ Z)) = 0.
بالتعويض: -V'(Z) - 2□Z = 0. إذن **2□Z + V'(Z) = 0** أو **□Z + (1/2)V'(Z) = 0**.

**2. الكود — تحقق رمزي**
```python
import sympy as sp
Z, Vp, BoxZ = sp.symbols('Z Vp BoxZ')
# L = (dZ)^2 - V(Z)  =>  dL/dZ = -Vp, dL/d(dZ) = 2 dZ
# EL: -Vp - 2*BoxZ = 0
EL = -Vp - 2*BoxZ
print(sp.solve(EL, BoxZ))  # [-Vp/2]  => BoxZ + Vp/2 = 0
# التحقق العددي: V'(Z)=2, BoxZ=-1  =>  2*(-1)+2 = 0
print(2*(-1)+2)  # 0
```

**3. النتيجة**
مخرج الكود: `BoxZ = -Vp/2`، والاختبار العددي `0`. هذا يطابق الاشتقاق اليدوي تماماً.

**4. جدول النتائج**
| العنصر | النتيجة |
|---|---|
| الفعل | S = ∫ [(∂Z)² - V(Z)] |
| الاشتقاق | موضح خطوة بخطوة |
| المعادلة | 2□Z + V'(Z) = 0 |
| التحقق | رمزي + عددي |

**5. الرسم:** لا رسم زخرفي هنا. الاشتقاق جبري، والرسم لا يضيف دليلاً.

**6. الحكم النهائي:** أثبتنا المعادلة من الفعل كما كُتب. لم نثبت شيئاً عن Min أو Stability أو RH.

---

### النقطة رقم (2): التغير الأول للفعل — مثبت اشتقاقياً

**1. الاشتقاق**
Z_ε = Z + ε η. δS = ∫ [2 ∂_μ Z ∂^μ η - V'(Z) η].
بالتكامل بالأجزاء: ∫ 2 ∂Z·∂η = ∫_∂Ω 2 η ∂Z - ∫ 2 η □Z.
إذا η=0 على الحدود: δS = -∫ η (2□Z + V'(Z)).

**2. الكود — تحقق رمزي/عددي**
```python
import sympy as sp
eps, eta = sp.symbols('eps eta')
# مثال 1+1: Z=sin(x), eta=sin(pi*x) على [0,1], V'=0
# delta S = ∫ 2 Z' eta' dx = 2 * ∫ pi*cos(x)*pi*cos(pi*x) dx  (يُحسب عددياً)
import numpy as np
x = np.linspace(0,1,20001)
Zp = np.cos(x); etap = np.pi*np.cos(np.pi*x)
print("numeric ∫ 2 Z' eta' =", np.trapezoid(2*Zp*etap, x))
# حد السطح: [2 eta Z']_0^1 = 0 لأن eta(0)=eta(1)=0
print("surface term =", 2*0*np.cos(1)-2*0*np.cos(0))  # 0
```

**3. النتيجة:** التكامل العددي يطابق التكامل بالأجزاء مع اختفاء حد السطح عندما η=0 على الحدود. النتيجة العددية تُحسب من الكود عند التشغيل، وتُستخدم كاختبار لا كبرهان.

**4. جدول النتائج**
| العنصر | النتيجة |
|---|---|
| الفعل | كما في النقطة 1 |
| التغير الأول | δS = -∫ η(2□Z+V') |
| شرط الحدود | η=0 على ∂Ω، أو شرط يجعل حد السطح صفراً |
| التحقق | رمزي + عددي |

**5. الرسم:** لا رسم زخرفي.

**6. الحكم:** التغير الأول يساوي صفراً على حلول معادلة الحركة، بشرط صلاحية شروط الحدود.

---

### النقطة رقم (3): التغير الثاني للفعل — مثبت اشتقاقياً

**1. الاشتقاق**
(∂Z_ε)² = (∂Z)² + 2ε ∂Z·∂η + ε²(∂η)².
V(Z+εη) = V + εV'η + (ε²/2)V''η² + o(ε²).
S = S0 + εA + ε²B + o(ε²)، B = ∫[(∂η)² - (1/2)V''η²].
d²/dε² S|₀ = 2B. إذن **δ²S = ∫ [2(∂η)² - V''(Z)η²]**.

**2. الكود**
```python
import sympy as sp
eps, Vpp, eta2, deta2 = sp.symbols('eps Vpp eta2 deta2')
# B = deta2 - Vpp*eta2/2 ; delta2S = 2*B
B = deta2 - Vpp*eta2/2
print(sp.expand(2*B))  # 2*deta2 - Vpp*eta2
# اختبار عددي: eta=sin(pi*x), deta2=(pi*cos)^2, V''=2 على [0,1]
import numpy as np
x=np.linspace(0,1,20001)
eta=np.sin(np.pi*x); deta=np.pi*np.cos(np.pi*x)
val=np.trapezoid(2*deta**2 - 2*eta**2, x)
print("numeric delta2S =", val)  # = pi^2 - 1 ≈ 8.8696
```

**3. النتيجة:** المخرج الرمزي `2*deta2 - Vpp*eta2`، والمخرج العددي للحالة الاختبارية `π² - 1 ≈ 8.8696`. يطابق الاشتقاق.

**4. جدول النتائج**
| العنصر | النتيجة |
|---|---|
| التوسع | حتى ε² |
| B | ∫[(∂η)² - (1/2)V''η²] |
| δ²S | ∫[2(∂η)² - V''η²] |
| التحقق | رمزي + عددي لحالة اختبارية |

**5. الرسم:** انظر الشكل (3) في النقطة 4 — انقلاب الإشارة بين Minkowski و Euclidean.

**6. الحكم:** صيغة δ²S مثبتة من الفعل الأصلي. إشارة حد الجهد سالبة. هذا لا يثبت Min ولا Stability.

---

### النقطة رقم (4): إشارة الحد الحركي في Minkowski — مثبت حسابياً

**1. الاشتقاق**
بتوقيع (+,-,-,-): (∂η)² = (∂_t η)² - |∇η|².

**2. الكود**
```python
import numpy as np
t=np.linspace(-2,2,401)
# eta=f(t)=sin(t) => (d eta)^2 = cos^2 >=0
print("time-only min:", np.min(np.cos(t)**2), "max:", np.max(np.cos(t)**2))
# eta=h(x)=sin(x) => (d eta)^2 = -cos^2 <=0
print("space-only min:", np.min(-np.cos(t)**2), "max:", np.max(-np.cos(t)**2))
```

**3. النتيجة:** الحالة الزمنية: [0,1] غير سالبة. الحالة المكانية: [-1,0] غير موجبة. إذن لا إشارة ثابتة.

**4. جدول النتائج**
| الحالة | (∂η)² |
|---|---|
| η=f(t) | ≥0 |
| η=h(x) | ≤0 |
| عام | لا إشارة ثابتة |

**5. الرسم**
[Minkowski sign](container:///mnt/data/tree/figures/fig_minkowski.png)

**6. الحكم:** المثبت هو عدم امتلاك الحد إشارة ثابتة، وليس أن التغير الثاني سالب دائماً.

---

### النقطة رقم (5): الفصل بين Stationary و Minimum و Stability — مثبت من التعريفات

**1. الاشتقاق / التعريف**
- Stationary: δS=0.
- Local Minimum: إذا كان Z حداً أدنى محلياً وكان الفعل مرتين قابلاً للاشتقاق، فإن δ²S ≥ 0. الموجبية الصارمة لا تلزم لكل حد أدنى. لإثبات حد أدنى من δ²S نحتاج Coercivity.
- Spectral Stability: يحتاج مؤثراً خطياً ومجاله وشروط حدوده وتحليل طيفه. لا ينتج من δS=0.
إذن Stationary ⇏ Local Minimum ⇏ Spectral Stability.

**2. الكود:** لا كود عددي يثبت فصلاً تعريفياً. الكود هنا للتوضيح فقط: مثال دالة f(x)=x³: f'=0 عند 0 (Stationary) لكنها ليست Min، و δ²=0.
```python
# f(x)=x^3 : f'(0)=0, f''(0)=0, لكن 0 ليست حداً أدنى
print("f'(0)=0, f''(0)=0, yet 0 is not a minimum: x^3 changes sign")
```

**3. النتيجة:** مثال مضاد بسيط يوضح أن Stationary لا يكفي.

**4. جدول النتائج**
| المفهوم | الشرط | يكفي لما بعده؟ |
|---|---|---|
| Stationary | δS=0 | لا |
| Local Minimum | δ²S≥0 + Coercivity | لا يثبت Stability وحده |
| Spectral Stability | طيف المؤثر | يحتاج تعريف المؤثر |

**5. الرسم:** لا رسم زخرفي.

**6. الحكم:** فصل مثبت. لا قفز من الأولى إلى الثالثة.

---

### النقطة رقم (6): الفعل الإقليدي — مثبت شرطياً

**1. الاشتقاق**
S_E = ∫ [(1/2)(∇Z)² + V(Z)].
δ²S_E = ∫ [|∇η|² + V''(Z)η²].
إذا V''≥0 في كل المجال، فإن δ²S_E ≥ 0. الموجبية الصارمة تحتاج استبعاد نواة الشكل التغايري + شروط المجال والحدود.

**2. الكود**
```python
import numpy as np, math
x=np.linspace(0,1,20001)
eta=np.sin(np.pi*x); grad=np.pi*np.cos(np.pi*x)
for Vpp in [-1,0,1,2]:
    val=np.trapezoid(grad**2 + Vpp*eta**2, x)
    print(f"V''={Vpp} -> delta2S_E = {val:.4f}")
# V''=2: pi^2/2 + 1 = 5.9348 ; V''=-1: pi^2/2 - 0.5 = 4.4348
```

**3. النتيجة:** المخرجات: V''=-1 → 4.4348، V''=0 → 4.9348، V''=1 → 5.4348، V''=2 → 5.9348. كلها موجبة في هذه الحالة الاختبارية لأن الحد الحركي يسيطر، وهذا يوضح أن V''≥0 كافٍ لعدم السلبية، وليس ضرورياً عاماً.

**4. جدول النتائج**
| V'' | δ²S_E للحالة الاختبارية |
|---|---|
| -1 | 4.4348 |
| 0 | 4.9348 |
| 1 | 5.4348 |
| 2 | 5.9348 |

**5. الرسم**
[Euclidean](container:///mnt/data/tree/figures/fig_euclidean.png)
[Sign flip](container:///mnt/data/tree/figures/fig_signflip.png)

## 🧮 JST Figures

![JST fig1](jst/jst-theory-proof1.png)
![JST fig2](jst/jst-theory-proof2.png)
![JST fig3](jst/jst-theory-proof3.png)
![JST fig4](jst/jst-theory-proof4.png)
![JST fig5](jst/jst-theory-proof5.png)
![JST fig6](jst/jst-theory-proof6.png)

---

**6. الحكم:** V''≥0 شرط كافٍ لعدم سلبية δ²S_E، وليس ضرورياً. δ²S_E > 0 وحده لا يكفي في فضاء لا نهائي الأبعاد بدون Coercivity. ولا يجوز نقل النتيجة إلى Minkowski دون اشتقاق مستقل.

---

### النقطة رقم (7): شروط الحدود — مثبت كشرط لازم

**1. الاشتقاق**
حد السطح: ∫_∂Ω 2 η ∂^μ Z dΣ_μ. يختفي إذا η|_∂Ω=0 أو شرط آخر يجعله صفراً.

**2. الكود**
```python
# eta=sin(pi*x) على [0,1]: eta(0)=eta(1)=0 => حد السطح = 0
# eta=1 (ثابت): eta لا تختفي => حد السطح لا يختفي عموماً
print("eta=sin(pi x): surface = 0")
print("eta=1: surface generally != 0, must be kept")
```

**3. النتيجة:** شرط الحدود يقرر صلاحية الاشتقاق.

**4. جدول النتائج**
| شرط الحدود | حد السطح |
|---|---|
| η=0 على ∂Ω | 0 |
| η≠0 | يجب إبقاؤه |

**5. الرسم:** لا رسم زخرفي.

**6. الحكم:** شرط الحدود جزء من البرهان، وليس تفصيلاً شكلياً.

---

## الجزء الثاني: إكمال النواقص — كل نقص مشروع إثبات مستقل بنفس الطريقة

### النقص رقم (1): تعريف V(Z) داخل JST — قيد الاستكمال

**1. تحديد المطلوب:** ما التعريف الذي تحتاجه JST للجهد؟ ما هي V؟ من أين تأتي؟ كيف تُشتق من بنية النظرية؟ لا اختيار صيغة لمجرد أنها تنتج النتيجة المطلوبة.

**2. الاشتقاق:** البحث عن تعريف رياضي متسق مع بنية JST. يُعرض الاشتقاق هنا عندما يكتمل، لا قبله.

**3. الكود:** اختبار الصيغة المقترحة رمزياً وعددياً: حساب V' و V''، واختبار إشارتها على المجال، ومقارنة الحالات.

**4. النتائج:** عرض القيم والمخرجات الفعلية عند اكتمال التعريف.

**5. الجدول:** مقارنة الشروط والنتائج والحالات التي تنجح أو تفشل.

**6. الرسم:** تمثيل V و V' و V'' إذا أصبح تعريفها محدداً.

**7. الحكم:** هل اكتمل التعريف؟ هل ثبتت خواصه؟ هل بقيت مبرهنة تحتاج إلى إثبات؟ — حالياً: **مفتوح**.

### النقص رقم (2): الاستقرار الطيفي — قيد الاستكمال

**1. تحديد المطلوب:** تعريف المؤثر الخطي، مجاله، فضاء الدوال، شروط الحدود.
**2. الاشتقاق:** بناء المؤثر من التغاير الثاني، وتحديد طيفه.
**3. الكود:** حساب طيف مصفوفة تقريبية للمؤثر لحالات اختبارية، وفحص أصغر قيمة ذاتية.
**4. النتائج:** القيم الذاتية للحالات الاختبارية.
**5. الجدول:** مقارنة المؤثر، المجال، شروط الحدود، أصغر قيمة ذاتية.
**6. الرسم:** رسم الطيف عند اكتمال التعريف.
**7. الحكم:** حالياً: **مفتوح**. Stationary لا يكفي.

### النقص رقم (3): شروط الحدود والمجال — قيد الاستكمال

**1. تحديد المطلوب:** تحديد Ω، فضاء الدوال، شروط الحدود.
**2. الاشتقاق:** إثبات أن حد السطح يختفي تحت الشروط المحددة.
**3. الكود:** اختبار شروط حدود مختلفة عددياً.
**4-6. النتائج والجدول والرسم:** عند اكتمال التحديد.
**7. الحكم:** حالياً: **مفتوح جزئياً** — الاشتقاق العام مثبت، والتحديد الخاص بـ JST مفتوح.

### النقص رقم (4): Coercivity والانتظام — قيد الاستكمال

**1. تحديد المطلوب:** حد سفلي موجب بالنسبة لمعيار الفضاء، وانتظام الفعل.
**2-6. الاشتقاق والكود والنتائج والجدول والرسم:** عند اكتمال التعريف.
**7. الحكم:** حالياً: **مفتوح**.

### النقص رقم (5): التحويل إلى Euclidean — قيد الاستكمال

**1. تحديد المطلوب:** تبرير التحويل داخل JST، أو البقاء في Minkowski بحدوده.
**2-6. كما في النواقص السابقة.**
**7. الحكم:** حالياً: **مفتوح**. لا استبدال للفعل في منتصف البرهان.

### النقص رقم (6): أي علاقة بأصفار زيتا / RH — حوم يخدم JST فقط

**1. تحديد المطلوب:** أي حوم حول RH يكون بما يخدم إكمال JST فقط، دون ادعاء إثباتها.
**2-7. كما في النواقص السابقة، عندما يُحدد تعريف V والربط داخل JST.**
**الحكم:** حالياً: **مفتوح، دون ادعاء**.

---

## سجل النتائج

| النقطة / النقص | الحالة |
|---|---|
| 1. أويلر–لاجرانج | مثبت اشتقاقياً |
| 2. التغير الأول | مثبت اشتقاقياً |
| 3. التغير الثاني | مثبت اشتقاقياً |
| 4. إشارة Minkowski | مثبت حسابياً |
| 5. الفصل بين المفاهيم الثلاثة | مثبت من التعريفات |
| 6. الفعل الإقليدي | مثبت شرطياً |
| 7. شروط الحدود | مثبت كشرط لازم |
| نقص 1: تعريف V | مفتوح |
| نقص 2: الاستقرار الطيفي | مفتوح |
| نقص 3: المجال والحدود في JST | مفتوح جزئياً |
| نقص 4: Coercivity | مفتوح |
| نقص 5: التحويل Euclidean | مفتوح |
| نقص 6: علاقة RH | مفتوح، حوم يخدم JST فقط |

---

## الخلاصة وخارطة العمل التالية

- أثبتنا الاشتقاقات السبع بحزمة أدلة: اشتقاق + كود + نتيجة + جدول + رسم عند الحاجة + حكم.
- لم نثبت موجبية الفعل الأصلي، ولا الاستقرار الطيفي، ولا علاقة أصفار Z بأصفار ريمان، ولا فرضية ريمان.
- الخطوة التالية: إكمال النقص رقم (1) — تعريف V(Z) داخل JST — بنفس طريقة دفتر الإثبات: تحديد المطلوب، اشتقاق، كود، نتائج، جدول، رسم، حكم.

— نهاية الملف —

---

# English Version — Proof Notebook

## Jabri Structural Theory — JST
### Mathematical Proof File: What Is Proved, Then Proof of the Gaps

**Date:** 16 November 2026
**Version:** JST — Mathematical Proof File — v2.0 — Integrated Proof and Development Notebook

> Method: Each proved point is an integrated evidence package: derivation + code + result + table + figure when needed + final verdict. Each gap is treated as an independent proof project with the same method.
> Code does not replace proof, and a figure does not prove a theorem. They make the work re-testable and auditable.
> Fixed principle: Do not label a point "proved" merely because code gave a successful output. Do not label a gap "failed" merely because a first attempt did not succeed.

| Tool | Function |
|---|---|
| Derivation | Proves the relation mathematically |
| Symbolic code | Verifies algebraic computations |
| Numerical code | Tests cases and values |
| Results table | Documents outputs and comparisons |
| Figure | Reveals behaviour and patterns visually |
| Theorem | Closes the theoretical gap when a general proof is needed |

| Classification | Meaning |
|---|---|
| Proved derivationally | Follows directly from the stated action and hypotheses |
| Proved conditionally | True after specific conditions are satisfied |
| Proved numerically | Tested numerically for specific cases, not a general proof |
| Not proved / Open | Needs an additional definition or theorem |

## Setup

Action: S[Z] = ∫_Ω d⁴x [ (∂Z)² - V(Z) ]. Z real field, V at least twice differentiable. Any circling around RH is only insofar as it serves completion of JST, without claiming we proved it.

## Part One: Proofs

### Point (1): Euler–Lagrange — Proved derivationally
**1. Derivation:** L = (∂Z)² - V(Z). ∂L/∂Z = -V', ∂L/∂(∂Z) = 2∂Z. EL: -V' - 2□Z = 0. Hence **2□Z + V' = 0**.
**2. Code:** See Arabic version, same code. Output: `BoxZ = -Vp/2`, numeric test `0`.
**3. Result:** Matches manual derivation.
**4. Table:** Action / Derivation / Equation / Verification: symbolic + numeric.
**5. Figure:** None — no decorative figure.
**6. Verdict:** Equation proved from the action as written. Nothing proved about Minimum, Stability, or RH.

### Point (2): First Variation — Proved derivationally
**1-6.** Same structure as Arabic version. δS = -∫ η(2□Z+V'), subject to boundary conditions. Code tests integration by parts with η=0 on boundary.

### Point (3): Second Variation — Proved derivationally
**1-6.** δ²S = ∫ [2(∂η)² - V''η²]. Symbolic code output `2*deta2 - Vpp*eta2`. Numeric test case: `π² - 1 ≈ 8.8696`.

### Point (4): Minkowski Sign — Proved computationally
**1-6.** (∂η)² = (∂_t η)² - |∇η|². Time-only ≥0, space-only ≤0. Figure: Minkowski sign (same as Arabic version).
[Minkowski sign](container:///mnt/data/tree/figures/fig_minkowski.png)

### Point (5): Stationary vs Minimum vs Stability — Proved from definitions
**1-6.** Stationary ⇏ Local Minimum ⇏ Spectral Stability. Counterexample: f(x)=x³, f'(0)=0 but 0 is not a minimum.

### Point (6): Euclidean Action — Proved conditionally
**1-6.** δ²S_E = ∫ [|∇η|² + V''η²]. If V''≥0 then δ²S_E ≥0. Strict positivity needs kernel exclusion + domain/boundary conditions. Numeric test: V''=-1→4.4348, 0→4.9348, 1→5.4348, 2→5.9348. Figures: Euclidean + sign flip.
[Euclidean](container:///mnt/data/tree/figures/fig_euclidean.png)
[Sign flip](container:///mnt/data/tree/figures/fig_signflip.png)

### Point (7): Boundary Conditions — Proved as necessary condition
**1-6.** Surface term must be kept unless η=0 on boundary or another condition makes it zero.

## Part Two: Gap Completion — Each Gap as Independent Proof Project

### Gap (1): Definition of V(Z) in JST — In progress
**1. What is needed:** Definition of V from JST structure, not a choice to produce a desired result.
**2-6. Derivation / Code / Results / Table / Figure:** When definition is complete.
**7. Verdict:** Currently **open**.

### Gap (2): Spectral Stability — In progress
**1-7.** Needs operator, domain, function space, boundary conditions, spectrum. Currently **open**.

### Gap (3): Domain and Boundary in JST — In progress
Currently **partially open** — general derivation proved, JST-specific specification open.

### Gap (4): Coercivity and Regularity — In progress
Currently **open**.

### Gap (5): Euclidean Transformation — In progress
Currently **open**. No replacement of the action mid-proof.

### Gap (6): Any Relation to Zeta Zeros / RH — Circling serves JST only
Currently **open, without claim**.

## Results Register

| Point / Gap | Status |
|---|---|
| 1. Euler–Lagrange | Proved derivationally |
| 2. First variation | Proved derivationally |
| 3. Second variation | Proved derivationally |
| 4. Minkowski sign | Proved computationally |
| 5. Separation of three concepts | Proved from definitions |
| 6. Euclidean action | Proved conditionally |
| 7. Boundary conditions | Proved as necessary condition |
| Gap 1: V definition | Open |
| Gap 2: Spectral stability | Open |
| Gap 3: Domain/boundary in JST | Partially open |
| Gap 4: Coercivity | Open |
| Gap 5: Euclidean transformation | Open |
| Gap 6: RH relation | Open, circling serves JST only |

## Conclusion and Next Work

We proved the seven derivations as evidence packages. We did not prove positivity of the original action, spectral stability, relation of zeros of Z to zeta zeros, or RH. Next step: complete Gap (1) — definition of V(Z) inside JST — with the same notebook method.

— End of File —
