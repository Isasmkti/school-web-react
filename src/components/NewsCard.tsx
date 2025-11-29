import { Link } from 'react-router-dom';
import { Calendar, User, ArrowRight } from 'lucide-react';
import { Card, CardContent, CardFooter, CardHeader } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { News } from '@/api/repositories/newsRepository';

interface NewsCardProps {
  news: News;
}

export const NewsCard = ({ news }: NewsCardProps) => {
  const formattedDate = new Date(news.publishedAt).toLocaleDateString('id-ID', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });

  return (
    <Card className="overflow-hidden hover:shadow-medium transition-all duration-300 group">
      <div className="relative overflow-hidden aspect-video">
        <img
          src={news.image}
          alt={news.title}
          className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
        />
        <Badge className="absolute top-4 left-4 bg-secondary">
          {news.category}
        </Badge>
      </div>
      
      <CardHeader>
        <h3 className="text-xl font-semibold line-clamp-2 group-hover:text-primary transition-colors">
          {news.title}
        </h3>
      </CardHeader>
      
      <CardContent>
        <p className="text-muted-foreground line-clamp-3">
          {news.excerpt}
        </p>
        
        <div className="flex items-center gap-4 mt-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <Calendar className="w-4 h-4" />
            <span>{formattedDate}</span>
          </div>
          <div className="flex items-center gap-1">
            <User className="w-4 h-4" />
            <span>{news.author}</span>
          </div>
        </div>
      </CardContent>
      
      <CardFooter>
        <Link to={`/berita/${news.id}`} className="w-full">
          <Button variant="ghost" className="w-full group/btn">
            Baca Selengkapnya
            <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};
