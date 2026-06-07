import { motion } from 'motion/react';

interface LogoProps {
  size?: number;
  className?: string;
}

export default function Logo({ size = 32, className = "" }: LogoProps) {
  // Custom drawing of a futuristic, dynamic industrial "A" logo mark.
  // Combines an epic energetic outer shell (representing peak, apex, and structural energy)
  // with a modern floating power core representing the crossbar of the "A" and a solar pulse.
  return (
    <motion.div
      className={`relative inline-flex items-center justify-center select-none cursor-pointer ${className}`}
      style={{ width: size, height: size }}
      whileHover="hover"
      initial="rest"
      animate="rest"
    >
      {/* Dynamic ambient energy glow under the logo */}
      <motion.div
        variants={{
          rest: { scale: 1, opacity: 0.15, filter: 'blur(8px)' },
          hover: { scale: 1.3, opacity: 0.4, filter: 'blur(12px)' }
        }}
        transition={{ type: "spring", stiffness: 150, damping: 15 }}
        className="absolute inset-0 bg-amber-400 rounded-full -z-10"
      />

      <svg
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full overflow-visible"
      >
        {/* Decorative Grid Marker lines in background - very high tech / blueprints vibe */}
        <motion.circle
          cx="50"
          cy="50"
          r="48"
          stroke="currentColor"
          strokeWidth="0.5"
          strokeDasharray="2 4"
          className="opacity-20"
          variants={{
            rest: { rotate: 0 },
            hover: { rotate: 90, transition: { duration: 8, ease: "linear", repeat: Infinity } }
          }}
        />

        {/* Outer sharp left leg of the letter "A" */}
        <motion.path
          d="M 50 15 L 18 80 L 32 80 L 50 38 Z"
          fill="currentColor"
          variants={{
            rest: { x: 0, y: 0, opacity: 0.9 },
            hover: { x: -3, y: -1, opacity: 1 }
          }}
          transition={{ type: "spring", stiffness: 200, damping: 15 }}
        />

        {/* Outer sharp right leg of the letter "A" */}
        <motion.path
          d="M 50 15 L 82 80 L 68 80 L 50 38 Z"
          fill="currentColor"
          variants={{
            rest: { x: 0, y: 0, opacity: 0.9 },
            hover: { x: 3, y: -1, opacity: 1 }
          }}
          transition={{ type: "spring", stiffness: 200, damping: 15 }}
        />

        {/* Floating crossbar inner lightning core / solar vector completing the "A" */}
        <motion.polygon
          points="32,58 71,50 64,58 25,66"
          fill="#fbbf24" // amber-400
          variants={{
            rest: { 
              scale: 1, 
              opacity: 0.95,
              fill: "#fbbf24"
            },
            hover: { 
              scaleY: 1.1, 
              opacity: 1,
              fill: "#f59e0b", // amber-500
              filter: ["drop-shadow(0px 0px 4px #fbbf24)", "drop-shadow(0px 0px 8px #fbbf24)"]
            }
          }}
          transition={{ 
            type: "spring", 
            stiffness: 300, 
            damping: 10,
            filter: { repeat: Infinity, duration: 1, repeatType: "reverse" }
          }}
        />

        {/* Energetical Tech-Line shooting out of the apex tip */}
        <motion.circle
          cx="50"
          cy="15"
          r="4"
          fill="#fbbf24"
          variants={{
            rest: { scale: 1, opacity: 0.7 },
            hover: { scale: [1, 2.5, 1], opacity: [0.7, 1, 0.7] }
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </svg>
    </motion.div>
  );
}
