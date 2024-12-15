import React, { useState } from 'react';
import { PlusCircle, List, LogOut } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import { EventForm } from '../components/events/EventForm';
import { EventCard } from '../components/events/EventCard';
import { useEvents } from '../hooks/useEvents';
import { EventFormData } from '../types/event';

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState('events');
  const [formData, setFormData] = useState<EventFormData>({
    title: '',
    date: '',
    description: '',
    imageUrl: ''
  });

  const { userName, logout } = useAuth();
  const { events, error, createEvent, deleteEvent } = useEvents();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const success = await createEvent(formData);
    if (success) {
      setFormData({ title: '', date: '', description: '', imageUrl: '' });
      setActiveTab('events');
    }
  };

  const handleFormChange = (field: keyof EventFormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleDelete = async (id: string) => {
    if (window.confirm('Tem certeza que deseja excluir este evento?')) {
      await deleteEvent(id);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 pt-20">
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold">Painel Administrativo</h1>
            <p className="text-gray-600">Bem-vindo(a), {userName}!</p>
          </div>
          <button
            onClick={logout}
            className="flex items-center gap-2 bg-gray-200 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-300 transition-colors"
          >
            <LogOut size={20} />
            Sair
          </button>
        </div>

        {error && (
          <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-md mb-4">
            {error}
          </div>
        )}
        
        <div className="bg-white rounded-lg shadow-md">
          <div className="border-b">
            <div className="flex">
              <button
                className={`px-6 py-4 flex items-center gap-2 ${
                  activeTab === 'events' ? 'border-b-2 border-red-600 text-red-600' : 'text-gray-600'
                }`}
                onClick={() => setActiveTab('events')}
              >
                <List size={20} />
                Eventos
              </button>
              <button
                className={`px-6 py-4 flex items-center gap-2 ${
                  activeTab === 'add-event' ? 'border-b-2 border-red-600 text-red-600' : 'text-gray-600'
                }`}
                onClick={() => setActiveTab('add-event')}
              >
                <PlusCircle size={20} />
                Adicionar Evento
              </button>
            </div>
          </div>

          <div className="p-6">
            {activeTab === 'events' ? (
              <div>
                <h2 className="text-xl font-semibold mb-4">Eventos Cadastrados</h2>
                <div className="grid gap-6">
                  {events.map((event) => (
                    <EventCard
                      key={event._id}
                      event={event}
                      isAdmin
                      onDelete={handleDelete}
                    />
                  ))}
                </div>
              </div>
            ) : (
              <div>
                <h2 className="text-xl font-semibold mb-4">Adicionar Novo Evento</h2>
                <EventForm
                  formData={formData}
                  onSubmit={handleSubmit}
                  onChange={handleFormChange}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}