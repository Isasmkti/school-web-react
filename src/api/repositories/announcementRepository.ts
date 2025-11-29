import announcementsData from '../mock/announcements.json';

export interface Announcement {
  id: string;
  title: string;
  content: string;
  date: string;
  priority: 'high' | 'medium' | 'low';
  category: string;
}

export const announcementRepository = {
  getAll: async (): Promise<Announcement[]> => {
    await new Promise(resolve => setTimeout(resolve, 300));
    return announcementsData as Announcement[];
  },

  getById: async (id: string): Promise<Announcement | null> => {
    await new Promise(resolve => setTimeout(resolve, 200));
    const announcement = announcementsData.find(a => a.id === id);
    return (announcement as Announcement) || null;
  },

  getByPriority: async (priority: string): Promise<Announcement[]> => {
    await new Promise(resolve => setTimeout(resolve, 200));
    return announcementsData.filter(a => a.priority === priority) as Announcement[];
  }
};
