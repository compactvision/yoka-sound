import { useState, useRef, useEffect } from 'react';
import { Sparkles, Award, Users, TrendingUp, Star, Calendar, ArrowRight, Play, Volume2 } from 'lucide-react';

export default function Hero() {
    const heroRef = useRef(null);
    const [scrollY, setScrollY] = useState(0);
    const [isLoaded, setIsLoaded] = useState(false);
    const [audioPlaying, setAudioPlaying] = useState(null);
    const [currentSection, setCurrentSection] = useState('home');
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

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


    const stats = [
        { number: "500+", label: "Projets Réalisés", icon: <Award className="w-6 h-6" /> },
        { number: "50+", label: "Artistes Partenaires", icon: <Users className="w-6 h-6" /> },
        { number: "15M+", label: "Streams Générés", icon: <TrendingUp className="w-6 h-6" /> },
        { number: "5", label: "Années d'Excellence", icon: <Star className="w-6 h-6" /> }
      ];
    
    return <section 
    ref={heroRef}
    className="relative min-h-screen flex items-center justify-center overflow-hidden"
  >
    <div className="absolute inset-0">
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `url('https://images.pexels.com/photos/1010519/pexels-photo-1010519.jpeg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
          transform: `translateY(${scrollY * 0.3}px) scale(${1 + scrollY * 0.0005})`
        }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-br from-orange-900/50 via-black/70 to-red-900/50"></div>
    </div>
    
    {/* Animated Elements */}
    <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-orange-500/30 to-red-500/30 rounded-full blur-3xl animate-pulse"></div>
    <div className="absolute bottom-40 right-20 w-48 h-48 bg-gradient-to-br from-yellow-500/20 to-orange-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
    <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-gradient-to-br from-red-500/25 to-pink-500/25 rounded-full blur-2xl animate-bounce"></div>

    <div className={`relative z-10 text-center max-w-6xl mx-auto px-6 transform transition-all duration-2000 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
      <div className="mb-12">
        <div className="inline-flex items-center mt-24 space-x-2 bg-gradient-to-r from-orange-500/20 to-red-500/20 backdrop-blur-sm border border-orange-500/30 rounded-full px-6 py-3 mb-8">
          <Sparkles className="w-5 h-5 text-orange-400 animate-pulse" />
          <span className="text-orange-300 font-medium">Studio Professionnel Premium</span>
          <Sparkles className="w-5 h-5 text-orange-400 animate-pulse" />
        </div>
        
        <h1 className="text-7xl md:text-9xl font-black mb-8 leading-none">
          <span className="bg-gradient-to-r from-white via-orange-200 to-orange-300 bg-clip-text text-transparent animate-pulse">
            YOKA
          </span>
          <br />
          <span className="text-6xl md:text-8xl bg-gradient-to-r from-orange-400 via-red-400 to-yellow-400 bg-clip-text text-transparent">
            SOUND
          </span>
        </h1>
        
        <p className="text-2xl md:text-3xl text-gray-300 mb-6 font-light leading-relaxed">
          Votre son. Notre passion.
        </p>
        <p className="text-xl text-orange-300 font-semibold">
          Des résultats exceptionnels.
        </p>
      </div>
      
      <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
        <button 
          className="group relative px-10 py-5 bg-gradient-to-r from-orange-600 via-red-600 to-orange-600 rounded-2xl font-bold text-xl overflow-hidden transition-all duration-500 hover:scale-110 hover:shadow-2xl hover:shadow-orange-500/50 transform hover:-translate-y-2"
          onClick={() => setCurrentSection('réservation')}
        >
          <span className="relative z-10 flex items-center space-x-3">
            <Calendar className="w-6 h-6" />
            <span>Réserver Maintenant</span>
            <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
          </span>
          <div className="absolute inset-0 bg-gradient-to-r from-red-600 via-orange-600 to-red-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"></div>
        </button>
        
        <button 
          className="group flex items-center space-x-4 px-10 py-5 border-2 border-orange-500/50 rounded-2xl backdrop-blur-sm hover:bg-orange-500/20 hover:border-orange-400 transition-all duration-500 hover:scale-105"
          onClick={() => setAudioPlaying(audioPlaying ? null : 'demo')}
        >
          <div className="relative">
            <div className={`w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center transition-all duration-300 ${audioPlaying === 'demo' ? 'animate-pulse' : ''}`}>
              {audioPlaying === 'demo' ? (
                <Volume2 className="w-6 h-6 text-white" />
              ) : (
                <Play className="w-6 h-6 text-white ml-1" />
              )}
            </div>
            {audioPlaying === 'demo' && (
              <div className="absolute inset-0 bg-orange-500 rounded-full animate-ping opacity-50"></div>
            )}
          </div>
          <span className="text-lg font-semibold">
            {audioPlaying === 'demo' ? 'En cours...' : 'Écouter nos productions'}
          </span>
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pb-8">
        {stats.map((stat, index) => (
          <div 
            key={stat.label}
            className="group relative bg-white/5 backdrop-blur-sm border border-orange-500/20 rounded-2xl p-6 hover:bg-orange-500/10 hover:border-orange-400/50 transition-all duration-500 hover:scale-110"
            style={{ animationDelay: `${index * 200}ms` }}
          >
            <div className="text-orange-400 mb-3 flex justify-center group-hover:scale-110 transition-transform duration-300">
              {stat.icon}
            </div>
            <div className="text-3xl font-black text-white mb-2">{stat.number}</div>
            <div className="text-sm text-gray-300 font-medium">{stat.label}</div>
            <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-red-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
        ))}
      </div>
    </div>

    {/* Scroll Indicator */}
    <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
      <div className="w-8 h-12 border-2 border-orange-500/50 rounded-full flex justify-center p-2">
        <div className="w-1 h-4 bg-gradient-to-b from-orange-500 to-red-500 rounded-full animate-pulse"></div>
      </div>
    </div>
  </section>
}