import { useEffect, useState } from 'react';
import { Users, Building, History } from 'lucide-react';
import { SectionTitle } from '@/components/SectionTitle';
import { TeacherCard } from '@/components/TeacherCard';
import { Card, CardContent } from '@/components/ui/card';
import { teacherService } from '@/services/teacherService';
import { Teacher } from '@/api/repositories/teacherRepository';

export default function Profil() {
  const [teachers, setTeachers] = useState<Teacher[]>([]);

  useEffect(() => {
    loadTeachers();
  }, []);

  const loadTeachers = async () => {
    const data = await teacherService.getAllTeachers();
    setTeachers(data);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Profil Sekolah</h1>
            <p className="text-lg text-white/90">
              Mengenal lebih dekat SMA Negeri 1 Jakarta
            </p>
          </div>
        </div>
      </section>

      {/* Sejarah */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                <History className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-3xl font-bold">Sejarah Singkat</h2>
            </div>
            
            <div className="prose prose-lg max-w-none text-muted-foreground">
              <p className="mb-4">
                SMA Negeri 1 Jakarta didirikan pada tahun 1950 sebagai salah satu sekolah menengah atas 
                pertama di Jakarta. Sejak awal berdirinya, sekolah ini telah berkomitmen untuk memberikan 
                pendidikan berkualitas tinggi yang tidak hanya fokus pada akademik, tetapi juga pengembangan 
                karakter dan soft skills siswa.
              </p>
              <p className="mb-4">
                Dalam perjalanannya, SMA Negeri 1 Jakarta telah mengalami berbagai perkembangan signifikan. 
                Dari gedung sederhana dengan fasilitas terbatas, kini sekolah ini telah berkembang menjadi 
                institusi pendidikan modern dengan fasilitas lengkap termasuk laboratorium komputer, 
                laboratorium sains, perpustakaan digital, dan lapangan olahraga yang memadai.
              </p>
              <p>
                Alumni SMA Negeri 1 Jakarta telah tersebar di berbagai bidang profesi dan banyak yang 
                menjadi tokoh-tokoh penting dalam pembangunan bangsa. Prestasi sekolah juga terus 
                meningkat, dengan berbagai penghargaan di tingkat provinsi hingga nasional.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Struktur Organisasi */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="Struktur Organisasi"
            subtitle="Kepemimpinan yang berpengalaman dan berdedikasi"
          />

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {teachers.slice(0, 3).map((teacher) => (
              <TeacherCard key={teacher.id} teacher={teacher} />
            ))}
          </div>
        </div>
      </section>

      {/* Daftar Guru */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="Dewan Guru"
            subtitle="Guru-guru berkualitas dan berpengalaman"
          />

          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
            {teachers.slice(3).map((teacher) => (
              <Card key={teacher.id} className="hover:shadow-medium transition-all">
                <CardContent className="pt-6 text-center">
                  <div className="w-20 h-20 rounded-full bg-muted mx-auto mb-4 overflow-hidden">
                    <img
                      src={teacher.photo}
                      alt={teacher.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="font-semibold mb-1">{teacher.name}</h3>
                  <p className="text-sm text-primary mb-1">{teacher.subject}</p>
                  <p className="text-xs text-muted-foreground">{teacher.experience}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Fasilitas */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="Fasilitas Sekolah"
            subtitle="Fasilitas modern untuk mendukung pembelajaran"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: '💻', title: 'Lab Komputer', desc: '3 laboratorium dengan 120 unit komputer modern' },
              { icon: '🔬', title: 'Lab Sains', desc: 'Laboratorium Fisika, Kimia, dan Biologi lengkap' },
              { icon: '📚', title: 'Perpustakaan', desc: '10,000+ koleksi buku dan jurnal digital' },
              { icon: '🏀', title: 'Lapangan Olahraga', desc: 'Basket, voli, futsal, dan atletik' },
              { icon: '🎭', title: 'Aula', desc: 'Kapasitas 500 orang untuk berbagai acara' },
              { icon: '🍽️', title: 'Kantin', desc: 'Kantin bersih dengan menu sehat dan bergizi' },
            ].map((facility, index) => (
              <Card key={index} className="hover:shadow-medium transition-all">
                <CardContent className="pt-6">
                  <div className="text-4xl mb-4">{facility.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{facility.title}</h3>
                  <p className="text-muted-foreground">{facility.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
