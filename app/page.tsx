import Image from "next/image";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />

      {/* Hero */}
      <section className="px-6 py-24 text-center">
  <div className="mx-auto max-w-5xl">

    <div className="flex justify-center mb-8">
      <Image
        src="/logo.png"
        alt="ZynapX Logo"
        width={220}
        height={220}
        priority
      />
    </div>

    <p className="mb-4 text-sm uppercase tracking-widest text-cyan-400">
      AI • Automation • SaaS
    </p>

    <h1 className="text-5xl font-bold md:text-7xl">
      Build the Future with ZynapX
    </h1>

    <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-400">
      Kami membantu bisnis membangun solusi AI, otomatisasi proses,
      dan produk digital modern.
    </p>
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
      <section id="services" className="px-6 pb-24">
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
      <section id="about" className="border-t border-gray-800 px-6 py-24">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold">Why ZynapX?</h2>

          <p className="mt-6 text-lg text-gray-400">
            Kami menggabungkan AI, software engineering, dan automation
            untuk membantu bisnis berkembang lebih cepat di era digital.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="px-6 pb-24">
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
