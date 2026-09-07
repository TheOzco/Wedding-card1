import { useEffect, useState } from 'react';

export default function DetailsPage() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setVisible(true), 100);
  }, []);

  // Location coordinates (example: Tehran, replace with actual venue)
  const venueLocation = {
    name: 'تالار پذیرایی کوثر',
    address: 'تهران، خیابان ولیعصر، نرسیده به میدان ونک، پلاک ۱۲۳',
    lat: 35.7219,
    lng: 51.4056,
  };

  const handleNavigation = (app: string) => {
    const { lat, lng, address } = venueLocation;
    
    const urls: { [key: string]: string } = {
      balad: `https://balad.ir/search?q=${encodeURIComponent(address)}`,
      neshan: `https://neshan.org/maps/@${lat},${lng},15z`,
      google: `https://www.google.com/maps/search/?api=1&query=${lat},${lng}`,
      waze: `https://waze.com/ul?ll=${lat},${lng}&navigate=yes`,
    };

    window.open(urls[app], '_blank');
  };

  return (
    <div className="min-h-screen py-16 px-4">
      <div className={`container mx-auto max-w-5xl transition-all duration-1000 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="text-6xl mb-6 animate-bounce-gentle">🎉</div>
          <h1 className="text-4xl md:text-5xl font-bold text-rose-500 mb-4" style={{ fontFamily: 'Dancing Script, cursive' }}>
            جزئیات مراسم
          </h1>
          <div className="flex items-center justify-center gap-4">
            <div className="w-20 h-0.5 bg-gradient-to-r from-transparent to-pink-300"></div>
            <span className="text-2xl text-pink-400">❀</span>
            <div className="w-20 h-0.5 bg-gradient-to-l from-transparent to-pink-300"></div>
          </div>
        </div>

        {/* Main info grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          
          {/* Date and Time */}
          <div className="bg-gradient-to-br from-white/80 to-pink-50/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border-2 border-pink-100 transform hover:scale-105 transition-all">
            <div className="text-5xl mb-4 text-center">📅</div>
            <h3 className="text-2xl font-semibold text-rose-500 mb-6 text-center">تاریخ و زمان</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <span className="text-2xl">🗓️</span>
                <div>
                  <p className="text-gray-700 font-semibold">پنجشنبه، ۴ دی ماه ۱۴۰۳</p>
                  <p className="text-sm text-gray-500">۲۵ دسامبر ۲۰۲۴</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">⏰</span>
                <div>
                  <p className="text-gray-700 font-semibold">ساعت ۱۸:۰۰</p>
                  <p className="text-sm text-gray-500">۶ بعدازظهر</p>
                </div>
              </div>
            </div>
          </div>

          {/* Dress Code */}
          <div className="bg-gradient-to-br from-white/80 to-pink-50/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border-2 border-pink-100 transform hover:scale-105 transition-all">
            <div className="text-5xl mb-4 text-center">👗</div>
            <h3 className="text-2xl font-semibold text-rose-500 mb-6 text-center">دِرِس‌کُد</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <span className="text-2xl">🎩</span>
                <p className="text-gray-700">لباس مجلسی و رسمی</p>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-2xl">🌸</span>
                <p className="text-gray-700">رنگ‌های پاستلی و روشن</p>
              </div>
              <div className="bg-pink-50 rounded-2xl p-4 mt-4">
                <p className="text-sm text-rose-500 text-center">
                  رنگ سفید ویژه عروس است 💕
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* Location Card */}
        <div className="bg-gradient-to-br from-white/90 to-pink-50/90 backdrop-blur-sm rounded-3xl p-8 md:p-10 shadow-2xl border-2 border-pink-100">
          <div className="text-center mb-8">
            <div className="text-5xl mb-4">📍</div>
            <h3 className="text-2xl md:text-3xl font-semibold text-rose-500 mb-3">
              محل برگزاری مراسم
            </h3>
            <p className="text-xl text-pink-600 font-semibold mb-2">
              {venueLocation.name}
            </p>
            <p className="text-gray-600 leading-relaxed">
              {venueLocation.address}
            </p>
          </div>

          {/* Navigation buttons */}
          <div className="mt-8">
            <p className="text-center text-gray-600 mb-4 font-semibold">
              🧭 مسیریابی با:
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <button
                onClick={() => handleNavigation('balad')}
                className="bg-gradient-to-br from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white rounded-2xl py-4 px-6 font-semibold shadow-lg transform hover:scale-105 transition-all active:scale-95"
              >
                <div className="text-2xl mb-2">🗺️</div>
                بلد
              </button>
              
              <button
                onClick={() => handleNavigation('neshan')}
                className="bg-gradient-to-br from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white rounded-2xl py-4 px-6 font-semibold shadow-lg transform hover:scale-105 transition-all active:scale-95"
              >
                <div className="text-2xl mb-2">📌</div>
                نشان
              </button>
              
              <button
                onClick={() => handleNavigation('google')}
                className="bg-gradient-to-br from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white rounded-2xl py-4 px-6 font-semibold shadow-lg transform hover:scale-105 transition-all active:scale-95"
              >
                <div className="text-2xl mb-2">🌍</div>
                گوگل مپ
              </button>
              
              <button
                onClick={() => handleNavigation('waze')}
                className="bg-gradient-to-br from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white rounded-2xl py-4 px-6 font-semibold shadow-lg transform hover:scale-105 transition-all active:scale-95"
              >
                <div className="text-2xl mb-2">🚗</div>
                ویز
              </button>
            </div>
          </div>

          {/* Parking info */}
          <div className="mt-8 bg-pink-50 rounded-2xl p-6">
            <div className="flex items-start gap-3">
              <span className="text-3xl">🅿️</span>
              <div>
                <h4 className="text-lg font-semibold text-rose-500 mb-2">پارکینگ</h4>
                <p className="text-gray-600">
                  پارکینگ اختصاصی با ظرفیت کافی در محل تالار
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="grid md:grid-cols-3 gap-6 mt-12">
          <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-pink-100 text-center">
            <div className="text-4xl mb-3">🍽️</div>
            <h4 className="font-semibold text-rose-500 mb-2">شام</h4>
            <p className="text-gray-600 text-sm">پذیرایی کامل با منوی متنوع</p>
          </div>
          
          <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-pink-100 text-center">
            <div className="text-4xl mb-3">🎵</div>
            <h4 className="font-semibold text-rose-500 mb-2">موسیقی زنده</h4>
            <p className="text-gray-600 text-sm">اجرای موسیقی و DJ</p>
          </div>
          
          <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-pink-100 text-center">
            <div className="text-4xl mb-3">📸</div>
            <h4 className="font-semibold text-rose-500 mb-2">عکاسی</h4>
            <p className="text-gray-600 text-sm">عکس و فیلم حرفه‌ای</p>
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
      `}</style>
    </div>
  );
}
