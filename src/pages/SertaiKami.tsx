
import React from 'react';
import Footer from '../components/Footer';
import { Building, Users, ArrowRight, Handshake, Heart, Star, ShieldCheck, FileText, Map, Camera } from 'lucide-react';

const SertaiKami = () => {
  return (
    <div className="pt-24 bg-gray-50">
      {/* Main Title */}
      <section className="py-16 text-center bg-white shadow-sm">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 leading-tight font-heading">Sertai Misi Kami</h1>
          <p className="text-lg lg:text-xl text-slate-600 mt-4 max-w-3xl mx-auto">
            Setiap sumbangan, sama ada dalam bentuk dana atau masa, adalah nadi yang menggerakkan usaha kami untuk membantu golongan asnaf. Mari bersama kami membina masa depan yang lebih cerah.
          </p>
        </div>
      </section>

      {/* Penaja Korporat Section */}
      <section id="korporat" className="py-28">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            <div className="lg:w-1/2 relative">
              <img src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?q=80&w=2070" alt="Corporate Sponsorship" className="rounded-3xl shadow-2xl w-full"/>
              <div className="absolute -bottom-8 -right-8 bg-primary text-white p-8 rounded-2xl shadow-lg w-64">
                <Handshake size={40} className="mb-4"/>
                <h4 className="text-2xl font-bold font-heading">Impak Bersama</h4>
                <p className="text-sm text-accent/80">Wujudkan perubahan sosial yang mampan melalui kerjasama strategik.</p>
              </div>
            </div>
            <div className="lg:w-1/2">
              <span className="text-secondary font-black tracking-[0.3em] uppercase text-xs mb-3 block font-body">Untuk Syarikat</span>
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6 font-heading">Menjadi Penaja Korporat</h2>
              <p className="text-slate-600 leading-relaxed mb-6">
                Tanggungjawab Sosial Korporat (CSR) adalah peluang untuk syarikat anda menyumbang kepada masyarakat. Kami di YIM sedia membantu menyalurkan sumbangan atau tajaan anda terus kepada anak-anak asnaf yang memerlukan.
              </p>
              <p className="text-slate-600 leading-relaxed mb-8">
                Kami menjemput tajaan dari syarikat pelbagai saiz. Sumbangan anda, sama ada dalam bentuk <span className="font-bold text-primary">tajaan sekali (one-off), bulanan, tajaan program, atau melalui Wakalah Zakat</span>, akan kami uruskan dengan telus dan amanah.
              </p>
              <div className="bg-accent/50 border-l-4 border-secondary p-6 rounded-r-lg mb-8">
                  <div className="flex items-center gap-4">
                      <ShieldCheck size={40} className="text-primary"/>
                      <div>
                          <h4 className="font-bold text-slate-800 text-lg">Pengecualian Cukai Disediakan</h4>
                          <p className="text-slate-600">Resit pengecualian cukai disediakan untuk sumbangan RM5,000 dan ke atas.</p>
                      </div>
                  </div>
              </div>
              <a href="https://forms.gle/sDXmJ92fuUh3CFHR9" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 bg-primary text-white px-8 py-4 rounded-2xl font-bold hover:bg-secondary hover:scale-105 transition-all shadow-lg shadow-primary/30 font-body uppercase tracking-wider text-sm">
                Hubungi Kami <ArrowRight size={20} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Sukarelawan Section */}
      <section id="sukarelawan" className="py-28 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-secondary font-black tracking-[0.3em] uppercase text-xs mb-3 block font-body">Jadilah Harapan</span>
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6 font-heading">Sertai Pasukan Sukarelawan</h2>
            <p className="text-slate-600 leading-relaxed text-lg">
              Setiap titik peluh yang anda sumbangkan bersama YIM amatlah bermakna dan besar nilainya di sisi Asnaf. Tenaga dan masa anda adalah anugerah yang tidak ternilai.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-gray-50 p-8 rounded-3xl text-center border hover:shadow-xl hover:border-primary/20 transition-all">
                <Heart size={32} className="mx-auto text-primary mb-4"/>
                <h3 className="text-xl font-bold font-heading text-slate-800 mb-2">Program KL & Selangor</h3>
                <p className="text-slate-500">Bantu kami secara langsung dalam menjayakan program dan aktiviti di lapangan.</p>
            </div>
             <div className="bg-gray-50 p-8 rounded-3xl text-center border hover:shadow-xl hover:border-primary/20 transition-all">
                <Map size={32} className="mx-auto text-primary mb-4"/>
                <h3 className="text-xl font-bold font-heading text-slate-800 mb-2">Perwakilan Negeri/Daerah</h3>
                <p className="text-slate-500">Jadi wakil YIM di kawasan anda dan perluaskan lagi jaringan bantuan.</p>
            </div>
             <div className="bg-gray-50 p-8 rounded-3xl text-center border hover:shadow-xl hover:border-primary/20 transition-all">
                <Users size={32} className="mx-auto text-primary mb-4"/>
                <h3 className="text-xl font-bold font-heading text-slate-800 mb-2">Kutipan Dana</h3>
                <p className="text-slate-500">Sertai kempen kutipan dana kami untuk memastikan kelestarian program.</p>
            </div>
             <div className="bg-gray-50 p-8 rounded-3xl text-center border hover:shadow-xl hover:border-primary/20 transition-all md:col-span-2 lg:col-span-1">
                <Camera size={32} className="mx-auto text-primary mb-4"/>
                <h3 className="text-xl font-bold font-heading text-slate-800 mb-2">Multimedia</h3>
                <p className="text-slate-500">Sumbangkan bakat kreatif anda dalam fotografi, video dan penulisan.</p>
            </div>
          </div>
          
          <div className="text-center">
            <p className="text-slate-600 mb-8 max-w-2xl mx-auto">Sila kongsikan latar belakang dan pengalaman anda agar kami dapat memberikan tugasan yang paling sesuai. Klik pautan di bawah untuk mendaftar.</p>
            <a href="https://forms.gle/sDXmJ92fuUh3CFHR9" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 bg-secondary text-white px-8 py-4 rounded-2xl font-bold hover:bg-primary hover:scale-105 transition-all shadow-lg shadow-secondary/30 font-body uppercase tracking-wider text-sm">
              Isi Borang Sukarelawan <ArrowRight size={20} />
            </a>
          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SertaiKami;
