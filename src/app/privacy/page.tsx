import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy — iGymBro",
  description:
    "iGymBro Privacy Policy. Your training data stays on your device — no backend server, no cloud sync, no user accounts.",
};

export default function PrivacyPage() {
  return (
    <>
      {/* Minimal nav */}
      <header className="border-b border-zinc-800/50">
        <div className="max-w-4xl mx-auto px-4 h-14 flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-2 font-bold text-white hover:opacity-80 transition-opacity"
          >
            <span
              className="w-7 h-7 rounded-lg flex items-center justify-center text-white font-black text-xs"
              style={{ background: "linear-gradient(135deg, #007AFF, #0A84FF)" }}
            >
              G
            </span>
            iGymBro
          </Link>
          <Link
            href="/"
            className="text-sm text-zinc-400 hover:text-white transition-colors"
          >
            ← Back
          </Link>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-4 py-16 pb-24">
        <article className="prose prose-invert prose-zinc max-w-none">
          <div className="mb-10">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#007AFF] mb-3">
              Legal
            </p>
            <h1 className="text-4xl font-black text-white mb-2">Privacy Policy</h1>
            <p className="text-sm text-zinc-500">Last updated: November 22, 2026</p>
          </div>

          <p className="text-zinc-300 leading-relaxed mb-8">
            iGymBro (&quot;the App&quot;) is an independent app. This Privacy
            Policy explains what information the App collects, how it is used, and
            your rights regarding your data.
          </p>

          {/* Summary */}
          <section className="mb-10 p-6 rounded-2xl border border-zinc-800 bg-zinc-900">
            <h2 className="text-lg font-bold text-white mb-4">Summary</h2>
            <ul className="space-y-3">
              {[
                "All data stays on your device. iGymBro does not have a backend server, does not create user accounts, and does not transmit any personal data over the internet.",
                "No third-party tracking. The App contains no analytics SDKs, advertising networks, or crash-reporting services.",
                "HealthKit data is optional. Heart rate and calorie data are only accessed with your explicit permission and are never shared outside of Apple's frameworks.",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span
                    className="mt-1 w-4 h-4 rounded-full flex-shrink-0 flex items-center justify-center"
                    style={{ background: "rgba(0,122,255,0.2)" }}
                  >
                    <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                      <path
                        d="M1.5 4l2 2L6.5 2"
                        stroke="#007AFF"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  <span className="text-sm text-zinc-300">{item}</span>
                </li>
              ))}
            </ul>
          </section>

          <Section num="1" title="Data We Collect and Store">
            <p className="text-zinc-400 leading-relaxed mb-4">
              All data is stored locally on your device using Apple&apos;s SwiftData
              framework (on-device SQLite database). Nothing is uploaded to any
              server.
            </p>

            <h3 className="text-base font-semibold text-white mb-2">
              Workout &amp; Training Data
            </h3>
            <ul className="text-sm text-zinc-400 space-y-1.5 mb-6 list-disc list-inside">
              <li>
                Workout templates you create (exercise names, sets, reps, target
                weights, rest periods)
              </li>
              <li>
                Completed workout sessions (date, duration, exercises performed,
                actual weights and reps, session notes)
              </li>
              <li>
                Personal records (maximum weight, maximum reps, maximum volume per
                exercise)
              </li>
              <li>Weekly training schedule assignments</li>
              <li>Custom exercises you create</li>
            </ul>

            <h3 className="text-base font-semibold text-white mb-2">
              App Preferences
            </h3>
            <ul className="text-sm text-zinc-400 space-y-1.5 mb-4 list-disc list-inside">
              <li>Weight unit preference (kg or lbs)</li>
              <li>Rest timer default duration</li>
              <li>Display theme (System / Dark / Light)</li>
            </ul>

            <p className="text-sm text-zinc-300 font-medium">
              None of the above ever leaves your device.
            </p>
          </Section>

          <Section num="2" title="Health Data (HealthKit)">
            <p className="text-zinc-400 leading-relaxed mb-4">
              The App integrates with Apple HealthKit solely to enhance your workout
              experience. This requires your explicit permission, which you can grant
              or revoke at any time in{" "}
              <strong className="text-zinc-200">
                Settings → Privacy &amp; Security → Health → iGymBro
              </strong>
              .
            </p>

            <div className="overflow-x-auto mb-6">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="border-b border-zinc-700">
                    <th className="text-left py-2 pr-4 text-zinc-300 font-semibold">
                      Data Type
                    </th>
                    <th className="text-left py-2 pr-4 text-zinc-300 font-semibold">
                      Access
                    </th>
                    <th className="text-left py-2 text-zinc-300 font-semibold">
                      Purpose
                    </th>
                  </tr>
                </thead>
                <tbody className="text-zinc-400">
                  <tr className="border-b border-zinc-800">
                    <td className="py-2.5 pr-4">Heart Rate</td>
                    <td className="py-2.5 pr-4">Read</td>
                    <td className="py-2.5">
                      Display real-time heart rate during active workouts
                    </td>
                  </tr>
                  <tr className="border-b border-zinc-800">
                    <td className="py-2.5 pr-4">Active Energy Burned</td>
                    <td className="py-2.5 pr-4">Read &amp; Write</td>
                    <td className="py-2.5">
                      Show calorie burn during workouts; save workout calorie data
                      to Health
                    </td>
                  </tr>
                  <tr>
                    <td className="py-2.5 pr-4">Workouts</td>
                    <td className="py-2.5 pr-4">Write</td>
                    <td className="py-2.5">
                      Log completed strength training sessions to your Health app
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="p-4 rounded-xl border border-zinc-700 bg-zinc-900 text-sm text-zinc-400">
              <p className="font-semibold text-zinc-200 mb-2">
                HealthKit data is never:
              </p>
              <ul className="space-y-1 list-disc list-inside">
                <li>Uploaded to any server</li>
                <li>Shared with third parties</li>
                <li>Used for advertising or profiling</li>
              </ul>
            </div>

            <p className="text-sm text-zinc-400 mt-4">
              HealthKit integration is fully optional. If you decline or revoke
              HealthKit permission, all core features continue to work normally.
            </p>
          </Section>

          <Section num="3" title="Apple Watch Sync">
            <p className="text-zinc-400 leading-relaxed">
              If you use the Apple Watch companion app, workout templates and your
              weekly schedule are transferred from your iPhone to your Apple Watch
              using{" "}
              <strong className="text-zinc-200">
                Apple&apos;s WatchConnectivity framework
              </strong>
              . This is a direct, encrypted, device-to-device connection — data
              does not pass through any external server. Completed workouts recorded
              on your Apple Watch are transferred back to your iPhone through the
              same mechanism.
            </p>
          </Section>

          <Section num="4" title="Local Notifications">
            <p className="text-zinc-400 leading-relaxed">
              The App may request permission to send local notifications for
              scheduled workout reminders. These notifications are generated
              entirely on your device — no notification content is sent to any
              server. You can manage notification permissions in{" "}
              <strong className="text-zinc-200">
                Settings → Notifications → iGymBro
              </strong>
              .
            </p>
          </Section>

          <Section num="5" title="Data We Do NOT Collect">
            <ul className="space-y-3">
              {[
                "No account or registration — the App does not require you to create an account or provide any personal information.",
                "No location data — the App does not access or use your location.",
                "No camera or microphone — the App does not access your camera or microphone.",
                "No contacts or calendar — the App does not access your contacts or calendar.",
                "No network requests — the App makes no outbound network connections.",
                "No analytics or advertising — the App contains no third-party SDKs for analytics, advertising, A/B testing, or crash reporting.",
                "No behavioral tracking — the App does not track how you use it and does not share usage data with anyone.",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-0.5 text-zinc-600 flex-shrink-0">✕</span>
                  <span className="text-sm text-zinc-400">{item}</span>
                </li>
              ))}
            </ul>
          </Section>

          <Section num="6" title="Data Retention and Deletion">
            <p className="text-zinc-400 leading-relaxed mb-4">
              Your data is retained on your device for as long as you use the App or
              until you delete it.
            </p>
            <p className="text-zinc-400 leading-relaxed mb-4">
              To permanently delete all App data,{" "}
              <strong className="text-zinc-200">
                uninstall iGymBro from your device
              </strong>
              . This removes the local SwiftData database and all associated workout
              history, templates, personal records, and preferences.
            </p>
            <p className="text-zinc-400 leading-relaxed">
              To remove workout data from Apple Health, open the Health app and
              navigate to{" "}
              <strong className="text-zinc-200">Browse → Workouts</strong>, or go to{" "}
              <strong className="text-zinc-200">
                Settings → Privacy &amp; Security → Health → iGymBro
              </strong>{" "}
              and revoke access.
            </p>
          </Section>

          <Section num="7" title="Children's Privacy">
            <p className="text-zinc-400 leading-relaxed">
              iGymBro does not knowingly collect any information from children under
              the age of 13. The App collects no personal information from any user,
              so there is no information to collect from minors either.
            </p>
          </Section>

          <Section num="8" title="Changes to This Policy">
            <p className="text-zinc-400 leading-relaxed">
              If the App&apos;s data practices change materially, an updated Privacy
              Policy will be included in the next App Store release and reflected in
              the &quot;Last updated&quot; date at the top of this page.
            </p>
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
              style={{ background: "linear-gradient(135deg, #007AFF, #0A84FF)" }}
            >
              G
            </span>
            iGymBro
          </Link>
          <p className="text-xs text-zinc-600">
            © 2026 iGymBro. All rights reserved.
          </p>
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
          style={{ background: "rgba(0,122,255,0.15)", color: "#007AFF" }}
        >
          {num}
        </span>
        {title}
      </h2>
      {children}
    </section>
  );
}
