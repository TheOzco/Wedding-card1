interface NavigationProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export default function Navigation({ currentPage, onNavigate }: NavigationProps) {
  const navItems = [
    { id: 'home', label: 'خانه', emoji: '🏠' },
    { id: 'story', label: 'داستان ما', emoji: '💖' },
    { id: 'details', label: 'جزئیات', emoji: '📍' },
    { id: 'gallery', label: 'گالری', emoji: '📸' },
    { id: 'rsvp', label: 'تأیید حضور', emoji: '✉️' },
  ];

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="hidden md:block fixed top-8 left-1/2 transform -translate-x-1/2 z-40">
        <div className="bg-white/90 backdrop-blur-md rounded-full shadow-2xl border-2 border-pink-100 px-6 py-3">
          <ul className="flex items-center gap-2">
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => onNavigate(item.id)}
                  className={`px-5 py-2.5 rounded-full font-medium transition-all transform hover:scale-105 ${
                    currentPage === item.id
                      ? 'bg-gradient-to-r from-pink-500 to-rose-500 text-white shadow-lg'
                      : 'text-gray-700 hover:bg-pink-50'
                  }`}
                >
                  <span className="mr-2">{item.emoji}</span>
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t-2 border-pink-100 shadow-2xl">
        <ul className="flex items-center justify-around py-2">
          {navItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => onNavigate(item.id)}
                className={`flex flex-col items-center gap-1 px-3 py-2 rounded-2xl transition-all ${
                  currentPage === item.id
                    ? 'text-pink-600 scale-110'
                    : 'text-gray-500'
                }`}
              >
                <span className="text-2xl">{item.emoji}</span>
                <span className="text-xs font-medium">{item.label}</span>
                {currentPage === item.id && (
                  <div className="w-1.5 h-1.5 bg-pink-500 rounded-full mt-0.5"></div>
                )}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      {/* Spacer for mobile nav */}
      <div className="md:hidden h-20"></div>
    </>
  );
}
