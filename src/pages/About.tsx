import Icon from '@/components/ui/icon'

export default function About() {
  const stats = [
    { number: '15+', label: 'Лет на рынке', icon: 'Calendar' },
    { number: '3000+', label: 'Отремонтированных рам', icon: 'Truck' },
    { number: '12', label: 'Квалифицированных мастеров', icon: 'Users' },
    { number: '98%', label: 'Довольных клиентов', icon: 'ThumbsUp' },
  ]

  const values = [
    {
      icon: 'Target',
      title: 'Качество',
      description: 'Используем только проверенные технологии и материалы',
    },
    {
      icon: 'Clock',
      title: 'Скорость',
      description: 'Выполняем работы в оговоренные сроки без задержек',
    },
    {
      icon: 'Shield',
      title: 'Гарантия',
      description: 'Предоставляем гарантию до 2 лет на все виды работ',
    },
    {
      icon: 'Heart',
      title: 'Честность',
      description: 'Прозрачное ценообразование без скрытых платежей',
    },
  ]

  const team = [
    {
      name: 'Александр Петров',
      position: 'Главный инженер',
      experience: '18 лет опыта',
      icon: 'UserCog',
    },
    {
      name: 'Михаил Иванов',
      position: 'Мастер-сварщик',
      experience: '15 лет опыта',
      icon: 'Flame',
    },
    {
      name: 'Дмитрий Сидоров',
      position: 'Специалист по диагностике',
      experience: '12 лет опыта',
      icon: 'Search',
    },
    {
      name: 'Сергей Козлов',
      position: 'Мастер-жестянщик',
      experience: '14 лет опыта',
      icon: 'Hammer',
    },
  ]

  return (
    <div>
      <section className="bg-gradient-to-br from-primary/10 to-background py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">О компании РамаСервис</h1>
            <p className="text-xl text-muted-foreground">
              Мы специализируемся на ремонте и восстановлении рам грузовых автомобилей с 2008 года. 
              За это время нашими клиентами стали крупнейшие транспортные компании и частные владельцы.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name={stat.icon} className="text-primary" size={32} />
                </div>
                <div className="text-4xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Наша история</h2>
            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="w-2 bg-primary rounded-full flex-shrink-0"></div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">2008 - Основание компании</h3>
                  <p className="text-muted-foreground">
                    Начали работу с небольшой мастерской и командой из 3 человек. 
                    Фокусировались на качестве и индивидуальном подходе к каждому клиенту.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="w-2 bg-primary rounded-full flex-shrink-0"></div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">2012 - Расширение производства</h3>
                  <p className="text-muted-foreground">
                    Переехали в новое помещение площадью 1000 кв.м. Приобрели современное оборудование 
                    для правки рам и закупили профессиональное сварочное оборудование.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="w-2 bg-primary rounded-full flex-shrink-0"></div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">2017 - Сертификация</h3>
                  <p className="text-muted-foreground">
                    Получили сертификаты качества ISO 9001 и стали официальными партнерами 
                    крупнейших производителей грузовой техники.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="w-2 bg-primary rounded-full flex-shrink-0"></div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">2023 - Инновации</h3>
                  <p className="text-muted-foreground">
                    Внедрили 3D-сканирование для точной диагностики геометрии рам. 
                    Запустили онлайн-систему отслеживания хода ремонта.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Наши ценности</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Принципы, которыми мы руководствуемся в работе
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className="p-6 bg-card border border-border rounded-xl hover:border-primary transition-all hover:shadow-xl"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon name={value.icon} className="text-primary" size={28} />
                </div>
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Наша команда</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Профессионалы своего дела с многолетним опытом
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, index) => (
              <div
                key={index}
                className="text-center p-6 bg-background border border-border rounded-xl hover:border-primary transition-all"
              >
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name={member.icon} className="text-primary" size={36} />
                </div>
                <h3 className="text-lg font-semibold mb-1">{member.name}</h3>
                <p className="text-sm text-muted-foreground mb-2">{member.position}</p>
                <p className="text-xs text-primary font-medium">{member.experience}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-gradient-to-br from-primary to-primary/80 rounded-2xl p-8 md:p-12 text-center text-primary-foreground">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Станьте частью нашей истории
            </h2>
            <p className="text-lg mb-8 opacity-90">
              Доверьте ремонт вашего грузовика профессионалам с 15-летним опытом
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+74951234567" className="inline-flex items-center justify-center gap-2 bg-background text-foreground px-8 py-4 rounded-lg font-semibold hover:bg-background/90 transition-all">
                <Icon name="Phone" size={20} />
                +7 (495) 123-45-67
              </a>
              <a href="mailto:info@ramaservice.ru" className="inline-flex items-center justify-center gap-2 border-2 border-primary-foreground/30 px-8 py-4 rounded-lg font-semibold hover:bg-primary-foreground/10 transition-all">
                <Icon name="Mail" size={20} />
                info@ramaservice.ru
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
