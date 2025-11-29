import { announcementRepository, Announcement } from '@/api/repositories/announcementRepository';

export const announcementService = {
  getAllAnnouncements: async (): Promise<Announcement[]> => {
    try {
      const announcements = await announcementRepository.getAll();
      // Sort by date descending and priority
      return announcements.sort((a, b) => {
        // First sort by priority
        const priorityOrder: Record<string, number> = { high: 1, medium: 2, low: 3 };
        const priorityDiff = (priorityOrder[a.priority] || 999) - (priorityOrder[b.priority] || 999);
        if (priorityDiff !== 0) return priorityDiff;
        
        // Then by date
        return new Date(b.date).getTime() - new Date(a.date).getTime();
      });
    } catch (error) {
      console.error('Error fetching announcements:', error);
      return [];
    }
  },

  getHighPriorityAnnouncements: async (): Promise<Announcement[]> => {
    try {
      return await announcementRepository.getByPriority('high');
    } catch (error) {
      console.error('Error fetching high priority announcements:', error);
      return [];
    }
  },

  getRecentAnnouncements: async (limit: number = 5): Promise<Announcement[]> => {
    try {
      const announcements = await announcementService.getAllAnnouncements();
      return announcements.slice(0, limit);
    } catch (error) {
      console.error('Error fetching recent announcements:', error);
      return [];
    }
  }
};
