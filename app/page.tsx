import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />

      <section className="px-6 py-24 text-center">
        <div className="mx-auto max-w-4xl">
          <h1 className="text-5xl font-bold">
            Build the Future with ZynapX
          </h1>

          <p className="mt-6 text-gray-400">
            AI • Automation • SaaS
          </p>
        </div>
      </section>
    </main>
  );
}
