import React from 'react';
import { useTranslation } from 'react-i18next';
import { CheckCircle, Users, Briefcase, Award, Shield, Target } from 'lucide-react';
import Footer from '../components/Footer';

const MengenaiKami: React.FC = () => {
  const { t } = useTranslation();
  const dasar = t('kenaliKami.mengenai.dasar', { returnObjects: true }) as string[];
  const programList = t('kenaliKami.mengenai.programList', { returnObjects: true }) as string[];

  return (
    <div className="space-y-12 animate-fade-in-up">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h2 className="text-4xl font-bold text-slate-900 font-heading">{t('kenaliKami.mengenai.title')}</h2>
          <div className="space-y-4 text-slate-700 font-body text-lg leading-relaxed">
            <p className="italic text-primary font-semibold">{t('kenaliKami.mengenai.tagline')}</p>
            <p>{t('kenaliKami.mengenai.p1')}</p>
            <p>{t('kenaliKami.mengenai.p2')}</p>
            <p>{t('kenaliKami.mengenai.p3')}</p>
          </div>
        </div>
        <div className="rounded-3xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-500">
          <img src="/assets/Yayasan-Team-working.jpg" alt="Yayasan Team working with community" className="w-full h-full object-cover" />
        </div>
      </div>

      <div className="space-y-8 pt-8">
        <h3 className="text-3xl font-bold text-center text-slate-800 font-heading">{t('kenaliKami.mengenai.dasarTitle')}</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-3xl shadow-lg border border-slate-100 hover:shadow-xl transition-shadow">
            <h4 className="font-bold text-2xl text-primary font-heading mb-4">{t('kenaliKami.mengenai.dasarTitle')}</h4>
            <ul className="space-y-3">
              {dasar.map((item: string) => (
                <li key={item} className="flex items-center gap-3 text-lg font-medium text-slate-600">
                  <CheckCircle className="w-6 h-6 text-secondary" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-white p-8 rounded-3xl shadow-lg border border-slate-100 hover:shadow-xl transition-shadow">
            <h4 className="font-bold text-2xl text-primary font-heading mb-4">{t('kenaliKami.mengenai.programTitle')}</h4>
            <ul className="space-y-3">
              {programList.map((item: string) => (
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
};

const VisiMisi: React.FC = () => {
  const { t } = useTranslation();
  const misi = t('kenaliKami.visiMisi.misi', { returnObjects: true }) as string[];
  const objektif = t('kenaliKami.visiMisi.objektif', { returnObjects: true }) as string[];
  const objektifIcons = [
    <Award className="w-8 h-8 text-secondary shrink-0 mt-1" />,
    <Briefcase className="w-8 h-8 text-secondary shrink-0 mt-1" />,
    <Shield className="w-8 h-8 text-secondary shrink-0 mt-1" />,
    <Users className="w-8 h-8 text-secondary shrink-0 mt-1" />,
  ];

  return (
    <div className="space-y-12 animate-fade-in-up">
      <h2 className="text-4xl font-bold text-slate-900 font-heading text-center">{t('kenaliKami.visiMisi.title')}</h2>

      <div className="bg-accent/50 p-10 rounded-3xl shadow-inner-lg">
        <h3 className="font-bold text-3xl text-primary font-heading mb-4 text-center">{t('kenaliKami.visiMisi.visiTitle')}</h3>
        <p className="text-xl text-center text-slate-700 leading-relaxed italic">{t('kenaliKami.visiMisi.visiText')}</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div className="space-y-6">
          <h3 className="font-bold text-3xl text-primary font-heading">{t('kenaliKami.visiMisi.misiTitle')}</h3>
          <ul className="space-y-4">
            {misi.map((item: string, index: number) => (
              <li key={index} className="p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow flex items-start gap-4">
                <Target className="w-8 h-8 text-secondary shrink-0 mt-1" />
                <span className="text-slate-600 font-medium">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-6">
          <h3 className="font-bold text-3xl text-primary font-heading">{t('kenaliKami.visiMisi.objektifTitle')}</h3>
          <ul className="space-y-4">
            {objektif.map((item: string, index: number) => (
              <li key={index} className="p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow flex items-start gap-4">
                {objektifIcons[index]}
                <span className="text-slate-600 font-medium">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

const LembagaAmanah: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div className="space-y-12 animate-fade-in-up">
      <h2 className="text-4xl font-bold text-slate-900 font-heading text-center">{t('kenaliKami.lembaga.title')}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="bg-white rounded-3xl shadow-2xl p-8 text-center transform hover:-translate-y-2 transition-transform duration-500">
          <img src="/assets/Prof Dr Azmuddin Ibrahim.png" alt={t('kenaliKami.lembaga.ahli1Name')} className="mb-6" />
          <h3 className="font-bold text-2xl text-slate-800 font-heading">{t('kenaliKami.lembaga.ahli1Name')}</h3>
          <p className="font-semibold text-primary mb-4">{t('kenaliKami.lembaga.ahli1Role')}</p>
          <p className="text-slate-600 italic leading-relaxed">{t('kenaliKami.lembaga.ahli1Quote')}</p>
        </div>
        <div className="bg-white rounded-3xl shadow-2xl p-8 text-center transform hover:-translate-y-2 transition-transform duration-500">
          <img src="/assets/Dato Aminuddin Hj Che Hassan.png" alt={t('kenaliKami.lembaga.ahli2Name')} className="mb-6" />
          <h3 className="font-bold text-2xl text-slate-800 font-heading">{t('kenaliKami.lembaga.ahli2Name')}</h3>
          <p className="font-semibold text-primary mb-4">{t('kenaliKami.lembaga.ahli2Role')}</p>
          <p className="text-slate-600 italic leading-relaxed">{t('kenaliKami.lembaga.ahli2Quote')}</p>
        </div>
      </div>
    </div>
  );
};

type SubMenu = "mengenai-kami" | "visi-misi" | "lembaga-amanah";

interface KenaliKamiPageProps {
  activeSubMenu: SubMenu;
  setActiveSubMenu: (subMenu: SubMenu) => void;
  setPage?: (page: string) => void;
}

const KenaliKamiPage: React.FC<KenaliKamiPageProps> = ({ activeSubMenu, setActiveSubMenu, setPage }) => {
  const { t } = useTranslation();

  const renderContent = () => {
    switch (activeSubMenu) {
      case "mengenai-kami": return <MengenaiKami />;
      case "visi-misi": return <VisiMisi />;
      case "lembaga-amanah": return <LembagaAmanah />;
      default: return <MengenaiKami />;
    }
  };

  return (
    <>
      <section className="py-32 bg-slate-50/70">
        <div className="container mx-auto px-6">
          <div className="lg:flex lg:gap-16">
            <aside className="lg:w-1/4 mb-12 lg:mb-0 lg:sticky lg:top-32 self-start">
              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <h3 className="text-2xl font-bold text-primary mb-6 font-heading">{t('kenaliKami.sidebarTitle')}</h3>
                <ul className="space-y-3">
                  <li>
                    <button
                      onClick={() => setActiveSubMenu("mengenai-kami")}
                      className={`w-full text-left font-bold text-lg p-4 rounded-lg transition-all transform hover:scale-105 ${activeSubMenu === 'mengenai-kami' ? 'bg-primary text-white shadow-md' : 'text-slate-600 hover:bg-accent/70'}`}
                    >
                      {t('kenaliKami.menuMengenai')}
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => setActiveSubMenu("visi-misi")}
                      className={`w-full text-left font-bold text-lg p-4 rounded-lg transition-all transform hover:scale-105 ${activeSubMenu === 'visi-misi' ? 'bg-primary text-white shadow-md' : 'text-slate-600 hover:bg-accent/70'}`}
                    >
                      {t('kenaliKami.menuVisiMisi')}
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => setActiveSubMenu("lembaga-amanah")}
                      className={`w-full text-left font-bold text-lg p-4 rounded-lg transition-all transform hover:scale-105 ${activeSubMenu === 'lembaga-amanah' ? 'bg-primary text-white shadow-md' : 'text-slate-600 hover:bg-accent/70'}`}
                    >
                      {t('kenaliKami.menuLembaga')}
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
      <Footer setPage={setPage} />
    </>
  );
};

export default KenaliKamiPage;
