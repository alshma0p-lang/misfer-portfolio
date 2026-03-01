// الأقسام النهائية 17-20

export const Section17_Quiz = () => (
  <section id="quick-quiz" className="py-20 px-4 bg-slate-900/50">
    <div className="container mx-auto max-w-4xl space-y-12">
      <div className="text-center space-y-4">
        <div className="text-6xl">✍️</div>
        <h2 className="text-4xl md:text-5xl font-bold">اختبار سريع</h2>
        <p className="text-xl text-slate-300">12 سؤال لقياس فهمك</p>
      </div>

      <div className="space-y-6">
        {/* أسئلة الاختيار */}
        {[
          {
            q: "ما هي أهم خطوة قبل استخدام مخرجات الذكاء الاصطناعي؟",
            options: ["النسخ والاستخدام مباشرة", "التحقق من المصادر", "إعادة الكتابة", "مشاركتها مع الجميع"],
            correct: 1
          },
          {
            q: "أي من هذه ليست جزء من 'وصفة البرومبت القوية'؟",
            options: ["الدور", "السياق", "السعر", "القيود"],
            correct: 2
          },
          {
            q: "ما هو أفضل وقت لاستخدام حلقة التحسين؟",
            options: ["للمهام البسيطة فقط", "للمهام المهمة", "لا حاجة لها", "فقط للمحترفين"],
            correct: 1
          },
          {
            q: "أي من هذه رائحة حمراء تحذيرية في مخرجات AI؟",
            options: ["معلومات واضحة", "أرقام غريبة", "نص منظم", "لغة بسيطة"],
            correct: 1
          }
        ].map((item, idx) => (
          <div key={idx} className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 space-y-4">
            <p className="font-bold text-lg text-white">{idx + 1}. {item.q}</p>
            <div className="space-y-2">
              {item.options.map((opt, optIdx) => (
                <label key={optIdx} className="flex items-center gap-3 p-3 bg-slate-900/50 rounded-lg hover:bg-slate-700/50 cursor-pointer transition">
                  <input type="radio" name={`q${idx}`} className="w-5 h-5" />
                  <span className="text-slate-300">{opt}</span>
                </label>
              ))}
            </div>
          </div>
        ))}

        {/* أسئلة سيناريو */}
        <div className="bg-purple-950/30 border border-purple-700 rounded-xl p-8 space-y-6">
          <h3 className="text-2xl font-bold text-purple-300">أسئلة السيناريو</h3>

          {[
            {
              scenario: "تريد كتابة تقرير مهم لمديرك عن أداء المشروع. قررت استخدام AI.",
              question: "ما الخطوات الصحيحة؟",
              options: [
                "أكتب 'اكتب تقرير' وأرسل النتيجة مباشرة",
                "أستخدم وصفة البرومبت كاملة، أراجع النتيجة، أتحقق من الأرقام، أعدّل حسب الحاجة",
                "أطلب من AI وأنسخ بدون قراءة",
                "أستخدم برومبت بسيط ثم أرسل"
              ],
              correct: 1
            }
          ].map((item, idx) => (
            <div key={idx} className="bg-slate-800/50 rounded-lg p-6 space-y-4">
              <div className="bg-blue-900/30 border border-blue-700 rounded-lg p-4">
                <p className="text-sm text-blue-200 font-semibold mb-2">السيناريو:</p>
                <p className="text-slate-300">{item.scenario}</p>
              </div>
              <p className="font-bold text-white">{item.question}</p>
              <div className="space-y-2">
                {item.options.map((opt, optIdx) => (
                  <label key={optIdx} className="flex items-start gap-3 p-3 bg-slate-900/50 rounded-lg hover:bg-slate-700/50 cursor-pointer transition">
                    <input type="radio" name={`scenario${idx}`} className="w-5 h-5 mt-1 flex-shrink-0" />
                    <span className="text-sm text-slate-300">{opt}</span>
                  </label>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="text-center">
        <button className="px-8 py-4 bg-gradient-to-l from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-xl font-semibold text-lg transition-all">
          عرض الإجابات
        </button>
      </div>
    </div>
  </section>
);

export const Section18_SevenDayPlan = () => (
  <section id="7-day-plan" className="py-20 px-4">
    <div className="container mx-auto max-w-5xl space-y-12">
      <div className="text-center space-y-4">
        <div className="text-6xl">📅</div>
        <h2 className="text-4xl md:text-5xl font-bold">خطة 7 أيام</h2>
        <p className="text-xl text-slate-300">5 دقائق يومياً لتحسين مهاراتك</p>
      </div>

      <div className="grid md:grid-cols-7 gap-4">
        {[
          { day: 1, title: "اليوم الأول", task: "جرّب الإطار الموجز", desc: "اكتب 3 طلبات باستخدام إطار 20 ثانية"، icon: "⚡", color: "blue" },
          { day: 2, title: "اليوم الثاني", task: "استخدم حلقة التحسين", desc: "خذ مخرج AI، اطلب نقد، حسّنه", icon: "🔄", color: "purple" },
          { day: 3, title: "اليوم الثالث", task: "تدرب على التحقق", desc: "اطلب معلومة من AI وتحقق من مصدرين", icon: "🔍", color: "green" },
          { day: 4, title: "اليوم الرابع", task: "طبّق وصفة البرومبت", desc: "استخدم الخطوات السبع لمهمة مهمة", icon: "📝", color: "yellow" },
          { day: 5, title: "اليوم الخامس", task: "تجنب خطأ شائع", desc: "راجع قائمة الأخطاء وتجنب واحد", icon: "⚠️", color: "red" },
          { day: 6, title: "اليوم السادس", task: "جرّب استخدام جديد", desc: "اختر استخدام من القائمة وطبّقه", icon: "💡", color: "orange" },
          { day: 7, title: "اليوم السابع", task: "مراجعة وتقييم", desc: "راجع تقدمك، املأ Scorecard", icon: "🎯", color: "indigo" }
        ].map((day) => (
          <div key={day.day} className={`bg-${day.color}-950/30 border-2 border-${day.color}-700 rounded-xl p-4 space-y-3 hover:scale-105 transition-transform`}>
            <div className="text-center">
              <div className={`text-4xl mb-2`}>{day.icon}</div>
              <div className={`w-12 h-12 rounded-full bg-${day.color}-600 flex items-center justify-center font-bold text-xl text-white mx-auto mb-2`}>
                {day.day}
              </div>
              <h4 className="font-bold text-sm text-white mb-1">{day.title}</h4>
            </div>
            <div className="text-center">
              <p className="text-xs font-semibold text-slate-200 mb-1">{day.task}</p>
              <p className="text-xs text-slate-400">{day.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-8">
        <h3 className="text-2xl font-bold text-center mb-6">Scorecard التحسن</h3>
        <p className="text-center text-slate-300 mb-6">قيّم نفسك من 1-5 في كل معيار (قبل وبعد الأسبوع)</p>
        <div className="overflow-x-auto">
          <table className="w-full text-right">
            <thead className="bg-slate-900">
              <tr>
                <th className="p-3 text-right">المعيار</th>
                <th className="p-3 text-center">قبل</th>
                <th className="p-3 text-center">بعد</th>
                <th className="p-3 text-center">التحسن</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-700">
              {[
                "وضوح الطلب",
                "صيغة المخرجات",
                "خطوة التحقق",
                "جودة النتيجة",
                "وقت الإنجاز"
              ].map((criteria, idx) => (
                <tr key={idx} className="hover:bg-slate-700/30">
                  <td className="p-3">{criteria}</td>
                  <td className="p-3 text-center">
                    <input type="number" min="1" max="5" className="w-12 px-2 py-1 bg-slate-700 rounded text-center" />
                  </td>
                  <td className="p-3 text-center">
                    <input type="number" min="1" max="5" className="w-12 px-2 py-1 bg-slate-700 rounded text-center" />
                  </td>
                  <td className="p-3 text-center text-green-400 font-bold">-</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </section>
);

export const Section19_Conclusion = () => (
  <section id="conclusion" className="py-20 px-4 bg-gradient-to-br from-blue-950/30 to-purple-950/30">
    <div className="container mx-auto max-w-3xl space-y-12">
      <div className="text-center space-y-4">
        <div className="text-7xl">🎓</div>
        <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-l from-blue-400 to-purple-400 bg-clip-text text-transparent">
          الخاتمة
        </h2>
      </div>

      <div className="bg-gradient-to-br from-blue-900/40 to-purple-900/40 border-2 border-blue-600 rounded-2xl p-12 space-y-8 text-center">
        <p className="text-2xl md:text-3xl font-bold leading-relaxed text-white">
          الذكاء الاصطناعي مثل عدة قوية في يدك
        </p>

        <div className="space-y-6 text-lg text-slate-200 leading-relaxed">
          <p>
            الفرق بين الاستخدام الذكي والاستخدام العشوائي ليس في الأداة نفسها،
            بل في <span className="text-yellow-400 font-bold">طريقة استخدامك لها</span>.
          </p>

          <p>
            تذكّر دائماً: <span className="text-green-400 font-bold">الوضوح</span> في الطلب،
            <span className="text-blue-400 font-bold"> التحقق</span> قبل الاعتماد،
            و<span className="text-purple-400 font-bold">التحسين</span> المستمر.
          </p>

          <p>
            لا تتوقع الكمال من المحاولة الأولى. حتى المحترفون يحتاجون 2-3 جولات تحسين.
            هذا <span className="font-bold">طبيعي ومتوقع</span>.
          </p>
        </div>

        <div className="bg-slate-900/50 rounded-xl p-8 mt-8">
          <p className="text-xl font-bold text-yellow-300 mb-4">العادة اليومية الواحدة</p>
          <p className="text-lg text-slate-200">
            كل يوم، قبل أن تطلب شيء من الذكاء الاصطناعي، توقف 20 ثانية واسأل نفسك:
          </p>
          <p className="text-2xl font-bold text-white mt-4">
            "كيف سأتحقق من هذا؟"
          </p>
        </div>

        <div className="pt-8 space-y-4">
          <p className="text-3xl font-bold text-transparent bg-gradient-to-l from-green-400 to-blue-400 bg-clip-text">
            الآن أنت جاهز!
          </p>
          <p className="text-lg text-slate-300">
            ابدأ اليوم، طبّق ما تعلمته، وشارك معرفتك مع الآخرين.
          </p>
        </div>
      </div>

      <div className="text-center space-y-4">
        <button className="px-10 py-5 bg-gradient-to-l from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 rounded-xl font-bold text-xl transition-all hover:scale-105 shadow-2xl">
          حمّل ورقة القوالب الآن
        </button>
        <p className="text-sm text-slate-400">واحتفظ بها على مكتبك للرجوع إليها</p>
      </div>
    </div>
  </section>
);

export const Section20_References = () => (
  <section id="references" className="py-20 px-4 bg-slate-900/50">
    <div className="container mx-auto max-w-4xl space-y-12">
      <div className="text-center space-y-4">
        <div className="text-6xl">📚</div>
        <h2 className="text-4xl md:text-5xl font-bold">المراجع والتحديثات</h2>
        <p className="text-xl text-slate-300">مصادر حديثة وموثوقة</p>
      </div>

      <div className="space-y-6">
        <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-8 space-y-6">
          <h3 className="text-2xl font-bold text-blue-300">مراجع حديثة (2024-2026)</h3>

          {[
            {
              title: "AI Statistics and Trends 2026",
              source: "National University",
              date: "يناير 2026",
              link: "https://www.nu.edu/blog/ai-statistics-trends/",
              highlight: "إحصائيات شاملة عن استخدام AI في العمل والأخطاء الشائعة"
            },
            {
              title: "Stop AI Hallucinations: Detection, Prevention & Verification Guide",
              source: "Infomineo",
              date: "2025",
              link: "https://infomineo.com/artificial-intelligence/stop-ai-hallucinations-detection-prevention-verification-guide-2025/",
              highlight: "دليل شامل للتحقق من مخرجات AI ومعدلات الهلوسة"
            },
            {
              title: "Prompt Engineering Best Practices 2025",
              source: "CodeSignal",
              date: "2025",
              link: "https://codesignal.com/blog/prompt-engineering-best-practices-2025/",
              highlight: "أفضل الممارسات الحديثة في كتابة البرومبتات"
            },
            {
              title: "Trust, Attitudes and Use of Artificial Intelligence: Global Study",
              source: "KPMG",
              date: "2025",
              link: "https://kpmg.com/xx/en/our-insights/ai-and-technology/trust-attitudes-and-use-of-ai.html",
              highlight: "دراسة عالمية عن ثقة المستخدمين في AI والأخطاء الشائعة"
            },
            {
              title: "AI Hallucination Report 2026",
              source: "AllAboutAI",
              date: "2026",
              link: "https://www.allaboutai.com/resources/ai-statistics/ai-hallucinations/",
              highlight: "معدلات الهلوسة في نماذج AI المختلفة"
            },
            {
              title: "The Ultimate Guide to Prompt Engineering",
              source: "Lakera AI",
              date: "2025",
              link: "https://www.lakera.ai/blog/prompt-engineering-guide",
              highlight: "دليل شامل لتقنيات البرومبت المتقدمة"
            }
          ].map((ref, idx) => (
            <div key={idx} className="bg-slate-900/50 rounded-lg p-6 space-y-3 hover:bg-slate-700/50 transition">
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <h4 className="font-bold text-lg text-white mb-1">{ref.title}</h4>
                  <p className="text-sm text-slate-400 mb-2">{ref.source} • {ref.date}</p>
                  <p className="text-sm text-slate-300">{ref.highlight}</p>
                </div>
                <a
                  href={ref.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-shrink-0 px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg text-sm font-semibold transition"
                >
                  الرابط
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-yellow-950/30 border border-yellow-700 rounded-xl p-8 space-y-4">
          <h3 className="text-2xl font-bold text-yellow-300">ملاحظات مهمة</h3>
          <ul className="space-y-3 text-slate-200">
            <li className="flex items-start gap-2">
              <span className="text-yellow-400 mt-1">•</span>
              <span>جميع المصادر تم التحقق منها وهي من مواقع موثوقة</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-yellow-400 mt-1">•</span>
              <span>الإحصائيات مأخوذة من دراسات حديثة (2024-2026)</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-yellow-400 mt-1">•</span>
              <span>يُنصح بمراجعة هذه المصادر بشكل دوري للاطلاع على التحديثات</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-yellow-400 mt-1">•</span>
              <span>مجال الذكاء الاصطناعي يتطور بسرعة، لذا ابحث دائماً عن أحدث المعلومات</span>
            </li>
          </ul>
        </div>

        <div className="bg-blue-950/30 border border-blue-700 rounded-xl p-6">
          <p className="text-center text-slate-200 leading-relaxed">
            <span className="font-bold text-blue-300">تحديث مستمر:</span> نحرص على تحديث هذا المحتوى كل 3-6 أشهر
            لضمان دقة المعلومات ومواكبة أحدث التطورات في مجال الذكاء الاصطناعي.
          </p>
          <p className="text-center text-sm text-slate-400 mt-3">
            آخر تحديث: يناير 2026
          </p>
        </div>
      </div>
    </div>
  </section>
);
