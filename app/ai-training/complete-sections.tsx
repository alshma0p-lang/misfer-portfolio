// الأقسام المتبقية 12-20 للموقع التدريبي

export const Section12_LiveDemos = `
<section id="live-demos" className="py-20 px-4">
  <div className="container mx-auto max-w-6xl space-y-12">
    <div className="text-center space-y-4">
      <div className="text-6xl">🎬</div>
      <h2 className="text-4xl md:text-5xl font-bold">عروض مباشرة Live Demos</h2>
      <p className="text-xl text-slate-300">6 عروض عملية جاهزة للتطبيق</p>
    </div>

    {/* العرض 1: كتابة محتوى احترافي */}
    <div className="bg-blue-950/30 border border-blue-700 rounded-xl p-8 space-y-6">
      <h3 className="text-2xl font-bold text-blue-300">العرض 1: كتابة بريد احترافي</h3>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-slate-900 rounded-lg p-4">
          <p className="font-semibold text-green-400 mb-2">النص المستخدم (خيالي):</p>
          <p className="text-sm text-slate-300">"أنا مدير مشروع، أريد إرسال بريد لفريق يشكرهم على إنجاز المشروع في الموعد"</p>
        </div>

        <div className="bg-slate-900 rounded-lg p-4">
          <p className="font-semibold text-yellow-400 mb-2">البرومبت:</p>
          <p className="text-xs text-slate-300">اكتب بريد إلكتروني احترافي من مدير مشروع لفريقه، أشكرهم على إتمام المشروع في الموعد، أذكر 2-3 نقاط إيجابية، نبرة دافئة واحترافية، 100 كلمة</p>
        </div>
      </div>

      <div className="bg-green-900/20 border border-green-700 rounded-lg p-4">
        <p className="font-semibold text-green-400 mb-2">المخرج المتوقع:</p>
        <p className="text-sm text-slate-300">بريد شكر احترافي ودافئ، يذكر نقاط محددة، مناسب للإرسال مباشرة</p>
      </div>

      <div className="bg-red-900/20 border border-red-700 rounded-lg p-4">
        <p className="font-semibold text-red-400 mb-2">أين غالباً يخطئ:</p>
        <p className="text-sm text-slate-300">• قد يكون طويل جداً • قد يكون جاف أو رسمي أكثر من اللازم</p>
      </div>

      <div className="bg-purple-900/20 border border-purple-700 rounded-lg p-4">
        <p className="font-semibold text-purple-400 mb-2">كيف نصلحه:</p>
        <p className="text-sm text-slate-300">اطلب: "اختصره إلى 80 كلمة واجعل النبرة أكثر دفئاً"</p>
      </div>

      <div className="bg-yellow-900/20 border border-yellow-700 rounded-lg p-4">
        <p className="font-semibold text-yellow-400 mb-2">خطوة تحقق:</p>
        <p className="text-sm text-slate-300">✓ اقرأه بصوت عالٍ ✓ هل النبرة مناسبة؟ ✓ تأكد من عدم وجود أخطاء</p>
      </div>
    </div>

    {/* بقية العروض بنفس الهيكل... */}
  </div>
</section>
`;

export const Section13_PromptLab = `
<section id="prompt-lab" className="py-20 px-4 bg-slate-900/50">
  <div className="container mx-auto max-w-4xl space-y-12">
    <div className="text-center space-y-4">
      <div className="text-6xl">🧪</div>
      <h2 className="text-4xl md:text-5xl font-bold">مختبر البرومبت</h2>
      <p className="text-xl text-slate-300">تمرين عملي 10 دقائق</p>
    </div>

    <div className="bg-gradient-to-br from-purple-900/40 to-blue-900/40 border-2 border-purple-600 rounded-2xl p-8 space-y-6">
      <h3 className="text-2xl font-bold text-center text-purple-300">خطوات التمرين</h3>

      <div className="space-y-4">
        <div className="bg-slate-800/50 rounded-xl p-6">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-full bg-red-600 flex items-center justify-center font-bold">1</div>
            <h4 className="text-xl font-bold">اكتب برومبت سيء عمداً</h4>
          </div>
          <p className="text-slate-300 pr-13">المهمة: "اكتب خطة تسويقية لمطعم"</p>
          <p className="text-sm text-slate-400 pr-13 mt-2">اكتب برومبت سيء وغامض بدون تفاصيل</p>
        </div>

        <div className="bg-slate-800/50 rounded-xl p-6">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-full bg-yellow-600 flex items-center justify-center font-bold">2</div>
            <h4 className="text-xl font-bold">شخّصه بقائمة فحص</h4>
          </div>
          <div className="pr-13">
            <p className="text-slate-300 mb-2">استخدم هذه القائمة:</p>
            <ul className="space-y-1 text-sm text-slate-300">
              <li>☐ هل حددت الهدف الواضح؟</li>
              <li>☐ هل ذكرت الجمهور المستهدف؟</li>
              <li>☐ هل أعطيت السياق الكافي؟</li>
              <li>☐ هل حددت القيود (طول، ميزانية، وقت)؟</li>
              <li>☐ هل حددت شكل المخرجات؟</li>
            </ul>
          </div>
        </div>

        <div className="bg-slate-800/50 rounded-xl p-6">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-full bg-green-600 flex items-center justify-center font-bold">3</div>
            <h4 className="text-xl font-bold">أعد كتابته بوصفة البرومبت</h4>
          </div>
          <p className="text-slate-300 pr-13">استخدم الخطوات السبع: الدور، السياق، المهمة، القيود، مثال، شكل المخرجات، فحص الجودة</p>
        </div>

        <div className="bg-slate-800/50 rounded-xl p-6">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center font-bold">4</div>
            <h4 className="text-xl font-bold">أضف خطوة تحقق</h4>
          </div>
          <p className="text-slate-300 pr-13">حدد: ما الذي يجب التأكد منه قبل اعتماد المخرجات؟</p>
        </div>

        <div className="bg-slate-800/50 rounded-xl p-6">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-full bg-purple-600 flex items-center justify-center font-bold">5</div>
            <h4 className="text-xl font-bold">سلّم مخرج نهائي</h4>
          </div>
          <p className="text-slate-300 pr-13">اطلب من AI المخرج بصيغة صارمة: جدول، PDF جاهز، أو عرض تقديمي</p>
        </div>
      </div>

      <div className="bg-yellow-900/20 border border-yellow-700 rounded-lg p-6 text-center">
        <p className="text-lg font-semibold text-yellow-300 mb-2">⏱️ Timer: 10 دقائق</p>
        <p className="text-sm text-slate-300">2 دقيقة لكل خطوة</p>
      </div>
    </div>

    {/* ملاحظات للمدرب */}
    <div className="bg-yellow-950/20 border border-yellow-700/50 rounded-xl p-6">
      <h4 className="text-xl font-bold text-yellow-400 mb-4">📋 إرشادات للميسر</h4>
      <ul className="space-y-2 text-sm text-slate-200">
        <li>• قسّم الحضور إلى مجموعات من 3-4 أشخاص</li>
        <li>• أعطهم المهمة: "خطة تسويقية لمطعم"</li>
        <li>• راقب الوقت واعلن عن كل خطوة</li>
        <li>• في النهاية، اطلب من 2-3 مجموعات مشاركة النتائج</li>
        <li>• ركز على الفرق بين البرومبت السيء والقوي</li>
      </ul>
    </div>
  </div>
</section>
`;

export const Section14_CaseStudies = `
<section id="case-studies" className="py-20 px-4">
  <div className="container mx-auto max-w-6xl space-y-12">
    <div className="text-center space-y-4">
      <div className="text-6xl">📊</div>
      <h2 className="text-4xl md:text-5xl font-bold">5 دراسات حالة وتجارب</h2>
      <p className="text-xl text-slate-300">أمثلة واقعية قبل وبعد</p>
    </div>

    <div className="space-y-8">
      {/* دراسة حالة 1: تعليم */}
      <div className="bg-blue-950/30 border border-blue-700 rounded-xl p-8 space-y-6">
        <div className="flex items-center gap-3 border-b border-blue-700 pb-4">
          <span className="text-4xl">📚</span>
          <h3 className="text-2xl font-bold text-blue-300">حالة 1: مدرّسة تحضّر درس</h3>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="bg-red-900/30 border border-red-700 rounded-lg p-4">
              <p className="font-semibold text-red-400 mb-2">السياق:</p>
              <p className="text-sm text-slate-300">مدرّسة رياضيات تريد تحضير درس عن الكسور لطلاب الصف الرابع</p>
            </div>

            <div className="bg-slate-900 rounded-lg p-4">
              <p className="font-semibold text-red-400 mb-2">برومبت سيء:</p>
              <p className="text-sm text-slate-300">"اشرح الكسور"</p>
            </div>

            <div className="bg-slate-800 rounded-lg p-4">
              <p className="font-semibold text-red-400 mb-2">نتيجة ضعيفة:</p>
              <p className="text-xs text-slate-300">• شرح أكاديمي صعب • بدون أمثلة عملية • غير مناسب لأطفال 10 سنوات</p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="bg-green-900/30 border border-green-700 rounded-lg p-4">
              <p className="font-semibold text-green-400 mb-2">برومبت ممتاز:</p>
              <p className="text-xs text-slate-300">
                أنت معلم رياضيات متخصص في تبسيط المفاهيم. حضّر درس عن الكسور لطلاب 10 سنوات:<br/>
                - ابدأ بمثال من الحياة اليومية (بيتزا، تفاحة)<br/>
                - اشرح المفهوم بخطوات بسيطة<br/>
                - أضف 3 تمارين تفاعلية<br/>
                - الدرس 20 دقيقة<br/>
                الشكل: خطة درس بالدقائق
              </p>
            </div>

            <div className="bg-slate-800 rounded-lg p-4">
              <p className="font-semibold text-green-400 mb-2">نتيجة محسّنة:</p>
              <p className="text-xs text-slate-300">✓ خطة مفصلة بالدقائق ✓ أمثلة عملية ✓ تمارين مناسبة للسن ✓ جاهزة للتطبيق</p>
            </div>
          </div>
        </div>

        <div className="bg-blue-900/20 border border-blue-700 rounded-lg p-4">
          <p className="font-semibold text-blue-300 mb-2">لماذا تحسّن:</p>
          <p className="text-sm text-slate-300">
            ✓ حدد الدور (معلم متخصص)<br/>
            ✓ أعطى سياق واضح (السن والموضوع)<br/>
            ✓ طلب شكل محدد (خطة بالدقائق)<br/>
            ✓ وضع قيود واضحة (المدة والأمثلة)
          </p>
        </div>

        <div className="bg-yellow-900/20 border border-yellow-700 rounded-lg p-4">
          <p className="font-semibold text-yellow-400 mb-2">خطوة تحقق:</p>
          <p className="text-sm text-slate-300">راجع المحتوى: هل مناسب للسن؟ هل الوقت كافي؟ جرّب جزء من الدرس مع طالب واحد</p>
        </div>
      </div>

      {/* بقية دراسات الحالة بنفس الهيكل */}
      {/* حالة 2: وظيفة، حالة 3: عمل إداري، حالة 4: تسويق، حالة 5: قرار */}
    </div>
  </div>
</section>
`;

export const Section15_WhenNotToUse = `
<section id="when-not-to-use" className="py-20 px-4 bg-slate-900/50">
  <div className="container mx-auto max-w-4xl space-y-12">
    <div className="text-center space-y-4">
      <div className="text-6xl">🚫</div>
      <h2 className="text-4xl md:text-5xl font-bold text-red-400">متى لا نستخدم الذكاء الاصطناعي</h2>
      <p className="text-xl text-slate-300">حالات مهمة يجب تجنب AI فيها</p>
    </div>

    <div className="bg-red-950/40 border-2 border-red-600 rounded-2xl p-8 space-y-6">
      <h3 className="text-2xl font-bold text-center text-red-300">قائمة واضحة: لا تستخدم AI في...</h3>

      <div className="space-y-4">
        {[
          {
            title: "قرارات عالية المخاطر بدون تحقق",
            desc: "القرارات الطبية، القانونية، المالية المهمة",
            why: "المعلومات الخاطئة قد تسبب أضرار جسيمة",
            alternative: "استشر خبير متخصص دائماً"
          },
          {
            title: "أي معلومات حساسة أو شخصية",
            desc: "أرقام حسابات، كلمات سر، بيانات عملاء، معلومات صحية",
            why: "قد تُستخدم لتدريب النموذج أو تُخزن",
            alternative: "احفظ البيانات الحساسة خارج AI"
          },
          {
            title: "الغش الأكاديمي",
            desc: "كتابة الواجبات أو الأبحاث بالكامل",
            why: "غير أخلاقي، يمنع التعلم، قد يُكتشف",
            alternative: "استخدم AI للمساعدة في الفهم والتنظيم فقط"
          },
          {
            title: "مهام غير أخلاقية أو مخالفة",
            desc: "محتوى مضلل، انتحال شخصية، خداع",
            why: "غير قانوني وغير أخلاقي",
            alternative: "استخدم AI بمسؤولية وأخلاق"
          },
          {
            title: "القرارات التي تحتاج حكم بشري",
            desc: "تقييم أداء موظفين، قرارات توظيف، حكم على أعمال إبداعية",
            why: "تحتاج تعاطف، سياق، حكم إنساني",
            alternative: "استخدم AI كمساعد فقط، القرار النهائي لك"
          }
        ].map((item, idx) => (
          <div key={idx} className="bg-slate-800/50 rounded-xl p-6 space-y-3">
            <div className="flex items-start gap-3">
              <span className="text-2xl flex-shrink-0">🚫</span>
              <div className="flex-1">
                <h4 className="font-bold text-lg text-red-300 mb-1">{item.title}</h4>
                <p className="text-sm text-slate-300 mb-2">{item.desc}</p>
                <div className="bg-slate-900 rounded-lg p-3 mt-2">
                  <p className="text-xs font-semibold text-yellow-400 mb-1">لماذا:</p>
                  <p className="text-xs text-slate-300">{item.why}</p>
                </div>
                <div className="bg-green-900/20 border border-green-700 rounded-lg p-3 mt-2">
                  <p className="text-xs font-semibold text-green-400 mb-1">البديل:</p>
                  <p className="text-xs text-slate-300">{item.alternative}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>

    <div className="bg-orange-950/30 border border-orange-700 rounded-xl p-6">
      <h4 className="font-bold text-orange-300 text-lg mb-3">⚖️ القاعدة الذهبية:</h4>
      <p className="text-slate-200 text-lg leading-relaxed">
        إذا كنت تتردد في استخدام AI لمهمة معينة، أو تشعر أنها غير أخلاقية، لا تستخدمه.
        اتبع حدسك وقيمك دائماً.
      </p>
    </div>
  </div>
</section>
`;

export const Section16_TemplatesSheet = `
<section id="templates-sheet" className="py-20 px-4">
  <div className="container mx-auto max-w-5xl space-y-12">
    <div className="text-center space-y-4">
      <div className="text-6xl">📄</div>
      <h2 className="text-4xl md:text-5xl font-bold">ورقة واحدة: قوالب جاهزة</h2>
      <p className="text-xl text-slate-300">اطبعها واحتفظ بها على مكتبك</p>
    </div>

    <div className="bg-white text-gray-900 rounded-xl p-12 space-y-8 shadow-2xl">
      {/* رأس الورقة */}
      <div className="text-center border-b-4 border-blue-600 pb-6">
        <h3 className="text-3xl font-bold mb-2">القوالب الجاهزة للذكاء الاصطناعي</h3>
        <p className="text-sm text-gray-600">ورقة مرجعية سريعة</p>
      </div>

      {/* القسم 1: موجز 20 ثانية */}
      <div className="border-2 border-blue-500 rounded-lg p-4">
        <h4 className="text-xl font-bold text-blue-700 mb-3 flex items-center gap-2">
          <span>⚡</span>
          إطار موجز 20 ثانية
        </h4>
        <div className="space-y-1 text-sm">
          <p><span className="font-bold">الهدف:</span> _____________________</p>
          <p><span className="font-bold">لمن:</span> _____________________</p>
          <p><span className="font-bold">المدخلات:</span> _____________________</p>
          <p><span className="font-bold">القيود:</span> _____________________</p>
          <p><span className="font-bold">الشكل:</span> _____________________</p>
        </div>
      </div>

      {/* القسم 2: وصفة البرومبت */}
      <div className="border-2 border-purple-500 rounded-lg p-4">
        <h4 className="text-xl font-bold text-purple-700 mb-3 flex items-center gap-2">
          <span>📝</span>
          وصفة البرومبت الكاملة
        </h4>
        <div className="space-y-1 text-xs">
          <p><span className="font-bold">1. الدور:</span> أنت [خبير في...]</p>
          <p><span className="font-bold">2. السياق:</span> أنا [موقفي...]، أحتاج [الهدف...]</p>
          <p><span className="font-bold">3. المهمة:</span> [اطلب بوضوح...]</p>
          <p><span className="font-bold">4. القيود:</span> الطول [...]، النبرة [...]، تجنب [...]</p>
          <p><span className="font-bold">5. مثال:</span> [مثال توضيحي...]</p>
          <p><span className="font-bold">6. الشكل:</span> [قائمة/جدول/فقرات...]</p>
          <p><span className="font-bold">7. الفحص:</span> تأكد من [معايير الجودة...]</p>
        </div>
      </div>

      {/* القسم 3: قائمة فحص الثقة */}
      <div className="border-2 border-green-500 rounded-lg p-4">
        <h4 className="text-xl font-bold text-green-700 mb-3 flex items-center gap-2">
          <span>🔐</span>
          قائمة فحص الثقة
        </h4>
        <div className="space-y-1 text-xs">
          <label className="flex items-center gap-2">
            <input type="checkbox" className="w-4 h-4" />
            <span>هل طلبت المصادر والمراجع؟</span>
          </label>
          <label className="flex items-center gap-2">
            <input type="checkbox" className="w-4 h-4" />
            <span>هل تحققت من مصدر مستقل؟</span>
          </label>
          <label className="flex items-center gap-2">
            <input type="checkbox" className="w-4 h-4" />
            <span>هل قارنت إجابة نموذجين؟</span>
          </label>
          <label className="flex items-center gap-2">
            <input type="checkbox" className="w-4 h-4" />
            <span>هل المعلومات منطقية ومتسقة؟</span>
          </label>
          <label className="flex items-center gap-2">
            <input type="checkbox" className="w-4 h-4" />
            <span>هل راجعت الأخطاء اللغوية؟</span>
          </label>
        </div>
      </div>

      {/* القسم 4: رايات حمراء */}
      <div className="border-2 border-red-500 rounded-lg p-4">
        <h4 className="text-xl font-bold text-red-700 mb-3 flex items-center gap-2">
          <span>🚩</span>
          رايات حمراء - احذر
        </h4>
        <ul className="space-y-1 text-xs">
          <li>🚩 أرقام غريبة أو غير منطقية</li>
          <li>🚩 تواريخ قديمة في موضوع متغير</li>
          <li>🚩 تناقضات داخلية</li>
          <li>🚩 لغة غامضة ('ربما'، 'قد يكون')</li>
          <li>🚩 مصادر غير موجودة أو لا يمكن التحقق منها</li>
          <li>🚩 ثقة مبالغ فيها في أمور غير مؤكدة</li>
        </ul>
      </div>

      {/* القسم 5: جمل تحسين */}
      <div className="border-2 border-yellow-500 rounded-lg p-4">
        <h4 className="text-xl font-bold text-yellow-700 mb-3 flex items-center gap-2">
          <span>🔄</span>
          جمل التحسين السريع
        </h4>
        <div className="space-y-1 text-xs">
          <p>• "راجع النص، ما نقاط الضعف؟"</p>
          <p>• "أعد كتابته بلغة أبسط"</p>
          <p>• "اختصره إلى [50%] من الطول"</p>
          <p>• "أضف أمثلة عملية"</p>
          <p>• "اجعل النبرة أكثر [احترافية/ودية]"</p>
        </div>
      </div>

      {/* تذييل */}
      <div className="text-center pt-6 border-t-2 border-gray-300">
        <p className="text-xs text-gray-600">استخدم هذه القوالب يومياً للحصول على أفضل نتائج من الذكاء الاصطناعي</p>
        <p className="text-xs text-gray-500 mt-2">لا تشارك معلومات حساسة مع AI • تحقق دائماً قبل الاعتماد</p>
      </div>
    </div>

    <div className="text-center">
      <button className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold text-lg transition-all hover:scale-105">
        تحميل ورقة PDF
      </button>
    </div>
  </div>
</section>
`;

// يمكن تصدير هذه الأقسام واستخدامها في الصفحة الرئيسية
