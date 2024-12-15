import React, { useState } from 'react';
import { Calendar, Clock, MapPin } from 'lucide-react';

interface Evento {
  id: number;
  titulo: string;
  data: string;
  hora: string;
  local: string;
  descricao: string;
}

const Eventos: React.FC = () => {
  const [eventos] = useState<Evento[]>([
    {
      id: 1,
      titulo: 'Missa de Natal',
      data: '24/12/2024',
      hora: '20:00',
      local: 'Igreja Matriz',
      descricao: 'Celebração especial de Natal com coral e apresentações'
    },
    {
      id: 2,
      titulo: 'Encontro de Jovens',
      data: '15/01/2025',
      hora: '19:30',
      local: 'Salão Paroquial',
      descricao: 'Encontro mensal para jovens da comunidade'
    },
    {
      id: 3,
      titulo: 'Festa do Padroeiro',
      data: '02/02/2025',
      hora: '18:00',
      local: 'Pátio da Igreja',
      descricao: 'Tradicional festa em homenagem ao Sagrado Coração de Jesus'
    }
  ]);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-semibold text-gray-800 text-center mb-8">Próximos Eventos</h1>
      
      <div className="grid md:grid-cols-3 gap-6">
        {eventos.map((evento) => (
          <div 
            key={evento.id} 
            className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow"
          >
            <div className="flex items-center mb-4">
              <Calendar className="mr-3 text-red-600" size={32} />
              <h2 className="text-xl font-semibold text-gray-800">{evento.titulo}</h2>
            </div>
            
            <div className="space-y-2 text-gray-600">
              <div className="flex items-center">
                <Clock className="mr-2 text-red-600" size={20} />
                <span>{evento.data} - {evento.hora}</span>
              </div>
              
              <div className="flex items-center">
                <MapPin className="mr-2 text-red-600" size={20} />
                <span>{evento.local}</span>
              </div>
              
              <p className="mt-3 italic">{evento.descricao}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 text-center">
        <p className="text-gray-600">
          Quer ficar por dentro de todos os eventos? 
          <a 
            href="/contato" 
            className="ml-2 text-red-600 hover:underline"
          >
            Cadastre-se em nossa newsletter
          </a>
        </p>
      </div>
    </div>
  );
};

export default Eventos;
