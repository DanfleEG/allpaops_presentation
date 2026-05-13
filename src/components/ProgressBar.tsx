import React from 'react';

interface ProgressBarProps {
  progress: number;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({ progress }) => {
  return (
    <div className="fixed right-6 top-1/2 -translate-y-1/2 h-64 w-1 flex flex-col items-center z-[1000] hidden md:flex">
      <div className="h-full w-px bg-white/10 relative">
        <div 
          className="absolute top-0 left-0 w-full bg-amber transition-all duration-700 ease-out shadow-[0_0_10px_rgba(200,129,58,0.5)]"
          style={{ height: `${progress}%` }}
        />
      </div>
      <div className="mt-4 font-mono text-[0.6rem] text-white/30 rotate-90 origin-left translate-x-3 whitespace-nowrap tracking-widest uppercase">
        Story Progress
      </div>
    </div>
  );
};
