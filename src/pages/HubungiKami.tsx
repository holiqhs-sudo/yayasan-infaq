import React from 'react';
import { useTranslation } from 'react-i18next';
import Footer from '../components/Footer';
import { Mail, Phone, MapPin, Facebook, Clock, Send } from 'lucide-react';

const HubungiKami = ({ setPage }: { setPage?: (page: string) => void }) => {
  const { t } = useTranslation();

  return (
    <div className="pt-24 bg-white">
      {/* Page Header */}
      <section className="py-16 text-center bg-gray-50 shadow-sm">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 leading-tight font-heading">{t('hubungiKami.pageTitle')}</h1>
          <p className="text-lg lg:text-xl text-slate-600 mt-4 max-w-3xl mx-auto">
            {t('hubungiKami.pageSubtitle')}
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-16">
            
            {/* Contact Form */}
            <div className="lg:w-3/5 bg-white p-8 md:p-12 rounded-2xl shadow-xl border border-gray-100">
              <h2 className="text-3xl font-bold text-slate-800 mb-2 font-heading">{t('hubungiKami.formTitle')}</h2>
              <p className="text-slate-500 mb-8">{t('hubungiKami.formSubtitle')}</p>
              <form action="#" method="POST">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="nama" className="block text-sm font-bold text-slate-700 mb-2">{t('hubungiKami.namaLabel')}</label>
                    <input type="text" id="nama" name="nama" className="w-full px-4 py-3 bg-gray-50 rounded-lg border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary" placeholder={t('hubungiKami.namaPH')} />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-bold text-slate-700 mb-2">{t('hubungiKami.emailLabel')}</label>
                    <input type="email" id="email" name="email" className="w-full px-4 py-3 bg-gray-50 rounded-lg border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary" placeholder={t('hubungiKami.emailPH')} />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="telefon" className="block text-sm font-bold text-slate-700 mb-2">{t('hubungiKami.telefonLabel')}</label>
                    <input type="tel" id="telefon" name="telefon" className="w-full px-4 py-3 bg-gray-50 rounded-lg border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary" placeholder={t('hubungiKami.telefonPH')} />
                  </div>
                  <div>
                    <label htmlFor="tujuan" className="block text-sm font-bold text-slate-700 mb-2">{t('hubungiKami.tujuanLabel')}</label>
                    <select id="tujuan" name="tujuan" className="w-full px-4 py-3 bg-gray-50 rounded-lg border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary">
                      <option>{t('hubungiKami.tujuan1')}</option>
                      <option>{t('hubungiKami.tujuan2')}</option>
                      <option>{t('hubungiKami.tujuan3')}</option>
                      <option>{t('hubungiKami.tujuan4')}</option>
                    </select>
                  </div>
                </div>
                <div className="mb-6">
                  <label htmlFor="pesanan" className="block text-sm font-bold text-slate-700 mb-2">{t('hubungiKami.pesananLabel')}</label>
                  <textarea id="pesanan" name="pesanan" rows={5} className="w-full px-4 py-3 bg-gray-50 rounded-lg border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary" placeholder={t('hubungiKami.pesananPH')}></textarea>
                </div>
                <div>
                  <button type="submit" className="inline-flex items-center gap-3 bg-primary text-white px-8 py-4 rounded-xl font-bold hover:bg-secondary hover:scale-105 transition-all shadow-lg shadow-primary/30 font-body uppercase tracking-wider text-sm">
                    {t('hubungiKami.btnHantar')} <Send size={20} />
                  </button>
                </div>
              </form>
            </div>

            {/* Contact Info */}
            <div className="lg:w-2/5">
              <div className="bg-accent/40 p-8 rounded-2xl">
                <h3 className="text-2xl font-bold text-slate-800 mb-6 font-heading">{t('hubungiKami.infoTitle')}</h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <MapPin className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-slate-800">{t('hubungiKami.alamatLabel')}</h4>
                      <p className="text-slate-600">{t('hubungiKami.alamatNama')}</p>
                      <p className="text-slate-600">{t('hubungiKami.alamatDetail')}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Clock className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-slate-800">{t('hubungiKami.waktuLabel')}</h4>
                      <p className="text-slate-600">{t('hubungiKami.waktuDetail')}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Mail className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-slate-800">{t('hubungiKami.emailKLabel')}</h4>
                      <a href="mailto:contact@infaqfoundation.org" className="text-primary hover:underline">contact@infaqfoundation.org</a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Phone className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-slate-800">{t('hubungiKami.telefonKLabel')}</h4>
                      <a href="tel:+601742777751" className="text-primary hover:underline">+6017 4277 7751</a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Facebook className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-slate-800">{t('hubungiKami.facebookLabel')}</h4>
                      <a href="https://www.facebook.com/YayasanInfaqMy" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">fb.com/YayasanInfaqMy</a>
                    </div>
                  </div>
                </div>
              </div>
              {/* Map */}
              <div className="mt-8">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3984.0748208363248!2d101.710967!3d3.074691!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zM8KwMDQnMjguOSJOIDEwMcKwNDInMzkuNSJF!5e0!3m2!1sid!2sid!4v1769671014089!5m2!1sid!2sid"
                  width="100%" 
                  height="300" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-xl shadow-lg"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer setPage={setPage} />
    </div>
  );
};

export default HubungiKami;
