import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />

      <section className="px-6 py-24 text-center">
        <div className="mx-auto max-w-4xl">
          <p className="mb-4 text-sm uppercase tracking-widest text-gray-400">
            AI • Automation • SaaS
          </p>

          <h1 className="text-5xl font-bold md:text-7xl">
            Build the Future with ZynapX
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-400">
            Kami membantu startup dan bisnis mengotomatisasi proses,
            membangun produk AI, dan meningkatkan skala pertumbuhan.
          </p>

          <div className="mt-10 flex justify-center gap-4">
            <button className="rounded-xl bg-white px-8 py-3 font-semibold text-black">
              Mulai Sekarang
            </button>

            <button className="rounded-xl border border-gray-700 px-8 py-3">
              Pelajari Lebih Lanjut
            </button>
          </div>
        </div>
      </section>

      <section className="grid gap-6 px-6 pb-24 md:grid-cols-3">
        <div className="rounded-2xl border border-gray-800 p-6">
          <h3 className="text-xl font-semibold">AI Solutions</h3>
          <p className="mt-3 text-gray-400">
            Bangun produk berbasis AI untuk meningkatkan efisiensi bisnis.
          </p>
        </div>

        <div className="rounded-2xl border border-gray-800 p-6">
          <h3 className="text-xl font-semibold">Automation</h3>
          <p className="mt-3 text-gray-400">
            Otomatiskan pekerjaan berulang dan hemat waktu tim.
          </p>
        </div>

        <div className="rounded-2xl border border-gray-800 p-6">
          <h3 className="text-xl font-semibold">Scale Faster</h3>
          <p className="mt-3 text-gray-400">
            Infrastruktur modern untuk pertumbuhan yang lebih cepat.
          </p>
        </div>
      </section>

      <footer className="border-t border-gray-800 py-8 text-center text-gray-500">
        © 2026 ZynapX. All rights reserved.
      </footer>
    </main>
  );
}
