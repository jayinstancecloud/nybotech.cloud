import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Nybotech MediOS – Clinic Operating System</title>
        <meta
          name="description"
          content="Nybotech MediOS is a modern clinic operating system that unifies appointments, EMR, billing, and analytics so you can automate admin work and focus on patient care."
        />
      </Head>
      <body>
        <header className="site-header">
          <div className="container header-inner">
            <a href="#top" className="logo">
              <span className="logo-mark">N</span>
              <span className="logo-text">Nybotech MediOS</span>
            </a>
            <nav className="nav-main" aria-label="Primary navigation">
              <button className="nav-toggle" aria-expanded="false" aria-controls="nav-menu">
                <span className="nav-toggle-line" />
                <span className="nav-toggle-line" />
              </button>
              <ul id="nav-menu" className="nav-links">
                <li className="nav-item">
                  <button className="nav-link" data-scroll-target="#practices">
                    Practices
                  </button>
                </li>
                <li className="nav-item">
                  <button className="nav-link" data-scroll-target="#solutions">
                    Solutions
                  </button>
                </li>
                <li className="nav-item">
                  <button className="nav-link" data-scroll-target="#learn">
                    Learn
                  </button>
                </li>
              </ul>
            </nav>
            <div className="header-cta">
              <button className="btn btn-ghost" data-scroll-target="#contact">
                Contact Sales
              </button>
              <button className="btn btn-primary" data-scroll-target="#demo">
                Book a Demo
              </button>
            </div>
          </div>
        </header>

        <main>
          <section className="hero" id="top">
            <div className="container hero-inner">
              <div className="hero-copy">
                <p className="eyebrow">Clinic Operating System</p>
                <h1>Meet Nybotech MediOS, your clinic&apos;s operating system.</h1>
                <p className="hero-subtitle">
                  Go beyond basic clinic software. Automate front‑desk tasks, capture rich medical records, and simplify
                  billing so your team can focus on patients, not paperwork.
                </p>
                <div className="hero-actions">
                  <button className="btn btn-primary" data-scroll-target="#demo">
                    Book a Live Demo
                  </button>
                  <button className="btn btn-ghost" data-scroll-target="#learn">
                    Watch Product Overview
                  </button>
                </div>
                <p className="hero-meta">
                  Trusted by over <strong>4,000+ healthcare providers</strong> across Asia‑Pacific.
                </p>
                <div className="hero-badges">
                  <span className="badge">EMR</span>
                  <span className="badge">Scheduling</span>
                  <span className="badge">Billing</span>
                  <span className="badge">Inventory</span>
                  <span className="badge">Analytics</span>
                </div>
              </div>
              <aside className="hero-side">
                <p className="hero-side-label">Designed for growing clinics</p>
                <ul className="hero-side-list">
                  <li>Reduce front‑desk workload with online booking and digital forms.</li>
                  <li>Give doctors fast, structured notes tailored to their specialty.</li>
                  <li>Stay on top of billing, inventory, and key performance metrics.</li>
                </ul>
              </aside>
            </div>
          </section>

          <section className="section section-muted" id="practices">
            <div className="container">
              <header className="section-header">
                <h2>Built for every type of practice.</h2>
                <p>
                  Whether you&apos;re a solo specialist or a multi‑location group, Nybotech MediOS adapts to the way your
                  clinic works—without complex setup.
                </p>
              </header>
              <div className="pill-tabs">
                <button id="specialist" className="pill-tab pill-tab-active" data-practice="specialist">
                  Specialist Practice
                </button>
                <button id="gp" className="pill-tab" data-practice="gp">
                  GP / Family Medicine
                </button>
                <button id="dental" className="pill-tab" data-practice="dental">
                  Dental
                </button>
                <button id="allied" className="pill-tab" data-practice="allied">
                  Allied Health
                </button>
                <button id="aesthetic" className="pill-tab" data-practice="aesthetic">
                  Aesthetic
                </button>
                <button id="group" className="pill-tab" data-practice="group">
                  Group Practice
                </button>
              </div>
              <div className="practice-panels">
                {/* Specialist */}
                <article className="practice-panel practice-panel-active" data-practice-panel="specialist">
                  <h3>Specialist clinics</h3>
                  <p>
                    Manage complex care plans, multi‑disciplinary referrals, and procedure‑based workflows from one place. Capture
                    structured clinical notes while keeping the flexibility of free‑text and drawings.
                  </p>
                  <ul className="checklist">
                    <li>Custom templates for each subspecialty</li>
                    <li>Integrated imaging and lab results</li>
                    <li>Day‑surgery and procedure scheduling</li>
                    <li>Referrer letters and secure summaries</li>
                  </ul>
                </article>

                {/* GP */}
                <article className="practice-panel" data-practice-panel="gp">
                  <h3>GP &amp; family medicine</h3>
                  <p>
                    Run efficient, high‑volume clinics with quick triage, repeat prescriptions, chronic disease management, and
                    preventative care reminders baked in.
                  </p>
                  <ul className="checklist">
                    <li>Fast registration with digital forms</li>
                    <li>Vaccination and screening reminders</li>
                    <li>Chronic disease dashboards</li>
                    <li>Integrated billing for government and insurers</li>
                  </ul>
                </article>

                {/* Dental */}
                <article className="practice-panel" data-practice-panel="dental">
                  <h3>Dental practices</h3>
                  <p>
                    Chartings, recalls, treatment plans, and inventory tracking for consumables and implants in one streamlined
                    system.
                  </p>
                  <ul className="checklist">
                    <li>Tooth and surface level charting</li>
                    <li>Hygiene and recall workflows</li>
                    <li>Chair‑side notes on any device</li>
                    <li>Stock alerts for consumables</li>
                  </ul>
                </article>

                {/* Allied health */}
                <article className="practice-panel" data-practice-panel="allied">
                  <h3>Allied health</h3>
                  <p>
                    Physiotherapy, psychology, and other allied health teams can manage treatment plans, session notes, and outcome
                    tracking in a shared workspace.
                  </p>
                  <ul className="checklist">
                    <li>Multi‑disciplinary case notes</li>
                    <li>Goal and outcome tracking</li>
                    <li>Package and session‑based billing</li>
                    <li>Telehealth‑ready appointment types</li>
                  </ul>
                </article>

                {/* Aesthetic */}
                <article className="practice-panel" data-practice-panel="aesthetic">
                  <h3>Aesthetic &amp; wellness</h3>
                  <p>
                    Combine clinical documentation with rich photo records, packages, memberships, and retail inventory management.
                  </p>
                  <ul className="checklist">
                    <li>Before‑and‑after photo timelines</li>
                    <li>Packages, credits, and memberships</li>
                    <li>Retail and consumable inventory</li>
                    <li>Consent forms and treatment notes</li>
                  </ul>
                </article>

                {/* Group */}
                <article className="practice-panel" data-practice-panel="group">
                  <h3>Group practices</h3>
                  <p>
                    Standardize operations across locations while giving each clinic the flexibility they need. See volumes, revenue,
                    and performance in one view.
                  </p>
                  <ul className="checklist">
                    <li>Central user, payer, and item management</li>
                    <li>Cross‑location scheduling</li>
                    <li>Role‑based access and audit trails</li>
                    <li>Group‑level dashboards and analytics</li>
                  </ul>
                </article>
              </div>
            </div>
          </section>

          <section className="section" id="solutions">
            <div className="container">
              <header className="section-header">
                <h2>Everything you need, in one clinic platform.</h2>
                <p>
                  Nybotech MediOS unifies scheduling, electronic medical records, billing, inventory, and analytics—so your team can
                  stop juggling multiple systems.
                </p>
              </header>
              <div className="grid grid-3">
                <article className="card">
                  <h3>Clinic management</h3>
                  <p>
                    Manage patients, visits, and resources from a single console. Configure sessions, rooms, and providers to match
                    your real‑world operations.
                  </p>
                  <ul className="card-list">
                    <li>Online and front‑desk appointment booking</li>
                    <li>Digital patient intake and consents</li>
                    <li>Queue and room management</li>
                  </ul>
                </article>
                <article className="card">
                  <h3>Electronic medical records</h3>
                  <p>
                    Capture structured and narrative notes with templates, free‑text, handwriting, and images—on any device.
                  </p>
                  <ul className="card-list">
                    <li>Specialty‑specific note templates</li>
                    <li>Integrated lab and radiology results</li>
                    <li>Care summaries to patients and referrers</li>
                  </ul>
                </article>
                <article className="card">
                  <h3>Billing &amp; third‑party payments</h3>
                  <p>
                    Handle self‑pay, corporate, and insurer billing in one place. Reduce rework with cleaner eligibility and package
                    management.
                  </p>
                  <ul className="card-list">
                    <li>Multi‑payer billing rules</li>
                    <li>Packages and prepayments</li>
                    <li>Integrated payment collection</li>
                  </ul>
                </article>
                <article className="card">
                  <h3>Inventory</h3>
                  <p>
                    Track medications, consumables, and retail items from purchase order to point of care with real‑time stock
                    visibility.
                  </p>
                  <ul className="card-list">
                    <li>Batch and expiry tracking</li>
                    <li>Stock thresholds and alerts</li>
                    <li>Multi‑location stock views</li>
                  </ul>
                </article>
                <article className="card">
                  <h3>Business intelligence</h3>
                  <p>
                    Turn your clinic data into decisions. Monitor volumes, revenue, payor mix, and operational KPIs at a glance.
                  </p>
                  <ul className="card-list">
                    <li>Out‑of‑the‑box performance dashboards</li>
                    <li>Exportable reports for finance teams</li>
                    <li>Drill‑downs by provider and location</li>
                  </ul>
                </article>
                <article className="card">
                  <h3>Custom analytics</h3>
                  <p>
                    Answer questions unique to your practice with tailored dashboards and visualizations, powered by your own data.
                  </p>
                  <ul className="card-list">
                    <li>Custom KPI and cohort definitions</li>
                    <li>Role‑based data access</li>
                    <li>Support from our analytics team</li>
                  </ul>
                </article>
              </div>
            </div>
          </section>

          <section className="section section-muted" id="learn">
            <div className="container grid grid-2">
              <div>
                <header className="section-header align-left">
                  <h2>Learn how modern clinics scale with Nybotech MediOS.</h2>
                  <p>
                    Explore playbooks, customer stories, and whitepapers on running a digital, contactless clinic and growing
                    multi‑site practices.
                  </p>
                </header>
                <ul className="resource-list">
                  <li>
                    <h3>The collaborative specialist clinic</h3>
                    <p>Design workflows that connect specialists, referrers, and patients across the full care journey.</p>
                  </li>
                  <li>
                    <h3>Run a contactless clinic</h3>
                    <p>From pre‑visit forms to payments, see how to remove paper and clipboards from your front desk.</p>
                  </li>
                  <li>
                    <h3>Scale from one site to many</h3>
                    <p>Standardize processes, data, and reporting as you grow your footprint.</p>
                  </li>
                </ul>
                <button className="btn btn-ghost">View all resources</button>
              </div>
              <aside className="card highlight-card">
                <p className="eyebrow">Customer spotlight</p>
                <h3>“We automated the work of a full‑time administrator.”</h3>
                <p>
                  “Online booking, automated reminders, and digital registration cut our phone calls in half. Our doctors spend more
                  time with patients and less time chasing paperwork.”
                </p>
                <p className="highlight-meta">Operations lead, multi‑disciplinary clinic, Singapore</p>
              </aside>
            </div>
          </section>

          <section className="section" id="demo">
            <div className="container grid grid-2">
              <div>
                <header className="section-header align-left">
                  <h2>Upgrade from clinic software to a clinic operating system.</h2>
                  <p>
                    See how Nybotech MediOS can fit your workflows in a 30‑minute conversation with our team. No hard
                    sell—just a guided tour and answers to your questions.
                  </p>
                </header>
                <ul className="checklist">
                  <li>Tailored walkthrough for your practice type</li>
                  <li>Configuration and migration guidance</li>
                  <li>Security, compliance, and hosting overview</li>
                </ul>
              </div>
              <form className="card demo-form" id="demo-form">
                <h3>Book a demo</h3>
                <div className="form-grid">
                  <label className="form-field">
                    <span>Full name</span>
                    <input type="text" name="name" required />
                  </label>
                  <label className="form-field">
                    <span>Work email</span>
                    <input type="email" name="email" required />
                  </label>
                  <label className="form-field">
                    <span>Clinic name</span>
                    <input type="text" name="clinic" required />
                  </label>
                  <label className="form-field">
                    <span>Country</span>
                    <select name="country" required>
                      <option value="">Select…</option>
                      <option>Singapore</option>
                      <option>Australia</option>
                      <option>Malaysia</option>
                      <option>Hong Kong</option>
                      <option>Philippines</option>
                      <option>Other</option>
                    </select>
                  </label>
                  <label className="form-field form-field-full">
                    <span>Practice type</span>
                    <select name="practiceType" required>
                      <option value="">Select…</option>
                      <option>Specialist</option>
                      <option>GP / Family Medicine</option>
                      <option>Dental</option>
                      <option>Allied Health</option>
                      <option>Aesthetic</option>
                      <option>Group / Network</option>
                    </select>
                  </label>
                  <label className="form-field form-field-full">
                    <span>What would you like to improve?</span>
                    <textarea name="message" rows={3} placeholder="Tell us a bit about your clinic and goals." />
                  </label>
                </div>
                <button className="btn btn-primary btn-full" type="submit">
                  Submit request
                </button>
                <p className="form-note">We&apos;ll respond within one business day.</p>
              </form>
            </div>
          </section>

          <section className="section section-muted" id="contact">
            <div className="container contact-grid">
              <div>
                <header className="section-header align-left">
                  <h2>Talk to our team.</h2>
                  <p>Share a bit about your clinic and we&apos;ll connect you with a product specialist in your region.</p>
                </header>
                <div className="contact-columns">
                  <div className="contact-column">
                    <h3>Phone</h3>
                    <p>
                      <a href="tel:+601122092680">+60 11-2209 2680</a>
                    </p>
                  </div>
                  <div className="contact-column">
                    <h3>Email</h3>
                    <p>
                      <a href="mailto:contact@nybotech.cloud">contact@nybotech.cloud</a>
                    </p>
                  </div>
                </div>
              </div>
              <aside>
                <div className="card compact-card">
                  <p className="eyebrow">Head office</p>
                  <p>Nybotech MediOS</p>
                  <p>Malaysia</p>
                </div>
              </aside>
            </div>
          </section>
        </main>

        <footer className="site-footer">
          <div className="container footer-inner">
            <p>
              © <span id="year">{new Date().getFullYear()}</span> Nybotech Sdn Bhd. All rights reserved.
            </p>
            <nav className="footer-nav" aria-label="Footer navigation">
              <a href="#top">Back to top</a>
              <a href="#" aria-disabled="true">
                Privacy
              </a>
              <a href="#" aria-disabled="true">
                Terms
              </a>
            </nav>
          </div>
        </footer>
      </body>
    </>
  );
}

