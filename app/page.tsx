import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />

      <section className="flex flex-col items-center justify-center px-6 py-32 text-center">
        <h1 className="text-6xl font-bold">ZynapX</h1>

        <p className="mt-6 text-xl text-gray-300 max-w-xl">
          Build. Automate. Scale.
        </p>

        <button className="mt-10 rounded-xl bg-white px-8 py-3 text-black font-semibold">
          Get Started
        </button>
      </section>
    </main>
  );
}
