function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Navbar */}
      <nav className="border-b border-slate-800">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <h1 className="text-xl font-bold">RNT</h1>

          <div className="hidden gap-6 text-sm text-slate-300 md:flex">
            <a href="#about" className="hover:text-white">About</a>
            <a href="#skills" className="hover:text-white">Skills</a>
            <a href="#projects" className="hover:text-white">Projects</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section
        id="about"
        className="mx-auto max-w-6xl px-6 py-24 md:py-32"
      >
        <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-cyan-400">
          Frontend Developer
        </p>

        <h2 className="max-w-4xl text-4xl font-bold leading-tight md:text-6xl">
          Hi, I'm Rohan Narendra Tembhurne.
        </h2>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
          I am a self-taught Frontend Developer from Maharashtra, India.
          I build responsive and user-friendly web applications using React,
          JavaScript, TypeScript and Tailwind CSS.
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href="#projects"
            className="rounded-lg bg-cyan-400 px-6 py-3 font-semibold text-slate-950 hover:bg-cyan-300"
          >
            View Projects
          </a><a href="/resume.pdf" target="_blank" rel="noreferrer" className="rounded-lg border border-slate-700 px-6 py-3 font-semibold hover:bg-slate-900">Download Resume</a><a href="https://github.com/rohantembhurne"
            target="_blank"
            rel="noreferrer"
            className="rounded-lg border border-slate-700 px-6 py-3 font-semibold hover:bg-slate-900"
          >
            GitHub
          </a>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="border-y border-slate-800 bg-slate-900/50">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <p className="text-sm font-semibold uppercase tracking-widest text-cyan-400">
            Skills
          </p>

          <h2 className="mt-3 text-3xl font-bold">
            Technologies I work with
          </h2>

          <div className="mt-8 flex flex-wrap gap-3">
            {[
              "React.js",
              "JavaScript",
              "TypeScript",
              "HTML5",
              "CSS3",
              "Tailwind CSS",
              "REST API",
              "Git",
              "GitHub",
            ].map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-slate-700 bg-slate-950 px-4 py-2 text-sm text-slate-200"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="mx-auto max-w-6xl px-6 py-20">
        <p className="text-sm font-semibold uppercase tracking-widest text-cyan-400">
          Projects
        </p>

        <h2 className="mt-3 text-3xl font-bold">
          Featured Projects
        </h2>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {/* JobTrackr */}
          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
            <h3 className="text-xl font-bold">JobTrackr</h3>

            <p className="mt-3 leading-7 text-slate-400">
              A job application tracking web application for managing
              applications and tracking hiring progress.
            </p>

            <p className="mt-4 text-sm text-cyan-400">
              React • TypeScript • Firebase • Firestore
            </p>

            <a
              href="https://jobtrackr-ashen-ten.vercel.app/"
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-block font-semibold text-white hover:text-cyan-400"
            >
              Live Demo →
            </a>
          </div>

          {/* RNT Mart */}
          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
            <h3 className="text-xl font-bold">RNT Mart</h3>

            <p className="mt-3 leading-7 text-slate-400">
              A modern responsive e-commerce website with product listing,
              search, filters, cart and checkout experience.
            </p>

            <p className="mt-4 text-sm text-cyan-400">
              React • Vite • JavaScript • Tailwind CSS
            </p>

            <a
              href="https://rnt-cart-style.lovable.app/"
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-block font-semibold text-white hover:text-cyan-400"
            >
              Live Demo →
            </a>
          </div>

          {/* FlowAI */}
          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
            <h3 className="text-xl font-bold">FlowAI</h3>

            <p className="mt-3 leading-7 text-slate-400">
              A modern AI SaaS landing page focused on responsive UI and
              clean frontend design.
            </p>

            <p className="mt-4 text-sm text-cyan-400">
              React • Vite • Tailwind CSS
            </p>

            <a
              href="https://flowai-saas.vercel.app/"
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-block font-semibold text-white hover:text-cyan-400"
            >
              Live Demo →
            </a>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section
        id="contact"
        className="border-t border-slate-800 bg-slate-900/50"
      >
        <div className="mx-auto max-w-6xl px-6 py-20">
          <p className="text-sm font-semibold uppercase tracking-widest text-cyan-400">
            Contact
          </p>

          <h2 className="mt-3 text-3xl font-bold">
            Let's connect
          </h2>

          <p className="mt-4 max-w-xl text-slate-400">
            I'm currently looking for frontend developer opportunities,
            internships and junior developer roles.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="mailto:tembhurnerohan4@gmail.com"
              className="rounded-lg bg-cyan-400 px-6 py-3 font-semibold text-slate-950 hover:bg-cyan-300"
            >
              Email Me
            </a><a href="/resume.pdf" target="_blank" rel="noreferrer" className="rounded-lg border border-slate-700 px-6 py-3 font-semibold hover:bg-slate-900">Download Resume</a><a href="https://github.com/rohantembhurne"
              target="_blank"
              rel="noreferrer"
              className="rounded-lg border border-slate-700 px-6 py-3 font-semibold hover:bg-slate-900"
            >
              GitHub
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800 px-6 py-6 text-center text-sm text-slate-500">
        © 2026 Rohan Narendra Tembhurne. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
