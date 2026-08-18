/**
 * Visual Direction: Analytical Editorial — warm parchment, ink typography, Analysis Rust accents,
 * and a quiet research-journal layout inspired by the user-supplied reference portfolio.
 */
import {
  ArrowDown,
  ArrowUpRight,
  BarChart3,
  ChevronDown,
  CircleCheck,
  Code2,
  Database,
  ExternalLink,
  FileText,
  Github,
  GraduationCap,
  Linkedin,
  Mail,
  Phone,
  Sparkles,
} from "lucide-react";

const brandMark = "/manus-storage/ys-analysis-mark_c3e77818.png";
const profileImage = "/manus-storage/Yadava_Santhosh_Profile_ac7e7b5e.png";

const projects = [
  {
    number: "01",
    title: "Superstore Sales Analysis",
    eyebrow: "Retail intelligence",
    tools: ["Power BI", "DAX", "Excel"],
    visual: "/manus-storage/superstore-analysis-editorial_74b9e2ae.jpg",
    summary:
      "A category, regional, and time-based study of retail sales that turns scattered transactions into a clearer revenue and profitability story.",
    details: [
      "Structured raw data in Excel with pivot tables and formulas before visualization.",
      "Built an interactive Power BI view with DAX measures for year-over-year growth and running totals.",
      "Flagged top and bottom product segments to support inventory and pricing conversations.",
    ],
    accent: "rust",
  },
  {
    number: "02",
    title: "Rapido Ride Data Analysis",
    eyebrow: "Mobility patterns",
    tools: ["Power BI", "Excel"],
    visual: "/manus-storage/rapido-mobility-editorial_8ff30c9c.jpg",
    summary:
      "An exploration of ride-booking behavior that surfaces demand rhythms, cancellation signals, and city-level distribution.",
    details: [
      "Examined peak demand periods and city-wise ride distribution across booking data.",
      "Designed KPI-led reports for ride volume, cancellations, and average trip value.",
      "Framed peak-hour observations for hypothetical driver-allocation and surge-pricing decisions.",
    ],
    accent: "teal",
  },
  {
    number: "03",
    title: "Uber Trip Data Analysis",
    eyebrow: "Trip behavior",
    tools: ["Excel", "Power BI", "Python"],
    visual: "/manus-storage/uber-trip-editorial_3bf603e3.jpg",
    summary:
      "An exploratory trip study connecting ride frequency, duration, fare movement, and location-based behavior.",
    details: [
      "Used Python for initial cleaning and exploratory analysis of trip-level data.",
      "Summarized important patterns through Excel and Power BI dashboard views.",
      "Segmented trip behavior by time of day and location to reveal actionable rider patterns.",
    ],
    accent: "ink",
  },
];

const skillGroups = [
  {
    id: "01",
    icon: BarChart3,
    title: "Analysis & visualization",
    description: "Power BI, DAX, and Microsoft Excel for translating data into practical views and reports.",
    tags: ["Power BI", "DAX", "Excel", "Pivot Tables", "XLOOKUP"],
  },
  {
    id: "02",
    icon: Code2,
    title: "Programming foundations",
    description: "Python with Pandas and NumPy basics, plus an actively developing SQL foundation.",
    tags: ["Python", "Pandas", "NumPy", "SQL basics"],
  },
  {
    id: "03",
    icon: Database,
    title: "Quality & domain thinking",
    description: "Manual testing, thoughtful data handling, and biotechnology-informed attention to process.",
    tags: ["Manual testing", "Test cases", "Bug reporting", "Biotechnology"],
  },
];

function SectionHeading({
  number,
  label,
  title,
  description,
}: {
  number: string;
  label: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="section-heading">
      <div className="section-kicker">
        <span>{number}</span>
        <i aria-hidden="true" />
        <span>{label}</span>
      </div>
      <div className="section-heading-copy">
        <h2>{title}</h2>
        {description ? <p>{description}</p> : null}
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <div className="portfolio-shell">
      <header className="site-header">
        <a href="#top" className="brand" aria-label="Yadava Santhosh — home">
          <img src={brandMark} alt="Yadava Santhosh monogram" />
          <span>
            YADAVA
            <strong>SANTHOSH</strong>
          </span>
        </a>

        <nav aria-label="Primary navigation">
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#education">Education</a>
          <a href="#contact">Contact</a>
        </nav>

        <a className="header-availability" href="mailto:sunnyyadav8520@gmail.com">
          <i aria-hidden="true" /> Available for analyst, QC & R&D roles
        </a>
      </header>

      <main id="top">
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="hero-eyebrow">
              <span /> B.Sc. Biotechnology · Parul University · First Class
            </p>
            <h1 id="hero-title">
              Yadava
              <em>Santhosh</em>
            </h1>
            <p className="hero-intro">
              Data analyst in the making, combining a biotechnology mindset with practical Power BI, DAX, Excel, and Python work to make business data easier to understand and act on.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#projects">
                View projects <ArrowDown size={17} strokeWidth={1.8} />
              </a>
              <a
                className="button button-quiet"
                href="/manus-storage/Yadava_Santhosh_Resume_1e4a65ba.pdf"
                target="_blank"
                rel="noreferrer"
              >
                <FileText size={17} strokeWidth={1.8} /> Resume
              </a>
            </div>
            <div className="hero-links">
              <a href="https://github.com/sunnyyadav8520" target="_blank" rel="noreferrer">
                <Github size={16} strokeWidth={1.8} /> GitHub <ArrowUpRight size={14} />
              </a>
              <a href="https://www.linkedin.com/in/sunnyyadav8520/" target="_blank" rel="noreferrer">
                <Linkedin size={16} strokeWidth={1.8} /> LinkedIn <ArrowUpRight size={14} />
              </a>
              <a href="mailto:sunnyyadav8520@gmail.com">
                <Mail size={16} strokeWidth={1.8} /> Contact <ArrowUpRight size={14} />
              </a>
            </div>
          </div>

          <div className="hero-visual" aria-label="Professional portrait of Yadava Santhosh">
            <div className="hero-image-frame">
              <img src={profileImage} alt="Yadava Santhosh in a professional portrait" />
            </div>
            <div className="hero-stamp">
              <span>DATA</span>
              <strong>ANALYST</strong>
              <small>DATA · QUALITY CONTROL<br />· RESEARCH & DEVELOPMENT</small>
            </div>
            <div className="hero-data-note" aria-hidden="true">
              <span className="dot dot-rust" />
              <span className="dot dot-teal" />
              <span className="dot dot-ink" />
              <b>Insight<br />in progress</b>
            </div>
          </div>

          <a className="hero-scroll" href="#projects" aria-label="Scroll to projects">
            <span>Scroll to explore</span>
            <ChevronDown size={18} strokeWidth={1.5} />
          </a>
        </section>

        <section className="statement-band" aria-label="Professional statement">
          <div className="statement-ornament" aria-hidden="true">+</div>
          <p>
            I enjoy the path from <em>raw data</em> to a decision someone can actually use.
          </p>
          <div className="statement-meta">
            <span>03</span>
            <small>portfolio studies</small>
          </div>
        </section>

        <section id="projects" className="projects-section section-space" aria-labelledby="projects-title">
          <SectionHeading
            number="01"
            label="Selected work"
            title="Projects built around the questions behind the numbers."
            description="Independent case studies in sales, mobility, and trip behavior—each focused on cleaning data, finding patterns, and communicating what matters."
          />

          <div className="project-list">
            {projects.map((project) => (
              <article className={`project-card project-${project.accent}`} key={project.title}>
                <div className="project-visual-wrap">
                  <img src={project.visual} alt="" className="project-visual" />
                  <div className="project-number" aria-hidden="true">{project.number}</div>
                </div>
                <div className="project-copy">
                  <div className="project-topline">
                    <span>{project.eyebrow}</span>
                    <div>{project.tools.map((tool) => <small key={tool}>{tool}</small>)}</div>
                  </div>
                  <h3>{project.title}</h3>
                  <p>{project.summary}</p>
                  <ul>
                    {project.details.map((detail) => (
                      <li key={detail}><CircleCheck size={15} strokeWidth={1.8} />{detail}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>

          <div className="projects-footer">
            <p>More project material and code samples are maintained on GitHub.</p>
            <a href="https://github.com/sunnyyadav8520" target="_blank" rel="noreferrer">
              Explore GitHub <ExternalLink size={15} />
            </a>
          </div>
        </section>

        <section id="skills" className="skills-section section-space" aria-labelledby="skills-title">
          <SectionHeading
            number="02"
            label="Working toolkit"
            title="A grounded set of tools for asking better questions of data."
          />
          <div className="skills-layout">
            <div className="skills-intro">
              <p className="large-note">A practical foundation, with a habit of learning through hands-on analysis.</p>
              <div className="data-figure" aria-hidden="true">
                <div className="figure-bars"><i /><i /><i /><i /><i /></div>
                <span>Evidence first<br />then narrative</span>
              </div>
            </div>
            <div className="skills-list">
              {skillGroups.map((group) => {
                const Icon = group.icon;
                return (
                  <article className="skill-group" key={group.id}>
                    <div className="skill-index"><span>{group.id}</span><Icon size={20} strokeWidth={1.5} /></div>
                    <div>
                      <h3>{group.title}</h3>
                      <p>{group.description}</p>
                      <div className="skill-tags">{group.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section id="education" className="education-section section-space" aria-labelledby="education-title">
          <SectionHeading
            number="03"
            label="Education & learning"
            title="An interdisciplinary starting point."
            description="The science of biotechnology brought rigor, careful observation, and respect for evidence. Data analytics is where those strengths now meet business questions."
          />
          <div className="education-grid">
            <article className="degree-card">
              <div className="degree-icon"><GraduationCap size={26} strokeWidth={1.45} /></div>
              <p className="card-label">Degree</p>
              <h3>Bachelor of Science<br /><em>Biotechnology</em></h3>
              <div className="degree-rule" />
              <p>Parul University, Gujarat</p>
              <strong>2023–2026 · First Class</strong>
            </article>
            <article className="learning-card">
              <div className="learning-topline"><Sparkles size={18} strokeWidth={1.6} /> <span>Continuous learning</span></div>
              <h3>Turning course work into applied dashboard and analysis practice.</h3>
              <div className="credential-list">
                <div><span>NPTEL</span><p>Certification in Biotechnology</p></div>
                <div><span>APPLIED</span><p>Power BI & DAX through independent project work</p></div>
                <div><span>PRACTICAL</span><p>Excel: pivot tables, formulas, and dashboarding</p></div>
              </div>
            </article>
          </div>
          <div className="school-history" aria-label="School education">
            <p className="school-history-label">Earlier education</p>
            <article>
              <span>2021–2023</span>
              <div><h3>Intermediate</h3><p>Narayana Junior College</p></div>
              <GraduationCap size={20} strokeWidth={1.45} aria-hidden="true" />
            </article>
            <article>
              <span>Before 2021</span>
              <div><h3>10th Class</h3><p>Kasturi E.M. High School</p></div>
              <GraduationCap size={20} strokeWidth={1.45} aria-hidden="true" />
            </article>
          </div>
        </section>

        <section id="contact" className="contact-section" aria-labelledby="contact-title">
          <div className="contact-main">
            <p className="section-kicker light"><span>04</span><i aria-hidden="true" /><span>Let’s connect</span></p>
            <h2 id="contact-title">Have a data challenge<br />worth <em>exploring?</em></h2>
            <p>I’m available for data analyst, quality control, and research & development roles where careful analysis and scientific discipline can support meaningful decisions.</p>
            <a className="contact-email" href="mailto:sunnyyadav8520@gmail.com">
              sunnyyadav8520@gmail.com <ArrowUpRight size={24} strokeWidth={1.6} />
            </a>
          </div>
          <aside className="contact-sidebar" aria-label="Contact details">
            <div className="contact-mark"><img src={brandMark} alt="" /></div>
            <a href="tel:+918520959324"><Phone size={17} strokeWidth={1.7} /> +91 85209 59324</a>
            <a href="https://github.com/sunnyyadav8520" target="_blank" rel="noreferrer"><Github size={17} strokeWidth={1.7} /> github.com/sunnyyadav8520</a>
            <a href="https://www.linkedin.com/in/sunnyyadav8520/" target="_blank" rel="noreferrer"><Linkedin size={17} strokeWidth={1.7} /> linkedin.com/in/sunnyyadav8520</a>
            <a className="resume-mini" href="/manus-storage/Yadava_Santhosh_Resume_1e4a65ba.pdf" target="_blank" rel="noreferrer"><FileText size={17} strokeWidth={1.7} /> Open résumé</a>
          </aside>
        </section>
      </main>

      <footer className="site-footer">
        <span>© {new Date().getFullYear()} Yadava Santhosh</span>
        <span>Built for insight, not noise.</span>
        <a href="#top">Back to top <ArrowUpRight size={14} /></a>
      </footer>
    </div>
  );
}
