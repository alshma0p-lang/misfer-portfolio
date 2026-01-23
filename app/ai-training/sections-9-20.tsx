// هذا الملف يحتوي على الأقسام 9-20 من الموقع التدريبي
// سيتم دمجه في الصفحة الرئيسية

export const Section9_TrustLoop = () => (
  <section id="trust-loop" className="py-20 px-4 bg-slate-900/50">
    <div className="container mx-auto max-w-4xl space-y-12">
      <div className="text-center space-y-4">
        <div className="text-6xl">🔐</div>
        <h2 className="text-4xl md:text-5xl font-bold">حلقة الثقة قبل الاعتماد</h2>
        <p className="text-xl text-slate-300">خطوات التحقق من المخرجات</p>
        <div className="h-1 w-32 bg-gradient-to-l from-blue-500 to-purple-500 mx-auto rounded-full"></div>
      </div>

      <div className="bg-gradient-to-br from-green-950/40 to-blue-950/40 border-2 border-green-600 rounded-2xl p-8">
        <h3 className="text-2xl font-bold text-center mb-8 text-green-300">الخطوات الأربع للثقة</h3>
        <div className="space-y-6">
          {[
            { num: 1, title: "اطلب مصادر أو مراجع", desc: "اسأل: من أين جئت بهذه المعلومة؟ أعط مصادر.", icon: "📚", color: "blue" },
            { num: 2, title: "تحقق خارجياً", desc: "ابحث في Google أو مصدر آخر للتأكد من صحة المعلومة", icon: "🔍", color: "yellow" },
            { num: 3, title: "قارن خيارين", desc: "اسأل نموذجين مختلفين نفس السؤال وقارن الإجابات", icon: "⚖️", color: "green" },
            { num: 4, title: "ثم قرر", desc: "بعد التحقق والمقارنة، قرر الاعتماد أو عدم الاعتماد", icon: "✅", color: "purple" }
          ].map((step) => (
            <div key={step.num} className="bg-slate-800/50 rounded-xl p-6 flex items-start gap-4 hover:bg-slate-700/50 transition">
              <div className="flex-shrink-0">
                <div className={`w-12 h-12 rounded-full bg-${step.color}-600 flex items-center justify-center font-bold text-xl text-white`}>
                  {step.num}
                </div>
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-3xl">{step.icon}</span>
                  <h4 className="font-bold text-xl text-white">{step.title}</h4>
                </div>
                <p className="text-slate-300">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-red-950/30 border border-red-700 rounded-xl p-8">
        <h3 className="text-2xl font-bold text-center mb-6 text-red-300 flex items-center justify-center gap-3">
          <span>🚩</span>
          <span>رايات حمراء: علامات تحذير</span>
        </h3>
        <p className="text-center text-slate-200 mb-6">إذا رأيت أياً من هذه العلامات، احذر ولا تعتمد على المخرجات مباشرة:</p>
        <div className="grid md:grid-cols-2 gap-4">
          {[
            { flag: "أرقام غريبة أو غير منطقية", example: "مثل: 'السعودية فيها 500 مليون نسمة'" },
            { flag: "تواريخ قديمة أو خاطئة", example: "معلومات من 2018 في موضوع متغير" },
            { flag: "تناقضات داخلية", example: "يقول شيء في البداية ونقيضه في النهاية" },
            { flag: "لغة غامضة أو عامة جداً", example: "'ربما' و'قد يكون' و'من الممكن'" },
            { flag: "مصادر غير موجودة", example: "يذكر دراسة أو مقال لا تجده في Google" },
            { flag: "ثقة مبالغ فيها", example: "يجزم بأشياء غير مؤكدة علمياً" }
          ].map((item, idx) => (
            <div key={idx} className="bg-slate-800/50 rounded-lg p-4 space-y-2">
              <div className="flex items-start gap-2">
                <span className="text-red-400 text-xl flex-shrink-0">🚩</span>
                <div className="flex-1">
                  <p className="font-bold text-red-300 text-sm">{item.flag}</p>
                  <p className="text-xs text-slate-400 mt-1">{item.example}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-blue-950/30 border border-blue-700 rounded-xl p-6">
        <h4 className="font-bold text-blue-300 text-lg mb-3">💡 نصيحة احترافية:</h4>
        <p className="text-slate-200 leading-relaxed mb-4">
          حسب دراسة حديثة، العمال يقضون 4.3 ساعة أسبوعياً في التحقق من مخرجات الذكاء الاصطناعي.
          هذا استثمار ضروري للحصول على نتائج موثوقة!
        </p>
        <p className="text-sm text-slate-400">المصدر: Infomineo، دراسة الهلوسة في AI، 2025</p>
      </div>

      {/* ملاحظات للمدرب */}
      <div className="bg-yellow-950/20 border border-yellow-700/50 rounded-xl p-6 space-y-3">
        <h4 className="text-xl font-bold text-yellow-400 flex items-center gap-2">
          <span>📋</span>
          ملاحظات للمدرب
        </h4>
        <div className="grid md:grid-cols-2 gap-4 text-sm text-slate-200">
          <div>
            <p className="font-semibold text-yellow-300 mb-2">⏱️ الزمن المقترح: 10 دقائق</p>
            <p className="font-semibold text-yellow-300 mb-1">سؤال افتتاح:</p>
            <p className="pr-4">"من منكم يطلب من AI ذكر المصادر دائماً؟"</p>
          </div>
          <div>
            <p className="font-semibold text-yellow-300 mb-1">نشاط تفاعل:</p>
            <p className="pr-4 mb-2">اعرض مثال لمعلومة خاطئة من AI واطلب من الحضور تحديد الرايات الحمراء.</p>
            <p className="font-semibold text-yellow-300 mb-1">إذا كان التفاعل ضعيف:</p>
            <p className="pr-4">"تذكروا: 47% من مستخدمي AI في الشركات اتخذوا قرارات مهمة بناءً على معلومات خاطئة!"</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export const Section10_PracticalUses = () => {
  const useCases = [
    {
      id: 1,
      title: "مذاكرة وفهم المواد",
      icon: "📖",
      goal: "تبسيط مواد دراسية معقدة",
      example: "شرح النظرية النسبية",
      prompt: `أنت معلم ماهر. اشرح لي [الموضوع] بطريقة بسيطة مع أمثلة من الحياة اليومية.

المستوى: [مبتدئ/متوسط/متقدم]
اللغة: عربية بسيطة
الشكل: نقاط رئيسية + أمثلة + أسئلة تقييم ذاتي`,
      outputFormat: "فقرات مرقمة + أمثلة عملية + 3 أسئلة تقييم",
      verification: "تحقق: هل الشرح واضح؟ هل الأمثلة منطقية؟ قارن مع مصدر آخر."
    },
    {
      id: 2,
      title: "تلخيص النصوص الطويلة",
      icon: "📄",
      goal: "تحويل نص طويل إلى نقاط رئيسية",
      example: "تلخيص مقال أو تقرير",
      prompt: `لخص النص التالي في [50/100/200] كلمة:

[النص هنا]

التركيز على: النقاط الرئيسية، القرارات المهمة، الأرقام الرئيسية
تجنب: التفاصيل الثانوية
الشكل: قائمة نقاط`,
      outputFormat: "قائمة نقاط مرتبة حسب الأهمية",
      verification: "تحقق: هل الملخص يغطي النقاط الأساسية؟ اقرأ النص الأصلي للتأكد."
    },
    {
      id: 3,
      title: "بحث مع مصادر موثوقة",
      icon: "🔍",
      goal: "الحصول على معلومات حديثة مع المراجع",
      example: "البحث عن إحصائيات أو دراسات",
      prompt: `ابحث عن [الموضوع] وأعطني:

1. ملخص بـ 3-5 نقاط رئيسية
2. أحدث الإحصائيات (آخر سنتين)
3. مصادر موثوقة لكل معلومة (روابط مباشرة)

اللغة: عربية
التركيز: معلومات حديثة فقط`,
      outputFormat: "نقاط + إحصائيات + مصادر مع روابط",
      verification: "تحقق: افتح المصادر وتأكد أنها حقيقية وذات صلة. تحقق من التواريخ."
    },
    {
      id: 4,
      title: "سيرة ذاتية احترافية",
      icon: "📝",
      goal: "كتابة أو تحسين سيرة ذاتية",
      example: "سيرة ذاتية لمهندس برمجيات",
      prompt: `أنت خبير كتابة سير ذاتية. ساعدني في كتابة سيرة احترافية:

المعلومات:
- المجال: [هندسة/تسويق/إدارة]
- الخبرة: [عدد السنوات]
- المهارات: [قائمة المهارات]
- التعليم: [المؤهلات]

المطلوب:
1. ملخص احترافي جذاب (50 كلمة)
2. صياغة خبرات العمل بطريقة قوية (إنجازات، أرقام)
3. ترتيب المهارات حسب الأهمية

النبرة: احترافية، واضحة، مختصرة`,
      outputFormat: "ملخص + خبرات مصاغة + مهارات مرتبة",
      verification: "تحقق: هل المعلومات صحيحة؟ هل اللغة خالية من الأخطاء؟ اطلب مراجعة من شخص آخر."
    },
    {
      id: 5,
      title: "الاستعداد للمقابلات",
      icon: "💼",
      goal: "التحضير لمقابلة عمل",
      example: "مقابلة لوظيفة مدير مشاريع",
      prompt: `أنا متقدم لوظيفة [المسمى الوظيفي] في مجال [المجال].

ساعدني في:
1. توقع 10 أسئلة شائعة
2. إجابات نموذجية لكل سؤال (50 كلمة لكل إجابة)
3. نصائح لإبراز نقاط القوة

النبرة: احترافية، واثقة، صادقة`,
      outputFormat: "أسئلة + إجابات نموذجية + نصائح",
      verification: "تحقق: هل الأسئلة واقعية؟ هل الإجابات تعكس خبرتك الحقيقية؟ تدرب مع صديق."
    },
    {
      id: 6,
      title: "إنشاء عروض تقديمية",
      icon: "📊",
      goal: "تصميم عرض تقديمي احترافي",
      example: "عرض عن استراتيجية التسويق",
      prompt: `ساعدني في إنشاء عرض تقديمي عن [الموضوع]:

الجمهور: [مدراء/فريق/عملاء]
المدة: [10/20/30] دقيقة
عدد الشرائح: [عدد]

المطلوب:
1. هيكل العرض (عناوين الشرائح)
2. النقاط الرئيسية لكل شريحة (3-4 نقاط)
3. أفكار للعناصر البصرية
4. نص افتتاحي وختامي قوي

النبرة: [احترافية/تحفيزية/تعليمية]`,
      outputFormat: "هيكل + محتوى شرائح + نص افتتاح وختام",
      verification: "تحقق: هل المحتوى منطقي ومرتب؟ هل مناسب للوقت المتاح؟ اعرضه على زميل."
    },
    {
      id: 7,
      title: "تلخيص اجتماعات",
      icon: "📋",
      goal: "استخراج قرارات ومهام من اجتماع",
      example: "اجتماع فريق أسبوعي",
      prompt: `لخص الاجتماع التالي واستخرج:

[نص الاجتماع أو النقاط المكتوبة]

المطلوب:
1. ملخص الاجتماع (50 كلمة)
2. القرارات المتخذة (قائمة)
3. المهام المطلوبة (مع المسؤول والموعد)
4. النقاط المفتوحة للمتابعة

الشكل: جدول منظم`,
      outputFormat: "ملخص + جدول قرارات + جدول مهام",
      verification: "تحقق: قارن مع ملاحظاتك. تأكد من المسؤوليات والمواعيد. شارك مع الحضور للتأكيد."
    },
    {
      id: 8,
      title: "تخطيط الأسبوع",
      icon: "📅",
      goal: "تنظيم مهام وأولويات الأسبوع",
      example: "خطة أسبوع عمل",
      prompt: `ساعدني في تنظيم أسبوع عملي:

المهام المطلوبة:
[قائمة المهام]

القيود:
- ساعات العمل: [عدد ساعات يومياً]
- أولوية عالية: [المهام المهمة]
- مواعيد نهائية: [التواريخ]

المطلوب:
1. توزيع المهام على أيام الأسبوع
2. تحديد الأولويات
3. تخصيص وقت لكل مهمة
4. فترات راحة واستراحة

الشكل: جدول أسبوعي`,
      outputFormat: "جدول زمني مفصل + أولويات",
      verification: "تحقق: هل الخطة واقعية؟ هل تراعي وقت الراحة؟ عدل حسب ظروفك."
    },
    {
      id: 9,
      title: "أفكار تسويقية",
      icon: "💡",
      goal: "توليد أفكار تسويق إبداعية",
      example: "تسويق منتج جديد",
      prompt: `أنت مستشار تسويق إبداعي. اقترح أفكار تسويقية لـ:

المنتج/الخدمة: [الوصف]
الجمهور: [الفئة المستهدفة]
الميزانية: [منخفضة/متوسطة/عالية]
القنوات: [سوشيال ميديا/بريد/إعلانات]

المطلوب:
1. 5 أفكار تسويقية إبداعية
2. لكل فكرة: الوصف، الهدف، التكلفة المتوقعة
3. ترتيب الأفكار حسب الأولوية

النبرة: إبداعية، عملية، قابلة للتنفيذ`,
      outputFormat: "قائمة أفكار مع تفاصيل لكل فكرة",
      verification: "تحقق: هل الأفكار مناسبة للجمهور والميزانية؟ اطلب رأي فريقك."
    },
    {
      id: 10,
      title: "دعم القرارات",
      icon: "🎯",
      goal: "تحليل خيارات لاتخاذ قرار مستنير",
      example: "الاختيار بين عروض عمل",
      prompt: `ساعدني في اتخاذ قرار بين خيارات متعددة:

الخيارات:
[خيار 1: التفاصيل]
[خيار 2: التفاصيل]
[خيار 3: التفاصيل]

المعايير المهمة:
[الراتب، الموقع، النمو الوظيفي، إلخ]

المطلوب:
1. جدول مقارنة (مزايا وعيوب)
2. تقييم كل خيار من 10
3. تحليل موضوعي
4. توصية مع السبب

مهم: أعطني التحليل فقط، القرار النهائي لي`,
      outputFormat: "جدول مقارنة + تقييمات + تحليل",
      verification: "تحقق: هل التحليل موضوعي؟ استشر أشخاص تثق بهم. القرار النهائي يجب أن يكون لك أنت."
    }
  ];

  return (
    <section id="practical-uses" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl space-y-12">
        <div className="text-center space-y-4">
          <div className="text-6xl">💡</div>
          <h2 className="text-4xl md:text-5xl font-bold">10 استخدامات عملية لغير التقنيين</h2>
          <p className="text-xl text-slate-300">أمثلة جاهزة مع برومبتات قابلة للنسخ</p>
          <div className="h-1 w-32 bg-gradient-to-l from-blue-500 to-purple-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
          {useCases.map((useCase) => (
            <div key={useCase.id} className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 space-y-4 hover:border-blue-500 transition-all">
              <div className="flex items-center gap-3 border-b border-slate-700 pb-3">
                <span className="text-4xl">{useCase.icon}</span>
                <div>
                  <h3 className="text-xl font-bold text-white">{useCase.title}</h3>
                  <p className="text-sm text-slate-400">{useCase.goal}</p>
                </div>
              </div>

              <div className="space-y-3">
                <div>
                  <p className="text-xs font-semibold text-green-400 mb-1">مثال:</p>
                  <p className="text-sm text-slate-300">{useCase.example}</p>
                </div>

                <div className="bg-slate-900 rounded-lg p-4">
                  <p className="text-xs font-semibold text-blue-400 mb-2">البرومبت الجاهز (انسخه):</p>
                  <pre className="text-xs text-slate-300 whitespace-pre-wrap leading-relaxed font-mono">
                    {useCase.prompt}
                  </pre>
                </div>

                <div>
                  <p className="text-xs font-semibold text-purple-400 mb-1">شكل المخرجات:</p>
                  <p className="text-xs text-slate-300">{useCase.outputFormat}</p>
                </div>

                <div className="bg-yellow-900/20 border border-yellow-700/50 rounded-lg p-3">
                  <p className="text-xs font-semibold text-yellow-400 mb-1">خطوة التحقق:</p>
                  <p className="text-xs text-slate-300">{useCase.verification}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ملاحظات للمدرب */}
        <div className="bg-yellow-950/20 border border-yellow-700/50 rounded-xl p-6 space-y-3">
          <h4 className="text-xl font-bold text-yellow-400 flex items-center gap-2">
            <span>📋</span>
            ملاحظات للمدرب
          </h4>
          <div className="grid md:grid-cols-2 gap-4 text-sm text-slate-200">
            <div>
              <p className="font-semibold text-yellow-300 mb-2">⏱️ الزمن المقترح: 20 دقيقة</p>
              <p className="font-semibold text-yellow-300 mb-1">سؤال افتتاح:</p>
              <p className="pr-4">"أي من هذه الاستخدامات يهمكم أكثر؟"</p>
            </div>
            <div>
              <p className="font-semibold text-yellow-300 mb-1">نشاط تفاعل:</p>
              <p className="pr-4 mb-2">اطلب من الحضور اختيار استخدام واحد وتجربة البرومبت مباشرة. خصص 5-7 دقائق لتطبيق عملي.</p>
              <p className="font-semibold text-yellow-300 mb-1">إذا كان التفاعل ضعيف:</p>
              <p className="pr-4">"هذه البرومبتات وفرت لأشخاص حقيقيين ساعات من العمل. جربوها بأنفسكم!"</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export const Section11_CommonMistakes = () => {
  const mistakes = [
    {
      id: 1,
      title: "الطلب الغامض",
      how: "تكتب طلب عام جداً مثل: 'اكتب لي محتوى'",
      why: "الذكاء الاصطناعي لا يعرف ماذا تريد بالضبط",
      fix: "استخدم الإطار الموجز: حدد الهدف، الجمهور، الطول، النبرة، الشكل",
      example: "❌ 'اكتب مقال' ➜ ✅ 'اكتب مقال 300 كلمة عن إدارة الوقت لطلاب الجامعة، نبرة ودية، 5 نصائح عملية'",
      icon: "🌫️",
      color: "blue"
    },
    {
      id: 2,
      title: "الثقة العمياء بالمخرجات",
      how: "تأخذ النتيجة وتستخدمها مباشرة بدون تحقق",
      why: "الذكاء الاصطناعي يمكن أن يخطئ أو يعطي معلومات قديمة",
      fix: "استخدم حلقة الثقة: اطلب مصادر، تحقق خارجياً، قارن خيارين",
      example: "✓ دائماً اسأل: 'ما مصدر هذه المعلومة؟' وتحقق من صحتها",
      icon: "👁️",
      color: "red"
    },
    {
      id: 3,
      title: "توقع الكمال من المرة الأولى",
      how: "تتوقع نتيجة مثالية من أول طلب",
      why: "حتى أفضل البرومبتات تحتاج تحسين",
      fix: "استخدم حلقة التحسين: مسودة ➜ نقد ➜ تحسين ➜ نهائي",
      example: "✓ توقع 2-3 جولات تحسين للمهام المهمة. هذا طبيعي!",
      icon: "🎯",
      color: "yellow"
    },
    {
      id: 4,
      title: "عدم إعطاء سياق كافي",
      how: "تطلب بدون شرح السياق أو الخلفية",
      why: "الذكاء الاصطناعي لا يعرف موقفك أو احتياجاتك الخاصة",
      fix: "أعط سياق واضح: من أنت، ماذا تحتاج، لماذا، لمن",
      example: "❌ 'اكتب بريد' ➜ ✅ 'أنا موظف في شركة تقنية، أريد بريد لطلب إجازة من مديري، نبرة رسمية مهذبة'",
      icon: "📖",
      color: "purple"
    },
    {
      id: 5,
      title: "نسيان تحديد شكل المخرجات",
      how: "لا تذكر كيف تريد الناتج",
      why: "قد تحصل على فقرات بينما تريد قائمة أو جدول",
      fix: "حدد دائماً: الشكل المطلوب (قائمة/جدول/فقرات)، الطول، التنسيق",
      example: "✓ أضف في نهاية الطلب: 'الشكل: جدول من 3 أعمدة' أو 'قائمة من 5 نقاط'",
      icon: "📋",
      color: "green"
    },
    {
      id: 6,
      title: "تجاهل الأخطاء اللغوية",
      how: "تستخدم المحتوى بدون مراجعة لغوية",
      why: "الذكاء الاصطناعي يمكن أن يرتكب أخطاء نحوية أو أسلوبية",
      fix: "راجع اللغة دائماً، أو استخدم أداة تدقيق إضافية",
      example: "✓ اطلب في نهاية البرومبت: 'تأكد من اللغة العربية الفصحى الصحيحة'",
      icon: "📝",
      color: "orange"
    },
    {
      id: 7,
      title: "عدم حفظ البرومبتات الناجحة",
      how: "تكتب نفس الطلبات من الصفر كل مرة",
      why: "تضيع الوقت في إعادة اختراع العجلة",
      fix: "احفظ البرومبتات الناجحة في ملف واستخدمها كقوالب",
      example: "✓ أنشئ ملف 'برومبتاتي الجاهزة' واحفظ كل برومبت نجح معك",
      icon: "💾",
      color: "indigo"
    },
    {
      id: 8,
      title: "استخدام AI للمهام الحساسة بدون تحقق",
      how: "تستخدم AI لقرارات مهمة أو معلومات حساسة بدون مراجعة",
      why: "المعلومات الخاطئة في مهام حساسة يمكن أن تسبب مشاكل كبيرة",
      fix: "للمهام الحساسة: تحقق مضاعف + استشارة خبير + لا تعتمد على AI وحده",
      example: "⚠️ لا تستخدم AI وحده في: القرارات الطبية، القانونية، المالية المهمة. دائماً استشر خبير.",
      icon: "⚠️",
      color: "red"
    }
  ];

  return (
    <section id="common-mistakes" className="py-20 px-4 bg-slate-900/50">
      <div className="container mx-auto max-w-6xl space-y-12">
        <div className="text-center space-y-4">
          <div className="text-6xl">⚠️</div>
          <h2 className="text-4xl md:text-5xl font-bold">8 أخطاء شائعة وكيف تعالجها</h2>
          <p className="text-xl text-slate-300">تجنب هذه الأخطاء لتحصل على نتائج أفضل</p>
          <div className="h-1 w-32 bg-gradient-to-l from-red-500 to-orange-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {mistakes.map((mistake) => (
            <div key={mistake.id} className={`bg-${mistake.color}-950/30 border-2 border-${mistake.color}-700 rounded-xl p-6 space-y-4 hover:scale-[1.02] transition-transform`}>
              <div className="flex items-center gap-3 border-b border-${mistake.color}-700/50 pb-3">
                <span className="text-4xl">{mistake.icon}</span>
                <h3 className="text-xl font-bold text-white">{mistake.title}</h3>
              </div>

              <div className="space-y-3">
                <div className="bg-slate-900/50 rounded-lg p-3">
                  <p className="text-xs font-semibold text-red-400 mb-1">كيف يظهر:</p>
                  <p className="text-sm text-slate-300">{mistake.how}</p>
                </div>

                <div className="bg-slate-900/50 rounded-lg p-3">
                  <p className="text-xs font-semibold text-yellow-400 mb-1">لماذا يحدث:</p>
                  <p className="text-sm text-slate-300">{mistake.why}</p>
                </div>

                <div className="bg-green-900/30 border border-green-700 rounded-lg p-3">
                  <p className="text-xs font-semibold text-green-400 mb-1">العلاج السريع:</p>
                  <p className="text-sm text-slate-300">{mistake.fix}</p>
                </div>

                <div className="bg-slate-800 rounded-lg p-3">
                  <p className="text-xs font-semibold text-blue-400 mb-1">مثال:</p>
                  <p className="text-xs text-slate-300">{mistake.example}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-br from-orange-900/40 to-red-900/40 border-2 border-orange-600 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold mb-4 text-orange-300">تذكير مهم</h3>
          <p className="text-lg text-slate-200 leading-relaxed max-w-3xl mx-auto">
            تجنب هذه الأخطاء الثمانية يمكن أن يحسن جودة نتائجك بنسبة 70% أو أكثر!
            معظم المشاكل مع الذكاء الاصطناعي ليست من الأداة، بل من طريقة الاستخدام.
          </p>
        </div>

        {/* ملاحظات للمدرب */}
        <div className="bg-yellow-950/20 border border-yellow-700/50 rounded-xl p-6 space-y-3">
          <h4 className="text-xl font-bold text-yellow-400 flex items-center gap-2">
            <span>📋</span>
            ملاحظات للمدرب
          </h4>
          <div className="grid md:grid-cols-2 gap-4 text-sm text-slate-200">
            <div>
              <p className="font-semibold text-yellow-300 mb-2">⏱️ الزمن المقترح: 15 دقيقة</p>
              <p className="font-semibold text-yellow-300 mb-1">سؤال افتتاح:</p>
              <p className="pr-4">"أي من هذه الأخطاء وقعتم فيه؟ لا تقلقوا، كلنا نقع فيها!"</p>
            </div>
            <div>
              <p className="font-semibold text-yellow-300 mb-1">نشاط تفاعل:</p>
              <p className="pr-4 mb-2">اطلب من الحضور مشاركة خطأ حصل معهم وكيف أثر على النتيجة.</p>
              <p className="font-semibold text-yellow-300 mb-1">إذا كان التفاعل ضعيف:</p>
              <p className="pr-4">"سأشارككم قصة: شخص استخدم AI لكتابة تقرير مهم، ثق بالنتيجة عمياً، اكتشف لاحقاً أن 30% من الإحصائيات خاطئة!"</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
