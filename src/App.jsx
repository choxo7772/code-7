
import { useEffect, useState } from "react";

function getRoute() {
  if (typeof window === "undefined") return "/";
  const h = window.location.hash || "";
  const path = h.replace(/^#/, "");
  return path || "/";
}

function Logo({ className = "h-9 w-9" }) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-label="Sans Pareil Software logo" role="img">
      <defs>
        <linearGradient id="g" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stopColor="#6366F1"/>
          <stop offset="100%" stopColor="#0EA5E9"/>
        </linearGradient>
      </defs>
      <rect x="2" y="2" width="60" height="60" rx="16" fill="url(#g)"/>
      <rect x="16" y="22" width="32" height="6" rx="3" fill="#fff" opacity="0.92"/>
      <rect x="16" y="36" width="32" height="6" rx="3" fill="#fff" opacity="0.92"/>
      <rect x="18" y="18" width="6" height="28" rx="3" transform="rotate(30 21 32)" fill="#fff"/>
    </svg>
  );
}

function CaseIllustration({ variant }) {
  const common = (
    <>
      <defs>
        <linearGradient id="bg" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stopColor="#ffffff"/>
          <stop offset="100%" stopColor="#f4f4f5"/>
        </linearGradient>
      </defs>
      <rect x="0.5" y="0.5" width="255" height="127" rx="14" fill="url(#bg)" stroke="#e5e7eb"/>
    </>
  );
  if (variant === "claims") {
    return (
      <svg viewBox="0 0 256 128" className="w-full h-32">
        {common}
        <rect x="18" y="18" width="72" height="92" rx="10" fill="#111827"/>
        <rect x="34" y="36" width="40" height="8" rx="4" fill="#ffffff" opacity="0.9"/>
        <rect x="34" y="52" width="28" height="6" rx="3" fill="#9ca3af"/>
        <rect x="34" y="64" width="28" height="6" rx="3" fill="#9ca3af"/>
        <rect x="104" y="22" width="132" height="16" rx="6" fill="#e5e7eb"/>
        <rect x="104" y="46" width="92" height="10" rx="5" fill="#d1d5db"/>
        <rect x="104" y="62" width="72" height="10" rx="5" fill="#d1d5db"/>
        <rect x="96" y="78" width="148" height="34" rx="8" fill="#111827"/>
        <text x="170" y="100" fontSize="12" fill="#fff" fontWeight="600" textAnchor="middle">HIPAA‑Ready Workflows</text>
        <circle cx="206" cy="34" r="12" fill="#10b981"/>
        <path d="M200 34 l5 5 8-10" stroke="#fff" strokeWidth="3" fill="none" strokeLinecap="round"/>
      </svg>
    );
  }
  if (variant === "fintech") {
    return (
      <svg viewBox="0 0 256 128" className="w-full h-32">
        {common}
        <rect x="20" y="24" width="216" height="80" rx="10" fill="#111827"/>
        <rect x="32" y="36" width="72" height="12" rx="6" fill="#06b6d4"/>
        <rect x="32" y="56" width="184" height="10" rx="5" fill="#52525b"/>
        <rect x="32" y="74" width="124" height="10" rx="5" fill="#52525b"/>
        <circle cx="200" cy="40" r="10" fill="#10b981"/>
        <path d="M194 40 l5 5 8-10" stroke="#fff" strokeWidth="3" fill="none" strokeLinecap="round"/>
        <rect x="160" y="86" width="64" height="12" rx="6" fill="#22c55e"/>
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 256 128" className="w-full h-32">
      {common}
      <rect x="20" y="20" width="120" height="88" rx="10" fill="#111827"/>
      <rect x="36" y="34" width="88" height="16" rx="8" fill="#e5e7eb"/>
      <rect x="36" y="58" width="88" height="8" rx="4" fill="#9ca3af"/>
      <rect x="36" y="72" width="72" height="8" rx="4" fill="#9ca3af"/>
      <rect x="154" y="40" width="82" height="48" rx="10" fill="#22c55e"/>
      <path d="M162 64 h52" stroke="#fff" strokeWidth="4"/>
      <path d="M162 76 h36" stroke="#fff" strokeWidth="4"/>
      <path d="M162 52 h60" stroke="#fff" strokeWidth="4"/>
    </svg>
  );
}

const features = [
  { title: "Custom Software Development", desc: "Design, build, and ship secure, scalable applications tailored to your business goals." },
  { title: "Web & Mobile Apps", desc: "Modern, responsive web platforms and cross‑platform mobile apps with great UX." },
  { title: "Cloud & DevOps", desc: "Cloud architecture, CI/CD, performance tuning, and cost optimization." },
  { title: "Integrations & APIs", desc: "Connect CRMs, ERPs, payments, analytics, and third‑party services with robust APIs." },
  { title: "Data & Analytics", desc: "Dashboards, ETL pipelines, and ML‑ready data foundations for decision‑making." },
  { title: "Maintenance & Support", desc: "SLAs, monitoring, incident response, and continuous improvements after launch." },
];

const industries = [
  { name: "Healthcare" }, { name: "Financial Services" }, { name: "E‑commerce" },
  { name: "Real Estate" }, { name: "Logistics" },
];

const caseStudies = [
  { title: "Claims Portal Modernization", result: "50% faster processing, HIPAA‑ready workflows.", variant: "claims" },
  { title: "Fintech Onboarding API", result: "Reduced KYC friction; onboarding time cut by 35%.", variant: "fintech" },
  { title: "Headless Commerce Revamp", result: "+22% conversion after performance overhaul.", variant: "commerce" },
];

const OWNER_PHOTO = "/sans-pareil-owner-320.png";
const LAST_UPDATED = "6/21/2025";

function MainPage() {
  const scrollTo = (id) => { const el = document.getElementById(id); if (el) el.scrollIntoView({ behavior: "smooth", block: "start" }); };
  const onSubmit = (e) => {
    e.preventDefault();
    const f = e.currentTarget;
    const subject = encodeURIComponent(`Project inquiry from ${f.name.value}`);
    const body = encodeURIComponent(
`Name: ${f.name.value}
Email: ${f.email.value}
Company: ${f.company.value}
Project Type: ${f.project.value}
Budget: ${f.budget.value}
Timeline: ${f.timeline.value}

Message:
${f.message.value}`
    );
    window.location.href = `mailto:info@sanspareilsoftware.com?subject=${subject}&body=${body}`;
  };
  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900">
      <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/70 bg-white/60 border-b border-neutral-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3"><Logo className="h-9 w-9" /><span className="font-semibold tracking-tight">Sans Pareil Software</span></div>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            {[
              ["Services","services"],["Industries","industries"],["Work","work"],
              ["About","about"],["Trust","trust"],["Contact","contact"]
            ].map(([label,id]) => (
              <button key={id} onClick={() => scrollTo(id)} className="hover:text-indigo-600 transition-colors">{label}</button>
            ))}
          </nav>
          <div className="hidden md:flex items-center gap-4">
            <a href="#/privacy" className="text-sm hover:text-indigo-600">Privacy</a>
            <a href="#/terms" className="text-sm hover:text-indigo-600">Terms</a>
            <a href="#/security" className="text-sm hover:text-indigo-600">Security</a>
            <button onClick={() => scrollTo("contact")} className="rounded-2xl px-4 py-2 text-sm font-medium bg-neutral-900 text-white shadow hover:opacity-90">Request a Proposal</button>
          </div>
        </div>
      </header>

      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-sky-50 to-white" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight">Software that stands <span className="text-indigo-600">without equal</span></h1>
              <p className="mt-5 text-neutral-700 max-w-xl">We design, build, and maintain secure, scalable software for startups and growing companies. From idea to launch and beyond.</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <button onClick={() => scrollTo("contact")} className="rounded-2xl px-5 py-3 bg-neutral-900 text-white shadow-lg hover:opacity-90">Start Your Project</button>
                <button onClick={() => scrollTo("services")} className="rounded-2xl px-5 py-3 border border-neutral-300 hover:border-neutral-400">Explore Services</button>
              </div>
              <dl className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm">
                <div className="rounded-2xl bg-white shadow p-4"><dt className="text-neutral-500">Registered</dt><dd className="font-medium">Florida LLC · 2023</dd></div>
                <div className="rounded-2xl bg-white shadow p-4"><dt className="text-neutral-500">Company No.</dt><dd className="font-medium">L23000347649</dd></div>
                <div className="rounded-2xl bg-white shadow p-4"><dt className="text-neutral-500">Location</dt><dd className="font-medium">Parkland, FL</dd></div>
                <div className="rounded-2xl bg-white shadow p-4"><dt className="text-neutral-500">Phone</dt><dd className="font-medium"><a href="tel:+17744367376" className="hover:underline">(774) 436‑7376</a></dd></div>
              </dl>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] rounded-3xl bg-gradient-to-br from-white to-neutral-100 border border-neutral-200 shadow-xl p-6">
                <div className="grid grid-cols-2 gap-4 h-full">
                  {features.slice(0,4).map((f,i)=>(
                    <div key={i} className="rounded-2xl border border-neutral-200 bg-white p-4 shadow-sm">
                      <div className="h-10 w-10 rounded-xl bg-neutral-900/90 text-white grid place-items-center font-semibold">{i+1}</div>
                      <h3 className="mt-4 font-medium">{f.title}</h3>
                      <p className="text-sm text-neutral-600 mt-1">{f.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
              <p className="text-xs text-neutral-500 mt-3">We sign NDAs on request. HIPAA/PCI considerations supported for appropriate projects.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex items-end justify-between gap-6">
          <div><h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">Services</h2><p className="text-neutral-600 mt-2 max-w-2xl">End‑to‑end delivery from discovery and design to engineering, QA, and post‑launch support.</p></div>
          <button onClick={() => scrollTo("contact")} className="hidden sm:inline-flex rounded-2xl px-4 py-2 border border-neutral-300 hover:border-neutral-400">Request a Proposal</button>
        </div>
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f,i)=>(
            <div key={i} className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="font-medium">{f.title}</h3><p className="text-sm text-neutral-600 mt-2">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="industries" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">Industries</h2>
        <p className="text-neutral-600 mt-2 max-w-2xl">We focus on regulated and revenue‑critical domains where security, reliability, and compliance matter.</p>
        <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {industries.map((i,idx)=>(<div key={idx} className="rounded-2xl border border-neutral-200 bg-white p-5 text-center shadow-sm"><div className="text-lg font-medium">{i.name}</div></div>))}
        </div>
      </section>

      <section id="work" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">Selected Work</h2>
        <p className="text-neutral-600 mt-2 max-w-2xl">Representative projects and outcomes. Full references available on request.</p>
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {caseStudies.map((c,i)=>(
            <article key={i} className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
              <CaseIllustration variant={c.variant} />
              <h3 className="mt-4 font-medium">{c.title}</h3>
              <p className="text-sm text-neutral-600 mt-2">{c.result}</p>
              <p className="text-xs text-neutral-500 mt-4">Images are illustrative; client details anonymized for confidentiality.</p>
            </article>
          ))}
        </div>
      </section>

      <section id="about" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2">
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">About Sans Pareil Software LLC</h2>
            <p className="text-neutral-700 mt-3 max-w-3xl">We are a Florida‑registered software engineering studio based in Parkland, FL. Our mission is simple: deliver reliable software that drives measurable business outcomes. We work as an extension of your team—prioritizing clarity, velocity, and long‑term maintainability.</p>
            <dl className="mt-6 grid sm:grid-cols-2 gap-4 text-sm">
              <div className="rounded-2xl bg-white shadow p-4 border border-neutral-200"><dt className="text-neutral-500">Address</dt><dd className="font-medium">10950 Shore St, Parkland, FL 33076</dd></div>
              <div className="rounded-2xl bg-white shadow p-4 border border-neutral-200"><dt className="text-neutral-500">Company No.</dt><dd className="font-medium">L23000347649 (Florida)</dd></div>
            </dl>
          </div>
          <aside className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
            <div className="flex items-center gap-4">
              <img src={OWNER_PHOTO} alt="Felipe Mejia Perez portrait" className="h-24 w-24 sm:h-28 sm:w-28 rounded-full object-cover ring-2 ring-white shadow-lg"/>
              <div><h3 className="font-medium">Felipe Mejia Perez</h3><p className="text-sm text-neutral-600">Founder & Lead Engineer</p></div>
            </div>
            <ul className="mt-4 grid grid-cols-1 gap-2 text-sm text-neutral-700 list-disc list-inside">
              <li>Full‑stack delivery: from architecture to launch</li>
              <li>Focus on reliability, security, and maintainability</li>
              <li>Based in Parkland, FL</li>
            </ul>
          </aside>
        </div>
      </section>

      <section id="trust" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">Trust, Security & Compliance</h2>
        <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            ["Transparent Contracts","Engagements via clear SOWs and NDAs. Work‑for‑hire and IP assignments available."],
            ["Security First","Least‑privilege access, code reviews, and secure SDLC practices as standard."],
            ["Data Privacy","We collect only what’s necessary. We never request sensitive personal data (e.g., SSNs) through this site."],
            ["Compliance Minded","Experience with HIPAA/PCI considerations; we align to your controls and vendors."],
            ["Uptime & Monitoring","We implement logging, metrics, alerts, and on‑call where appropriate."],
            ["Documentation","Architecture briefs, runbooks, and handover docs to keep teams aligned."]
          ].map(([t,d],i)=>(
            <div key={i} className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm"><h3 className="font-medium">{t}</h3><p className="text-sm text-neutral-600 mt-2">{d}</p></div>
          ))}
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-2 gap-10">
          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">Let’s talk about your project</h2>
            <p className="text-neutral-700 mt-2">Tell us a bit about your goals, and we’ll follow up with next steps.</p>
            <form onSubmit={onSubmit} className="mt-6 grid grid-cols-1 gap-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <input name="name" required placeholder="Your name" className="rounded-2xl border border-neutral-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-neutral-900" />
                <input type="email" name="email" required placeholder="Email" className="rounded-2xl border border-neutral-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-neutral-900" />
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <input name="company" placeholder="Company (optional)" className="rounded-2xl border border-neutral-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-neutral-900" />
                <select name="project" className="rounded-2xl border border-neutral-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-neutral-900">
                  <option>Custom Software</option><option>Web App</option><option>Mobile App</option><option>API/Integration</option><option>Cloud/DevOps</option><option>Other</option>
                </select>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <select name="budget" className="rounded-2xl border border-neutral-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-neutral-900">
                  <option>Budget: $5k–$15k</option><option>Budget: $15k–$50k</option><option>Budget: $50k–$150k</option><option>Budget: $150k+</option>
                </select>
                <select name="timeline" className="rounded-2xl border border-neutral-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-neutral-900">
                  <option>Timeline: ASAP</option><option>Timeline: 1–3 months</option><option>Timeline: 3–6 months</option><option>Timeline: Flexible</option>
                </select>
              </div>
              <textarea name="message" rows={5} placeholder="Project details" className="rounded-2xl border border-neutral-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-neutral-900" />
              <button type="submit" className="rounded-2xl px-5 py-3 bg-neutral-900 text-white shadow hover:opacity-90 w-fit">Send Inquiry</button>
            </form>
          </div>
          <aside className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
            <h3 className="font-medium">Business details</h3>
            <dl className="mt-4 space-y-3 text-sm">
              <div className="flex items-start gap-3"><span className="min-w-24 text-neutral-500">Company</span><span className="font-medium">Sans Pareil Software LLC</span></div>
              <div className="flex items-start gap-3"><span className="min-w-24 text-neutral-500">Address</span><span className="font-medium">10950 Shore St, Parkland, FL 33076</span></div>
              <div className="flex items-start gap-3"><span className="min-w-24 text-neutral-500">Phone</span><a href="tel:+17744367376" className="font-medium hover:underline">(774) 436‑7376</a></div>
              <div className="flex items-start gap-3"><span className="min-w-24 text-neutral-500">Email</span><a href="mailto:info@sanspareilsoftware.com" className="font-medium hover:underline">info@sanspareilsoftware.com</a></div>
              <div className="flex items-start gap-3"><span className="min-w-24 text-neutral-500">Reg.</span><span className="font-medium">Florida LLC · Company No. L23000347649</span></div>
            </dl>
            <p className="text-xs text-neutral-500 mt-4">For security, please do not send passwords or sensitive personal data in the form or over email.</p>
          </aside>
        </div>
      </section>

      <footer className="border-t border-neutral-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 grid md:grid-cols-3 gap-8">
          <div><div className="flex items-center gap-3"><Logo className="h-8 w-8" /><span className="font-semibold">Sans Pareil Software</span></div><p className="text-sm text-neutral-600 mt-3 max-w-sm">We build dependable software products and platforms. Based in Parkland, Florida.</p></div>
          <div className="text-sm"><div className="font-medium">Company</div><ul className="mt-3 space-y-2 text-neutral-600">
            <li><button onClick={() => scrollTo("services")} className="hover:underline">Services</button></li>
            <li><button onClick={() => scrollTo("work")} className="hover:underline">Work</button></li>
            <li><button onClick={() => scrollTo("about")} className="hover:underline">About</button></li>
            <li><button onClick={() => scrollTo("contact")} className="hover:underline">Contact</button></li></ul></div>
          <div className="text-sm"><div className="font-medium">Legal</div><ul className="mt-3 space-y-2 text-neutral-600">
            <li><a href="#/privacy" className="hover:underline">Privacy Policy</a></li>
            <li><a href="#/terms" className="hover:underline">Terms of Service</a></li>
            <li><a href="#/security" className="hover:underline">Security</a></li></ul></div>
        </div>
        <div className="border-t border-neutral-200 py-6 text-center text-xs text-neutral-500">© {new Date().getFullYear()} Sans Pareil Software LLC. All rights reserved.</div>
      </footer>
      <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="fixed bottom-6 right-6 rounded-full h-12 w-12 grid place-items-center shadow-lg bg-neutral-900 text-white hover:opacity-90" aria-label="Back to top">↑</button>
    </div>
  );
}

function LegalPage({ type }) {
  const titles = { privacy: "Privacy Policy", terms: "Terms of Service", security: "Security Overview" };
  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900">
      <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/70 bg-white/60 border-b border-neutral-200">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3"><Logo className="h-8 w-8" /><span className="font-semibold tracking-tight">Sans Pareil Software</span></div>
          <nav className="flex items-center gap-4 text-sm">
            <a href="#/" className="hover:text-indigo-600">Home</a>
            <a href="#/privacy" className={`hover:text-indigo-600 ${type==='privacy'?'font-medium text-neutral-900':''}`}>Privacy</a>
            <a href="#/terms" className={`hover:text-indigo-600 ${type==='terms'?'font-medium text-neutral-900':''}`}>Terms</a>
            <a href="#/security" className={`hover:text-indigo-600 ${type==='security'?'font-medium text-neutral-900':''}`}>Security</a>
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-14">
        <h1 className="text-3xl font-semibold tracking-tight">{titles[type]}</h1>
        {type === 'privacy' && (
          <>
            <p className="text-sm text-neutral-500 mt-1">Last updated: {LAST_UPDATED}</p>
            <div className="prose prose-neutral max-w-none mt-6">
              <p>Sans Pareil Software LLC (“we”, “us”, “our”) operates this website to receive business inquiries. We collect only what’s needed and do not sell personal information.</p>
              <h3>Scope</h3>
              <p>This Policy covers information processed via this website and our related communications. It does not replace the confidentiality or data‑processing terms in a Statement of Work (“SOW”).</p>
              <h3>Information We Collect</h3>
              <ul>
                <li><strong>Contact details</strong> — name, email, phone, company; and <strong>message contents</strong> you submit.</li>
                <li><strong>Business information</strong> — project scope, requirements, and documents you choose to share.</li>
                <li><strong>Usage data</strong> — aggregate analytics (pages viewed, referrers). Cookies are limited to essential operations and analytics.</li>
              </ul>
              <h3>How We Use Information</h3>
              <ul>
                <li>To respond to inquiries, prepare proposals, and deliver services under an SOW.</li>
                <li>To operate, secure, and improve the site and our services.</li>
                <li>To comply with law and enforce agreements.</li>
              </ul>
              <h3>Legal Bases (EEA/UK)</h3>
              <p>Contract (service delivery), legitimate interests (security, improvement), consent (where required), and legal obligation.</p>
              <h3>Sharing</h3>
              <p>Service providers under confidentiality/data‑processing terms; legal requests; or a business transaction. <strong>We do not sell or “share” personal information for cross‑context behavioral advertising.</strong></p>
              <h3>Retention</h3>
              <p>Inquiry records are retained only as long as necessary for proposals, services, security, and legal/accounting purposes.</p>
              <h3>Your Rights</h3>
              <p>Depending on your region, you may request access, correction, deletion, or restriction. Email <a href="mailto:info@sanspareilsoftware.com">info@sanspareilsoftware.com</a>. We’ll respond as required by applicable law.</p>
              <h3>International Transfers</h3>
              <p>Data may be processed in the United States and other countries with appropriate safeguards.</p>
              <h3>Children</h3>
              <p>This site is not intended for children under 13; we do not knowingly collect children’s data.</p>
              <h3>Contact</h3>
              <p>Sans Pareil Software LLC · 10950 Shore St, Parkland, FL 33076 · (774) 436‑7376 · <a href="mailto:info@sanspareilsoftware.com">info@sanspareilsoftware.com</a></p>
              <p className="text-xs text-neutral-500">This policy is informational and not legal advice.</p>
            </div>
          </>
        )}
        {type === 'terms' && (
          <>
            <p className="text-sm text-neutral-500 mt-1">Last updated: {LAST_UPDATED}</p>
            <div className="prose prose-neutral max-w-none mt-6">
              <p>These Terms govern use of this website. If you engage us for services, the mutually executed SOW or master agreement governs that work; if there is a conflict, the SOW controls.</p>
              <h3>Acceptable Use</h3>
              <ul>
                <li>Don’t attempt to disrupt, probe, or gain unauthorized access to the site or related systems.</li>
                <li>Provide accurate information in inquiries and don’t submit unlawful content.</li>
                <li>No legal, medical, or financial advice is provided by this site.</li>
              </ul>
              <h3>Engagements & Payment</h3>
              <p>Scope, deliverables, timelines, and fees are defined in the SOW. Invoices are due as stated therein.</p>
              <h3>Confidentiality & IP</h3>
              <p>Each party protects the other’s confidential information. You own your data/materials. We retain pre‑existing tools/know‑how; the SOW grants you rights necessary to use deliverables.</p>
              <h3>Third‑Party Services & Open Source</h3>
              <p>Deliverables may integrate third‑party services or open‑source components under their own licenses and terms.</p>
              <h3>Warranty Disclaimer</h3>
              <p>The site is provided “as is” and “as available.” We disclaim all warranties to the maximum extent permitted by law.</p>
              <h3>Limitation of Liability</h3>
              <p>To the maximum extent permitted by law, neither party is liable for indirect or consequential damages. Our total liability related to the <em>site</em> will not exceed <strong>$100</strong>. Project‑specific limits may be set in the SOW.</p>
              <h3>Governing Law & Venue</h3>
              <p>Florida law governs; exclusive venue is Broward County, Florida.</p>
              <h3>Contact</h3>
              <p><a href="mailto:info@sanspareilsoftware.com">info@sanspareilsoftware.com</a></p>
              <p className="text-xs text-neutral-500">These Terms are informational and not legal advice.</p>
            </div>
          </>
        )}
        {type === 'security' && (
          <>
            <p className="text-sm text-neutral-500 mt-1">Last updated: {LAST_UPDATED}</p>
            <div className="prose prose-neutral max-w-none mt-6">
              <p>We design for reliability and security by default and align our approach to your requirements. Security controls may vary by project and hosting platform.</p>
              <h3>Security Program</h3>
              <ul>
                <li><strong>Encryption</strong> — TLS in transit; encryption at rest via our cloud/database providers.</li>
                <li><strong>Access Control</strong> — role‑based access, least privilege, MFA for admin, audit logging where supported.</li>
                <li><strong>Secure SDLC</strong> — peer review, dependency scanning, key management, environment separation.</li>
                <li><strong>Vulnerability Management</strong> — patching cadence for dependencies and cloud services; risk‑based prioritization.</li>
                <li><strong>Monitoring</strong> — centralized logging/metrics with alerting on production systems as appropriate.</li>
                <li><strong>Backups & Continuity</strong> — periodic backups and restoration testing for managed data stores.</li>
                <li><strong>Incident Response</strong> — defined triage, containment, and customer notification as required.</li>
              </ul>
              <h3>Subprocessors</h3>
              <p>We use established cloud and analytics providers; a current list is available on request.</p>
              <h3>Responsible Disclosure</h3>
              <p>Report suspected vulnerabilities to <a href="mailto:info@sanspareilsoftware.com">info@sanspareilsoftware.com</a>. Please avoid public disclosure until remediation is confirmed.</p>
            </div>
          </>
        )}
      </main>

      <footer className="border-t border-neutral-200">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-8 flex items-center justify-between text-sm">
          <span className="text-neutral-500">© {new Date().getFullYear()} Sans Pareil Software LLC</span>
          <a href="#/" className="hover:underline">← Back to Home</a>
        </div>
      </footer>
    </div>
  );
}

export default function Site() {
  const [route, setRoute] = useState(getRoute());
  useEffect(() => { const onHash = () => setRoute(getRoute()); window.addEventListener("hashchange", onHash); return () => window.removeEventListener("hashchange", onHash); }, []);
  if (route === "/privacy") return <LegalPage type="privacy" />;
  if (route === "/terms") return <LegalPage type="terms" />;
  if (route === "/security") return <LegalPage type="security" />;
  return <MainPage />;
}
