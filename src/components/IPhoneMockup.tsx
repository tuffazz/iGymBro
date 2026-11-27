interface IPhoneMockupProps {
  screenLabel?: string;
  screenDescription?: string;
  src?: string;
  alt?: string;
  accentColor?: string;
}

export default function IPhoneMockup({
  screenLabel = "",
  screenDescription = "",
  src,
  alt = "",
  accentColor = "#007AFF",
}: IPhoneMockupProps) {
  return (
    <div className="relative mx-auto" style={{ width: 220 }}>
      {/* Phone frame */}
      <div
        className="relative rounded-[2.8rem] border-2 border-zinc-700 overflow-hidden"
        style={{
          aspectRatio: "9 / 19.5",
          background: "linear-gradient(145deg, #1c1c1e, #0a0a0a)",
          boxShadow:
            "0 0 0 1px rgba(255,255,255,0.05) inset, 0 24px 48px rgba(0,0,0,0.6)",
        }}
      >
        {src ? (
          <img
            src={src}
            alt={alt}
            className="absolute inset-0 w-full h-full object-cover"
          />
        ) : (
          <>
            {/* Dynamic Island */}
            <div
              className="absolute top-3 left-1/2 -translate-x-1/2 rounded-full bg-black z-10"
              style={{ width: 72, height: 20 }}
            />

            {/* Screen content */}
            <div className="absolute inset-0 flex flex-col items-center justify-center p-6 pt-14 pb-10">
              {/* Status bar placeholder */}
              <div className="absolute top-8 left-0 right-0 flex items-center justify-between px-6 opacity-50">
                <span className="text-[8px] text-zinc-300 font-semibold">9:41</span>
                <div className="flex items-center gap-1">
                  <div className="w-3 h-1.5 rounded-sm border border-zinc-300" />
                </div>
              </div>

              {/* App chrome mock */}
              <div className="w-full flex flex-col items-center gap-3 mt-2">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center"
                  style={{ background: `${accentColor}20` }}
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke={accentColor}
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                </div>

                <p
                  className="text-[9px] font-semibold text-center leading-tight"
                  style={{ color: accentColor }}
                >
                  {screenLabel}
                </p>
                <p className="text-[7px] text-zinc-500 text-center leading-tight">
                  {screenDescription}
                </p>

                {/* Mock UI elements */}
                <div className="w-full space-y-1.5 mt-2">
                  <div className="h-1 bg-zinc-700 rounded-full w-full" />
                  <div className="h-1 bg-zinc-700 rounded-full w-4/5" />
                  <div className="h-1 bg-zinc-700 rounded-full w-3/5" />
                </div>

                <div
                  className="w-full rounded-lg p-2 mt-1"
                  style={{ background: `${accentColor}10`, border: `1px solid ${accentColor}30` }}
                >
                  <div className="h-1 bg-zinc-600 rounded-full w-3/4 mb-1" />
                  <div className="h-1 bg-zinc-600 rounded-full w-1/2" />
                </div>
              </div>

              {/* Bottom home indicator */}
              <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-20 h-1 bg-zinc-600 rounded-full" />
            </div>
          </>
        )}
      </div>

      {/* Side button */}
      <div
        className="absolute right-0 top-28 w-0.5 h-12 rounded-l-sm bg-zinc-600"
        style={{ right: -1 }}
      />
      <div
        className="absolute left-0 top-20 w-0.5 h-8 rounded-r-sm bg-zinc-600"
        style={{ left: -1 }}
      />
      <div
        className="absolute left-0 top-32 w-0.5 h-8 rounded-r-sm bg-zinc-600"
        style={{ left: -1 }}
      />
    </div>
  );
}
