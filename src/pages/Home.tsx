// src/pages/Home.tsx
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="relative min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-gray-900 via-slate-800 to-gray-700 overflow-hidden">
      {/* Retro grid overlay - Magic UI inspired */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none z-0"
        width="100%"
        height="100%"
        viewBox="0 0 1920 1080"
        preserveAspectRatio="none"
        style={{ opacity: 0.22 }}
      >
        {/* Vertical lines */}
        {Array.from({ length: 33 }).map((_, i) => (
          <line
            key={`v-${i}`}
            x1={(i * 60)}
            y1="0"
            x2={(i * 60)}
            y2="1080"
            stroke="#38bdf8"
            strokeWidth="1"
            opacity={i % 2 === 0 ? 0.18 : 0.08}
            style={{ filter: 'drop-shadow(0 0 6px #38bdf8)' }}
          />
        ))}
        {/* Horizontal lines with perspective */}
        {Array.from({ length: 18 }).map((_, i) => {
          // Perspective effect: lines get closer together at the bottom
          const y = 200 + Math.pow(i, 1.7) * 25;
          return (
            <line
              key={`h-${i}`}
              x1="0"
              y1={y}
              x2="1920"
              y2={y}
              stroke="#38bdf8"
              strokeWidth="1"
              opacity={i === 0 ? 0.25 : 0.12}
              style={{ filter: 'drop-shadow(0 0 8px #38bdf8)' }}
            />
          );
        })}
      </svg>
      <div className="relative z-10 container mx-auto py-16 flex flex-col items-center justify-center min-h-[60vh] max-w-xl bg-slate-900/90 rounded-2xl shadow-2xl">
        <h1 className="text-3xl font-bold mb-4 text-center text-white">Welcome to Card Master</h1>
        <p className="mb-6 text-base text-center max-w-lg text-gray-200">
          Card Master is your professional digital scorekeeper for card game nights. Effortlessly track scores, save your game history, and focus on enjoying the game with friends and family.
        </p>
        <ul className="mb-8 text-base text-gray-300 max-w-md space-y-1 list-disc list-inside">
          <li>Easy and accurate score calculation</li>
          <li>Automatic game history saving</li>
          <li>Designed for groups, families, and friends</li>
          <li>Accessible from any device</li>
        </ul>
        <div>
          <Button
            asChild
            size="lg"
            className="px-8 py-3 text-base font-semibold bg-gradient-to-r from-cyan-400 to-blue-600 text-white rounded-md shadow-lg ring-2 ring-cyan-400/60 hover:from-blue-500 hover:to-cyan-400 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-cyan-300 transition-all duration-200"
          >
            <Link to="/dashboard">Start Playing</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Home;
