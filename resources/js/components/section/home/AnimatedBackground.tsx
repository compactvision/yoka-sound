import { useState, useEffect } from 'react';

export default function AnimatedBackground() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [scrollY, setScrollY] = useState(0);
    const [isLoaded, setIsLoaded] = useState(false);
    
    useEffect(() => {
        setIsLoaded(true);
        
        const handleScroll = () => setScrollY(window.scrollY);
        
        const handleMouseMove = (e) => {
          setMousePosition({ x: e.clientX, y: e.clientY });
        };
    
        window.addEventListener('scroll', handleScroll);
        window.addEventListener('mousemove', handleMouseMove);
        
        return () => {
          window.removeEventListener('scroll', handleScroll);
          window.removeEventListener('mousemove', handleMouseMove);
        };
      }, []);
    return (
        <div className="fixed inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-br from-orange-900/20 via-black to-red-900/20"></div>

            {/* Floating Orbs */}
            {[...Array(8)].map((_, i) => (
                <div
                    key={i}
                    className={`absolute w-${4 + (i % 4) * 4} h-${4 + (i % 4) * 4} animate-pulse rounded-full opacity-20 blur-xl`}
                    style={{
                        background: `linear-gradient(135deg, #ff6b35, #f7931e, #ff9500)`,
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                        animationDelay: `${i * 0.5}s`,
                        animationDuration: `${3 + Math.random() * 4}s`,
                    }}
                ></div>
            ))}

            {/* Interactive Mouse Glow */}
            <div
                className="pointer-events-none absolute h-96 w-96 rounded-full opacity-10 blur-3xl transition-all duration-300 ease-out"
                style={{
                    background: 'radial-gradient(circle, #ff6b35, #f7931e, transparent)',
                    left: mousePosition.x - 192,
                    top: mousePosition.y - 192,
                    transform: `translate(${Math.sin(scrollY * 0.001) * 50}px, ${Math.cos(scrollY * 0.001) * 30}px)`,
                }}
            ></div>
        </div>
    );
}
