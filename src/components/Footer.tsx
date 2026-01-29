import { Link } from 'react-router-dom'
import Icon from '@/components/ui/icon'

export default function Footer() {
  return (
    <footer className="bg-card border-t border-border mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <Icon name="Truck" className="text-primary-foreground" size={24} />
              </div>
              <div className="font-bold text-lg">РамаСервис</div>
            </div>
            <p className="text-muted-foreground text-sm">
              Профессиональный ремонт и восстановление рам грузовых автомобилей
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Навигация</h3>
            <div className="space-y-2">
              <Link to="/" className="block text-muted-foreground hover:text-foreground transition-colors">Главная</Link>
              <Link to="/services" className="block text-muted-foreground hover:text-foreground transition-colors">Услуги</Link>
              <Link to="/about" className="block text-muted-foreground hover:text-foreground transition-colors">О нас</Link>
              <Link to="/gallery" className="block text-muted-foreground hover:text-foreground transition-colors">Галерея</Link>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Контакты</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2">
                <Icon name="Phone" size={18} className="text-primary mt-0.5" />
                <div>
                  <div className="text-muted-foreground">+7 (495) 123-45-67</div>
                  <div className="text-muted-foreground">+7 (800) 555-35-35</div>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <Icon name="Mail" size={18} className="text-primary mt-0.5" />
                <a href="mailto:info@ramaservice.ru" className="text-muted-foreground hover:text-foreground">
                  info@ramaservice.ru
                </a>
              </div>
              <div className="flex items-start gap-2">
                <Icon name="MapPin" size={18} className="text-primary mt-0.5" />
                <div className="text-muted-foreground">г. Москва, ул. Промышленная, 15</div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Режим работы</h3>
            <div className="space-y-2 text-sm text-muted-foreground">
              <div>Пн-Пт: 08:00 - 20:00</div>
              <div>Сб: 09:00 - 18:00</div>
              <div>Вс: Выходной</div>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-muted-foreground">
            © 2026 РамаСервис. Все права защищены.
          </div>
          <div className="flex gap-4">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Icon name="MessageCircle" size={20} />
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Icon name="Send" size={20} />
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Icon name="Phone" size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
