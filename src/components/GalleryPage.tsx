import { useEffect, useState } from 'react';

export default function GalleryPage() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setVisible(true), 100);
  }, []);

  // Sample gallery items with emojis/gradients as placeholders
  const galleryItems = [
    { id: 1, emoji: '💑', title: 'لحظات شیرین', gradient: 'from-pink-400 to-rose-500' },
    { id: 2, emoji: '🌹', title: 'عشق واقعی', gradient: 'from-red-400 to-pink-500' },
    { id: 3, emoji: '💕', title: 'خاطرات زیبا', gradient: 'from-pink-300 to-purple-400' },
    { id: 4, emoji: '🎊', title: 'شادی و سرور', gradient: 'from-yellow-400 to-pink-400' },
    { id: 5, emoji: '💐', title: 'گل‌های بهاری', gradient: 'from-green-300 to-pink-400' },
    { id: 6, emoji: '✨', title: 'لحظات جادویی', gradient: 'from-purple-400 to-pink-500' },
    { id: 7, emoji: '🦋', title: 'رویاهای زیبا', gradient: 'from-blue-300 to-pink-400' },
    { id: 8, emoji: '🌸', title: 'شکوفه‌های عشق', gradient: 'from-pink-300 to-rose-400' },
    { id: 9, emoji: '💝', title: 'هدیه‌های قلبی', gradient: 'from-red-300 to-pink-500' },
  ];

  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  return (
    <div className="min-h-screen py-16 px-4">
      <div className={`container mx-auto max-w-6xl transition-all duration-1000 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="text-6xl mb-6 animate-bounce-gentle">📸</div>
          <h1 className="text-4xl md:text-5xl font-bold text-rose-500 mb-4" style={{ fontFamily: 'Dancing Script, cursive' }}>
            گالری خاطرات
          </h1>
          <div className="flex items-center justify-center gap-4">
            <div className="w-20 h-0.5 bg-gradient-to-r from-transparent to-pink-300"></div>
            <span className="text-2xl text-pink-400">❀</span>
            <div className="w-20 h-0.5 bg-gradient-to-l from-transparent to-pink-300"></div>
          </div>
          <p className="text-rose-400 mt-6 text-lg font-light">
            لحظات زیبایی که با هم ساختیم
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {galleryItems.map((item, index) => (
            <div
              key={item.id}
              onClick={() => setSelectedImage(item.id)}
              className="group relative aspect-square rounded-3xl overflow-hidden shadow-xl border-2 border-pink-100 cursor-pointer transform hover:scale-105 transition-all duration-300"
              style={{
                animationDelay: `${index * 100}ms`,
              }}
            >
              {/* Gradient background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-80 group-hover:opacity-100 transition-opacity`}></div>
              
              {/* Emoji */}
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-7xl md:text-8xl transform group-hover:scale-110 transition-transform">
                  {item.emoji}
                </span>
              </div>

              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-6">
                <p className="text-white font-semibold text-lg">
                  {item.title}
                </p>
              </div>

              {/* Decorative corner */}
              <div className="absolute top-4 right-4 text-2xl opacity-0 group-hover:opacity-100 transition-opacity">
                ✨
              </div>
            </div>
          ))}
        </div>

        {/* Add your photos message */}
        <div className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-3xl p-8 md:p-12 shadow-xl border-2 border-pink-100 text-center">
          <div className="text-5xl mb-6">📱</div>
          <h3 className="text-2xl md:text-3xl font-semibold text-rose-500 mb-4">
            عکس‌های شما
          </h3>
          <p className="text-gray-600 mb-6 leading-relaxed">
            عکس‌ها و ویدیوهای خود را از مراسم با ما به اشتراک بگذارید
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
            <div className="bg-white rounded-2xl px-6 py-3 shadow-lg border border-pink-200">
              <p className="text-gray-700">
                <span className="font-semibold text-rose-500">هشتگ:</span> #علی_زهرا_۱۴۰۳
              </p>
            </div>
            <div className="text-pink-400 text-2xl hidden md:block">•</div>
            <div className="bg-white rounded-2xl px-6 py-3 shadow-lg border border-pink-200">
              <p className="text-gray-700">
                <span className="font-semibold text-rose-500">اینستاگرام:</span> @ali_zahra_wedding
              </p>
            </div>
          </div>
        </div>

        {/* Lightbox Modal */}
        {selectedImage && (
          <div
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 animate-fade-in"
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute top-4 left-4 text-white text-4xl hover:text-pink-300 transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              ×
            </button>
            <div className="max-w-4xl w-full aspect-square rounded-3xl overflow-hidden shadow-2xl border-4 border-white/20">
              {galleryItems.map((item) => (
                item.id === selectedImage && (
                  <div key={item.id} className={`w-full h-full bg-gradient-to-br ${item.gradient} flex items-center justify-center`}>
                    <span className="text-9xl">{item.emoji}</span>
                  </div>
                )
              ))}
            </div>
          </div>
        )}

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
        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        .animate-fade-in {
          animation: fade-in 0.3s ease-out;
        }
      `}</style>
    </div>
  );
}
