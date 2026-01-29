import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import Icon from '@/components/ui/icon';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';

export default function Index() {
  const [bookingOpen, setBookingOpen] = useState(false);

  const services = [
    {
      icon: 'Wrench',
      title: 'Ремонт рамы',
      description: 'Восстановление геометрии и целостности рамы грузовых автомобилей любой сложности',
      price: 'от 25 000 ₽'
    },
    {
      icon: 'Zap',
      title: 'Сварочные работы',
      description: 'Профессиональная сварка с применением современного оборудования и технологий',
      price: 'от 15 000 ₽'
    },
    {
      icon: 'Shield',
      title: 'Усиление рамы',
      description: 'Укрепление конструкции для повышения грузоподъёмности и надёжности',
      price: 'от 30 000 ₽'
    },
    {
      icon: 'Search',
      title: 'Диагностика',
      description: 'Полная проверка состояния рамы с выявлением скрытых дефектов и трещин',
      price: 'от 5 000 ₽'
    },
    {
      icon: 'Sparkles',
      title: 'Антикоррозийная обработка',
      description: 'Защита металлических поверхностей от коррозии современными составами',
      price: 'от 8 000 ₽'
    },
    {
      icon: 'Settings',
      title: 'Правка геометрии',
      description: 'Восстановление заводских параметров геометрии рамы на стапельном оборудовании',
      price: 'от 20 000 ₽'
    }
  ];

  const gallery = [
    'https://cdn.poehali.dev/projects/332e508f-10ba-4a02-be2f-76f08c5d80a5/files/bb00707b-a9c4-475f-9b79-d74e926d6584.jpg',
    'https://cdn.poehali.dev/projects/332e508f-10ba-4a02-be2f-76f08c5d80a5/files/06993f32-73a1-4ba0-b65b-3813b00e16da.jpg',
    'https://cdn.poehali.dev/projects/332e508f-10ba-4a02-be2f-76f08c5d80a5/files/3dfe7e16-6050-4374-b706-22420b0dcf4e.jpg'
  ];

  const reviews = [
    {
      name: 'Алексей Морозов',
      company: 'ТК "Логистика Плюс"',
      text: 'Отличная работа! Восстановили раму после серьёзного ДТП. Качество на высоте, сроки соблюдены. Рекомендую!',
      rating: 5
    },
    {
      name: 'Игорь Смирнов',
      company: 'ИП Смирнов',
      text: 'Профессиональный подход к делу. Усилили раму под увеличенную нагрузку. Теперь работаем без проблем.',
      rating: 5
    },
    {
      name: 'Дмитрий Петров',
      company: 'ООО "Стройтранс"',
      text: 'Быстро и качественно отремонтировали трещины на раме. Цены адекватные, персонал вежливый.',
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-secondary/95 backdrop-blur-sm border-b border-primary/20">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Icon name="Truck" size={32} className="text-primary" />
            <span className="text-xl font-bold text-white">РамаСервис</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <a href="#services" className="text-white hover:text-primary transition-colors">Услуги</a>
            <a href="#about" className="text-white hover:text-primary transition-colors">О нас</a>
            <a href="#gallery" className="text-white hover:text-primary transition-colors">Галерея</a>
            <a href="#reviews" className="text-white hover:text-primary transition-colors">Отзывы</a>
            <a href="#contacts" className="text-white hover:text-primary transition-colors">Контакты</a>
          </nav>
          <Button onClick={() => setBookingOpen(true)} className="bg-primary hover:bg-primary/90">
            Записаться
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-br from-secondary via-secondary/95 to-secondary/90 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNiIgc3Ryb2tlPSJyZ2JhKDI0OSwxMTUsMjIsMC4xKSIvPjwvZz48L3N2Zz4=')] opacity-20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Профессиональный ремонт рам грузовых автомобилей
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-8">
              Восстановление геометрии, сварка, усиление конструкции. Современное оборудование и опытные специалисты.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" onClick={() => setBookingOpen(true)} className="bg-primary hover:bg-primary/90 text-white px-8">
                <Icon name="Calendar" size={20} className="mr-2" />
                Записаться на ремонт
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-secondary">
                <Icon name="Phone" size={20} className="mr-2" />
                +7 (495) 123-45-67
              </Button>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
            <div className="text-center animate-slide-up">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">12+</div>
              <div className="text-white/80">лет опыта</div>
            </div>
            <div className="text-center animate-slide-up" style={{ animationDelay: '0.1s' }}>
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">500+</div>
              <div className="text-white/80">выполненных работ</div>
            </div>
            <div className="text-center animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">24/7</div>
              <div className="text-white/80">режим работы</div>
            </div>
            <div className="text-center animate-slide-up" style={{ animationDelay: '0.3s' }}>
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">100%</div>
              <div className="text-white/80">гарантия качества</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Наши услуги</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Полный комплекс работ по ремонту и восстановлению рам грузовых автомобилей
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="hover-lift cursor-pointer animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon name={service.icon} size={24} className="text-primary" />
                  </div>
                  <CardTitle>{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-primary">{service.price}</span>
                    <Button size="sm" onClick={() => setBookingOpen(true)}>Заказать</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold mb-6">О нашем сервисе</h2>
              <p className="text-lg text-muted-foreground mb-6">
                РамаСервис — специализированный центр по ремонту рам грузовых автомобилей с 12-летним опытом работы. 
                Мы используем современное европейское оборудование и оригинальные технологии восстановления.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="CheckCircle" size={20} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Современное оборудование</h3>
                    <p className="text-muted-foreground">Стапели, сварочные аппараты и измерительные системы последнего поколения</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="CheckCircle" size={20} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Опытные специалисты</h3>
                    <p className="text-muted-foreground">Команда сертифицированных мастеров с многолетним опытом</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="CheckCircle" size={20} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Гарантия качества</h3>
                    <p className="text-muted-foreground">Предоставляем гарантию на все виды выполненных работ</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://cdn.poehali.dev/projects/332e508f-10ba-4a02-be2f-76f08c5d80a5/files/3dfe7e16-6050-4374-b706-22420b0dcf4e.jpg" 
                alt="Наш сервис" 
                className="rounded-lg shadow-2xl w-full h-[400px] object-cover"
              />
              <div className="absolute -bottom-6 -left-6 bg-primary text-white p-6 rounded-lg shadow-xl">
                <div className="text-4xl font-bold mb-1">500+</div>
                <div className="text-sm">Довольных клиентов</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Галерея работ</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Примеры выполненных ремонтов рам грузовых автомобилей
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {gallery.map((image, index) => (
              <div key={index} className="group relative overflow-hidden rounded-lg cursor-pointer hover-lift animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <img 
                  src={image} 
                  alt={`Работа ${index + 1}`} 
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div className="text-white">
                    <h3 className="font-bold text-lg mb-1">Ремонт рамы</h3>
                    <p className="text-sm text-white/80">Профессиональное восстановление</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Отзывы клиентов</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Что говорят о нас наши клиенты
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {reviews.map((review, index) => (
              <Card key={index} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardHeader>
                  <div className="flex items-center gap-1 mb-2">
                    {[...Array(review.rating)].map((_, i) => (
                      <Icon key={i} name="Star" size={16} className="text-yellow-500 fill-yellow-500" />
                    ))}
                  </div>
                  <CardTitle className="text-lg">{review.name}</CardTitle>
                  <CardDescription>{review.company}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{review.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contacts Section */}
      <section id="contacts" className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Контакты</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Свяжитесь с нами удобным способом
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon name="MapPin" size={24} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Адрес</h3>
                  <p className="text-muted-foreground">г. Москва, ул. Промышленная, д. 15</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon name="Phone" size={24} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Телефон</h3>
                  <p className="text-muted-foreground">+7 (495) 123-45-67</p>
                  <p className="text-muted-foreground">+7 (495) 123-45-68</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon name="Mail" size={24} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Email</h3>
                  <p className="text-muted-foreground">info@ramaservice.ru</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon name="Clock" size={24} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Режим работы</h3>
                  <p className="text-muted-foreground">Круглосуточно, 24/7</p>
                </div>
              </div>
            </div>
            <Card>
              <CardHeader>
                <CardTitle>Форма обратной связи</CardTitle>
                <CardDescription>Оставьте заявку и мы свяжемся с вами</CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                  <div>
                    <Label htmlFor="name">Имя</Label>
                    <Input id="name" placeholder="Ваше имя" />
                  </div>
                  <div>
                    <Label htmlFor="phone">Телефон</Label>
                    <Input id="phone" type="tel" placeholder="+7 (___) ___-__-__" />
                  </div>
                  <div>
                    <Label htmlFor="message">Сообщение</Label>
                    <Textarea id="message" placeholder="Опишите вашу проблему" rows={4} />
                  </div>
                  <Button type="submit" className="w-full">Отправить заявку</Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-secondary text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <Icon name="Truck" size={28} className="text-primary" />
              <span className="text-lg font-bold">РамаСервис</span>
            </div>
            <p className="text-white/70 text-sm">© 2024 РамаСервис. Все права защищены.</p>
            <div className="flex gap-4">
              <a href="#" className="text-white/70 hover:text-primary transition-colors">
                <Icon name="Phone" size={20} />
              </a>
              <a href="#" className="text-white/70 hover:text-primary transition-colors">
                <Icon name="Mail" size={20} />
              </a>
              <a href="#" className="text-white/70 hover:text-primary transition-colors">
                <Icon name="MapPin" size={20} />
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Booking Dialog */}
      <Dialog open={bookingOpen} onOpenChange={setBookingOpen}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle>Онлайн-запись на обслуживание</DialogTitle>
            <DialogDescription>
              Заполните форму и мы свяжемся с вами для подтверждения записи
            </DialogDescription>
          </DialogHeader>
          <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); setBookingOpen(false); }}>
            <div>
              <Label htmlFor="booking-name">Имя</Label>
              <Input id="booking-name" placeholder="Ваше имя" required />
            </div>
            <div>
              <Label htmlFor="booking-phone">Телефон</Label>
              <Input id="booking-phone" type="tel" placeholder="+7 (___) ___-__-__" required />
            </div>
            <div>
              <Label htmlFor="booking-service">Услуга</Label>
              <select 
                id="booking-service" 
                className="w-full h-10 px-3 py-2 text-sm rounded-md border border-input bg-background"
                required
              >
                <option value="">Выберите услугу</option>
                {services.map((service, index) => (
                  <option key={index} value={service.title}>{service.title}</option>
                ))}
              </select>
            </div>
            <div>
              <Label htmlFor="booking-date">Желаемая дата</Label>
              <Input id="booking-date" type="date" required />
            </div>
            <div>
              <Label htmlFor="booking-comment">Комментарий</Label>
              <Textarea id="booking-comment" placeholder="Дополнительная информация" rows={3} />
            </div>
            <Button type="submit" className="w-full">Отправить заявку</Button>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}
