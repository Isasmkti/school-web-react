import { SectionTitle } from '@/components/SectionTitle';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Calendar, CheckCircle, FileText, UserPlus, ArrowRight } from 'lucide-react';
import ppdbHero from '@/assets/ppdb-hero.png';

const timeline = [
    { date: '1 - 30 Juni 2024', title: 'Pendaftaran Online', desc: 'Isi formulir pendaftaran melalui website.' },
    { date: '1 - 5 Juli 2024', title: 'Verifikasi Berkas', desc: 'Verifikasi dokumen fisik di sekolah.' },
    { date: '8 Juli 2024', title: 'Tes Seleksi', desc: 'Tes tertulis dan wawancara.' },
    { date: '12 Juli 2024', title: 'Pengumuman', desc: 'Pengumuman hasil seleksi di website.' },
    { date: '15 - 17 Juli 2024', title: 'Daftar Ulang', desc: 'Pembayaran dan administrasi ulang.' },
];

const requirements = [
    'Surat Keterangan Lulus (SKL) asli dan fotokopi',
    'Fotokopi Kartu Keluarga (KK)',
    'Fotokopi Akta Kelahiran',
    'Pas foto berwarna ukuran 3x4 (4 lembar)',
    'Fotokopi Rapor semester 1-5 yang dilegalisir',
    'Sertifikat prestasi (jika ada)',
];

const faqs = [
    { q: 'Apakah ada biaya pendaftaran?', a: 'Biaya pendaftaran sebesar Rp 150.000,- untuk penggantian biaya administrasi dan tes.' },
    { q: 'Bagaimana sistem zonasinya?', a: 'Kami menerapkan sistem zonasi 50%, prestasi 30%, dan afirmasi 20%.' },
    { q: 'Apakah menerima siswa pindahan?', a: 'Ya, kami menerima siswa pindahan dengan syarat dan ketentuan yang berlaku, silakan hubungi tata usaha.' },
];

export default function Ppdb() {
    return (
        <div className="min-h-screen bg-background">
            {/* Hero Section */}
            <section className="relative h-[400px] flex items-center justify-center">
                <div className="absolute inset-0">
                    <img src={ppdbHero} alt="PPDB" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-black/60" />
                </div>
                <div className="relative z-10 text-center text-white px-4 animate-fade-in">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Penerimaan Peserta Didik Baru</h1>
                    <p className="text-xl text-gray-200 mb-8">Tahun Ajaran 2024/2025</p>
                    <Button size="lg" className="bg-primary hover:bg-primary/90">
                        Daftar Sekarang <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                </div>
            </section>

            <div className="container mx-auto px-4 py-20">
                <div className="grid md:grid-cols-3 gap-8">
                    {/* Main Content */}
                    <div className="md:col-span-2 space-y-12">
                        {/* Alur Pendaftaran */}
                        <section>
                            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                                <Calendar className="w-6 h-6 text-primary" /> Jadwal & Alur Pendaftaran
                            </h2>
                            <div className="space-y-6">
                                {timeline.map((item, index) => (
                                    <div key={index} className="flex gap-4 relative">
                                        <div className="flex flex-col items-center">
                                            <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold text-sm z-10">
                                                {index + 1}
                                            </div>
                                            {index !== timeline.length - 1 && (
                                                <div className="w-0.5 h-full bg-border absolute top-8 bottom-[-24px]" />
                                            )}
                                        </div>
                                        <div className="pb-6">
                                            <h3 className="font-bold text-lg">{item.title}</h3>
                                            <span className="text-primary font-medium text-sm block mb-1">{item.date}</span>
                                            <p className="text-muted-foreground">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* FAQ */}
                        <section>
                            <h2 className="text-2xl font-bold mb-6">Pertanyaan Umum (FAQ)</h2>
                            <Accordion type="single" collapsible className="w-full">
                                {faqs.map((faq, index) => (
                                    <AccordionItem key={index} value={`item-${index}`}>
                                        <AccordionTrigger>{faq.q}</AccordionTrigger>
                                        <AccordionContent>{faq.a}</AccordionContent>
                                    </AccordionItem>
                                ))}
                            </Accordion>
                        </section>
                    </div>

                    {/* Sidebar */}
                    <div className="space-y-8">
                        {/* Requirements Card */}
                        <Card className="border-primary/20 shadow-lg">
                            <CardHeader className="bg-primary/5 pb-4">
                                <CardTitle className="flex items-center gap-2 text-primary">
                                    <FileText className="w-5 h-5" /> Syarat Pendaftaran
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="pt-6">
                                <ul className="space-y-3">
                                    {requirements.map((req, index) => (
                                        <li key={index} className="flex items-start gap-3 text-sm">
                                            <CheckCircle className="w-5 h-5 text-green-500 shrink-0" />
                                            <span>{req}</span>
                                        </li>
                                    ))}
                                </ul>
                            </CardContent>
                        </Card>

                        {/* Contact Support */}
                        <Card>
                            <CardHeader>
                                <CardTitle className="text-lg">Butuh Bantuan?</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground text-sm mb-4">
                                    Jika Anda mengalami kesulitan dalam proses pendaftaran, silakan hubungi panitia PPDB kami.
                                </p>
                                <Button variant="outline" className="w-full">Hubungi Panitia</Button>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    );
}
