/**
 * Visual Direction: Living Systems Canvas — a calm interactive scientific field built from
 * moving signal nodes, curved pathways, and role-responsive Chlorophyll Signal highlights.
 */
import { useEffect, useRef } from "react";

type RoleKey = "analytics" | "quality" | "research" | "laboratory";

const roleColors: Record<RoleKey, string> = {
  analytics: "#9edb75",
  quality: "#75cfd7",
  research: "#e49879",
  laboratory: "#c2a6ff",
};

export function LivingSystemsCanvas({ activeRole }: { activeRole: RoleKey }) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const context = canvas.getContext("2d");
    if (!context) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let frame = 0;
    let animationId = 0;
    let width = 0;
    let height = 0;
    const nodes = Array.from({ length: 25 }, (_, index) => ({
      x: (Math.sin(index * 109) * 0.5 + 0.5) * 1.12,
      y: (Math.cos(index * 71) * 0.5 + 0.5) * 1.08,
      size: index % 7 === 0 ? 5.5 : index % 3 === 0 ? 3.5 : 2,
      speed: 0.22 + (index % 5) * 0.06,
      phase: index * 0.78,
    }));

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = Math.max(1, rect.width);
      height = Math.max(1, rect.height);
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      context.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const draw = () => {
      const accent = roleColors[activeRole];
      context.clearRect(0, 0, width, height);

      const glow = context.createRadialGradient(width * 0.66, height * 0.38, 0, width * 0.66, height * 0.38, Math.max(width, height) * 0.55);
      glow.addColorStop(0, `${accent}2b`);
      glow.addColorStop(0.48, `${accent}0b`);
      glow.addColorStop(1, "#07151e00");
      context.fillStyle = glow;
      context.fillRect(0, 0, width, height);

      context.lineWidth = 1;
      for (let path = 0; path < 5; path += 1) {
        context.beginPath();
        for (let step = 0; step <= 130; step += 1) {
          const x = (step / 130) * width;
          const y = height * (0.18 + path * 0.15) + Math.sin(step * 0.075 + path * 1.8 + frame * 0.008) * (18 + path * 5);
          if (step === 0) context.moveTo(x, y);
          else context.lineTo(x, y);
        }
        context.strokeStyle = path === 2 ? `${accent}6f` : "rgba(222, 244, 233, 0.14)";
        context.stroke();
      }

      nodes.forEach((node, index) => {
        const x = ((node.x + Math.sin(frame * 0.007 * node.speed + node.phase) * 0.032) % 1.12) * width - width * 0.06;
        const y = ((node.y + Math.cos(frame * 0.006 * node.speed + node.phase) * 0.032) % 1.08) * height - height * 0.04;
        const isSignal = index % 7 === 0;
        context.beginPath();
        context.arc(x, y, node.size + (isSignal ? Math.sin(frame * 0.04 + index) * 1.2 : 0), 0, Math.PI * 2);
        context.fillStyle = isSignal ? accent : "rgba(226, 246, 235, 0.65)";
        context.fill();
        if (isSignal) {
          context.beginPath();
          context.arc(x, y, node.size + 7 + Math.sin(frame * 0.03 + index) * 1.5, 0, Math.PI * 2);
          context.strokeStyle = `${accent}5c`;
          context.stroke();
        }
      });

      const packetX = ((frame * 0.55) % (width + 80)) - 40;
      const packetY = height * 0.49 + Math.sin(frame * 0.013) * 30;
      context.beginPath();
      context.arc(packetX, packetY, 6, 0, Math.PI * 2);
      context.fillStyle = accent;
      context.fill();
      context.beginPath();
      context.arc(packetX, packetY, 14, 0, Math.PI * 2);
      context.strokeStyle = `${accent}66`;
      context.stroke();

      if (!reducedMotion) {
        frame += 1;
        animationId = window.requestAnimationFrame(draw);
      }
    };

    resize();
    draw();
    const observer = new ResizeObserver(resize);
    observer.observe(canvas);
    return () => {
      observer.disconnect();
      window.cancelAnimationFrame(animationId);
    };
  }, [activeRole]);

  return <canvas ref={canvasRef} className="living-systems-canvas" aria-hidden="true" />;
}
