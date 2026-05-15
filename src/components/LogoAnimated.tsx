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
    H = 200;
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

  // ─── neural network ──────────────────────────────────────────
  const dotsG = document.createElementNS(ns, "g");

  function mkDot(id: string, x: number, y: number, r = 4) {
    const c = document.createElementNS(ns, "circle");
    c.setAttribute("id", id);
    c.setAttribute("cx", String(x));
    c.setAttribute("cy", String(y));
    c.setAttribute("r", String(r));
    c.setAttribute("fill", "var(--foreground)");
    return c;
  }

  function mkLine(x1: number, y1: number, x2: number, y2: number) {
    const ln = document.createElementNS(ns, "line");
    ln.setAttribute("x1", String(x1));
    ln.setAttribute("y1", String(y1));
    ln.setAttribute("x2", String(x2));
    ln.setAttribute("y2", String(y2));
    ln.setAttribute("stroke", "var(--foreground)");
    ln.setAttribute("stroke-width", "1");
    return ln;
  }

  // Layers: input(3) → hidden(5) → output(3)
  const lx = [cx - 100, cx, cx + 100];
  const yIn = [30, 50, 70];
  const yHid = [15, 30, 50, 70, 85];
  const yOut = [30, 50, 70];
  const dotEls: SVGCircleElement[] = [];

  yIn.forEach((y, j) => {
    const d = mkDot(`d0-${j}`, lx[0], y);
    dotEls.push(d);
    dotsG.appendChild(d);
  });
  yHid.forEach((y, j) => {
    const d = mkDot(`d1-${j}`, lx[1], y);
    dotEls.push(d);
    dotsG.appendChild(d);
  });
  yOut.forEach((y, j) => {
    const d = mkDot(`d2-${j}`, lx[2], y);
    dotEls.push(d);
    dotsG.appendChild(d);
  });

  const connG = document.createElementNS(ns, "g");
  yIn.forEach((y0) => {
    yHid.forEach((y1) => connG.appendChild(mkLine(lx[0], y0, lx[1], y1)));
  });
  yHid.forEach((y1) => {
    yOut.forEach((y2) => connG.appendChild(mkLine(lx[1], y1, lx[2], y2)));
  });

  const morphDot = mkDot("dot-1", cx, 120, 4);
  dotsG.appendChild(morphDot);

  svg.appendChild(connG);
  svg.appendChild(dotsG);

  // ─── letters: Vasileios Kolyvas ────────────────────────────
  const lettersG = document.createElementNS(ns, "g");
  const name = "Vasileios Kolyvas";
  const letterW = 38;
  const totalW = name.length * letterW;
  const startX = cx - totalW / 2 + letterW / 2;
  const letterY = 140;

  const letterEls: SVGTextElement[] = [];
  name.split("").forEach((ch, i) => {
    if (ch === " ") return;
    const t = document.createElementNS(ns, "text");
    t.setAttribute("id", `l-${i}`);
    t.setAttribute("x", String(startX + i * letterW));
    t.setAttribute("y", String(letterY));
    t.setAttribute("font-size", "60");
    t.setAttribute("text-anchor", "middle");
    t.setAttribute("class", "ll");
    t.textContent = ch;
    letterEls.push(t);
    lettersG.appendChild(t);
  });

  // J and S that appear during animation
  const jEl = document.createElementNS(ns, "text");
  jEl.setAttribute("id", "j");
  jEl.setAttribute("x", String(startX - 24));
  jEl.setAttribute("y", String(letterY));
  jEl.setAttribute("font-size", "60");
  jEl.setAttribute("text-anchor", "middle");
  jEl.setAttribute("class", "ll");
  jEl.textContent = "J";
  jEl.style.opacity = "0";
  lettersG.appendChild(jEl);

  const sEl = document.createElementNS(ns, "text");
  sEl.setAttribute("id", "s");
  sEl.setAttribute("x", String(startX + name.length * letterW + 20));
  sEl.setAttribute("y", String(letterY));
  sEl.setAttribute("font-size", "60");
  sEl.setAttribute("text-anchor", "middle");
  sEl.setAttribute("class", "ll");
  sEl.textContent = "S";
  sEl.style.opacity = "0";
  lettersG.appendChild(sEl);

  svg.appendChild(lettersG);

  // AI pop text
  const fourEl = document.createElementNS(ns, "text");
  fourEl.setAttribute("id", "four");
  fourEl.setAttribute("x", String(cx));
  fourEl.setAttribute("y", "105");
  fourEl.setAttribute("font-size", "60");
  fourEl.setAttribute("text-anchor", "middle");
  fourEl.setAttribute("class", "ll");
  fourEl.setAttribute("opacity", "0");
  fourEl.textContent = "AI";
  svg.appendChild(fourEl);

  $container.appendChild(svg);

  // ─── animate ───────────────────────────────────────────────
  const tl = anime.timeline({ easing: "linear" });

  tl.add(dotEls, { opacity: 0 }, 0)
    .add(connG.children, { opacity: 0 }, 0)
    .add(morphDot, { opacity: [0, 1], scaleY: [4, 1], duration: 0 }, 0)

    // FALL
    .add(morphDot, {
      translateY: { to: [-320, 20], easing: "inQuart", duration: 320 },
      scaleY: { to: [3, 2], easing: "outElastic(1, 1.4)", duration: 300, delay: 320 },
      scaleX: { to: [0.8, 1], easing: "outElastic(1, 1.4)", duration: 650, delay: 320 },
      duration: 500,
    })
    .add(connG.children, { opacity: [0.35, 0.35], duration: 320 }, 0)

    // POP letters
    .add(letterEls, {
      translateY: [
        { to: [40, -90], duration: 190 },
        { to: 5, duration: 120, delay: 20 },
        { to: 0, duration: 120 },
      ],
      scaleX: [
        { to: [0.25, 0.85], duration: 190 },
        { to: 1.08, duration: 120, delay: 85 },
        { to: 1, duration: 260, delay: 25 },
      ],
      scaleY: [
        { to: [0.4, 1.5], duration: 120 },
        { to: 0.6, duration: 120, delay: 180 },
        { to: 1.2, duration: 180, delay: 25 },
        { to: 1, duration: 190, delay: 15 },
      ],
      duration: 400,
    })
    .add(morphDot, {
      translateY: [
        { to: [30, -190], duration: 240 },
        { to: 40, duration: 180, delay: 120 },
        { to: -60, duration: 250 },
        { to: 6, duration: 170, delay: 20 },
        { to: 0, duration: 120 },
      ],
      scaleX: { to: [1.1, 1], duration: 260 },
      scaleY: { to: [4, 1], duration: 190 },
      rotate: [{ to: "+=.75turn", duration: 480 }, { to: "+=.25turn", duration: 420 }],
      duration: 900,
    }, "-=900")
    .add(svg, { scale: [1.35, 1], translateY: [-25, 0], duration: 1000, easing: "outExpo" }, "-=900")
    .add(fourEl, {
      scale: [1.8, 1],
      opacity: { to: [0, 1], duration: 350 },
      duration: 1400,
    })

    // SWEECH
    .add(morphDot, { duration: 900, easing: "outElastic(1.1, 0.9)" }, "+=200")

    // OUTRO
    .add([fourEl, letterEls], { translateY: 90, duration: 300, easing: "outQuint" }, "+=1000")
    .add([morphDot, fourEl], { opacity: 0, duration: 620, easing: "outQuint" }, "-=300");

  anime.set(letterEls, { translateY: 0, scaleX: 1, scaleY: 1 });
  anime.set(connG.children, { opacity: 0.35 });
  anime.set(morphDot, { translateY: 0, scaleY: 1, scaleX: 1 });
  anime.set(fourEl, { opacity: 0 });
}