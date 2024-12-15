import React from 'react';
import { EventFormData } from '../../types/event';

interface EventFormProps {
  formData: EventFormData;
  onSubmit: (e: React.FormEvent) => void;
  onChange: (field: keyof EventFormData, value: string) => void;
}

export function EventForm({ formData, onSubmit, onChange }: EventFormProps) {
  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div>
        <label className="block text-gray-700 mb-2">Título do Evento</label>
        <input
          type="text"
          value={formData.title}
          onChange={(e) => onChange('title', e.target.value)}
          className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-600"
          required
        />
      </div>
      <div>
        <label className="block text-gray-700 mb-2">Data</label>
        <input
          type="date"
          value={formData.date}
          onChange={(e) => onChange('date', e.target.value)}
          className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-600"
          required
        />
      </div>
      <div>
        <label className="block text-gray-700 mb-2">Descrição</label>
        <textarea
          value={formData.description}
          onChange={(e) => onChange('description', e.target.value)}
          className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-600"
          rows={4}
          required
        />
      </div>
      <div>
        <label className="block text-gray-700 mb-2">URL da Imagem</label>
        <input
          type="url"
          value={formData.imageUrl}
          onChange={(e) => onChange('imageUrl', e.target.value)}
          className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-600"
          placeholder="https://exemplo.com/imagem.jpg"
          required
        />
      </div>
      <button
        type="submit"
        className="bg-red-600 text-white px-6 py-2 rounded-md hover:bg-red-700"
      >
        Salvar Evento
      </button>
    </form>
  );
}