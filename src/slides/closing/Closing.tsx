import React from 'react';
import './closing.css';

const Closing: React.FC = () => {
  return (
    <section id="s11" className="min-h-screen relative overflow-hidden flex items-center justify-center text-center">
      <div className="close-bg"></div>
      <div style={{ position: 'absolute', inset: 0, opacity: 0.02, backgroundImage: 'repeating-linear-gradient(0deg,transparent,transparent 49px,rgba(74,124,89,0.8) 50px),repeating-linear-gradient(90deg,transparent,transparent 99px,rgba(200,129,58,0.4) 100px)' }}></div>
      <div className="close-inner relative z-[2] px-12 py-20 max-w-[800px] mx-auto">
        <div className="close-pre reveal uppercase font-mono tracking-[0.15em] text-sage text-[0.7rem] mb-6">Sistema Nervioso del Agro Peruano</div>
        <div className="close-logo reveal reveal-delay-1 font-display font-extrabold text-[clamp(3rem,8vw,7rem)] tracking-tight leading-none text-white mb-5">
          Allpa<span className="text-amber">Ops</span>
        </div>
        <div className="close-tagline reveal reveal-delay-2 font-sans font-light text-[1.15rem] text-white/50 tracking-wider mb-16">
          Donde el campo se conecta con la decisión.
        </div>

        <div className="close-stats reveal reveal-delay-3 flex gap-10 justify-center flex-wrap mb-16">
          {[
            { val: '0 min', lbl: 'Latencia de datos' },
            { val: '100%', lbl: 'Trazabilidad digital' },
            { val: '48h', lbl: 'Time-to-value' },
            { val: '∞', lbl: 'Escalabilidad LATAM' }
          ].map((s, i) => (
            <div key={i} className="close-stat text-center">
              <div className="close-stat-val font-display font-extrabold text-2xl text-amber">{s.val}</div>
              <div className="close-stat-lbl text-[0.75rem] text-white/30 mt-1">{s.lbl}</div>
            </div>
          ))}
        </div>

        <div className="close-cta-group reveal reveal-delay-4 flex gap-4 justify-center flex-wrap mb-16">
          <a href="#s1" className="btn-primary">Ver Demo</a>
          <a href="#s1" className="btn-outline">Descargar Deck</a>
        </div>

        <div className="reveal reveal-delay-5 mt-16 border-t border-white/10 pt-8 flex items-center justify-center gap-8 flex-wrap">
          <span className="font-mono text-[0.68rem] text-white/20 tracking-widest">ALLPAOPS © 2025</span>
          <span className="w-px h-3.5 bg-white/10 hidden sm:block"></span>
          <span className="font-mono text-[0.68rem] text-white/20 tracking-widest">"Allpa" = tierra · quechua</span>
          <span className="w-px h-3.5 bg-white/10 hidden sm:block"></span>
          <span className="font-mono text-[0.68rem] text-white/20 tracking-widest">PERU · LATAM</span>
          <span className="w-px h-3.5 bg-white/10 hidden sm:block"></span>
          <span className="font-mono text-[0.68rem] text-sage/60 tracking-widest uppercase">Agricultura 4.0</span>
        </div>
      </div>
    </section>
  );
};

export default Closing;
