import React from 'react';
import { objectivesData } from '@/src/data/storytelling';
import './objectives.css';

const Objectives: React.FC = () => {
  return (
    <section id="s7" className="min-h-screen relative overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-12 py-[120px] relative z-[2]">
        <div className="section-eyebrow reveal">07 — Objetivos Estratégicos</div>
        <h2 className="section-title reveal reveal-delay-1">Ejecución y Escalabilidad</h2>
        <p className="section-body reveal reveal-delay-2">Cinco vectores de crecimiento que definen la hoja de ruta de AllpaOps como SaaS enterprise para el agronegocio latinoamericano.</p>

        <div className="objectives-grid">
          {objectivesData.map((obj, i) => (
            <div key={i} className={`obj-card reveal reveal-delay-${i + 1}`}>
              <div className="obj-num">0{i + 1} /</div>
              <span className="obj-icon">{obj.icon}</span>
              <div className="obj-name">{obj.title}</div>
              <div className="obj-items">
                {obj.items.map((item, j) => (
                  <div key={j} className="obj-item">{item}</div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Objectives;
