"use client";
import { useState } from "react";
import { stages } from "../lib/content";

export default function Pipeline() {
  const [i, setI] = useState(0);
  return (
    <div>
      <ol className="stages">
        {stages.map((s, n) => (
          <li key={s.name}>
            <button
              className={`stage${n <= i ? " done" : ""}`}
              aria-pressed={n === i}
              onClick={() => setI(n)}
            >
              <b>{s.name}</b>
              <span>{s.short}</span>
            </button>
          </li>
        ))}
      </ol>
      <div className="stage-detail" aria-live="polite">
        <p>{stages[i].detail}</p>
        <p className="tools mono">{stages[i].tools}</p>
      </div>
    </div>
  );
}
