
import React, { useState, useEffect } from 'react';
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
  ArrowRight,
  ChevronRight,
  Mail,
  Phone,
  MessageSquare,
  Facebook,
  Instagram,
  Youtube
} from 'lucide-react';
import KenaliKamiPage from './KenaliKami';
import ProgramUtama from './ProgramUtama';
import KerjaKami from './KerjaKami';
import SertaiKami from './SertaiKami';
import HubungiKami from './HubungiKami';
import Footer from './Footer';

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

// --- Logo Constant ---
const LOGO_URL = "dist/assets/logo-yayasan-infaq-malaysia.png";

// --- Components ---

const NavLink: React.FC<NavLinkProps> = ({ href, children, onClick }) => (
  <a 
    href={href} 
    onClick={onClick}
    className="text-slate-700 hover:text-primary font-bold transition-all font-body text-sm uppercase tracking-wide"
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
    <p className="text-slate-600 leading-relaxed mb-8 font-body text-base lg:text-lg">
      {description}
    </p>
    <button className="flex items-center gap-3 text-primary font-extrabold hover:gap-5 transition-all font-body text-sm lg:text-base uppercase tracking-wider">
      Ketahui Lebih Lanjut <ArrowRight size={20} />
    </button>
  </div>
);

const Navbar: React.FC<{ setPage: (page: string) => void }> = ({ setPage }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'glass-nav py-3 shadow-md' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center">
           <a href="#" onClick={() => setPage('home')} className="block h-10 lg:h-14 transition-transform hover:scale-105">
            <img 
              src={LOGO_URL} 
              alt="Yayasan Infaq Malaysia Logo" 
              className="h-full w-auto object-contain"
            />
          </a>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-10">
          <NavLink href="#" onClick={() => setPage('home')}>Homepage</NavLink>
          <NavLink href="#" onClick={() => setPage('kenali-kami')}>Kenali Kami</NavLink>
          <NavLink href="#" onClick={() => setPage('program-utama')}>Program Utama</NavLink>
          <NavLink href="#" onClick={() => setPage('kerja-kami')}>Kerja Kami</NavLink>
          <NavLink href="#" onClick={() => setPage('sertai-kami')}>Sertai Kami</NavLink>
          <NavLink href="#" onClick={() => setPage('hubungi-kami')}>Hubungi Kami</NavLink>
        </div>

        <div className="hidden lg:flex items-center gap-4">
          <button className="bg-primary text-white px-8 py-3 rounded-2xl font-extrabold hover:bg-secondary hover:shadow-[0_10px_30px_rgba(0,107,65,0.3)] transition-all active:scale-95 font-body text-sm uppercase tracking-wider">
            Infaq Sekarang
          </button>
        </div>

        {/* Mobile Toggle */}
        <button className="lg:hidden text-primary p-2" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-white shadow-2xl border-t border-slate-100 py-10 px-8 flex flex-col gap-8 animate-in slide-in-from-top duration-500">
          <NavLink href="#" onClick={() => { setPage('home'); setIsOpen(false); }}>Homepage</NavLink>
          <NavLink href="#" onClick={() => { setPage('kenali-kami'); setIsOpen(false); }}>Kenali Kami</NavLink>
          <NavLink href="#" onClick={() => { setPage('program-utama'); setIsOpen(false); }}>Program Utama</NavLink>
          <NavLink href="#" onClick={() => { setPage('kerja-kami'); setIsOpen(false); }}>Kerja Kami</NavLink>
          <NavLink href="#" onClick={() => { setPage('sertai-kami'); setIsOpen(false); }}>Sertai Kami</NavLink>
          <NavLink href="#" onClick={() => { setPage('hubungi-kami'); setIsOpen(false); }}>Hubungi Kami</NavLink>
          <hr className="border-slate-100" />
          <button className="bg-primary text-white py-4 rounded-xl font-bold font-body uppercase tracking-widest">Infaq Sekarang</button>
          <button className="bg-accent text-primary py-4 rounded-xl font-bold font-body uppercase tracking-widest">Jadi Sukarelawan</button>
        </div>
      )}
    </nav>
  );
};

const HomePage: React.FC = () => (
  <>
    {/* Hero Section */}
    <section className="relative pt-36 pb-20 lg:pt-52 lg:pb-36 overflow-hidden">
      {/* Background Decorative Circles */}
      <div className="absolute top-0 right-0 -z-10 w-2/5 h-full bg-accent rounded-l-[200px] opacity-40" />
      <div className="absolute top-1/4 -left-20 -z-10 w-96 h-96 bg-secondary/10 blur-[120px] rounded-full" />
      
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          <div className="flex-1 text-center lg:text-left">
            <span className="inline-block bg-accent text-primary px-6 py-2 rounded-full text-[10px] font-black tracking-[0.3em] mb-8 font-body border border-primary/10 uppercase">
              NGO Berdaftar & Telus
            </span>
            <h1 className="text-4xl lg:text-6xl font-bold text-slate-900 leading-[1.2] mb-8 font-heading">
              Bersama Membina Harapan Melalui <span className="text-primary assertive-line">Pendidikan & Kebajikan</span>
            </h1>
            <p className="text-lg lg:text-xl text-slate-600 mb-10 max-w-2xl lg:mx-0 mx-auto leading-relaxed font-body font-medium">
              Yayasan Infaq Malaysia bertekad mentransformasi kehidupan asnaf melalui pemerkasaan pendidikan yang mampan dan bantuan kebajikan yang adil.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-5">
              <button className="w-full sm:w-auto bg-primary text-white px-10 py-4 rounded-2xl font-bold text-lg hover:bg-secondary hover:scale-105 transition-all shadow-xl shadow-primary/30 flex items-center justify-center gap-3 font-body uppercase tracking-wider">
                <Wallet size={20} /> Infaq Sekarang
              </button>
              <button className="w-full sm:w-auto bg-white border-2 border-slate-200 text-slate-800 px-10 py-4 rounded-2xl font-bold text-lg hover:border-primary hover:text-primary transition-all active:scale-95 flex items-center justify-center gap-3 font-body uppercase tracking-wider">
                Jadi Sukarelawan <ArrowRight size={20} />
              </button>
            </div>
          </div>
          <div className="flex-1 relative w-full lg:w-auto">
            <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl ring-8 ring-white/50 border-2 border-white">
              <img 
                src="dist/assets/hero-infaq-foundation-2025.jpeg" 
                alt="Asnaf Community Support" 
                className="w-full h-auto object-cover aspect-[4/5] lg:aspect-auto"
              />
            </div>
            
            {/* Floating Stat Widget */}
            <div className="absolute -bottom-6 -left-6 z-20 bg-white p-6 rounded-[2.5rem] shadow-xl border border-slate-50 flex items-center gap-4 animate-bounce" style={{ animationDuration: '4s' }}>
              <div className="w-12 h-12 bg-primary rounded-2xl flex items-center justify-center text-white shadow-lg">
                <Heart size={24} fill="currentColor" />
              </div>
              <div>
                <p className="text-2xl font-black text-slate-900 leading-none font-body">98%</p>
                <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest font-body mt-1">Dana Diagihkan</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Stats Section */}
    <section id="kenali" className="py-24 bg-accent/40 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-16 lg:mb-24">
          <h2 className="text-3xl lg:text-5xl font-bold text-slate-900 mb-8 font-heading uppercase tracking-tight">Ringkasan YIM</h2>
          <div className="relative group">
             <p className="text-xl lg:text-2xl text-slate-800 leading-relaxed font-heading italic font-medium px-4 relative z-10">
              “Yayasan Infaq Malaysia (YIM) diasaskan sebagai sebuah NGO yang khusus memartabatkan golongan Asnaf di Malaysia dan antarabangsa. Moto kami adalah <span className="text-primary font-black not-italic border-b-4 border-secondary/20">Semuanya untuk Asnaf</span>.”
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <StatCard icon={<Users />} value="2,610" label="Jumlah Penerima" />
          <StatCard icon={<Wallet />} value="207,715" suffix="RM" label="Dana Diagihkan" />
          <StatCard icon={<Globe />} value="10" label="Negara Terlibat" />
          <StatCard icon={<MapPin />} value="76" label="Lokasi Program" />
        </div>
      </div>
    </section>

    {/* Program Utama */}
    <section id="program" className="py-28 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-end justify-between mb-20 gap-10">
          <div className="max-w-2xl text-center lg:text-left">
            <span className="text-secondary font-black tracking-[0.3em] uppercase text-xs mb-4 block font-body">Visi Masa Hadapan</span>
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 leading-tight font-heading">Sorotan Program Utama</h2>
          </div>
          <p className="text-slate-500 font-bold max-w-md font-body text-base lg:text-lg leading-relaxed border-l-4 border-primary/20 pl-8">
            Strategi bantuan kami dirangka untuk memberikan impak berkekalan bagi memutus rantaian kemiskinan.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <ProgramCard 
            icon={<GraduationCap size={32} />}
            title="Pendidikan"
            description="Inisiatif pendidikan strategik bagi anak-anak asnaf untuk memastikan mereka tidak tercicir daripada sistem pendidikan nasional."
          />
          <ProgramCard 
            icon={<HandHeart size={32} />}
            title="Kebajikan"
            description="Bantuan holistik bagi keluarga miskin, warga emas, OKU, dan anak yatim untuk kelangsungan hidup yang lebih bermaruah."
          />
          <ProgramCard 
            icon={<Wallet size={32} />}
            title="Dana Khas"
            description="Tabung respons pantas bagi bantuan kecemasan, bencana alam, dan pembiayaan program asnaf bersasar."
          />
        </div>
      </div>
    </section>

    {/* Video Section */}
    <section id="kerja" className="py-28 bg-slate-900 text-white overflow-hidden relative">
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-20">
          <div className="flex-1">
            <span className="text-secondary font-black tracking-[0.3em] uppercase text-xs mb-4 block font-body">Bukti Nyata</span>
            <h2 className="text-4xl lg:text-6xl font-bold mb-8 leading-tight font-heading">Kisah Benar: Dari Asnaf Kepada Berdikari</h2>
            <p className="text-slate-300 text-lg lg:text-xl mb-10 leading-relaxed font-body font-light">
              Di sebalik setiap angka, terdapat wajah yang penuh harapan. Tonton perjalanan transformatif penerima manfaat kami.
            </p>
            <button className="flex items-center gap-4 group py-3 px-6 border border-slate-700 rounded-xl hover:bg-white hover:text-slate-900 transition-all font-body font-bold uppercase text-sm tracking-widest">
              <ChevronRight size={20} className="text-primary" />
              <span>Galeri Kisah Kejayaan</span>
            </button>
          </div>
          <div className="flex-1 w-full">
            <div className="relative aspect-video rounded-[2rem] overflow-hidden shadow-2xl group cursor-pointer ring-1 ring-white/20">
              <img 
                src="https://images.unsplash.com/photo-1542601906990-b4d3fb773b09?q=80&w=2013&auto=format&fit=crop" 
                alt="Impact Video Thumbnail" 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition-colors flex items-center justify-center">
                <div className="w-20 h-20 bg-primary text-white rounded-full flex items-center justify-center shadow-2xl transition-transform hover:scale-110">
                  <Play size={32} fill="white" className="ml-1" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* CTA Section */}
    <section id="sertai" className="py-28">
      <div className="container mx-auto px-6">
        <div className="bg-primary rounded-[3rem] p-12 lg:p-24 text-center relative overflow-hidden shadow-3xl">
          <img src="dist/assets/moslem-happy-mother-and-son.png" alt="Happy mother and son" className="absolute bottom-0 right-0 w-1/4" />
          <div className="relative z-10 max-w-4xl mx-auto">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-8 leading-tight font-heading">
              Setiap sumbangan infaq anda amatlah bermakna
            </h2>
            <p className="text-accent/90 text-xl lg:text-2xl mb-12 font-heading font-medium italic">
              “Menceriakan Hari-Hari Golongan Asnaf yang Memerlukan...”
            </p>
            <button className="bg-white text-primary px-12 py-5 rounded-2xl font-black text-xl hover:bg-accent hover:scale-105 transition-all shadow-2xl flex items-center gap-4 mx-auto font-body uppercase tracking-widest">
              <Wallet size={24} /> Infaq Sekarang
            </button>
          </div>
        </div>
      </div>
    </section>
    <Footer />
  </>
);

export default function App() {
  const [page, setPage] = useState('home');
  const [activeSubMenu, setActiveSubMenu] = useState('mengenai-kami');

  return (
    <div className="relative min-h-screen selection:bg-primary selection:text-white">
      <Navbar setPage={setPage} />
      {page === 'home' && <HomePage />}
      {page === 'kenali-kami' && 
        <KenaliKamiPage 
          activeSubMenu={activeSubMenu}
          setActiveSubMenu={setActiveSubMenu}
        />
      }
      {page === 'program-utama' && <ProgramUtama />}
      {page === 'kerja-kami' && <KerjaKami />}
      {page === 'sertai-kami' && <SertaiKami />}
      {page === 'hubungi-kami' && <HubungiKami />}

      {/* WhatsApp Widget */}
      <div className="fixed bottom-10 right-10 z-40">
        <a 
          href="https://wa.me/60199999468" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="w-16 h-16 bg-secondary text-white rounded-full shadow-2xl flex items-center justify-center hover:scale-110 active:scale-95 transition-all ring-4 ring-white group"
        >
          <MessageSquare size={28} />
        </a>
      </div>
    </div>
  );
}
