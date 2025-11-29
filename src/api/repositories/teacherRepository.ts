import teachersData from '../mock/teachers.json';

export interface Teacher {
  id: string;
  name: string;
  position: string;
  subject: string;
  photo: string;
  education: string;
  experience: string;
}

export const teacherRepository = {
  getAll: async (): Promise<Teacher[]> => {
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 300));
    return teachersData;
  },

  getById: async (id: string): Promise<Teacher | null> => {
    await new Promise(resolve => setTimeout(resolve, 200));
    const teacher = teachersData.find(t => t.id === id);
    return teacher || null;
  },

  getByPosition: async (position: string): Promise<Teacher[]> => {
    await new Promise(resolve => setTimeout(resolve, 200));
    return teachersData.filter(t => t.position === position);
  }
};
