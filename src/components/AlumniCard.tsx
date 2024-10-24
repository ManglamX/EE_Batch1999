import React from 'react';
import { MapPin, Briefcase, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Alumni } from '../data/alumni';

interface AlumniCardProps {
  alumni: Alumni;
}

export default function AlumniCard({ alumni }: AlumniCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-[1.02]">
      <div className="aspect-w-16 aspect-h-9 relative h-48">
        <img
          src={alumni.photo}
          alt={alumni.name}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900">{alumni.name}</h3>
        <div className="mt-2 flex items-center text-sm text-gray-500">
          <Briefcase className="h-4 w-4 mr-1" />
          <span>{alumni.currentRole}</span>
        </div>
        <div className="mt-1 flex items-center text-sm text-gray-500">
          <MapPin className="h-4 w-4 mr-1" />
          <span>{alumni.location}</span>
        </div>
        <Link
          to={`/alumni/${alumni.id}`}
          className="mt-4 inline-flex items-center text-blue-600 hover:text-blue-800"
        >
          View Profile
          <ArrowRight className="ml-1 h-4 w-4" />
        </Link>
      </div>
    </div>
  );
}