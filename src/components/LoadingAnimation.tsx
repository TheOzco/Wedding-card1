export default function LoadingAnimation() {
  return (
    <div className="fixed inset-0 bg-white/90 backdrop-blur-sm z-50 flex items-center justify-center">
      <div className="relative">
        {/* Rotating rings */}
        <div className="w-24 h-24 relative">
          <div className="absolute inset-0 border-4 border-pink-200 border-t-pink-500 rounded-full animate-spin"></div>
          <div className="absolute inset-2 border-4 border-rose-200 border-t-rose-500 rounded-full animate-spin-slow"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-3xl animate-pulse">💐</span>
          </div>
        </div>
        
        {/* Loading text */}
        <p className="mt-6 text-rose-500 text-center font-light animate-pulse">
          در حال بارگذاری...
        </p>
      </div>

      <style>{`
        @keyframes spin-slow {
          to {
            transform: rotate(-360deg);
          }
        }
        .animate-spin-slow {
          animation: spin-slow 2s linear infinite;
        }
      `}</style>
    </div>
  );
}
