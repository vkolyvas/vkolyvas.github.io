export function LogoSimple() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 700 200"
      style={{
        width: "100%",
        maxWidth: "700px",
        height: "auto",
        overflow: "visible",
      }}
    >
      {/* Brain icon */}
      <g id="brain">
        {/* Brain outline */}
        <path
          d="M350 20 C320 10, 280 30, 270 60 C260 90, 280 120, 260 140 C240 160, 220 140, 200 150 C180 160, 170 190, 190 210 C200 220, 220 230, 230 220 C240 210, 230 180, 250 170 C260 165, 280 180, 290 200 C300 220, 280 250, 300 260 C320 270, 350 260, 370 250 C390 240, 420 250, 430 230 C440 210, 420 180, 430 160 C440 140, 470 130, 460 110 C450 90, 420 80, 410 60 C400 40, 380 30, 350 20 Z"
          fill="none"
          stroke="var(--foreground)"
          strokeWidth="2"
          opacity="0.3"
        />
        {/* Brain folds */}
        <path d="M280 50 Q320 80, 300 120" fill="none" stroke="var(--foreground)" strokeWidth="1.5" opacity="0.25" />
        <path d="M380 50 Q360 90, 390 130" fill="none" stroke="var(--foreground)" strokeWidth="1.5" opacity="0.25" />
        <path d="M300 130 Q340 150, 380 130" fill="none" stroke="var(--foreground)" strokeWidth="1.5" opacity="0.25" />
        <path d="M260 160 Q290 180, 320 170" fill="none" stroke="var(--foreground)" strokeWidth="1.5" opacity="0.25" />
        <path d="M360 180 Q390 200, 410 180" fill="none" stroke="var(--foreground)" strokeWidth="1.5" opacity="0.25" />
        <path d="M280 200 Q310 230, 350 220" fill="none" stroke="var(--foreground)" strokeWidth="1.5" opacity="0.25" />
        {/* Neural nodes */}
        <circle cx="290" cy="70" r="5" fill="var(--foreground)" />
        <circle cx="370" cy="60" r="4" fill="var(--foreground)" />
        <circle cx="340" cy="100" r="6" fill="var(--foreground)" />
        <circle cx="280" cy="110" r="4" fill="var(--foreground)" />
        <circle cx="400" cy="100" r="5" fill="var(--foreground)" />
        <circle cx="310" cy="150" r="5" fill="var(--foreground)" />
        <circle cx="380" cy="140" r="4" fill="var(--foreground)" />
        <circle cx="350" cy="180" r="6" fill="var(--foreground)" />
        <circle cx="290" cy="180" r="4" fill="var(--foreground)" />
        <circle cx="410" cy="170" r="5" fill="var(--foreground)" />
        <circle cx="330" cy="210" r="5" fill="var(--foreground)" />
        <circle cx="390" cy="200" r="4" fill="var(--foreground)" />
        {/* Neural connections */}
        <g stroke="var(--foreground)" strokeWidth="0.8" opacity="0.2">
          <line x1="290" y1="70" x2="370" y2="60" />
          <line x1="290" y1="70" x2="280" y2="110" />
          <line x1="370" y1="60" x2="400" y2="100" />
          <line x1="290" y1="70" x2="340" y2="100" />
          <line x1="370" y1="60" x2="340" y2="100" />
          <line x1="340" y1="100" x2="310" y2="150" />
          <line x1="340" y1="100" x2="380" y2="140" />
          <line x1="280" y1="110" x2="310" y2="150" />
          <line x1="400" y1="100" x2="380" y2="140" />
          <line x1="310" y1="150" x2="350" y2="180" />
          <line x1="380" y1="140" x2="350" y2="180" />
          <line x1="310" y1="150" x2="290" y2="180" />
          <line x1="350" y1="180" x2="410" y2="170" />
          <line x1="380" y1="140" x2="330" y2="210" />
          <line x1="350" y1="180" x2="390" y2="200" />
          <line x1="290" y1="180" x2="330" y2="210" />
          <line x1="410" y1="170" x2="390" y2="200" />
        </g>
      </g>

      {/* Name: Vasileios Kolyvas */}
      <text
        x="350"
        y="105"
        fontSize="46"
        textAnchor="middle"
        className="ll"
        style={{ fontFamily: "'Space Mono', monospace" }}
      >
        Vasileios Kolyvas AI
      </text>

      {/* Title: Solution Architect */}
      <text
        x="350"
        y="135"
        fontSize="24"
        textAnchor="middle"
        className="ll"
        opacity="0.7"
        style={{ fontFamily: "'Space Mono', monospace" }}
      >
        Solution Architect
      </text>
    </svg>
  );
}