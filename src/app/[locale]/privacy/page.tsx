import {getTranslations, setRequestLocale} from "next-intl/server";
import type {Metadata} from "next";
import {Link} from "@/i18n/navigation";

type Props = {params: Promise<{locale: string}>};

export async function generateMetadata({params}: Props): Promise<Metadata> {
  const {locale} = await params;
  const t = await getTranslations({locale, namespace: "metadata"});
  return {
    title: t("privacyTitle"),
    description: t("privacyDescription"),
  };
}

export default async function PrivacyPage({params}: Props) {
  const {locale} = await params;
  setRequestLocale(locale);

  const t = await getTranslations({locale, namespace: "privacyPage"});

  const summaryItems = [t("summary0"), t("summary1"), t("summary2")];

  const s5Items = Array.from({length: 7}, (_, i) => t(`s5item${i}`));

  return (
    <>
      <header className="border-b border-zinc-800/50">
        <div className="max-w-4xl mx-auto px-4 h-14 flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-2 font-bold text-white hover:opacity-80 transition-opacity"
          >
            <span
              className="w-7 h-7 rounded-lg flex items-center justify-center text-white font-black text-xs"
              style={{background: "linear-gradient(135deg, #007AFF, #0A84FF)"}}
            >
              G
            </span>
            iGymBro
          </Link>
          <Link href="/" className="text-sm text-zinc-400 hover:text-white transition-colors">
            {t("back")}
          </Link>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-4 py-16 pb-24">
        <article className="prose prose-invert prose-zinc max-w-none">
          <div className="mb-10">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#007AFF] mb-3">
              {t("legal")}
            </p>
            <h1 className="text-4xl font-black text-white mb-2">{t("title")}</h1>
            <p className="text-sm text-zinc-500">{t("lastUpdated")}</p>
          </div>

          {/* Summary */}
          <section className="mb-10 p-6 rounded-2xl border border-zinc-800 bg-zinc-900">
            <h2 className="text-lg font-bold text-white mb-4">{t("summaryTitle")}</h2>
            <ul className="space-y-3">
              {summaryItems.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span
                    className="mt-1 w-4 h-4 rounded-full flex-shrink-0 flex items-center justify-center"
                    style={{background: "rgba(0,122,255,0.2)"}}
                  >
                    <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                      <path d="M1.5 4l2 2L6.5 2" stroke="#007AFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <span className="text-sm text-zinc-300">{item}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Section 1 */}
          <Section num="1" title={t("s1title")}>
            <p className="text-zinc-400 leading-relaxed mb-4">{t("s1intro")}</p>
            <h3 className="text-base font-semibold text-white mb-2">{t("s1workoutTitle")}</h3>
            <ul className="text-sm text-zinc-400 space-y-1.5 mb-6 list-disc list-inside">
              {Array.from({length: 5}, (_, i) => (
                <li key={i}>{t(`s1workout${i}`)}</li>
              ))}
            </ul>
            <h3 className="text-base font-semibold text-white mb-2">{t("s1prefsTitle")}</h3>
            <ul className="text-sm text-zinc-400 space-y-1.5 mb-4 list-disc list-inside">
              {Array.from({length: 3}, (_, i) => (
                <li key={i}>{t(`s1prefs${i}`)}</li>
              ))}
            </ul>
            <p className="text-sm text-zinc-300 font-medium">{t("s1note")}</p>
          </Section>

          {/* Section 2 */}
          <Section num="2" title={t("s2title")}>
            <p className="text-zinc-400 leading-relaxed mb-4">
              {t("s2intro")}{" "}
              <strong className="text-zinc-200">{t("s2introPath")}</strong>.
            </p>
            <div className="overflow-x-auto mb-6">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="border-b border-zinc-700">
                    <th className="text-left py-2 pr-4 text-zinc-300 font-semibold">{t("s2tableType")}</th>
                    <th className="text-left py-2 pr-4 text-zinc-300 font-semibold">{t("s2tableAccess")}</th>
                    <th className="text-left py-2 text-zinc-300 font-semibold">{t("s2tablePurpose")}</th>
                  </tr>
                </thead>
                <tbody className="text-zinc-400">
                  {[0, 1, 2].map((i) => (
                    <tr key={i} className={i < 2 ? "border-b border-zinc-800" : ""}>
                      <td className="py-2.5 pr-4">{t(`s2row${i}type`)}</td>
                      <td className="py-2.5 pr-4">{t(`s2row${i}access`)}</td>
                      <td className="py-2.5">{t(`s2row${i}purpose`)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="p-4 rounded-xl border border-zinc-700 bg-zinc-900 text-sm text-zinc-400">
              <p className="font-semibold text-zinc-200 mb-2">{t("s2neverTitle")}</p>
              <ul className="space-y-1 list-disc list-inside">
                {[t("s2never0"), t("s2never1"), t("s2never2")].map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <p className="text-sm text-zinc-400 mt-4">{t("s2optional")}</p>
          </Section>

          {/* Section 3 */}
          <Section num="3" title={t("s3title")}>
            <p className="text-zinc-400 leading-relaxed">{t("s3body")}</p>
          </Section>

          {/* Section 4 */}
          <Section num="4" title={t("s4title")}>
            <p className="text-zinc-400 leading-relaxed">{t("s4body")}</p>
          </Section>

          {/* Section 5 */}
          <Section num="5" title={t("s5title")}>
            <ul className="space-y-3">
              {s5Items.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-0.5 text-zinc-600 flex-shrink-0">✕</span>
                  <span className="text-sm text-zinc-400">{item}</span>
                </li>
              ))}
            </ul>
          </Section>

          {/* Section 6 */}
          <Section num="6" title={t("s6title")}>
            <p className="text-zinc-400 leading-relaxed mb-4">{t("s6p1")}</p>
            <p className="text-zinc-400 leading-relaxed mb-4">{t("s6p2")}</p>
            <p className="text-zinc-400 leading-relaxed">{t("s6p3")}</p>
          </Section>

          {/* Section 7 */}
          <Section num="7" title={t("s7title")}>
            <p className="text-zinc-400 leading-relaxed">{t("s7body")}</p>
          </Section>

          {/* Section 8 */}
          <Section num="8" title={t("s8title")}>
            <p className="text-zinc-400 leading-relaxed">{t("s8body")}</p>
          </Section>
        </article>
      </main>

      <footer className="border-t border-zinc-800/50 py-8 px-4">
        <div className="max-w-4xl mx-auto flex items-center justify-between gap-4 flex-wrap">
          <Link
            href="/"
            className="flex items-center gap-2 font-bold text-white hover:opacity-80 transition-opacity text-sm"
          >
            <span
              className="w-6 h-6 rounded-md flex items-center justify-center text-white font-black text-xs"
              style={{background: "linear-gradient(135deg, #007AFF, #0A84FF)"}}
            >
              G
            </span>
            iGymBro
          </Link>
          <p className="text-xs text-zinc-600">{t("footerRights")}</p>
        </div>
      </footer>
    </>
  );
}

function Section({
  num,
  title,
  children,
}: {
  num: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mb-10">
      <h2 className="flex items-center gap-3 text-xl font-bold text-white mb-4">
        <span
          className="text-sm font-semibold px-2 py-0.5 rounded-md"
          style={{background: "rgba(0,122,255,0.15)", color: "#007AFF"}}
        >
          {num}
        </span>
        {title}
      </h2>
      {children}
    </section>
  );
}
