import React from 'react';
import { Counter } from '@/src/components/Counter';
import './hero.css';

const Hero: React.FC = () => {
  return (
    <section id="s1" className="min-h-screen relative overflow-hidden">
      <div className="topo-lines"></div>
      <div className="hero-bg"></div>
      <div className="max-w-[1200px] mx-auto px-12 relative z-[2] grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <div className="hero-left">
          <div className="hero-tag reveal">Agritech · Perú · 2025</div>
          <h1 className="hero-title reveal reveal-delay-1">
            El Milagro<br />
            Agroindustrial<br />
            <span className="accent">Peruano</span><br />
            y su <span className="green">Techo</span><br />
            de Cristal
          </h1>
          <p className="hero-subtitle reveal reveal-delay-2">
            Perú es una potencia agroexportadora global. Pero detrás del crecimiento exponencial, 
            la gestión operativa sigue atrapada en el siglo pasado.
          </p>
          <div className="stat-grid reveal reveal-delay-3">
            <div className="stat-card">
              <div className="stat-value"><Counter target={15013} /> MM</div>
              <div className="stat-label">Agroexportaciones USD 2024</div>
            </div>
            <div className="stat-card">
              <div className="stat-value"><Counter target={17} decimal />%</div>
              <div className="stat-label">Crecimiento sector</div>
            </div>
            <div className="stat-card">
              <div className="stat-value">#1</div>
              <div className="stat-label">Exportador arándanos mundo</div>
            </div>
            <div className="stat-card">
              <div className="stat-value">70%</div>
              <div className="stat-label">Sin conectividad digital</div>
            </div>
          </div>
        </div>
        <div className="hero-right reveal reveal-delay-4 hidden lg:block">
          <div className="peru-map-container">
            <svg viewBox="0 0 300 400" xmlns="http://www.w3.org/2000/svg">
              <path className="map-region" d="M 80,20 L 120,15 L 160,25 L 200,40 L 220,70 L 215,100 L 225,130 L 220,160 L 210,190 L 215,220 L 200,260 L 180,300 L 160,340 L 140,370 L 120,380 L 100,370 L 80,340 L 70,300 L 75,260 L 65,220 L 60,190 L 55,160 L 50,130 L 55,100 L 60,70 L 70,40 Z"/>
              <path className="map-region highlighted" d="M 90,130 L 140,125 L 155,140 L 150,165 L 130,170 L 100,165 L 85,150 Z"/>
              <path className="map-region highlighted" d="M 95,240 L 145,235 L 155,255 L 150,275 L 120,280 L 90,270 L 85,255 Z"/>
              <path className="map-region highlighted" d="M 80,60 L 130,55 L 145,75 L 140,95 L 110,98 L 80,90 L 72,75 Z"/>
              
              <circle className="map-dot" cx="115" cy="148" r="5">
                <animate attributeName="r" values="4;8;4" dur="2s" repeatCount="indefinite"/>
                <animate attributeName="opacity" values="1;0.5;1" dur="2s" repeatCount="indefinite"/>
              </circle>
              <circle className="map-dot" cx="118" cy="255" r="5">
                <animate attributeName="r" values="4;8;4" dur="2.4s" repeatCount="indefinite"/>
                <animate attributeName="opacity" values="1;0.5;1" dur="2.4s" repeatCount="indefinite"/>
              </circle>
              <circle className="map-dot" cx="107" cy="76" r="5">
                <animate attributeName="r" values="4;8;4" dur="1.8s" repeatCount="indefinite"/>
                <animate attributeName="opacity" values="1;0.5;1" dur="1.8s" repeatCount="indefinite"/>
              </circle>

              <text className="map-label" x="160" y="152">La Libertad</text>
              <text className="map-label" x="160" y="258">Ica</text>
              <text className="map-label" x="150" y="80">Piura</text>

              <line x1="115" y1="148" x2="158" y2="152" stroke="rgba(200,129,58,0.3)" strokeWidth="0.8" strokeDasharray="3,3"/>
              <line x1="118" y1="255" x2="158" y2="258" stroke="rgba(200,129,58,0.3)" strokeWidth="0.8" strokeDasharray="3,3"/>
              <line x1="107" y1="76" x2="148" y2="80" stroke="rgba(200,129,58,0.3)" strokeWidth="0.8" strokeDasharray="3,3"/>

              <text fill="rgba(255,255,255,0.25)" font-family="monospace" font-size="8" x="60" y="160">arándanos · uva</text>
              <text fill="rgba(255,255,255,0.25)" font-family="monospace" font-size="8" x="62" y="275"> uva · palta</text>
              <text fill="rgba(255,255,255,0.25)" font-family="monospace" font-size="8" x="66" y="93"> mango · uva</text>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
