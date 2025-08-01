import { 
    Music, 
    Calendar, 
    Users, 
    DollarSign, 
    TrendingUp, 
    Play, 
    Clock, 
    Star,
    Headphones,
    Mic,
    Volume2,
    Award,
    Settings,
    Bell,
    Search,
    Plus,
    Edit,
    Eye,
    Trash2,
    Download,
    Upload,
    BarChart3,
    PieChart,
    Activity,
    Menu,
    X
  } from 'lucide-react';
  import { useState } from 'react';
  
  export default function YokaSoundDashboard() {
    const [activeTab, setActiveTab] = useState('overview');
    const [sidebarOpen, setSidebarOpen] = useState(false);
  
    // Données simulées
    const stats = [
      {
        title: 'Revenus Totaux',
        value: '€12,450',
        change: '+12%',
        trend: 'up',
        icon: <DollarSign className="w-6 h-6" />,
        color: 'from-green-500 to-emerald-500'
      },
      {
        title: 'Sessions Actives',
        value: '8',
        change: '+3',
        trend: 'up',
        icon: <Headphones className="w-6 h-6" />,
        color: 'from-orange-500 to-red-500'
      },
      {
        title: 'Projets Complétés',
        value: '24',
        change: '+8%',
        trend: 'up',
        icon: <Music className="w-6 h-6" />,
        color: 'from-blue-500 to-cyan-500'
      },
      {
        title: 'Clients Satisfaits',
        value: '98%',
        change: '+2%',
        trend: 'up',
        icon: <Star className="w-6 h-6" />,
        color: 'from-purple-500 to-pink-500'
      }
    ];
  
    const recentBookings = [
      {
        id: 1,
        client: 'Luna Eclipse',
        service: 'Enregistrement Vocal',
        date: '2024-08-02',
        time: '14:00',
        status: 'Confirmé',
        amount: '€80'
      },
      {
        id: 2,
        client: 'MC Voltage',
        service: 'Production Musicale',
        date: '2024-08-03',
        time: '16:00',
        status: 'En attente',
        amount: '€120'
      },
      {
        id: 3,
        client: 'Sarah Melody',
        service: 'Mixage & Mastering',
        date: '2024-08-05',
        time: '10:00',
        status: 'Confirmé',
        amount: '€100'
      },
      {
        id: 4,
        client: 'Synth Collective',
        service: 'Session Groupe',
        date: '2024-08-07',
        time: '18:00',
        status: 'Confirmé',
        amount: '€150'
      }
    ];
  
    const recentProjects = [
      {
        id: 1,
        title: 'Neon Dreams',
        artist: 'Luna Eclipse',
        progress: 85,
        status: 'En cours',
        deadline: '2024-08-15'
      },
      {
        id: 2,
        title: 'Urban Pulse',
        artist: 'MC Voltage',
        progress: 100,
        status: 'Terminé',
        deadline: '2024-07-28'
      },
      {
        id: 3,
        title: 'Acoustic Sessions',
        artist: 'Sarah Melody',
        progress: 45,
        status: 'En cours',
        deadline: '2024-08-20'
      }
    ];
  
    const equipment = [
      { name: 'Neumann U87', status: 'Disponible', usage: '78%' },
      { name: 'SSL 4000 E', status: 'En cours', usage: '92%' },
      { name: 'Pro Tools HDX', status: 'Disponible', usage: '65%' },
      { name: 'Yamaha NS-10M', status: 'Maintenance', usage: '0%' }
    ];

    const menuItems = [
      { id: 'overview', label: 'Vue d\'ensemble', icon: <BarChart3 className="w-5 h-5" /> },
      { id: 'bookings', label: 'Réservations', icon: <Calendar className="w-5 h-5" /> },
      { id: 'projects', label: 'Projets', icon: <Music className="w-5 h-5" /> },
      { id: 'clients', label: 'Clients', icon: <Users className="w-5 h-5" /> },
      { id: 'equipment', label: 'Équipement', icon: <Headphones className="w-5 h-5" /> },
      { id: 'analytics', label: 'Analytics', icon: <Activity className="w-5 h-5" /> },
      { id: 'settings', label: 'Paramètres', icon: <Settings className="w-5 h-5" /> }
    ];
  
    const getStatusColor = (status) => {
      switch (status) {
        case 'Confirmé':
        case 'Disponible':
        case 'Terminé':
          return 'bg-green-500/20 text-green-400 border-green-500/30';
        case 'En attente':
        case 'En cours':
          return 'bg-orange-500/20 text-orange-400 border-orange-500/30';
        case 'Maintenance':
          return 'bg-red-500/20 text-red-400 border-red-500/30';
        default:
          return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
      }
    };

    const handleTabChange = (tabId) => {
      setActiveTab(tabId);
      setSidebarOpen(false); // Fermer la sidebar sur mobile après sélection
    };
  
    return (
      <div className="min-h-screen bg-black text-white">
        {/* Header */}
        <header className="bg-gray-900/50 backdrop-blur-xl border-b border-gray-800 sticky top-0 z-50">
          <div className="px-4 sm:px-6 py-4">
            <div className="flex items-center justify-between">
              {/* Logo et Menu Mobile */}
              <div className="flex items-center space-x-3">
                <button
                  onClick={() => setSidebarOpen(!sidebarOpen)}
                  className="lg:hidden p-2 hover:bg-gray-800 rounded-lg transition-colors"
                >
                  {sidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                </button>
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center">
                  <Music className="w-4 h-4 sm:w-6 sm:h-6 text-white" />
                </div>
                <div className="hidden sm:block">
                  <h1 className="text-lg sm:text-xl font-bold bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
                    YOKA SOUND
                  </h1>
                  <p className="text-xs text-gray-400">Dashboard Admin</p>
                </div>
              </div>
  
              {/* Search & Actions */}
              <div className="flex items-center space-x-2 sm:space-x-4">
                <div className="relative hidden sm:block">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Rechercher..."
                    className="pl-10 pr-4 py-2 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-orange-500 focus:outline-none w-48 lg:w-64"
                  />
                </div>
                <button className="sm:hidden p-2 bg-gray-800/50 rounded-lg hover:bg-gray-700 transition-colors">
                  <Search className="w-5 h-5" />
                </button>
                <button className="p-2 bg-gray-800/50 rounded-lg hover:bg-gray-700 transition-colors">
                  <Bell className="w-5 h-5" />
                </button>
                <button className="p-2 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg hover:scale-105 transition-transform">
                  <Plus className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </header>

        <div className="flex relative">
          {/* Overlay pour mobile */}
          {sidebarOpen && (
            <div 
              className="fixed inset-0 bg-black/50 z-40 lg:hidden"
              onClick={() => setSidebarOpen(false)}
            />
          )}

          {/* Sidebar */}
          <aside className={`
            ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}
            lg:translate-x-0 fixed lg:static top-0 left-0 z-50 lg:z-auto
            w-64 bg-gray-900/95 lg:bg-gray-900/30 backdrop-blur-xl border-r border-gray-800 
            min-h-screen pt-20 lg:pt-0 transition-transform duration-300 ease-in-out
          `}>
            <nav className="p-4 sm:p-6">
              <div className="space-y-2">
                {menuItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => handleTabChange(item.id)}
                    className={`w-full flex items-center space-x-3 px-3 sm:px-4 py-3 rounded-lg transition-all duration-200 ${
                      activeTab === item.id
                        ? 'bg-gradient-to-r from-orange-500/20 to-red-500/20 border border-orange-500/30 text-orange-300'
                        : 'hover:bg-gray-800/50 text-gray-300'
                    }`}
                  >
                    {item.icon}
                    <span className="text-sm sm:text-base">{item.label}</span>
                  </button>
                ))}
              </div>
            </nav>
          </aside>
  
          {/* Main Content */}
          <main className="flex-1 p-4 sm:p-6 min-h-screen">
            {activeTab === 'overview' && (
              <div className="space-y-6">
                {/* Stats Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                  {stats.map((stat, index) => (
                    <div
                      key={index}
                      className="bg-gray-900/50 backdrop-blur-xl border border-gray-800 rounded-2xl p-4 sm:p-6 hover:border-orange-500/30 transition-colors"
                    >
                      <div className="flex items-center justify-between mb-4">
                        <div className={`w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r ${stat.color} rounded-xl flex items-center justify-center`}>
                          {stat.icon}
                        </div>
                        <span className={`text-sm font-medium ${
                          stat.trend === 'up' ? 'text-green-400' : 'text-red-400'
                        }`}>
                          {stat.change}
                        </span>
                      </div>
                      <h3 className="text-xl sm:text-2xl font-bold mb-1">{stat.value}</h3>
                      <p className="text-gray-400 text-sm">{stat.title}</p>
                    </div>
                  ))}
                </div>
  
                {/* Charts Section */}
                <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
                  <div className="bg-gray-900/50 backdrop-blur-xl border border-gray-800 rounded-2xl p-4 sm:p-6">
                    <h3 className="text-lg sm:text-xl font-bold mb-4 flex items-center space-x-2">
                      <TrendingUp className="w-5 h-5 text-orange-400" />
                      <span>Revenus Mensuels</span>
                    </h3>
                    <div className="h-48 sm:h-64 bg-gray-800/30 rounded-xl flex items-center justify-center">
                      <p className="text-gray-400">Graphique des revenus</p>
                    </div>
                  </div>
  
                  <div className="bg-gray-900/50 backdrop-blur-xl border border-gray-800 rounded-2xl p-4 sm:p-6">
                    <h3 className="text-lg sm:text-xl font-bold mb-4 flex items-center space-x-2">
                      <PieChart className="w-5 h-5 text-orange-400" />
                      <span>Services Populaires</span>
                    </h3>
                    <div className="h-48 sm:h-64 bg-gray-800/30 rounded-xl flex items-center justify-center">
                      <p className="text-gray-400">Graphique en secteurs</p>
                    </div>
                  </div>
                </div>
  
                {/* Recent Activity */}
                <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
                  <div className="bg-gray-900/50 backdrop-blur-xl border border-gray-800 rounded-2xl p-4 sm:p-6">
                    <h3 className="text-lg sm:text-xl font-bold mb-4 flex items-center space-x-2">
                      <Calendar className="w-5 h-5 text-orange-400" />
                      <span>Réservations Récentes</span>
                    </h3>
                    <div className="space-y-4">
                      {recentBookings.slice(0, 3).map((booking) => (
                        <div key={booking.id} className="flex flex-col sm:flex-row sm:items-center justify-between p-4 bg-gray-800/30 rounded-xl space-y-2 sm:space-y-0">
                          <div className="flex-1">
                            <h4 className="font-semibold">{booking.client}</h4>
                            <p className="text-gray-400 text-sm">{booking.service}</p>
                            <p className="text-gray-500 text-xs">{booking.date} à {booking.time}</p>
                          </div>
                          <div className="flex items-center justify-between sm:flex-col sm:items-end space-x-2 sm:space-x-0">
                            <span className={`px-2 py-1 rounded-full text-xs border ${getStatusColor(booking.status)}`}>
                              {booking.status}
                            </span>
                            <p className="text-orange-400 font-bold">{booking.amount}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
  
                  <div className="bg-gray-900/50 backdrop-blur-xl border border-gray-800 rounded-2xl p-4 sm:p-6">
                    <h3 className="text-lg sm:text-xl font-bold mb-4 flex items-center space-x-2">
                      <Music className="w-5 h-5 text-orange-400" />
                      <span>Projets en Cours</span>
                    </h3>
                    <div className="space-y-4">
                      {recentProjects.map((project) => (
                        <div key={project.id} className="p-4 bg-gray-800/30 rounded-xl">
                          <div className="flex items-center justify-between mb-2">
                            <h4 className="font-semibold text-sm sm:text-base">{project.title}</h4>
                            <span className={`px-2 py-1 rounded-full text-xs border ${getStatusColor(project.status)}`}>
                              {project.status}
                            </span>
                          </div>
                          <p className="text-gray-400 text-sm mb-3">{project.artist}</p>
                          <div className="flex items-center justify-between">
                            <div className="flex-1 mr-4">
                              <div className="w-full bg-gray-700 rounded-full h-2">
                                <div 
                                  className="bg-gradient-to-r from-orange-500 to-red-500 h-2 rounded-full transition-all duration-300"
                                  style={{ width: `${project.progress}%` }}
                                ></div>
                              </div>
                            </div>
                            <span className="text-sm font-medium">{project.progress}%</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}
  
            {activeTab === 'bookings' && (
              <div className="space-y-6">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between space-y-4 sm:space-y-0">
                  <h2 className="text-2xl sm:text-3xl font-bold">Réservations</h2>
                  <button className="w-full sm:w-auto px-4 py-2 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg hover:scale-105 transition-transform text-center">
                    Nouvelle Réservation
                  </button>
                </div>
  
                <div className="bg-gray-900/50 backdrop-blur-xl border border-gray-800 rounded-2xl overflow-hidden">
                  <div className="p-4 sm:p-6 border-b border-gray-800">
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between space-y-4 sm:space-y-0">
                      <h3 className="text-lg sm:text-xl font-bold">Toutes les Réservations</h3>
                      <div className="flex flex-wrap gap-2">
                        <button className="px-3 py-1 bg-orange-500/20 text-orange-400 rounded-lg text-sm">
                          Aujourd'hui
                        </button>
                        <button className="px-3 py-1 bg-gray-800 text-gray-400 rounded-lg text-sm">
                          Cette semaine
                        </button>
                      </div>
                    </div>
                  </div>
                  
                  {/* Table pour desktop */}
                  <div className="hidden md:block overflow-x-auto">
                    <table className="w-full">
                      <thead className="bg-gray-800/50">
                        <tr>
                          <th className="text-left p-4 font-semibold">Client</th>
                          <th className="text-left p-4 font-semibold">Service</th>
                          <th className="text-left p-4 font-semibold">Date & Heure</th>
                          <th className="text-left p-4 font-semibold">Status</th>
                          <th className="text-left p-4 font-semibold">Montant</th>
                          <th className="text-left p-4 font-semibold">Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {recentBookings.map((booking) => (
                          <tr key={booking.id} className="border-b border-gray-800/50 hover:bg-gray-800/20">
                            <td className="p-4 font-medium">{booking.client}</td>
                            <td className="p-4 text-gray-400">{booking.service}</td>
                            <td className="p-4 text-gray-400">{booking.date} à {booking.time}</td>
                            <td className="p-4">
                              <span className={`px-2 py-1 rounded-full text-xs border ${getStatusColor(booking.status)}`}>
                                {booking.status}
                              </span>
                            </td>
                            <td className="p-4 font-bold text-orange-400">{booking.amount}</td>
                            <td className="p-4">
                              <div className="flex space-x-2">
                                <button className="p-1 hover:bg-gray-800 rounded">
                                  <Eye className="w-4 h-4" />
                                </button>
                                <button className="p-1 hover:bg-gray-800 rounded">
                                  <Edit className="w-4 h-4" />
                                </button>
                                <button className="p-1 hover:bg-red-800 rounded">
                                  <Trash2 className="w-4 h-4" />
                                </button>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  {/* Cards pour mobile */}
                  <div className="md:hidden p-4 space-y-4">
                    {recentBookings.map((booking) => (
                      <div key={booking.id} className="bg-gray-800/30 rounded-xl p-4 space-y-3">
                        <div className="flex items-center justify-between">
                          <h4 className="font-semibold">{booking.client}</h4>
                          <span className={`px-2 py-1 rounded-full text-xs border ${getStatusColor(booking.status)}`}>
                            {booking.status}
                          </span>
                        </div>
                        <p className="text-gray-400 text-sm">{booking.service}</p>
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-gray-400">{booking.date} à {booking.time}</span>
                          <span className="font-bold text-orange-400">{booking.amount}</span>
                        </div>
                        <div className="flex space-x-2 pt-2">
                          <button className="flex-1 p-2 bg-gray-800/50 rounded-lg hover:bg-gray-700 transition-colors text-sm">
                            Voir
                          </button>
                          <button className="flex-1 p-2 bg-gray-800/50 rounded-lg hover:bg-gray-700 transition-colors text-sm">
                            Modifier
                          </button>
                          <button className="p-2 bg-red-800/20 rounded-lg hover:bg-red-800/40 transition-colors">
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
  
            {activeTab === 'equipment' && (
              <div className="space-y-6">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between space-y-4 sm:space-y-0">
                  <h2 className="text-2xl sm:text-3xl font-bold">Équipement Studio</h2>
                  <button className="w-full sm:w-auto px-4 py-2 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg hover:scale-105 transition-transform text-center">
                    Ajouter Équipement
                  </button>
                </div>
  
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
                  {equipment.map((item, index) => (
                    <div
                      key={index}
                      className="bg-gray-900/50 backdrop-blur-xl border border-gray-800 rounded-2xl p-4 sm:p-6 hover:border-orange-500/30 transition-colors"
                    >
                      <div className="flex items-center justify-between mb-4">
                        <Headphones className="w-6 h-6 sm:w-8 sm:h-8 text-orange-400" />
                        <span className={`px-2 py-1 rounded-full text-xs border ${getStatusColor(item.status)}`}>
                          {item.status}
                        </span>
                      </div>
                      <h3 className="text-base sm:text-lg font-bold mb-2">{item.name}</h3>
                      <div className="mb-3">
                        <div className="flex justify-between text-sm mb-1">
                          <span>Utilisation</span>
                          <span>{item.usage}</span>
                        </div>
                        <div className="w-full bg-gray-700 rounded-full h-2">
                          <div 
                            className="bg-gradient-to-r from-orange-500 to-red-500 h-2 rounded-full"
                            style={{ width: item.usage }}
                          ></div>
                        </div>
                      </div>
                      <div className="flex space-x-2">
                        <button className="flex-1 p-2 bg-gray-800/50 rounded-lg hover:bg-gray-700 transition-colors text-sm">
                          Détails
                        </button>
                        <button className="p-2 bg-gray-800/50 rounded-lg hover:bg-gray-700 transition-colors">
                          <Settings className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Autres onglets avec message par défaut */}
            {!['overview', 'bookings', 'equipment'].includes(activeTab) && (
              <div className="bg-gray-900/50 backdrop-blur-xl border border-gray-800 rounded-2xl p-8 text-center">
                <h2 className="text-2xl font-bold mb-4 capitalize">
                  {menuItems.find(item => item.id === activeTab)?.label}
                </h2>
                <p className="text-gray-400">Cette section est en cours de développement.</p>
              </div>
            )}
          </main>
        </div>
      </div>
    );
  }