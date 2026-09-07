import { useEffect, useState } from 'react';

export default function StoryPage() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setVisible(true), 100);
  }, []);

  const timeline = [
    {
      year: '۱۳۹۸',
      title: 'اولین دیدار',
      description: 'روزی که برای اولین بار همدیگر را دیدیم و قلب‌هایمان تند زد...',
      emoji: '👀',
    },
    {
      year: '۱۳۹۹',
      title: 'آغاز دوستی',
      description: 'روزهایی پر از گفتگوهای شیرین و لحظات به یادماندنی',
      emoji: '💬',
    },
    {
      year: '۱۴۰۰',
      title: 'عشق واقعی',
      description: 'زمانی که فهمیدیم برای همیشه با هم می‌مانیم',
      emoji: '💕',
    },
    {
      year: '۱۴۰۱',
      title: 'خواستگاری',
      description: 'لحظه‌ای که با یک "بله" همه چیز تغییر کرد',
      emoji: '💍',
    },
    {
      year: '۱۴۰۳',
      title: 'جشن عروسی',
      description: 'آغاز زندگی مشترک و تحقق رویاهایمان',
      emoji: '👰🤵',
    },
  ];

  return (
    <div className="min-h-screen py-16 px-4">
      <div className={`container mx-auto max-w-4xl transition-all duration-1000 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="text-6xl mb-6 animate-bounce-gentle">💖</div>
          <h1 className="text-4xl md:text-5xl font-bold text-rose-500 mb-4" style={{ fontFamily: 'Dancing Script, cursive' }}>
            داستان عشق ما
          </h1>
          <div className="flex items-center justify-center gap-4">
            <div className="w-20 h-0.5 bg-gradient-to-r from-transparent to-pink-300"></div>
            <span className="text-2xl text-pink-400">❀</span>
            <div className="w-20 h-0.5 bg-gradient-to-l from-transparent to-pink-300"></div>
          </div>
          <p className="text-rose-400 mt-6 text-lg font-light">
            سفری از اولین نگاه تا ابدیت
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute right-1/2 transform translate-x-1/2 h-full w-1 bg-gradient-to-b from-pink-200 via-rose-300 to-pink-200 hidden md:block"></div>

          <div className="space-y-12">
            {timeline.map((item, index) => (
              <div
                key={index}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } flex-col`}
              >
                {/* Timeline dot */}
                <div className="absolute right-1/2 transform translate-x-1/2 w-8 h-8 bg-gradient-to-br from-pink-400 to-rose-500 rounded-full border-4 border-white shadow-lg z-10 hidden md:block animate-pulse-gentle"></div>

                {/* Content card */}
                <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}>
                  <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-xl border-2 border-pink-100 transform hover:scale-105 transition-all duration-300 hover:shadow-2xl">
                    <div className="text-5xl mb-4">{item.emoji}</div>
                    <div className="text-2xl font-bold text-pink-600 mb-2">{item.year}</div>
                    <h3 className="text-xl md:text-2xl font-semibold text-rose-500 mb-3">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quote section */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-3xl p-8 md:p-12 shadow-xl border-2 border-pink-100">
            <div className="text-5xl mb-6">💝</div>
            <p className="text-2xl md:text-3xl text-rose-500 font-light italic leading-relaxed" style={{ fontFamily: 'Dancing Script, cursive' }}>
              "عشق تنها احساس نیست، بلکه تصمیمی است که هر روز می‌گیریم"
            </p>
            <div className="flex items-center justify-center gap-3 mt-8">
              <div className="w-16 h-0.5 bg-pink-300"></div>
              <span className="text-xl text-pink-400">♥</span>
              <div className="w-16 h-0.5 bg-pink-300"></div>
            </div>
          </div>
        </div>

      </div>

      <style>{`
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
        @keyframes pulse-gentle {
          0%, 100% {
            transform: translate(-50%, -50%) scale(1);
          }
          50% {
            transform: translate(-50%, -50%) scale(1.1);
          }
        }
        .animate-pulse-gentle {
          animation: pulse-gentle 2s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
