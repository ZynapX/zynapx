import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />

      {/* Hero */}
      <section className="px-6 py-32 text-center">
        <div className="mx-auto max-w-5xl">
          <span className="rounded-full border border-gray-700 px-4 py-2 text-sm text-gray-400">
            AI • Automation • SaaS
          </span>

          <h1 className="mt-8 text-5xl font-bold leading-tight md:text-7xl">
            Build Smarter.
            <br />
            Scale Faster.
          </h1>

          <p className="mx-auto mt-8 max-w-2xl text-lg text-gray-400">
            ZynapX membantu bisnis dan startup membangun solusi AI,
            mengotomatisasi workflow, dan mengembangkan produk digital
            yang siap tumbuh.
          </p>

          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <button className="rounded-xl bg-white px-8 py-3 font-semibold text-black">
              Get Started
            </button>

            <button className="rounded-xl border border-gray-700 px-8 py-3">
              View Services
            </button>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="mx-auto grid max-w-6xl gap-6 px-6 pb-24 md:grid-cols-3">
        <div className="rounded-2xl border border-gray-800 p-8 text-center">
          <h3 className="text-4xl font-bold">50+</h3>
          <p className="mt-2 text-gray-400">Projects Built</p>
        </div>

        <div className="rounded-2xl border border-gray-800 p-8 text-center">
          <h3 className="text-4xl font-bold">99%</h3>
          <p className="mt-2 text-gray-400">Automation Accuracy</p>
        </div>

        <div className="rounded-2xl border border-gray-800 p-8 text-center">
          <h3 className="text-4xl font-bold">24/7</h3>
          <p className="mt-2 text-gray-400">AI Powered Support</p>
        </div>
      </section>

     {/* Services */}
      <section className="px-6 pb-24">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-12 text-center text-4xl font-bold">
            Our Services
          </h2>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-gray-800 p-8">
              <h3 className="text-2xl font-semibold">AI Solutions</h3>
              <p className="mt-4 text-gray-400">
                Custom AI systems untuk meningkatkan efisiensi dan produktivitas.
              </p>
            </div>

            <div className="rounded-2xl border border-gray-800 p-8">
              <h3 className="text-2xl font-semibold">Automation</h3>
              <p className="mt-4 text-gray-400">
                Otomatisasi proses bisnis untuk menghemat waktu dan biaya.
              </p>
            </div>

            <div className="rounded-2xl border border-gray-800 p-8">
              <h3 className="text-2xl font-semibold">SaaS Development</h3>
              <p className="mt-4 text-gray-400">
                Pengembangan aplikasi web modern yang scalable dan cepat.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="border-t border-gray-800 px-6 py-24">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold">Why ZynapX?</h2>

          <p className="mt-6 text-lg text-gray-400">
            Kami menggabungkan AI, software engineering, dan automation
            untuk membantu bisnis berkembang lebih cepat di era digital.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 pb-24">
        <div className="mx-auto max-w-5xl rounded-3xl border border-gray-800 p-12 text-center">
          <h2 className="text-4xl font-bold">
            Ready to Build the Future?
          </h2>

          <p className="mt-4 text-gray-400">
            Mulai perjalanan transformasi digital bersama ZynapX.
          </p>

          <button className="mt-8 rounded-xl bg-white px-8 py-3 font-semibold text-black">
            Contact Us
          </button>
        </div>
      </section>

      <footer className="border-t border-gray-800 py-8 text-center text-gray-500">
        © 2026 ZynapX. All rights reserved.
      </footer>
    </main>
  );
}
