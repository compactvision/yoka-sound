import { Heart, Star, TrendingUp } from 'lucide-react';

export default function Artiste() {
    const partnerArtists = [
        {
            name: 'Luna Eclipse',
            genre: 'Electronic Pop',
            image: 'https://images.pexels.com/photos/1587927/pexels-photo-1587927.jpeg',
            albums: 3,
            followers: '125K',
            description: 'Artiste électro-pop innovante, pionnière du son futuriste européen',
            verified: true,
            trending: true,
        },
        {
            name: 'MC Voltage',
            genre: 'Hip-Hop',
            image: 'https://images.pexels.com/photos/1699161/pexels-photo-1699161.jpeg',
            albums: 2,
            followers: '89K',
            description: 'Rappeur émergent révolutionnant la scène trap francophone',
            verified: true,
            trending: true,
        },
        {
            name: 'Sarah Melody',
            genre: 'Folk Indie',
            image: 'https://images.pexels.com/photos/1407322/pexels-photo-1407322.jpeg',
            albums: 4,
            followers: '67K',
            description: 'Auteure-compositrice folk touchante avec une approche moderne',
            verified: false,
            trending: false,
        },
    ];

    return (
        <section className="relative py-32">
            <div className="mx-auto max-w-7xl px-6">
                <div className="mb-20 text-center">
                    <div className="mb-8 inline-flex items-center space-x-2 rounded-full border border-orange-500/30 bg-gradient-to-r from-orange-500/20 to-red-500/20 px-6 py-3 backdrop-blur-sm">
                        <Heart className="h-5 w-5 text-orange-400" />
                        <span className="font-medium text-orange-300">Communauté d'Excellence</span>
                    </div>
                    <h2 className="mb-8 bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-5xl font-black text-transparent md:text-7xl">
                        Nos Artistes
                    </h2>
                    <p className="mx-auto max-w-3xl text-xl leading-relaxed text-gray-300">
                        Une famille d'artistes talentueux qui font confiance à notre expertise pour révéler leur potentiel
                    </p>
                </div>

                <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
                    {partnerArtists.map((artist, index) => (
                        <div
                            key={artist.name}
                            className="group relative rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition-all duration-700 hover:-translate-y-4 hover:scale-105 hover:border-orange-500/50 hover:bg-white/10"
                            style={{ animationDelay: `${index * 150}ms` }}
                        >
                            <div className="mb-8 flex items-center">
                                <div className="relative mr-6 h-20 w-20 overflow-hidden rounded-2xl border-2 border-orange-400/50 transition-colors duration-300 group-hover:border-orange-400">
                                    <img
                                        src={artist.image}
                                        alt={artist.name}
                                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                    {artist.verified && (
                                        <div className="absolute -top-1 -right-1 flex h-6 w-6 items-center justify-center rounded-full bg-blue-500">
                                            <div className="h-3 w-3 rounded-full bg-white"></div>
                                        </div>
                                    )}
                                </div>
                                <div>
                                    <div className="mb-1 flex items-center space-x-2">
                                        <h3 className="text-2xl font-bold transition-colors duration-300 group-hover:text-orange-300">
                                            {artist.name}
                                        </h3>
                                        {artist.trending && (
                                            <div className="flex items-center space-x-1 rounded-full bg-orange-500 px-2 py-1">
                                                <TrendingUp className="h-3 w-3 text-white" />
                                                <span className="text-xs font-bold text-white">HOT</span>
                                            </div>
                                        )}
                                    </div>
                                    <p className="mb-2 font-semibold text-orange-400">{artist.genre}</p>
                                </div>
                            </div>

                            <p className="mb-8 leading-relaxed text-gray-300">{artist.description}</p>

                            <div className="mb-8 grid grid-cols-3 gap-4">
                                <div className="text-center">
                                    <div className="mb-1 bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-3xl font-black text-transparent">
                                        {artist.albums}
                                    </div>
                                    <div className="text-xs font-medium text-gray-400">Albums</div>
                                </div>
                                <div className="text-center">
                                    <div className="mb-1 bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-3xl font-black text-transparent">
                                        {artist.followers}
                                    </div>
                                    <div className="text-xs font-medium text-gray-400">Followers</div>
                                </div>
                                <div className="text-center">
                                    <div className="mb-1 flex justify-center space-x-1">
                                        {[...Array(5)].map((_, i) => (
                                            <Star key={i} className="h-4 w-4 fill-current text-yellow-400" />
                                        ))}
                                    </div>
                                    <div className="text-xs font-medium text-gray-400">Rating</div>
                                </div>
                            </div>

                            <div className="flex space-x-3">
                                <button className="flex-1 rounded-xl border border-orange-500/30 bg-gradient-to-r from-orange-600/20 to-red-600/20 py-3 text-sm font-semibold transition-all duration-300 hover:border-orange-400 hover:from-orange-600/40 hover:to-red-600/40">
                                    Portfolio
                                </button>
                                <button className="flex-1 rounded-xl bg-gradient-to-r from-orange-600 to-red-600 py-3 text-sm font-semibold transition-transform duration-300 hover:scale-105">
                                    Collaborer
                                </button>
                            </div>

                            {/* Hover Effect */}
                            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-orange-500/10 to-red-500/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
