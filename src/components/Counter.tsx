import React, { useEffect, useState, useRef } from 'react';

interface CounterProps {
  target: number;
  decimal?: boolean;
}

export const Counter: React.FC<CounterProps> = ({ target, decimal = false }) => {
  const [count, setCount] = useState(0);
  const elementRef = useRef<HTMLSpanElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          animate();
        }
      },
      { threshold: 0.5 }
    );

    if (elementRef.current) observer.observe(elementRef.current);
    return () => observer.disconnect();
  }, [hasAnimated, target]);

  const animate = () => {
    let startTime: number | null = null;
    const duration = 2000;

    const step = (now: number) => {
      if (!startTime) startTime = now;
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = eased * target;
      
      setCount(current);
      if (progress < 1) requestAnimationFrame(step);
    };

    requestAnimationFrame(step);
  };

  return (
    <span ref={elementRef}>
      {decimal ? count.toFixed(1) : Math.round(count).toLocaleString('es-PE')}
    </span>
  );
};
