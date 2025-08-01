import { Music, Phone, Mail, MapPin, Instagram, Facebook, Twitter, Clock } from 'lucide-react';

export default function Footer() {
    return <footer className="py-20 border-t border-orange-500/20 relative">
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid md:grid-cols-4 gap-12">
        <div className="md:col-span-2">
          <div className="flex items-center space-x-3 mb-8">
            <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center shadow-2xl shadow-orange-500/50">
              <Music className="w-8 h-8 text-white" />
            </div>
            <div>
              <span className="text-3xl font-black bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
                YOKA SOUND
              </span>
              <div className="text-orange-400 font-medium">PROFESSIONAL STUDIO</div>
            </div>
          </div>
          <p className="text-gray-300 mb-8 leading-relaxed text-lg">
            Studio d'enregistrement professionnel situé au cœur de Kinshasa. 
            Nous transformons vos idées musicales en chefs-d'œuvre sonores avec passion et expertise.
          </p>
          <div className="flex space-x-4">
            {[Instagram, Facebook, Twitter].map((Icon, index) => (
              <button
                key={index}
                className="group w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center hover:bg-gradient-to-r hover:from-orange-500 hover:to-red-500 transition-all duration-300 hover:scale-110 hover:-translate-y-1"
              >
                <Icon className="w-6 h-6 group-hover:text-white transition-colors duration-300" />
              </button>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-xl font-bold mb-8 text-orange-300 flex items-center space-x-2">
            <Phone className="w-5 h-5" />
            <span>Contact</span>
          </h3>
          <div className="space-y-6">
            <div className="group flex items-center space-x-4 text-gray-300 hover:text-white transition-colors duration-300">
              <div className="w-10 h-10 bg-orange-500/20 rounded-xl flex items-center justify-center group-hover:bg-orange-500 transition-colors duration-300">
                <Phone className="w-5 h-5 text-orange-400 group-hover:text-white" />
              </div>
              <span className="text-lg">+243 81 234 5678</span>
            </div>
            <div className="group flex items-center space-x-4 text-gray-300 hover:text-white transition-colors duration-300">
              <div className="w-10 h-10 bg-orange-500/20 rounded-xl flex items-center justify-center group-hover:bg-orange-500 transition-colors duration-300">
                <Mail className="w-5 h-5 text-orange-400 group-hover:text-white" />
              </div>
              <span className="text-lg">contact@yokasound.cd</span>
            </div>
            <div className="group flex items-start space-x-4 text-gray-300 hover:text-white transition-colors duration-300">
              <div className="w-10 h-10 bg-orange-500/20 rounded-xl flex items-center justify-center group-hover:bg-orange-500 transition-colors duration-300 mt-1">
                <MapPin className="w-5 h-5 text-orange-400 group-hover:text-white" />
              </div>
              <div className="text-lg">
                <div>Avenue Tombalbaye</div>
                <div>Gombe, Kinshasa</div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-bold mb-8 text-orange-300 flex items-center space-x-2">
            <Clock className="w-5 h-5" />
            <span>Horaires</span>
          </h3>
          <div className="space-y-4 text-gray-300">
            <div className="flex justify-between items-center py-2 border-b border-white/10">
              <span className="font-medium">Lundi - Vendredi</span>
              <span className="text-orange-400 font-bold">9h - 22h</span>
            </div>
            <div className="flex justify-between items-center py-2 border-b border-white/10">
              <span className="font-medium">Samedi</span>
              <span className="text-orange-400 font-bold">10h - 20h</span>
            </div>
            <div className="flex justify-between items-center py-2">
              <span className="font-medium">Dimanche</span>
              <span className="text-red-400 font-bold">Fermé</span>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-orange-500/20 mt-16 pt-8 text-center">
        <p className="text-gray-400 text-lg">
          &copy; 2024 Yoka Sound. Tous droits réservés. 
          <span className="text-orange-400 font-semibold"> Crafted with ❤️ for music</span>
        </p>
      </div>
    </div>
  </footer>
}