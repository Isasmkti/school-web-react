import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Target, Eye, Award, Users, BookOpen, Trophy } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { NewsCard } from '@/components/NewsCard';
import { SectionTitle } from '@/components/SectionTitle';
import { newsService } from '@/services/newsService';
import { News } from '@/api/repositories/newsRepository';
import heroImage from '@/assets/hero-school.jpg';

const stats = [
  { icon: Users, label: 'Siswa Aktif', value: '850+' },
  { icon: BookOpen, label: 'Guru Berpengalaman', value: '60+' },
  { icon: Trophy, label: 'Prestasi Nasional', value: '120+' },
  { icon: Award, label: 'Akreditasi', value: 'A' },
];

const programs = [
  {
    title: 'Jurusan IPA',
    description: 'Program studi sains untuk calon ilmuwan dan dokter masa depan',
    icon: '🔬',
  },
  {
    title: 'Jurusan IPS',
    description: 'Mengembangkan pemahaman sosial dan ekonomi untuk pemimpin masa depan',
    icon: '📊',
  },
  {
    title: 'Jurusan Bahasa',
    description: 'Menguasai bahasa asing dan sastra untuk komunikator global',
    icon: '📚',
  },
];

export default function Home() {
  const [latestNews, setLatestNews] = useState<News[]>([]);

  useEffect(() => {
    loadNews();
  }, []);

  const loadNews = async () => {
    const news = await newsService.getLatestNews(3);
    setLatestNews(news);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[600px] md:h-[700px] flex items-center">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="SMA Negeri 1 Jakarta"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/60" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl text-white animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Mencetak Generasi Cerdas & Berprestasi
            </h1>
            <p className="text-lg md:text-xl mb-8 text-white/90">
              SMA Negeri 1 Jakarta - Sekolah unggulan dengan fasilitas modern, guru berkualitas, 
              dan program pendidikan inovatif untuk masa depan gemilang.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/ppdb">
                <Button size="lg" variant="secondary" className="group">
                  Daftar Sekarang
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/profil">
                <Button size="lg" variant="outline" className="bg-white/10 hover:bg-white/20 text-white border-white/30">
                  Pelajari Lebih Lanjut
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center hover:shadow-medium transition-all">
                <CardContent className="pt-6">
                  <stat.icon className="w-10 h-10 mx-auto mb-3 text-primary" />
                  <div className="text-3xl font-bold text-foreground mb-1">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="animate-slide-up">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                  <Eye className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold">Visi</h2>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Menjadi sekolah menengah atas terdepan yang menghasilkan lulusan berkualitas, 
                berkarakter mulia, berwawasan global, dan mampu berkompetisi di era digital.
              </p>
            </div>

            <div className="animate-slide-up">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-accent rounded-lg flex items-center justify-center">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold">Misi</h2>
              </div>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0" />
                  <span>Menyelenggarakan pendidikan berkualitas dengan kurikulum modern</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0" />
                  <span>Mengembangkan karakter siswa melalui kegiatan ekstrakurikuler</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0" />
                  <span>Memfasilitasi pembelajaran berbasis teknologi dan inovasi</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0" />
                  <span>Membangun kerjasama dengan berbagai pihak untuk kemajuan pendidikan</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Highlight */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="Program Pendidikan"
            subtitle="Pilih jurusan yang sesuai dengan minat dan bakatmu"
          />

          <div className="grid md:grid-cols-3 gap-8">
            {programs.map((program, index) => (
              <Card
                key={index}
                className="hover:shadow-strong transition-all duration-300 hover:-translate-y-2 group"
              >
                <CardContent className="pt-8 text-center">
                  <div className="text-6xl mb-6 group-hover:scale-110 transition-transform">
                    {program.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{program.title}</h3>
                  <p className="text-muted-foreground mb-6">{program.description}</p>
                  <Link to="/program">
                    <Button variant="outline" className="group/btn">
                      Lihat Detail
                      <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Latest News */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="Berita Terkini"
            subtitle="Informasi dan kegiatan terbaru dari sekolah kami"
          />

          <div className="grid md:grid-cols-3 gap-8">
            {latestNews.map((news) => (
              <NewsCard key={news.id} news={news} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/berita">
              <Button size="lg" variant="outline">
                Lihat Semua Berita
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{ 
            backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
            backgroundSize: '50px 50px'
          }} />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Siap Bergabung dengan Kami?
            </h2>
            <p className="text-lg md:text-xl mb-8 text-white/90">
              Pendaftaran Peserta Didik Baru tahun ajaran 2024/2025 sudah dibuka. 
              Daftarkan diri Anda sekarang dan raih masa depan gemilang!
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/ppdb">
                <Button size="lg" variant="secondary">
                  Daftar PPDB
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link to="/kontak">
                <Button size="lg" variant="outline" className="bg-white/10 hover:bg-white/20 text-white border-white/30">
                  Hubungi Kami
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
