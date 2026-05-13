import { useEffect, useState } from 'react';
import gsap from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

gsap.registerPlugin(ScrollToPlugin);

export function useNavigation() {
  const [activeSection, setActiveSection] = useState(0);
  const sections = [
    'hero', 'problem', 'impact', 'product', 'mission', 
    'vision', 'objectives', 'foda', 'porter', 'value-chain', 'closing'
  ];

  const scrollToSection = (index: number) => {
    if (index < 0 || index >= sections.length) return;
    
    const target = `#s${index + 1}`;
    gsap.to(window, {
      duration: 1,
      scrollTo: { y: target, autoKill: false },
      ease: 'power3.inOut'
    });
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      switch (e.key) {
        case 'ArrowDown':
        case 'PageDown':
          e.preventDefault();
          scrollToSection(activeSection + 1);
          break;
        case 'ArrowUp':
        case 'PageUp':
          e.preventDefault();
          scrollToSection(activeSection - 1);
          break;
        case ' ':
          e.preventDefault();
          if (e.shiftKey) {
            scrollToSection(activeSection - 1);
          } else {
            scrollToSection(activeSection + 1);
          }
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeSection]);

  useEffect(() => {
    const observers = sections.map((_, i) => {
      const el = document.querySelector(`#s${i + 1}`);
      if (!el) return null;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(i);
          }
        },
        { threshold: 0.5 }
      );

      observer.observe(el);
      return observer;
    });

    return () => {
      observers.forEach(obs => obs?.disconnect());
    };
  }, []);

  return { activeSection, scrollToSection };
}
