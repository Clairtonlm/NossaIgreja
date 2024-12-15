export interface Event {
  _id: string;
  title: string;
  date: string;
  description: string;
  imageUrl: string;
  createdAt?: string;
}

export interface EventFormData {
  title: string;
  date: string;
  description: string;
  imageUrl: string;
}