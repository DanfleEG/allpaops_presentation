import React from 'react';
import './vision.css';

const Vision: React.FC = () => {
  return (
    <section id="s6" className="min-h-screen relative overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-12 py-[120px] relative z-[2]">
        <div className="vision-layout">
          <div className="vision-text">
            <div className="section-eyebrow reveal">06 — Visión</div>
            <h2 className="section-title reveal reveal-delay-1">El Estándar de<br />Inteligencia Operativa<br />en el Agro</h2>
            <blockquote className="vision-quote reveal reveal-delay-2">
              "Ser el estándar referente en inteligencia operativa agrícola, liderando 
              la transformación del sector hacia un modelo de <strong className="text-leaf">Agricultura 4.0</strong> 
              donde la trampa de la manualidad haya sido erradicada por completo."
            </blockquote>
            <div className="mt-9 flex flex-col gap-3 reveal reveal-delay-3">
              <div className="flex items-center gap-3 text-[0.82rem] text-white/50">
                <span className="text-leaf">✓</span> Sistema nervioso digital del campo peruano
              </div>
              <div className="flex items-center gap-3 text-[0.82rem] text-white/50">
                <span className="text-leaf">✓</span> Expansión a Chile, Colombia y México
              </div>
              <div className="flex items-center gap-3 text-[0.82rem] text-white/50">
                <span className="text-leaf">✓</span> Infraestructura de datos para Agricultura 4.0
              </div>
            </div>
          </div>
          <div className="network-visual reveal reveal-delay-2">
            <svg width="100%" height="560" viewBox="0 0 560 560">
              <line x1="280" y1="280" x2="280" y2="84" stroke="rgba(74,124,89,0.25)" strokeWidth="1" strokeDasharray="4,4">
                <animate attributeName="stroke-opacity" values="0.25;0.6;0.25" dur="3s" repeatCount="indefinite"/>
              </line>
              <line x1="280" y1="280" x2="280" y2="476" stroke="rgba(74,124,89,0.25)" strokeWidth="1" strokeDasharray="4,4">
                <animate attributeName="stroke-opacity" values="0.25;0.6;0.25" dur="3.5s" repeatCount="indefinite"/>
              </line>
              <line x1="280" y1="280" x2="84" y2="280" stroke="rgba(74,124,89,0.25)" strokeWidth="1" strokeDasharray="4,4">
                <animate attributeName="stroke-opacity" values="0.25;0.6;0.25" dur="2.8s" repeatCount="indefinite"/>
              </line>
              <line x1="280" y1="280" x2="476" y2="280" stroke="rgba(74,124,89,0.25)" strokeWidth="1" strokeDasharray="4,4">
                <animate attributeName="stroke-opacity" values="0.25;0.6;0.25" dur="4s" repeatCount="indefinite"/>
              </line>
              
              <circle cx="280" cy="280" r="58" fill="rgba(74,124,89,0.2)" stroke="rgba(74,124,89,0.5)" strokeWidth="1.5">
                <animate attributeName="r" values="58;64;58" dur="4s" repeatCount="indefinite"/>
              </circle>
              <text x="280" y="274" textAnchor="middle" fill="#6aaf78" fontFamily="Syne,sans-serif" fontSize="14" fontWeight="700">AllpaOps</text>
              <text x="280" y="296" textAnchor="middle" fill="rgba(255,255,255,0.4)" fontFamily="monospace" fontSize="10">Platform Core</text>

              <circle cx="280" cy="72" r="36" fill="rgba(74,124,89,0.12)" stroke="rgba(74,124,89,0.25)" strokeWidth="1"/>
              <text x="280" y="76" textAnchor="middle" fill="rgba(255,255,255,0.6)" fontFamily="monospace" fontSize="10">GIS</text>
              
              <circle cx="280" cy="488" r="36" fill="rgba(74,124,89,0.12)" stroke="rgba(74,124,89,0.25)" strokeWidth="1"/>
              <text x="280" y="492" textAnchor="middle" fill="rgba(255,255,255,0.6)" fontFamily="monospace" fontSize="10">ERP</text>
              
              <circle cx="72" cy="280" r="36" fill="rgba(74,124,89,0.12)" stroke="rgba(74,124,89,0.25)" strokeWidth="1"/>
              <text x="72" y="284" textAnchor="middle" fill="rgba(255,255,255,0.6)" fontFamily="monospace" fontSize="10">Tareo</text>
              
              <circle cx="488" cy="280" r="36" fill="rgba(74,124,89,0.12)" stroke="rgba(74,124,89,0.25)" strokeWidth="1"/>
              <text x="488" y="284" textAnchor="middle" fill="rgba(255,255,255,0.6)" fontFamily="monospace" fontSize="10">AWS</text>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Vision;
