import { useEffect, useState, useRef } from 'react';
import gsap from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

gsap.registerPlugin(ScrollToPlugin);

export function useNavigation() {
  const [activeSection, setActiveSection] = useState(0);
  const [isMoving, setIsMoving] = useState(false);
  const sectionsCount = 11;
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const scrollToSection = (index: number) => {
    if (index < 0 || index >= sectionsCount || isMoving) return;
    
    setIsMoving(true);
    const target = `#s${index + 1}`;
    
    gsap.to(window, {
      duration: 1.2,
      scrollTo: { y: target, autoKill: false },
      ease: 'power4.inOut',
      onComplete: () => {
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
        timeoutRef.current = setTimeout(() => {
          setIsMoving(false);
        }, 150);
      }
    });

    // Update active section immediately for UI feedback
    setActiveSection(index);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const keysToGuard = ['ArrowDown', 'ArrowUp', 'PageDown', 'PageUp', ' '];
      if (keysToGuard.includes(e.key)) {
        e.preventDefault();
      }

      if (isMoving) return;

      switch (e.key) {
        case 'ArrowDown':
        case 'PageDown':
          scrollToSection(activeSection + 1);
          break;
        case 'ArrowUp':
        case 'PageUp':
          scrollToSection(activeSection - 1);
          break;
        case ' ':
          if (e.shiftKey) {
            scrollToSection(activeSection - 1);
          } else {
            scrollToSection(activeSection + 1);
          }
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown, { passive: false });
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeSection, isMoving]);

  useEffect(() => {
    const observers = Array.from({ length: sectionsCount }).map((_, i) => {
      const el = document.querySelector(`#s${i + 1}`);
      if (!el) return null;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting && !isMoving) {
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
  }, [isMoving]);

  return { 
    activeSection, 
    scrollToSection, 
    progress: (activeSection / (sectionsCount - 1)) * 100 
  };
}
