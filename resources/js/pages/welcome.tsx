import Footer from '@/components/common/Footer';
import Header from '@/components/common/Header';
import AnimatedBackground from '@/components/section/home/AnimatedBackground';
import Artiste from '@/components/section/home/Artiste';
import Booking from '@/components/section/home/Booking';
import Equipement from '@/components/section/home/Equipement';
import Hero from '@/components/section/home/Hero';
import Projet from '@/components/section/home/Projet';
import Service from '@/components/section/home/Service';

export default function YokaSoundStudio() {
  
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden relative">
      {/* Animated Background */}
      <AnimatedBackground />

      {/* Navigation */}
      <Header />

      {/* Hero Section */}
      <Hero />

      {/* Services Section */}
      <Service />

      {/* Projects Section */}
      <Projet />

      {/* Artists Section */}
      <Artiste />

      {/* Equipment Section */}
      <Equipement />
      

      {/* Booking Section */}
      <Booking />

      {/* Footer */}
      <Footer />

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in-up {
          animation: fadeInUp 1s ease-out forwards;
        }
        
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        
        .rounded-4xl {
          border-radius: 2rem;
        }
        
        html {
          scroll-behavior: smooth;
        }
      `}</style>
    </div>
  );
}