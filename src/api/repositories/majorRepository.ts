import majorsData from '../mock/majors.json';

export interface Major {
  id: string;
  name: string;
  description: string;
  subjects: string[];
  capacity: number;
  icon: string;
  image: string;
  careerPaths: string[];
}

export const majorRepository = {
  getAll: async (): Promise<Major[]> => {
    await new Promise(resolve => setTimeout(resolve, 300));
    return majorsData;
  },

  getById: async (id: string): Promise<Major | null> => {
    await new Promise(resolve => setTimeout(resolve, 200));
    const major = majorsData.find(m => m.id === id);
    return major || null;
  }
};
