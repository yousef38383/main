
import React, { useEffect, useRef } from 'react';

const skills = [
  { name: 'تصميم واجهات المستخدم', level: 25 },
  { name: 'تطوير الواجهات الأمامية', level: 85 },
  { name: 'React', level: 80 },
  { name: 'Next.js', level: 80 },
  { name: 'Python', level: 75 },
  { name: 'SQL', level: 70 },
  { name: 'تكامل الذكاء الاصطناعي', level: 80 },
  { name: 'SEO', level: 25 },
];

const About: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
            entry.target.classList.remove('opacity-0');
            observer.unobserve(entry.target);

            // If this is the skills section, animate progress bars
            if (entry.target === skillsRef.current) {
              const bars = skillsRef.current?.querySelectorAll('.skill-progress');
              bars?.forEach((bar, index) => {
                setTimeout(() => {
                  bar.classList.add('animate-progress');
                }, 300 + (index * 100));
              });
            }
          }
        });
      },
      { threshold: 0.1 }
    );

    if (contentRef.current) observer.observe(contentRef.current);
    if (skillsRef.current) observer.observe(skillsRef.current);

    return () => {
      if (contentRef.current) observer.unobserve(contentRef.current);
      if (skillsRef.current) observer.unobserve(skillsRef.current);
    };
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative py-28 bg-cosmic-navy/30"
    >
      {/* Decorative elements */}
      <div
        className="absolute inset-0 opacity-40 -z-10"
        style={{
          backgroundImage: 'radial-gradient(circle at 75% 25%, rgba(236, 72, 153, 0.15) 0%, transparent 50%), radial-gradient(circle at 20% 70%, rgba(79, 70, 229, 0.15) 0%, transparent 50%)'
        }}
        aria-hidden="true"
      />

      <div className="absolute top-0 left-0 w-64 h-64 bg-cosmic-purple/10 rounded-full blur-3xl -z-10" aria-hidden="true" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-cosmic-pink/10 rounded-full blur-3xl -z-10" aria-hidden="true" />

      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
            <div
              ref={contentRef}
              className="opacity-0 flex flex-col justify-center lg:order-2"
            >
              <h2 dir="rtl" className="text-3xl md:text-4xl xl:text-5xl font-bold mb-8 tracking-tighter text-cosmic-white leading-tight">
                أصمم مواقع <span className="text-gradient">سريعة وجميلة</span> سهلة الاستخدام
              </h2>

              <p dir="rtl" className="text-cosmic-silver mb-6 text-lg leading-relaxed">
                مطور واجهات أمامية متخصص في بناء مواقع متجاوبة وسريعة. أحول الأفكار إلى كود نظيف يعمل بسلاسة على جميع الأجهزة.
              </p>

              <p dir="rtl" className="text-cosmic-silver mb-6 text-lg leading-relaxed">
                خبرتي الأساسية في تطوير الواجهات الأمامية، مع معرفة جيدة بالواجهات الخلفية وتصميم الأنظمة، مما يساعدني على بناء حلول أفضل وأذكى.
              </p>

              <p dir="rtl" className="text-cosmic-silver mb-8 text-lg leading-relaxed">
                أطور مهاراتي باستمرار وأتعلم أدوات جديدة لتحسين أداء المواقع وتجربة المستخدم. الواجهات الرائعة لا تُصمم فقط، بل تُبنى بعناية. — يوسف عصام.
              </p>

              <div className="flex justify-end mt-4">
                <a
                  href="#contact"
                  className="cosmic-glass border border-cosmic-lavender/50 bg-cosmic-purple/10 hover:bg-cosmic-purple/20 text-cosmic-white px-8 py-3 rounded-full text-sm font-medium transition-all duration-300 ease-in-out relative overflow-hidden group"
                >
                  <span className="relative z-10">تواصل معي</span>
                  <span className="absolute inset-0 scale-x-0 group-hover:scale-x-100 bg-gradient-to-r from-cosmic-purple/30 to-cosmic-pink/30 origin-left transition-transform duration-500 ease-out -z-10"></span>
                </a>
              </div>
            </div>

            <div
              ref={skillsRef}
              className="opacity-0 cosmic-card p-8 md:p-10 relative overflow-hidden lg:order-1"
            >
              {/* Decorative blur */}
              <div className="absolute -top-24 -right-24 w-48 h-48 bg-cosmic-purple/20 rounded-full blur-3xl" aria-hidden="true" />

              <h3 dir="rtl" className="text-xl font-semibold mb-8 text-cosmic-white">المهارات والخبرات</h3>

              <div className="space-y-7">
                {skills.map((skill, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium text-cosmic-silver">{skill.name}</span>
                      <span className="text-sm font-medium text-cosmic-lavender">{skill.level}%</span>
                    </div>
                    <div className="w-full h-2 bg-cosmic-navy rounded-full overflow-hidden backdrop-blur-sm">
                      <div
                        className="skill-progress h-full bg-gradient-to-r from-cosmic-purple to-cosmic-lavender rounded-full transform scale-x-0 origin-left transition-transform duration-1000 ease-out"
                        style={{
                          width: `${skill.level}%`,
                          transitionDelay: `${index * 100}ms`
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              <style>
                {`
                @keyframes progress {
                  from { transform: scaleX(0); }
                  to { transform: scaleX(1); }
                }
                .animate-progress {
                  animation: progress 1s ease-out forwards;
                }
                `}
              </style>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
