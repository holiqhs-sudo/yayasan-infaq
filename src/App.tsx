import React, { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { 
  Heart, 
  GraduationCap, 
  HandHeart, 
  Globe, 
  Users, 
  MapPin, 
  Wallet, 
  Menu, 
  X, 
  Play,
  Pause,
  ArrowRight,
  ChevronRight,
  MessageSquare
} from 'lucide-react';

// Import komponen internal (Pastikan path ini benar di proyek Anda)
import KenaliKamiPage from './pages/KenaliKami';
import ProgramUtama from './pages/ProgramUtama';
import KerjaKami from './pages/KerjaKami';
import SertaiKami from './pages/SertaiKami';
import HubungiKami from './pages/HubungiKami';
import Footer from './components/Footer';
import BlogList from './components/BlogList'; 

// --- Types ---
interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  onClick?: () => void;
}

interface StatProps {
  icon: React.ReactNode;
  value: string;
  label: string;
  suffix?: string;
}

interface ProgramProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

// --- Constants ---
const LOGO_URL = "/assets/logo-yayasan-infaq-malaysia.png";

const VIDEO_GALLERY = [
  {
    id: 0,
    title: "Misi Agihan Tanzania",
    src: "/assets/Agihan-Tanzania-Yayasan-Infaq-Maysia.mp4",
    thumbnail: "/assets/thumb-video1.png"
  },
  {
    id: 1,
    title: "Testimoni Tahfidz Yayasan Infaq Malaysia",
    src: "/assets/Testimoni-Tahfidz-Yayasan-Infaq-Malaysia.mp4", 
    thumbnail: "/assets/thumb-video2.png"
  },
  {
    id: 2,
    title: "Iftar Yayasan Infaq Malaysia",
    src: "/assets/Iftar-Yayasan-Infaq-Malaysia.mp4",
    thumbnail: "/assets/thumb-video3.png"
  }
];

// --- Sub-Components ---

const NavLink: React.FC<NavLinkProps> = ({ href, children, onClick }) => (
  <a 
    href={href} 
    onClick={(e) => {
      e.preventDefault();
      if (onClick) onClick();
    }}
    className="text-slate-700 hover:text-primary font-bold transition-all font-body text-sm uppercase tracking-wide cursor-pointer"
  >
    {children}
  </a>
);

const StatCard: React.FC<StatProps> = ({ icon, value, label, suffix }) => (
  <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
    <div className="w-14 h-14 bg-accent rounded-2xl flex items-center justify-center text-primary mb-6 shadow-sm">
      {React.cloneElement(icon as React.ReactElement, { size: 28 })}
    </div>
    <div className="flex items-baseline gap-1">
      {suffix && <span className="text-xl font-black text-primary font-body">{suffix}</span>}
      <span className="text-3xl lg:text-4xl font-extrabold text-slate-900 font-body tracking-tight">{value}</span>
    </div>
    <p className="text-slate-500 font-bold uppercase tracking-widest text-[10px] mt-2 font-body">{label}</p>
  </div>
);

const ProgramCard: React.FC<ProgramProps> = ({ icon, title, description }) => (
  <div className="group p-10 bg-white border-2 border-slate-50 rounded-[2.5rem] hover:border-secondary/30 hover:shadow-[0_20px_50px_rgba(0,107,65,0.1)] transition-all duration-500">
    <div className="w-16 h-16 bg-accent rounded-3xl flex items-center justify-center text-secondary mb-8 group-hover:scale-110 transition-transform duration-500 shadow-inner">
      {React.cloneElement(icon as React.ReactElement, { size: 32 })}
    </div>
    <h3 className="text-3xl font-bold text-slate-900 mb-4 font-heading leading-tight">{title}</h3>
    <p className="text-slate-600 leading-relaxed mb-8 font-body text-base lg:text-lg">{description}</p>
  </div>
);

const Navbar: React.FC<{ setPage: (page: string) => void }> = ({ setPage }) => {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (page: string) => {
    setPage(page);
    setIsOpen(false);
  };

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === 'ms' ? 'en' : 'ms');
  };

  const navPages = [
    { key: 'home', label: t('navbar.home') },
    { key: 'kenali-kami', label: t('navbar.kenaliKami') },
    { key: 'program-utama', label: t('navbar.programUtama') },
    { key: 'kerja-kami', label: t('navbar.kerjaKami') },
    { key: 'sertai-kami', label: t('navbar.sertaiKami') },
    { key: 'hubungi-kami', label: t('navbar.hubungiKami') },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'bg-white/80 backdrop-blur-md py-3 shadow-md' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center">
          <a href="#" onClick={() => handleNavClick('home')} className="block h-10 lg:h-14">
            <img src={LOGO_URL} alt="Logo" className="h-full w-auto" />
          </a>
        </div>
        
        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-8">
          {navPages.map((p) => (
            <NavLink key={p.key} href="#" onClick={() => setPage(p.key)}>{p.label}</NavLink>
          ))}
        </div>
        
        {/* Desktop: Language Toggle + CTA */}
        <div className="hidden lg:flex items-center gap-3">
          <button
            onClick={toggleLanguage}
            className="flex items-center gap-2 border-2 border-primary text-primary px-4 py-2 rounded-2xl font-bold text-sm hover:bg-accent transition-all"
          >
            {i18n.language === 'ms' ? '🇬🇧 EN' : '🇲🇾 BM'}
          </button>
          <a href="https://www.billplz.com/infaqfoundation" target="_blank">
            <button className="bg-primary text-white px-8 py-3 rounded-2xl font-extrabold hover:bg-secondary transition-all text-sm uppercase">
              {t('navbar.infaqSekarang')}
            </button>
        </a>
        </div>
        
        {/* Hamburger Button */}
        <button className="lg:hidden text-primary" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <div 
        className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="container mx-auto px-6 py-6 bg-white/95 backdrop-blur-md mt-2 rounded-3xl shadow-xl">
          <div className="flex flex-col gap-4">
            {navPages.map((p) => (
              <a
                key={p.key}
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(p.key);
                }}
                className="text-slate-700 hover:text-primary hover:bg-accent/30 font-bold transition-all font-body text-sm uppercase tracking-wide cursor-pointer px-4 py-3 rounded-xl"
              >
                {p.label}
              </a>
            ))}
            {/* Mobile: Language Toggle */}
            <button
              onClick={toggleLanguage}
              className="border-2 border-primary text-primary px-8 py-3 rounded-2xl font-bold text-sm hover:bg-accent transition-all"
            >
              {i18n.language === 'ms' ? '🇬🇧 Switch to English' : '🇲🇾 Tukar ke BM'}
            </button>
            <a href="https://www.billplz.com/infaqfoundation" target="_blank">
              <button className="bg-primary text-white px-8 py-3 rounded-2xl font-extrabold hover:bg-secondary transition-all text-sm uppercase mt-2">
                {t('navbar.infaqSekarang')}
              </button>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

// --- Main Pages ---

const HomePage: React.FC<{ setPage: (page: string) => void }> = ({ setPage }) => {
  const { t } = useTranslation();
  const [activeVideoIdx, setActiveVideoIdx] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleVideoChange = (index: number) => {
    setActiveVideoIdx(index);
    setIsPlaying(false);
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.load();
    }
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-36 pb-20 lg:pt-52 lg:pb-36 overflow-hidden">
        <div className="absolute top-0 right-0 -z-10 w-2/5 h-full bg-accent rounded-l-[200px] opacity-40" />
        <div className="absolute top-1/4 -left-20 -z-10 w-96 h-96 bg-secondary/10 blur-[120px] rounded-full" />
        
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
            <div className="flex-1 text-center lg:text-left">
              <span className="inline-block bg-accent text-primary px-6 py-2 rounded-full text-[10px] font-black tracking-[0.3em] mb-8 font-body border border-primary/10 uppercase">
                {t('hero.badge')}
              </span>
              <h1 className="text-4xl lg:text-6xl font-bold text-slate-900 leading-[1.2] mb-8 font-heading">
                {t('hero.title')} <span className="text-primary assertive-line">{t('hero.titleHighlight')}</span>
              </h1>
              <p className="text-lg lg:text-xl text-slate-600 mb-10 max-w-2xl lg:mx-0 mx-auto leading-relaxed font-body font-medium">
                {t('hero.description')}
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-5">
                
                <a href="https://www.billplz.com/infaqfoundation" target="_blank">
                  <button className="bg-primary text-white px-10 py-5 rounded-2xl font-black text-base hover:bg-secondary transition-all shadow-2xl flex items-center gap-3 font-body uppercase tracking-wider">
                    <Wallet size={20} /> {t('hero.btnInfaq')}
                  </button>
                </a>
               
              </div>
            </div>

            <div className="flex-1 relative">
              <div className="w-full max-w-md lg:max-w-none mx-auto">
                <img 
                  src="/assets/hero-infaq-foundation-2025.jpeg" 
                  alt="Helping children" 
                  className="rounded-[3rem] shadow-[0_40px_100px_rgba(0,0,0,0.15)] relative z-10 rotate-0 hover:rotate-2 transition-transform duration-500"
                />
                <div className="absolute -bottom-6 -left-6 z-20 bg-white p-6 rounded-[2.5rem] shadow-xl border border-slate-50 flex items-center gap-4 animate-bounce" style={{ animationDuration: '4s' }}>
                  <div className="w-12 h-12 bg-primary rounded-2xl flex items-center justify-center text-white shadow-lg">
                    <Heart size={24} fill="currentColor" />
                  </div>
                  <div>
                    <p className="text-2xl font-black text-slate-900 leading-none font-body">98%</p>
                    <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest font-body mt-1">{t('hero.statLabel')}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-6">
          <h2 className="text-center text-3xl font-bold text-slate-900 mb-12 font-heading">{t('stats.title')}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <StatCard icon={<Heart />} value="1,200" suffix="+" label={t('stats.penerima')} />
            <StatCard icon={<MapPin />} value="500" suffix="+" label={t('stats.penerima')} />
            <StatCard icon={<Globe />} value="8" label={t('stats.negara')} />
            <StatCard icon={<Users />} value="50" suffix="+" label={t('stats.sukarelawan')} />
          </div>
        </div>
      </section>

      {/* Program Utama */}
      <section id="program" className="py-28 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-end justify-between mb-20 gap-10">
            <div className="max-w-2xl text-center lg:text-left">
              <span className="text-secondary font-black tracking-[0.3em] uppercase text-xs mb-4 block font-body">{t('program.eyebrow')}</span>
              <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 leading-tight font-heading">{t('program.title')}</h2>
            </div>
            <p className="text-slate-500 font-bold max-w-md font-body text-base lg:text-lg leading-relaxed border-l-4 border-primary/20 pl-8">
              {t('program.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <ProgramCard 
              icon={<GraduationCap size={32} />}
              title={t('program.pendidikan.title')}
              description={t('program.pendidikan.description')}
            />
            <ProgramCard 
              icon={<HandHeart size={32} />}
              title={t('program.kebajikan.title')}
              description={t('program.kebajikan.description')}
            />
            <ProgramCard 
              icon={<Wallet size={32} />}
              title={t('program.dana.title')}
              description={t('program.dana.description')}
            />
          </div>
        </div>
      </section>

      {/* Video Gallery Section */}
      <section className="py-28 bg-slate-900 text-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold font-heading mb-4">{t('video.title')}</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">{t('video.subtitle')}</p>
          </div>

          <div className="flex flex-col lg:flex-row gap-12 items-start">
            {/* Player Utama */}
            <div className="flex-[2] w-full">
              <div className="relative aspect-video rounded-[2.5rem] overflow-hidden bg-black shadow-2xl group">
                <video 
                  ref={videoRef}
                  className="w-full h-full object-cover cursor-pointer"
                  src={VIDEO_GALLERY[activeVideoIdx].src}
                  onEnded={() => setIsPlaying(false)}
                  onClick={togglePlay}
                />
                
                {!isPlaying && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black/40 transition-opacity">
                    <button 
                      onClick={togglePlay}
                      className="w-24 h-24 bg-primary text-white rounded-full flex items-center justify-center hover:scale-110 transition-transform shadow-3xl"
                    >
                      <Play size={40} fill="currentColor" />
                    </button>
                  </div>
                )}

                <div className="absolute bottom-6 left-8 bg-black/60 backdrop-blur-md px-6 py-2 rounded-full border border-white/10">
                  <p className="text-sm font-bold text-primary uppercase tracking-widest">{t('video.nowPlaying')} <span className="text-white ml-2">{VIDEO_GALLERY[activeVideoIdx].title}</span></p>
                </div>
              </div>
            </div>

            {/* Playlist */}
            <div className="flex-1 w-full flex flex-col gap-4">
              <h3 className="text-xl font-bold mb-2 flex items-center gap-2">
                <ChevronRight className="text-primary" /> {t('video.otherVideos')}
              </h3>
              {VIDEO_GALLERY.map((vid, index) => (
                <button 
                  key={vid.id}
                  onClick={() => handleVideoChange(index)}
                  className={`flex items-center gap-4 p-4 rounded-3xl transition-all text-left border-2 ${
                    activeVideoIdx === index 
                    ? 'bg-primary/10 border-primary shadow-[0_0_20px_rgba(0,107,65,0.2)]' 
                    : 'bg-slate-800/50 border-transparent hover:bg-slate-800'
                  }`}
                >
                  <div className="w-24 h-16 rounded-xl overflow-hidden flex-shrink-0 relative">
                    <img src={vid.thumbnail} alt={vid.title} className="w-full h-full object-cover opacity-60" />
                    {activeVideoIdx === index && isPlaying && (
                      <div className="absolute inset-0 flex items-center justify-center bg-primary/40">
                        <Pause size={20} fill="white" />
                      </div>
                    )}
                  </div>
                  <div>
                    <h4 className={`font-bold leading-tight ${activeVideoIdx === index ? 'text-primary' : 'text-white'}`}>
                      {vid.title}
                    </h4>
                    <p className="text-xs text-slate-500 mt-1 uppercase tracking-tighter">{t('video.org')}</p>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="sertai" className="py-28">
        <div className="container mx-auto px-6">
          <div className="bg-primary rounded-[3rem] p-12 lg:p-24 text-center relative overflow-hidden shadow-3xl">
            <img src="/assets/moslem-happy-mother-and-son.png" alt="Happy mother and son" className="absolute bottom-0 right-0 w-1/4" />
            <div className="relative z-10 max-w-4xl mx-auto">
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-8 leading-tight font-heading">
                {t('cta.title')}
              </h2>
              <p className="text-accent/90 text-xl lg:text-2xl mb-12 font-heading font-medium italic">
                {t('cta.quote')}
              </p>
              <a href="https://www.billplz.com/infaqfoundation" target="_blank">
                <button className="bg-white text-primary px-12 py-5 rounded-2xl font-black text-xl hover:bg-accent hover:scale-105 transition-all shadow-2xl flex items-center gap-4 mx-auto font-body uppercase tracking-widest animate-bounce">
                  <Wallet size={24} /> {t('cta.btn')}
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-28 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-secondary font-black tracking-[0.3em] uppercase text-xs mb-4 block font-body">
              {t('blog.eyebrow')}
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 leading-tight font-heading">
              {t('blog.title')}
            </h2>
          </div>
          <BlogList />
        </div>
      </section>

      <Footer setPage={setPage} />
    </>
  );
};

export default function App() {
  const [page, setPage] = useState('home');
  const [activeSubMenu, setActiveSubMenu] = useState('mengenai-kami');

  return (
    <div className="relative min-h-screen selection:bg-primary selection:text-white bg-slate-50">
      <Navbar setPage={setPage} />
      
      <main>
        {page === 'home' && <HomePage setPage={setPage} />}
        {page === 'kenali-kami' && <KenaliKamiPage activeSubMenu={activeSubMenu} setActiveSubMenu={setActiveSubMenu} setPage={setPage} />}
        {page === 'program-utama' && <ProgramUtama setPage={setPage} />}
        {page === 'kerja-kami' && <KerjaKami setPage={setPage} />}
        {page === 'sertai-kami' && <SertaiKami setPage={setPage} />}
        {page === 'hubungi-kami' && <HubungiKami setPage={setPage} />}
      </main>

      {/* Floating WA Button */}
      <div className="fixed bottom-10 right-10 z-50">
        <a 
          href="https://wa.me/60174277751" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="w-16 h-16 bg-[#25D366] text-white rounded-full shadow-2xl flex items-center justify-center hover:scale-110 hover:rotate-12 transition-all group"
        >
          <MessageSquare size={30} />
          <span className="absolute right-full mr-4 bg-white text-slate-900 px-4 py-2 rounded-xl text-sm font-bold shadow-xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
            Hubungi Kami
          </span>
        </a>
      </div>
    </div>
  );
}
