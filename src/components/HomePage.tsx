import { useEffect, useState } from 'react';

export default function HomePage() {
  const [visible, setVisible] = useState(false);
  const weddingDate = new Date('2024-12-25T18:00:00');

  useEffect(() => {
    setTimeout(() => setVisible(true), 100);
  }, []);

  // Countdown timer
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = weddingDate.getTime() - now;

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-10 left-10 text-6xl opacity-20 animate-bounce-slow">🌸</div>
      <div className="absolute top-32 right-20 text-5xl opacity-20 animate-bounce-slow" style={{ animationDelay: '1s' }}>🌺</div>
      <div className="absolute bottom-20 left-20 text-5xl opacity-20 animate-bounce-slow" style={{ animationDelay: '2s' }}>🌷</div>
      <div className="absolute bottom-40 right-10 text-6xl opacity-20 animate-bounce-slow" style={{ animationDelay: '0.5s' }}>🌹</div>

      <div className={`container mx-auto px-4 py-12 transition-all duration-1000 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        
        {/* Header with rings */}
        <div className="text-center mb-16 pt-8">
          <div className="inline-block relative mb-8">
            <div className="text-7xl md:text-8xl animate-bounce-gentle">💍</div>
            <div className="absolute -top-4 -right-4 text-3xl animate-ping-slow">✨</div>
            <div className="absolute -bottom-2 -left-4 text-3xl animate-ping-slow" style={{ animationDelay: '1s' }}>✨</div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-rose-500" style={{ fontFamily: 'Dancing Script, cursive' }}>
            ما ازدواج می‌کنیم
          </h1>

          <div className="flex items-center justify-center gap-6 mb-8">
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-semibold text-pink-600 mb-2" style={{ fontFamily: 'Vazirmatn' }}>علی</p>
              <div className="w-16 h-0.5 bg-gradient-to-r from-pink-300 to-pink-500"></div>
            </div>
            
            <div className="text-5xl text-rose-400 animate-pulse">♥</div>
            
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-semibold text-pink-600 mb-2" style={{ fontFamily: 'Vazirmatn' }}>زهرا</p>
              <div className="w-16 h-0.5 bg-gradient-to-l from-pink-300 to-pink-500"></div>
            </div>
          </div>

          <p className="text-xl text-rose-400 font-light mb-12">
            با کمال میل شما را به جشن عروسی خود دعوت می‌کنیم
          </p>

          {/* Decorative line */}
          <div className="flex items-center justify-center gap-4 mb-12">
            <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-pink-300 to-pink-300"></div>
            <span className="text-2xl text-pink-400">❀</span>
            <div className="w-24 h-0.5 bg-gradient-to-l from-transparent via-pink-300 to-pink-300"></div>
          </div>
        </div>

        {/* Countdown Section */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="bg-white/60 backdrop-blur-sm rounded-3xl shadow-2xl p-8 md:p-12 border-2 border-pink-100">
            <h2 className="text-2xl md:text-3xl font-semibold text-center text-rose-500 mb-8">
              تا آغاز جشن عروسی
            </h2>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {[
                { value: timeLeft.days, label: 'روز' },
                { value: timeLeft.hours, label: 'ساعت' },
                { value: timeLeft.minutes, label: 'دقیقه' },
                { value: timeLeft.seconds, label: 'ثانیه' },
              ].map((item, index) => (
                <div key={index} className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-2xl p-6 text-center border border-pink-200 transform hover:scale-105 transition-transform">
                  <div className="text-4xl md:text-5xl font-bold text-pink-600 mb-2">
                    {item.value.toString().padStart(2, '0')}
                  </div>
                  <div className="text-sm md:text-base text-rose-400 font-light">
                    {item.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Date and Time Card */}
        <div className="max-w-2xl mx-auto">
          <div className="bg-gradient-to-br from-white/80 to-pink-50/80 backdrop-blur-sm rounded-3xl shadow-xl p-8 md:p-10 border-2 border-pink-100 text-center">
            <div className="text-5xl mb-6">📅</div>
            <h3 className="text-2xl font-semibold text-rose-500 mb-6">تاریخ و زمان مراسم</h3>
            
            <div className="space-y-4 text-lg">
              <div className="flex items-center justify-center gap-3">
                <span className="text-pink-400">📆</span>
                <p className="text-gray-700">پنجشنبه، ۴ دی ماه ۱۴۰۳</p>
              </div>
              
              <div className="flex items-center justify-center gap-3">
                <span className="text-pink-400">⏰</span>
                <p className="text-gray-700">ساعت ۱۸:۰۰</p>
              </div>
              
              <div className="mt-6 pt-6 border-t border-pink-200">
                <p className="text-rose-400 font-light text-base">
                  حضور گرم شما مایه مباهات ماست
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>

      <style>{`
        @keyframes bounce-slow {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        .animate-bounce-slow {
          animation: bounce-slow 3s ease-in-out infinite;
        }
        @keyframes bounce-gentle {
          0%, 100% {
            transform: translateY(0) scale(1);
          }
          50% {
            transform: translateY(-10px) scale(1.05);
          }
        }
        .animate-bounce-gentle {
          animation: bounce-gentle 2s ease-in-out infinite;
        }
        @keyframes ping-slow {
          75%, 100% {
            transform: scale(2);
            opacity: 0;
          }
        }
        .animate-ping-slow {
          animation: ping-slow 2s cubic-bezier(0, 0, 0.2, 1) infinite;
        }
      `}</style>
    </div>
  );
}
