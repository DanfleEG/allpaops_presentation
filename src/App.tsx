/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { ProgressBar } from './components/ProgressBar';
import { useNavigation } from './hooks/useNavigation';

// Slides
import Hero from './slides/hero/Hero';
import Problem from './slides/problem/Problem';
import Impact from './slides/impact/Impact';
import Product from './slides/product/Product';
import Mission from './slides/mission/Mission';
import Vision from './slides/vision/Vision';
import Objectives from './slides/objectives/Objectives';
import Foda from './slides/foda/Foda';
import Porter from './slides/porter/Porter';
import ValueChain from './slides/value-chain/ValueChain';
import Closing from './slides/closing/Closing';

// Styles
import './styles/global.css';

export default function App() {
  const { activeSection, scrollToSection, progress } = useNavigation();

  useEffect(() => {
    // Scroll reveal observer
    const revealEls = document.querySelectorAll('.reveal');
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) e.target.classList.add('visible');
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -60px 0px' });
    
    revealEls.forEach(el => revealObserver.observe(el));
    
    return () => revealObserver.disconnect();
  }, []);

  return (
    <div className="relative">
      <Navbar activeSection={activeSection} onNavigate={scrollToSection} />
      <ProgressBar progress={progress} />
      
      <main>
        <Hero />
        <div className="section-divider" />
        <Problem />
        <div className="section-divider" />
        <Impact />
        <div className="section-divider" />
        <Product />
        <div className="section-divider" />
        <Mission />
        <div className="section-divider" />
        <Vision />
        <div className="section-divider" />
        <Objectives />
        <div className="section-divider" />
        <Foda />
        <div className="section-divider" />
        <Porter />
        <div className="section-divider" />
        <ValueChain />
        <div className="section-divider" />
        <Closing />
      </main>
    </div>
  );
}
