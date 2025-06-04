import React from 'react';

const OfferPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="container mx-auto px-4 py-6 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <span className="text-yellow-500 text-3xl">👑</span>
          <span className="text-2xl font-semibold">Luxify</span>
        </div>
        <nav className="flex space-x-8">
          <a href="#about" className="hover:text-yellow-500">About</a>
          <a href="#resources" className="hover:text-yellow-500">Resources</a>
          <button className="bg-yellow-500/10 text-yellow-500 px-6 py-2 rounded-full hover:bg-yellow-500/20">
            Get a Custom Offer
          </button>
        </nav>
      </header>

      {/* Hero Section */}
      <main className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-6xl font-serif mb-8">
          Elevate <span className="text-yellow-500">çiçekzen's</span><br />
          Floral Presence with Lufiy
        </h1>
        <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
          Tailored luxury marketing services designed to position cicekzen as the most desired floral brand in the market.
        </p>
        <button className="bg-yellow-500 text-black px-8 py-4 rounded-full text-lg font-medium hover:bg-yellow-400">
          Get a Custom Offer
        </button>
      </main>

      {/* Services Grid */}
      <section className="container mx-auto px-4 py-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Brand Positioning Card */}
        <div className="bg-zinc-900 p-8 rounded-lg">
          <h3 className="text-2xl font-serif text-yellow-500 mb-4">
            Brand Positioning Refinement
          </h3>
          <p className="text-gray-300 mb-6">
            Define cicekzen's unique identify with a refined brand voice, customer personas, and a compelling brand story.
          </p>
          <div className="space-y-4">
            <h4 className="text-lg font-medium">Deliverables</h4>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2">
                <span className="text-yellow-500">✓</span>
                <span>Market Research Report</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="text-yellow-500">✓</span>
                <span>USP & Brand Voice Document</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="text-yellow-500">✓</span>
                <span>Visual Identity Guidelines</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="text-yellow-500">✓</span>
                <span>Customer Persona Set</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="text-yellow-500">✓</span>
                <span>Brand Story Concept</span>
              </li>
            </ul>
            <button className="w-full bg-zinc-800 text-white py-3 rounded-lg hover:bg-zinc-700">
              Request Sample
            </button>
          </div>
        </div>

        {/* Customer Experience Card */}
        <div className="bg-zinc-900 p-8 rounded-lg">
          <h3 className="text-2xl font-serif text-yellow-500 mb-4">
            Elevated Customer Experience
          </h3>
          <p className="text-gray-300 mb-6">
            Deliver exceptional service at every touchpoint and turn customers into brand advocates.
          </p>
          <div className="space-y-4">
            <h4 className="text-lg font-medium">Deliverables</h4>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2">
                <span className="text-yellow-500">✓</span>
                <span>Customer Feedback System Setup</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="text-yellow-500">✓</span>
                <span>Staff Service Excellence Training</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="text-yellow-500">✓</span>
                <span>Loyalty Program Concept</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="text-yellow-500">✓</span>
                <span>In-store Experience Enhancements</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="text-yellow-500">✓</span>
                <span>Personalized Offer Framework</span>
              </li>
            </ul>
            <button className="w-full bg-zinc-800 text-white py-3 rounded-lg hover:bg-zinc-700">
              See Details
            </button>
          </div>
        </div>

        {/* Performance Dashboard Card */}
        <div className="bg-zinc-900 p-8 rounded-lg">
          <h3 className="text-2xl font-serif text-yellow-500 mb-4">
            Monthly Performance Dashboard
          </h3>
          <div className="space-y-4">
            <ul className="space-y-2">
              <li className="flex items-center space-x-2">
                <span className="text-yellow-500">•</span>
                <span>Brand Awareness Score</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="text-yellow-500">•</span>
                <span>Social Engagement Metrics</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="text-yellow-500">•</span>
                <span>Online Sales Growth</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="text-yellow-500">•</span>
                <span>NPS & CSAT Ratings</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-4 py-8 flex justify-between items-center border-t border-zinc-800">
        <div className="flex space-x-6">
          <a href="#contact" className="text-gray-400 hover:text-white">Contact Us</a>
          <a href="#terms" className="text-gray-400 hover:text-white">Terms</a>
          <a href="#privacy" className="text-gray-400 hover:text-white">Privacy</a>
        </div>
        <div className="flex space-x-6">
          <a href="#twitter" className="text-gray-400 hover:text-white">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
            </svg>
          </a>
          <a href="#linkedin" className="text-gray-400 hover:text-white">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </a>
          <a href="#facebook" className="text-gray-400 hover:text-white">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
          </a>
        </div>
      </footer>
    </div>
  );
};

export default OfferPage; 