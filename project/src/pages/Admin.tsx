import React from 'react';
import { Calendar, PlusCircle, List } from 'lucide-react';

export default function Admin() {
  const [activeTab, setActiveTab] = React.useState('events');

  return (
    <div className="min-h-screen bg-gray-100 pt-20">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Painel Administrativo</h1>
        
        <div className="bg-white rounded-lg shadow-md">
          {/* Tabs */}
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

          {/* Content */}
          <div className="p-6">
            {activeTab === 'events' ? (
              <div>
                <h2 className="text-xl font-semibold mb-4">Eventos Cadastrados</h2>
                <div className="space-y-4">
                  {/* Event List */}
                  <div className="border rounded-lg p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-semibold">Festa do Sagrado Coração</h3>
                        <p className="text-gray-600">15 de Junho, 2024</p>
                      </div>
                      <div className="flex gap-2">
                        <button className="text-blue-600 hover:text-blue-800">Editar</button>
                        <button className="text-red-600 hover:text-red-800">Excluir</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div>
                <h2 className="text-xl font-semibold mb-4">Adicionar Novo Evento</h2>
                <form className="space-y-4">
                  <div>
                    <label className="block text-gray-700 mb-2">Título do Evento</label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-600"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-2">Data</label>
                    <input
                      type="date"
                      className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-600"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-2">Descrição</label>
                    <textarea
                      className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-600"
                      rows={4}
                    ></textarea>
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-2">Imagem do Evento</label>
                    <input
                      type="file"
                      className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-600"
                    />
                  </div>
                  <button
                    type="submit"
                    className="bg-red-600 text-white px-6 py-2 rounded-md hover:bg-red-700"
                  >
                    Salvar Evento
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}