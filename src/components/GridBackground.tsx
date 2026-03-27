const GridBackground = () => {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      {/* Animated hex grid */}
      <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          {/* Hexagon tile */}
          <pattern id="hex" x="0" y="0" width="56" height="97" patternUnits="userSpaceOnUse">
            <polygon
              points="28,2 54,16 54,48 28,62 2,48 2,16"
              fill="none"
              stroke="hsl(180 100% 50%)"
              strokeWidth="0.4"
              opacity="0.18"
            />
            <polygon
              points="28,51 54,65 54,97 28,111 2,97 2,65"
              fill="none"
              stroke="hsl(180 100% 50%)"
              strokeWidth="0.4"
              opacity="0.18"
            />
          </pattern>

          {/* Radial pulse mask */}
          <radialGradient id="pulse1" cx="30%" cy="40%" r="40%">
            <stop offset="0%" stopColor="hsl(180 100% 50%)" stopOpacity="0.12" />
            <stop offset="100%" stopColor="hsl(180 100% 50%)" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="pulse2" cx="70%" cy="60%" r="35%">
            <stop offset="0%" stopColor="hsl(275 100% 65%)" stopOpacity="0.1" />
            <stop offset="100%" stopColor="hsl(275 100% 65%)" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="pulse3" cx="55%" cy="20%" r="30%">
            <stop offset="0%" stopColor="hsl(328 100% 54%)" stopOpacity="0.08" />
            <stop offset="100%" stopColor="hsl(328 100% 54%)" stopOpacity="0" />
          </radialGradient>

          {/* Scanline */}
          <linearGradient id="scanline" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="hsl(180 100% 50%)" stopOpacity="0" />
            <stop offset="48%" stopColor="hsl(180 100% 50%)" stopOpacity="0" />
            <stop offset="50%" stopColor="hsl(180 100% 50%)" stopOpacity="0.06" />
            <stop offset="52%" stopColor="hsl(180 100% 50%)" stopOpacity="0" />
            <stop offset="100%" stopColor="hsl(180 100% 50%)" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* Hex grid base */}
        <rect width="100%" height="100%" fill="url(#hex)" />

        {/* Glowing orbs */}
        <rect width="100%" height="100%" fill="url(#pulse1)" className="animate-pulse-slow" />
        <rect width="100%" height="100%" fill="url(#pulse2)" className="animate-pulse-mid" />
        <rect width="100%" height="100%" fill="url(#pulse3)" className="animate-pulse-fast" />

        {/* Scanline sweep */}
        <rect width="100%" height="100%" fill="url(#scanline)" className="animate-scanline" />
      </svg>
    </div>
  );
};

export default GridBackground;
