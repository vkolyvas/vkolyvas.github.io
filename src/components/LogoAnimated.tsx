"use client";

import { useEffect, useRef } from "react";

export function LogoAnimated() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    let cancelled = false;
    const $container = containerRef.current;

    // Load animejs from CDN dynamically
    const script = document.createElement("script");
    script.src = "https://esm.sh/animejs@3.2.2";
    script.type = "module";
    script.onload = () => {
      if (cancelled || !$container) return;
      runAnimation($container);
    };
    document.head.appendChild(script);

    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        maxWidth: "700px",
        margin: "0 auto",
      }}
    />
  );
}

function runAnimation($container: HTMLDivElement) {
  // @ts-ignore
  const anime = (window as any).anime;
  if (!anime) return;

  $container.innerHTML = "";

  const W = 700,
    H = 280;
  const cx = W / 2;
  const ns = "http://www.w3.org/2000/svg";

  const svg = document.createElementNS(ns, "svg");
  svg.setAttribute("xmlns", ns);
  svg.setAttribute("viewBox", `0 0 ${W} ${H}`);
  svg.setAttribute("id", "logo");
  svg.style.width = "100%";
  svg.style.maxWidth = "700px";
  svg.style.height = "auto";
  svg.style.overflow = "visible";

  // fonts & styles
  const defs = document.createElementNS(ns, "defs");
  defs.innerHTML = `
    <style>
      @import url('https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&amp;display=swap');
      .ll { font-family: 'Space Mono', monospace; fill: var(--foreground); }
    </style>`;
  svg.appendChild(defs);

  // ─── brain icon ──────────────────────────────────────────
  const brainG = document.createElementNS(ns, "g");
  brainG.setAttribute("id", "brain");

  // Brain outline paths
  const brainPath = document.createElementNS(ns, "path");
  brainPath.setAttribute("d", "M350 20 C320 10, 280 30, 270 60 C260 90, 280 120, 260 140 C240 160, 220 140, 200 150 C180 160, 170 190, 190 210 C200 220, 220 230, 230 220 C240 210, 230 180, 250 170 C260 165, 280 180, 290 200 C300 220, 280 250, 300 260 C320 270, 350 260, 370 250 C390 240, 420 250, 430 230 C440 210, 420 180, 430 160 C440 140, 470 130, 460 110 C450 90, 420 80, 410 60 C400 40, 380 30, 350 20 Z");
  brainPath.setAttribute("fill", "none");
  brainPath.setAttribute("stroke", "var(--foreground)");
  brainPath.setAttribute("stroke-width", "2");
  brainPath.setAttribute("opacity", "0.3");
  brainG.appendChild(brainPath);

  // Brain folds / internal curves
  const folds = [
    "M280 50 Q320 80, 300 120",
    "M380 50 Q360 90, 390 130",
    "M300 130 Q340 150, 380 130",
    "M260 160 Q290 180, 320 170",
    "M360 180 Q390 200, 410 180",
    "M280 200 Q310 230, 350 220",
  ];
  folds.forEach(d => {
    const path = document.createElementNS(ns, "path");
    path.setAttribute("d", d);
    path.setAttribute("fill", "none");
    path.setAttribute("stroke", "var(--foreground)");
    path.setAttribute("stroke-width", "1.5");
    path.setAttribute("opacity", "0.25");
    brainG.appendChild(path);
  });

  // Neural nodes inside brain
  const brainDots = [
    { id: "bd1", cx: 290, cy: 70, r: 5 },
    { id: "bd2", cx: 370, cy: 60, r: 4 },
    { id: "bd3", cx: 340, cy: 100, r: 6 },
    { id: "bd4", cx: 280, cy: 110, r: 4 },
    { id: "bd5", cx: 400, cy: 100, r: 5 },
    { id: "bd6", cx: 310, cy: 150, r: 5 },
    { id: "bd7", cx: 380, cy: 140, r: 4 },
    { id: "bd8", cx: 350, cy: 180, r: 6 },
    { id: "bd9", cx: 290, cy: 180, r: 4 },
    { id: "bd10", cx: 410, cy: 170, r: 5 },
    { id: "bd11", cx: 330, cy: 210, r: 5 },
    { id: "bd12", cx: 390, cy: 200, r: 4 },
  ];
  const brainDotEls: SVGCircleElement[] = [];
  brainDots.forEach(d => {
    const c = document.createElementNS(ns, "circle");
    c.setAttribute("id", d.id);
    c.setAttribute("cx", String(d.cx));
    c.setAttribute("cy", String(d.cy));
    c.setAttribute("r", String(d.r));
    c.setAttribute("fill", "var(--foreground)");
    brainDotEls.push(c);
    brainG.appendChild(c);
  });

  // Connections between brain dots
  const brainConns = [
    [0, 1], [0, 3], [1, 4], [0, 2], [1, 2], [2, 5], [2, 6], [3, 5], [4, 6], [5, 7], [6, 7], [5, 8], [7, 9], [6, 10], [7, 11], [8, 10], [9, 11],
  ];
  const brainConnG = document.createElementNS(ns, "g");
  brainConns.forEach(([a, b]) => {
    const ln = document.createElementNS(ns, "line");
    ln.setAttribute("x1", String(brainDots[a].cx));
    ln.setAttribute("y1", String(brainDots[a].cy));
    ln.setAttribute("x2", String(brainDots[b].cx));
    ln.setAttribute("y2", String(brainDots[b].cy));
    ln.setAttribute("stroke", "var(--foreground)");
    ln.setAttribute("stroke-width", "0.8");
    ln.setAttribute("opacity", "0.2");
    brainConnG.appendChild(ln);
  });
  brainG.appendChild(brainConnG);

  svg.appendChild(brainG);

  // ─── name: Vasileios Kolyvas ────────────────────────────
  const nameG = document.createElementNS(ns, "g");
  const name = "Vasileios Kolyvas";
  const letterW = 36;
  const totalW = name.length * letterW;
  const startX = cx - totalW / 2 + letterW / 2;
  const nameY = 105;

  const nameEls: SVGTextElement[] = [];
  name.split("").forEach((ch, i) => {
    if (ch === " ") return;
    const t = document.createElementNS(ns, "text");
    t.setAttribute("id", `l-${i}`);
    t.setAttribute("x", String(startX + i * letterW));
    t.setAttribute("y", String(nameY));
    t.setAttribute("font-size", "46");
    t.setAttribute("text-anchor", "middle");
    t.setAttribute("class", "ll");
    t.textContent = ch;
    nameEls.push(t);
    nameG.appendChild(t);
  });

  // AI text next to name
  const aiEl = document.createElementNS(ns, "text");
  aiEl.setAttribute("id", "ai");
  aiEl.setAttribute("x", String(startX + name.length * letterW + 30));
  aiEl.setAttribute("y", String(nameY));
  aiEl.setAttribute("font-size", "46");
  aiEl.setAttribute("text-anchor", "middle");
  aiEl.setAttribute("class", "ll");
  aiEl.setAttribute("opacity", "0");
  aiEl.textContent = "AI";
  nameG.appendChild(aiEl);

  svg.appendChild(nameG);

  // ─── title: Solution Architect ───────────────────────────
  const titleG = document.createElementNS(ns, "g");
  const title = "Solution Architect";
  const titleLetterW = 22;
  const titleTotalW = title.length * titleLetterW;
  const titleStartX = cx - titleTotalW / 2 + titleLetterW / 2;
  const titleY = 135;

  const titleEls: SVGTextElement[] = [];
  title.split("").forEach((ch, i) => {
    if (ch === " ") return;
    const t = document.createElementNS(ns, "text");
    t.setAttribute("id", `t-${i}`);
    t.setAttribute("x", String(titleStartX + i * titleLetterW));
    t.setAttribute("y", String(titleY));
    t.setAttribute("font-size", "24");
    t.setAttribute("text-anchor", "middle");
    t.setAttribute("class", "ll");
    t.setAttribute("opacity", "0");
    t.textContent = ch;
    titleEls.push(t);
    titleG.appendChild(t);
  });

  svg.appendChild(titleG);

  $container.appendChild(svg);

  // ─── animate ───────────────────────────────────────────────
  anime.set(brainDotEls, { opacity: 0 });
  anime.set(brainConnG.children, { opacity: 0 });
  anime.set(brainPath, { opacity: 0 });
  anime.set(folds.map((_, i) => brainG.querySelectorAll('path')[i + 1]), { opacity: 0 });
  anime.set(nameEls, { opacity: 0, translateY: 20 });
  anime.set(aiEl, { opacity: 0, translateY: 20 });
  anime.set(titleEls, { opacity: 0, translateY: 20 });

  const tl = anime.timeline({ easing: "linear" });

  // Brain fade in with pulse
  tl.add(brainPath, { opacity: [0, 0.4], duration: 600 }, 0)
    .add(folds.map((_, i) => brainG.querySelectorAll('path')[i + 1]), { opacity: [0, 0.3], duration: 400 }, 0)
    .add(brainConnG.children, { opacity: [0, 0.25], duration: 500 }, 100)
    .add(brainDotEls, {
      opacity: [0, 1],
      scale: [0, 1],
      duration: 400,
      delay: anime.stagger(60),
    }, 200)

  // Name letters pop in
  .add(nameEls, {
      opacity: [0, 1],
      translateY: [20, 0],
      scaleX: [0.8, 1],
      scaleY: [0.8, 1],
      duration: 350,
      delay: anime.stagger(40),
    }, 800)

  // AI appears
  .add(aiEl, {
      opacity: [0, 1],
      translateY: [20, 0],
      duration: 400,
    }, 1400)

  // Title fades in
  .add(titleEls, {
      opacity: [0, 0.7],
      translateY: [10, 0],
      duration: 350,
      delay: anime.stagger(30),
    }, 1600)

  // Brain nodes pulse animation
  .add(brainDotEls, {
      scale: [1, 1.3, 1],
      duration: 600,
    }, 2000)

  // Subtle floating animation for brain
  .add(brainG, {
      translateY: [-5, 5, -5],
      duration: 3000,
      easing: "easeInOutSine",
    }, 2200)

  // Fade out for outro
  .add([brainG, nameEls, aiEl, titleEls], {
      opacity: 0,
      translateY: -30,
      duration: 600,
      easing: "outQuint",
    }, 4000);
}