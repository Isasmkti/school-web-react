import { Card, CardContent, CardHeader } from './ui/card';
import { Badge } from './ui/badge';
import { GraduationCap, Briefcase } from 'lucide-react';
import { Teacher } from '@/api/repositories/teacherRepository';

interface TeacherCardProps {
  teacher: Teacher;
}

export const TeacherCard = ({ teacher }: TeacherCardProps) => {
  return (
    <Card className="overflow-hidden hover:shadow-medium transition-all duration-300 group">
      <CardHeader className="relative p-0">
        <div className="aspect-square overflow-hidden bg-muted">
          <img
            src={teacher.photo}
            alt={teacher.name}
            className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
          />
        </div>
        <Badge className="absolute top-4 right-4 bg-primary">
          {teacher.position}
        </Badge>
      </CardHeader>
      
      <CardContent className="p-6">
        <h3 className="text-xl font-semibold mb-2">{teacher.name}</h3>
        <p className="text-primary font-medium mb-4">{teacher.subject}</p>
        
        <div className="space-y-2 text-sm text-muted-foreground">
          <div className="flex items-start gap-2">
            <GraduationCap className="w-4 h-4 mt-0.5 flex-shrink-0" />
            <span>{teacher.education}</span>
          </div>
          <div className="flex items-center gap-2">
            <Briefcase className="w-4 h-4 flex-shrink-0" />
            <span>Pengalaman: {teacher.experience}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
