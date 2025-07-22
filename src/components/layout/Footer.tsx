// components/layout/Footer.tsx
import React from 'react';

const Footer = () => {
  return (
    <footer className="fixed bottom-4 left-4 z-50 flex items-center gap-3">
      {/* "N" Logo */}
      <div className="w-10 h-10 bg-foreground text-background rounded-full flex items-center justify-center font-bold text-xl font-sans">
        N
      </div>
      
      {/* 装饰性文本 */}
      <div className="hidden md:block font-mono text-xs text-foreground/50 tracking-widest">
        P*D%CY?P/PX\31ILL7OS
      </div>
    </footer>
  );
};

export default Footer;
