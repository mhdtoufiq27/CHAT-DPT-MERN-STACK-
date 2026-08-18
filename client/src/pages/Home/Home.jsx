import { useState } from "react";
import {
  MessageSquare,
  Code2,
  Image as ImageIcon,
  FileText,
  Workflow,
  Sparkles,
  ArrowRight,
  Check,
  Menu,
  X,
  Zap,
  Send,
} from "lucide-react";

const C = {
  bg: "#05070D",
  panel: "#0B0F1A",
  border: "rgba(255,255,255,0.08)",
  text: "#F5F6FA",
  sub: "#9CA3B8",
  violet: "#8B5CF6",
  fuchsia: "#D946EF",
  cyan: "#22D3EE",
};

const grad = "linear-gradient(90deg, #8B5CF6 0%, #D946EF 50%, #22D3EE 100%)";

function GradientText({ children, style }) {
  return (
    <span
      style={{
        backgroundImage: grad,
        WebkitBackgroundClip: "text",
        backgroundClip: "text",
        color: "transparent",
        ...style,
      }}
    >
      {children}
    </span>
  );
}

function Nav() {
  const [open, setOpen] = useState(false);
  const links = ["Product", "Features", "Pricing", "Docs"];
  return (
    <header className="sticky top-0 z-50" style={{ backdropFilter: "blur(16px)", background: "rgba(5,7,13,0.75)", borderBottom: `1px solid ${C.border}` }}>
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 md:px-8" style={{ height: 72 }}>
        <div className="flex items-center gap-2">
          <div className="flex items-center justify-center rounded-xl" style={{ width: 32, height: 32, background: grad }}>
            <Sparkles size={17} color="#fff" />
          </div>
          <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: 19, color: C.text }}>
            VEXIS PRO
          </span>
        </div>

        <nav className="hidden md:flex items-center gap-9">
          {links.map((l) => (
            <a key={l} href="#" style={{ fontFamily: "'Inter', sans-serif", fontSize: 14, color: C.sub }} className="hover:text-white transition">
              {l}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-4">
         <a
  href="#"
  className="inline-flex items-center gap-2 rounded-lg font-semibold transition hover:opacity-90"
  style={{
    background: C.text,
    color: "#05070D",
    padding: "10px 18px",
    fontFamily: "'Inter', sans-serif",
    fontSize: 14,
  }}
>
  Get started free
</a>
        </div>

        <button className="md:hidden" onClick={() => setOpen(!open)} style={{ color: C.text }}>
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
      {open && (
        <div className="md:hidden px-6 pb-6 flex flex-col gap-4" style={{ borderTop: `1px solid ${C.border}` }}>
          {links.map((l) => (
            <a key={l} href="#" style={{ color: C.sub, fontFamily: "'Inter', sans-serif", paddingTop: 12 }}>
              {l}
            </a>
          ))}
          <a href="#" style={{ color: C.text, fontFamily: "'Inter', sans-serif", fontWeight: 600 }}>
            Get started free
          </a>
        </div>
      )}
    </header>
  );
}

function Orbs() {
  return (
    <>
      <div className="absolute rounded-full pointer-events-none" style={{ width: 600, height: 600, top: -220, left: -200, background: C.violet, opacity: 0.22, filter: "blur(140px)" }} />
      <div className="absolute rounded-full pointer-events-none" style={{ width: 500, height: 500, top: -100, right: -180, background: C.cyan, opacity: 0.16, filter: "blur(140px)" }} />
      <div className="absolute rounded-full pointer-events-none" style={{ width: 400, height: 400, top: 300, left: "40%", background: C.fuchsia, opacity: 0.12, filter: "blur(160px)" }} />
    </>
  );
}

function ChatMock() {
  return (
    <div className="rounded-2xl overflow-hidden" style={{ background: C.panel, border: `1px solid ${C.border}`, boxShadow: "0 40px 100px -20px rgba(139,92,246,0.35)" }}>
      <div className="flex items-center gap-2 px-5" style={{ height: 46, borderBottom: `1px solid ${C.border}` }}>
        <span style={{ width: 10, height: 10, borderRadius: 999, background: "#FF5F57" }} />
        <span style={{ width: 10, height: 10, borderRadius: 999, background: "#FEBC2E" }} />
        <span style={{ width: 10, height: 10, borderRadius: 999, background: "#28C840" }} />
        <span style={{ marginLeft: 12, fontFamily: "'Inter', sans-serif", fontSize: 12, color: C.sub }}>
          vexispro.ai — new chat
        </span>
      </div>

      <div className="p-6 space-y-4">
        <div className="flex justify-end">
          <div className="rounded-2xl rounded-tr-sm" style={{ background: "rgba(255,255,255,0.06)", padding: "12px 16px", maxWidth: "80%" }}>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 14, color: C.text }}>
              Build a pricing page and explain your component choices.
            </p>
          </div>
        </div>

        <div className="flex justify-start">
          <div className="rounded-2xl rounded-tl-sm" style={{ background: grad, padding: "12px 16px", maxWidth: "85%" }}>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 14, color: "#fff", lineHeight: 1.6 }}>
              Generating a 3-tier layout with a highlighted plan, responsive
              grid, and monthly/annual toggle...
            </p>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-2 pt-1">
          {["Pricing.jsx", "Toggle.jsx", "Card.jsx"].map((f) => (
            <div key={f} className="rounded-lg px-3 py-2" style={{ background: "rgba(255,255,255,0.04)", border: `1px solid ${C.border}` }}>
              <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, color: C.cyan }}>{f}</span>
            </div>
          ))}
        </div>

        <div className="flex items-center gap-2 rounded-xl px-4" style={{ height: 44, background: "rgba(255,255,255,0.04)", border: `1px solid ${C.border}`, marginTop: 8 }}>
          <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, color: C.sub, flex: 1 }}>
            Ask VEXIS PRO anything...
          </span>
          <Send size={15} color={C.sub} />
        </div>
      </div>
    </div>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <Orbs />
      <div className="relative max-w-7xl mx-auto px-6 md:px-8" style={{ paddingTop: 88, paddingBottom: 100 }}>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full" style={{ border: `1px solid ${C.border}`, background: "rgba(255,255,255,0.03)", padding: "6px 14px" }}>
              <Zap size={13} color={C.cyan} />
              <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, color: C.sub }}>
                Now with real-time document understanding
              </span>
            </div>

            <h1 style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: "clamp(38px, 5.4vw, 64px)", lineHeight: 1.08, color: C.text, marginTop: 24 }}>
              One AI assistant.
              <br />
              <GradientText>Every kind of work.</GradientText>
            </h1>

            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 17, lineHeight: 1.7, color: C.sub, marginTop: 22, maxWidth: 480 }}>
              Chat, write and debug code, generate images, read your
              documents, and automate the busywork — all from one assistant
              that actually keeps up.
            </p>

            <div className="flex flex-wrap items-center gap-4" style={{ marginTop: 34 }}>
              <a href="#" className="inline-flex items-center gap-2 rounded-xl font-semibold transition hover:opacity-90" style={{ background: grad, color: "#fff", padding: "15px 26px", fontFamily: "'Inter', sans-serif", fontSize: 15 }}>
                Get started free <ArrowRight size={17} />
              </a>
              <a href="#" className="inline-flex items-center gap-2 rounded-xl transition" style={{ border: `1px solid ${C.border}`, color: C.text, padding: "15px 26px", fontFamily: "'Inter', sans-serif", fontSize: 15 }}>
                Watch demo
              </a>
            </div>

            <div className="flex items-center gap-10" style={{ marginTop: 48 }}>
              {[["25K+", "Active users"], ["99.9%", "Accuracy"], ["24/7", "Availability"]].map(([n, l]) => (
                <div key={l}>
                  <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: 28, color: C.text }}>{n}</div>
                  <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, color: C.sub }}>{l}</div>
                </div>
              ))}
            </div>
          </div>

          <ChatMock />
        </div>
      </div>
    </section>
  );
}

function Logos() {
  const names = ["Nimbus", "Falcon", "Orbital", "Ledgerly", "Ampersand", "Vantage"];
  return (
    <section style={{ borderTop: `1px solid ${C.border}`, borderBottom: `1px solid ${C.border}` }}>
      <div className="max-w-7xl mx-auto px-6 md:px-8" style={{ paddingTop: 36, paddingBottom: 36 }}>
        <p className="text-center" style={{ fontFamily: "'Inter', sans-serif", fontSize: 12, color: C.sub, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 24 }}>
          Trusted by teams building the next generation of software
        </p>
        <div className="flex flex-wrap justify-center gap-x-12 gap-y-4">
          {names.map((n) => (
            <span key={n} style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600, fontSize: 18, color: "rgba(255,255,255,0.35)" }}>
              {n}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

const FEATURES = [
  { icon: MessageSquare, title: "Natural conversation", copy: "Fluid, context-aware chat that remembers what you told it ten messages ago.", big: true },
  { icon: Code2, title: "Code that ships", copy: "Full-stack code generation, debugging, and refactors across any language." },
  { icon: ImageIcon, title: "Image generation", copy: "Turn a prompt into a visual — mockups, art, product shots, in seconds." },
  { icon: FileText, title: "Document intelligence", copy: "Drop in a PDF or report; get the answer, not the whole document back." },
  { icon: Workflow, title: "Workflow automation", copy: "Chain steps together so VEXIS PRO finishes the task, not just starts it." },
];

function Features() {
  return (
    <section className="relative">
      <div className="max-w-7xl mx-auto px-6 md:px-8" style={{ paddingTop: 100, paddingBottom: 100 }}>
        <div className="max-w-2xl">
          <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, color: C.violet, fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase" }}>
            Capabilities
          </span>
          <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: "clamp(28px, 3.6vw, 44px)", color: C.text, marginTop: 12 }}>
            Built to handle the whole job.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-5" style={{ marginTop: 48 }}>
          {FEATURES.map((f) => (
            <div key={f.title} className={f.big ? "md:col-span-2" : ""} style={{ background: C.panel, border: `1px solid ${C.border}`, borderRadius: 20, padding: 28 }}>
              <div className="flex items-center justify-center rounded-xl" style={{ width: 44, height: 44, background: "rgba(255,255,255,0.04)", border: `1px solid ${C.border}` }}>
                <f.icon size={20} color={C.cyan} />
              </div>
              <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: 19, color: C.text, marginTop: 18 }}>
                {f.title}
              </h3>
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 14.5, color: C.sub, marginTop: 8, lineHeight: 1.6 }}>
                {f.copy}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonial() {
  return (
    <section style={{ borderTop: `1px solid ${C.border}`, borderBottom: `1px solid ${C.border}`, background: "rgba(255,255,255,0.015)" }}>
      <div className="max-w-4xl mx-auto px-6 md:px-8 text-center" style={{ paddingTop: 90, paddingBottom: 90 }}>
        <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 500, fontSize: "clamp(22px, 3vw, 32px)", color: C.text, lineHeight: 1.4 }}>
          "We replaced four separate tools with VEXIS PRO. Our team ships
          features in days that used to take weeks."
        </p>
        <div className="flex items-center justify-center gap-3" style={{ marginTop: 28 }}>
          <div className="rounded-full" style={{ width: 40, height: 40, background: grad }} />
          <div className="text-left">
            <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 14, fontWeight: 600, color: C.text }}>Maya Chen</div>
            <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, color: C.sub }}>Head of Engineering, Nimbus</div>
          </div>
        </div>
      </div>
    </section>
  );
}

const PLANS = [
  { name: "Free", price: "$0", copy: "For trying things out.", features: ["50 messages / day", "Basic chat & code", "Community support"] },
  { name: "Pro", price: "$20", copy: "For everyday work.", features: ["Unlimited messages", "Images & documents", "Priority response", "Workflow automation"], highlight: true },
  { name: "Team", price: "$45", copy: "For teams shipping together.", features: ["Everything in Pro", "Shared workspaces", "Admin controls", "SSO & audit logs"] },
];

function Pricing() {
  return (
    <section className="max-w-7xl mx-auto px-6 md:px-8" style={{ paddingTop: 100, paddingBottom: 100 }}>
      <div className="text-center max-w-xl mx-auto">
        <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, color: C.violet, fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase" }}>
          Pricing
        </span>
        <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: "clamp(28px, 3.6vw, 44px)", color: C.text, marginTop: 12 }}>
          Simple plans, no surprises.
        </h2>
      </div>

      <div className="grid md:grid-cols-3 gap-6" style={{ marginTop: 56 }}>
        {PLANS.map((p) => (
          <div key={p.name} className="rounded-2xl relative" style={{ padding: 32, background: p.highlight ? "rgba(139,92,246,0.08)" : C.panel, border: p.highlight ? `1px solid ${C.violet}` : `1px solid ${C.border}` }}>
            {p.highlight && (
              <span className="absolute rounded-full" style={{ top: -12, right: 24, background: grad, color: "#fff", fontSize: 11, fontFamily: "'Inter', sans-serif", fontWeight: 600, padding: "5px 12px" }}>
                Most popular
              </span>
            )}
            <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: 20, color: C.text }}>{p.name}</h3>
            <div style={{ marginTop: 10 }}>
              <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: 40, color: C.text }}>{p.price}</span>
              <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 14, color: C.sub }}>/mo</span>
            </div>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 14, color: C.sub, marginTop: 6 }}>{p.copy}</p>

            <div style={{ marginTop: 22, display: "flex", flexDirection: "column", gap: 12 }}>
              {p.features.map((f) => (
                <div key={f} className="flex items-center gap-2">
                  <Check size={15} color={C.cyan} />
                  <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 14, color: C.sub }}>{f}</span>
                </div>
              ))}
            </div>

            <a href="#" className="block text-center rounded-xl transition hover:opacity-90" style={{ marginTop: 28, padding: "12px 0", background: p.highlight ? grad : "rgba(255,255,255,0.06)", color: p.highlight ? "#fff" : C.text, fontFamily: "'Inter', sans-serif", fontSize: 14, fontWeight: 600 }}>
              {p.name === "Free" ? "Start free" : `Choose ${p.name}`}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="max-w-7xl mx-auto px-6 md:px-8" style={{ paddingBottom: 100 }}>
      <div className="rounded-3xl text-center relative overflow-hidden" style={{ padding: "72px 24px", background: C.panel, border: `1px solid ${C.border}` }}>
        <div className="absolute rounded-full pointer-events-none" style={{ width: 500, height: 500, top: -250, left: "50%", transform: "translateX(-50%)", background: C.violet, opacity: 0.2, filter: "blur(140px)" }} />
        <div className="relative">
          <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: "clamp(28px, 4vw, 44px)", color: C.text }}>
            Start building with <GradientText>VEXIS PRO</GradientText> today.
          </h2>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 16, color: C.sub, marginTop: 14 }}>
            No credit card required. Free forever plan included.
          </p>
          <a href="#" className="inline-flex items-center gap-2 rounded-xl font-semibold transition hover:opacity-90" style={{ marginTop: 30, background: grad, color: "#fff", padding: "16px 30px", fontFamily: "'Inter', sans-serif", fontSize: 15 }}>
            Get started free <ArrowRight size={17} />
          </a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  const cols = [
    { title: "Product", links: ["Features", "Pricing", "Changelog"] },
    { title: "Company", links: ["About", "Careers", "Blog"] },
    { title: "Resources", links: ["Docs", "API", "Support"] },
  ];
  return (
    <footer style={{ borderTop: `1px solid ${C.border}` }}>
      <div className="max-w-7xl mx-auto px-6 md:px-8" style={{ paddingTop: 64, paddingBottom: 40 }}>
        <div className="grid md:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center gap-2">
              <div className="flex items-center justify-center rounded-lg" style={{ width: 26, height: 26, background: grad }}>
                <Sparkles size={14} color="#fff" />
              </div>
              <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: 17, color: C.text }}>VEXIS PRO</span>
            </div>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, color: C.sub, marginTop: 14, maxWidth: 220 }}>
              One AI assistant for chat, code, images, and documents.
            </p>
          </div>
          {cols.map((c) => (
            <div key={c.title}>
              <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, fontWeight: 600, color: C.text, marginBottom: 14 }}>{c.title}</div>
              <div className="flex flex-col gap-3">
                {c.links.map((l) => (
                  <a key={l} href="#" style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, color: C.sub }} className="hover:text-white transition">
                    {l}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center gap-4" style={{ marginTop: 56, paddingTop: 24, borderTop: `1px solid ${C.border}` }}>
          <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, color: C.sub }}>© {new Date().getFullYear()} VEXIS PRO, Inc.</span>
          <div className="flex gap-6">
            <a href="#" style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, color: C.sub }}>Privacy</a>
            <a href="#" style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, color: C.sub }}>Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function CortexLanding() {
  return (
    <div style={{ background: C.bg, minHeight: "100vh" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap');
        * { box-sizing: border-box; }
      `}</style>
      <Nav />
      <Hero />
      <Logos />
      <Features />
      <Testimonial />
      <Pricing />
      <CTA />
      <Footer />
    </div>
  );
}

