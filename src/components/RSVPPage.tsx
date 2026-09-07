import { useEffect, useState } from 'react';

export default function RSVPPage() {
  const [visible, setVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    guests: '1',
    attendance: 'yes',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    setTimeout(() => setVisible(true), 100);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send data to a backend
    console.log('RSVP Data:', formData);
    setSubmitted(true);
    
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        phone: '',
        guests: '1',
        attendance: 'yes',
        message: '',
      });
    }, 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen py-16 px-4">
      <div className={`container mx-auto max-w-3xl transition-all duration-1000 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="text-6xl mb-6 animate-bounce-gentle">✉️</div>
          <h1 className="text-4xl md:text-5xl font-bold text-rose-500 mb-4" style={{ fontFamily: 'Dancing Script, cursive' }}>
            تأیید حضور
          </h1>
          <div className="flex items-center justify-center gap-4">
            <div className="w-20 h-0.5 bg-gradient-to-r from-transparent to-pink-300"></div>
            <span className="text-2xl text-pink-400">❀</span>
            <div className="w-20 h-0.5 bg-gradient-to-l from-transparent to-pink-300"></div>
          </div>
          <p className="text-rose-400 mt-6 text-lg font-light">
            لطفاً حضور خود را تأیید کنید
          </p>
        </div>

        {submitted ? (
          // Success Message
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl p-12 shadow-2xl border-2 border-green-200 text-center animate-scale-in">
            <div className="text-7xl mb-6 animate-bounce">✅</div>
            <h2 className="text-3xl font-bold text-green-600 mb-4">
              با تشکر از شما!
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              پاسخ شما با موفقیت ثبت شد.
              <br />
              منتظر دیدار شما هستیم! 💕
            </p>
          </div>
        ) : (
          // RSVP Form
          <div className="bg-gradient-to-br from-white/90 to-pink-50/90 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-2xl border-2 border-pink-100">
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Name */}
              <div>
                <label className="block text-gray-700 font-semibold mb-2 text-right">
                  نام و نام خانوادگی <span className="text-rose-500">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-2xl border-2 border-pink-200 focus:border-pink-400 focus:outline-none bg-white/80 text-right transition-colors"
                  placeholder="نام خود را وارد کنید"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block text-gray-700 font-semibold mb-2 text-right">
                  شماره تماس <span className="text-rose-500">*</span>
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-2xl border-2 border-pink-200 focus:border-pink-400 focus:outline-none bg-white/80 text-right transition-colors"
                  placeholder="۰۹۱۲۳۴۵۶۷۸۹"
                  dir="ltr"
                />
              </div>

              {/* Attendance */}
              <div>
                <label className="block text-gray-700 font-semibold mb-2 text-right">
                  وضعیت حضور <span className="text-rose-500">*</span>
                </label>
                <div className="grid grid-cols-2 gap-4">
                  <label className="relative">
                    <input
                      type="radio"
                      name="attendance"
                      value="yes"
                      checked={formData.attendance === 'yes'}
                      onChange={handleChange}
                      className="peer hidden"
                    />
                    <div className="cursor-pointer rounded-2xl border-2 border-pink-200 bg-white/80 p-4 text-center transition-all peer-checked:border-green-500 peer-checked:bg-green-50 peer-checked:shadow-lg">
                      <div className="text-3xl mb-2">✅</div>
                      <span className="font-semibold text-gray-700 peer-checked:text-green-600">
                        حضور دارم
                      </span>
                    </div>
                  </label>

                  <label className="relative">
                    <input
                      type="radio"
                      name="attendance"
                      value="no"
                      checked={formData.attendance === 'no'}
                      onChange={handleChange}
                      className="peer hidden"
                    />
                    <div className="cursor-pointer rounded-2xl border-2 border-pink-200 bg-white/80 p-4 text-center transition-all peer-checked:border-red-500 peer-checked:bg-red-50 peer-checked:shadow-lg">
                      <div className="text-3xl mb-2">❌</div>
                      <span className="font-semibold text-gray-700 peer-checked:text-red-600">
                        متأسفانه نمی‌توانم
                      </span>
                    </div>
                  </label>
                </div>
              </div>

              {/* Number of Guests */}
              {formData.attendance === 'yes' && (
                <div className="animate-slide-down">
                  <label className="block text-gray-700 font-semibold mb-2 text-right">
                    تعداد همراهان
                  </label>
                  <select
                    name="guests"
                    value={formData.guests}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-2xl border-2 border-pink-200 focus:border-pink-400 focus:outline-none bg-white/80 text-right transition-colors"
                  >
                    <option value="1">۱ نفر (فقط خودم)</option>
                    <option value="2">۲ نفر</option>
                    <option value="3">۳ نفر</option>
                    <option value="4">۴ نفر</option>
                    <option value="5">۵ نفر یا بیشتر</option>
                  </select>
                </div>
              )}

              {/* Message */}
              <div>
                <label className="block text-gray-700 font-semibold mb-2 text-right">
                  پیام تبریک (اختیاری)
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 rounded-2xl border-2 border-pink-200 focus:border-pink-400 focus:outline-none bg-white/80 text-right resize-none transition-colors"
                  placeholder="پیام خود را اینجا بنویسید..."
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white font-bold py-4 px-8 rounded-2xl shadow-xl transform hover:scale-105 active:scale-95 transition-all text-lg"
              >
                ارسال تأیید حضور 💌
              </button>

            </form>
          </div>
        )}

        {/* Additional Info */}
        <div className="mt-12 grid md:grid-cols-2 gap-6">
          <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-pink-100">
            <div className="text-3xl mb-3 text-center">📞</div>
            <h4 className="font-semibold text-rose-500 mb-2 text-center">تماس با ما</h4>
            <p className="text-gray-600 text-center" dir="ltr">
              ۰۹۱۲-۳۴۵-۶۷۸۹
            </p>
          </div>
          
          <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-pink-100">
            <div className="text-3xl mb-3 text-center">⏰</div>
            <h4 className="font-semibold text-rose-500 mb-2 text-center">مهلت تأیید</h4>
            <p className="text-gray-600 text-center">
              تا ۲۰ آذر ماه
            </p>
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
        @keyframes scale-in {
          from {
            transform: scale(0.9);
            opacity: 0;
          }
          to {
            transform: scale(1);
            opacity: 1;
          }
        }
        .animate-scale-in {
          animation: scale-in 0.5s ease-out;
        }
        @keyframes slide-down {
          from {
            transform: translateY(-10px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
        .animate-slide-down {
          animation: slide-down 0.3s ease-out;
        }
      `}</style>
    </div>
  );
}
