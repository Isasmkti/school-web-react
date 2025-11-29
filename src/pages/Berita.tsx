import { useEffect, useState } from 'react';
import { SectionTitle } from '@/components/SectionTitle';
import { NewsCard } from '@/components/NewsCard';
import { newsService } from '@/services/newsService';
import { News } from '@/api/repositories/newsRepository';

export default function Berita() {
  const [news, setNews] = useState<News[]>([]);

  useEffect(() => {
    loadNews();
  }, []);

  const loadNews = async () => {
    const data = await newsService.getAllNews();
    setNews(data);
  };

  return (
    <div className="min-h-screen bg-background">
      <section className="pt-24 pb-12 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Berita & Pengumuman</h1>
            <p className="text-lg text-white/90">Informasi terkini dari SMA Negeri 1 Jakarta</p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {news.map((item) => (
              <NewsCard key={item.id} news={item} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
