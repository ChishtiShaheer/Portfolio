"use client";
import { useState } from "react";
import { runs } from "../lib/content";

export default function Runs() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div>
      {runs.map((r, n) => {
        const isOpen = open === n;
        return (
          <article className="run" key={r.name}>
            <button
              className="run-head"
              aria-expanded={isOpen}
              aria-controls={`run-${n}`}
              onClick={() => setOpen(isOpen ? null : n)}
            >
              <span className="run-title">
                {r.name}
                <span className="run-tag">{r.tagline}</span>
              </span>
              <span className="mono soft">{r.stack}</span>
              <span className={`pill${r.status === "live" ? " live" : ""}`}>{r.status}</span>
            </button>
            <div className="run-body" id={`run-${n}`} data-open={isOpen}>
              <div className="run-inner">
                <div className="run-content">
                  <ul>{r.points.map((p) => <li key={p}>{p}</li>)}</ul>
                  {r.links.length > 0 && (
                    <p className="run-links">
                      {r.links.map((l) => (
                        <a key={l.href} href={l.href} target="_blank" rel="noreferrer">{l.label}</a>
                      ))}
                    </p>
                  )}
                </div>
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
}
