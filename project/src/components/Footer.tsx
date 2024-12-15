import React from 'react';
import { Facebook, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Contato</h3>
            <div className="space-y-3">
              <p className="flex items-center gap-2">
                <Phone size={20} />
                (11) 1234-5678
              </p>
              <p className="flex items-center gap-2">
                <Mail size={20} />
                contato@sagradocoracao.com
              </p>
              <p className="flex items-center gap-2">
                <MapPin size={20} />
                Rua da Igreja, 123 - São Paulo, SP
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-red-400">Início</Link></li>
              <li><Link to="/sobre" className="hover:text-red-400">Sobre</Link></li>
              <li><Link to="/eventos" className="hover:text-red-400">Eventos</Link></li>
              <li><Link to="/programacao" className="hover:text-red-400">Programação</Link></li>
              <li><Link to="/contato" className="hover:text-red-400">Contato</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Redes Sociais</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-red-400">
                <Facebook size={24} />
              </a>
              <a href="#" className="hover:text-red-400">
                <Instagram size={24} />
              </a>
              <a href="#" className="hover:text-red-400">
                <Youtube size={24} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p>&copy; {new Date().getFullYear()} Igreja Sagrado Coração de Jesus. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}