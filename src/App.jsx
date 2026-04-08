import { useState } from 'react';
import { 
  Github, Linkedin, Mail, Download, PlayCircle, 
  Menu, X, MapPin, Phone, Send 
} from 'lucide-react';

// Statische Daten außerhalb der Komponente (Best Practice)
const personalInfo = {
  name: "Marcel Kawa",
  role: "Auszubildender Fachinformatiker",
  subRole: "in Anwendungsentwicklung",
  bio: "Auszubildender mit mehrjähriger Praxiserfahrung in Produktion und Qualitätsmanagement. Ich bringe technisches Verständnis aus der Industrie mit und baue dieses durch fundierte Kenntnisse in Python und SQL konsequent in der Softwareentwicklung aus. Meine Interessen liegen in Automatisierung und effizienten Softwarelösungen.",
  email: "marcelkawa@gmx.de",
  phone: "+49 172 6898510",
  location: "Kassel, Deutschland"
};

const skills = {
  left: [
    { name: "Python", level: 8, color: "text-sky-500", bgColor: "bg-sky-500" },
    { name: "MySQL", level: 7, color: "text-blue-500", bgColor: "bg-blue-500" },
    { name: "SQLite", level: 7, color: "text-blue-400", bgColor: "bg-blue-400" },
    { name: "Git", level: 6, color: "text-orange-500", bgColor: "bg-orange-500" },
  ],
  right: [
    { name: "MS Office", level: 9, color: "text-blue-300", bgColor: "bg-blue-300" },
    { name: "Englisch (C1)", level: 9, color: "text-indigo-400", bgColor: "bg-indigo-400" },
    { name: "Polnisch (B1)", level: 7, color: "text-red-400", bgColor: "bg-red-400" },
    { name: "Teamwork", level: 9, color: "text-teal-400", bgColor: "bg-teal-400" },
  ]
};

const projects = [
  {
    id: 1,
    type: 'app',
    title: "Produktions-Dashboard",
    description: "Konzept für ein Überwachungs-Dashboard zur Kontrolle des Materialflusses und Qualitätsprüfung, basierend auf Erfahrungen bei VW und B. Braun.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
    tags: ["Python", "Dash", "SQL"]
  },
  {
    id: 2,
    type: 'website',
    title: "Qualitäts-Datenbank",
    description: "Entwurf einer Datenbankstruktur zur Dokumentation von Messergebnissen und Prüfunterlagen zur Optimierung von QS-Prozessen.",
    image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&q=80&w=800",
    tags: ["MySQL", "PHP", "Bootstrap"]
  },
  {
    id: 3,
    type: 'app',
    title: "Automatisierungs-Skripte",
    description: "Sammlung von Python-Skripten zur Automatisierung wiederkehrender Aufgaben in der Datenpflege und Dokumentation.",
    image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&q=80&w=800",
    tags: ["Python", "Pandas", "Automation"]
  },
  {
    id: 4,
    type: 'app',
    title: "Lagerhaltungs-App",
    description: "Prototyp einer mobilen Anwendung zur schnellen Erfassung von Lagerbeständen, inspiriert durch Logistik-Erfahrung.",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800",
    tags: ["React Native", "Firebase"]
  }
];

const SkillDots = ({ level, bgColor }) => (
  <div className="flex gap-2">
    {[...Array(10)].map((_, i) => (
      <div key={i} className={`w-3 h-3 rounded-full ${i < level ? bgColor : "bg-gray-800"}`} />
    ))}
  </div>
);

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeProjectType, setActiveProjectType] = useState('app');

  const handleContactSubmit = (e) => {
    e.preventDefault();
    alert("Diese Funktion wird später mit einem Backend verknüpft!");
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white font-sans selection:bg-cyan-500 selection:text-white overflow-x-hidden">
      
      {/* Background Effects */}
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-900/20 rounded-full blur-[120px]" />
        <div className="absolute top-[20%] right-[-5%] w-[30%] h-[30%] bg-cyan-900/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[20%] w-[50%] h-[50%] bg-sky-900/20 rounded-full blur-[120px]" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
        <div className="absolute inset-0" style={{ backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px)', backgroundSize: '100px 100px' }}></div>
      </div>

      {/* Navigation */}
      <nav className="fixed w-full z-50 backdrop-blur-md bg-[#0a0a0a]/80 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex-shrink-0 cursor-pointer">
              <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">
                Portfolio&lt;/&gt;
              </span>
            </div>
            
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                {['Home', 'Über mich', 'Skills', 'Projekte', 'Kontakt'].map((item) => (
                  <a key={item} href={`#${item.toLowerCase().replace(' ', '-')}`} className="text-gray-300 hover:text-cyan-400 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300">
                    {item}
                  </a>
                ))}
              </div>
            </div>

            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-300 hover:text-white p-2">
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-[#0a0a0a] border-b border-white/10">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {['Home', 'Über mich', 'Skills', 'Projekte', 'Kontakt'].map((item) => (
                <a key={item} href={`#${item.toLowerCase().replace(' ', '-')}`} className="text-gray-300 hover:text-cyan-400 block px-3 py-2 rounded-md text-base font-medium" onClick={() => setIsMenuOpen(false)}>
                  {item}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Home Section */}
      <section id="home" className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto min-h-screen flex items-center">
        <div className="grid md:grid-cols-2 gap-12 items-center w-full">
          <div className="space-y-8 animate-fade-in-up">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
                Hi, ich bin <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-sky-500">
                  {personalInfo.name}
                </span>
              </h1>
              <h2 className="text-2xl md:text-3xl font-semibold text-gray-300">
                {personalInfo.role} <br />
                <span className="text-cyan-400">{personalInfo.subRole}</span>
              </h2>
              <p className="text-gray-400 max-w-lg text-lg leading-relaxed">
                {personalInfo.bio}
              </p>
            </div>

            <div className="flex flex-wrap gap-4 items-center">
              {/* Pfad zum Lebenslauf im public Ordner korrigiert */}
              <a href="/assets/data/Lebenslauf.pdf" download="Lebenslauf_Marcel_Kawa.pdf" className="group relative px-8 py-3 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full text-white font-medium transition-all hover:shadow-[0_0_20px_rgba(6,182,212,0.5)] flex items-center gap-2">
                Lebenslauf herunterladen
                <span className="group-hover:translate-y-1 transition-transform"><Download size={18} /></span>
              </a>
              
              <div className="flex gap-4 ml-4">
                <a href="#!" className="p-2 bg-gray-800/50 rounded-full hover:bg-gray-700/50 hover:text-cyan-400 transition-colors border border-white/5 hover:border-cyan-500/30">
                  <Github size={20} />
                </a>
                <a href="#!" className="p-2 bg-gray-800/50 rounded-full hover:bg-gray-700/50 hover:text-cyan-400 transition-colors border border-white/5 hover:border-cyan-500/30">
                  <Linkedin size={20} />
                </a>
                <a href={`mailto:${personalInfo.email}`} className="p-2 bg-gray-800/50 rounded-full hover:bg-gray-700/50 hover:text-cyan-400 transition-colors border border-white/5 hover:border-cyan-500/30">
                  <Mail size={20} />
                </a>
              </div>
            </div>
          </div>

          <div className="relative flex justify-center items-center">
            <div className="relative w-72 h-72 md:w-96 md:h-96">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full blur-[50px] opacity-50 animate-pulse"></div>
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white/10 z-10 bg-[#0a0a0a]">
                 <img 
                  src="/assets/images/marcel-portrait.png" 
                  alt="Marcel Kawa" 
                  className="w-full h-full object-cover opacity-90 hover:scale-105 transition-transform duration-500"
                  onError={(e) => {e.target.style.display='none'; e.target.parentElement.innerHTML = '<div class="w-full h-full bg-gray-800 flex items-center justify-center text-gray-500">Bild fehlt</div>'}}
                />
              </div>

              <div className="absolute top-0 right-0 p-3 bg-gray-900 rounded-full border border-sky-500/50 shadow-[0_0_15px_rgba(14,165,233,0.3)] animate-float-slow">
                <span className="text-sky-500 font-bold">Python</span>
              </div>
              <div className="absolute bottom-10 left-[-20px] p-3 bg-gray-900 rounded-full border border-blue-500/50 shadow-[0_0_15px_rgba(59,130,246,0.3)] animate-float-delayed">
                <span className="text-blue-500 font-bold">SQL</span>
              </div>
              <div className="absolute bottom-0 right-10 p-3 bg-gray-900 rounded-full border border-cyan-500/50 shadow-[0_0_15px_rgba(6,182,212,0.3)] animate-float">
                <span className="text-cyan-500 font-bold">Dev</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Über Mich Section */}
      <section id="über-mich" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex flex-col items-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Über Mich</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative flex justify-center order-2 md:order-1">
             <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-2 border-cyan-500/30 shadow-[0_0_50px_rgba(6,182,212,0.2)]">
                <img 
                  src="/assets/images/marcel-desk.png" 
                  alt="Profile" 
                  className="w-full h-full object-cover"
                  onError={(e) => {e.target.style.display='none'; e.target.parentElement.innerHTML = '<div class="w-full h-full bg-gray-800 flex items-center justify-center text-gray-500">Bild fehlt</div>'}}
                />
             </div>
          </div>

          <div className="space-y-8 order-1 md:order-2">
            <div>
              <h3 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500 mb-4">
                Praxis trifft Code
              </h3>
              <p className="text-gray-300 leading-relaxed text-lg mb-6">
                Mein Weg in die IT ist geprägt durch praktische Erfahrung in der Industrie. Als Maschinen- und Anlagenführer sowie Qualitätsprüfer habe ich gelernt, wie wichtig präzise Prozesse sind. Ein Wissen, das ich nun in die Softwareentwicklung einbringe.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex flex-col items-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Meine Skills</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            {skills.left.map((skill) => (
              <div key={skill.name} className="flex items-center justify-between group">
                <div className="flex items-center gap-4">
                  <div className={`p-2 rounded-lg bg-gray-800 border border-gray-700 ${skill.color}`}>
                    <div className="font-bold text-sm w-6 h-6 flex items-center justify-center border-2 border-current rounded-full">
                       {skill.name[0]}
                    </div>
                  </div>
                  <span className="text-lg font-medium text-gray-300 group-hover:text-white transition-colors">{skill.name}</span>
                </div>
                <SkillDots level={skill.level} bgColor={skill.bgColor} />
              </div>
            ))}
          </div>

          <div className="space-y-8">
            {skills.right.map((skill) => (
              <div key={skill.name} className="flex items-center justify-between group">
                <div className="flex items-center gap-4">
                  <div className={`p-2 rounded-lg bg-gray-800 border border-gray-700 ${skill.color}`}>
                     <div className="font-bold text-sm w-6 h-6 flex items-center justify-center border-2 border-current rounded-full">
                       {skill.name[0]}
                    </div>
                  </div>
                  <span className="text-lg font-medium text-gray-300 group-hover:text-white transition-colors">{skill.name}</span>
                </div>
                <SkillDots level={skill.level} bgColor={skill.bgColor} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projekte Section */}
      <section id="projekte" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex flex-col items-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-8">Meine Projekte</h2>
          
          <div className="bg-gray-800/50 p-1 rounded-full border border-white/10 flex relative">
            <button onClick={() => setActiveProjectType('app')} className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${activeProjectType === 'app' ? 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-lg' : 'text-gray-400 hover:text-white'}`}>
              Anwendungsentwicklung
            </button>
            <button onClick={() => setActiveProjectType('website')} className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${activeProjectType === 'website' ? 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-lg' : 'text-gray-400 hover:text-white'}`}>
              Webseiten
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.filter(project => project.type === activeProjectType).map((project) => (
            <div key={project.id} className="group bg-[#121212] rounded-2xl overflow-hidden border border-white/5 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(6,182,212,0.15)] flex flex-col h-full">
              <div className="relative h-48 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-[#121212] to-transparent opacity-60 z-10" />
                <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              </div>
              
              <div className="p-6 flex-1 flex flex-col">
                <div className="flex gap-2 mb-3">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-xs px-2 py-1 rounded bg-white/5 text-cyan-300 border border-white/5">{tag}</span>
                  ))}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-gray-400 text-sm mb-6 flex-1 line-clamp-4">{project.description}</p>
                
                <div className="flex gap-4 mt-auto">
                  <a href="#!" className="flex-1 flex items-center justify-center gap-2 py-2 rounded-full border border-cyan-500/30 text-cyan-400 hover:bg-cyan-500/10 transition-colors text-sm font-medium">
                    <Github size={16} /> Code
                  </a>
                  <a href="#!" className="flex-1 flex items-center justify-center gap-2 py-2 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white hover:opacity-90 transition-opacity text-sm font-medium">
                    Demo <PlayCircle size={16} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Kontakt Section */}
      <section id="kontakt" className="py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="flex flex-col items-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Kontakt</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full"></div>
        </div>

        <div className="bg-[#121212] border border-white/5 rounded-3xl p-8 md:p-12 shadow-[0_0_50px_rgba(0,0,0,0.5)] relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-600/10 rounded-full blur-[80px]"></div>
          
          <div className="grid md:grid-cols-2 gap-12 relative z-10">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-white">Lass uns connecten!</h3>
              <p className="text-gray-400">Ich bin offen für neue Möglichkeiten im Bereich Anwendungsentwicklung und freue mich auf deine Nachricht.</p>
              
              <div className="space-y-4 mt-8">
                <div className="flex items-center gap-4 text-gray-300">
                  <div className="p-2 bg-blue-900/30 rounded-lg text-cyan-400"><Mail size={20} /></div>
                  <span>{personalInfo.email}</span>
                </div>
                <div className="flex items-center gap-4 text-gray-300">
                   <div className="p-2 bg-blue-900/30 rounded-lg text-cyan-400"><Phone size={20} /></div>
                  <span>{personalInfo.phone}</span>
                </div>
                 <div className="flex items-center gap-4 text-gray-300">
                   <div className="p-2 bg-blue-900/30 rounded-lg text-cyan-400"><MapPin size={20} /></div>
                  <span>{personalInfo.location}</span>
                </div>
              </div>
            </div>

            <form onSubmit={handleContactSubmit} className="space-y-4">
              {/* Added Labels for Accessibility */}
              <div>
                <label htmlFor="name" className="sr-only">Dein Name</label>
                <input id="name" type="text" required className="w-full bg-[#0a0a0a] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all placeholder-gray-600" placeholder="Dein Name" />
              </div>
              <div>
                <label htmlFor="email" className="sr-only">Email Adresse</label>
                <input id="email" type="email" required className="w-full bg-[#0a0a0a] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all placeholder-gray-600" placeholder="Email Adresse" />
              </div>
              <div>
                <label htmlFor="message" className="sr-only">Deine Nachricht</label>
                <textarea id="message" rows="4" required className="w-full bg-[#0a0a0a] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all placeholder-gray-600 resize-none" placeholder="Deine Nachricht..."></textarea>
              </div>
              <button type="submit" className="w-full px-8 py-3 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-xl text-white font-medium hover:shadow-[0_0_20px_rgba(6,182,212,0.5)] transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2">
                Senden <Send size={18} />
              </button>
            </form>
          </div>
        </div>
      </section>

      <footer className="py-8 text-center text-gray-500 text-sm border-t border-white/5 bg-[#0a0a0a]">
        <div className="flex items-center justify-center gap-2 mb-2">
           <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">Portfolio&lt;/&gt;</span>
        </div>
        <p>© {new Date().getFullYear()} Marcel Kawa. Alle Rechte vorbehalten.</p>
      </footer>
    </div>
  );
}

export default App;