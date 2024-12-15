import React from 'react';
import { Event } from '../../types/event';

interface EventCardProps {
  event: Event;
  isAdmin?: boolean;
  onDelete?: (id: string) => void;
}

export function EventCard({ event, isAdmin, onDelete }: EventCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img
        src={event.imageUrl}
        alt={event.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
        <p className="text-gray-600 mb-4">
          {new Date(event.date).toLocaleDateString('pt-BR')}
        </p>
        <p className="text-gray-600 mb-4">{event.description}</p>
        <div className="flex justify-between items-center">
          <button className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700">
            Saiba Mais
          </button>
          {isAdmin && onDelete && (
            <button 
              onClick={() => onDelete(event._id)}
              className="text-red-600 hover:text-red-800"
            >
              Excluir
            </button>
          )}
        </div>
      </div>
    </div>
  );
}