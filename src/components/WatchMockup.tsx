interface WatchMockupProps {
  screenLabel?: string;
  screenDescription?: string;
  src?: string;
  alt?: string;
}

export default function WatchMockup({ screenLabel = "", screenDescription = "", src, alt = "" }: WatchMockupProps) {
  return (
    <div className="relative mx-auto" style={{ width: 130 }}>
      {/* Watch frame */}
      <div
        className="relative rounded-[2rem] border-2 border-zinc-700"
        style={{
          aspectRatio: "396 / 484",
          background: "linear-gradient(145deg, #1c1c1e, #0a0a0a)",
          boxShadow:
            "0 0 0 1px rgba(255,255,255,0.05) inset, 0 16px 32px rgba(0,0,0,0.6)",
        }}
      >
        {/* Screen */}
        <div className="absolute inset-1 rounded-[1.6rem] bg-black overflow-hidden">
          {src ? (
            <img src={src} alt={alt} className="w-full h-full object-cover" />
          ) : (
            <div className="w-full h-full flex flex-col items-center justify-center gap-2 p-3">
              {/* Heart rate line mock */}
              <div className="flex items-center gap-1 w-full">
                <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse-slow" />
                <span className="text-[8px] text-red-400 font-semibold">138</span>
              </div>

              <div
                className="w-8 h-8 rounded-xl flex items-center justify-center"
                style={{ background: "rgba(0,122,255,0.2)" }}
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#007AFF"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
              </div>

              <p className="text-[7px] font-bold text-white text-center leading-tight">
                {screenLabel}
              </p>
              <p className="text-[6px] text-zinc-400 text-center leading-tight">
                {screenDescription}
              </p>

              {/* Reps / Weight mock */}
              <div className="w-full space-y-1 mt-1">
                <div className="flex justify-between items-center px-1">
                  <span className="text-[7px] text-zinc-400">Reps</span>
                  <span className="text-[9px] font-bold text-white">10</span>
                </div>
                <div className="h-px bg-zinc-800 w-full" />
                <div className="flex justify-between items-center px-1">
                  <span className="text-[7px] text-zinc-400">kg</span>
                  <span className="text-[9px] font-bold text-white">100.0</span>
                </div>
              </div>

              {/* Done button mock */}
              <div
                className="w-full rounded-lg py-1 mt-1 flex items-center justify-center gap-1"
                style={{ background: "rgba(0,122,255,0.8)" }}
              >
                <span className="text-[7px] text-white font-semibold">Done</span>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Crown */}
      <div
        className="absolute right-0 top-1/2 -translate-y-1/2 w-1 h-8 rounded-l bg-zinc-600"
        style={{ right: -2 }}
      />
    </div>
  );
}
