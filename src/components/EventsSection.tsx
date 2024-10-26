import React from 'react';
import { Calendar, MapPin, Users } from 'lucide-react';

const upcomingEvents = [
  {
    id: 1,
    title: 'Alumni Reunion',
    date: 'Januaury , 2024',
    location: 'Fr.CRCE, Mumbai, Maharashtra',
    attendees: 120
  },
  {
    id: 2,
    title: 'Tech Innovation Summit',
    date: 'december 22, 2024',
    location: 'Virtual Event',
    attendees: 250
  }
];

export default function EventsSection() {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Upcoming Events</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {upcomingEvents.map((event) => (
            <div
              key={event.id}
              className="bg-gray-50 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {event.title}
              </h3>
              <div className="space-y-2">
                <div className="flex items-center text-gray-600">
                  <Calendar className="h-5 w-5 mr-2" />
                  <span>{event.date}</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <MapPin className="h-5 w-5 mr-2" />
                  <span>{event.location}</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Users className="h-5 w-5 mr-2" />
                  <span>{event.attendees} Attending</span>
                </div>
              </div>
              <button className="mt-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700">
                Register Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}