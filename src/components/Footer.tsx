import React from 'react';
import { useTranslation } from 'react-i18next';
import { MapPin, Phone, Mail, Facebook, Instagram, Youtube } from 'lucide-react';

const LOGO_URL = "/assets/logo-yayasan-infaq-malaysia.png";

interface FooterProps {
  setPage?: (page: string) => void;
}

const Footer: React.FC<FooterProps> = ({ setPage }) => {
  const { t } = useTranslation();

  const handleNav = (page: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    if (setPage) setPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="hubungi" className="bg-slate-50 pt-24 pb-12 border-t border-slate-100">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-20">

          {/* Logo & Tagline */}
          <div className="lg:col-span-4">
            <div className="mb-8 block h-10 lg:h-14 transition-transform hover:scale-105 origin-left">
              <img src={LOGO_URL} alt="Yayasan Infaq Malaysia Logo" className="h-full w-auto object-contain" />
            </div>
            <p className="text-slate-600 mb-10 leading-relaxed font-body font-medium text-base lg:text-lg italic">
              {t('footer.tagline')}
            </p>
            <div className="flex items-center gap-5">
              <a href="https://www.facebook.com/YayasanInfaqMy" target="_blank" rel="noopener noreferrer"
                className="w-12 h-12 bg-white border border-slate-200 rounded-xl flex items-center justify-center text-slate-400 hover:text-primary hover:border-primary transition-all shadow-sm">
                <Facebook size={20} />
              </a>
              <a href="#" className="w-12 h-12 bg-white border border-slate-200 rounded-xl flex items-center justify-center text-slate-400 hover:text-primary hover:border-primary transition-all shadow-sm">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-12 h-12 bg-white border border-slate-200 rounded-xl flex items-center justify-center text-slate-400 hover:text-primary hover:border-primary transition-all shadow-sm">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Pautan */}
          <div className="lg:col-span-2">
            <h4 className="text-slate-900 font-bold text-lg mb-8 font-heading uppercase tracking-widest text-primary/80">
              {t('footer.pautanTitle')}
            </h4>
            <ul className="space-y-4 font-body font-bold text-sm lg:text-base uppercase tracking-wider">
              <li>
                <a href="#" onClick={handleNav('kenali-kami')} className="text-slate-500 hover:text-primary transition-colors">
                  {t('footer.kenaliKami')}
                </a>
              </li>
              <li>
                <a href="#" onClick={handleNav('program-utama')} className="text-slate-500 hover:text-primary transition-colors">
                  {t('footer.programUtama')}
                </a>
              </li>
              <li>
                <a href="#" onClick={handleNav('kerja-kami')} className="text-slate-500 hover:text-primary transition-colors">
                  {t('footer.kerjaKami')}
                </a>
              </li>
              <li>
                <a href="#" onClick={handleNav('sertai-kami')} className="text-slate-500 hover:text-primary transition-colors">
                  {t('footer.sertaiKami')}
                </a>
              </li>
            </ul>
          </div>

          {/* Bantuan */}
          <div className="lg:col-span-2">
            <h4 className="text-slate-900 font-bold text-lg mb-8 font-heading uppercase tracking-widest text-primary/80">
              {t('footer.bantuanTitle')}
            </h4>
            <ul className="space-y-4 font-body font-bold text-sm lg:text-base uppercase tracking-wider">
              <li>
                <a href="#" onClick={handleNav('program-utama')} className="text-slate-500 hover:text-primary transition-colors">
                  {t('footer.pendidikan')}
                </a>
              </li>
              <li>
                <a href="#" onClick={handleNav('program-utama')} className="text-slate-500 hover:text-primary transition-colors">
                  {t('footer.kebajikan')}
                </a>
              </li>
              <li>
                <a href="#" onClick={handleNav('program-utama')} className="text-slate-500 hover:text-primary transition-colors">
                  {t('footer.danaKhas')}
                </a>
              </li>
              <li>
                <a href="#" onClick={handleNav('sertai-kami')} className="text-slate-500 hover:text-primary transition-colors">
                  {t('footer.zakat')}
                </a>
              </li>
            </ul>
          </div>

          {/* Hubungi */}
          <div className="lg:col-span-4">
            <h4 className="text-slate-900 font-bold text-lg mb-8 font-heading uppercase tracking-widest text-primary/80">
              {t('footer.hubungiTitle')}
            </h4>
            <ul className="space-y-6 font-body">
              <li className="flex gap-5 text-slate-700 font-semibold group">
                <MapPin size={24} className="text-primary shrink-0" />
                <span className="leading-relaxed text-sm lg:text-base">{t('footer.alamat')}</span>
              </li>
              <li className="flex items-center gap-5 text-slate-700 font-extrabold text-base lg:text-lg">
                <Phone size={20} className="text-primary shrink-0" />
                <a href="tel:+60174277751" className="hover:text-primary transition-colors">+6017 4277 751</a>
              </li>
              <li className="flex items-center gap-5 text-slate-700 font-extrabold text-base lg:text-lg">
                <Mail size={20} className="text-primary shrink-0" />
                <a href="mailto:contact@infaqfoundation.org" className="hover:text-primary transition-colors truncate">
                  contact@infaqfoundation.org
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-slate-200 text-center lg:flex lg:justify-between items-center text-slate-400 font-body text-[10px] font-black uppercase tracking-[0.3em]">
          <p>{t('footer.copyright')}</p>
          <div className="mt-6 lg:mt-0 flex items-center justify-center gap-10">
            <a href="#" className="hover:text-primary transition-colors">{t('footer.dasarPrivasi')}</a>
            <a href="#" className="hover:text-primary transition-colors">{t('footer.terma')}</a>
          </div>
        </div>

         {/* ← Bottom Info */}
        <div className="mt-8 pt-6 border-t border-slate-100 flex flex-col items-center gap-4 text-slate-400 font-body text-[10px] font-black uppercase tracking-[0.2em]">
          <p className="text-primary">Designed by</p>
          <div className="flex items-center gap-6">
            <a href="https://zerone.id/" target="_blank"><img src="/assets/logo-zerone.png" alt="Zerone.id" className="h-10 w-auto object-contain" /></a>
            <span className="text-slate-300">×</span>
            <a href="https://fish.unj.ac.id/" target="_blank"><img src="/assets/logo-unj.png" alt="Universitas Negeri Jakarta" className="h-10 w-auto object-contain" /></a>
          </div>
          <p className="text-primary">Zerone.id Collaboration with Universitas Negeri Jakarta</p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
