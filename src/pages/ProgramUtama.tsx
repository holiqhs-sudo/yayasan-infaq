import React from 'react';
import { useTranslation } from 'react-i18next';
import Footer from '../components/Footer';

const ProgramUtama: React.FC<{ setPage?: (page: string) => void }> = ({ setPage }) => {
  const { t } = useTranslation();

  const pendidikanItems = t('programUtama.pendidikan.items', { returnObjects: true }) as string[];
  const qurbanItems = t('programUtama.qurban.items', { returnObjects: true }) as string[];
  const makananItems = t('programUtama.makanan.items', { returnObjects: true }) as string[];

  return (
    <>
      <div className="space-y-12 animate-fade-in-up py-32 bg-slate-50/70">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-slate-900 font-heading text-center">{t('programUtama.title')}</h2>

          <div className="mt-12 space-y-16">
            {/* Pendidikan */}
            <div className="p-8 rounded-2xl shadow-lg bg-white">
              <h3 className="text-3xl font-bold text-primary font-heading mb-6">{t('programUtama.pendidikan.title')}</h3>
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <img src="/assets/Program Pendidikan dan Projek.jpg" alt="Pendidikan" className="rounded-2xl shadow-lg" />
                </div>
                <div>
                  <ul className="space-y-3 list-disc list-inside text-slate-700 font-body text-lg leading-relaxed">
                    {pendidikanItems.map((item: string, i: number) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                  <p className="text-slate-700 font-body text-lg leading-relaxed mt-4">{t('programUtama.pendidikan.desc')}</p>
                </div>
              </div>
            </div>

            {/* Qurban */}
            <div className="p-8 rounded-2xl shadow-lg bg-white">
              <h3 className="text-3xl font-bold text-primary font-heading mb-6">{t('programUtama.qurban.title')}</h3>
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <img src="/assets/Qurban Yayasan Infaq.jpg" alt="Qurban" className="rounded-2xl shadow-lg" />
                </div>
                <div>
                  <ul className="space-y-3 list-disc list-inside text-slate-700 font-body text-lg leading-relaxed">
                    {qurbanItems.map((item: string, i: number) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                  <p className="text-slate-700 font-body text-lg leading-relaxed mt-4">{t('programUtama.qurban.desc')}</p>
                </div>
              </div>
            </div>

            {/* Makanan */}
            <div className="p-8 rounded-2xl shadow-lg bg-white">
              <h3 className="text-3xl font-bold text-primary font-heading mb-6">{t('programUtama.makanan.title')}</h3>
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <img src="/assets/Agihan Makanan Panas.jpg" alt="Agihan Makanan" className="rounded-2xl shadow-lg" />
                </div>
                <div>
                  <ul className="space-y-3 list-disc list-inside text-slate-700 font-body text-lg leading-relaxed">
                    {makananItems.map((item: string, i: number) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                  <p className="text-slate-700 font-body text-lg leading-relaxed mt-4">{t('programUtama.makanan.desc')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer setPage={setPage} />
    </>
  );
};

export default ProgramUtama;
