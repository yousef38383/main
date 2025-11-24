
import React, { useEffect, useRef } from 'react';
import ProjectCard from './ProjectCard';

const projectsData = [
  {
    title: 'مطعم سمك',
    description: 'موقع إلكتروني عصري لمطعم متخصص في المأكولات البحرية، يتميز بتصميم جذاب وسهل الاستخدام مع عرض قائمة الطعام بشكل احترافي.',
    tags: ['Next.js', 'TypeScript', 'React'],
    link: 'https://fishresturant.netlify.app/',
  },
  {
    title: 'محل أثاث',
    description: 'منصة إلكترونية لعرض وبيع الأثاث المنزلي، مصممة بعناية لإبراز جمال القطع مع واجهة مستخدم بديهية وسهلة التنقل.',
    tags: ['Next.js', 'TypeScript', 'UI/UX'],
    link: 'https://strong-ganache-96ce0d.netlify.app/',
  },
  {
    title: 'محل أكل طازج',
    description: 'موقع مطعم يركز على الطعام الطازج والصحي، بتصميم نظيف وعصري يعكس جودة المنتجات المقدمة.',
    tags: ['Next.js', 'Tailwind', 'UI/UX'],
    link: 'https://fresh-sigma-two.vercel.app/',
  },
  {
    title: 'لوحة تحكم',
    description: 'لوحة تحكم تفاعلية وشاملة لإدارة البيانات والإحصائيات، مع واجهة مستخدم حديثة وأدوات تحليلية متقدمة.',
    tags: ['Vite', 'TypeScript', 'React'],
    link: 'https://dash-rho-steel.vercel.app/',
  },
  {
    title: 'محل لحم',
    description: 'موقع متجر لبيع اللحوم الطازجة، يتميز بتصميم احترافي وعرض واضح للمنتجات مع معلومات تفصيلية.',
    tags: ['Next.js', 'TypeScript', 'React'],
    link: 'https://meat-six.vercel.app/',
  },
  {
    title: 'بلوج',
    description: 'منصة تدوين عصرية لنشر المقالات والمحتوى، مع تصميم نظيف يركز على القراءة وتجربة المستخدم.',
    tags: ['Vite', 'TypeScript', 'React'],
    link: 'https://blog-seven-olive-81.vercel.app/',
  },
  {
    title: 'نيون كود',
    description: 'موقع تقني بتصميم نيون مميز وعصري، يعرض خدمات البرمجة والتطوير بأسلوب إبداعي وجذاب.',
    tags: ['Vite', 'TypeScript', 'React'],
    link: 'https://neon-code-lyart.vercel.app/',
  },
  {
    title: 'بيزنس',
    description: 'موقع أعمال احترافي مصمم لعرض الخدمات والحلول التجارية، بواجهة أنيقة تعكس الاحترافية والثقة.',
    tags: ['Vite', 'TypeScript', 'React'],
    link: 'https://business-two-sable.vercel.app/',
  },
  {
    title: 'شركة الشحن',
    description: 'موقع شركة شحن ولوجستيات، يوفر معلومات واضحة عن الخدمات مع تصميم يعكس السرعة والموثوقية.',
    tags: ['Next.js', 'TypeScript', 'React'],
    link: 'https://shipping-silk.vercel.app/',
  },
  {
    title: 'مطعم حلويات',
    description: 'موقع أنيق لمطعم حلويات يعرض المنتجات بطريقة مغرية مع تجربة تصفح سلسة وتصميم يعكس جمال الحلويات.',
    tags: ['Vite', 'TypeScript', 'React'],
    link: 'https://sweethousedreams.netlify.app/',
  },
];

const Projects: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && cardsRef.current) {
          const cards = cardsRef.current.querySelectorAll('[data-loaded="false"]');
          cards.forEach((card) => {
            card.setAttribute('data-loaded', 'true');
          });
        }
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section 
      id="projects" 
      ref={sectionRef}
      className="relative py-28 lg:py-40 bg-cosmic-dark"
    >
      {/* Decorative elements */}
      <div 
        className="absolute inset-0 opacity-40 -z-10"
        style={{
          backgroundImage: 'radial-gradient(circle at 25% 40%, rgba(79, 70, 229, 0.15) 0%, transparent 50%), radial-gradient(circle at 80% 60%, rgba(236, 72, 153, 0.15) 0%, transparent 50%)'
        }}
        aria-hidden="true"
      />
      
      <div className="absolute top-0 right-0 w-72 h-72 bg-cosmic-purple/10 rounded-full blur-3xl -z-10" aria-hidden="true" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-cosmic-pink/10 rounded-full blur-3xl -z-10" aria-hidden="true" />
      
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-20 lg:mb-32">
          <div className="inline-block mb-6 px-5 py-2 rounded-full cosmic-glass">
            <span className="text-sm font-medium text-cosmic-lavender">عرض أعمالي</span>
          </div>
          
          <h2 dir="rtl" className="text-3xl md:text-5xl font-bold mb-8 lg:mb-12 tracking-tighter text-cosmic-white leading-tight lg:leading-normal">
            <span className="text-gradient bg-gradient-to-r from-cosmic-lavender via-cosmic-purple to-cosmic-pink bg-clip-text text-transparent inline-block py-1">مشاريع</span> مميزة
          </h2>
          
          <p dir="rtl" className="text-cosmic-silver text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            استكشف مجموعة من أهم مشاريعي، كل منها مصمم بعناية فائقة وابتكار إبداعي.
          </p>
        </div>
        
        <div 
          ref={cardsRef}
          className="grid grid-cols-1 md:grid-cols-2 gap-10"
        >
          {projectsData.map((project, index) => (
            <ProjectCard
              key={index}
              index={index}
              title={project.title}
              description={project.description}
              tags={project.tags}
              link={project.link}
            />
          ))}
        </div>
        
        <div className="mt-20 text-center">
          <a 
            href="#contact"
            className="inline-flex items-center cosmic-glass border border-cosmic-lavender/50 bg-cosmic-purple/10 hover:bg-cosmic-purple/20 text-cosmic-white px-10 py-4 rounded-full font-medium transition-all duration-300 ease-in-out relative overflow-hidden group"
          >
            <span className="relative z-10 flex items-center">
              <svg 
                className="ml-3 h-5 w-5 transform group-hover:translate-x-1 transition-transform duration-300 rotate-180" 
                fill="none" 
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M14 5l7 7m0 0l-7 7m7-7H3" 
                />
              </svg>
              لنعمل معاً
            </span>
            <span className="absolute inset-0 scale-x-0 group-hover:scale-x-100 bg-gradient-to-r from-cosmic-purple/30 to-cosmic-pink/30 origin-left transition-transform duration-500 ease-out -z-10"></span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
