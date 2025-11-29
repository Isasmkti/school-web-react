import { SectionTitle } from '@/components/SectionTitle';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import gallery1 from '@/assets/gallery-1.png';
import heroImage from '@/assets/hero-school.jpg';
import schoolBuilding from '@/assets/school-building.png';

const galleries = [
    {
        category: 'Kegiatan',
        images: [
            { src: gallery1, title: 'Science Fair 2024', date: '20 Nov 2024' },
            { src: heroImage, title: 'Upacara Bendera', date: '17 Aug 2024' },
            { src: gallery1, title: 'Lomba Debat', date: '15 Oct 2024' },
            { src: heroImage, title: 'Class Meeting', date: '10 Dec 2024' },
        ]
    },
    {
        category: 'Fasilitas',
        images: [
            { src: schoolBuilding, title: 'Gedung Utama', date: '2024' },
            { src: heroImage, title: 'Lapangan Olahraga', date: '2024' },
            { src: schoolBuilding, title: 'Perpustakaan', date: '2024' },
        ]
    },
    {
        category: 'Prestasi',
        images: [
            { src: gallery1, title: 'Juara 1 Olimpiade Matematika', date: '05 Sep 2024' },
            { src: heroImage, title: 'Juara 2 Basket Tingkat Kota', date: '20 Aug 2024' },
        ]
    }
];

export default function Galeri() {
    return (
        <div className="min-h-screen bg-background pt-24 pb-20">
            <div className="container mx-auto px-4">
                <SectionTitle
                    title="Galeri Sekolah"
                    subtitle="Dokumentasi kegiatan, fasilitas, dan prestasi siswa SMA Negeri 1 Jakarta"
                />

                <Tabs defaultValue="Kegiatan" className="w-full">
                    <div className="flex justify-center mb-8">
                        <TabsList className="grid w-full max-w-[400px] grid-cols-3">
                            <TabsTrigger value="Kegiatan">Kegiatan</TabsTrigger>
                            <TabsTrigger value="Fasilitas">Fasilitas</TabsTrigger>
                            <TabsTrigger value="Prestasi">Prestasi</TabsTrigger>
                        </TabsList>
                    </div>

                    {galleries.map((gallery) => (
                        <TabsContent key={gallery.category} value={gallery.category} className="animate-fade-in">
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {gallery.images.map((image, index) => (
                                    <Card key={index} className="overflow-hidden group cursor-pointer hover:shadow-lg transition-all duration-300">
                                        <CardContent className="p-0 relative aspect-video">
                                            <img
                                                src={image.src}
                                                alt={image.title}
                                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                            />
                                            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-white p-4 text-center">
                                                <h3 className="font-bold text-lg mb-1">{image.title}</h3>
                                                <p className="text-sm text-gray-200">{image.date}</p>
                                            </div>
                                        </CardContent>
                                    </Card>
                                ))}
                            </div>
                        </TabsContent>
                    ))}
                </Tabs>
            </div>
        </div>
    );
}
