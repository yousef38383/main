
import React from 'react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="relative py-24 bg-cosmic-dark">
      <div
        className="absolute inset-0 opacity-30 -z-10"
        style={{
          backgroundImage: 'radial-gradient(circle at 20% 25%, rgba(79, 70, 229, 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 75%, rgba(236, 72, 153, 0.1) 0%, transparent 50%)'
        }}
        aria-hidden="true"
      />

      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className="inline-block mb-4 px-4 py-1.5 rounded-full cosmic-glass">
            <span className="text-xs font-medium text-cosmic-lavender">تواصل معي</span>
          </div>

          <h2 dir="rtl" className="text-3xl md:text-4xl font-bold mb-6 tracking-tighter text-cosmic-white">
            مستعد <span className="text-gradient">لإطلاق</span> مشروعك القادم؟
          </h2>

          <p dir="rtl" className="text-cosmic-silver text-lg max-w-2xl mx-auto">
            أنا دائماً مستعد لمناقشة المشاريع الجديدة، الأفكار الإبداعية أو الفرص لأكون جزءاً من رؤيتك.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="cosmic-card p-8 md:p-10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 mb-4 rounded-full cosmic-glass bg-cosmic-purple/10">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-cosmic-lavender"
                  >
                    <path
                      d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <circle
                      cx="12"
                      cy="10"
                      r="3"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <h3 className="text-sm font-medium text-cosmic-white mb-1">Location</h3>
                <p className="text-cosmic-silver text-sm">Cairo, Egypt</p>
              </div>

              <a href="tel:+201150321340" className="text-center group cursor-pointer transition-transform hover:scale-105">
                <div className="inline-flex items-center justify-center w-12 h-12 mb-4 rounded-full cosmic-glass bg-cosmic-purple/10 group-hover:bg-cosmic-purple/20 transition-colors">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-cosmic-lavender"
                  >
                    <path
                      d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <h3 className="text-sm font-medium text-cosmic-white mb-1">Phone</h3>
                <p className="text-cosmic-silver text-sm group-hover:text-cosmic-lavender transition-colors">+20 115 032 1340</p>
              </a>

              <a href="https://wa.me/201150321340" target="_blank" rel="noopener noreferrer" className="text-center group cursor-pointer transition-transform hover:scale-105">
                <div className="inline-flex items-center justify-center w-12 h-12 mb-4 rounded-full cosmic-glass bg-cosmic-purple/10 group-hover:bg-cosmic-purple/20 transition-colors">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-cosmic-lavender"
                  >
                    <path
                      d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <h3 className="text-sm font-medium text-cosmic-white mb-1">WhatsApp</h3>
                <p className="text-cosmic-silver text-sm group-hover:text-cosmic-lavender transition-colors">Chat on WhatsApp</p>
              </a>

              <a href="mailto:youssefesaam25@gmail.com" className="text-center group cursor-pointer transition-transform hover:scale-105">
                <div className="inline-flex items-center justify-center w-12 h-12 mb-4 rounded-full cosmic-glass bg-cosmic-purple/10 group-hover:bg-cosmic-purple/20 transition-colors">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-cosmic-lavender"
                  >
                    <path
                      d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M22 6l-10 7L2 6"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <h3 className="text-sm font-medium text-cosmic-white mb-1">Email</h3>
                <p className="text-cosmic-silver text-sm group-hover:text-cosmic-lavender transition-colors">youssefesaam25@gmail.com</p>
              </a>
            </div>
          </div>
        </div>

        <footer className="mt-16 text-center text-cosmic-silver text-sm">
          <p dir="rtl">© {new Date().getFullYear()} • مصمم بشغف ودقة.</p>
        </footer>
      </div>
    </section>
  );
};

export default Contact;
