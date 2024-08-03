import React, { useEffect, useRef } from 'react';

const CursorTrail = () => {
  const cursorTrailRef = useRef(null);
  const dotRef = useRef(null);

  useEffect(() => {
    const trail = cursorTrailRef.current;
    const dot = document.createElement('div');
    dot.className = 'trail-dot';
    trail.appendChild(dot);
    dotRef.current = dot;

    let timeoutId;

    const handleMouseMove = (e) => {
      clearTimeout(timeoutId);
      
      timeoutId = setTimeout(() => {
        dot.style.left = `${e.clientX}px`;
        dot.style.top = `${e.clientY}px`;
        dot.style.opacity = '1';
      }, 50); // 50ms delay
    };

    const handleNavHover = (e) => {
      if (e.target.closest('.desktop-menu li, .social-icons li')) {
        dot.style.opacity = '0';
      } else {
        dot.style.opacity = '1';
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseover', handleNavHover);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseover', handleNavHover);
      clearTimeout(timeoutId);
    };
  }, []);

  return <div ref={cursorTrailRef} className="cursor-trail"></div>;
};

export default CursorTrail;