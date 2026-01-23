import React from 'react';
import Footer from '../components/Footer';
import { ChevronRight } from 'lucide-react';

const KerjaKami = () => {
  return (
    <div className="pt-24">
      {/* Newest News Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 leading-tight font-heading">Berita Terkini</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Mockup News Item 1 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300">
              <img src="https://picsum.photos/400/200" alt="Berita 1" className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-4">Program Bantuan Makanan</h3>
                <p className="text-gray-700">Yayasan Infaq Malaysia telah berjaya mengagihkan bantuan makanan kepada 500 keluarga di sekitar Kuala Lumpur.</p>
              </div>
            </div>
            {/* Mockup News Item 2 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300">
              <img src="https://picsum.photos/400/201" alt="Berita 2" className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-4">Biasiswa Pendidikan</h3>
                <p className="text-gray-700">Seramai 100 pelajar cemerlang telah menerima biasiswa untuk melanjutkan pelajaran ke peringkat universiti.</p>
              </div>
            </div>
            {/* Mockup News Item 3 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300">
              <img src="https://picsum.photos/400/202" alt="Berita 3" className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-4">Misi Kemanusiaan di Palestin</h3>
                <p className="text-gray-700">Yayasan Infaq Malaysia telah menghantar pasukan sukarelawan dan bantuan perubatan ke Palestin.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 leading-tight font-heading">Portfolio 12 Tahun Pengalaman</h2>
          </div>
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
               <img src="https://picsum.photos/600/400" alt="Portfolio" className="rounded-lg shadow-xl w-full" />
            </div>
            <div className="md:w-1/2">
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Yayasan Infaq Malaysia (YIM) terlibat secara langsung dan tidak langsung di dalam program kebajikan dalam dan luar negara sejak 12 tahun lepas. Program berkenaan meliputi sektor kebajikan, pendidikan dan misi kemanusiaan. Keseluruhan pengalaman terkumpul dari ahli lembaga amanah adalah berjumlah lebih dari 50 tahun.
              </p>
               <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Kami menjemput lebih ramai sukarelawan dan para dermawan agar berganding bahu di dalam menghasilkan program yang lebih bersepadu dan bermanfaat kepada masyarakat.
              </p>
              <h4 className="text-2xl font-bold text-slate-800 mb-4 font-heading">Antara Portfolio Program:</h4>
              <ul className="list-none text-slate-600 space-y-4">
                <li className="flex items-start gap-3">
                  <ChevronRight className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <span><strong>Pelajar Malaysia (2013-2019):</strong> Program Biasiswa Pendidikan Menengah.</span>
                </li>
                <li className="flex items-start gap-3">
                   <ChevronRight className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                   <span><strong>Agihan Qurban Antarabangsa:</strong> Aceh (2016), Zamboanga (2017), Nepal (2018), Afrika Selatan (2020), Tanzania (2019-2022).</span>
                </li>
                <li className="flex items-start gap-3">
                   <ChevronRight className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <span><strong>Qurban Selangor (2022):</strong> Kerjasama dengan Jabatan Agama Islam Selangor, mengagihkan 240kg daging kepada 239 asnaf kanak-kanak.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default KerjaKami;
