
import { Calendar, Clock, Mic, Music, Headphones, Users, Sparkles, User, Mail } from 'lucide-react';
import { useState } from 'react';


export default function Booking() {
    const [selectedDate, setSelectedDate] = useState('');
    const [selectedTime, setSelectedTime] = useState('');
    
    const timeSlots = [
        "09:00", "10:00", "11:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00", "20:00"
      ];
    
      
    
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
    <div className="max-w-5xl mx-auto px-6">
      <div className="text-center mb-20">
        <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-orange-500/20 to-red-500/20 backdrop-blur-sm border border-orange-500/30 rounded-full px-6 py-3 mb-8">
          <Calendar className="w-5 h-5 text-orange-400" />
          <span className="text-orange-300 font-medium">Réservation Instantanée</span>
        </div>
        <h2 className="text-5xl md:text-7xl font-black mb-8 bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
          Réservation
        </h2>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
          Réservez votre session studio en quelques clics et commencez votre projet dès aujourd'hui
        </p>
      </div>

      <div className="relative bg-white/5 backdrop-blur-2xl rounded-4xl border border-white/10 p-12 md:p-16 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-orange-500 to-red-500 transform rotate-12 scale-150"></div>
        </div>
        
        <form className="relative z-10 space-y-10">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <label className="flex items-center space-x-2 text-lg font-bold text-orange-300 mb-4">
                <Music className="w-5 h-5" />
                <span>Service</span>
              </label>
              <select className="w-full p-6 bg-white/10 border border-white/20 rounded-2xl text-white backdrop-blur-sm focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500/20 transition-all duration-300 text-lg">
                <option value="" className="bg-gray-900">Choisir un service</option>
                {services.map(service => (
                  <option key={service.title} value={service.title} className="bg-gray-900">
                    {service.title} - {service.price}
                  </option>
                ))}
              </select>
            </div>
            
            <div className="space-y-4">
              <label className="flex items-center space-x-2 text-lg font-bold text-orange-300 mb-4">
                <Calendar className="w-5 h-5" />
                <span>Date</span>
              </label>
              <input
                type="date"
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
                className="w-full p-6 bg-white/10 border border-white/20 rounded-2xl text-white backdrop-blur-sm focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500/20 transition-all duration-300 text-lg"
              />
            </div>
          </div>

          <div className="space-y-6">
            <label className="flex items-center space-x-2 text-lg font-bold text-orange-300">
              <Clock className="w-5 h-5" />
              <span>Créneaux disponibles</span>
            </label>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {timeSlots.map(time => (
                <button
                  key={time}
                  type="button"
                  onClick={() => setSelectedTime(time)}
                  className={`relative p-4 rounded-2xl border-2 transition-all duration-300 font-semibold text-lg overflow-hidden ${
                    selectedTime === time
                      ? 'bg-gradient-to-r from-orange-600 to-red-600 border-orange-500 text-white transform scale-105'
                      : 'bg-white/5 border-white/20 text-gray-300 hover:border-orange-500/50 hover:bg-white/10 hover:scale-105'
                  }`}
                >
                  <span className="relative z-10">{time}</span>
                  {selectedTime === time && (
                    <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-red-400 opacity-20 animate-pulse"></div>
                  )}
                </button>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <label className="flex items-center space-x-2 text-lg font-bold text-orange-300">
                <User className="w-5 h-5" />
                <span>Nom</span>
              </label>
              <input
                type="text"
                className="w-full p-6 bg-white/10 border border-white/20 rounded-2xl text-white backdrop-blur-sm focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500/20 transition-all duration-300 text-lg"
                placeholder="Votre nom complet"
              />
            </div>
            
            <div className="space-y-4">
              <label className="flex items-center space-x-2 text-lg font-bold text-orange-300">
                <Mail className="w-5 h-5" />
                <span>Email</span>
              </label>
              <input
                type="email"
                className="w-full p-6 bg-white/10 border border-white/20 rounded-2xl text-white backdrop-blur-sm focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500/20 transition-all duration-300 text-lg"
                placeholder="votre@email.com"
              />
            </div>
          </div>

          <div className="space-y-4">
            <label className="flex items-center space-x-2 text-lg font-bold text-orange-300">
              <Mic className="w-5 h-5" />
              <span>Message (optionnel)</span>
            </label>
            <textarea
              rows={6}
              className="w-full p-6 bg-white/10 border border-white/20 rounded-2xl text-white backdrop-blur-sm focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500/20 transition-all duration-300 resize-none text-lg"
              placeholder="Décrivez votre projet, vos attentes, le style musical, etc."
            ></textarea>
          </div>

          <button
            type="submit"
            className="group relative w-full py-6 bg-gradient-to-r from-orange-600 via-red-600 to-orange-600 rounded-2xl font-black text-xl overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/50 transform hover:-translate-y-2"
          >
            <span className="relative z-10 flex items-center justify-center space-x-3">
              <Calendar className="w-6 h-6" />
              <span>Confirmer la Réservation</span>
              <Sparkles className="w-6 h-6 animate-pulse" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-red-600 via-orange-600 to-red-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"></div>
          </button>
        </form>
      </div>
    </div>
  </section>
}