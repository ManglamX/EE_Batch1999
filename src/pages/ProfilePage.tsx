import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, MapPin, Mail, Phone, Linkedin, Award, Building } from 'lucide-react';
import { alumniData } from '../data/alumni';

export default function ProfilePage() {
  const { id } = useParams<{ id: string }>();
  const alumni = alumniData.find((a) => a.id === id);

  if (!alumni) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900">Alumni not found</h2>
          <Link
            to="/directory"
            className="mt-4 inline-flex items-center text-blue-600 hover:text-blue-800"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Directory
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          to="/directory"
          className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-8"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Directory
        </Link>

        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="relative h-70 sm:h-70">
            <img
              src={alumni.photo}
              alt={alumni.name}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="p-8">
            <div className="sm:flex sm:items-center sm:justify-between">
              <div>
                <h1 className="text-3xl font-bold text-gray-900">{alumni.name}</h1>
                <p className="mt-2 text-xl text-gray-600">
                  {alumni.currentRole} at {alumni.company}
                </p>
              </div>
            </div>

            <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-4">
                  Contact Information
                </h2>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <MapPin className="h-5 w-5 text-gray-400 mr-2" />
                    <span>{alumni.location}</span>
                  </div>
                  <div className="flex items-center">
                    <Mail className="h-5 w-5 text-gray-400 mr-2" />
                    <a
                      href={`mailto:${alumni.email}`}
                      className="text-blue-600 hover:text-blue-800"
                    >
                      {alumni.email}
                    </a>
                  </div>
                  <div className="flex items-center">
                    <Phone className="h-5 w-5 text-gray-400 mr-2" />
                    <span>{alumni.phone}</span>
                  </div>
                  <div className="flex items-center">
                    <Linkedin className="h-5 w-5 text-gray-400 mr-2" />
                    <a
                      href={`https://${alumni.linkedin}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800"
                    >
                      {alumni.linkedin}
                    </a>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-4">
                  Top Skills
                </h2>
                <ul className="space-y-3">
                  {alumni.topskills.map((topskills, index) => (
                    <li key={index} className="flex items-start">
                      <Award className="h-5 w-5 text-yellow-500 mr-2 mt-1" />
                      <span>{topskills}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-4">
                  Professional Experience
                </h2>
                <div className="space-y-4">
                  {alumni.experience.map((exp, index) => (
                    <div key={index} className="flex items-start">
                      <Building className="h-5 w-5 text-gray-400 mr-2 mt-1" />
                      <div>
                        <h3 className="font-medium text-gray-900">{exp.role}</h3>
                        <p className="text-gray-600">{exp.company}</p>
                        <p className="text-sm text-gray-500">{exp.duration}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-4">
                  Education
                </h2>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <Building className="h-5 w-5 text-gray-400 mr-2 mt-1" />
                    <div>
                      <p className="text-sm text-gray-500">{alumni.Education}</p>
                    </div>
                  </div>
                  <h2 className="text-xl font-semibold text-gray-900 mb-4">
                  Higher Education
                </h2>
                  {alumni.HigherEducation && (
                    <div className="flex items-center">
                      <Building className="h-5 w-5 text-gray-400 mr-2 mt-1" />
                      <div>
                        <p className="text-sm text-gray-500">{alumni.HigherEducation}</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}