
import React, { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

const Hero: React.FC = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
            entry.target.classList.remove('opacity-0');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (titleRef.current) observer.observe(titleRef.current);
    if (subtitleRef.current) observer.observe(subtitleRef.current);
    if (ctaRef.current) observer.observe(ctaRef.current);

    return () => {
      if (titleRef.current) observer.unobserve(titleRef.current);
      if (subtitleRef.current) observer.unobserve(subtitleRef.current);
      if (ctaRef.current) observer.unobserve(ctaRef.current);
    };
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden"
    >
      <div
        className={cn(
          "absolute inset-0 -z-10",
          "bg-[radial-gradient(ellipse_at_center,rgba(79,70,229,0.15),transparent_50%)]"
        )}
        aria-hidden="true"
      />

      {/* Enhanced decorative elements */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-cosmic-purple/15 rounded-full blur-3xl animate-pulse -z-10" aria-hidden="true" style={{ animationDuration: '4s' }} />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cosmic-pink/15 rounded-full blur-3xl animate-pulse -z-10" aria-hidden="true" style={{ animationDuration: '6s' }} />
      <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-cosmic-lavender/10 rounded-full blur-3xl animate-pulse -z-10" aria-hidden="true" style={{ animationDuration: '5s' }} />

      <div className="container mx-auto px-6 py-12 md:py-24">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-block mb-6 px-5 py-2 rounded-full cosmic-glass">
            <span className="text-sm font-medium text-cosmic-lavender">مرحباً بك في موقعي</span>
          </div>

          <h1
            ref={titleRef}
            dir="rtl"
            className="opacity-0 text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-8 text-cosmic-white leading-[1.4] md:leading-[1.4] lg:leading-[1.3] xl:leading-[1.3]"
          >
            أقوم بإنشاء مواقع إلكترونية <span className="text-gradient bg-gradient-to-r from-cosmic-lavender via-cosmic-purple to-cosmic-pink bg-clip-text text-transparent">سريعة وعصرية</span>، تجمع بين جمال المظهر والأداء المثالي.
          </h1>

          <p
            ref={subtitleRef}
            dir="rtl"
            className="opacity-0 text-lg md:text-xl lg:text-2xl text-cosmic-silver mb-12 max-w-3xl mx-auto leading-loose"
          >
            أساعد الأفراد والشركات على بناء حضور قوي ومؤثر على الإنترنت.
          </p>

          <div
            ref={ctaRef}
            className="opacity-0 flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <a
              href="#projects"
              className="text-cosmic-silver hover:text-cosmic-white px-10 py-4 rounded-full font-medium transition-all duration-300 ease-in-out focus:outline-none flex items-center group"
            >
              <svg
                className="mr-2 h-5 w-5 transform group-hover:-translate-x-1 transition-transform duration-300 rotate-180"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
              شاهد أعمالي
            </a>
            <a
              href="#contact"
              className="cosmic-glass border border-cosmic-lavender/50 bg-cosmic-purple/10 hover:bg-cosmic-purple/20 text-cosmic-white px-10 py-4 rounded-full font-medium transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-cosmic-lavender focus:ring-offset-2 focus:ring-offset-cosmic-dark relative overflow-hidden group btn-shine glow-pulse hover:scale-105"
            >
              <span className="relative z-10">تواصل معي</span>
              <span className="absolute inset-0 scale-x-0 group-hover:scale-x-100 bg-gradient-to-r from-cosmic-purple/40 to-cosmic-pink/40 origin-left transition-transform duration-500 ease-out -z-10"></span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
