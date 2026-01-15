
import React from 'react';
import { CheckCircle, Users, Briefcase, Award, Shield, Target } from 'lucide-react';
import Footer from './Footer';

const MengenaiKami: React.FC = () => (
  <div className="space-y-12 animate-fade-in-up">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      <div className="space-y-6">
        <h2 className="text-4xl font-bold text-slate-900 font-heading">MENGENAI KAMI</h2>
        <div className="space-y-4 text-slate-700 font-body text-lg leading-relaxed">
          <p className="italic text-primary font-semibold">“Semuanya untuk Asnaf”</p>
          <p>Yayasan Infaq Malaysia (YIM) diasaskan sebagai sebuah NGO yang khusus memartabatkan golongan Asnaf di Malaysia dan antarabangsa.</p>
          <p>YIM adalah sebuah madah yang segar dan sesuai dengan permintaan masyarakat bagi mengkoordinasi dan membantu golongan Asnaf yang berkeperluan.</p>
          <p>Kami beriltizam menjadi pelopor dalam sektor pendidikan, membawakan kepakaran bertaraf dunia kepada pelajar di Malaysia, selari dengan visi Kementerian Pendidikan Negara: ”Pendidikan Berkualiti, Insan Terdidik, Negara Sejahtera”.</p>
        </div>
      </div>
      <div className="rounded-3xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-500">
        <img src="https://images.unsplash.com/photo-1593113598332-cd288d649433?q=80&w=2070&auto=format&fit=crop" alt="Yayasan Team working with community" className="w-full h-full object-cover" />
      </div>
    </div>

    <div className="space-y-8 pt-8">
        <h3 className="text-3xl font-bold text-center text-slate-800 font-heading">Prinsip & Program Teras</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-3xl shadow-lg border border-slate-100 hover:shadow-xl transition-shadow">
                <h4 className="font-bold text-2xl text-primary font-heading mb-4">Dasar Kami</h4>
                <ul className="space-y-3">
                    {["Integriti", "Komprehensif", "Kualiti", "Glokal", "Praktikal"].map(item => (
                        <li key={item} className="flex items-center gap-3 text-lg font-medium text-slate-600">
                            <CheckCircle className="w-6 h-6 text-secondary" />
                            <span>{item}</span>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-lg border border-slate-100 hover:shadow-xl transition-shadow">
                <h4 className="font-bold text-2xl text-primary font-heading mb-4">Program Utama Kami</h4>
                 <ul className="space-y-3">
                    {["Kompleks Wakaf", "Pendidikan", "Akikah & Qurban", "Katering"].map(item => (
                        <li key={item} className="flex items-center gap-3 text-lg font-medium text-slate-600">
                            <CheckCircle className="w-6 h-6 text-secondary" />
                            <span>{item}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    </div>

  </div>
);

const VisiMisi: React.FC = () => (
    <div className="space-y-12 animate-fade-in-up">
        <h2 className="text-4xl font-bold text-slate-900 font-heading text-center">VISI, MISI & OBJEKTIF</h2>
        
        <div className="bg-accent/50 p-10 rounded-3xl shadow-inner-lg">
          <h3 className="font-bold text-3xl text-primary font-heading mb-4 text-center">Visi</h3>
          <p className="text-xl text-center text-slate-700 leading-relaxed italic">Menjadi penyelaras pendidikan dan kebajikan yang terkemuka sebagai NGO untuk Malaysia dan dunia.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="space-y-6">
              <h3 className="font-bold text-3xl text-primary font-heading">Misi Kami</h3>
              <ul className="space-y-4">
                  {[ "Menyalurkan bantuan umum kepada Asnaf kanak-kanak.",
                      "Menawarkan solusi praktikal dan berimpak besar.",
                      "Mengkoordinasikan sumber sedia ada secara efisien.",
                      "Melahirkan masyarakat yang saling bantu-membantu."
                  ].map((item, index) => (
                    <li key={index} className="p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow flex items-start gap-4">
                        <Target className="w-8 h-8 text-secondary shrink-0 mt-1" />
                        <span className="text-slate-600 font-medium">{item}</span>
                    </li>
                  ))}
              </ul>
          </div>

          <div className="space-y-6">
              <h3 className="font-bold text-3xl text-primary font-heading">Objektif Kami</h3>
              <ul className="space-y-4">
                  {[ { text: "Menyediakan Pendidikan Berkualiti", icon: <Award className="w-8 h-8 text-secondary shrink-0 mt-1" /> },
                    { text: "Membangunkan Program Kebajikan Berimpak Tinggi", icon: <Briefcase className="w-8 h-8 text-secondary shrink-0 mt-1" /> },
                    { text: "Menyediakan Bantuan Kecemasan dan Pemulihan", icon: <Shield className="w-8 h-8 text-secondary shrink-0 mt-1" /> },
                    { text: "Mengukuhkan Kerjasama Strategik", icon: <Users className="w-8 h-8 text-secondary shrink-0 mt-1" /> },
                  ].map((item, index) => (
                    <li key={index} className="p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow flex items-start gap-4">
                        {item.icon}
                        <span className="text-slate-600 font-medium">{item.text}</span>
                    </li>
                  ))}
              </ul>
          </div>
        </div>
    </div>
);

const LembagaAmanah: React.FC = () => (
    <div className="space-y-12 animate-fade-in-up">
        <h2 className="text-4xl font-bold text-slate-900 font-heading text-center">LEMBAGA AMANAH</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white rounded-3xl shadow-2xl p-8 text-center transform hover:-translate-y-2 transition-transform duration-500">
                <img src="https://images.unsplash.com/photo-1557862921-37829c790f19?q=80&w=2072&auto=format&fit=crop" alt="Prof Dr Azmuddin Ibrahim" className="w-32 h-32 rounded-full mx-auto mb-6 ring-4 ring-primary p-1" />
                <h3 className="font-bold text-2xl text-slate-800 font-heading">Prof Dr Azmuddin Ibrahim</h3>
                <p className="font-semibold text-primary mb-4">Pengerusi, Yayasan Infaq Malaysia</p>
                <p className="text-slate-600 italic leading-relaxed">“Alhamdulillah, YIM terus komited menyalurkan program berimpak tinggi kepada seluruh warga Asnaf. Sokongan dari semua pihak amat kami hargai.”</p>
            </div>
            <div className="bg-white rounded-3xl shadow-2xl p-8 text-center transform hover:-translate-y-2 transition-transform duration-500">
                <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop" alt="Dato‘ Aminuddin Hj. Che Hassan" className="w-32 h-32 rounded-full mx-auto mb-6 ring-4 ring-primary p-1" />
                <h3 className="font-bold text-2xl text-slate-800 font-heading">Dato‘ Aminuddin Hj. Che Hassan</h3>
                <p className="font-semibold text-primary mb-4">Ahli Lembaga Amanah</p>
                <p className="text-slate-600 italic leading-relaxed">“Saya yakin YIM adalah wadah segar yang mampu menerajui sektor pendidikan, selari dengan visi Kementerian Pendidikan Negara.”</p>
            </div>
        </div>
    </div>
);

type SubMenu = "mengenai-kami" | "visi-misi" | "lembaga-amanah";

interface KenaliKamiPageProps {
  activeSubMenu: SubMenu;
  setActiveSubMenu: (subMenu: SubMenu) => void;
}

const KenaliKamiPage: React.FC<KenaliKamiPageProps> = ({ activeSubMenu, setActiveSubMenu }) => {
  const renderContent = () => {
    switch (activeSubMenu) {
      case "mengenai-kami":
        return <MengenaiKami />;
      case "visi-misi":
        return <VisiMisi />;
      case "lembaga-amanah":
        return <LembagaAmanah />;
      default:
        return <MengenaiKami />;
    }
  };

  return (
      <>
        <section className="py-32 bg-slate-50/70">
        <div className="container mx-auto px-6">
            <div className="lg:flex lg:gap-16">
            <aside className="lg:w-1/4 mb-12 lg:mb-0 lg:sticky lg:top-32 self-start">
                <div className="bg-white p-6 rounded-2xl shadow-lg">
                <h3 className="text-2xl font-bold text-primary mb-6 font-heading">Kenali Kami</h3>
                <ul className="space-y-3">
                    <li>
                    <button 
                        onClick={() => setActiveSubMenu("mengenai-kami")}
                        className={`w-full text-left font-bold text-lg p-4 rounded-lg transition-all transform hover:scale-105 ${activeSubMenu === 'mengenai-kami' ? 'bg-primary text-white shadow-md' : 'text-slate-600 hover:bg-accent/70'}`}
                    >
                        Mengenai Kami
                    </button>
                    </li>
                    <li>
                    <button 
                        onClick={() => setActiveSubMenu("visi-misi")}
                        className={`w-full text-left font-bold text-lg p-4 rounded-lg transition-all transform hover:scale-105 ${activeSubMenu === 'visi-misi' ? 'bg-primary text-white shadow-md' : 'text-slate-600 hover:bg-accent/70'}`}
                    >
                        Visi Misi
                    </button>
                    </li>
                    <li>
                    <button 
                        onClick={() => setActiveSubMenu("lembaga-amanah")}
                        className={`w-full text-left font-bold text-lg p-4 rounded-lg transition-all transform hover:scale-105 ${activeSubMenu === 'lembaga-amanah' ? 'bg-primary text-white shadow-md' : 'text-slate-600 hover:bg-accent/70'}`}
                    >
                        Lembaga Amanah
                    </button>
                    </li>
                </ul>
                </div>
            </aside>
            <main className="lg:w-3/4 bg-white p-10 rounded-3xl shadow-xl">
                {renderContent()}
            </main>
            </div>
        </div>
        </section>
        <Footer />
    </>
  );
};

export default KenaliKamiPage;
