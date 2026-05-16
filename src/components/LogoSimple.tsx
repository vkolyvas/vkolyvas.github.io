export function LogoSimple() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 600 120"
      style={{
        width: "100%",
        maxWidth: "600px",
        height: "auto",
        overflow: "visible",
      }}
    >
      <defs>
        <linearGradient id="aiGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#2563EB" />
          <stop offset="100%" stopColor="#9333EA" />
        </linearGradient>
      </defs>

      <g transform="translate(10, 10)">
        <path
          d="M 40,25 L 75,50 M 40,75 L 75,50 M 40,25 L 40,75 M 75,50 L 10,50"
          stroke="url(#aiGradient)"
          strokeWidth="2"
          strokeDasharray="3,3"
          opacity="0.8"
          fill="none"
        />
        <path d="M 40,25 L 10,50 M 40,75 L 10,50" stroke="url(#aiGradient)" strokeWidth="2" fill="none" />

        <circle cx="40" cy="25" r="5" fill="#2563EB" />
        <circle cx="40" cy="75" r="5" fill="#2563EB" />
        <circle cx="10" cy="50" r="5" fill="#9333EA" />

        <circle cx="75" cy="50" r="16" fill="url(#aiGradient)" opacity="0.15" />
        <circle cx="75" cy="50" r="10" fill="url(#aiGradient)" />
        <circle cx="75" cy="50" r="4" fill="#FFFFFF" />
      </g>

      <g transform="translate(115, 0)">
        <text x="0" y="58" style={{ fontFamily: "'Inter', 'Helvetica Neue', sans-serif", fontWeight: 700, fontSize: "32px", fill: "#1E293B", letterSpacing: "-0.5px" }}>
          Vasileios Kolyvas
        </text>
        <text x="2" y="86" style={{ fontFamily: "'Inter', 'Helvetica Neue', sans-serif", fontWeight: 500, fontSize: "13px", fill: "#64748B", letterSpacing: "4px", textTransform: "uppercase" }}>
          AI Solution Architect
        </text>
      </g>
    </svg>
  );
}