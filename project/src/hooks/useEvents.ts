import { useState, useEffect, useCallback } from 'react';
import { Event, EventFormData } from '../types/event';
import { EventService } from '../services/api';

export function useEvents() {
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const loadEvents = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await EventService.getAllEvents();
      setEvents(data);
    } catch (err) {
      setError('Erro ao carregar eventos');
      console.error('Error loading events:', err);
    } finally {
      setLoading(false);
    }
  }, []);

  const createEvent = async (eventData: EventFormData) => {
    try {
      setError(null);
      await EventService.createEvent(eventData);
      await loadEvents();
      return true;
    } catch (err) {
      setError('Erro ao criar evento');
      console.error('Error creating event:', err);
      return false;
    }
  };

  const deleteEvent = async (id: string) => {
    try {
      setError(null);
      await EventService.deleteEvent(id);
      await loadEvents();
      return true;
    } catch (err) {
      setError('Erro ao excluir evento');
      console.error('Error deleting event:', err);
      return false;
    }
  };

  useEffect(() => {
    loadEvents();
  }, [loadEvents]);

  return {
    events,
    loading,
    error,
    loadEvents,
    createEvent,
    deleteEvent
  };
}