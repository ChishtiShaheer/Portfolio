"use client";
import { useEffect, useState } from "react";

const E = 30, W = 640, H = 260, L = 44, R = 16, T = 16, B = 32, MAX = 1.2;
const x = (e: number) => L + (e / E) * (W - L - R);
const y = (v: number) => T + (1 - v / MAX) * (H - T - B);
const train = (e: number) => 0.12 + 0.95 * Math.exp(-e / 5.5) + 0.015 * Math.sin(e * 2.1);
const val = (e: number) =>
  0.3 + 0.85 * Math.exp(-e / 6) + 0.014 * Math.sin(e * 1.7 + 1) + (e > 21 ? 0.007 * (e - 21) : 0);
const eps = Array.from({ length: E + 1 }, (_, i) => i);
const path = (f: (e: number) => number) =>
  eps.map((e, i) => `${i ? "L" : "M"}${x(e).toFixed(1)},${y(f(e)).toFixed(1)}`).join(" ");
const best = eps.reduce((a, e) => (val(e) < val(a) ? e : a), 0);

export default function LossCurve() {
  const [epoch, setEpoch] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setEpoch(E);
      return;
    }
    let raf = 0;
    const start = performance.now() + 500;
    const tick = (now: number) => {
      const t = Math.min(Math.max((now - start) / 2400, 0), 1);
      setEpoch(Math.round(t * E));
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <figure className="chart">
      <div className="chart-head mono">
        <span>epoch {epoch}/{E}</span>
        <span className="legend">
          <i className="k train" /> train loss <i className="k val" /> validation loss
        </span>
      </div>
      <svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label="Training and validation loss falling over 30 epochs, with the best model saved as champion">
        {[0, 0.4, 0.8, 1.2].map((v) => (
          <g key={v}>
            <line x1={L} x2={W - R} y1={y(v)} y2={y(v)} className="grid" />
            <text x={L - 8} y={y(v) + 4} textAnchor="end" className="tick">{v.toFixed(1)}</text>
          </g>
        ))}
        {[0, 10, 20, 30].map((e) => (
          <text key={e} x={x(e)} y={H - 10} textAnchor="middle" className="tick">{e}</text>
        ))}
        <path d={path(train)} pathLength={1} className="curve train" />
        <path d={path(val)} pathLength={1} className="curve val" />
        <g className="champ">
          <circle cx={x(best)} cy={y(val(best))} r={6} />
          <text x={x(best)} y={y(val(best)) - 14} textAnchor="middle">champion, epoch {best}</text>
        </g>
      </svg>
      <figcaption className="mono">Illustrative training run, drawn for this page.</figcaption>
    </figure>
  );
}
