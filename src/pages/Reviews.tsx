import Icon from '@/components/ui/icon'

export default function Reviews() {
  const reviews = [
    {
      name: 'Алексей Морозов',
      company: 'ТК "Грузовозофф"',
      rating: 5,
      date: '15 января 2026',
      text: 'Обратились в РамаСервис после серьезного ДТП с одним из наших КАМАЗов. Рама была сильно деформирована. Ребята полностью восстановили геометрию, сварили трещины, усилили проблемные места. Работа выполнена на высшем уровне, грузовик как новый! Сроки соблюдены, цена адекватная.',
      avatar: 'UserCircle',
    },
    {
      name: 'Дмитрий Кузнецов',
      company: 'ИП Кузнецов Д.В.',
      rating: 5,
      date: '8 января 2026',
      text: 'Привез свой МАЗ на диагностику - заметил трещины на раме. Мастера провели тщательный осмотр, все объяснили, показали проблемные места. Сделали качественную сварку и антикоррозийную обработку. Цены честные, никаких скрытых доплат. Рекомендую!',
      avatar: 'User',
    },
    {
      name: 'Сергей Волков',
      company: 'ООО "Транс-Логистик"',
      rating: 5,
      date: '2 января 2026',
      text: 'Сотрудничаем с РамаСервис уже 3 года. Обслуживаем у них весь парк грузовиков - 12 единиц техники. Всегда довольны качеством работ и сервисом. Особенно нравится, что можно отследить ход ремонта онлайн и получать фотоотчеты. Профессионалы своего дела!',
      avatar: 'UserCheck',
    },
    {
      name: 'Михаил Петров',
      company: 'Частный владелец',
      rating: 5,
      date: '28 декабря 2025',
      text: 'Делал усиление рамы на своем УРАЛе для перевозки тяжелых грузов. Ребята сделали расчет, установили дополнительные усилители, все сварили как надо. Уже полгода эксплуатирую - никаких проблем! Спасибо за качественную работу и честный подход.',
      avatar: 'UserCog',
    },
    {
      name: 'Андрей Соколов',
      company: 'ТК "Быстрая доставка"',
      rating: 5,
      date: '20 декабря 2025',
      text: 'После перегруза у нас на одном из грузовиков деформировалась рама. Привезли в РамаСервис - за 3 дня полностью восстановили геометрию на стапеле. Качество работы проверили на другом СТО - все идеально! Теперь только к ним.',
      avatar: 'User',
    },
    {
      name: 'Владимир Новиков',
      company: 'ИП Новиков В.А.',
      rating: 5,
      date: '15 декабря 2025',
      text: 'Искал сервис для комплексного ремонта рамы своего седельного тягача. Выбрал РамаСервис по отзывам - не пожалел! Сделали полный цикл: правку, сварку, усиление, антикоррозийку и покраску. Результат превзошел ожидания. Гарантию дали на 2 года.',
      avatar: 'UserCircle',
    },
  ]

  const stats = [
    { value: '4.9/5.0', label: 'Средняя оценка', icon: 'Star' },
    { value: '320+', label: 'Отзывов клиентов', icon: 'MessageSquare' },
    { value: '98%', label: 'Рекомендуют нас', icon: 'ThumbsUp' },
  ]

  return (
    <div>
      <section className="bg-gradient-to-br from-primary/10 to-background py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Отзывы клиентов</h1>
            <p className="text-xl text-muted-foreground">
              Что говорят о нас владельцы грузовой техники и транспортные компании. 
              Реальные отзывы от реальных людей.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center p-6 bg-card border border-border rounded-xl">
                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name={stat.icon} className="text-primary" size={28} />
                </div>
                <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto space-y-6">
            {reviews.map((review, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-xl p-6 md:p-8 hover:border-primary transition-all hover:shadow-xl"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon name={review.avatar} className="text-primary" size={28} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between gap-4 flex-wrap">
                      <div>
                        <h3 className="text-lg font-semibold">{review.name}</h3>
                        <p className="text-sm text-muted-foreground">{review.company}</p>
                      </div>
                      <div className="flex gap-1">
                        {[...Array(review.rating)].map((_, i) => (
                          <Icon key={i} name="Star" size={18} className="text-yellow-500 fill-yellow-500" />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                <p className="text-muted-foreground mb-4 leading-relaxed">{review.text}</p>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Icon name="Calendar" size={16} />
                  {review.date}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Icon name="MessageCircle" size={48} className="text-primary mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Оставьте свой отзыв
            </h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Нам важно ваше мнение! Расскажите о своем опыте работы с нашим сервисом. 
              Это поможет нам стать лучше.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+74951234567" className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-lg font-semibold hover:bg-primary/90 transition-all hover:scale-105">
                <Icon name="Phone" size={20} />
                Позвонить
              </a>
              <a href="mailto:info@ramaservice.ru" className="inline-flex items-center justify-center gap-2 bg-background border-2 border-border px-8 py-4 rounded-lg font-semibold hover:bg-accent transition-all">
                <Icon name="Mail" size={20} />
                Написать
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
              Часто задаваемые вопросы
            </h2>
            <div className="space-y-4">
              {[
                {
                  question: 'Сколько времени занимает ремонт рамы?',
                  answer: 'В зависимости от сложности работ, ремонт занимает от 1 до 5 рабочих дней. После диагностики мы назовем точные сроки.',
                },
                {
                  question: 'Какая гарантия на выполненные работы?',
                  answer: 'Мы предоставляем гарантию до 2 лет на все виды работ. Гарантия распространяется на качество сварки, правки и усиления.',
                },
                {
                  question: 'Можно ли приехать на диагностику без записи?',
                  answer: 'Да, но мы рекомендуем предварительно позвонить, чтобы мастера могли уделить вам максимум времени и внимания.',
                },
                {
                  question: 'Работаете ли вы с юридическими лицами?',
                  answer: 'Да, мы работаем как с частными клиентами, так и с транспортными компаниями. Предоставляем полный пакет документов.',
                },
              ].map((faq, index) => (
                <details key={index} className="group bg-card border border-border rounded-xl overflow-hidden">
                  <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-accent transition-colors">
                    <span className="font-semibold pr-4">{faq.question}</span>
                    <Icon name="ChevronDown" className="text-primary flex-shrink-0 group-open:rotate-180 transition-transform" size={20} />
                  </summary>
                  <div className="px-6 pb-6 text-muted-foreground">
                    {faq.answer}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
