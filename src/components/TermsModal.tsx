"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

export default function TermsModal() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="text-gray-500 hover:text-[#E60000] underline underline-offset-4 transition-colors cursor-pointer text-sm"
      >
        תקנון המבצע
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9999] flex items-center justify-center p-6"
            dir="rtl"
          >
            <div
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
              onClick={() => setOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative bg-[#1A1A1A] border border-white/10 rounded-3xl p-8 max-w-2xl w-full max-h-[80vh] overflow-y-auto z-10"
            >
              <button
                onClick={() => setOpen(false)}
                className="absolute top-4 left-4 w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-gray-500 hover:text-white transition-all cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>

              <h2 className="font-[family-name:var(--font-heebo)] font-black text-2xl text-white mb-6">
                תקנון מבצע מרץ 2026 בשקל אחד
              </h2>
              <h3 className="font-[family-name:var(--font-heebo)] font-bold text-lg text-gray-300 mb-6">
                קאנטרי גרייט שייפ נשר – יום פתוח
              </h3>

              <div className="space-y-6 text-gray-400 text-sm leading-relaxed">
                <div>
                  <h4 className="text-white font-bold mb-2">1. הגדרות</h4>
                  <p>&quot;המבצע&quot; – מבצע הצטרפות ייחודי המתקיים ביום פתוח בתאריך 25.2.2026.</p>
                  <p>&quot;המנוי&quot; – מנוי מתמשך לפי נהלי קאנטרי גרייט שייפ נשר.</p>
                </div>

                <div>
                  <h4 className="text-white font-bold mb-2">2. תנאי המבצע</h4>
                  <p>2.1 מחיר חודש מרץ 2026 יעמוד על 1 ש&quot;ח בלבד.</p>
                  <p>2.2 150 ש&quot;ח דמי מקדמה (דמי רישום – החזר מלא מובטח בכל אחד מהמקרים הבאים: לא הגעתם ליום הפתוח, הגעתם והחלטתם שלא מתאים, או החלטתם תוך 14 יום לבטל).</p>
                  <p>2.3 ללא התחייבות לחודשים מינימליים.</p>
                  <p>2.4 החל מהחודש השני – המנוי ממשיך במסלול VIP של הקאנטרי בתעריף מוזל בהתאם למדיניות המחירים התקפה.</p>
                  <p>2.5 המבצע תקף לרוכשים ביום האירוע בלבד או עד גמר מלאי.</p>
                </div>

                <div>
                  <h4 className="text-white font-bold mb-2">3. תחילת מנוי</h4>
                  <p>3.1 המנוי נכנס לתוקף מתחילת חודש מרץ 2026.</p>
                  <p>3.2 מנוי שנרכש אינו ניתן להעברה.</p>
                </div>

                <div>
                  <h4 className="text-white font-bold mb-2">4. זכאות למבצע</h4>
                  <p>4.1 לקוחות חדשים – זכאים להשתתף במבצע.</p>
                  <p>4.2 לקוחות עבר – זכאים להשתתף במבצע רק אם מתקיימים כל התנאים הבאים:</p>
                  <ul className="list-disc list-inside mr-4 space-y-1">
                    <li>הסתיים המנוי הקודם שלהם בקאנטרי.</li>
                    <li>חלפה תקופת צינון של 4 חודשים מלאים ממועד סיום המנוי.</li>
                    <li>לקוחות שסיימו מנוי עד 11.8.25 (כולל) – זכאים.</li>
                    <li>לקוחות שסיימו מנוי לאחר 11.8.25 – אינם זכאים.</li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-white font-bold mb-2">5. מי אינו זכאי למבצע</h4>
                  <p>5.1 מנויים פעילים.</p>
                  <p>5.2 מנויים שבמעמד &quot;הקפאה&quot;.</p>
                  <p>5.3 לקוחות עבר שלא עומדים בתקופת הצינון.</p>
                  <p>5.4 מנויים שחתומים על התחייבות קיימת מכל סוג.</p>
                </div>

                <div>
                  <h4 className="text-white font-bold mb-2">6. נהלים ביום הפתוח</h4>
                  <p>6.1 כניסה לאימונים ביום הפתוח מיועדת ללקוחות בעלי רישום ואישור מוקדם בלבד.</p>
                  <p>6.2 לקוחות ללא רישום מראש: רשאים לקבל סיור והצעת מחיר, אינם זכאים ליום ניסיון.</p>
                  <p>6.3 כל משתתף חייב להציג תעודת זהות (פיזית) ולחתום על הצהרת בריאות תקפה לפני כניסה למתחם.</p>
                </div>

                <div>
                  <h4 className="text-white font-bold mb-2">7. הטבות נוספות</h4>
                  <p>7.1 מבצעי משנה כגון כרטיסיות פילאטיס, מתנות למנויי UFC או מבצעי &quot;טעימות&quot; – יחולו בכפוף להחלטת הנהלת הקאנטרי בלבד.</p>
                  <p>7.2 המבצע אינו ניתן לשילוב עם מבצעים או הנחות אחרות.</p>
                </div>

                <div>
                  <h4 className="text-white font-bold mb-2">8. כמות מוגבלת</h4>
                  <p>8.1 המבצע תקף ל-50 מצטרפים בלבד.</p>
                  <p>8.2 עם סיום המלאי – ההטבה תיפסק ללא התראה מוקדמת.</p>
                </div>

                <div>
                  <h4 className="text-white font-bold mb-2">9. כללי</h4>
                  <p>9.1 הנהלת הקאנטרי רשאית לשנות תנאי המבצע או לבטלו בכל עת.</p>
                  <p>9.2 במקרה של סתירה – נוסח התקנון הרשמי גובר על כל פרסום אחר.</p>
                  <p>9.3 ט.ל.ח.</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
