import { useState } from 'react';
import { alumniData } from '../data/alumni';
import SearchBar from '../components/SearchBar';
import FeaturedAlumni from '../components/FeaturedAlumni';
import EventsSection from '../components/EventsSection';
import AlumniCard from '../components/AlumniCard';

export default function HomePage() {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredAlumni = alumniData.filter((alumni) =>
    alumni.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Fr.Conceicao Rodrigues College of Engineering
           <p className='mt-4'> Electronics Engineering Batch of 1999</p>

          </h1>
          <p className="text-xl text-gray-600">
            Connecting pioneers in technology for over two decades
          </p>
          
        </div>

        <div className="flex justify-center mb-12">
          <SearchBar value={searchQuery} onChange={setSearchQuery} />
        </div>

        {searchQuery && (
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Search Results
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredAlumni.map((alumni) => (
                <AlumniCard key={alumni.id} alumni={alumni} />
              ))}
            </div>
          </div>
        )}

        <FeaturedAlumni alumni={alumniData} />
        <EventsSection />
      </div>
    </div>
  );
}


