import axios, { AxiosError } from 'axios';
import { Event, EventFormData } from '../types/event';

const api = axios.create({
  baseURL: 'http://localhost:5000/api'
});

export const EventService = {
  getAllEvents: async (): Promise<Event[]> => {
    try {
      const response = await api.get<Event[]>('/events');
      return response.data;
    } catch (error) {
      if (error instanceof AxiosError) {
        throw new Error(error.response?.data?.message || 'Failed to fetch events');
      }
      throw error;
    }
  },

  createEvent: async (eventData: EventFormData): Promise<Event> => {
    try {
      const response = await api.post<Event>('/events', eventData);
      return response.data;
    } catch (error) {
      if (error instanceof AxiosError) {
        throw new Error(error.response?.data?.message || 'Failed to create event');
      }
      throw error;
    }
  },

  deleteEvent: async (id: string): Promise<void> => {
    try {
      await api.delete(`/events/${id}`);
    } catch (error) {
      if (error instanceof AxiosError) {
        throw new Error(error.response?.data?.message || 'Failed to delete event');
      }
      throw error;
    }
  }
};