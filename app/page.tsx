import LossCurve from "../components/LossCurve";
import Pipeline from "../components/Pipeline";
import Runs from "../components/Runs";
import { links, log, toolbox } from "../lib/content";

export default function Page() {
  return (
    <div className="shell">
      <aside className="rail">
        <div>
          <p className="name">Shaheer Chishti</p>
          <p className="where">BSCS, FAST NUCES Lahore</p>
        </div>
        <p className="open">Open to internships</p>
        <nav aria-label="Sections">
          <ul>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#pipeline">How the pipeline works</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#log">Experience</a></li>
            <li><a href="#toolbox">Toolbox</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </aside>

      <main>
        <header className="intro">
          <h1>I get models out of notebooks and keep them running.</h1>
          <p className="lede">
            Most of what I build sits on the quiet side of machine learning: data you can version,
            experiments you can still compare a month later, and containers that behave the same on
            someone else's machine.
          </p>
          <LossCurve />
        </header>

        <section className="sec" id="projects">
          <h2>Projects</h2>
          <Runs />
        </section>

        <section className="sec" id="pipeline">
          <h2>Inside the image classifier: data to live URL</h2>
          <Pipeline />
        </section>

        <section className="sec" id="about">
          <h2>About</h2>
          <div className="prose">
            <p>
              I started out writing apps in C#, Java and Kotlin. Somewhere along the way I got more
              interested in what happens after a model trains: where the data came from, which run
              produced which weights, and how it reaches a server without me crossing my fingers.
            </p>
            <p>
              In summer 2026 I worked at NitNode in Lahore as an Associate AI Engineer. For my final
              year project I'm building PromptGuard, a gateway that controls how a company's people
              use LLMs. I'm looking for an internship where ML meets infrastructure.
            </p>
          </div>
        </section>

        <section className="sec" id="log">
          <h2>Experience</h2>
          <div>
            {log.map((e) => (
              <div className="entry" key={e.title}>
                <span className="mono soft">{e.when}</span>
                <div>
                  <h3>{e.title}</h3>
                  <p>{e.body}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="sec" id="toolbox">
          <h2>Toolbox</h2>
          <dl>
            {toolbox.map((t) => (
              <div className="tool" key={t.area}>
                <dt>{t.area}</dt>
                <dd>{t.text}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section className="sec" id="contact">
          <h2>Contact</h2>
          <p className="prose">The quickest way to reach me is email.</p>
          <p className="contact">
            <a href={links.email}>shaheerchishti21@gmail.com</a>
            <a href={links.github} target="_blank" rel="noreferrer">GitHub</a>
            <a href={links.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
          </p>
        </section>
      </main>
    </div>
  );
}
