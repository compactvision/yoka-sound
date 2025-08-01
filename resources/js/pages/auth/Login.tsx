import { 
    Music, 
    Eye, 
    EyeOff, 
    Lock, 
    Mail, 
    ArrowRight,
    Shield,
    Headphones,
    Volume2,
    Play,
    Pause,
    SkipForward,
    Radio
  } from 'lucide-react';
  import { useState, useEffect } from 'react';
  
  export default function YokaSoundLogin() {
    const [showPassword, setShowPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);
    const [currentTrack, setCurrentTrack] = useState(0);
    
    // Animation pour les particules flottantes
    const [particles, setParticles] = useState([]);
    
    useEffect(() => {
      // Générer des particules aléaoires
      const newParticles = Array.from({ length: 20 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 4 + 2,
        delay: Math.random() * 5,
        duration: Math.random() * 10 + 10
      }));
      setParticles(newParticles);
    }, []);

    // Simulation des tracks
    const tracks = [
      { title: "Neon Dreams", artist: "Luna Eclipse", duration: "3:42" },
      { title: "Urban Pulse", artist: "MC Voltage", duration: "4:15" },
      { title: "Synth Wave", artist: "Echo Collective", duration: "5:23" }
    ];
    
    const handleSubmit = async (e) => {
      e.preventDefault();
      setIsLoading(true);
      
      // Simulation d'une connexion
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      console.log('Login attempt:', { email, password, rememberMe });
      setIsLoading(false);
    };

    const nextTrack = () => {
      setCurrentTrack((prev) => (prev + 1) % tracks.length);
    };

    const isFormValid = email.length > 0 && password.length > 0;
  
    return (
      <div className="min-h-screen bg-black text-white overflow-hidden relative">
        {/* Particules flottantes */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {particles.map((particle) => (
            <div
              key={particle.id}
              className="absolute w-1 h-1 bg-gradient-to-r from-orange-400 to-red-400 rounded-full opacity-30"
              style={{
                left: `${particle.x}%`,
                top: `${particle.y}%`,
                width: `${particle.size}px`,
                height: `${particle.size}px`,
                animation: `float ${particle.duration}s infinite linear`,
                animationDelay: `${particle.delay}s`
              }}
            />
          ))}
        </div>

        {/* Background gradient animé */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-800">
          <div className="absolute inset-0 bg-gradient-to-tr from-orange-500/5 via-transparent to-red-500/5 animate-pulse" />
        </div>

        {/* Grille de fond */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(rgba(255, 165, 0, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255, 69, 0, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }} />
        </div>

        <div className="relative z-10 min-h-screen flex">
          {/* Panel de gauche - Décoration */}
          <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-xl relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-red-500/10" />
            
            {/* Logo principal */}
            <div className="relative z-10 p-12 flex flex-col justify-between w-full">
              <div>
                <div className="flex items-center space-x-4 mb-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center shadow-2xl">
                    <Music className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h1 className="text-3xl font-bold bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
                      YOKA SOUND
                    </h1>
                    <p className="text-gray-400">Professional Studio</p>
                  </div>
                </div>

                <div className="space-y-6 mb-12">
                  <h2 className="text-4xl font-bold leading-tight">
                    Créez votre
                    <br />
                    <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
                      son parfait
                    </span>
                  </h2>
                  <p className="text-gray-400 text-lg leading-relaxed max-w-md">
                    Studio d'enregistrement professionnel avec équipement de pointe 
                    et ingénieurs expérimentés pour donner vie à vos projets musicaux.
                  </p>
                </div>

                {/* Statistiques */}
                <div className="grid grid-cols-3 gap-6 mb-12">
                  {[
                    { label: "Projets", value: "500+" },
                    { label: "Artistes", value: "200+" },
                    { label: "Heures", value: "10K+" }
                  ].map((stat, index) => (
                    <div key={index} className="text-center">
                      <div className="text-2xl font-bold text-orange-400">{stat.value}</div>
                      <div className="text-gray-500 text-sm">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Mini lecteur audio */}
              <div className="bg-gray-800/30 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-xl flex items-center justify-center">
                      <Radio className="w-6 h-6 text-orange-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm">{tracks[currentTrack].title}</h4>
                      <p className="text-gray-400 text-xs">{tracks[currentTrack].artist}</p>
                    </div>
                  </div>
                  <span className="text-xs text-gray-500">{tracks[currentTrack].duration}</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <button className="p-2 hover:bg-gray-700/50 rounded-lg transition-colors">
                      <Play className="w-4 h-4" />
                    </button>
                    <button 
                      onClick={nextTrack}
                      className="p-2 hover:bg-gray-700/50 rounded-lg transition-colors"
                    >
                      <SkipForward className="w-4 h-4" />
                    </button>
                  </div>
                  
                  <div className="flex-1 mx-4">
                    <div className="w-full bg-gray-700 rounded-full h-1">
                      <div className="bg-gradient-to-r from-orange-500 to-red-500 h-1 rounded-full w-1/3 transition-all duration-300" />
                    </div>
                  </div>
                  
                  <Volume2 className="w-4 h-4 text-gray-400" />
                </div>
              </div>
            </div>

            {/* Éléments décoratifs */}
            <div className="absolute top-20 right-20 w-32 h-32 bg-gradient-to-br from-orange-500/10 to-red-500/10 rounded-full blur-3xl" />
            <div className="absolute bottom-40 left-20 w-24 h-24 bg-gradient-to-br from-red-500/10 to-orange-500/10 rounded-full blur-2xl" />
          </div>

          {/* Panel de droite - Formulaire */}
          <div className="w-full lg:w-1/2 flex items-center justify-center p-6 sm:p-8 lg:p-12">
            <div className="w-full max-w-md">
              {/* Header mobile */}
              <div className="lg:hidden text-center mb-8">
                <div className="inline-flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center">
                    <Music className="w-6 h-6 text-white" />
                  </div>
                  <h1 className="text-2xl font-bold bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
                    YOKA SOUND
                  </h1>
                </div>
                <p className="text-gray-400">Connectez-vous à votre studio</p>
              </div>

              {/* Formulaire */}
              <div className="bg-gray-900/60 backdrop-blur-2xl border border-gray-800/50 rounded-3xl p-6 sm:p-8 shadow-2xl">
                <div className="text-center mb-8">
                  <h2 className="text-2xl sm:text-3xl font-bold mb-2">Connexion</h2>
                  <p className="text-gray-400">Accédez à votre dashboard</p>
                </div>

                <div className="space-y-6">
                  {/* Email */}
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-300 flex items-center space-x-2">
                      <Mail className="w-4 h-4" />
                      <span>Email</span>
                    </label>
                    <div className="relative">
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:border-orange-500 focus:bg-gray-800/70 focus:outline-none focus:ring-2 focus:ring-orange-500/20 transition-all duration-200"
                        placeholder="votre@email.com"
                        required
                      />
                    </div>
                  </div>

                  {/* Mot de passe */}
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-300 flex items-center space-x-2">
                      <Lock className="w-4 h-4" />
                      <span>Mot de passe</span>
                    </label>
                    <div className="relative">
                      <input
                        type={showPassword ? "text" : "password"}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full px-4 py-3 pr-12 bg-gray-800/50 border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:border-orange-500 focus:bg-gray-800/70 focus:outline-none focus:ring-2 focus:ring-orange-500/20 transition-all duration-200"
                        placeholder="••••••••"
                        required
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 p-1 text-gray-400 hover:text-white transition-colors"
                      >
                        {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                      </button>
                    </div>
                  </div>

                  {/* Options */}
                  <div className="flex items-center justify-between text-sm">
                    <label className="flex items-center space-x-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={rememberMe}
                        onChange={(e) => setRememberMe(e.target.checked)}
                        className="w-4 h-4 rounded border-gray-600 bg-gray-800 text-orange-500 focus:ring-orange-500 focus:ring-2"
                      />
                      <span className="text-gray-300">Se souvenir de moi</span>
                    </label>
                    <button
                      type="button"
                      className="text-orange-400 hover:text-orange-300 transition-colors"
                    >
                      Mot de passe oublié ?
                    </button>
                  </div>

                  {/* Bouton de connexion */}
                  <button
                    type="button"
                    onClick={handleSubmit}
                    disabled={!isFormValid || isLoading}
                    className={`w-full py-3 px-6 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center space-x-2 ${
                      isFormValid && !isLoading
                        ? 'bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 hover:scale-[1.02] hover:shadow-lg hover:shadow-orange-500/25 text-white'
                        : 'bg-gray-800 text-gray-400 cursor-not-allowed'
                    }`}
                  >
                    {isLoading ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        <span>Connexion...</span>
                      </>
                    ) : (
                      <>
                        <span>Se connecter</span>
                        <ArrowRight className="w-5 h-5" />
                      </>
                    )}
                  </button>
                </div>

                {/* Sécurité */}
                <div className="mt-8 pt-6 border-t border-gray-800">
                  <div className="flex items-center justify-center space-x-2 text-sm text-gray-400">
                    <Shield className="w-4 h-4" />
                    <span>Connexion sécurisée SSL</span>
                  </div>
                </div>
              </div>

              {/* Footer */}
              <div className="text-center mt-8">
                <p className="text-gray-500 text-sm">
                  © 2024 YOKA SOUND. Tous droits réservés.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Styles pour les animations */}
        <style>{`
          @keyframes float {
            0%, 100% { transform: translateY(0px) translateX(0px); }
            25% { transform: translateY(-20px) translateX(10px); }
            50% { transform: translateY(-10px) translateX(-10px); }
            75% { transform: translateY(-30px) translateX(5px); }
          }
        `}</style>
      </div>
    );
  }