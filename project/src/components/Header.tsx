import React from 'react';
import { Link } from 'react-router-dom';
import { Church, Menu, X } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header className="bg-white shadow-md fixed w-full top-0 z-50">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <Church className="h-8 w-8 text-red-600" />
            <span className="text-xl font-semibold text-gray-800">Sagrado Coração de Jesus</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/" className="text-gray-600 hover:text-red-600">Início</Link>
            <Link to="/sobre" className="text-gray-600 hover:text-red-600">Sobre</Link>
            <Link to="/eventos" className="text-gray-600 hover:text-red-600">Eventos</Link>
            <Link to="/programacao" className="text-gray-600 hover:text-red-600">Programação</Link>
            <Link to="/contato" className="text-gray-600 hover:text-red-600">Contato</Link>
            <Link to="/admin" className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700">
              Acesso Admin
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 space-y-4">
            <Link to="/" className="block text-gray-600 hover:text-red-600 py-2">Início</Link>
            <Link to="/sobre" className="block text-gray-600 hover:text-red-600 py-2">Sobre</Link>
            <Link to="/eventos" className="block text-gray-600 hover:text-red-600 py-2">Eventos</Link>
            <Link to="/programacao" className="block text-gray-600 hover:text-red-600 py-2">Programação</Link>
            <Link to="/contato" className="block text-gray-600 hover:text-red-600 py-2">Contato</Link>
            <Link to="/admin" className="block bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 text-center">
              Acesso Admin
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}