import extracurricularData from '../mock/extracurricular.json';

export interface Extracurricular {
  id: string;
  name: string;
  category: string;
  description: string;
  schedule: string;
  coach: string;
  achievements: string[];
  icon: string;
}

export const extracurricularRepository = {
  getAll: async (): Promise<Extracurricular[]> => {
    await new Promise(resolve => setTimeout(resolve, 300));
    return extracurricularData;
  },

  getById: async (id: string): Promise<Extracurricular | null> => {
    await new Promise(resolve => setTimeout(resolve, 200));
    const ekskul = extracurricularData.find(e => e.id === id);
    return ekskul || null;
  },

  getByCategory: async (category: string): Promise<Extracurricular[]> => {
    await new Promise(resolve => setTimeout(resolve, 200));
    return extracurricularData.filter(e => e.category === category);
  }
};
