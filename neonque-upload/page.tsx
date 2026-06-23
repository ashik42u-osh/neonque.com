export default function HomePage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
        <h1 className="text-5xl font-bold uppercase tracking-widest">
          Engineering Motion.
        </h1>

        <h2 className="mt-4 text-4xl text-cyan-400">
          Fabricating The Future.
        </h2>

        <p className="mt-6 max-w-xl text-zinc-400">
          Futuristic automotive innovation, fabrication systems,
          neon technologies and immersive engineering concepts.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <a href="#projects" className="rounded-xl border border-cyan-400 px-6 py-3">
            Explore Builds
          </a>

          <a href="#contact" className="rounded-xl bg-cyan-500 px-6 py-3 text-black">
            Start Project
          </a>
        </div>
      </section>

      <section id="contact" className="border-t border-cyan-400/20 px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-400">
            Contact Neonque
          </p>

          <div className="mt-6 grid gap-10 md:grid-cols-[1fr_1.2fr]">
            <div>
              <h2 className="text-4xl font-bold uppercase tracking-widest">
                Build with us.
              </h2>
              <p className="mt-5 max-w-md text-zinc-400">
                Automotive fabrication, neon concepts and custom engineering
                work from Thrissur, Kerala.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <a
                href="tel:+918921454588"
                className="rounded-xl border border-white/10 bg-white/5 p-5 transition hover:border-cyan-400/70"
              >
                <span className="text-sm uppercase tracking-[0.25em] text-zinc-500">
                  Phone
                </span>
                <span className="mt-3 block text-lg text-white">
                  +91 89214 54588
                </span>
              </a>

              <a
                href="mailto:neonque.com@gmail.com"
                className="rounded-xl border border-white/10 bg-white/5 p-5 transition hover:border-cyan-400/70"
              >
                <span className="text-sm uppercase tracking-[0.25em] text-zinc-500">
                  Email
                </span>
                <span className="mt-3 block break-words text-lg text-white">
                  neonque.com@gmail.com
                </span>
              </a>

              <a
                href="https://wa.me/918921454588"
                className="rounded-xl border border-white/10 bg-white/5 p-5 transition hover:border-cyan-400/70"
              >
                <span className="text-sm uppercase tracking-[0.25em] text-zinc-500">
                  WhatsApp
                </span>
                <span className="mt-3 block text-lg text-white">
                  +91 89214 54588
                </span>
              </a>

              <a
                href="https://www.instagram.com/NEONQUE"
                className="rounded-xl border border-white/10 bg-white/5 p-5 transition hover:border-cyan-400/70"
              >
                <span className="text-sm uppercase tracking-[0.25em] text-zinc-500">
                  Instagram
                </span>
                <span className="mt-3 block text-lg text-white">
                  @NEONQUE
                </span>
              </a>

              <div className="rounded-xl border border-white/10 bg-white/5 p-5 sm:col-span-2">
                <span className="text-sm uppercase tracking-[0.25em] text-zinc-500">
                  Location
                </span>
                <p className="mt-3 text-lg text-white">
                  Near PHOTOLINK, Kandam Lane, Post Office Road, Thrissur,
                  Kerala, India
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
