import React from 'react';
import { useTranslation } from 'react-i18next';
import Footer from '../components/Footer';
import BlogList from '../components/BlogList';
import { ChevronRight } from 'lucide-react';

const KerjaKami = ({ setPage }: { setPage?: (page: string) => void }) => {
  const { t } = useTranslation();
  const pdfUrl = "/assets/Laporan-Program-Koordinasi-Qurban-Yayasan-Infaq-Malaysia-2022.pdf";

  return (
    <div className="pt-24">
      {/* Latest News Section */}
      <section className="py-28 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-8">
            <span className="text-secondary font-black tracking-[0.3em] uppercase text-xs mb-4 block font-body">
              {t('kerjaKami.newsEyebrow')}
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 leading-tight font-heading">
              {t('kerjaKami.newsTitle')}
            </h2>
          </div>
          <BlogList />
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 leading-tight font-heading">
              {t('kerjaKami.portfolioTitle')}
            </h2>
          </div>
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
              <iframe
                src={pdfUrl}
                title="Laporan Qurban 2022"
                width="100%"
                height="640"
                style={{ border: 'none' }}
                allow="autoplay"
              >
                <p>{t('kerjaKami.iframeAlt')} <a href={pdfUrl}>{t('kerjaKami.iframeLink')}</a></p>
              </iframe>
            </div>
            <div className="md:w-1/2">
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">{t('kerjaKami.portfolioP1')}</p>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">{t('kerjaKami.portfolioP2')}</p>
              <h4 className="text-2xl font-bold text-slate-800 mb-4 font-heading">{t('kerjaKami.portfolioListTitle')}</h4>
              <ul className="list-none text-slate-600 space-y-4">
                <li className="flex items-start gap-3">
                  <ChevronRight className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <span><strong>{t('kerjaKami.portfolio1Label')}</strong> {t('kerjaKami.portfolio1Desc')}</span>
                </li>
                <li className="flex items-start gap-3">
                  <ChevronRight className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <span><strong>{t('kerjaKami.portfolio2Label')}</strong> {t('kerjaKami.portfolio2Desc')}</span>
                </li>
                <li className="flex items-start gap-3">
                  <ChevronRight className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <span><strong>{t('kerjaKami.portfolio3Label')}</strong> {t('kerjaKami.portfolio3Desc')}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <Footer setPage={setPage} />
    </div>
  );
};

export default KerjaKami;
