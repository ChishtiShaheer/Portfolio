"use client";
import { useEffect, useState } from "react";

const USER = "ChishtiShaheer";
const WEEKS = 14, CW = 40, CH = 22, GAP = 5, LEFT = 34, TOP = 20;
const MONTHS = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];

type Cell = { date: string; row: number; col: number };
type Stats = { total: number; active: number; streak: number };

const key = (d: Date) => d.toISOString().slice(0, 10);
const level = (n: number) => (n === 0 ? 0 : n <= 2 ? 1 : n <= 5 ? 2 : n <= 10 ? 3 : 4);

function buildGrid(): Cell[] {
  const today = new Date();
  const start = new Date(today);
  start.setDate(today.getDate() - (WEEKS * 7 - 1));
  start.setDate(start.getDate() - start.getDay()); // back to Sunday
  const cells: Cell[] = [];
  for (let i = 0; i < (WEEKS + 1) * 7; i++) {
    const d = new Date(start);
    d.setDate(start.getDate() + i);
    if (d > today) break;
    cells.push({ date: key(d), row: d.getDay(), col: Math.floor(i / 7) });
  }
  return cells;
}

export default function ActivityGraph() {
  const [cells, setCells] = useState<Cell[]>([]);
  const [counts, setCounts] = useState<Record<string, number> | null>(null);
  const [failed, setFailed] = useState(false);
  const [shown, setShown] = useState(0);

  useEffect(() => {
    setCells(buildGrid());
    Promise.all(
      [1, 2, 3].map((p) =>
        fetch(`https://api.github.com/users/${USER}/events/public?per_page=100&page=${p}`).then((r) => {
          if (!r.ok) throw new Error(String(r.status));
          return r.json();
        })
      )
    )
      .then((pages) => {
        const c: Record<string, number> = {};
        for (const ev of pages.flat()) {
          const day = String(ev.created_at).slice(0, 10);
          c[day] = (c[day] ?? 0) + (ev.type === "PushEvent" ? ev.payload?.size || 1 : 1);
        }
        setCounts(c);
      })
      .catch(() => setFailed(true));
  }, []);

  const stats: Stats | null = counts
    ? (() => {
        let total = 0, active = 0, streak = 0, run = 0;
        for (const c of cells) {
          const n = counts[c.date] ?? 0;
          total += n;
          if (n > 0) { active++; run++; streak = Math.max(streak, run); } else run = 0;
        }
        return { total, active, streak };
      })()
    : null;

  useEffect(() => {
    if (!stats) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) { setShown(stats.total); return; }
    let raf = 0;
    const t0 = performance.now() + 400;
    const tick = (now: number) => {
      const t = Math.min(Math.max((now - t0) / 1400, 0), 1);
      setShown(Math.round(t * stats.total));
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [stats?.total]);

  const W = LEFT + (WEEKS + 1) * (CW + GAP);
  const H = TOP + 7 * (CH + GAP);
  const months = cells.filter((c) => c.row === 0 && (c.col === 0 || new Date(c.date).getDate() <= 7));

  return (
    <figure className="chart">
      <div className="chart-head mono">
        <span>
          {stats
            ? `${shown} public actions, ${stats.active} active days, longest streak ${stats.streak}`
            : failed ? "GitHub activity unavailable right now" : "loading GitHub activity"}
        </span>
        <span className="legend">
          less {[0, 1, 2, 3, 4].map((l) => <i key={l} className={`sw l${l}`} />)} more
        </span>
      </div>
      <svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label="Heatmap of my public GitHub activity over the last 90 days">
        {[1, 3, 5].map((r) => (
          <text key={r} x={LEFT - 8} y={TOP + r * (CH + GAP) + CH / 2 + 4} textAnchor="end" className="tick">
            {["Sun","Mon","Tue","Wed","Thu","Fri","Sat"][r]}
          </text>
        ))}
        {months.map((c) => (
          <text key={c.date} x={LEFT + c.col * (CW + GAP)} y={12} className="tick">
            {MONTHS[new Date(c.date).getMonth()]}
          </text>
        ))}
        {cells.map((c) => {
          const n = counts?.[c.date] ?? 0;
          const l = counts ? level(n) : 0;
          return (
            <rect
              key={c.date}
              x={LEFT + c.col * (CW + GAP)}
              y={TOP + c.row * (CH + GAP)}
              width={CW}
              height={CH}
              rx={3}
              className={`cell l${l}${counts && l > 0 ? " in" : ""}`}
              style={{ ["--c" as string]: c.col + c.row * 0.4 }}
            >
              <title>{`${c.date}: ${n} public action${n === 1 ? "" : "s"}`}</title>
            </rect>
          );
        })}
      </svg>
      <figcaption className="mono">
        My public GitHub activity, last 90 days, fetched live. Private and coursework repos don't show up.
      </figcaption>
    </figure>
  );
}
