import React from 'react';
import './problem.css';

const Problem: React.FC = () => {
  return (
    <section id="s2" className="min-h-screen relative overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-12 py-[120px] relative z-[2]">
        <div className="section-eyebrow reveal">02 — El Problema</div>
        <h2 className="section-title reveal reveal-delay-1">El Eslabón Perdido:<br />La Gestión del Último Kilómetro</h2>
        <p className="section-body reveal reveal-delay-2">
          Mientras el agro peruano exporta a 60 países, sus operaciones de campo se coordinan 
          con papel, WhatsApp y hojas de cálculo. La información llega tarde, fragmentada e imprecisa.
        </p>

        <div className="flow-diagram reveal reveal-delay-3">
          <div className="flow-node">
            <span className="flow-icon">📋</span>
            <div className="flow-label">Papel</div>
            <div className="flow-sub">Tareo manual en campo</div>
          </div>
          <div className="flow-arrow">→</div>
          <div className="flow-node">
            <span className="flow-icon">💬</span>
            <div className="flow-label">WhatsApp</div>
            <div className="flow-sub">Fotos y notas de voz</div>
          </div>
          <div className="flow-arrow">→</div>
          <div className="flow-node">
            <span className="flow-icon">📊</span>
            <div className="flow-label">Excel</div>
            <div className="flow-sub">Consolidación tardía</div>
          </div>
          <div className="flow-arrow danger-arrow">→</div>
          <div className="flow-node danger">
            <span className="flow-icon">⚠️</span>
            <div className="flow-label">Error</div>
            <div className="flow-sub">Datos inconsistentes, decisiones ciegas</div>
          </div>
        </div>

        <div className="pain-grid">
          <div className="pain-item reveal reveal-delay-1">
            <div className="pain-metric">24-48h</div>
            <div className="pain-text">Latencia de información entre campo y oficina central</div>
          </div>
          <div className="pain-item reveal reveal-delay-2">
            <div className="pain-metric">70%</div>
            <div className="pain-text">Del campo peruano opera sin conectividad digital estable</div>
          </div>
          <div className="pain-item reveal reveal-delay-3">
            <div className="pain-metric">3 pasos</div>
            <div className="pain-text">Por cada dato: papel → foto → transcripción manual</div>
          </div>
          <div className="pain-item reveal reveal-delay-4">
            <div className="pain-metric">∞ errores</div>
            <div className="pain-text">De transcripción sin trazabilidad ni auditoría posible</div>
          </div>
          <div className="pain-item reveal reveal-delay-5">
            <div className="pain-metric">0 API</div>
            <div className="pain-text">Sin integración hacia ERP corporativo ni reportes automáticos</div>
          </div>
          <div className="pain-item reveal reveal-delay-1">
            <div className="pain-metric">5+ tools</div>
            <div className="pain-text">Fragmentación: WhatsApp, papel, Excel, email, calls</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Problem;
