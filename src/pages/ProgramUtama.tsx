
import React from 'react';
import Footer from '../components/Footer';

const ProgramUtama: React.FC = () => (
    <>
        <div className="space-y-12 animate-fade-in-up py-32 bg-slate-50/70">
            <div className="container mx-auto px-6">
                <h2 className="text-4xl font-bold text-slate-900 font-heading text-center">PROGRAM UTAMA</h2>
            
                <div className="mt-12 space-y-16">
                    <div className="p-8 rounded-2xl shadow-lg bg-white">
                        <h3 className="text-3xl font-bold text-primary font-heading mb-6">Program Pendidikan dan Projek Sekolah Wakaf Yayasan Infaq Malaysia</h3>
                        <div className="grid md:grid-cols-2 gap-8 items-center">
                            <div>
                                <img src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070&auto=format&fit=crop" alt="Pendidikan" className="rounded-2xl shadow-lg"/>
                            </div>
                            <div>
                                <ul className="space-y-3 list-disc list-inside text-slate-700 font-body text-lg leading-relaxed">
                                    <li>Pendidikan bertaraf antarabangsa</li>
                                    <li>Biasiswa pendidikan</li>
                                    <li>Persediaan Pra-Univerisiti</li>
                                    <li>Penempatan Universiti Dunia</li>
                                    <li>Asrama dalam Bandar</li>
                                </ul>
                                <p className="text-slate-700 font-body text-lg leading-relaxed mt-4">Pendidikan merupakan modal insan utama di dalam inisiatif untuk membina negara maju. Yayasan Infaq Malaysia mengambil langkah proaktif di dalam membawa kepakaran seluruh dunia kepada Asnaf kanak-kanak yang berada di Malaysia terutamanya. Bimbingan bersepadu dan komprehensif diberikan sewaktu dan selepas waktu sekolah. Ini amat penting bagi kami di dalam membina syahsiah yang padu bagi persiapan generasi baru bagi menghadapi dunia yang penuh mencabar dan persaingan. Dengan wujudnya rakan strategik dalam dan luar negara, YIM yakin mampu untuk mewujudkan programpendidikan yang berimpak tinggi dan komprehensif.</p>
                            </div>
                        </div>
                    </div>

                    <div className="p-8 rounded-2xl shadow-lg bg-white">
                        <h3 className="text-3xl font-bold text-primary font-heading mb-6">Ibadah Akikah & Qurban Yayasan Infaq Malaysia</h3>
                        <div className="grid md:grid-cols-2 gap-8 items-center">
                            <div>
                                <img src="https://images.unsplash.com/photo-1567444225368-751635cec524?q=80&w=2070&auto=format&fit=crop" alt="Qurban" className="rounded-2xl shadow-lg"/>
                            </div>
                            <div>
                                <ul className="space-y-3 list-disc list-inside text-slate-700 font-body text-lg leading-relaxed">
                                    <li>Agihan tempatan atau di luar negara</li>
                                    <li>Pakej siap masak & agihan ke Masjid @ Pusat Asnaf Kanak-kanak (PAKK)</li>
                                    <li>Pakej lawatan pendek di negara sembelihan</li>
                                </ul>
                                <p className="text-slate-700 font-body text-lg leading-relaxed mt-4">Ibadah Akikah dan Qurban telah sebati di dalam masyarakat Malaysia. Setiap kali kelahiran anak baru, menjadi kelaziman bagi pasangan berkenaan untuk melaksanakan ibadah akikah. Yayasan Infaq Malaysia (YIM) menyediakan pakej akikah tempatan di mana agihan dibuat kepada golongan Asnaf yang paling memerlukan iaitu, Asnaf Kanak-kanak. YIM akan mengkoordinasikan agihan makanan/akikah berkenaan kepada rumah yang bersesuaian dan berkelayakan. YIM juga menyediakan pakej qurban/akikah luar negara bagi mana-mana peserta yang ingin membuat lawatan pendek ke negara berkenaan. Ini membolehkan peserta melihat sendiri suasana penyembelihan dan membuat agihan sendiri di negara berkenaan. Secara tidak langsung, YIM menyediakan platfom untuk menyantuni golongan Asnaf bukan sahaja di Malaysia malah di luar negara.</p>
                            </div>
                        </div>
                    </div>

                    <div className="p-8 rounded-2xl shadow-lg bg-white">
                        <h3 className="text-3xl font-bold text-primary font-heading mb-6">Agihan Makanan Panas ke Asnaf Yayasan Infaq Malaysia</h3>
                        <div className="grid md:grid-cols-2 gap-8 items-center">
                            <div>
                                <img src="https://images.unsplash.com/photo-1599028422864-a76c4a6ab07a?q=80&w=1974&auto=format&fit=crop" alt="Agihan Makanan" className="rounded-2xl shadow-lg"/>
                            </div>
                            <div>
                                <ul className="space-y-3 list-disc list-inside text-slate-700 font-body text-lg leading-relaxed">
                                    <li>Agihan makanan untuk 30,000 Asnaf Kanak-kanak di Lembah Kelang</li>
                                    <li>5 Jenis Kaffarah & 7 Jenis Fidyah</li>
                                    <li>Katering & Kenduri Kahwin bersama Asnaf Kanak-kanak</li>
                                </ul>
                                <p className="text-slate-700 font-body text-lg leading-relaxed mt-4">Yayasan Infaq Malaysia juga menawarkan agihan makanan panas (siap masak) kepada golongan sasar Asnaf Kanak-kanak di seluruh Kuala Lumpur dan Selangor. Program ini juga menerima penyertaan bagi mana-mana individu yang ingin menjelaskan hutang Kaffarah dan Fidyah seterusnya memberi makanan kepada Asnaf Fakir dan Asnaf Fakir Miskin. Program ini amatlah bersesuaian bagi penjawat awam mahupun swasta yang kesibukan kerja dan tidak sempat untuk menguruskan agihan makanan kaffarah dan fidyah ini di dalam bandar. YIM juga menyediakan katering bagi kenduri kahwin bagi menyantuni Asnaf Kanak-kanak. Ini adalah merupakan satu-satunya peluang Asnaf Kanak-kanak ini bagi menghadiri majlis meriah dan menjamu makanan enak kerana kebanyakan mereka tidak berpeluang sebelum ini.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer />
    </>
  );

export default ProgramUtama;
