/**
 * Visual Direction: Living Systems Canvas — deep research blue, Chlorophyll Signal accents,
 * a role-responsive scientific canvas, and asymmetric specimen-window compositions.
 */
import { useState } from "react";
import {
  ArrowDownRight,
  ArrowUpRight,
  Beaker,
  BookOpenCheck,
  BrainCircuit,
  ChartNoAxesCombined,
  ChevronRight,
  ClipboardCheck,
  Database,
  Download,
  ExternalLink,
  FlaskConical,
  Github,
  Linkedin,
  Mail,
  Microscope,
  Phone,
  ScanLine,
  ShieldCheck,
  Sparkles,
  Workflow,
} from "lucide-react";
import { LivingSystemsCanvas } from "@/components/LivingSystemsCanvas";

type RoleKey = "analytics" | "quality" | "research" | "laboratory";

const profileImage = "/manus-storage/Yadava_Santhosh_Profile_ac7e7b5e.png";
const brandMark = "/manus-storage/ys-analysis-mark_c3e77818.png";

const roleContent: Record<RoleKey, { label: string; eyebrow: string; title: string; copy: string; Icon: typeof ChartNoAxesCombined }> = {
  analytics: {
    label: "Data analytics",
    eyebrow: "Evidence to action",
    title: "Turning raw information into a clearer next step.",
    copy: "Power BI, DAX, Excel, and Python provide a practical toolkit for finding patterns, explaining them clearly, and supporting everyday decisions.",
    Icon: ChartNoAxesCombined,
  },
  quality: {
    label: "Quality control",
    eyebrow: "Process integrity",
    title: "Careful documentation, reliable checks, and consistent standards.",
    copy: "Biotechnology training, manual testing practice, and attention to detail support a quality-focused mindset for controlled processes and accurate reporting.",
    Icon: ShieldCheck,
  },
  research: {
    label: "Research & development",
    eyebrow: "Curiosity with method",
    title: "Questions first. Evidence next. Better methods over time.",
    copy: "The foundation in biotechnology and continued technical learning support a disciplined approach to investigation, observations, and improving the next experiment.",
    Icon: Microscope,
  },
  laboratory: {
    label: "Laboratory roles",
    eyebrow: "Scientific discipline",
    title: "A science-led foundation built for structured work.",
    copy: "A first-class Biotechnology degree, laboratory data handling knowledge, and a methodical working style are the base for contributing in laboratory environments.",
    Icon: FlaskConical,
  },
};

const evidence = [
  { label: "Data analysis", title: "Superstore Sales Analysis", text: "Built an interactive sales view to study category, region, revenue, and profit patterns.", tools: ["Power BI", "DAX", "Excel"], color: "lime" },
  { label: "Operational patterns", title: "Rapido Ride Data Analysis", text: "Explored demand, cancellations, trip value, and city distribution in ride-booking data.", tools: ["Power BI", "Excel"], color: "cyan" },
  { label: "Exploratory research", title: "Uber Trip Data Analysis", text: "Used Python-assisted cleaning and dashboard summaries to study trip and fare behavior.", tools: ["Python", "Power BI", "Excel"], color: "coral" },
];

const practices = [
  { title: "Observe", detail: "Read the system, the source material, and the question before drawing a conclusion.", Icon: ScanLine },
  { title: "Structure", detail: "Organize data and process notes so another person can follow the work with confidence.", Icon: Workflow },
  { title: "Validate", detail: "Use checks, exceptions, and careful comparison to keep outputs trustworthy.", Icon: ClipboardCheck },
  { title: "Communicate", detail: "Present the evidence in a form that makes the next decision easier.", Icon: BrainCircuit },
];

function Marker({ children }: { children: string }) {
  return <p className="marker"><i aria-hidden="true" />{children}</p>;
}

export default function Home() {
  const [activeRole, setActiveRole] = useState<RoleKey>("analytics");
  const active = roleContent[activeRole];
  const ActiveIcon = active.Icon;

  return (
    <div className={`bio-portfolio role-${activeRole}`}>
      <header className="bio-nav">
        <a className="bio-brand" href="#top" aria-label="Yadava Santhosh home">
          <span className="bio-logo"><img src={brandMark} alt="" /></span>
          <span>YADAVA<strong>SANTHOSH</strong></span>
        </a>
        <nav aria-label="Primary navigation">
          <a href="#roles">Role fit</a>
          <a href="#evidence">Evidence</a>
          <a href="#education">Education</a>
          <a href="#contact">Contact</a>
        </nav>
        <a className="nav-signal" href="#contact"><i aria-hidden="true" />Open to roles</a>
      </header>

      <main id="top">
        <section className="systems-hero" aria-labelledby="hero-title">
          <LivingSystemsCanvas activeRole={activeRole} />
          <div className="hero-gridline line-one" aria-hidden="true" />
          <div className="hero-gridline line-two" aria-hidden="true" />
          <div className="hero-content">
            <Marker>Biotechnology graduate · First Class · 2023–2026</Marker>
            <h1 id="hero-title">Science-minded.<br /><em>Systems-ready.</em></h1>
            <p className="hero-lead">Yadava Santhosh is a Biotechnology graduate with growing data fluency, a quality-conscious approach, and an interest in contributing across analytical, laboratory, Quality Control, and Research & Development environments.</p>
            <div className="hero-actions">
              <a className="signal-button" href="#roles">Explore role fit <ArrowDownRight size={18} /></a>
              <a className="hero-text-link" href="/manus-storage/Yadava_Santhosh_Resume_1e4a65ba.pdf" target="_blank" rel="noreferrer"><Download size={16} />Download résumé</a>
            </div>
            <div className="hero-contacts">
              <a href="https://github.com/sunnyyadav8520" target="_blank" rel="noreferrer"><Github size={16} />GitHub</a>
              <a href="https://www.linkedin.com/in/sunnyyadav8520/" target="_blank" rel="noreferrer"><Linkedin size={16} />LinkedIn</a>
              <a href="mailto:sunnyyadav8520@gmail.com"><Mail size={16} />Email</a>
            </div>
          </div>
          <aside className="hero-specimen">
            <div className="specimen-ruler top" aria-hidden="true" /><div className="specimen-ruler right" aria-hidden="true" />
            <img src={profileImage} alt="Yadava Santhosh in professional attire" />
            <div className="specimen-index"><span>YS–BIO–26</span><span>01/04</span></div>
            <div className="portrait-identity"><span><Sparkles size={14} />Candidate profile</span><strong>Biotechnology<br />+ evidence</strong></div>
          </aside>
          <div className="hero-scope"><span>Role scope</span><b>Analytics<br />Quality<br />Research<br />Laboratory</b></div>
        </section>

        <section id="roles" className="role-section">
          <div className="role-section-heading">
            <Marker>01 · Contribution areas</Marker>
            <h2>One foundation.<br /><em>Four ways to contribute.</em></h2>
            <p>Choose a lens to explore how the same science-led strengths translate across role families.</p>
          </div>
          <div className="role-compass" role="tablist" aria-label="Role fit lenses">
            {(Object.keys(roleContent) as RoleKey[]).map((role, index) => {
              const entry = roleContent[role];
              const Icon = entry.Icon;
              return (
                <button
                  key={role}
                  type="button"
                  className={activeRole === role ? "role-chip active" : "role-chip"}
                  onClick={() => setActiveRole(role)}
                  role="tab"
                  aria-selected={activeRole === role}
                >
                  <span>0{index + 1}</span><Icon size={20} strokeWidth={1.7} /><strong>{entry.label}</strong><ChevronRight size={16} />
                </button>
              );
            })}
          </div>
          <div className="role-lens" role="tabpanel">
            <div className="lens-icon"><ActiveIcon size={31} strokeWidth={1.35} /></div>
            <div><Marker>{active.eyebrow}</Marker><h3>{active.title}</h3></div>
            <p>{active.copy}</p>
            <div className="lens-note"><span>ACTIVE LENS</span><b>{active.label}</b></div>
          </div>
        </section>

        <section id="evidence" className="evidence-section">
          <div className="evidence-header">
            <div><Marker>02 · Applied evidence</Marker><h2>Patterns, processes,<br /><em>and practical thinking.</em></h2></div>
            <p>Portfolio projects demonstrate a working foundation in cleaning, examining, and communicating data. The same habits—structure, accuracy, and clear reporting—are useful across science and operations.</p>
          </div>
          <div className="evidence-list">
            {evidence.map((item, index) => (
              <article className={`evidence-card ${item.color}`} key={item.title}>
                <div className="evidence-card-top"><span>0{index + 1}</span><ArrowUpRight size={19} /></div>
                <div className="evidence-visual" aria-hidden="true"><i /><i /><i /><i /><b /></div>
                <p className="evidence-label">{item.label}</p>
                <h3>{item.title}</h3>
                <p className="evidence-text">{item.text}</p>
                <div className="evidence-tools">{item.tools.map((tool) => <span key={tool}>{tool}</span>)}</div>
              </article>
            ))}
          </div>
          <a className="evidence-link" href="https://github.com/sunnyyadav8520" target="_blank" rel="noreferrer">Explore code and project material on GitHub <ExternalLink size={16} /></a>
        </section>

        <section className="practice-section">
          <div className="practice-title"><Marker>03 · Working approach</Marker><h2>A methodical way<br />to move work <em>forward.</em></h2></div>
          <div className="practice-steps">
            {practices.map(({ title, detail, Icon }, index) => (
              <article key={title} className="practice-step"><span>0{index + 1}</span><Icon size={23} strokeWidth={1.45} /><div><h3>{title}</h3><p>{detail}</p></div></article>
            ))}
          </div>
        </section>

        <section id="education" className="education-circuit">
          <div className="education-intro"><Marker>04 · Education & training</Marker><h2>Built in the lab.<br /><em>Expanded through data.</em></h2><p>A science education developed the attention to detail. Independent technical projects have extended that base into applied analytics and structured problem solving.</p></div>
          <div className="timeline">
            <article><span className="timeline-year">2023–2026</span><div className="timeline-node" /><div><h3>B.Sc. Biotechnology</h3><p>Parul University, Gujarat</p><small>First Class · biotechnology foundations · laboratory data handling</small></div></article>
            <article><span className="timeline-year">2021–2023</span><div className="timeline-node" /><div><h3>Intermediate</h3><p>Narayana Junior College</p><small>Pre-university scientific education</small></div></article>
            <article><span className="timeline-year">Before 2021</span><div className="timeline-node" /><div><h3>10th Class</h3><p>Kasturi E.M. High School</p><small>School education</small></div></article>
          </div>
          <div className="credential-shelf"><div><BookOpenCheck size={20} /><span>NPTEL</span><b>Biotechnology certification</b></div><div><Database size={20} /><span>APPLIED</span><b>Power BI & DAX project practice</b></div><div><Beaker size={20} /><span>DEVELOPING</span><b>SQL and advanced Power BI</b></div></div>
        </section>

        <section id="contact" className="bio-contact">
          <div className="contact-canvas" aria-hidden="true"><div /><div /><div /></div>
          <div className="contact-copy"><Marker>05 · Connect</Marker><h2>Ready to add care,<br />curiosity, and <em>clarity.</em></h2><p>Open to entry-level opportunities in Data Analytics, Quality Control, Research & Development, biotechnology, and laboratory operations.</p><a className="contact-email" href="mailto:sunnyyadav8520@gmail.com">sunnyyadav8520@gmail.com <ArrowUpRight size={22} /></a></div>
          <div className="contact-details"><div className="contact-mark"><img src={brandMark} alt="Yadava Santhosh monogram" /></div><a href="tel:+918520959324"><Phone size={17} />+91 85209 59324</a><a href="https://github.com/sunnyyadav8520" target="_blank" rel="noreferrer"><Github size={17} />github.com/sunnyyadav8520</a><a href="https://www.linkedin.com/in/sunnyyadav8520/" target="_blank" rel="noreferrer"><Linkedin size={17} />linkedin.com/in/sunnyyadav8520</a></div>
        </section>
      </main>
      <footer className="bio-footer"><span>© {new Date().getFullYear()} Yadava Santhosh</span><span>Science-minded. Systems-ready.</span><a href="#top">Back to top <ArrowUpRight size={13} /></a></footer>
    </div>
  );
}
