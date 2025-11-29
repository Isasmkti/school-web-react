import newsData from '../mock/news.json';

export interface News {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  image: string;
  category: string;
  author: string;
  publishedAt: string;
  tags: string[];
}

export const newsRepository = {
  getAll: async (): Promise<News[]> => {
    await new Promise(resolve => setTimeout(resolve, 300));
    return newsData;
  },

  getById: async (id: string): Promise<News | null> => {
    await new Promise(resolve => setTimeout(resolve, 200));
    const news = newsData.find(n => n.id === id);
    return news || null;
  },

  getBySlug: async (slug: string): Promise<News | null> => {
    await new Promise(resolve => setTimeout(resolve, 200));
    const news = newsData.find(n => n.slug === slug);
    return news || null;
  },

  getByCategory: async (category: string): Promise<News[]> => {
    await new Promise(resolve => setTimeout(resolve, 200));
    return newsData.filter(n => n.category === category);
  }
};
