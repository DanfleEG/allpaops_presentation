import React from 'react';
import { fodaData } from '@/src/data/storytelling';
import './foda.css';

const Foda: React.FC = () => {
  return (
    <section id="s8" className="min-h-screen relative overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-12 py-[120px] relative z-[2]">
        <div className="section-eyebrow reveal">08 — Análisis FODA</div>
        <h2 className="section-title reveal reveal-delay-1">Pensamiento Estratégico</h2>

        <div className="foda-grid reveal reveal-delay-2">
          {fodaData.map((cell, i) => (
            <div key={i} className={`foda-cell ${cell.type}`}>
              <div className="foda-header">
                <span className="foda-letter">{cell.type.toUpperCase()}</span>
                <span className="foda-title">{cell.title}</span>
              </div>
              <div className="foda-items">
                {cell.items.map((item, j) => (
                  <div key={j} className="foda-item">
                    <div className="foda-dot"></div>
                    {item}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Foda;
