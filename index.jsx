import React, { useState } from 'react';

function Index() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600 relative">
      {/* Menu Dot in top-right */}
      <div className="absolute top-4 right-6">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-white text-3xl focus:outline-none"
          aria-label="Menu"
        >
          &#8942; {/* Vertical Ellipsis Unicode (⋮) */}
        </button>
        {menuOpen && (
          <div className="bg-white rounded shadow-lg py-2 px-4 mt-2 flex flex-col items-start">
            <a
              href="/login"
              className="text-purple-700 font-medium py-1 px-2 rounded hover:bg-purple-50 w-full"
              onClick={() => setMenuOpen(false)}
            >
              Login
            </a>
            <a
              href="/register"
              className="text-blue-700 font-medium py-1 px-2 rounded hover:bg-blue-50 w-full"
              onClick={() => setMenuOpen(false)}
            >
              Register
            </a>
          </div>
        )}
      </div>

      {/* Main Content */}
      <h1 className="text-5xl font-extrabold text-white mb-4 mt-8">Welcome to Diva</h1>
      <p className="text-white text-lg mb-6 text-center max-w-xl">
        Diva is your gateway to earning extra income online! Sign up, get your unique referral link, and start sharing sponsored posts. 
        Track your earnings, redeem bonuses on our spinning wheel, and connect with other affiliates in real time. 
        Experience secure payouts, instant support, and a vibrant community—join Diva and unlock your earning potential!
      </p>
      <div className="mb-8 flex gap-6">
        <a href="/register" className="bg-white text-blue-600 px-6 py-2 rounded font-semibold hover:bg-blue-50 transition">
          Register
        </a>
        <a href="/login" className="bg-white text-purple-600 px-6 py-2 rounded font-semibold hover:bg-purple-50 transition">
          Login
        </a>
      </div>
      <footer className="text-white opacity-70 mt-12 text-xs text-center">
        &copy; {new Date().getFullYear()} Diva Affiliate Platform. Grow your network, boost your earnings.
      </footer>
    </div>
  );
}

export default Index;
