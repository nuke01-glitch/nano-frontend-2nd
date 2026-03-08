'use client';
import { motion } from 'framer-motion';

export default function AnimatedBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <motion.div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/molecular-bg.jpg')" }}
        animate={{
          scale: [1, 1.1, 1], // Slow zoom in and out
          x: [0, -20, 0],    // Slow horizontal drift
          y: [0, -10, 0],    // Slow vertical drift
        }}
        transition={{
          duration: 20,      // Very slow movement (20 seconds)
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      {/* Dark overlay to make text readable */}
      <div className="absolute inset-0 bg-black/60" />
    </div>
  );
}