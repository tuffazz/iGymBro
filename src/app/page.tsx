import Link from "next/link";
import Navbar from "@/components/Navbar";
import AnimatedSection from "@/components/AnimatedSection";
import IPhoneMockup from "@/components/IPhoneMockup";
import WatchMockup from "@/components/WatchMockup";

const APP_STORE_URL = "https://apps.apple.com/app/igymbroapp";

function AppStoreBadge({ large = false }: { large?: boolean }) {
  return (
    <a
      href={APP_STORE_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Download iGymBro on the App Store"
      className={`inline-flex items-center gap-3 bg-white text-black rounded-xl font-semibold transition-all duration-200 hover:scale-105 hover:shadow-lg ${
        large ? "px-7 py-3.5 text-base" : "px-5 py-2.5 text-sm"
      }`}
      style={{ boxShadow: large ? "0 8px 32px rgba(255,255,255,0.15)" : undefined }}
    >
      <svg
        className={large ? "w-7 h-7" : "w-5 h-5"}
        viewBox="0 0 814 1000"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M788.1 340.9c-5.8 4.5-108.2 62.2-108.2 190.5 0 148.4 130.3 200.9 134.2 202.2-.6 3.2-20.7 71.9-68.7 141.9-42.8 61.6-87.5 123.1-155.5 123.1s-85.5-39.5-164-39.5c-76 0-103.7 40.8-165.9 40.8s-105-37.5-155.5-98.8-96.4-166.1-96.4-271.2c0-193.3 125.4-295.5 248.2-295.5 66.1 0 121.2 43.4 162.7 43.4 39.5 0 101.1-46 176.3-46 28.5 0 130.9 2.6 198.3 99.2zm-234-181.5c31.1-36.9 53.1-88.1 53.1-139.3 0-7.1-.6-14.3-1.9-20.1-50.6 1.9-110.8 33.7-147.1 75.8-28.5 32.4-55.1 83.6-55.1 135.5 0 7.8 1.3 15.6 1.9 18.1 3.2.6 8.4 1.3 13.6 1.3 45.4 0 102.5-30.4 135.5-71.3z" />
      </svg>
      <div className="text-left">
        <div className={`${large ? "text-[10px]" : "text-[9px]"} font-normal opacity-70 leading-tight`}>
          Download on the
        </div>
        <div className={`${large ? "text-lg" : "text-base"} font-bold leading-tight`}>
          App Store
        </div>
      </div>
    </a>
  );
}

const features = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
    title: "Train from Your Wrist",
    description:
      "The Apple Watch app lets you log every set without touching your phone. Use the Digital Crown to dial in reps and weight with haptic precision.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <line x1="12" y1="8" x2="12" y2="12" />
        <line x1="12" y1="16" x2="12.01" y2="16" />
      </svg>
    ),
    title: "Automatic Rest Timer",
    description:
      "Complete a set and the rest timer fires immediately — no manual tapping. Pause it, skip it, or add time. You focus on recovering.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <line x1="8" y1="6" x2="21" y2="6" />
        <line x1="8" y1="12" x2="21" y2="12" />
        <line x1="8" y1="18" x2="21" y2="18" />
        <line x1="3" y1="6" x2="3.01" y2="6" />
        <line x1="3" y1="12" x2="3.01" y2="12" />
        <line x1="3" y1="18" x2="3.01" y2="18" />
      </svg>
    ),
    title: "95 Exercises Ready",
    description:
      "Built-in library of 95 exercises across 14 muscle group categories — chest, back, shoulders, arms, legs, core, cardio and more. Plus unlimited custom exercises.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    ),
    title: "Live Health Metrics",
    description:
      "Real-time heart rate and active calories during your workout via HealthKit. Completed sessions are automatically written to Apple Health.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
        <line x1="16" y1="2" x2="16" y2="6" />
        <line x1="8" y1="2" x2="8" y2="6" />
        <line x1="3" y1="10" x2="21" y2="10" />
      </svg>
    ),
    title: "Weekly Program Builder",
    description:
      "Create named workout templates, add exercises with sets and rest times, then assign them to days of the week. Your plan syncs to Apple Watch instantly.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="20" x2="18" y2="10" />
        <line x1="12" y1="20" x2="12" y2="4" />
        <line x1="6" y1="20" x2="6" y2="14" />
      </svg>
    ),
    title: "Progress Charts & PRs",
    description:
      "Training volume charts and per-exercise weight progression graphs. Personal records for max weight, reps, and volume are detected automatically.",
  },
];

const iphoneScreens = [
  {
    label: "Dashboard",
    description: "Weekly calendar + today's workout",
    caption: "See your whole week at a glance. Today's workout is one tap away.",
  },
  {
    label: "Active Workout",
    description: "Reps, weight, rest timer & live HR",
    caption: "Log every set. The rest timer starts the moment you're done.",
  },
  {
    label: "Progress",
    description: "Volume charts + weight progression",
    caption: "Volume charts and strength curves. See exactly where you're heading.",
  },
];

const watchScreens = [
  {
    label: "Workout List",
    description: "Synced from iPhone",
  },
  {
    label: "Set Input",
    description: "Digital Crown precision",
  },
  {
    label: "Rest Timer",
    description: "Auto-fires after set",
  },
];

const steps = [
  {
    num: "01",
    title: "Build your program",
    description:
      "Open the Program tab and create a workout template. Add exercises from 95 built-in options, set target reps, weight, and rest time. Assign the template to a day of the week.",
  },
  {
    num: "02",
    title: "Start your workout",
    description:
      "Tap Start Workout from the Dashboard or your Watch. Your program loads instantly — no setup, no waiting.",
  },
  {
    num: "03",
    title: "Log sets (iPhone or Watch)",
    description:
      "Complete each set, adjust reps and weight on the fly. The rest timer fires automatically. Skip it or add time — your call. Log everything from your Watch without touching your phone.",
  },
  {
    num: "04",
    title: "Track your progress",
    description:
      "After saving, your volume and strength progression charts update. Personal records are detected automatically. Pull up History to review any past session in full detail.",
  },
];

const privacyPillars = [
  {
    icon: "🔒",
    title: "No backend server",
    description:
      "iGymBro makes zero network requests. Everything runs locally on your device using Apple's SwiftData framework.",
  },
  {
    icon: "👤",
    title: "No account required",
    description:
      "Zero sign-up friction. Launch the app and start training — no email, no password, no personal information ever collected.",
  },
  {
    icon: "📊",
    title: "No analytics or ads",
    description:
      "The app contains no third-party SDKs for analytics, advertising, A/B testing, or crash reporting. None.",
  },
  {
    icon: "⌚",
    title: "Watch sync is device-to-device",
    description:
      "iPhone and Apple Watch communicate via Apple's WatchConnectivity — a direct, encrypted, peer-to-peer connection. No data passes through any external server.",
  },
];

const faqs = [
  {
    q: "Is iGymBro really free?",
    a: "Yes. iGymBro is free to download with no in-app purchases and no subscription. All features — including the Apple Watch app — are included.",
  },
  {
    q: "Do I need an Apple Watch to use iGymBro?",
    a: "No. The iPhone app is fully self-contained. The Apple Watch companion enhances the experience by letting you log sets from your wrist, but it is entirely optional.",
  },
  {
    q: "What watchOS version is required?",
    a: "The Apple Watch companion requires watchOS 10 or later. The iPhone app requires iOS 17 or later.",
  },
  {
    q: "Does iGymBro sync to iCloud or the internet?",
    a: "No. iGymBro is fully offline. All workout data is stored on your device using Apple's SwiftData framework. Nothing is ever uploaded anywhere.",
  },
  {
    q: "Does HealthKit need to be enabled?",
    a: "No. HealthKit access is optional. If granted, iGymBro displays real-time heart rate and calories during workouts and writes completed sessions to Apple Health. All core features work without it.",
  },
  {
    q: "What languages does iGymBro support?",
    a: "iGymBro is fully localized in 10 languages: English, Bulgarian, Spanish, German, Italian, French, Chinese (Simplified), Japanese, Hindi, and Russian — including all exercise names and instructions.",
  },
];

export default function HomePage() {
  return (
    <>
      <Navbar />

      <main>
        {/* ── Hero ─────────────────────────────────────────────── */}
        <section className="relative min-h-screen flex flex-col items-center justify-center pt-24 pb-20 px-4 overflow-hidden">
          {/* Background glow */}
          <div
            className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse at center, rgba(0,122,255,0.12) 0%, transparent 70%)",
            }}
          />

          <div className="relative z-10 max-w-5xl mx-auto text-center">
            <AnimatedSection delay={0}>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-zinc-700 bg-zinc-900/80 text-xs text-zinc-400 font-medium mb-8 backdrop-blur-sm">
                <span
                  className="w-2 h-2 rounded-full"
                  style={{ background: "#007AFF" }}
                />
                Free · No Account · 100% Offline
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <h1 className="text-5xl sm:text-6xl md:text-7xl font-black tracking-tight text-white leading-[1.05] mb-6">
                Your gym.{" "}
                <span
                  style={{
                    background: "linear-gradient(135deg, #007AFF, #60b8ff)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  Your data.
                </span>
                <br />
                Your wrist.
              </h1>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <p className="text-lg sm:text-xl text-zinc-400 max-w-2xl mx-auto leading-relaxed mb-10">
                The strength training tracker that keeps everything on your device.
                No account. No subscription. No cloud.{" "}
                <span className="text-zinc-200">Just lifting.</span>
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
                <AppStoreBadge large />
                <span className="text-sm text-zinc-500">
                  Requires iOS 17 · watchOS 10
                </span>
              </div>
            </AnimatedSection>

            {/* Device mockups */}
            <AnimatedSection delay={0.4}>
              <div className="relative flex items-end justify-center gap-6 sm:gap-10">
                {/* Glow behind devices */}
                <div
                  className="absolute bottom-0 left-1/2 -translate-x-1/2 w-80 h-40 rounded-full blur-3xl pointer-events-none"
                  style={{ background: "rgba(0,122,255,0.2)" }}
                />

                <div className="transform translate-y-4 sm:translate-y-6">
                  <WatchMockup
                    screenLabel="Bench Press"
                    screenDescription="Set 2 / 4 · Crown → Reps"
                  />
                </div>

                <div>
                  <IPhoneMockup
                    screenLabel="Dashboard"
                    screenDescription="Weekly calendar + today's workout card"
                  />
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* ── Features Grid ─────────────────────────────────────── */}
        <section className="py-24 px-4">
          <div className="max-w-6xl mx-auto">
            <AnimatedSection className="text-center mb-16">
              <p className="section-label mb-3">Features</p>
              <h2 className="text-4xl sm:text-5xl font-bold text-white">
                Everything you need.
                <br />
                <span className="text-zinc-500">Nothing you don&apos;t.</span>
              </h2>
            </AnimatedSection>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {features.map((feature, i) => (
                <AnimatedSection key={feature.title} delay={i * 0.08}>
                  <div className="card p-6 h-full hover:border-zinc-600 transition-colors duration-200 group">
                    <div
                      className="w-11 h-11 rounded-xl flex items-center justify-center mb-4 transition-colors"
                      style={{
                        background: "rgba(0,122,255,0.12)",
                        color: "#007AFF",
                      }}
                    >
                      {feature.icon}
                    </div>
                    <h3 className="text-base font-semibold text-white mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-zinc-400 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* ── iPhone Experience ─────────────────────────────────── */}
        <section className="py-24 px-4 border-t border-zinc-800/50">
          <div className="max-w-6xl mx-auto">
            <AnimatedSection className="text-center mb-16">
              <p className="section-label mb-3">iPhone</p>
              <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
                Built for iPhone
              </h2>
              <p className="text-zinc-400 max-w-xl mx-auto">
                A clean, fast interface designed to stay out of your way while
                you&apos;re training.
              </p>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {iphoneScreens.map((screen, i) => (
                <AnimatedSection key={screen.label} delay={i * 0.1} className="flex flex-col items-center">
                  <div className="mb-6">
                    <IPhoneMockup
                      screenLabel={screen.label}
                      screenDescription={screen.description}
                    />
                  </div>
                  <h3 className="text-base font-semibold text-white mb-2 text-center">
                    {screen.label}
                  </h3>
                  <p className="text-sm text-zinc-400 text-center leading-relaxed">
                    {screen.caption}
                  </p>
                </AnimatedSection>
              ))}
            </div>

            {/* Screenshot placeholder note */}
            <AnimatedSection className="mt-12 text-center">
              <p className="text-xs text-zinc-600 italic">
                Screenshot placeholders shown above. Replace with actual simulator
                screenshots before publishing.
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* ── Apple Watch Section ───────────────────────────────── */}
        <section className="py-24 px-4 border-t border-zinc-800/50 relative overflow-hidden">
          {/* Background */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse at 80% 50%, rgba(0,122,255,0.06) 0%, transparent 60%)",
            }}
          />

          <div className="relative max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {/* Text */}
              <AnimatedSection>
                <p className="section-label mb-3">Apple Watch</p>
                <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
                  Train from your wrist
                </h2>
                <p className="text-zinc-400 leading-relaxed mb-8">
                  The Apple Watch companion syncs your program automatically and
                  lets you log every set without taking your phone out of your
                  pocket.
                </p>

                <ul className="space-y-4">
                  {[
                    "Digital Crown rotates through reps (1–99) with haptic ticks",
                    "Tap to switch Crown focus between reps and weight",
                    "Weight adjusts in 0.5 kg steps for precise dialing",
                    "Live heart rate always visible during workout",
                    "Rest timer fires automatically after each set",
                    "Completed sessions sync to iPhone when back in range",
                  ].map((point) => (
                    <li key={point} className="flex items-start gap-3">
                      <span
                        className="mt-0.5 w-5 h-5 rounded-full flex-shrink-0 flex items-center justify-center"
                        style={{ background: "rgba(0,122,255,0.15)" }}
                      >
                        <svg
                          width="10"
                          height="10"
                          viewBox="0 0 10 10"
                          fill="none"
                        >
                          <path
                            d="M2 5l2.5 2.5L8 2.5"
                            stroke="#007AFF"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                      <span className="text-sm text-zinc-300">{point}</span>
                    </li>
                  ))}
                </ul>
              </AnimatedSection>

              {/* Watch mockups */}
              <AnimatedSection delay={0.2}>
                <div className="flex items-end justify-center gap-6">
                  {watchScreens.map((ws, i) => (
                    <div
                      key={ws.label}
                      className="flex flex-col items-center gap-3"
                      style={{ transform: `translateY(${i === 1 ? "-16px" : "0px"})` }}
                    >
                      <WatchMockup
                        screenLabel={ws.label}
                        screenDescription={ws.description}
                      />
                      <span className="text-xs text-zinc-500 text-center">
                        {ws.label}
                      </span>
                    </div>
                  ))}
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* ── How It Works ──────────────────────────────────────── */}
        <section className="py-24 px-4 border-t border-zinc-800/50">
          <div className="max-w-4xl mx-auto">
            <AnimatedSection className="text-center mb-16">
              <p className="section-label mb-3">How It Works</p>
              <h2 className="text-4xl sm:text-5xl font-bold text-white">
                Up and training in minutes
              </h2>
            </AnimatedSection>

            <div className="space-y-12">
              {steps.map((step, i) => (
                <AnimatedSection key={step.num} delay={i * 0.1}>
                  <div className="flex gap-6 sm:gap-10 items-start">
                    <div className="flex-shrink-0 relative">
                      <div
                        className="w-14 h-14 rounded-2xl flex items-center justify-center font-black text-lg"
                        style={{
                          background:
                            "linear-gradient(135deg, rgba(0,122,255,0.2), rgba(10,132,255,0.1))",
                          border: "1px solid rgba(0,122,255,0.3)",
                          color: "#007AFF",
                        }}
                      >
                        {step.num}
                      </div>
                      {i < steps.length - 1 && (
                        <div
                          className="absolute left-1/2 top-14 w-px"
                          style={{
                            height: 48,
                            background:
                              "linear-gradient(to bottom, rgba(0,122,255,0.3), transparent)",
                            transform: "translateX(-50%)",
                          }}
                        />
                      )}
                    </div>
                    <div className="pt-2">
                      <h3 className="text-xl font-bold text-white mb-2">
                        {step.title}
                      </h3>
                      <p className="text-zinc-400 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* ── Privacy Section ───────────────────────────────────── */}
        <section className="py-24 px-4 border-t border-zinc-800/50">
          <div className="max-w-5xl mx-auto">
            <AnimatedSection className="text-center mb-16">
              <p className="section-label mb-3">Privacy</p>
              <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
                Your data never leaves your device
              </h2>
              <p className="text-zinc-400 max-w-2xl mx-auto">
                iGymBro was built on a simple principle: your training data
                belongs to you. No backend. No tracking. No exceptions.
              </p>
            </AnimatedSection>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
              {privacyPillars.map((pillar, i) => (
                <AnimatedSection key={pillar.title} delay={i * 0.08}>
                  <div className="card p-6 hover:border-zinc-600 transition-colors">
                    <div className="text-3xl mb-4" aria-hidden="true">
                      {pillar.icon}
                    </div>
                    <h3 className="text-base font-semibold text-white mb-2">
                      {pillar.title}
                    </h3>
                    <p className="text-sm text-zinc-400 leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                </AnimatedSection>
              ))}
            </div>

            <AnimatedSection className="text-center">
              <Link
                href="/privacy"
                className="text-sm text-zinc-400 hover:text-white transition-colors underline underline-offset-4"
              >
                Read the full Privacy Policy →
              </Link>
            </AnimatedSection>
          </div>
        </section>

        {/* ── FAQ ───────────────────────────────────────────────── */}
        <section className="py-24 px-4 border-t border-zinc-800/50">
          <div className="max-w-3xl mx-auto">
            <AnimatedSection className="text-center mb-16">
              <p className="section-label mb-3">FAQ</p>
              <h2 className="text-4xl sm:text-5xl font-bold text-white">
                Common questions
              </h2>
            </AnimatedSection>

            <div className="space-y-4">
              {faqs.map((faq, i) => (
                <AnimatedSection key={faq.q} delay={i * 0.06}>
                  <div className="card p-6">
                    <h3 className="text-base font-semibold text-white mb-2">
                      {faq.q}
                    </h3>
                    <p className="text-sm text-zinc-400 leading-relaxed">{faq.a}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* ── Download CTA ──────────────────────────────────────── */}
        <section className="py-24 px-4 border-t border-zinc-800/50">
          <AnimatedSection>
            <div
              className="max-w-4xl mx-auto rounded-3xl p-10 sm:p-16 text-center relative overflow-hidden"
              style={{
                background:
                  "linear-gradient(135deg, rgba(0,122,255,0.15), rgba(10,132,255,0.08))",
                border: "1px solid rgba(0,122,255,0.25)",
              }}
            >
              {/* Glow */}
              <div
                className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-32 rounded-full blur-3xl pointer-events-none"
                style={{ background: "rgba(0,122,255,0.2)" }}
              />

              <div className="relative">
                <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
                  Ready to lift smarter?
                </h2>
                <p className="text-zinc-300 mb-10 max-w-xl mx-auto">
                  Download iGymBro free. Build your first program in minutes.
                  No account, no subscription, no commitment.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                  <AppStoreBadge large />

                  <div className="text-left text-sm text-zinc-400 space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="text-zinc-500">✓</span> iPhone iOS 17+
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-zinc-500">✓</span> Apple Watch watchOS 10+
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-zinc-500">✓</span> Free · No subscription
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </section>
      </main>

      {/* ── Footer ────────────────────────────────────────────── */}
      <footer className="border-t border-zinc-800/50 py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-2 font-bold text-white">
              <span
                className="w-7 h-7 rounded-lg flex items-center justify-center text-white font-black text-xs"
                style={{ background: "linear-gradient(135deg, #007AFF, #0A84FF)" }}
              >
                G
              </span>
              iGymBro
            </div>

            <nav className="flex flex-wrap items-center gap-6 text-sm text-zinc-400">
              <Link href="/privacy" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <a
                href="mailto:georgi.penchev@synergygfs.com"
                className="hover:text-white transition-colors"
              >
                Support
              </a>
              <a
                href={APP_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                App Store
              </a>
            </nav>

            <p className="text-xs text-zinc-600">
              © 2026 iGymBro. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
