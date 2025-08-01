import { useState } from "react";
import { Mic, Music, Headphones, Users, ArrowRight, Zap, Sparkles } from "lucide-react";

export default function Service() {
    const [activeService, setActiveService] = useState(null);

    const services = [
        {
          icon: <Mic className="w-10 h-10" />,
          title: "Enregistrement Vocal",
          description: "Studio acoustique professionnel avec matériel haut de gamme pour capturer chaque nuance de votre voix",
          price: "80€/h",
          features: ["Neumann U87", "Isolation acoustique", "Prise directe", "Retouche vocale"],
          gradient: "from-orange-500 to-red-500"
        },
        {
          icon: <Music className="w-10 h-10" />,
          title: "Production Musicale",
          description: "Composition, arrangement et production complète avec les dernières technologies",
          price: "120€/h",
          features: ["Pro Tools HDX", "Composition MIDI", "Arrangements", "Sound Design"],
          gradient: "from-orange-400 to-yellow-500"
        },
        {
          icon: <Headphones className="w-10 h-10" />,
          title: "Mixage & Mastering",
          description: "Finition professionnelle pour un son commercial et radio-ready",
          price: "100€/h",
          features: ["SSL Console", "Mastering analogique", "Stem mixing", "Dolby Atmos"],
          gradient: "from-orange-600 to-pink-500"
        },
        {
          icon: <Users className="w-10 h-10" />,
          title: "Session Groupe",
          description: "Enregistrement live pour formations complètes dans notre grand studio",
          price: "150€/h",
          features: ["12 pistes simultanées", "Live room", "Isolation cabines", "Monitoring casques"],
          gradient: "from-orange-500 to-purple-500"
        }
      ];

    return <section className="py-32 relative">
    <div className="max-w-7xl mx-auto px-6">
      <div className="text-center mb-20">
        <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-orange-500/20 to-red-500/20 backdrop-blur-sm border border-orange-500/30 rounded-full px-6 py-3 mb-8">
          <Zap className="w-5 h-5 text-orange-400" />
          <span className="text-orange-300 font-medium">Services Premium</span>
        </div>
        <h2 className="text-5xl md:text-7xl font-black mb-8 bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
          Nos Services
        </h2>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
          Des solutions complètes et professionnelles pour transformer vos idées musicales en chefs-d'œuvre
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((service, index) => (
          <div
            key={service.title}
            className="group relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:bg-white/10 hover:border-orange-500/50 transition-all duration-700 hover:scale-105 hover:-translate-y-4 cursor-pointer"
            style={{ animationDelay: `${index * 150}ms` }}
            onMouseEnter={() => setActiveService(service.title)}
            onMouseLeave={() => setActiveService(null)}
          >
            {/* Gradient Background */}
            <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 rounded-3xl transition-opacity duration-500`}></div>
            
            {/* Icon */}
            <div className="relative mb-8">
              <div className={`w-20 h-20 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-2xl shadow-orange-500/30`}>
                <div className="text-white group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
              </div>
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 animate-pulse">
                <Sparkles className="w-3 h-3 text-white" />
              </div>
            </div>
            
            <h3 className="text-2xl font-bold mb-4 group-hover:text-orange-300 transition-colors duration-300">{service.title}</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">{service.description}</p>
            
            {/* Features */}
            <div className="mb-6 space-y-2">
              {service.features.map((feature, idx) => (
                <div key={idx} className="flex items-center space-x-2 text-sm text-gray-400">
                  <div className="w-1.5 h-1.5 bg-orange-500 rounded-full"></div>
                  <span>{feature}</span>
                </div>
              ))}
            </div>
            
            <div className="flex justify-between items-center">
              <span className="text-3xl font-black bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">{service.price}</span>
              <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <ArrowRight className="w-5 h-5 text-white group-hover:translate-x-1 transition-transform duration-300" />
              </div>
            </div>
            
            {/* Hover Effects */}
            <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-red-500/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-500 to-red-500 rounded-t-3xl transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
          </div>
        ))}
      </div>
    </div>
  </section>
}