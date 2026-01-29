import { Link } from 'react-router-dom'
import Icon from '@/components/ui/icon'

export default function Home() {
  const services = [
    {
      icon: 'Wrench',
      title: 'Правка рам',
      description: 'Восстановление геометрии рамы грузовых автомобилей',
    },
    {
      icon: 'Zap',
      title: 'Сварочные работы',
      description: 'Усиление и ремонт трещин методом аргонной сварки',
    },
    {
      icon: 'Shield',
      title: 'Антикоррозийная обработка',
      description: 'Защита металла от коррозии и разрушения',
    },
    {
      icon: 'Gauge',
      title: 'Диагностика',
      description: 'Комплексная проверка состояния рамы и выявление дефектов',
    },
  ]

  const advantages = [
    { icon: 'Award', title: 'Опыт 15+ лет', description: 'Работаем с 2008 года' },
    { icon: 'Users', title: 'Квалифицированные мастера', description: 'Сертифицированные специалисты' },
    { icon: 'Clock', title: 'Быстрый ремонт', description: 'От 1 до 5 рабочих дней' },
    { icon: 'CheckCircle', title: 'Гарантия качества', description: 'До 2 лет на все работы' },
  ]

  return (
    <div>
      <section className="relative bg-gradient-to-br from-primary/10 via-background to-background py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl">
            <div className="inline-block mb-6 px-4 py-2 bg-primary/10 rounded-full">
              <span className="text-primary font-semibold">Профессиональный сервис</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Ремонт рам грузовых автомобилей
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Восстановление геометрии, сварочные работы, усиление конструкции. 
              Гарантия качества и профессиональный подход.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact" className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-lg font-semibold hover:bg-primary/90 transition-all hover:scale-105">
                Получить консультацию
                <Icon name="ArrowRight" size={20} />
              </Link>
              <Link to="/services" className="inline-flex items-center justify-center gap-2 bg-card border-2 border-border px-8 py-4 rounded-lg font-semibold hover:bg-accent transition-all">
                Наши услуги
                <Icon name="List" size={20} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Наши услуги</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Полный комплекс работ по ремонту и восстановлению рам грузовых автомобилей
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="group p-6 bg-card border border-border rounded-xl hover:border-primary transition-all hover:shadow-xl hover:-translate-y-1"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary group-hover:scale-110 transition-all">
                  <Icon name={service.icon} className="text-primary group-hover:text-primary-foreground" size={28} />
                </div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/services" className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all">
              Смотреть все услуги
              <Icon name="ArrowRight" size={18} />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Почему выбирают нас</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {advantages.map((advantage, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name={advantage.icon} className="text-primary" size={32} />
                </div>
                <h3 className="text-lg font-semibold mb-2">{advantage.title}</h3>
                <p className="text-muted-foreground">{advantage.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-br from-primary to-primary/80 rounded-2xl p-8 md:p-12 text-center text-primary-foreground">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Нужна консультация специалиста?
            </h2>
            <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
              Оставьте заявку, и мы свяжемся с вами в течение 15 минут для обсуждения вашей задачи
            </p>
            <Link to="/contact" className="inline-flex items-center gap-2 bg-background text-foreground px-8 py-4 rounded-lg font-semibold hover:bg-background/90 transition-all hover:scale-105">
              Связаться с нами
              <Icon name="Phone" size={20} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
