"use client";

import styles from "./Logo.module.css";

export function Logo() {
  return (
    <div className={styles.logoWrap}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 420 80"
        className={styles.svg}
        aria-label="vkolyvas neural network logo"
      >
        <defs>
          <style>{`
            .nn { stroke: var(--foreground); stroke-width: 1.2; fill: none; opacity: 0.45; animation: line-pulse 2.4s ease-in-out infinite alternate; }
            .nn-fill { fill: var(--foreground); animation: node-pulse 2.4s ease-in-out infinite alternate; }
            @keyframes line-pulse { from { opacity: 0.2; } to { opacity: 0.55; } }
            @keyframes node-pulse { from { r: 3; opacity: 0.65; } to { r: 4.5; opacity: 1; } }
            .n0 { animation-delay: 0s; }   .n1 { animation-delay: 0.15s; } .n2 { animation-delay: 0.3s; }
            .n3 { animation-delay: 0.45s; } .n4 { animation-delay: 0.6s; }  .n5 { animation-delay: 0.75s; }
            .n6 { animation-delay: 0.9s; }  .n7 { animation-delay: 1.05s; } .n8 { animation-delay: 1.2s; }
            .t0 { fill: var(--foreground); font-size: 23px; font-weight: 700; font-family: 'Courier New', monospace; letter-spacing: 0.06em; }
            .t1 { fill: var(--muted); font-size: 9px; font-family: 'Courier New', monospace; letter-spacing: 0.25em; }
          `}</style>
        </defs>

        {/* Neural network — 9 nodes, 11 connections */}
        <g>
          <path className="nn" d="M55,20 L85,35 L115,25 L145,45 L175,45" />
          <path className="nn" d="M30,45 L55,20" />
          <path className="nn" d="M55,20 L85,35" />
          <path className="nn" d="M30,45 L55,70" />
          <path className="nn" d="M55,70 L85,55" />
          <path className="nn" d="M85,35 L85,55" />
          <path className="nn" d="M85,35 L115,25" />
          <path className="nn" d="M85,35 L115,65" />
          <path className="nn" d="M85,55 L115,65" />
          <path className="nn" d="M115,25 L145,45" />
          <path className="nn" d="M115,65 L145,45" />
        </g>

        <circle className="nn-fill n0" cx="55" cy="20" r="4" />
        <circle className="nn-fill n1" cx="85" cy="35" r="4" />
        <circle className="nn-fill n2" cx="30" cy="45" r="4" />
        <circle className="nn-fill n3" cx="55" cy="70" r="4" />
        <circle className="nn-fill n4" cx="85" cy="55" r="4" />
        <circle className="nn-fill n5" cx="115" cy="25" r="4" />
        <circle className="nn-fill n6" cx="115" cy="65" r="4" />
        <circle className="nn-fill n7" cx="145" cy="45" r="4" />
        <circle className="nn-fill n8" cx="175" cy="45" r="4" />

        <text className="t0" x="200" y="43">vkolyvas</text>
        <text className="t1" x="202" y="58">AI SOLUTION ARCHITECT</text>
      </svg>
    </div>
  );
}