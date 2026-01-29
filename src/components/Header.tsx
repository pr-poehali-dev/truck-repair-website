import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import Icon from '@/components/ui/icon'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()

  const navLinks = [
    { path: '/', label: 'Главная' },
    { path: '/services', label: 'Услуги' },
    { path: '/about', label: 'О нас' },
    { path: '/gallery', label: 'Галерея' },
    { path: '/reviews', label: 'Отзывы' },
    { path: '/contact', label: 'Контакты' },
  ]

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
              <Icon name="Truck" className="text-primary-foreground" size={28} />
            </div>
            <div>
              <div className="font-bold text-xl text-foreground">РамаСервис</div>
              <div className="text-xs text-muted-foreground">Ремонт рам грузовых авто</div>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-2 rounded-md transition-all font-medium ${
                  location.pathname === link.path
                    ? 'bg-primary text-primary-foreground'
                    : 'text-foreground hover:bg-accent hover:text-accent-foreground'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-md hover:bg-accent"
          >
            <Icon name={isMenuOpen ? 'X' : 'Menu'} size={24} />
          </button>
        </div>

        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-border">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsMenuOpen(false)}
                className={`block px-4 py-3 rounded-md transition-all ${
                  location.pathname === link.path
                    ? 'bg-primary text-primary-foreground'
                    : 'text-foreground hover:bg-accent'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        )}
      </div>
    </header>
  )
}
