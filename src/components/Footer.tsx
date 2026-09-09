
import React from 'react';
import { MapPin, Phone, Mail, Facebook, Instagram, Youtube } from 'lucide-react';

const LOGO_URL = "dist/assets/logo-yayasan-infaq-malaysia.png";

const Footer: React.FC = () => (

  
    <footer id="hubungi" className="bg-slate-50 pt-24 pb-12 border-t border-slate-100">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-20">
          <div className="lg:col-span-4">
            <div className="mb-8 block h-10 lg:h-14 transition-transform hover:scale-105 origin-left">
              <img src={LOGO_URL} alt="Yayasan Infaq Malaysia Logo" className="h-full w-auto object-contain" />
            </div>
            <p className="text-slate-600 mb-10 leading-relaxed font-body font-medium text-base lg:text-lg italic">
              “Semuanya Untuk Asnaf” — Misi kami adalah membasmi kemiskinan dan memperkasakan asnaf melalui sistem bantuan yang telus.
            </p>
            <div className="flex items-center gap-5">
              {[Facebook, Instagram, Youtube].map((Icon, i) => (
                <a key={i} href="#" className="w-12 h-12 bg-white border border-slate-200 rounded-xl flex items-center justify-center text-slate-400 hover:text-primary hover:border-primary transition-all shadow-sm">
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-slate-900 font-bold text-lg mb-8 font-heading uppercase tracking-widest text-primary/80">Pautan</h4>
            <ul className="space-y-4 font-body font-bold text-sm lg:text-base uppercase tracking-wider">
              <li><a href="#kenali" className="text-slate-500 hover:text-primary transition-colors">Kenali Kami</a></li>
              <li><a href="#program" className="text-slate-500 hover:text-primary transition-colors">Program Utama</a></li>
              <li><a href="#kerja" className="text-slate-500 hover:text-primary transition-colors">Kerja Kami</a></li>
              <li><a href="#sertai" className="text-slate-500 hover:text-primary transition-colors">Sertai Kami</a></li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-slate-900 font-bold text-lg mb-8 font-heading uppercase tracking-widest text-primary/80">Bantuan</h4>
            <ul className="space-y-4 font-body font-bold text-sm lg:text-base uppercase tracking-wider">
              <li><a href="#" className="text-slate-500 hover:text-primary transition-colors">Pendidikan</a></li>
              <li><a href="#" className="text-slate-500 hover:text-primary transition-colors">Kebajikan</a></li>
              <li><a href="#" className="text-slate-500 hover:text-primary transition-colors">Dana Khas</a></li>
              <li><a href="#" className="text-slate-500 hover:text-primary transition-colors">Zakat</a></li>
            </ul>
          </div>

          <div className="lg:col-span-4">
            <h4 className="text-slate-900 font-bold text-lg mb-8 font-heading uppercase tracking-widest text-primary/80">Hubungi</h4>
            <ul className="space-y-6 font-body">
              <li className="flex gap-5 text-slate-700 font-semibold group">
                <MapPin size={24} className="text-primary shrink-0" /> 
                <span className="leading-relaxed text-sm lg:text-base">
                  T3-03-03, Menara 3 Maju Link, Jln Lingkaran Tengah 2, Bandar Tasik Selatan, 57000 Kuala Lumpur
                </span>
              </li>
              <li className="flex items-center gap-5 text-slate-700 font-extrabold text-base lg:text-lg">
                <Phone size={20} className="text-primary shrink-0" /> 
                <a href="tel:+601742777751" className="hover:text-primary transition-colors">+6017 4277 7751</a>
              </li>
              <li className="flex items-center gap-5 text-slate-700 font-extrabold text-base lg:text-lg">
                <Mail size={20} className="text-primary shrink-0" /> 
                <a href="mailto:contact@infaqfoundation.org" className="hover:text-primary transition-colors truncate">contact@infaqfoundation.org</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-slate-200 text-center lg:flex lg:justify-between items-center text-slate-400 font-body text-[10px] font-black uppercase tracking-[0.3em]">
          <p>Copyrights 2025 © Yayasan Infaq Malaysia (YIM)</p>
          <div className="mt-6 lg:mt-0 flex items-center justify-center gap-10">
            <a href="#" className="hover:text-primary transition-colors">Dasar Privasi</a>
            <a href="#" className="hover:text-primary transition-colors">Terma & Syarat</a>
          </div>
        </div>
      </div>
    </footer>
);

export default Footer;
