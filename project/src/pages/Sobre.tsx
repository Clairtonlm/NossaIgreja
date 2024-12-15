import React from 'react';
import { Church, Heart, Users } from 'lucide-react';

const Sobre: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-semibold text-gray-800 text-center mb-8">Sobre Nossa Igreja</h1>
      
      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-white shadow-md rounded-lg p-6 text-center">
          <Church className="mx-auto mb-4 text-red-600" size={64} />
          <h2 className="text-xl font-semibold mb-3 text-gray-800">Nossa História</h2>
          <p className="text-gray-600">
            Fundada em 1950, a Igreja do Sagrado Coração de Jesus tem uma rica tradição 
            de fé, comunidade e serviço, sempre comprometida em espalhar o amor de Cristo.
          </p>
        </div>
        
        <div className="bg-white shadow-md rounded-lg p-6 text-center">
          <Heart className="mx-auto mb-4 text-red-600" size={64} />
          <h2 className="text-xl font-semibold mb-3 text-gray-800">Nossa Missão</h2>
          <p className="text-gray-600">
            Promover o amor de Deus, servir a comunidade e oferecer um espaço acolhedor 
            para crescimento espiritual e conexão fraterna.
          </p>
        </div>
        
        <div className="bg-white shadow-md rounded-lg p-6 text-center">
          <Users className="mx-auto mb-4 text-red-600" size={64} />
          <h2 className="text-xl font-semibold mb-3 text-gray-800">Nossos Valores</h2>
          <p className="text-gray-600">
            Baseados nos ensinamentos de Cristo, valorizamos a compaixão, 
            o serviço comunitário, o amor ao próximo e o crescimento espiritual.
          </p>
        </div>
      </div>

      <div className="mt-12 bg-gray-100 rounded-lg p-8">
        <h2 className="text-2xl font-semibold mb-6 text-gray-800">Liderança</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-xl font-semibold text-red-600">Padre Responsável</h3>
            <p className="text-gray-700">Pe. João Silva</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-red-600">Coordenação Paroquial</h3>
            <p className="text-gray-700">Maria Santos</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sobre;
