import React, { useState, useEffect } from 'react';
import { 
  User, 
  Briefcase, 
  GraduationCap, 
  Code, 
  Database, 
  Mail, 
  Linkedin, 
  Github, 
  FileText, 
  MapPin, 
  ChevronRight,
  Target,
  BarChart,
  Layers,
  Search,
  CheckCircle2,
  ArrowRight,
  Terminal,
  Cpu,
  Globe,
  Settings
} from 'lucide-react';

const App = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    // Inject Bootstrap CDN
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css';
    document.head.appendChild(link);

    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.head.removeChild(link);
    };
  }, []);

  const resumeData = {
    name: "Ramya Kommula",
    title: "IT Business Analyst",
    location: "San Francisco, CA",
    summary: "Strategic IT Business Analyst candidate with an MS in IT Management from Golden Gate University. Specialized in bridging the gap between high-level business goals and technical execution through data-driven insights, Agile methodology, and rigorous system validation.",
    contact: {
      email: "ramyareddy5353@gmail.com",
      linkedin: "https://linkedin.com",
      github: "https://github.com"
    },
    expertise: [
      {
        title: "Requirements Engineering",
        icon: <Search size={24} />,
        skills: ["BRD/FRD Documentation", "User Stories & Backlog", "Gap Analysis", "Stakeholder Elicitation"]
      },
      {
        title: "Data Intelligence",
        icon: <BarChart size={24} />,
        skills: ["SQL / NoSQL Querying", "Python (Pandas/NumPy)", "Predictive Analytics", "Tableau/PowerBI"]
      },
      {
        title: "SDLC & Quality",
        icon: <CheckCircle2 size={24} />,
        skills: ["Agile/Scrum Framework", "UAT Strategy", "API Validation", "Jira & Confluence"]
      }
    ],
    projects: [
      {
        title: "E-Commerce Workflow Optimization",
        org: "Agile Development Project",
        impact: "60% Performance Improvement",
        description: "Served as the primary liaison between business stakeholders and developers for a large-scale e-commerce module overhaul.",
        contributions: [
          "Translated high-level business goals into 50+ granular user stories and acceptance criteria.",
          "Facilitated daily stand-ups and sprint planning to ensure alignment with FRD specifications.",
          "Conducted rigorous performance validation, successfully reducing system latency."
        ],
        tech: ["Agile", "UAT", "System Analysis"],
        icon: <Globe size={32} />
      },
      {
        title: "Enterprise Task Management System",
        org: "Systems Analysis Portfolio",
        impact: "98% Functional Accuracy",
        description: "Designed process architecture for a centralized task management system supporting 250+ concurrent enterprise users.",
        contributions: [
          "Developed end-to-end BPMN process flows to identify and mitigate operational bottlenecks.",
          "Orchestrated UAT phases, documenting defects and verifying resolutions with engineering teams.",
          "Validated REST API responses to ensure data integrity across cross-platform integrations."
        ],
        tech: ["BPMN", "Jira", "API Testing"],
        icon: <Layers size={32} />
      },
      {
        title: "Student Success Predictive Analytics",
        org: "Data Analytics Initiative",
        impact: "85% Efficiency Gain",
        description: "Engineered a Python-based reporting suite to analyze 10,000+ academic records and automate institutional reporting.",
        contributions: [
          "Developed automated ETL pipelines using Python to replace manual reporting workflows.",
          "Built predictive models (Regression/Clustering) to identify student behavioral trends.",
          "Designed interactive dashboards using Matplotlib/Seaborn for senior administration decision-making."
        ],
        tech: ["Python", "Machine Learning", "SQL"],
        icon: <Database size={32} />
      }
    ]
  };

  const navLinkStyle = {
    fontSize: '11px',
    fontWeight: '700',
    textTransform: 'uppercase',
    letterSpacing: '0.2em',
    color: '#6c757d',
    textDecoration: 'none'
  };

  return (
    <div style={{ backgroundColor: '#fdfdfd', color: '#1a1c1e', overflowX: 'hidden' }}>
      {/* Bootstrap Navbar */}
      <nav className={`navbar navbar-expand-lg fixed-top transition-all ${scrolled ? 'bg-white border-bottom shadow-sm py-2' : 'bg-transparent py-4'}`} style={{ transition: '0.4s' }}>
        <div className="container px-4">
          <a className="navbar-brand d-flex align-items-center" href="#">
            <div className="bg-dark text-white rounded d-flex align-items-center justify-content-center me-3" style={{ width: '40px', height: '40px', fontFamily: 'serif', fontStyle: 'italic', fontSize: '20px' }}>R</div>
            <div>
              <div className="fw-bold text-uppercase lh-1" style={{ fontSize: '14px' }}>Ramya Kommula</div>
              <div className="text-primary fw-bold text-uppercase tracking-widest mt-1" style={{ fontSize: '10px' }}>IT Business Analyst</div>
            </div>
          </a>
          <div className="collapse navbar-collapse justify-content-end">
            <ul className="navbar-nav align-items-center gap-4">
              <li className="nav-item"><a style={navLinkStyle} href="#expertise">Expertise</a></li>
              <li className="nav-item"><a style={navLinkStyle} href="#casestudies">Case Studies</a></li>
              <li className="nav-item"><a style={navLinkStyle} href="#education">Education</a></li>
              <li className="nav-item ms-lg-4">
                <a href={`mailto:${resumeData.contact.email}`} className="btn btn-dark text-uppercase fw-bold rounded-1 py-2 px-4" style={{ fontSize: '11px', letterSpacing: '0.1em' }}>Connect</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="py-5 mt-5 position-relative overflow-hidden" style={{ minHeight: '80vh', display: 'flex', alignItems: 'center' }}>
        <div className="container px-4 py-5">
          <div className="row">
            <div className="col-lg-8">
              <div className="d-flex align-items-center mb-4">
                <div className="bg-primary me-2" style={{ width: '32px', height: '2px' }}></div>
                <span className="text-primary fw-bold text-uppercase" style={{ fontSize: '12px', letterSpacing: '0.1em' }}>Based in San Francisco</span>
              </div>
              <h1 className="display-1 fw-bold mb-4" style={{ letterSpacing: '-0.04em', lineHeight: '0.9' }}>
                Strategic Analysis. <br />
                <span className="text-muted fw-normal font-serif fst-italic">Data-Driven </span> Results.
              </h1>
              <p className="lead text-secondary mb-5 pr-lg-5" style={{ fontSize: '1.25rem', lineHeight: '1.6' }}>
                {resumeData.summary}
              </p>
              <div className="d-flex flex-wrap gap-4 align-items-center">
                <a href="#casestudies" className="btn btn-dark btn-lg px-5 py-3 rounded-3 fw-bold shadow-lg d-flex align-items-center gap-2">
                  View Portfolio <ArrowRight size={20} />
                </a>
                <div className="d-flex gap-4 ms-lg-3">
                  <a href={resumeData.contact.linkedin} className="text-secondary hover-dark"><Linkedin size={22} /></a>
                  <a href={resumeData.contact.github} className="text-secondary hover-dark"><Github size={22} /></a>
                  <a href={`mailto:${resumeData.contact.email}`} className="text-secondary hover-dark"><Mail size={22} /></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Expertise Section */}
      <section id="expertise" className="py-5 border-top border-bottom" style={{ backgroundColor: '#f8f9fa' }}>
        <div className="container px-4 py-5">
          <div className="row g-5">
            <div className="col-lg-4">
              <h2 className="text-primary fw-black text-uppercase mb-3" style={{ fontSize: '11px', letterSpacing: '0.4em' }}>Core Competencies</h2>
              <h3 className="h1 fw-bold mb-4">Technical Rigor Meets Business Strategy</h3>
              <p className="text-secondary fs-5">
                Specializing in the full project lifecycle, from initial requirement discovery to stakeholder reporting and quality assurance.
              </p>
            </div>
            <div className="col-lg-8">
              <div className="row g-4">
                {resumeData.expertise.map((exp, idx) => (
                  <div key={idx} className="col-md-4">
                    <div className="card h-100 border-0 shadow-sm p-4 rounded-4">
                      <div className="bg-dark text-white rounded-3 d-flex align-items-center justify-center mb-4" style={{ width: '48px', height: '48px' }}>
                        {exp.icon}
                      </div>
                      <h4 className="fw-bold mb-3" style={{ fontSize: '1.1rem' }}>{exp.title}</h4>
                      <ul className="list-unstyled mb-0">
                        {exp.skills.map(skill => (
                          <li key={skill} className="small text-secondary mb-2 d-flex align-items-center">
                            <span className="bg-primary rounded-circle me-2" style={{ width: '6px', height: '6px' }}></span>
                            {skill}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section id="casestudies" className="py-5">
        <div className="container px-4 py-5">
          <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-end mb-5">
            <div className="mb-4 mb-md-0">
              <h2 className="text-primary fw-black text-uppercase mb-2" style={{ fontSize: '11px', letterSpacing: '0.4em' }}>Case Studies</h2>
              <h3 className="display-5 fw-bold mb-0">System Analysis & Data Engineering</h3>
            </div>
            <div className="badge bg-primary-subtle text-primary border border-primary-subtle rounded-pill px-3 py-2 d-flex align-items-center gap-2">
              <Terminal size={14} /> <span className="fw-bold" style={{ fontSize: '10px' }}>GPA: 3.7 ACADEMIC EXCELLENCE</span>
            </div>
          </div>

          <div className="row g-5">
            {resumeData.projects.map((project, idx) => (
              <div key={idx} className="col-12 mb-5">
                <div className="row g-4 g-lg-5">
                  <div className="col-lg-4">
                    <div className="card border p-4 rounded-5 h-100 shadow-sm sticky-top" style={{ top: '100px', zIndex: 1 }}>
                      <div className="text-primary fw-bold text-uppercase mb-2" style={{ fontSize: '10px', letterSpacing: '0.1em' }}>{project.org}</div>
                      <h4 className="fw-bold h3 mb-4">{project.title}</h4>
                      <div className="mb-4">
                        <small className="text-muted text-uppercase fw-bold d-block mb-1" style={{ fontSize: '10px' }}>Impact Metric</small>
                        <span className="h4 fw-bold text-primary">{project.impact}</span>
                      </div>
                      <div className="d-flex flex-wrap gap-2">
                        {project.tech.map(t => (
                          <span key={t} className="badge bg-light text-secondary border rounded-pill px-3 py-2 text-uppercase" style={{ fontSize: '9px' }}>{t}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-8">
                    <p className="h3 fw-light text-secondary mb-4 lh-base">{project.description}</p>
                    <div className="row g-3">
                      {project.contributions.map((task, i) => (
                        <div key={i} className="col-12">
                          <div className="d-flex p-4 bg-white border rounded-4 shadow-sm align-items-start gap-3">
                            <div className="bg-primary-subtle text-primary p-1 rounded-2">
                              <CheckCircle2 size={18} />
                            </div>
                            <span className="fs-5 text-dark">{task}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Footer */}
      <section id="education" className="bg-dark text-white py-5 rounded-top-5 mt-5">
        <div className="container px-4 py-5">
          <div className="row g-5 align-items-center">
            <div className="col-lg-6">
              <h2 className="text-primary-emphasis fw-black text-uppercase mb-5" style={{ fontSize: '11px', letterSpacing: '0.4em' }}>Academic Standing</h2>
              <div className="mb-5 pb-5 border-bottom border-secondary">
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <h3 className="h2 fw-bold mb-0">Golden Gate University</h3>
                  <span className="text-primary-emphasis font-serif fst-italic h4 mb-0">2026 Candidate</span>
                </div>
                <p className="text-secondary fs-4">Master of Science, IT & Management</p>
                <div className="d-flex gap-4 mt-4">
                  <div className="bg-white bg-opacity-10 border border-white border-opacity-10 p-3 rounded-4">
                    <small className="text-secondary text-uppercase fw-bold d-block mb-1" style={{ fontSize: '10px' }}>Cumulative GPA</small>
                    <span className="h4 fw-bold">3.7 / 4.0</span>
                  </div>
                  <div className="bg-white bg-opacity-10 border border-white border-opacity-10 p-3 rounded-4">
                    <small className="text-secondary text-uppercase fw-bold d-block mb-1" style={{ fontSize: '10px' }}>Focus Areas</small>
                    <span className="h6 fw-bold">Business Intelligence, SDLC</span>
                  </div>
                </div>
              </div>
              <div className="opacity-50">
                <h4 className="fw-bold h5 mb-2">Nalla Malla Reddy College</h4>
                <p className="text-secondary mb-0">BE, Electronics & Communication Engineering</p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="bg-white text-dark p-5 rounded-5 shadow-lg">
                <h3 className="h1 fw-bold mb-4">Let's Discuss your Next Project.</h3>
                <p className="text-muted fs-5 mb-5">
                  Currently looking for Junior IT Business Analyst roles in San Francisco or hybrid environments. Let's explore how my analytical foundation can add value to your team.
                </p>
                <a href="mailto:ramyareddy5353@gmail.com" className="d-flex justify-content-between align-items-center p-4 bg-light rounded-4 text-decoration-none text-dark border hover-primary transition-all">
                  <div className="d-flex align-items-center gap-3">
                    <div className="bg-dark text-white p-3 rounded-3"><Mail size={24} /></div>
                    <div>
                      <small className="text-muted text-uppercase fw-bold d-block mb-1" style={{ fontSize: '9px' }}>Email Inquiries</small>
                      <span className="fw-bold fs-5">ramyareddy5353@gmail.com</span>
                    </div>
                  </div>
                  <ArrowRight size={24} className="text-primary" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-dark py-5 border-top border-white border-opacity-10 text-center">
        <div className="container px-4">
          <div className="d-flex flex-column flex-md-row justify-content-between align-items-center gap-4">
            <span className="text-secondary fw-bold text-uppercase" style={{ fontSize: '10px', letterSpacing: '0.5em' }}>Ramya Kommula Portfolio</span>
            <div className="d-flex gap-4">
              <a href="#expertise" className="text-secondary text-decoration-none small fw-bold text-uppercase">Expertise</a>
              <a href="#casestudies" className="text-secondary text-decoration-none small fw-bold text-uppercase">Cases</a>
              <a href="#education" className="text-secondary text-decoration-none small fw-bold text-uppercase">Education</a>
            </div>
            <span className="text-secondary opacity-50 small font-italic fst-italic">Built with React & Bootstrap</span>
          </div>
        </div>
      </footer>

      <style>{`
        .transition-all { transition: all 0.3s ease; }
        .hover-dark:hover { color: #212529 !important; }
        .hover-primary:hover { border-color: #0d6efd !important; background-color: #f8f9ff !important; }
        .font-serif { font-family: 'Playfair Display', serif; }
        .fw-black { font-weight: 900; }
        .tracking-widest { letter-spacing: 0.3em; }
      `}</style>
    </div>
  );
};

export default App;