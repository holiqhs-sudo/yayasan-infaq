import React from 'react';
import { useTranslation } from 'react-i18next';
import Footer from '../components/Footer';
import { Building, Users, ArrowRight, Handshake, Heart, Star, ShieldCheck, FileText, Map, Camera } from 'lucide-react';

const SertaiKami = ({ setPage }: { setPage?: (page: string) => void }) => {
  const { t } = useTranslation();

  return (
    <div className="pt-24 bg-gray-50">
      {/* Main Title */}
      <section className="py-16 text-center bg-white shadow-sm">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 leading-tight font-heading">{t('sertaiKami.pageTitle')}</h1>
          <p className="text-lg lg:text-xl text-slate-600 mt-4 max-w-3xl mx-auto">
            {t('sertaiKami.pageSubtitle')}
          </p>
        </div>
      </section>

      {/* Penaja Korporat Section */}
      <section id="korporat" className="py-28">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            <div className="lg:w-1/2 relative">
              <img src="/assets/Corporate Sponsorship.jpg" alt="Corporate Sponsorship" className="rounded-3xl shadow-2xl w-full" />
              <div className="absolute -bottom-8 -right-8 bg-primary text-white p-8 rounded-2xl shadow-lg w-64">
                <Handshake size={40} className="mb-4" />
                <h4 className="text-2xl font-bold font-heading">{t('sertaiKami.korporat.impakTitle')}</h4>
                <p className="text-sm text-accent/80">{t('sertaiKami.korporat.impakDesc')}</p>
              </div>
            </div>
            <div className="lg:w-1/2">
              <span className="text-secondary font-black tracking-[0.3em] uppercase text-xs mb-3 block font-body">{t('sertaiKami.korporat.eyebrow')}</span>
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6 font-heading">{t('sertaiKami.korporat.title')}</h2>
              <p className="text-slate-600 leading-relaxed mb-6">{t('sertaiKami.korporat.p1')}</p>
              <p className="text-slate-600 leading-relaxed mb-8">
                {t('sertaiKami.korporat.p2Start')}
                <span className="font-bold text-primary">{t('sertaiKami.korporat.p2Highlight')}</span>
                {t('sertaiKami.korporat.p2End')}
              </p>
              <div className="bg-accent/50 border-l-4 border-secondary p-6 rounded-r-lg mb-8">
                <div className="flex items-center gap-4">
                  <ShieldCheck size={40} className="text-primary" />
                  <div>
                    <h4 className="font-bold text-slate-800 text-lg">{t('sertaiKami.korporat.taxTitle')}</h4>
                    <p className="text-slate-600">{t('sertaiKami.korporat.taxDesc')}</p>
                  </div>
                </div>
              </div>
              <a href="https://forms.gle/sDXmJ92fuUh3CFHR9" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 bg-primary text-white px-8 py-4 rounded-2xl font-bold hover:bg-secondary hover:scale-105 transition-all shadow-lg shadow-primary/30 font-body uppercase tracking-wider text-sm">
                {t('sertaiKami.korporat.btnHubungi')} <ArrowRight size={20} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Sukarelawan Section */}
      <section id="sukarelawan" className="py-28 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-secondary font-black tracking-[0.3em] uppercase text-xs mb-3 block font-body">{t('sertaiKami.sukarelawan.eyebrow')}</span>
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6 font-heading">{t('sertaiKami.sukarelawan.title')}</h2>
            <p className="text-slate-600 leading-relaxed text-lg">{t('sertaiKami.sukarelawan.subtitle')}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-16">
            <div className="bg-gray-50 p-8 rounded-3xl text-center border hover:shadow-xl hover:border-primary/20 transition-all">
              <Heart size={32} className="mx-auto text-primary mb-4" />
              <h3 className="text-xl font-bold font-heading text-slate-800 mb-2">{t('sertaiKami.sukarelawan.card1Title')}</h3>
              <p className="text-slate-500">{t('sertaiKami.sukarelawan.card1Desc')}</p>
            </div>
            <div className="bg-gray-50 p-8 rounded-3xl text-center border hover:shadow-xl hover:border-primary/20 transition-all">
              <Map size={32} className="mx-auto text-primary mb-4" />
              <h3 className="text-xl font-bold font-heading text-slate-800 mb-2">{t('sertaiKami.sukarelawan.card2Title')}</h3>
              <p className="text-slate-500">{t('sertaiKami.sukarelawan.card2Desc')}</p>
            </div>
            <div className="bg-gray-50 p-8 rounded-3xl text-center border hover:shadow-xl hover:border-primary/20 transition-all">
              <Users size={32} className="mx-auto text-primary mb-4" />
              <h3 className="text-xl font-bold font-heading text-slate-800 mb-2">{t('sertaiKami.sukarelawan.card3Title')}</h3>
              <p className="text-slate-500">{t('sertaiKami.sukarelawan.card3Desc')}</p>
            </div>
            <div className="bg-gray-50 p-8 rounded-3xl text-center border hover:shadow-xl hover:border-primary/20 transition-all md:col-span-2 lg:col-span-1">
              <Camera size={32} className="mx-auto text-primary mb-4" />
              <h3 className="text-xl font-bold font-heading text-slate-800 mb-2">{t('sertaiKami.sukarelawan.card4Title')}</h3>
              <p className="text-slate-500">{t('sertaiKami.sukarelawan.card4Desc')}</p>
            </div>
          </div>

          <div className="text-center">
            <p className="text-slate-600 mb-8 max-w-2xl mx-auto">{t('sertaiKami.sukarelawan.formNote')}</p>
            <a href="https://forms.gle/sDXmJ92fuUh3CFHR9" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 bg-secondary text-white px-8 py-4 rounded-2xl font-bold hover:bg-primary hover:scale-105 transition-all shadow-lg shadow-secondary/30 font-body uppercase tracking-wider text-sm">
              {t('sertaiKami.sukarelawan.btnDaftar')} <ArrowRight size={20} />
            </a>
          </div>
        </div>
      </section>

      <Footer setPage={setPage} />
    </div>
  );
};

export default SertaiKami;
