

export default function ProjetModal({selectedProject, setSelectedProject}: {selectedProject: any, setSelectedProject: any}) {
    return <div className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-black/80 backdrop-blur-sm" onClick={() => setSelectedProject(null)}>
    <div className="relative max-w-2xl w-full bg-white/10 backdrop-blur-2xl border border-orange-500/30 rounded-3xl p-8 transform scale-95 hover:scale-100 transition-transform duration-300" onClick={(e) => e.stopPropagation()}>
      <button 
        className="absolute top-4 right-4 w-10 h-10 bg-red-500 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors duration-300"
        onClick={() => setSelectedProject(null)}
      >
        <span className="text-white text-xl">&times;</span>
      </button>
      
      <div className="mb-6">
        <img src={selectedProject.image} alt={selectedProject.title} className="w-full h-64 object-cover rounded-2xl" />
      </div>
      
      <h3 className="text-3xl font-bold mb-2">{selectedProject.title}</h3>
      <p className="text-orange-400 text-xl font-semibold mb-4">{selectedProject.artist}</p>
      <p className="text-gray-300 mb-6 leading-relaxed">{selectedProject.description}</p>
      
      <div className="flex justify-between items-center">
        <div className="text-sm text-gray-400">
          <div>{selectedProject.streams} streams</div>
          <div>{selectedProject.year}</div>
        </div>
        <button className="px-6 py-3 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl font-semibold hover:scale-105 transition-transform duration-300">
          Écouter
        </button>
      </div>
    </div>
  </div>
}