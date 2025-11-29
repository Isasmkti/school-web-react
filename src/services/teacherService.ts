import { teacherRepository, Teacher } from '@/api/repositories/teacherRepository';

export const teacherService = {
  getAllTeachers: async (): Promise<Teacher[]> => {
    try {
      const teachers = await teacherRepository.getAll();
      // Sort by position priority: Kepala Sekolah, Wakil, then Guru
      return teachers.sort((a, b) => {
        const priority: Record<string, number> = {
          'Kepala Sekolah': 1,
          'Wakil Kepala Kurikulum': 2,
          'Guru': 3
        };
        return (priority[a.position] || 999) - (priority[b.position] || 999);
      });
    } catch (error) {
      console.error('Error fetching teachers:', error);
      return [];
    }
  },

  getTeacherById: async (id: string): Promise<Teacher | null> => {
    try {
      return await teacherRepository.getById(id);
    } catch (error) {
      console.error('Error fetching teacher:', error);
      return null;
    }
  },

  getLeadership: async (): Promise<Teacher[]> => {
    try {
      const teachers = await teacherRepository.getAll();
      return teachers.filter(t => 
        t.position === 'Kepala Sekolah' || t.position.includes('Wakil')
      );
    } catch (error) {
      console.error('Error fetching leadership:', error);
      return [];
    }
  }
};
