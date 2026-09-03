import { useEffect, useRef } from "react";

/**
 * Starfall — a soft, slow falling-star field rendered on a full-screen canvas.
 * Kept intentionally faint and gentle so it soothes rather than distracts.
 */
export function Starfall({
  starCount = 70,
  // Soft slate-blue that reads gently on both light and dark themes.
  lightColor = "120, 130, 160",
  darkColor = "255, 255, 255",
  maxOpacity = 0.5,
  className = "",
}) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    const isDark = () => document.documentElement.classList.contains("dark");
    let color = isDark() ? darkColor : lightColor;
    const themeObserver = new MutationObserver(() => {
      color = isDark() ? darkColor : lightColor;
    });
    themeObserver.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    let width = 0;
    let height = 0;
    let dpr = Math.min(window.devicePixelRatio || 1, 2);
    let stars = [];
    let rafId;

    const rand = (min, max) => Math.random() * (max - min) + min;

    const makeStar = (fromTop = false) => ({
      x: Math.random() * width,
      // start above the viewport so they fall in from the top, or scatter on init
      y: fromTop ? rand(-height, 0) : Math.random() * height,
      radius: rand(0.4, 1.6),
      speed: rand(6, 22), // px per second — slow drift
      drift: rand(-6, 6), // gentle horizontal sway
      baseOpacity: rand(0.15, maxOpacity),
      twinkleSpeed: rand(0.4, 1.4),
      phase: Math.random() * Math.PI * 2,
    });

    const resize = () => {
      width = canvas.clientWidth;
      height = canvas.clientHeight;
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      stars = Array.from({ length: starCount }, () => makeStar(false));
    };

    resize();

    let last = performance.now();
    const draw = (now) => {
      const dt = Math.min((now - last) / 1000, 0.05);
      last = now;

      ctx.clearRect(0, 0, width, height);

      for (const s of stars) {
        s.y += s.speed * dt;
        s.x += s.drift * dt;
        s.phase += s.twinkleSpeed * dt;

        // recycle stars once they fall past the bottom, back to the top
        if (s.y - s.radius > height) {
          Object.assign(s, makeStar(true));
          s.y = -s.radius;
        }
        if (s.x < -5) s.x = width + 5;
        else if (s.x > width + 5) s.x = -5;

        const twinkle = 0.6 + 0.4 * Math.sin(s.phase);
        const opacity = s.baseOpacity * twinkle;

        ctx.beginPath();
        ctx.arc(s.x, s.y, s.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${color}, ${opacity})`;
        ctx.shadowBlur = 6;
        ctx.shadowColor = `rgba(${color}, ${opacity})`;
        ctx.fill();
      }
      ctx.shadowBlur = 0;

      rafId = requestAnimationFrame(draw);
    };

    if (prefersReduced) {
      // render a single static, gentle frame
      ctx.clearRect(0, 0, width, height);
      for (const s of stars) {
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${color}, ${s.baseOpacity})`;
        ctx.fill();
      }
    } else {
      rafId = requestAnimationFrame(draw);
    }

    window.addEventListener("resize", resize);
    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("resize", resize);
      themeObserver.disconnect();
    };
  }, [starCount, lightColor, darkColor, maxOpacity]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className={className}
      style={{ width: "100%", height: "100%", display: "block" }}
    />
  );
}
