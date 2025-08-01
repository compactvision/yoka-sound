import { Headphones, Zap } from 'lucide-react';


export default function Equipement(){

    const equipment = [
        { 
          name: "Neumann U87", 
          type: "Microphone", 
          image: "https://images.pexels.com/photos/164938/pexels-photo-164938.jpeg",
          price: "3,500€",
          specs: "Large diaphragm, 3 polar patterns"
        },
        { 
          name: "SSL 4000 E", 
          type: "Console", 
          image: "https://images.pexels.com/photos/1626481/pexels-photo-1626481.jpeg",
          price: "150,000€",
          specs: "48 channels, analog warmth"
        },
        { 
          name: "Yamaha NS-10M", 
          type: "Monitors", 
          image: "https://images.pexels.com/photos/1047442/pexels-photo-1047442.jpeg",
          price: "1,200€",
          specs: "Reference monitors, industry standard"
        },
        { 
          name: "Pro Tools HDX", 
          type: "DAW System", 
          image: "https://images.pexels.com/photos/744320/pexels-photo-744320.jpeg",
          price: "8,000€",
          specs: "64 channels, ultra-low latency"
        }
      ];

      
    return <section className="py-32 relative">
    <div className="max-w-7xl mx-auto px-6">
      <div className="text-center mb-20">
        <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-orange-500/20 to-red-500/20 backdrop-blur-sm border border-orange-500/30 rounded-full px-6 py-3 mb-8">
          <Zap className="w-5 h-5 text-orange-400" />
          <span className="text-orange-300 font-medium">Technologie de Pointe</span>
        </div>
        <h2 className="text-5xl md:text-7xl font-black mb-8 bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
          Équipement Pro
        </h2>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
          Du matériel haut de gamme utilisé par les plus grands studios mondiaux pour des résultats exceptionnels
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {equipment.map((item, index) => (
          <div
            key={item.name}
            className="group relative overflow-hidden rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-orange-500/50 transition-all duration-700 hover:scale-105 hover:-translate-y-4"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className="relative aspect-square overflow-hidden">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"></div>
              
              {/* Price Tag */}
              <div className="absolute top-4 right-4 bg-gradient-to-r from-orange-500 to-red-500 px-3 py-1 rounded-full text-xs font-bold text-white">
                {item.price}
              </div>
              
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-orange-900/80 to-red-900/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-4 mx-auto backdrop-blur-sm">
                    <Headphones className="w-8 h-8 text-white" />
                  </div>
                  <p className="text-sm text-white font-medium">Écouter le test</p>
                </div>
              </div>
            </div>
            
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2 group-hover:text-orange-300 transition-colors duration-300">{item.name}</h3>
              <p className="text-orange-400 font-semibold mb-3">{item.type}</p>
              <p className="text-gray-400 text-sm">{item.specs}</p>
            </div>
            
            {/* Hover Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-red-500/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </div>
        ))}
      </div>
    </div>
  </section>
}