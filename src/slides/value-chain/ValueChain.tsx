import React from 'react';
import './value-chain.css';

const ValueChain: React.FC = () => {
  const sections = [
    {
      label: 'Tecnología de Soporte',
      nodes: [
        { icon: '☁️', name: 'AWS Cloud', desc: 'Infraestructura serverless escalable' },
        { icon: '📡', name: 'Offline-First', desc: 'Sync inteligente sin conectividad' },
        { icon: '🔐', name: 'Seguridad', desc: 'SOC 2, cifrado end-to-end' },
        { icon: '🔗', name: 'APIs REST', desc: 'Integración con cualquier sistema' }
      ]
    },
    {
      label: 'Operaciones Primarias',
      nodes: [
        { icon: '🚀', name: 'Onboarding', desc: 'Activación en 48h, hardware incluido' },
        { icon: '⏱️', name: 'Tareo Digital', desc: 'Marcaje en tiempo real por lote' },
        { icon: '🗺️', name: 'GIS Parcelario', desc: 'Georreferenciación y monitoreo espacial' },
        { icon: '✅', name: 'Audit-Ready', desc: 'Evidencia digital, EUDR compliant' }
      ]
    },
    {
      label: 'Servicio y Valor',
      nodes: [
        { icon: '📊', name: 'Business Intelligence', desc: 'Dashboards ejecutivos en tiempo real' },
        { icon: '🔄', name: 'ERP Sync', desc: 'SAP, Oracle, ERPs nacionales' },
        { icon: '🎯', name: 'Customer Success', desc: 'Soporte 24/7 en campo y remoto' },
        { icon: '💹', name: 'ROI Medible', desc: 'Retorno demostrable en 90 días', special: true }
      ]
    }
  ];

  return (
    <section id="s10" className="min-h-screen relative overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-12 py-[120px] relative z-[2]">
        <div className="section-eyebrow reveal">10 — Cadena de Valor</div>
        <h2 className="section-title reveal reveal-delay-1">Control Operativo Total</h2>
        <p className="section-body reveal reveal-delay-2">Desde la semilla hasta el contenedor. AllpaOps orquesta cada capa operativa del agronegocio con trazabilidad end-to-end.</p>

        <div className="chain-flow">
          {sections.map((layer, i) => (
            <div key={i} className={`chain-layer reveal reveal-delay-${i + 1}`}>
              <div className="chain-layer-label">— {layer.label}</div>
              <div className="chain-row">
                {layer.nodes.map((node, j) => (
                  <React.Fragment key={j}>
                    <div className="chain-node" style={node.special ? { borderColor: 'rgba(200,129,58,0.4)', background: 'rgba(200,129,58,0.05)' } : {}}>
                      <span className="chain-node-icon">{node.icon}</span>
                      <div className="chain-node-name" style={node.special ? { color: 'var(--amber)' } : {}}>{node.name}</div>
                      <div className="chain-node-desc">{node.desc}</div>
                    </div>
                    {j < layer.nodes.length - 1 && <div className="chain-arrow">→</div>}
                  </React.Fragment>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValueChain;
