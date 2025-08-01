import { Music } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Header() {
    const [currentSection, setCurrentSection] = useState('home');
    const [scrollY, setScrollY] = useState(0);
    const [isLoaded, setIsLoaded] = useState(false);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isMenuOpen, setIsMenuOpen] = useState(false);


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
        <nav className="fixed top-0 right-0 left-0 z-50 transition-all duration-500">
            <div
                className={`transition-all duration-500 ${scrollY > 50 ? 'border-b border-orange-500/20 bg-black/80 py-3 backdrop-blur-2xl' : 'bg-transparent py-6'}`}
            >
                <div className="mx-auto max-w-7xl px-6">
                    <div className="flex items-center justify-between">
                        <div className="group flex cursor-pointer items-center space-x-3">
                            <div className="relative flex h-12 w-12 transform items-center justify-center rounded-2xl bg-gradient-to-br from-orange-500 to-red-500 shadow-2xl shadow-orange-500/50 transition-all duration-500 group-hover:scale-110 group-hover:rotate-12">
                                <Music className="h-7 w-7 text-white" />
                                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-orange-400 to-red-400 opacity-0 blur-sm transition-opacity duration-300 group-hover:opacity-100"></div>
                            </div>
                            <div>
                                <span className="bg-gradient-to-r from-orange-400 via-orange-300 to-yellow-300 bg-clip-text text-2xl font-black text-transparent">
                                    YOKA SOUND
                                </span>
                                <div className="text-xs font-medium text-orange-400">PROFESSIONAL STUDIO</div>
                            </div>
                        </div>

                        {/* Desktop Menu */}
                        <div className="hidden space-x-8 lg:flex">
                            {['Accueil', 'Services', 'Projets', 'Artistes', 'Studio', 'Réservation', 'Contact'].map((item, index) => (
                                <button
                                    key={item}
                                    onClick={() => setCurrentSection(item.toLowerCase())}
                                    className="group relative cursor-pointer font-medium text-white/80 transition-all duration-300 hover:text-white"
                                >
                                    <span className="relative z-10">{item}</span>
                                    <div className="absolute -bottom-2 left-0 h-1 w-0 rounded-full bg-gradient-to-r from-orange-500 to-red-500 transition-all duration-500 group-hover:w-full"></div>
                                    <div className="absolute inset-0 -z-10 rounded-lg bg-gradient-to-r from-orange-500/10 to-red-500/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
                                </button>
                            ))}
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            className="relative cursor-pointer flex h-10 w-10 flex-col items-center justify-center space-y-1 lg:hidden"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                        >
                            <div
                                className={`h-0.5 w-6 bg-orange-500 transition-all duration-300 ${isMenuOpen ? 'translate-y-1.5 rotate-45' : ''}`}
                            ></div>
                            <div className={`h-0.5 w-6 bg-orange-500 transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></div>
                            <div
                                className={`h-0.5 w-6 bg-orange-500 transition-all duration-300 ${isMenuOpen ? '-translate-y-1.5 -rotate-45' : ''}`}
                            ></div>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <div
                className={`fixed inset-x-0 z-40 border-b border-orange-500/20 bg-black/95 backdrop-blur-2xl transition-all duration-500 lg:hidden ${isMenuOpen ? 'translate-y-0 opacity-100' : 'pointer-events-none -translate-y-full opacity-0'}`}
                style={{ top: scrollY > 50 ? '70px' : '90px' }}
            >
                <div className="space-y-4 px-6 py-8">
                    {['Accueil', 'Services', 'Projets', 'Artistes', 'Studio', 'Réservation', 'Contact'].map((item, index) => (
                        <button
                            key={item}
                            onClick={() => {
                                setCurrentSection(item.toLowerCase());
                                setIsMenuOpen(false);
                            }}
                            className={`animate-fade-in-up block w-full cursor-pointer rounded-xl px-4 py-3 text-left text-white/80 transition-all duration-300 hover:bg-orange-500/10 hover:text-white ${isMenuOpen ? 'opacity-100' : 'opacity-0'}`}
                            style={{ animationDelay: `${index * 100}ms` }}
                        >
                            {item}
                        </button>
                    ))}
                </div>
            </div>
        </nav>
    );
}
