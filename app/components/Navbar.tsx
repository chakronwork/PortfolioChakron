"use client";

import { useState } from 'react';

// Component สำหรับ Status Bar (ย้ายเข้ามาในนี้เลย)
function StatusBar() {
  return (
    <div className="hidden lg:block text-right text-xs uppercase tracking-widest font-heading" style={{ color: 'var(--color-ink)', opacity: 0.6 }}>
      <div className="flex items-center gap-2 justify-end">
        <div className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
        </div>
        <span>Available for new projects</span>
      </div>
      <div className="mt-2">
        From Samut Songkhram, TH
      </div>
    </div>
  );
}

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // 👇👇👇 MARK: แก้ไข wrapper หลักตรงนี้ 👇👇👇
  return (
    // เอา fixed ออก, เพิ่ม max-w-7xl mx-auto เพื่อให้มันอยู่กลางและกำหนดความกว้าง
    <header className="max-w-7xl mx-auto px-8 py-8 z-20 flex justify-between items-start">
      
      {/* Logo/Name */}
      <div className="font-heading font-bold text-lg tracking-wider">
        <span className="hidden sm:inline">Chakron Yuraket (First)</span>
        <span className="sm:hidden">C. Yuraket (First)</span>
      </div>

      {/* Container สำหรับเมนูและ Status bar (จัดให้อยู่ด้วยกันฝั่งขวา) */}
      <div className="flex flex-col items-end">
        {/* เมนูสำหรับจอใหญ่ */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium" style={{ color: 'var(--color-ink)', opacity: 0.7 }}>
          <a href="#projects" className="hover:opacity-100 transition-opacity">Projects</a>
          <a href="#about" className="hover:opacity-100 transition-opacity">About</a>
          <a href="#contact" className="hover:opacity-100 transition-opacity">Contact</a>
        </nav>

        {/* ปุ่ม Hamburger สำหรับจอมือถือ */}
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
        
        {/* Status Bar (จะแสดงผลใต้เมนูจอใหญ่) */}
        <div className="mt-4">
          <StatusBar />
        </div>
      </div>
      
      {/* เมนูที่จะสไลด์ลงมา (ย้ายออกมานอกสุดเพื่อให้แสดงผลถูกต้อง) */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-24 left-8 right-8 mt-4 p-4 rounded-md" style={{ backgroundColor: 'var(--color-canvas)', border: '1px solid rgba(74, 74, 74, 0.1)' }}>
          <nav className="flex flex-col items-center gap-4 text-center">
            <a href="#projects" onClick={() => setIsMenuOpen(false)} className="w-full py-2">Projects</a>
            <a href="#about" onClick={() => setIsMenuOpen(false)} className="w-full py-2">About</a>
            <a href="#contact" onClick={() => setIsMenuOpen(false)} className="w-full py-2">Contact</a>
          </nav>
        </div>
      )}
    </header>
  );
}