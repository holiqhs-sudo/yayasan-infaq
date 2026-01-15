
import React from 'react';
import Footer from './Footer';
import { Mail, Phone, MapPin, Facebook, Clock, Send } from 'lucide-react';

const HubungiKami = () => {
  return (
    <div className="pt-24 bg-white">
      {/* Page Header */}
      <section className="py-16 text-center bg-gray-50 shadow-sm">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 leading-tight font-heading">Hubungi Kami</h1>
          <p className="text-lg lg:text-xl text-slate-600 mt-4 max-w-3xl mx-auto">
            Kami sedia membantu. Sila tinggalkan pesanan atau lawati kami di pejabat urusan.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-16">
            
            {/* Contact Form */}
            <div className="lg:w-3/5 bg-white p-8 md:p-12 rounded-2xl shadow-xl border border-gray-100">
              <h2 className="text-3xl font-bold text-slate-800 mb-2 font-heading">Hantarkan Mesej</h2>
              <p className="text-slate-500 mb-8">Isi borang di bawah dan kami akan menghubungi anda semula.</p>
              <form action="#" method="POST">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="nama" className="block text-sm font-bold text-slate-700 mb-2">Nama Penuh</label>
                    <input type="text" id="nama" name="nama" className="w-full px-4 py-3 bg-gray-50 rounded-lg border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary" placeholder="cth: Ahmad bin Abdullah" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-bold text-slate-700 mb-2">Alamat Emel</label>
                    <input type="email" id="email" name="email" className="w-full px-4 py-3 bg-gray-50 rounded-lg border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary" placeholder="cth: ahmad@mail.com" />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                        <label htmlFor="telefon" className="block text-sm font-bold text-slate-700 mb-2">No. Telefon</label>
                        <input type="tel" id="telefon" name="telefon" className="w-full px-4 py-3 bg-gray-50 rounded-lg border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary" placeholder="cth: 012-3456789" />
                    </div>
                     <div>
                        <label htmlFor="tujuan" className="block text-sm font-bold text-slate-700 mb-2">Tujuan</label>
                        <select id="tujuan" name="tujuan" className="w-full px-4 py-3 bg-gray-50 rounded-lg border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary">
                            <option>Pertanyaan Am</option>
                            <option>Penajaan Korporat</option>
                            <option>Pendaftaran Sukarelawan</option>
                            <option>Lain-lain</option>
                        </select>
                    </div>
                </div>
                <div className="mb-6">
                  <label htmlFor="pesanan" className="block text-sm font-bold text-slate-700 mb-2">Pesanan Anda</label>
                  <textarea id="pesanan" name="pesanan" rows={5} className="w-full px-4 py-3 bg-gray-50 rounded-lg border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary" placeholder="Tuliskan mesej anda di sini..."></textarea>
                </div>
                <div>
                  <button type="submit" className="inline-flex items-center gap-3 bg-primary text-white px-8 py-4 rounded-xl font-bold hover:bg-secondary hover:scale-105 transition-all shadow-lg shadow-primary/30 font-body uppercase tracking-wider text-sm">
                    Hantar Pesanan <Send size={20} />
                  </button>
                </div>
              </form>
            </div>

            {/* Contact Info */}
            <div className="lg:w-2/5">
                <div className="bg-accent/40 p-8 rounded-2xl">
                    <h3 className="text-2xl font-bold text-slate-800 mb-6 font-heading">Maklumat Perhubungan</h3>
                    <div className="space-y-6">
                        <div className="flex items-start gap-4">
                            <MapPin className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                            <div>
                                <h4 className="font-bold text-slate-800">Alamat Pejabat</h4>
                                <p className="text-slate-600">Yayasan Infaq Malaysia (871868-H)</p>
                                <p className="text-slate-600">T3-03-03, Menara 3 Maju Link, Jln Lingkaran Tengah 2, Bandar Tasik Selatan, 57000 Kuala Lumpur</p>
                            </div>
                        </div>
                         <div className="flex items-start gap-4">
                            <Clock className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                            <div>
                                <h4 className="font-bold text-slate-800">Waktu Operasi</h4>
                                <p className="text-slate-600">Isnin - Jumaat, 9am - 5pm</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <Mail className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                            <div>
                                <h4 className="font-bold text-slate-800">Email</h4>
                                <a href="mailto:contact@infaqfoundation.org" className="text-primary hover:underline">contact@infaqfoundation.org</a>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <Phone className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                            <div>
                                <h4 className="font-bold text-slate-800">No. Telefon</h4>
                                <a href="tel:+60199999468" className="text-primary hover:underline">+6019 9999 468</a>
                            </div>
                        </div>
                         <div className="flex items-start gap-4">
                            <Facebook className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                            <div>
                                <h4 className="font-bold text-slate-800">Facebook</h4>
                                <a href="https://www.facebook.com/YayasanInfaqMy" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">fb.com/YayasanInfaqMy</a>
                            </div>
                        </div>
                    </div>
                </div>
                 {/* Map */}
                <div className="mt-8">
                    <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3984.095210190186!2d101.71072181475753!3d3.088339197775952!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cc349d9a9f7331%3A0x6a2c2f8b5f5e2786!2sMaju%20Link!5e0!3m2!1sen!2smy!4v1678886026858!5m2!1sen!2smy"
                        width="100%" 
                        height="300" 
                        style={{ border: 0 }} 
                        allowFullScreen="" 
                        loading="lazy" 
                        referrerPolicy="no-referrer-when-downgrade"
                        className="rounded-xl shadow-lg"
                    ></iframe>
                </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HubungiKami;
