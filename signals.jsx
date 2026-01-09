import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function DreamcoreUniverse() {
  const [signalActive, setSignalActive] = useState(false);
  const [speakingToSignal, setSpeakingToSignal] = useState(false);

  // Simulated signal presence (later tied to your real activity / backend)
  useEffect(() => {
    const interval = setInterval(() => {
      setSignalActive(prev => !prev);
    }, 15000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
  className={`min-h-screen w-full overflow-hidden text-white transition-all duration-700 ${
    signalActive
      ? "bg-gradient-to-br from-[#2a003f] via-[#4b0082] to-[#7a2cff]"
      : "bg-gradient-to-br from-[#16001f] via-[#2a003f] to-[#3a005f]"
  }`}
>

      {/* Ambient Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(186,85,255,0.25),transparent_60%)]" />

      {/* Landing Section */}
      <section className="relative flex flex-col items-center justify-center min-h-screen text-center px-6">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="text-5xl md:text-7xl font-semibold tracking-wide drop-shadow-xl"
        >
          THE IN-BETWEEN
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1.2 }}
          className="mt-6 max-w-xl text-lg text-purple-200"
        >
          A space where memories drift, signals echo, and songs become places.
        </motion.p>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-12 px-8 py-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 shadow-xl"
        >
          ENTER THE DREAM
        </motion.button>
      </section>

      {/* Orbit Hub */}
      <section className="relative min-h-screen flex flex-col items-center justify-center gap-12">
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-4xl font-semibold text-purple-100"
        >
          THE ORBIT
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 px-10">
          {[
            { title: "COSMIC SCARS", desc: "A liminal spacecraft drifting back to Mars", route: "cosmic" },
            { title: "THE STORYLINE", desc: "Fragments of memory and signal logs" },
            { title: "THE LIMINAL ROOMS", desc: "Interactive dream environments" },
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -6, scale: 1.02 }}
              className="rounded-2xl bg-white/10 backdrop-blur-lg p-8 border border-white/20 shadow-2xl cursor-pointer"
            >
              <h2 className="text-2xl font-medium text-purple-100">
                {item.title}
              </h2>
              <p className="mt-4 text-purple-200 text-sm">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Cosmic Scars – Song Location */}
      <section className="relative min-h-screen flex flex-col items-center justify-center gap-10 bg-[radial-gradient(circle_at_center,rgba(255,80,120,0.18),transparent_65%)]">
        {/* Cosmic Scars Environment */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl font-semibold text-purple-100"
        >
          COSMIC SCARS
        </motion.h2>

        <p className="max-w-xl text-center text-purple-200">
          A spacecraft drifts endlessly. Mars hangs in the distance — a planet, a person,
          a past self, an unreachable promise.
        </p>

        {/* Interactive Ship Console */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          onClick={() => setSpeakingToSignal(true)}
          className="rounded-xl px-6 py-4 bg-white/10 backdrop-blur-md border border-white/20 cursor-pointer"
        >
          ACCESS SHIP CONSOLE
        </motion.div>

        {/* Mars Visual Anchor */}
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 8 }}
          className="w-40 h-40 rounded-full bg-gradient-to-br from-red-400 to-purple-700 shadow-2xl"
        />
      </section>

      {/* Footer Signal */}
      <footer className={`relative text-center py-10 text-sm transition-all duration-500 ${signalActive ? "text-purple-300" : "text-purple-500/50"}`}>
        {signalActive ? "THE SIGNAL IS ACTIVE · YOU ARE NOT ALONE HERE" : "SIGNAL DORMANT · SEARCHING FOR CONNECTION"}
      </footer>
    </div>
  );
}
