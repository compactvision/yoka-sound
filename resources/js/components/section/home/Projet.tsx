import ProjetModal from '@/components/common/ProjetModal';
import { Award, Clock, Play, Star, TrendingUp } from 'lucide-react';
import { useState } from 'react';

export default function Projet() {
    const [selectedProject, setSelectedProject] = useState(null);

    const recentProjects = [
        {
            id: 1,
            title: 'Neon Dreams',
            artist: 'Luna Eclipse',
            genre: 'Electronic Pop',
            image: 'https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg',
            description: "Production complète d'un album de 12 titres avec arrangements orchestraux et synthétiseurs vintage",
            year: '2024',
            streams: '2.5M',
            awards: 3,
            duration: '42:15',
            status: 'Platinum',
        },
        {
            id: 2,
            title: 'Urban Pulse',
            artist: 'MC Voltage',
            genre: 'Hip-Hop',
            image: 'https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg',
            description: 'Single rap explosif avec featuring international et production trap moderne',
            year: '2024',
            streams: '1.8M',
            awards: 2,
            duration: '3:42',
            status: 'Gold',
        },
        {
            id: 3,
            title: 'Acoustic Sessions',
            artist: 'Sarah Melody',
            genre: 'Folk Indie',
            image: 'https://images.pexels.com/photos/1407322/pexels-photo-1407322.jpeg',
            description: 'EP intimiste enregistré en one-take avec arrangements minimalistes et authentiques',
            year: '2024',
            streams: '950K',
            awards: 1,
            duration: '18:33',
            status: 'Rising',
        },
        {
            id: 4,
            title: 'Digital Horizon',
            artist: 'Synth Collective',
            genre: 'Synthwave',
            image: 'https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg',
            description: 'Album synthwave rétro-futuriste avec mastering vinyl et production analogique',
            year: '2023',
            streams: '3.2M',
            awards: 5,
            duration: '52:08',
            status: 'Diamond',
        },
    ];

    return (
        <section className="relative py-32">
            <div className="mx-auto max-w-7xl px-6">
                <div className="mb-20 text-center">
                    <div className="mb-8 inline-flex items-center space-x-2 rounded-full border border-orange-500/30 bg-gradient-to-r from-orange-500/20 to-red-500/20 px-6 py-3 backdrop-blur-sm">
                        <Award className="h-5 w-5 text-orange-400" />
                        <span className="font-medium text-orange-300">Portfolio Exceptionnel</span>
                    </div>
                    <h2 className="mb-8 bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-5xl font-black text-transparent md:text-7xl">
                        Projets Récents
                    </h2>
                    <p className="mx-auto max-w-3xl text-xl leading-relaxed text-gray-300">
                        Découvrez nos dernières productions et collaborations qui ont marqué l'industrie musicale
                    </p>
                </div>

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                    {recentProjects.map((project, index) => (
                        <div
                            key={project.id}
                            className="group relative cursor-pointer overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl transition-all duration-700 hover:-translate-y-4 hover:scale-105 hover:border-orange-500/50"
                            onClick={() => setSelectedProject(project)}
                            style={{ animationDelay: `${index * 100}ms` }}
                        >
                            <div className="relative aspect-square overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-125"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-transparent"></div>

                                {/* Status Badge */}
                                <div
                                    className={`absolute top-4 right-4 rounded-full px-3 py-1 text-xs font-bold ${
                                        project.status === 'Diamond'
                                            ? 'bg-purple-500 text-white'
                                            : project.status === 'Platinum'
                                              ? 'bg-gray-300 text-black'
                                              : project.status === 'Gold'
                                                ? 'bg-yellow-500 text-black'
                                                : 'bg-orange-500 text-white'
                                    }`}
                                >
                                    {project.status}
                                </div>

                                {/* Play Button */}
                                <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-all duration-500 group-hover:opacity-100">
                                    <div className="flex h-20 w-20 scale-75 transform items-center justify-center rounded-full bg-gradient-to-r from-orange-500 to-red-500 shadow-2xl transition-transform duration-300 group-hover:scale-100">
                                        <Play className="ml-1 h-8 w-8 text-white" />
                                    </div>
                                </div>
                            </div>

                            <div className="p-6">
                                <div className="mb-3 flex items-center justify-between">
                                    <span className="rounded-full bg-orange-500/20 px-2 py-1 text-xs font-bold text-orange-400">{project.genre}</span>
                                    <div className="flex items-center space-x-1">
                                        {[...Array(project.awards)].map((_, i) => (
                                            <Star key={i} className="h-3 w-3 fill-current text-yellow-400" />
                                        ))}
                                    </div>
                                </div>

                                <h3 className="mb-2 text-xl font-bold transition-colors duration-300 group-hover:text-orange-300">{project.title}</h3>
                                <p className="mb-2 font-semibold text-orange-400">{project.artist}</p>
                                <p className="mb-4 line-clamp-2 text-sm text-gray-400">{project.description}</p>

                                <div className="flex items-center justify-between text-xs text-gray-400">
                                    <div className="flex items-center space-x-1">
                                        <Clock className="h-3 w-3" />
                                        <span>{project.duration}</span>
                                    </div>
                                    <div className="flex items-center space-x-1">
                                        <TrendingUp className="h-3 w-3" />
                                        <span>{project.streams}</span>
                                    </div>
                                </div>
                            </div>

                            {/* Hover Effects */}
                            <div className="absolute inset-0 rounded-3xl bg-gradient-to-t from-orange-500/20 to-red-500/20 opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Project Modal */}
            {selectedProject && (
                <ProjetModal selectedProject={selectedProject} setSelectedProject={setSelectedProject} />
            )}
        </section>
    );
}
