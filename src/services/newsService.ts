import { newsRepository, News } from '@/api/repositories/newsRepository';

export const newsService = {
  getAllNews: async (): Promise<News[]> => {
    try {
      const news = await newsRepository.getAll();
      // Sort by date descending (newest first)
      return news.sort((a, b) => 
        new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
      );
    } catch (error) {
      console.error('Error fetching news:', error);
      return [];
    }
  },

  getNewsById: async (id: string): Promise<News | null> => {
    try {
      return await newsRepository.getById(id);
    } catch (error) {
      console.error('Error fetching news:', error);
      return null;
    }
  },

  getNewsBySlug: async (slug: string): Promise<News | null> => {
    try {
      return await newsRepository.getBySlug(slug);
    } catch (error) {
      console.error('Error fetching news by slug:', error);
      return null;
    }
  },

  getLatestNews: async (limit: number = 3): Promise<News[]> => {
    try {
      const news = await newsRepository.getAll();
      return news
        .sort((a, b) => 
          new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
        )
        .slice(0, limit);
    } catch (error) {
      console.error('Error fetching latest news:', error);
      return [];
    }
  },

  searchNews: async (query: string): Promise<News[]> => {
    try {
      const news = await newsRepository.getAll();
      const lowercaseQuery = query.toLowerCase();
      return news.filter(n => 
        n.title.toLowerCase().includes(lowercaseQuery) ||
        n.excerpt.toLowerCase().includes(lowercaseQuery) ||
        n.tags.some(tag => tag.toLowerCase().includes(lowercaseQuery))
      );
    } catch (error) {
      console.error('Error searching news:', error);
      return [];
    }
  }
};
