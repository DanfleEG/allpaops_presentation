import React from 'react';
import './porter.css';

const Porter: React.FC = () => {
  return (
    <section id="s9" className="min-h-screen relative overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-12 py-[120px] relative z-[2]">
        <div className="section-eyebrow reveal">09 — Fuerzas de Porter</div>
        <h2 className="section-title reveal reveal-delay-1">El Ecosistema Competitivo</h2>
        <p className="section-body reveal reveal-delay-2">AllpaOps no compite principalmente contra software. Compite contra la inercia cultural de la manualidad.</p>

        <div className="porter-container reveal reveal-delay-3">
          <div className="porter-connector h left"></div>
          <div className="porter-connector h right"></div>
          <div className="porter-connector v top"></div>
          <div className="porter-connector v bottom"></div>

          <div className="porter-center">
            <div className="porter-center-label">AllpaOps</div>
            <div className="porter-center-sub">Capa operativa<br />inteligente del agro</div>
          </div>

          <div className="porter-force top">
            <span className="porter-force-icon">🏢</span>
            <div className="porter-force-name">Nuevos Entrantes</div>
            <div className="porter-force-desc">ERPs globales, agritechs internacionales</div>
            <div className="porter-level"><div className="porter-level-fill" style={{ width: '55%' }}></div></div>
          </div>
          <div className="porter-force bottom">
            <span className="porter-force-icon">📱</span>
            <div className="porter-force-name">Sustitutos</div>
            <div className="porter-force-desc">Papel, WhatsApp, Excel — el competidor real</div>
            <div className="porter-level"><div className="porter-level-fill" style={{ width: '80%' }}></div></div>
          </div>
          <div className="porter-force left">
            <span className="porter-force-icon">🌾</span>
            <div className="porter-force-name">Clientes</div>
            <div className="porter-force-desc">Agroexportadoras medianas y grandes</div>
            <div className="porter-level"><div className="porter-level-fill" style={{ width: '40%' }}></div></div>
          </div>
          <div className="porter-force right">
            <span className="porter-force-icon">⚙️</span>
            <div className="porter-force-name">Proveedores</div>
            <div className="porter-force-desc">AWS, tablets, integradores ERP</div>
            <div className="porter-level"><div className="porter-level-fill" style={{ width: '30%' }}></div></div>
          </div>

          <div className="porter-highlight">
            ⚡ El principal competidor es la manualidad, no otro software
          </div>
        </div>
      </div>
    </section>
  );
};

export default Porter;
