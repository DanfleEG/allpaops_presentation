import React from 'react';
import './mission.css';

const Mission: React.FC = () => {
  return (
    <section id="s5" className="min-h-screen relative overflow-hidden">
      <div className="mission-bg"></div>
      <div className="min-h-screen flex items-center w-full py-[120px]">
        <div className="mission-center">
          <div className="section-eyebrow reveal justify-center mb-8">05 — Misión</div>
          <div className="mission-quote reveal reveal-delay-1">
            "Nuestra misión es digitalizar el <span className="highlight">"último kilómetro"</span> en el campo 
            para erradicar la <span className="highlight">"trampa de la manualidad"</span>, transformando los 
            procesos operativos en <span className="green">activos estratégicos auditables</span> que eliminen 
            la latencia de datos, maximicen la rentabilidad y aseguren el 
            <span className="green">cumplimiento normativo global</span> de los agronegocios."
          </div>
          <div className="mission-pillars reveal reveal-delay-2">
            <span className="pillar">Digitalización</span>
            <span className="pillar">Audit-Ready</span>
            <span className="pillar">Offline-First</span>
            <span className="pillar">Trazabilidad Total</span>
            <span className="pillar">Compliance Global</span>
            <span className="pillar">Rentabilidad</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
