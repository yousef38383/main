
import React, { useEffect, useRef } from 'react';

const SpaceBackground: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    
    const container = containerRef.current;
    const STAR_COUNT = 300;
    const SHOOTING_STAR_COUNT = 3;
    const PARTICLE_COUNT = 20;
    
    // Create stars with varied sizes
    for (let i = 0; i < STAR_COUNT; i++) {
      const star = document.createElement('div');
      star.classList.add('star');
      
      // More variety in star sizes
      const size = Math.random() * 3 + 0.5;
      star.style.width = `${size}px`;
      star.style.height = `${size}px`;
      
      // Random position
      star.style.top = `${Math.random() * 100}%`;
      star.style.left = `${Math.random() * 100}%`;
      
      // Random opacity and twinkle animation
      star.style.opacity = `${Math.random() * 0.8 + 0.2}`;
      star.style.animation = `twinkle ${Math.random() * 5 + 2}s infinite ${Math.random() * 5}s`;
      
      // Add glow to some stars
      if (Math.random() > 0.8) {
        star.style.boxShadow = `0 0 ${size * 2}px rgba(255, 255, 255, 0.8)`;
      }
      
      container.appendChild(star);
    }
    
    // Create floating particles
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const particle = document.createElement('div');
      particle.classList.add('particle');
      
      const size = Math.random() * 6 + 2;
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      particle.style.background = `radial-gradient(circle, rgba(129, 140, 248, ${Math.random() * 0.5 + 0.3}), rgba(236, 72, 153, ${Math.random() * 0.3 + 0.1}))`;
      particle.style.top = `${Math.random() * 100}%`;
      particle.style.left = `${Math.random() * 100}%`;
      particle.style.animationDelay = `${Math.random() * 20}s`;
      particle.style.animationDuration = `${Math.random() * 10 + 15}s`;
      
      container.appendChild(particle);
    }
    
    // Create shooting stars at random intervals
    const createShootingStar = () => {
      const shootingStar = document.createElement('div');
      shootingStar.classList.add('shooting-star');
      
      // Random position at top edge
      shootingStar.style.top = `${Math.random() * 50}%`;
      shootingStar.style.left = `${Math.random() * 50}%`;
      
      container.appendChild(shootingStar);
      
      // Remove after animation completes
      setTimeout(() => {
        shootingStar.remove();
      }, 5000);
    };
    
    // Create initial shooting stars
    for (let i = 0; i < SHOOTING_STAR_COUNT; i++) {
      setTimeout(() => {
        createShootingStar();
      }, Math.random() * 5000);
    }
    
    // Periodically create new shooting stars
    const interval = setInterval(() => {
      createShootingStar();
    }, 6000);
    
    // Mouse parallax effect
    const handleMouseMove = (e: MouseEvent) => {
      const stars = container.querySelectorAll('.star');
      const particles = container.querySelectorAll('.particle');
      
      const moveX = (e.clientX - window.innerWidth / 2) / 50;
      const moveY = (e.clientY - window.innerHeight / 2) / 50;
      
      stars.forEach((star, index) => {
        const speed = (index % 3 + 1) * 0.5;
        (star as HTMLElement).style.transform = `translate(${moveX * speed}px, ${moveY * speed}px)`;
      });
      
      particles.forEach((particle, index) => {
        const speed = (index % 3 + 1) * 0.8;
        (particle as HTMLElement).style.transform = `translate(${moveX * speed}px, ${moveY * speed}px)`;
      });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      clearInterval(interval);
      window.removeEventListener('mousemove', handleMouseMove);
      while (container.firstChild) {
        container.removeChild(container.firstChild);
      }
    };
  }, []);

  return (
    <div 
      ref={containerRef} 
      className="fixed inset-0 z-0 overflow-hidden pointer-events-none"
      aria-hidden="true"
    />
  );
};

export default SpaceBackground;
