import React from 'react';
import { 
  Clock, 
  Book, 
  Rosary, 
  Church,
  Users
} from 'lucide-react';

const Programacao: React.FC = () => {
  const horarios = [
    {
      icone: Book,
      cor: 'text-red-600',
      titulo: 'Missas',
      detalhes: [
        'Segunda a Sexta: 07:00 e 19:00',
        'Sábado: 18:00',
        'Domingo: 08:00, 10:00 e 19:00'
      ]
    },
    {
      icone: Rosary,
      cor: 'text-red-600',
      titulo: 'Terço',
      detalhes: [
        'Terça-feira: 18:30',
        'Primeira sexta do mês: 06:30',
        'Sábado: 17:00'
      ]
    },
    {
      icone: Users,
      cor: 'text-red-600',
      titulo: 'Grupos de Pastoral',
      detalhes: [
        'Pastoral da Caridade: Quarta-feira 20:00',
        'Grupo de Jovens: Sexta-feira 20:00',
        'Catequese: Sábado 10:00'
      ]
    },
    {
      icone: Church,
      cor: 'text-red-600',
      titulo: 'Horário de Atendimento',
      detalhes: [
        'Secretaria: Seg a Sex 08:00-12:00 / 14:00-18:00',
        'Confissões: Sábado 16:00-17:30',
        'Plantão Pastoral: Sempre disponível'
      ]
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-semibold text-gray-800 text-center mb-8">
        Nossa Programação
      </h1>
      
      <div className="grid md:grid-cols-2 gap-6">
        {horarios.map((item, index) => (
          <div 
            key={index} 
            className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow"
          >
            <div className="flex items-center mb-4">
              <item.icone className={`mr-3 ${item.cor}`} size={40} />
              <h2 className="text-2xl font-semibold text-gray-800">{item.titulo}</h2>
            </div>
            
            <div className="space-y-2 text-gray-600">
              {item.detalhes.map((detalhe, idx) => (
                <div key={idx} className="flex items-center">
                  <Clock className="mr-2 text-red-600" size={20} />
                  <span>{detalhe}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 bg-gray-100 rounded-lg p-8 text-center">
        <h3 className="text-2xl font-semibold mb-4 text-gray-800">
          Horários Sujeitos a Alterações
        </h3>
        <p className="text-gray-700">
          Recomendamos sempre verificar os horários com a secretaria paroquial 
          ou consultar os avisos no átrio da igreja.
        </p>
      </div>
    </div>
  );
};

export default Programacao;
