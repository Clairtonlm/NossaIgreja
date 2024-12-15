import React from 'react';
import Carousel from '../components/Carousel';
import { Calendar, Users, Clock, Heart } from 'lucide-react';
import { EventCard } from '../components/events/EventCard';
import { useEvents } from '../hooks/useEvents';

export default function Home() {
  const { events, error } = useEvents();

  return (
    <div className="min-h-screen">
      <Carousel />
      
      {/* Events Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Próximos Eventos</h2>
          {error && (
            <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-md mb-4">
              {error}
            </div>
          )}
          <div className="grid md:grid-cols-3 gap-8">
            {events.map((event) => (
              <EventCard key={event._id} event={event} />
            ))}
          </div>
        </div>
      </section>

      {/* Rest of the components remain the same */}
    </div>
  );
}