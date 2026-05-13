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
            <svg width="100%" height="400" viewBox="0 0 400 400">
              <line x1="200" y1="200" x2="200" y2="60" stroke="rgba(74,124,89,0.25)" strokeWidth="1" strokeDasharray="4,4">
                <animate attributeName="stroke-opacity" values="0.25;0.6;0.25" dur="3s" repeatCount="indefinite"/>
              </line>
              <line x1="200" y1="200" x2="200" y2="340" stroke="rgba(74,124,89,0.25)" strokeWidth="1" strokeDasharray="4,4">
                <animate attributeName="stroke-opacity" values="0.25;0.6;0.25" dur="3.5s" repeatCount="indefinite"/>
              </line>
              <line x1="200" y1="200" x2="60" y2="200" stroke="rgba(74,124,89,0.25)" strokeWidth="1" strokeDasharray="4,4">
                <animate attributeName="stroke-opacity" values="0.25;0.6;0.25" dur="2.8s" repeatCount="indefinite"/>
              </line>
              <line x1="200" y1="200" x2="340" y2="200" stroke="rgba(74,124,89,0.25)" strokeWidth="1" strokeDasharray="4,4">
                <animate attributeName="stroke-opacity" values="0.25;0.6;0.25" dur="4s" repeatCount="indefinite"/>
              </line>
              
              <circle cx="200" cy="200" r="42" fill="rgba(74,124,89,0.2)" stroke="rgba(74,124,89,0.5)" strokeWidth="1.5">
                <animate attributeName="r" values="42;46;42" dur="4s" repeatCount="indefinite"/>
              </circle>
              <text x="200" y="196" textAnchor="middle" fill="#6aaf78" fontFamily="Syne,sans-serif" fontSize="11" fontWeight="700">AllpaOps</text>
              <text x="200" y="212" textAnchor="middle" fill="rgba(255,255,255,0.4)" fontFamily="monospace" fontSize="8">Platform Core</text>

              <circle cx="200" cy="52" r="26" fill="rgba(74,124,89,0.12)" stroke="rgba(74,124,89,0.25)" strokeWidth="1"/>
              <text x="200" y="48" textAnchor="middle" fill="rgba(255,255,255,0.6)" fontFamily="monospace" fontSize="8">GIS</text>
              <circle cx="200" cy="348" r="26" fill="rgba(74,124,89,0.12)" stroke="rgba(74,124,89,0.25)" strokeWidth="1"/>
              <text x="200" y="344" textAnchor="middle" fill="rgba(255,255,255,0.6)" fontFamily="monospace" fontSize="8">ERP</text>
              <circle cx="52" cy="200" r="26" fill="rgba(74,124,89,0.12)" stroke="rgba(74,124,89,0.25)" strokeWidth="1"/>
              <text x="52" y="196" textAnchor="middle" fill="rgba(255,255,255,0.6)" fontFamily="monospace" fontSize="8">Tareo</text>
              <circle cx="348" cy="200" r="26" fill="rgba(74,124,89,0.12)" stroke="rgba(74,124,89,0.25)" strokeWidth="1"/>
              <text x="348" y="196" textAnchor="middle" fill="rgba(255,255,255,0.6)" fontFamily="monospace" fontSize="8">AWS</text>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Vision;
