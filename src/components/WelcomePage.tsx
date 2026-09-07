import { useEffect, useState } from 'react';

export default function WelcomePage() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setVisible(true), 100);
  }, []);

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-pink-100 via-rose-50 to-pink-50 flex items-center justify-center overflow-hidden">
      {/* Animated hearts background */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-float-heart text-pink-300/30"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${5 + Math.random() * 10}s`,
              fontSize: `${20 + Math.random() * 40}px`,
            }}
          >
            ❤
          </div>
        ))}
      </div>

      {/* Main content */}
      <div className={`text-center z-10 transition-all duration-2000 ${visible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
        <div className="mb-8 relative">
          <div className="absolute inset-0 bg-pink-300/20 blur-3xl rounded-full"></div>
          <div className="relative text-8xl animate-pulse">💍</div>
        </div>
        
        <h1 className="text-6xl md:text-7xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-rose-400 to-pink-500 animate-gradient">
          عروسی ما
        </h1>
        
        <div className="flex items-center justify-center gap-4 mt-8 text-rose-400">
          <div className="w-16 h-0.5 bg-gradient-to-r from-transparent to-rose-300"></div>
          <span className="text-2xl animate-pulse">♥</span>
          <div className="w-16 h-0.5 bg-gradient-to-l from-transparent to-rose-300"></div>
        </div>

        <p className="text-rose-500/80 mt-6 text-lg font-light">
          در حال بارگذاری دعوت‌نامه...
        </p>
      </div>

      <style>{`
        @keyframes float-heart {
          0% {
            transform: translateY(100vh) rotate(0deg);
            opacity: 0;
          }
          10% {
            opacity: 0.5;
          }
          90% {
            opacity: 0.5;
          }
          100% {
            transform: translateY(-100vh) rotate(360deg);
            opacity: 0;
          }
        }
        .animate-float-heart {
          animation: float-heart linear infinite;
        }
        @keyframes gradient {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
      `}</style>
    </div>
  );
}
