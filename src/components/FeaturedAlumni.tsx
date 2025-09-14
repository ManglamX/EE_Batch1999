import { Trophy } from 'lucide-react';
import { Alumni } from '../data/alumni';
import AlumniCard from './AlumniCard';

interface FeaturedAlumniProps {
  alumni: Alumni[];
}

export default function FeaturedAlumni({ alumni }: FeaturedAlumniProps) {
  const featuredAlumni = alumni.filter(a => a.featured);

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center mb-8">
          <Trophy className="h-8 w-8 text-yellow-500 mr-3" />
          <h2 className="text-3xl font-bold text-gray-900">Featured Alumni</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredAlumni.map((alumni) => (
            <AlumniCard key={alumni.id} alumni={alumni} />
          ))}
        </div>
      </div>
    </section>
  );
}


