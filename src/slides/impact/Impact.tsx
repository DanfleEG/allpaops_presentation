import React, { useEffect, useRef } from 'react';
import * as echarts from 'echarts';
import './impact.css';

const Impact: React.FC = () => {
  const chartRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!chartRef.current) return;

    const chartInstance = echarts.init(chartRef.current, null, { renderer: 'canvas' });
    const option = {
      backgroundColor: 'transparent',
      textStyle: { fontFamily: 'DM Sans, sans-serif', color: 'rgba(255,255,255,0.5)' },
      grid: { top: 30, right: 20, bottom: 40, left: 50 },
      tooltip: {
        trigger: 'axis',
        backgroundColor: 'rgba(13,13,11,0.9)',
        borderColor: 'rgba(200,129,58,0.3)',
        textStyle: { color: 'rgba(255,255,255,0.8)' }
      },
      legend: {
        data: ['Con AllpaOps', 'Sin AllpaOps'],
        textStyle: { color: 'rgba(255,255,255,0.4)', fontSize: 11 },
        bottom: 0
      },
      xAxis: {
        type: 'category',
        data: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun'],
        axisLine: { lineStyle: { color: 'rgba(255,255,255,0.1)' } },
        axisLabel: { fontSize: 11, color: 'rgba(255,255,255,0.35)' },
        splitLine: { show: false }
      },
      yAxis: {
        type: 'value',
        name: 'Eficiencia (%)',
        nameTextStyle: { fontSize: 10, color: 'rgba(255,255,255,0.3)' },
        axisLine: { show: false },
        axisLabel: { fontSize: 10, color: 'rgba(255,255,255,0.3)' },
        splitLine: { lineStyle: { color: 'rgba(255,255,255,0.05)' } }
      },
      series: [
        {
          name: 'Con AllpaOps',
          type: 'line',
          smooth: true,
          data: [72, 78, 83, 87, 91, 95],
          lineStyle: { color: '#6aaf78', width: 2.5 },
          itemStyle: { color: '#6aaf78' },
          areaStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              { offset: 0, color: 'rgba(106,175,120,0.25)' },
              { offset: 1, color: 'rgba(106,175,120,0)' }
            ])
          },
          symbol: 'circle',
          symbolSize: 6,
          animationDuration: 2000
        },
        {
          name: 'Sin AllpaOps',
          type: 'line',
          smooth: true,
          data: [48, 49, 47, 51, 48, 50],
          lineStyle: { color: 'rgba(220,60,40,0.7)', width: 2, type: 'dashed' },
          itemStyle: { color: 'rgba(220,60,40,0.7)' },
          areaStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              { offset: 0, color: 'rgba(220,60,40,0.1)' },
              { offset: 1, color: 'rgba(220,60,40,0)' }
            ])
          },
          symbol: 'circle',
          symbolSize: 5,
          animationDuration: 2000
        }
      ]
    };
    chartInstance.setOption(option);

    const handleResize = () => chartInstance.resize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      chartInstance.dispose();
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const fills = entry.target.querySelectorAll('.kpi-fill');
          fills.forEach((fill: any) => {
            const w = fill.dataset.width;
            setTimeout(() => { fill.style.width = w + '%'; }, 300);
          });
        }
      },
      { threshold: 0.3 }
    );

    const el = document.querySelector('.impact-layout');
    if (el) observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="s3" className="min-h-screen relative overflow-hidden">
      <div className="s3-bg"></div>
      <div className="max-w-[1200px] mx-auto px-12 py-[120px] relative z-[2]">
        <div className="section-eyebrow reveal">03 — Impacto Económico</div>
        <h2 className="section-title reveal reveal-delay-1">Impacto Económico<br />y Riesgo de Mercado</h2>
        <p className="section-body reveal reveal-delay-2">
          La ceguera operativa tiene un precio. Cada hora sin datos precisos es dinero perdido, 
          riesgo de exportación y vulnerabilidad regulatoria ante estándares globales.
        </p>

        <div className="impact-layout">
          <div className="kpi-stack">
            <div className="kpi-item reveal reveal-delay-1">
              <div className="kpi-bar-wrap">
                <div className="kpi-label">Mano de obra como % del OpEx</div>
                <div className="kpi-bar"><div className="kpi-fill" data-width="60"></div></div>
              </div>
              <div className="kpi-num">60%</div>
            </div>
            <div className="kpi-item reveal reveal-delay-2">
              <div className="kpi-bar-wrap">
                <div className="kpi-label">Tiempo perdido en datos manuales/semana</div>
                <div className="kpi-bar"><div className="kpi-fill" data-width="45"></div></div>
              </div>
              <div className="kpi-num">45%</div>
            </div>
            <div className="kpi-item reveal reveal-delay-3">
              <div className="kpi-bar-wrap">
                <div className="kpi-label">Riesgo de rechazo exportación por trazabilidad</div>
                <div className="kpi-bar"><div className="kpi-fill red" data-width="35"></div></div>
              </div>
              <div className="kpi-num red">35%</div>
            </div>
            <div className="kpi-item reveal reveal-delay-4">
              <div className="kpi-bar-wrap">
                <div className="kpi-label">Horas fantasma no auditadas</div>
                <div className="kpi-bar"><div className="kpi-fill red" data-width="28"></div></div>
              </div>
              <div className="kpi-num red">28%</div>
            </div>
            <div className="compliance-badges reveal reveal-delay-5">
              <span className="badge warning">GlobalG.A.P.</span>
              <span className="badge danger">EUDR 2025</span>
              <span className="badge warning">Audit-Ready</span>
              <span className="badge danger">REACH</span>
              <span className="badge warning">BRC Food</span>
            </div>
          </div>
          <div className="chart-area reveal reveal-delay-2" ref={chartRef}></div>
        </div>
      </div>
    </section>
  );
};

export default Impact;
