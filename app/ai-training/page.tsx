"use client";

import { useState } from "react";

export default function AITrainingPage() {
  const [activeSection, setActiveSection] = useState<string>("");

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveSection(id);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white" dir="rtl">
      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 bg-slate-900/95 backdrop-blur-sm border-b border-slate-800 z-50 shadow-lg">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-xl font-bold text-white">رحلة الذكاء الاصطناعي</h1>
            <button
              onClick={() => scrollToSection("hero")}
              className="text-sm px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors"
            >
              العودة للبداية
            </button>
          </div>
        </div>
      </nav>

      <div className="pt-20">
        {/* القسم 1: صفحة البداية Hero */}
        <section id="hero" className="min-h-screen flex items-center justify-center px-4 py-20 bg-gradient-to-b from-blue-950/30 to-slate-950">
          <div className="container mx-auto max-w-4xl text-center space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-l from-blue-400 to-purple-400 bg-clip-text text-transparent leading-tight">
                رحلة حول المفاهيم وأفضل الأدوات والاستخدامات
              </h1>
              <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
                كيف نستخدم أدوات الذكاء الاصطناعي بذكاء للحصول على أقصى فائدة
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 py-8">
              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:border-blue-500 transition-all hover:scale-105">
                <div className="text-4xl mb-3">✓</div>
                <h3 className="text-xl font-semibold mb-2">جودة أعلى</h3>
                <p className="text-slate-300 text-sm">مخرجات دقيقة وموثوقة تلبي احتياجاتك الفعلية</p>
              </div>
              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:border-purple-500 transition-all hover:scale-105">
                <div className="text-4xl mb-3">⚡</div>
                <h3 className="text-xl font-semibold mb-2">وقت أقل</h3>
                <p className="text-slate-300 text-sm">إنجاز المهام بسرعة وكفاءة عالية</p>
              </div>
              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:border-green-500 transition-all hover:scale-105">
                <div className="text-4xl mb-3">🎯</div>
                <h3 className="text-xl font-semibold mb-2">أخطاء أقل</h3>
                <p className="text-slate-300 text-sm">نتائج موثوقة مع خطوات تحقق واضحة</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button
                onClick={() => scrollToSection("table-of-contents")}
                className="px-8 py-4 bg-gradient-to-l from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-xl font-semibold text-lg transition-all hover:scale-105 shadow-xl"
              >
                ابدأ الآن
              </button>
              <a
                href="#templates-sheet"
                className="px-8 py-4 bg-slate-800 hover:bg-slate-700 border border-slate-600 rounded-xl font-semibold text-lg transition-all hover:scale-105"
              >
                حمّل ورقة القوالب
              </a>
            </div>
          </div>
        </section>

        {/* فهرس المحتوى */}
        <section id="table-of-contents" className="py-20 px-4 bg-slate-900/50">
          <div className="container mx-auto max-w-5xl">
            <h2 className="text-4xl font-bold mb-12 text-center">محتوى الدورة</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                { id: "why-this-course", title: "لماذا هذه الدورة", icon: "❓" },
                { id: "strong-opening", title: "البداية القوية", icon: "🚀" },
                { id: "ai-tools-map", title: "خريطة أدوات الذكاء الاصطناعي", icon: "🗺️" },
                { id: "golden-rule", title: "القاعدة الذهبية", icon: "⭐" },
                { id: "quick-framework", title: "إطار موجز 20 ثانية", icon: "⚡" },
                { id: "prompt-recipe", title: "وصفة البرومبت القوية", icon: "📝" },
                { id: "improvement-loop", title: "حلقة التحسين", icon: "🔄" },
                { id: "trust-loop", title: "حلقة الثقة", icon: "🔐" },
                { id: "practical-uses", title: "10 استخدامات عملية", icon: "💡" },
                { id: "common-mistakes", title: "8 أخطاء شائعة", icon: "⚠️" },
                { id: "live-demos", title: "عروض مباشرة", icon: "🎬" },
                { id: "prompt-lab", title: "مختبر البرومبت", icon: "🧪" },
                { id: "case-studies", title: "5 دراسات حالة", icon: "📊" },
                { id: "when-not-to-use", title: "متى لا نستخدم الذكاء الاصطناعي", icon: "🚫" },
                { id: "templates-sheet", title: "ورقة القوالب الجاهزة", icon: "📄" },
                { id: "quick-quiz", title: "اختبار سريع", icon: "✍️" },
                { id: "7-day-plan", title: "خطة 7 أيام", icon: "📅" },
                { id: "conclusion", title: "الخاتمة", icon: "🎓" },
                { id: "references", title: "المراجع والتحديثات", icon: "📚" }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="flex items-center gap-4 p-4 bg-slate-800/50 hover:bg-slate-700/50 border border-slate-700 hover:border-blue-500 rounded-lg transition-all text-right"
                >
                  <span className="text-3xl">{item.icon}</span>
                  <span className="text-lg font-medium">{item.title}</span>
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* القسم 2: لماذا هذه الدورة */}
        <section id="why-this-course" className="py-20 px-4">
          <div className="container mx-auto max-w-4xl space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold">لماذا هذه الدورة؟</h2>
              <div className="h-1 w-32 bg-gradient-to-l from-blue-500 to-purple-500 mx-auto rounded-full"></div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-red-950/30 border border-red-800 rounded-xl p-8 space-y-4">
                <div className="text-5xl text-center">😰</div>
                <h3 className="text-2xl font-bold text-red-400 text-center">المشكلة الشائعة</h3>
                <div className="space-y-3 text-slate-200">
                  <p className="leading-relaxed">الكثير من الناس يستخدمون الذكاء الاصطناعي بطريقة عشوائية:</p>
                  <ul className="space-y-2 pr-6">
                    <li className="flex items-start gap-2">
                      <span className="text-red-400 mt-1">•</span>
                      <span>يكتبون طلب عام وغامض</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-400 mt-1">•</span>
                      <span>يثقون بالنتيجة مباشرة بدون تحقق</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-400 mt-1">•</span>
                      <span>يضيعون وقت في إصلاح الأخطاء</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-400 mt-1">•</span>
                      <span>يشعرون بالإحباط من النتائج الضعيفة</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-green-950/30 border border-green-800 rounded-xl p-8 space-y-4">
                <div className="text-5xl text-center">🎯</div>
                <h3 className="text-2xl font-bold text-green-400 text-center">ما الذي سيتغير</h3>
                <div className="space-y-3 text-slate-200">
                  <p className="leading-relaxed">بعد هذه الدورة، ستصبح قادراً على:</p>
                  <ul className="space-y-2 pr-6">
                    <li className="flex items-start gap-2">
                      <span className="text-green-400 mt-1">✓</span>
                      <span>كتابة طلبات واضحة ودقيقة تعطي نتائج ممتازة</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-400 mt-1">✓</span>
                      <span>التحقق من المخرجات بطريقة سريعة وفعالة</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-400 mt-1">✓</span>
                      <span>توفير الوقت وتحسين جودة العمل</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-400 mt-1">✓</span>
                      <span>استخدام الذكاء الاصطناعي بثقة في مهامك اليومية</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* ملاحظات للمدرب */}
            <div className="bg-yellow-950/20 border border-yellow-700/50 rounded-xl p-6 space-y-3">
              <h4 className="text-xl font-bold text-yellow-400 flex items-center gap-2">
                <span>📋</span>
                ملاحظات للمدرب
              </h4>
              <div className="grid md:grid-cols-2 gap-4 text-sm text-slate-200">
                <div>
                  <p className="font-semibold text-yellow-300 mb-2">⏱️ الزمن المقترح: 5 دقائق</p>
                  <p className="font-semibold text-yellow-300 mb-1">سؤال افتتاح:</p>
                  <p className="pr-4">"كم منكم استخدم الذكاء الاصطناعي خلال الأسبوع الماضي؟ ارفعوا أيديكم."</p>
                </div>
                <div>
                  <p className="font-semibold text-yellow-300 mb-1">نشاط تفاعل:</p>
                  <p className="pr-4 mb-2">تصويت سريع: "هل سبق وحصلت على نتيجة من AI واكتشفت لاحقاً أنها خاطئة؟"</p>
                  <p className="font-semibold text-yellow-300 mb-1">إذا كان التفاعل ضعيف:</p>
                  <p className="pr-4">"دعوني أشارككم إحصائية: 66% من الموظفين يستخدمون مخرجات AI بدون تحقق. هل تعتقدون أن هذا آمن؟"</p>
                </div>
              </div>
              <div className="bg-red-950/30 border border-red-800/50 rounded-lg p-3 mt-3">
                <p className="font-semibold text-red-300 text-sm">⚠️ تذكير الخصوصية:</p>
                <p className="text-xs text-slate-300">تأكد من تذكير الحضور بعدم مشاركة أي محتوى خاص أو بيانات حساسة خلال التمارين.</p>
              </div>
            </div>
          </div>
        </section>

        {/* القسم 3: البداية القوية */}
        <section id="strong-opening" className="py-20 px-4 bg-slate-900/50">
          <div className="container mx-auto max-w-4xl space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold">البداية القوية</h2>
              <p className="text-xl text-slate-300">أول دقيقتين تحدد نجاح الدورة</p>
              <div className="h-1 w-32 bg-gradient-to-l from-blue-500 to-purple-500 mx-auto rounded-full"></div>
            </div>

            {/* نص الافتتاح */}
            <div className="bg-blue-950/30 border border-blue-700 rounded-xl p-8 space-y-4">
              <h3 className="text-2xl font-bold text-blue-300">نص الافتتاح (دقيقتين)</h3>
              <div className="space-y-4 text-slate-200 leading-relaxed">
                <p className="font-semibold text-white">[ابدأ بطاقة وحماس]</p>
                <p>مرحباً بكم! خلال الساعتين والنصف القادمة، سنغير طريقة تعاملكم مع أدوات الذكاء الاصطناعي بشكل جذري.</p>
                <p>اسمحوا لي أن أريكم شيء مهم. لنفترض أنك تريد كتابة بريد إلكتروني احترافي.</p>
              </div>
            </div>

            {/* عرض قبل وبعد */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-red-950/30 border-2 border-red-700 rounded-xl p-6 space-y-3">
                <div className="flex items-center gap-2 text-red-400 font-bold text-lg">
                  <span>❌</span>
                  <span>قبل: طلب عشوائي</span>
                </div>
                <div className="bg-slate-900/50 rounded-lg p-4 font-mono text-sm text-slate-300">
                  "اكتب بريد احترافي"
                </div>
                <p className="text-sm text-slate-400 italic">النتيجة: بريد عام وممل، غير مناسب للسياق</p>
              </div>

              <div className="bg-green-950/30 border-2 border-green-700 rounded-xl p-6 space-y-3">
                <div className="flex items-center gap-2 text-green-400 font-bold text-lg">
                  <span>✓</span>
                  <span>بعد: طلب ذكي</span>
                </div>
                <div className="bg-slate-900/50 rounded-lg p-4 font-mono text-sm text-slate-300">
                  "اكتب بريد إلكتروني لمدير المشتريات، أشكره على اجتماع الأمس، أذكّره بالعرض المقدم، أطلب الرد خلال 3 أيام. نبرة احترافية ودية، لا تزيد عن 100 كلمة."
                </div>
                <p className="text-sm text-slate-400 italic">النتيجة: بريد دقيق، مناسب، جاهز للإرسال</p>
              </div>
            </div>

            <div className="text-center text-slate-200 text-lg">
              <p>الفرق؟ <span className="text-yellow-400 font-bold">30 ثانية من التفكير الواضح</span></p>
            </div>

            {/* إحصائية لافتة */}
            <div className="bg-gradient-to-l from-purple-900/50 to-blue-900/50 border border-purple-500 rounded-xl p-8 text-center space-y-4">
              <div className="text-6xl md:text-7xl font-bold text-transparent bg-gradient-to-l from-red-400 to-orange-400 bg-clip-text">
                56%
              </div>
              <p className="text-xl text-slate-200">من الموظفين يقولون إن استخدام AI أدى إلى أخطاء في عملهم</p>
              <p className="text-sm text-slate-400">المصدر: دراسة KPMG حول استخدام الذكاء الاصطناعي، 2025</p>
              <div className="pt-4 border-t border-purple-500/30 mt-6">
                <p className="text-2xl font-bold text-orange-400">40% من الوقت الموفر</p>
                <p className="text-lg text-slate-300">يُستخدم في إصلاح أخطاء الذكاء الاصطناعي</p>
              </div>
            </div>

            {/* سؤال تفاعلي */}
            <div className="bg-slate-800 border border-slate-600 rounded-xl p-8 space-y-4">
              <h3 className="text-2xl font-bold text-center">تصويت سريع ⚡</h3>
              <p className="text-xl text-center text-slate-200">هل سبق وأعطاك الذكاء الاصطناعي معلومة خاطئة أو مضللة؟</p>
              <div className="grid md:grid-cols-2 gap-4 pt-4">
                <div className="bg-green-900/30 border border-green-600 rounded-lg p-4 text-center cursor-pointer hover:bg-green-900/50 transition">
                  <p className="text-2xl mb-2">👍</p>
                  <p className="font-semibold">نعم، حصل معي</p>
                </div>
                <div className="bg-blue-900/30 border border-blue-600 rounded-lg p-4 text-center cursor-pointer hover:bg-blue-900/50 transition">
                  <p className="text-2xl mb-2">🤔</p>
                  <p className="font-semibold">لا أعرف، ربما</p>
                </div>
              </div>
            </div>

            {/* الوعد الواضح */}
            <div className="bg-gradient-to-br from-blue-900/40 to-purple-900/40 border border-blue-500 rounded-xl p-10 text-center space-y-6">
              <h3 className="text-3xl font-bold">الوعد الواضح</h3>
              <p className="text-xl text-slate-200 leading-relaxed max-w-3xl mx-auto">
                خلال الساعتين والنصف القادمة، ستتعلم كيف تحصل على نتائج دقيقة وموثوقة من أدوات الذكاء الاصطناعي،
                مع خطوات تحقق واضحة، وقوالب جاهزة يمكنك استخدامها من اليوم.
              </p>
              <div className="flex flex-wrap justify-center gap-4 pt-4">
                <span className="px-4 py-2 bg-blue-600/30 border border-blue-400 rounded-full text-sm">✓ قوالب جاهزة</span>
                <span className="px-4 py-2 bg-purple-600/30 border border-purple-400 rounded-full text-sm">✓ أمثلة عملية</span>
                <span className="px-4 py-2 bg-green-600/30 border border-green-400 rounded-full text-sm">✓ خطوات تحقق</span>
                <span className="px-4 py-2 bg-orange-600/30 border border-orange-400 rounded-full text-sm">✓ تمارين تطبيقية</span>
              </div>
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
                  <p className="pr-4">"كم منكم يستخدم ChatGPT أو أي أداة ذكاء اصطناعي بشكل يومي؟"</p>
                </div>
                <div>
                  <p className="font-semibold text-yellow-300 mb-1">نشاط تفاعل:</p>
                  <p className="pr-4 mb-2">اعرض مثال القبل والبعد على الشاشة، واطلب من 2-3 أشخاص مشاركة تجاربهم.</p>
                  <p className="font-semibold text-yellow-300 mb-1">إذا كان التفاعل ضعيف:</p>
                  <p className="pr-4">"هل تعلمون أن 66% من العمال يستخدمون مخرجات AI بدون تحقق؟ هذا خطير! سنتعلم اليوم كيف نتجنب هذا الخطأ."</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* القسم 4: خريطة أدوات الذكاء الاصطناعي */}
        <section id="ai-tools-map" className="py-20 px-4">
          <div className="container mx-auto max-w-5xl space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold">خريطة أدوات الذكاء الاصطناعي</h2>
              <p className="text-xl text-slate-300">دليل مبسط للأدوات المتاحة واستخداماتها</p>
              <div className="h-1 w-32 bg-gradient-to-l from-blue-500 to-purple-500 mx-auto rounded-full"></div>
            </div>

            <div className="space-y-8">
              {/* فئة 1: مساعدات محادثة */}
              <div className="bg-blue-950/30 border border-blue-700 rounded-xl p-8 space-y-6">
                <div className="flex items-center gap-4">
                  <div className="text-5xl">💬</div>
                  <div>
                    <h3 className="text-2xl font-bold text-blue-300">1. مساعدات محادثة</h3>
                    <p className="text-slate-300">أدوات تحادثك وتجيب على أسئلتك بطريقة طبيعية</p>
                  </div>
                </div>

                <div className="bg-slate-900/50 rounded-lg p-6 space-y-4">
                  <h4 className="font-bold text-lg text-blue-200">3 استخدامات رئيسية:</h4>
                  <ul className="space-y-2 pr-6">
                    <li className="flex items-start gap-2">
                      <span className="text-blue-400 mt-1">•</span>
                      <span>طرح الأسئلة والحصول على إجابات فورية</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-400 mt-1">•</span>
                      <span>كتابة وتحرير النصوص (رسائل، تقارير، محتوى)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-400 mt-1">•</span>
                      <span>شرح مفاهيم معقدة بطريقة مبسطة</span>
                    </li>
                  </ul>

                  <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-4 mt-4">
                    <p className="font-semibold text-blue-200 mb-2">مثال آمن:</p>
                    <div className="bg-slate-900 rounded p-3 font-mono text-sm text-slate-300">
                      <p className="text-green-400 mb-1">الطلب:</p>
                      <p className="mb-3">"اشرح لي مفهوم التضخم الاقتصادي بطريقة بسيطة، مع مثال من الحياة اليومية"</p>
                      <p className="text-yellow-400 mb-1">الأدوات المناسبة:</p>
                      <p>ChatGPT، Claude، Gemini</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* فئة 2: مساعدات بحث */}
              <div className="bg-purple-950/30 border border-purple-700 rounded-xl p-8 space-y-6">
                <div className="flex items-center gap-4">
                  <div className="text-5xl">🔍</div>
                  <div>
                    <h3 className="text-2xl font-bold text-purple-300">2. مساعدات بحث</h3>
                    <p className="text-slate-300">أدوات تبحث في الإنترنت وتجمع المعلومات من مصادر متعددة</p>
                  </div>
                </div>

                <div className="bg-slate-900/50 rounded-lg p-6 space-y-4">
                  <h4 className="font-bold text-lg text-purple-200">3 استخدامات رئيسية:</h4>
                  <ul className="space-y-2 pr-6">
                    <li className="flex items-start gap-2">
                      <span className="text-purple-400 mt-1">•</span>
                      <span>البحث عن معلومات حديثة مع المصادر</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-400 mt-1">•</span>
                      <span>مقارنة المنتجات والخدمات</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-400 mt-1">•</span>
                      <span>تلخيص مقالات وأبحاث طويلة</span>
                    </li>
                  </ul>

                  <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-4 mt-4">
                    <p className="font-semibold text-purple-200 mb-2">مثال آمن:</p>
                    <div className="bg-slate-900 rounded p-3 font-mono text-sm text-slate-300">
                      <p className="text-green-400 mb-1">الطلب:</p>
                      <p className="mb-3">"ابحث عن أحدث 3 دراسات حول تأثير العمل عن بعد على الإنتاجية، مع ذكر المصادر"</p>
                      <p className="text-yellow-400 mb-1">الأدوات المناسبة:</p>
                      <p>Perplexity، ChatGPT (مع بحث)، Bing Chat</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* فئة 3: أدوات صناعة محتوى */}
              <div className="bg-green-950/30 border border-green-700 rounded-xl p-8 space-y-6">
                <div className="flex items-center gap-4">
                  <div className="text-5xl">🎨</div>
                  <div>
                    <h3 className="text-2xl font-bold text-green-300">3. أدوات صناعة محتوى</h3>
                    <p className="text-slate-300">أدوات تنشئ صور، فيديو، عروض، وتصاميم</p>
                  </div>
                </div>

                <div className="bg-slate-900/50 rounded-lg p-6 space-y-4">
                  <h4 className="font-bold text-lg text-green-200">3 استخدامات رئيسية:</h4>
                  <ul className="space-y-2 pr-6">
                    <li className="flex items-start gap-2">
                      <span className="text-green-400 mt-1">•</span>
                      <span>إنشاء عروض تقديمية احترافية بسرعة</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-400 mt-1">•</span>
                      <span>توليد صور ورسومات للمحتوى</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-400 mt-1">•</span>
                      <span>تحويل النصوص إلى فيديو أو صوت</span>
                    </li>
                  </ul>

                  <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-4 mt-4">
                    <p className="font-semibold text-green-200 mb-2">مثال آمن:</p>
                    <div className="bg-slate-900 rounded p-3 font-mono text-sm text-slate-300">
                      <p className="text-green-400 mb-1">الطلب:</p>
                      <p className="mb-3">"أنشئ عرض تقديمي من 10 شرائح عن أهمية إدارة الوقت في العمل، مع أمثلة عملية"</p>
                      <p className="text-yellow-400 mb-1">الأدوات المناسبة:</p>
                      <p>Gamma، Canva AI، Beautiful.ai، Tome</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* فئة 4: أدوات مساعدة للعمل */}
              <div className="bg-orange-950/30 border border-orange-700 rounded-xl p-8 space-y-6">
                <div className="flex items-center gap-4">
                  <div className="text-5xl">⚙️</div>
                  <div>
                    <h3 className="text-2xl font-bold text-orange-300">4. أدوات مساعدة للعمل</h3>
                    <p className="text-slate-300">أدوات متخصصة تساعد في مهام محددة</p>
                  </div>
                </div>

                <div className="bg-slate-900/50 rounded-lg p-6 space-y-4">
                  <h4 className="font-bold text-lg text-orange-200">3 استخدامات رئيسية:</h4>
                  <ul className="space-y-2 pr-6">
                    <li className="flex items-start gap-2">
                      <span className="text-orange-400 mt-1">•</span>
                      <span>تلخيص الاجتماعات وكتابة المحاضر</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-orange-400 mt-1">•</span>
                      <span>تحليل البيانات وإنشاء التقارير</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-orange-400 mt-1">•</span>
                      <span>ترجمة المستندات بدقة عالية</span>
                    </li>
                  </ul>

                  <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-4 mt-4">
                    <p className="font-semibold text-orange-200 mb-2">مثال آمن:</p>
                    <div className="bg-slate-900 rounded p-3 font-mono text-sm text-slate-300">
                      <p className="text-green-400 mb-1">الطلب:</p>
                      <p className="mb-3">"لخص هذا الاجتماع واستخرج القرارات والمهام والمسؤوليات [نص خيالي]"</p>
                      <p className="text-yellow-400 mb-1">الأدوات المناسبة:</p>
                      <p>Otter.ai، Fireflies.ai، Notion AI، Microsoft Copilot</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* جدول مقارنة سريع */}
            <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-8 overflow-x-auto">
              <h3 className="text-2xl font-bold mb-6 text-center">جدول مقارنة سريع</h3>
              <table className="w-full text-right">
                <thead className="bg-slate-900">
                  <tr>
                    <th className="p-4 text-right font-bold">الفئة</th>
                    <th className="p-4 text-right font-bold">الأفضل لـ</th>
                    <th className="p-4 text-right font-bold">مثال أداة</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-700">
                  <tr className="hover:bg-slate-700/30">
                    <td className="p-4">مساعدات محادثة</td>
                    <td className="p-4">الأسئلة، الكتابة، الشرح</td>
                    <td className="p-4">ChatGPT، Claude</td>
                  </tr>
                  <tr className="hover:bg-slate-700/30">
                    <td className="p-4">مساعدات بحث</td>
                    <td className="p-4">البحث، المصادر، التلخيص</td>
                    <td className="p-4">Perplexity</td>
                  </tr>
                  <tr className="hover:bg-slate-700/30">
                    <td className="p-4">صناعة محتوى</td>
                    <td className="p-4">العروض، الصور، التصاميم</td>
                    <td className="p-4">Gamma، Canva AI</td>
                  </tr>
                  <tr className="hover:bg-slate-700/30">
                    <td className="p-4">مساعدة العمل</td>
                    <td className="p-4">الاجتماعات، البيانات، الترجمة</td>
                    <td className="p-4">Otter.ai، Notion AI</td>
                  </tr>
                </tbody>
              </table>
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
                  <p className="pr-4">"كم أداة ذكاء اصطناعي تعرفون؟ اذكروها بصوت عالٍ."</p>
                </div>
                <div>
                  <p className="font-semibold text-yellow-300 mb-1">نشاط تفاعل:</p>
                  <p className="pr-4 mb-2">اطلب من الحضور مشاركة أي أداة استخدموها وكانت مفيدة.</p>
                  <p className="font-semibold text-yellow-300 mb-1">إذا كان التفاعل ضعيف:</p>
                  <p className="pr-4">"لا تقلقوا! معظم الناس يعرفون فقط ChatGPT. سنتعلم اليوم 15+ أداة مختلفة."</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* القسم 5: القاعدة الذهبية */}
        <section id="golden-rule" className="py-20 px-4 bg-gradient-to-br from-yellow-950/20 to-orange-950/20">
          <div className="container mx-auto max-w-4xl space-y-12">
            <div className="text-center space-y-4">
              <div className="text-7xl mb-4">⭐</div>
              <h2 className="text-4xl md:text-6xl font-bold text-transparent bg-gradient-to-l from-yellow-400 to-orange-400 bg-clip-text">
                القاعدة الذهبية
              </h2>
              <div className="h-1 w-32 bg-gradient-to-l from-yellow-500 to-orange-500 mx-auto rounded-full"></div>
            </div>

            <div className="bg-gradient-to-br from-yellow-900/40 to-orange-900/40 border-4 border-yellow-500 rounded-2xl p-12 text-center space-y-6 shadow-2xl">
              <p className="text-3xl md:text-4xl font-bold leading-relaxed text-white">
                لا تطلب من الذكاء الاصطناعي شيء
                <br />
                <span className="text-yellow-300">إلا إذا عرفت كيف ستتحقق</span>
                <br />
                قبل الاعتماد عليه
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-red-950/40 border-2 border-red-600 rounded-xl p-6 space-y-4">
                <div className="flex items-center gap-3 text-red-400">
                  <span className="text-4xl">❌</span>
                  <h3 className="text-xl font-bold">خطأ شائع</h3>
                </div>
                <p className="text-slate-200 leading-relaxed">
                  "اطلب من AI معلومة، انسخها، استخدمها مباشرة، بدون تحقق."
                </p>
                <div className="bg-red-900/30 rounded-lg p-4">
                  <p className="text-sm text-red-200 font-semibold">النتيجة:</p>
                  <ul className="text-sm text-slate-300 space-y-1 pr-4 mt-2">
                    <li>• معلومات خاطئة أو قديمة</li>
                    <li>• قرارات مبنية على بيانات مغلوطة</li>
                    <li>• فقدان المصداقية</li>
                  </ul>
                </div>
              </div>

              <div className="bg-green-950/40 border-2 border-green-600 rounded-xl p-6 space-y-4">
                <div className="flex items-center gap-3 text-green-400">
                  <span className="text-4xl">✓</span>
                  <h3 className="text-xl font-bold">الطريقة الصحيحة</h3>
                </div>
                <p className="text-slate-200 leading-relaxed">
                  "اطلب من AI، ثم تحقق، قارن، راجع المصادر، ثم قرر."
                </p>
                <div className="bg-green-900/30 rounded-lg p-4">
                  <p className="text-sm text-green-200 font-semibold">النتيجة:</p>
                  <ul className="text-sm text-slate-300 space-y-1 pr-4 mt-2">
                    <li>• معلومات موثوقة ودقيقة</li>
                    <li>• قرارات سليمة</li>
                    <li>• ثقة في النتائج</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-8 space-y-6">
              <h3 className="text-2xl font-bold text-center text-yellow-300">قائمة فحص التحقق السريع</h3>
              <div className="space-y-4">
                {[
                  { id: 1, text: "هل المعلومة قابلة للتحقق من مصدر مستقل؟", icon: "🔍" },
                  { id: 2, text: "هل الأرقام والإحصائيات منطقية ومتسقة؟", icon: "📊" },
                  { id: 3, text: "هل يمكنني مقارنة النتيجة مع خيار آخر؟", icon: "⚖️" },
                  { id: 4, text: "هل المحتوى مناسب للسياق والجمهور؟", icon: "🎯" },
                  { id: 5, text: "هل هناك أي رايات حمراء (معلومات غريبة أو غير منطقية)؟", icon: "🚩" }
                ].map((item) => (
                  <div key={item.id} className="flex items-start gap-4 p-4 bg-slate-900/50 rounded-lg hover:bg-slate-900/70 transition">
                    <span className="text-3xl flex-shrink-0">{item.icon}</span>
                    <div className="flex-1">
                      <p className="text-slate-200 leading-relaxed">{item.text}</p>
                    </div>
                    <div className="flex-shrink-0">
                      <input type="checkbox" className="w-6 h-6 rounded border-slate-600 bg-slate-700" />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-blue-950/30 border border-blue-700 rounded-xl p-6">
              <h4 className="font-bold text-blue-300 text-lg mb-3">قاعدة إضافية مهمة:</h4>
              <p className="text-slate-200 leading-relaxed text-lg">
                كلما كانت المهمة أكثر أهمية أو حساسية،
                <span className="text-yellow-400 font-semibold"> كلما احتجت مستوى تحقق أعلى</span>.
              </p>
              <div className="grid md:grid-cols-3 gap-4 mt-6 text-sm">
                <div className="bg-green-900/20 border border-green-700 rounded-lg p-3 text-center">
                  <p className="font-semibold text-green-300 mb-1">مهمة بسيطة</p>
                  <p className="text-slate-300 text-xs">تحقق سريع يكفي</p>
                </div>
                <div className="bg-yellow-900/20 border border-yellow-700 rounded-lg p-3 text-center">
                  <p className="font-semibold text-yellow-300 mb-1">مهمة متوسطة</p>
                  <p className="text-slate-300 text-xs">تحقق من مصدرين</p>
                </div>
                <div className="bg-red-900/20 border border-red-700 rounded-lg p-3 text-center">
                  <p className="font-semibold text-red-300 mb-1">مهمة حرجة</p>
                  <p className="text-slate-300 text-xs">تحقق شامل + مراجعة خبير</p>
                </div>
              </div>
            </div>

            {/* ملاحظات للمدرب */}
            <div className="bg-yellow-950/20 border border-yellow-700/50 rounded-xl p-6 space-y-3">
              <h4 className="text-xl font-bold text-yellow-400 flex items-center gap-2">
                <span>📋</span>
                ملاحظات للمدرب
              </h4>
              <div className="grid md:grid-cols-2 gap-4 text-sm text-slate-200">
                <div>
                  <p className="font-semibold text-yellow-300 mb-2">⏱️ الزمن المقترح: 8 دقائق</p>
                  <p className="font-semibold text-yellow-300 mb-1">سؤال افتتاح:</p>
                  <p className="pr-4">"كم منكم يتحقق دائماً من مخرجات الذكاء الاصطناعي قبل استخدامها؟"</p>
                </div>
                <div>
                  <p className="font-semibold text-yellow-300 mb-1">نشاط تفاعل:</p>
                  <p className="pr-4 mb-2">اطلب من الحضور مشاركة موقف حصلت فيه مشكلة بسبب الثقة العمياء في AI.</p>
                  <p className="font-semibold text-yellow-300 mb-1">إذا كان التفاعل ضعيف:</p>
                  <p className="pr-4">"تذكروا الإحصائية: 56% من الموظفين وقعوا في أخطاء بسبب AI. القاعدة الذهبية تمنع 90% من هذه الأخطاء!"</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* القسم 6: إطار موجز 20 ثانية */}
        <section id="quick-framework" className="py-20 px-4">
          <div className="container mx-auto max-w-4xl space-y-12">
            <div className="text-center space-y-4">
              <div className="text-6xl">⚡</div>
              <h2 className="text-4xl md:text-5xl font-bold">إطار موجز 20 ثانية</h2>
              <p className="text-xl text-slate-300">قالب سريع لطلبات واضحة ودقيقة</p>
              <div className="h-1 w-32 bg-gradient-to-l from-blue-500 to-purple-500 mx-auto rounded-full"></div>
            </div>

            <div className="bg-gradient-to-br from-blue-950/40 to-purple-950/40 border-2 border-blue-600 rounded-2xl p-8 space-y-6">
              <h3 className="text-2xl font-bold text-center text-blue-300">القالب الجاهز (انسخه واستخدمه)</h3>
              <div className="bg-slate-900 rounded-xl p-6 font-mono text-sm text-slate-200 space-y-4 border border-slate-700">
                <div className="space-y-2">
                  <p className="text-green-400 font-bold">1. الهدف:</p>
                  <p className="pr-4 text-slate-300">[ماذا تريد بالضبط؟]</p>
                </div>
                <div className="space-y-2">
                  <p className="text-yellow-400 font-bold">2. لمن:</p>
                  <p className="pr-4 text-slate-300">[الجمهور المستهدف أو المستخدم النهائي]</p>
                </div>
                <div className="space-y-2">
                  <p className="text-blue-400 font-bold">3. المدخلات:</p>
                  <p className="pr-4 text-slate-300">[المعلومات المتوفرة لديك]</p>
                </div>
                <div className="space-y-2">
                  <p className="text-red-400 font-bold">4. القيود:</p>
                  <p className="pr-4 text-slate-300">[الحدود: الطول، النبرة، التنسيق]</p>
                </div>
                <div className="space-y-2">
                  <p className="text-purple-400 font-bold">5. شكل المخرجات:</p>
                  <p className="pr-4 text-slate-300">[كيف تريد الناتج: قائمة، فقرات، جدول]</p>
                </div>
              </div>

              <div className="bg-blue-900/30 border border-blue-700 rounded-lg p-4">
                <p className="text-sm text-blue-200 font-semibold">💡 نصيحة:</p>
                <p className="text-sm text-slate-300 mt-1">كلما كان الطلب أكثر وضوحاً، كانت النتيجة أفضل!</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-red-950/30 border border-red-700 rounded-xl p-6 space-y-4">
                <div className="flex items-center gap-2 text-red-400 font-bold text-lg">
                  <span>❌</span>
                  <span>مثال ضعيف</span>
                </div>
                <div className="bg-slate-900 rounded-lg p-4 text-sm text-slate-300">
                  "اكتب لي محتوى عن التسويق"
                </div>
                <div className="text-sm text-slate-400 space-y-1">
                  <p className="font-semibold text-red-300">المشكلة:</p>
                  <ul className="pr-4 space-y-1">
                    <li>• غامض جداً</li>
                    <li>• لا يوضح الجمهور</li>
                    <li>• لا يحدد الطول أو النبرة</li>
                    <li>• النتيجة ستكون عامة وغير مفيدة</li>
                  </ul>
                </div>
              </div>

              <div className="bg-green-950/30 border border-green-700 rounded-xl p-6 space-y-4">
                <div className="flex items-center gap-2 text-green-400 font-bold text-lg">
                  <span>✓</span>
                  <span>مثال قوي</span>
                </div>
                <div className="bg-slate-900 rounded-lg p-4 text-sm text-slate-300 leading-relaxed">
                  <span className="text-green-400">الهدف:</span> منشور LinkedIn<br/>
                  <span className="text-yellow-400">لمن:</span> مدراء مشاريع في الشرق الأوسط<br/>
                  <span className="text-blue-400">المدخلات:</span> نصائح لإدارة فرق العمل عن بعد<br/>
                  <span className="text-red-400">القيود:</span> 150 كلمة، نبرة احترافية ودية<br/>
                  <span className="text-purple-400">الشكل:</span> 3 نقاط رئيسية + خاتمة
                </div>
                <div className="text-sm text-green-300 font-semibold">
                  ✓ النتيجة ستكون دقيقة ومفيدة
                </div>
              </div>
            </div>

            <div className="bg-yellow-950/30 border-2 border-yellow-600 rounded-xl p-8 space-y-4">
              <h3 className="text-2xl font-bold text-center text-yellow-300">تمرين سريع (60 ثانية)</h3>
              <p className="text-center text-slate-200">استخدم الإطار الموجز لكتابة طلب واضح للمهمة التالية:</p>
              <div className="bg-slate-900 rounded-lg p-6 text-center">
                <p className="text-lg text-slate-200">"تريد كتابة بريد إلكتروني لطلب إجازة من مديرك"</p>
              </div>
              <div className="bg-slate-800 rounded-lg p-4 text-sm">
                <p className="font-semibold text-yellow-300 mb-2">املأ الفراغات:</p>
                <div className="space-y-2 text-slate-300">
                  <p>الهدف: ___________</p>
                  <p>لمن: ___________</p>
                  <p>المدخلات: ___________</p>
                  <p>القيود: ___________</p>
                  <p>الشكل: ___________</p>
                </div>
              </div>
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
                  <p className="pr-4">"كم منكم يكتب طلبات واضحة ومفصلة للذكاء الاصطناعي؟"</p>
                </div>
                <div>
                  <p className="font-semibold text-yellow-300 mb-1">نشاط تفاعل:</p>
                  <p className="pr-4 mb-2">أعط الحضور دقيقة واحدة لتطبيق الإطار على مثال البريد. اطلب من 2-3 أشخاص مشاركة إجاباتهم.</p>
                  <p className="font-semibold text-yellow-300 mb-1">إذا كان التفاعل ضعيف:</p>
                  <p className="pr-4">"لا تقلقوا! هذا طبيعي. الإطار الموجز يصبح سهل بعد 3-4 مرات من الممارسة."</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* القسم 7: وصفة البرومبت القوية */}
        <section id="prompt-recipe" className="py-20 px-4 bg-slate-900/50">
          <div className="container mx-auto max-w-4xl space-y-12">
            <div className="text-center space-y-4">
              <div className="text-6xl">📝</div>
              <h2 className="text-4xl md:text-5xl font-bold">وصفة البرومبت القوية</h2>
              <p className="text-xl text-slate-300">القالب الشامل للمهام المعقدة</p>
              <div className="h-1 w-32 bg-gradient-to-l from-blue-500 to-purple-500 mx-auto rounded-full"></div>
            </div>

            <div className="bg-gradient-to-br from-purple-950/40 to-blue-950/40 border-2 border-purple-600 rounded-2xl p-8 space-y-6">
              <h3 className="text-2xl font-bold text-center text-purple-300">الوصفة الكاملة (7 خطوات)</h3>
              <div className="bg-slate-900 rounded-xl p-6 space-y-6 border border-slate-700">
                {[
                  { num: 1, title: "الدور", desc: "أنت [خبير/مستشار/كاتب] متخصص في [المجال]", color: "text-red-400" },
                  { num: 2, title: "السياق", desc: "أنا [من أنت؟ موقفك؟] أحتاج [ماذا ولماذا؟]", color: "text-orange-400" },
                  { num: 3, title: "المهمة", desc: "[اطلب بوضوح ما تريد بالضبط]", color: "text-yellow-400" },
                  { num: 4, title: "القيود", desc: "الطول: [عدد الكلمات]، النبرة: [احترافية/ودية]، تجنب: [ما لا تريده]", color: "text-green-400" },
                  { num: 5, title: "مثال واحد", desc: "مثال مشابه لما أريد: [أعط مثال توضيحي]", color: "text-blue-400" },
                  { num: 6, title: "شكل المخرجات", desc: "أريد الناتج بهذا الشكل: [قائمة/جدول/فقرات]", color: "text-purple-400" },
                  { num: 7, title: "فحص الجودة", desc: "تأكد من: [معايير الجودة التي تريدها]", color: "text-pink-400" }
                ].map((step) => (
                  <div key={step.num} className="bg-slate-800/50 rounded-lg p-4 space-y-2">
                    <div className="flex items-center gap-3">
                      <div className={`w-8 h-8 rounded-full ${step.color.replace('text-', 'bg-').replace('-400', '-600')} flex items-center justify-center font-bold`}>
                        {step.num}
                      </div>
                      <h4 className={`font-bold text-lg ${step.color}`}>{step.title}</h4>
                    </div>
                    <p className="text-slate-300 text-sm pr-11">{step.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-center">مثال عملي: قبل وبعد</h3>

              <div className="grid lg:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="bg-red-950/30 border-2 border-red-700 rounded-xl p-6 space-y-3">
                    <div className="flex items-center gap-2 text-red-400 font-bold text-lg">
                      <span>❌</span>
                      <span>برومبت ضعيف</span>
                    </div>
                    <div className="bg-slate-900 rounded-lg p-4 text-sm text-slate-300">
                      "اكتب لي خطة تسويقية"
                    </div>
                  </div>

                  <div className="bg-slate-800 rounded-lg p-4 text-sm">
                    <p className="font-semibold text-red-400 mb-2">النتيجة:</p>
                    <ul className="space-y-1 text-slate-300 pr-4">
                      <li>• خطة عامة جداً</li>
                      <li>• غير مناسبة للسياق</li>
                      <li>• تحتاج تعديلات كثيرة</li>
                      <li>• تضيع الوقت</li>
                    </ul>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="bg-green-950/30 border-2 border-green-700 rounded-xl p-6 space-y-3">
                    <div className="flex items-center gap-2 text-green-400 font-bold text-lg">
                      <span>✓</span>
                      <span>برومبت قوي</span>
                    </div>
                    <div className="bg-slate-900 rounded-lg p-4 text-xs text-slate-300 leading-relaxed space-y-2">
                      <p><span className="text-red-400 font-bold">الدور:</span> أنت مستشار تسويق متخصص في المشاريع الصغيرة</p>
                      <p><span className="text-orange-400 font-bold">السياق:</span> أنا صاحب مطعم صغير في الرياض، أحتاج جذب عملاء جدد بميزانية محدودة</p>
                      <p><span className="text-yellow-400 font-bold">المهمة:</span> ضع خطة تسويقية لمدة شهرين</p>
                      <p><span className="text-green-400 font-bold">القيود:</span> الميزانية 5000 ريال، التركيز على السوشيال ميديا والمنطقة المحلية</p>
                      <p><span className="text-blue-400 font-bold">مثال:</span> مثل استراتيجية تسويق المطاعم المحلية الناجحة</p>
                      <p><span className="text-purple-400 font-bold">الشكل:</span> جدول زمني أسبوعي + ميزانية تفصيلية</p>
                      <p><span className="text-pink-400 font-bold">الفحص:</span> تأكد أن كل نشاط عملي وقابل للتنفيذ</p>
                    </div>
                  </div>

                  <div className="bg-slate-800 rounded-lg p-4 text-sm">
                    <p className="font-semibold text-green-400 mb-2">النتيجة:</p>
                    <ul className="space-y-1 text-slate-300 pr-4">
                      <li>✓ خطة مفصلة ودقيقة</li>
                      <li>✓ مناسبة تماماً للسياق</li>
                      <li>✓ جاهزة للتنفيذ مباشرة</li>
                      <li>✓ توفر الوقت والجهد</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-blue-950/30 border border-blue-700 rounded-xl p-6">
              <h4 className="font-bold text-blue-300 text-lg mb-3">💡 متى تستخدم الوصفة الكاملة؟</h4>
              <ul className="space-y-2 text-slate-200 pr-4">
                <li className="flex items-start gap-2">
                  <span className="text-blue-400 mt-1">•</span>
                  <span>المهام المعقدة التي تحتاج دقة عالية</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-400 mt-1">•</span>
                  <span>المحتوى المهني أو الرسمي</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-400 mt-1">•</span>
                  <span>عندما تحتاج نتيجة من أول مرة</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-400 mt-1">•</span>
                  <span>المشاريع ذات الميزانية أو الوقت المحدود</span>
                </li>
              </ul>
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
                  <p className="pr-4">"من منكم جرب يكتب طلب طويل ومفصل للذكاء الاصطناعي؟ كيف كانت النتيجة؟"</p>
                </div>
                <div>
                  <p className="font-semibold text-yellow-300 mb-1">نشاط تفاعل:</p>
                  <p className="pr-4 mb-2">اعرض مثال القبل والبعد على الشاشة. ناقش الفرق مع الحضور.</p>
                  <p className="font-semibold text-yellow-300 mb-1">إذا كان التفاعل ضعيف:</p>
                  <p className="pr-4">"هذه الوصفة استخدمها المحترفون. الفرق بين نتيجة ممتازة ونتيجة ضعيفة هو هذه الخطوات السبع."</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* القسم 8: حلقة التحسين */}
        <section id="improvement-loop" className="py-20 px-4">
          <div className="container mx-auto max-w-4xl space-y-12">
            <div className="text-center space-y-4">
              <div className="text-6xl">🔄</div>
              <h2 className="text-4xl md:text-5xl font-bold">حلقة التحسين</h2>
              <p className="text-xl text-slate-300">مسودة، نقد، تحسين، نهائي</p>
              <div className="h-1 w-32 bg-gradient-to-l from-blue-500 to-purple-500 mx-auto rounded-full"></div>
            </div>

            <div className="bg-gradient-to-br from-blue-900/30 to-purple-900/30 border-2 border-blue-600 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-center mb-8 text-blue-300">دورة التحسين في 4 خطوات</h3>
              <div className="grid md:grid-cols-4 gap-4">
                {[
                  { num: 1, title: "مسودة", icon: "📄", desc: "احصل على النسخة الأولى", color: "blue" },
                  { num: 2, title: "نقد", icon: "🔍", desc: "اطلب تحليل نقاط الضعف", color: "yellow" },
                  { num: 3, title: "تحسين", icon: "⚡", desc: "اطلب تعديلات محددة", color: "green" },
                  { num: 4, title: "نهائي", icon: "✅", desc: "احصل على النسخة النهائية", color: "purple" }
                ].map((step) => (
                  <div key={step.num} className={`bg-${step.color}-950/40 border-2 border-${step.color}-600 rounded-xl p-6 text-center space-y-3 hover:scale-105 transition-transform`}>
                    <div className="text-5xl">{step.icon}</div>
                    <div className={`text-3xl font-bold text-${step.color}-400`}>{step.num}</div>
                    <h4 className="font-bold text-lg text-white">{step.title}</h4>
                    <p className="text-sm text-slate-300">{step.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-center">الجمل الجاهزة للنقد والتحسين</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-yellow-950/30 border border-yellow-700 rounded-xl p-6 space-y-4">
                  <h4 className="text-xl font-bold text-yellow-300 flex items-center gap-2">
                    <span>🔍</span>
                    <span>جمل النقد (انسخها)</span>
                  </h4>
                  <div className="space-y-3">
                    {[
                      "راجع النص السابق، ما نقاط الضعف فيه؟",
                      "حدد الأجزاء الغامضة أو غير الواضحة",
                      "هل المحتوى مناسب للجمهور المستهدف؟",
                      "هل هناك معلومات ناقصة أو زائدة؟",
                      "ما الذي يمكن تحسينه في النبرة أو الأسلوب؟"
                    ].map((prompt, idx) => (
                      <div key={idx} className="bg-slate-900 rounded-lg p-3 text-sm text-slate-300 hover:bg-slate-800 cursor-pointer transition flex items-center justify-between">
                        <span>{prompt}</span>
                        <span className="text-xs text-slate-500">انقر للنسخ</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-green-950/30 border border-green-700 rounded-xl p-6 space-y-4">
                  <h4 className="text-xl font-bold text-green-300 flex items-center gap-2">
                    <span>⚡</span>
                    <span>جمل التحسين (انسخها)</span>
                  </h4>
                  <div className="space-y-3">
                    {[
                      "أعد كتابة النص مع تبسيط اللغة",
                      "اجعل النبرة أكثر [احترافية/ودية/رسمية]",
                      "أضف أمثلة عملية لكل نقطة",
                      "اختصر النص إلى [50%/30%] من الطول الحالي",
                      "أعد ترتيب الأفكار من الأهم إلى الأقل أهمية"
                    ].map((prompt, idx) => (
                      <div key={idx} className="bg-slate-900 rounded-lg p-3 text-sm text-slate-300 hover:bg-slate-800 cursor-pointer transition flex items-center justify-between">
                        <span>{prompt}</span>
                        <span className="text-xs text-slate-500">انقر للنسخ</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-8 space-y-6">
              <h3 className="text-2xl font-bold text-center">مثال تطبيقي كامل</h3>
              <div className="space-y-4">
                <div className="bg-blue-900/30 border border-blue-700 rounded-lg p-4 space-y-2">
                  <p className="font-bold text-blue-300">الخطوة 1: المسودة</p>
                  <div className="bg-slate-900 rounded p-3 text-sm text-slate-300">
                    "اكتب بريد إلكتروني لمدير المشتريات أشكره على الاجتماع"
                  </div>
                  <p className="text-xs text-slate-400 italic">النتيجة: بريد عام ومختصر جداً</p>
                </div>

                <div className="bg-yellow-900/30 border border-yellow-700 rounded-lg p-4 space-y-2">
                  <p className="font-bold text-yellow-300">الخطوة 2: النقد</p>
                  <div className="bg-slate-900 rounded p-3 text-sm text-slate-300">
                    "راجع البريد السابق، ما نقاط الضعف فيه؟"
                  </div>
                  <p className="text-xs text-slate-400 italic">AI يذكر: البريد مختصر، لا يذكر تفاصيل المحادثة، لا دعوة لإجراء واضحة</p>
                </div>

                <div className="bg-green-900/30 border border-green-700 rounded-lg p-4 space-y-2">
                  <p className="font-bold text-green-300">الخطوة 3: التحسين</p>
                  <div className="bg-slate-900 rounded p-3 text-sm text-slate-300">
                    "أعد كتابة البريد، أضف: الإشارة للعرض المقدم، طلب الرد خلال 3 أيام، نبرة ودية واحترافية"
                  </div>
                  <p className="text-xs text-slate-400 italic">النتيجة: بريد محسّن بشكل كبير</p>
                </div>

                <div className="bg-purple-900/30 border border-purple-700 rounded-lg p-4 space-y-2">
                  <p className="font-bold text-purple-300">الخطوة 4: النهائي</p>
                  <div className="bg-slate-900 rounded p-3 text-sm text-slate-300">
                    "مراجعة أخيرة: هل البريد جاهز للإرسال؟ تأكد من عدم وجود أخطاء لغوية"
                  </div>
                  <p className="text-xs text-green-400 font-semibold">✓ بريد احترافي جاهز للإرسال</p>
                </div>
              </div>
            </div>

            <div className="bg-orange-950/30 border border-orange-700 rounded-xl p-6">
              <h4 className="font-bold text-orange-300 text-lg mb-3">⚡ نصيحة احترافية:</h4>
              <p className="text-slate-200 leading-relaxed">
                لا تتوقع نتيجة مثالية من المحاولة الأولى. الاحترافيون يستخدمون 2-3 جولات تحسين للمهام المهمة.
                هذا طبيعي ومتوقع!
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
                  <p className="font-semibold text-yellow-300 mb-2">⏱️ الزمن المقترح: 12 دقيقة</p>
                  <p className="font-semibold text-yellow-300 mb-1">سؤال افتتاح:</p>
                  <p className="pr-4">"كم منكم يحصل على نتيجة مثالية من المحاولة الأولى؟"</p>
                </div>
                <div>
                  <p className="font-semibold text-yellow-300 mb-1">نشاط تفاعل:</p>
                  <p className="pr-4 mb-2">اعرض المثال التطبيقي الكامل خطوة بخطوة. اطلب من الحضور ملاحظة الفرق في كل مرحلة.</p>
                  <p className="font-semibold text-yellow-300 mb-1">إذا كان التفاعل ضعيف:</p>
                  <p className="pr-4">"فكروا في الذكاء الاصطناعي كمساعد متدرب. يحتاج توجيه وتعديل، لكن مع التوجيه الصحيح ينتج عمل ممتاز."</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-12 px-4 bg-slate-950 border-t border-slate-800">
          <div className="container mx-auto max-w-4xl text-center space-y-4">
            <p className="text-slate-400">
              موقع تدريبي متكامل حول استخدام الذكاء الاصطناعي بذكاء
            </p>
            <p className="text-sm text-slate-500">
              جميع الأمثلة خيالية وآمنة • لا تشارك بيانات حساسة
            </p>
            <button
              onClick={() => scrollToSection("table-of-contents")}
              className="text-blue-400 hover:text-blue-300 transition"
            >
              العودة إلى الفهرس ↑
            </button>
          </div>
        </footer>
      </div>
    </div>
  );
}
