import { useEffect, useState } from 'react';
import { SectionTitle } from '@/components/SectionTitle';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { majorRepository, Major } from '@/api/repositories/majorRepository';
import { extracurricularRepository, Extracurricular } from '@/api/repositories/extracurricularRepository';

export default function Program() {
  const [majors, setMajors] = useState<Major[]>([]);
  const [extracurriculars, setExtracurriculars] = useState<Extracurricular[]>([]);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    const [majorsData, ekskulData] = await Promise.all([
      majorRepository.getAll(),
      extracurricularRepository.getAll()
    ]);
    setMajors(majorsData);
    setExtracurriculars(ekskulData);
  };

  return (
    <div className="min-h-screen bg-background">
      <section className="pt-24 pb-12 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Program Pendidikan</h1>
            <p className="text-lg text-white/90">Pilihan jurusan dan ekstrakurikuler untuk mengembangkan potensi siswa</p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <SectionTitle title="Jurusan" subtitle="Pilih jurusan sesuai minat dan bakatmu" />
          <div className="grid md:grid-cols-3 gap-8">
            {majors.map((major) => (
              <Card key={major.id} className="hover:shadow-strong transition-all">
                <CardHeader>
                  <h3 className="text-2xl font-bold">{major.name}</h3>
                  <Badge className="w-fit mt-2">Kapasitas: {major.capacity} siswa</Badge>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{major.description}</p>
                  <div className="space-y-2">
                    <p className="font-semibold">Mata Pelajaran:</p>
                    <div className="flex flex-wrap gap-2">
                      {major.subjects.map((subject, idx) => (
                        <Badge key={idx} variant="outline">{subject}</Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <SectionTitle title="Ekstrakurikuler" subtitle="Kembangkan bakat dan minatmu" />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {extracurriculars.map((ekskul) => (
              <Card key={ekskul.id} className="hover:shadow-medium transition-all">
                <CardContent className="pt-6">
                  <Badge className="mb-4">{ekskul.category}</Badge>
                  <h3 className="text-xl font-semibold mb-2">{ekskul.name}</h3>
                  <p className="text-muted-foreground mb-4">{ekskul.description}</p>
                  <div className="space-y-2 text-sm">
                    <p><span className="font-semibold">Jadwal:</span> {ekskul.schedule}</p>
                    <p><span className="font-semibold">Pembina:</span> {ekskul.coach}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
