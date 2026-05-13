import React from 'react';
import './product.css';

const Product: React.FC = () => {
  return (
    <section id="s4" className="min-h-screen relative overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-12 py-[120px] relative z-[2]">
        <div className="section-eyebrow reveal">04 — La Solución</div>
        <h2 className="section-title reveal reveal-delay-1">AllpaOps:<br />Inteligencia en la Raíz</h2>
        <p className="section-body reveal reveal-delay-2">
          AllpaOps es la capa operativa inteligente del agro. Un orquestador digital 
          <strong className="text-white/80 ml-1">Offline-First</strong> que transforma 
          el último kilómetro en datos estratégicos en tiempo real.
        </p>

        <div className="product-grid">
          <div className="product-features">
            {[
              { icon: '📡', name: 'Arquitectura Offline-First', desc: 'Opera sin conectividad. Sincroniza automáticamente cuando el campo tiene señal. Diseñado para la realidad del agro peruano.' },
              { icon: '✅', name: 'Sistema Audit-Ready', desc: 'Trazabilidad completa con evidencia digital. Compatible con GlobalG.A.P., EUDR y estándares de exportación globales.' },
              { icon: '🗺️', name: 'GIS & Mapeo de Lotes', desc: 'Georreferenciación de parcelas, monitoreo por lote y análisis espacial integrado con datos operativos.' },
              { icon: '🔗', name: 'Interoperabilidad ERP', desc: 'APIs nativas para SAP, Oracle y sistemas corporativos. El campo habla directamente con las finanzas.' },
              { icon: '⚡', name: 'Tareo Digital en Tiempo Real', desc: 'Digitalización del marcaje de personal, actividades y rendimientos. Adiós a las horas fantasma.' }
            ].map((f, i) => (
              <div key={i} className={`feature-row reveal reveal-delay-${i + 1}`}>
                <div className="feature-icon">{f.icon}</div>
                <div>
                  <div className="feature-name">{f.name}</div>
                  <div className="feature-desc">{f.desc}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="dashboard-mock reveal reveal-delay-3">
            <div className="mock-bar">
              <div className="mock-dot r"></div>
              <div className="mock-dot y"></div>
              <div className="mock-dot g"></div>
              <span className="mock-title">allpaops · dashboard · Fundo La Esperanza</span>
            </div>
            <div className="mock-body">
              <div className="mock-metrics">
                <div className="mock-metric">
                  <div className="mock-metric-val">847</div>
                  <div className="mock-metric-lbl">Operarios activos</div>
                </div>
                <div className="mock-metric">
                  <div className="mock-metric-val">98.2%</div>
                  <div className="mock-metric-lbl">Completitud datos</div>
                </div>
                <div className="mock-metric">
                  <div className="mock-metric-val">0 min</div>
                  <div className="mock-metric-lbl">Latencia</div>
                </div>
              </div>
              <div className="mock-map-area" id="miniMap">
                <svg width="100%" height="100%" style={{ position: 'absolute', inset: 0 }}>
                  <defs>
                    <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
                      <path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(74,124,89,0.2)" strokeWidth="0.5"/>
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#grid)"/>
                  <rect x="20%" y="15%" width="30%" height="40%" rx="4" fill="rgba(74,124,89,0.15)" stroke="rgba(74,124,89,0.4)" strokeWidth="1"/>
                  <rect x="55%" y="20%" width="25%" height="35%" rx="4" fill="rgba(200,129,58,0.1)" stroke="rgba(200,129,58,0.3)" strokeWidth="1"/>
                  <text x="30%" y="40%" fill="rgba(255,255,255,0.4)" fontSize="8" fontFamily="monospace" textAnchor="middle">Lote A-1</text>
                  <text x="67%" y="42%" fill="rgba(255,255,255,0.3)" fontSize="7" fontFamily="monospace" textAnchor="middle">Lote B-2</text>
                  <circle cx="32%" cy="35%" r="4" fill="#c8813a">
                    <animate attributeName="r" values="3;6;3" dur="2s" repeatCount="indefinite"/>
                    <animate attributeName="opacity" values="1;0.4;1" dur="2s" repeatCount="indefinite"/>
                  </circle>
                  <circle cx="67%" cy="38%" r="3" fill="#6aaf78">
                    <animate attributeName="r" values="2;5;2" dur="2.5s" repeatCount="indefinite"/>
                  </circle>
                </svg>
              </div>
              <div className="mt-3 flex gap-2 flex-wrap">
                <span className="font-mono text-[0.6rem] text-leaf/70 bg-leaf/10 border border-leaf/20 px-2 py-1 rounded-sm">● SYNC OK</span>
                <span className="font-mono text-[0.6rem] text-amber/70 bg-amber/10 border border-amber/20 px-2 py-1 rounded-sm">AUDIT READY</span>
                <span className="font-mono text-[0.6rem] text-sky/70 bg-sky/10 border border-sky/20 px-2 py-1 rounded-sm">AWS · ap-southeast-1</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Product;
