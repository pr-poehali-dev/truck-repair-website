import Icon from '@/components/ui/icon'
import { Link } from 'react-router-dom'

export default function Services() {
  const services = [
    {
      icon: 'Wrench',
      title: 'Правка рам',
      description: 'Восстановление геометрии рамы грузовых автомобилей с использованием современного оборудования',
      features: [
        'Проверка геометрии на стенде',
        'Холодная и горячая правка',
        'Восстановление заводских параметров',
        'Контроль качества после работ',
      ],
      price: 'от 25 000 ₽',
    },
    {
      icon: 'Zap',
      title: 'Сварочные работы',
      description: 'Профессиональная сварка трещин и усиление конструкции рамы',
      features: [
        'Аргонная сварка',
        'Полуавтоматическая сварка',
        'Ремонт трещин любой сложности',
        'Усиление проблемных зон',
      ],
      price: 'от 15 000 ₽',
    },
    {
      icon: 'Shield',
      title: 'Антикоррозийная обработка',
      description: 'Защита металла рамы от коррозии и продление срока службы',
      features: [
        'Пескоструйная обработка',
        'Грунтовка поверхности',
        'Нанесение защитных составов',
        'Обработка скрытых полостей',
      ],
      price: 'от 12 000 ₽',
    },
    {
      icon: 'Gauge',
      title: 'Диагностика рамы',
      description: 'Комплексная проверка состояния рамы и выявление всех дефектов',
      features: [
        'Визуальный осмотр',
        'Измерение геометрии',
        'Дефектовка сварных швов',
        'Подробный отчет о состоянии',
      ],
      price: 'от 5 000 ₽',
    },
    {
      icon: 'Hammer',
      title: 'Усиление рамы',
      description: 'Установка дополнительных элементов для повышения жесткости конструкции',
      features: [
        'Установка усилителей',
        'Монтаж накладок',
        'Расчет нагрузок',
        'Индивидуальные решения',
      ],
      price: 'от 30 000 ₽',
    },
    {
      icon: 'Replace',
      title: 'Замена элементов рамы',
      description: 'Замена поврежденных участков рамы на новые элементы',
      features: [
        'Вырезка поврежденных участков',
        'Изготовление новых элементов',
        'Точная подгонка и сварка',
        'Контроль геометрии',
      ],
      price: 'от 40 000 ₽',
    },
    {
      icon: 'Sparkles',
      title: 'Покраска рамы',
      description: 'Качественная окраска рамы грузового автомобиля',
      features: [
        'Подготовка поверхности',
        'Грунтование',
        'Покраска в камере',
        'Полировка и защита',
      ],
      price: 'от 18 000 ₽',
    },
    {
      icon: 'ClipboardCheck',
      title: 'Комплексный ремонт',
      description: 'Полный цикл работ по восстановлению рамы грузового автомобиля',
      features: [
        'Диагностика и дефектовка',
        'Правка и усиление',
        'Сварочные работы',
        'Защита и покраска',
      ],
      price: 'от 80 000 ₽',
    },
  ]

  return (
    <div>
      <section className="bg-gradient-to-br from-primary/10 to-background py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Услуги по ремонту рам</h1>
            <p className="text-xl text-muted-foreground">
              Полный спектр услуг по диагностике, ремонту и восстановлению рам грузовых автомобилей. 
              Современное оборудование и опытные специалисты.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group bg-card border border-border rounded-xl p-8 hover:border-primary transition-all hover:shadow-xl"
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:scale-110 transition-all">
                    <Icon name={service.icon} className="text-primary group-hover:text-primary-foreground" size={28} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                    <p className="text-muted-foreground">{service.description}</p>
                  </div>
                </div>

                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Icon name="Check" className="text-primary mt-1 flex-shrink-0" size={18} />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex items-center justify-between pt-6 border-t border-border">
                  <div className="text-2xl font-bold text-primary">{service.price}</div>
                  <Link to="/contact" className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all">
                    Заказать
                    <Icon name="ArrowRight" size={18} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Этапы работы</h2>
            <div className="space-y-6">
              {[
                { step: '01', title: 'Диагностика', description: 'Осмотр рамы, выявление дефектов, измерение геометрии' },
                { step: '02', title: 'Составление сметы', description: 'Расчет стоимости работ и согласование с клиентом' },
                { step: '03', title: 'Ремонтные работы', description: 'Выполнение правки, сварки, усиления и других работ' },
                { step: '04', title: 'Контроль качества', description: 'Проверка геометрии и качества выполненных работ' },
                { step: '05', title: 'Защитная обработка', description: 'Антикоррозийная обработка и покраска при необходимости' },
                { step: '06', title: 'Приемка работ', description: 'Передача автомобиля клиенту с гарантией' },
              ].map((item, index) => (
                <div key={index} className="flex gap-6 items-start">
                  <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xl font-bold flex-shrink-0">
                    {item.step}
                  </div>
                  <div className="flex-1 pt-2">
                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-br from-primary to-primary/80 rounded-2xl p-8 md:p-12 text-center text-primary-foreground">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Нужна консультация по услугам?
            </h2>
            <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
              Наши специалисты помогут подобрать оптимальное решение для вашего грузовика
            </p>
            <Link to="/contact" className="inline-flex items-center gap-2 bg-background text-foreground px-8 py-4 rounded-lg font-semibold hover:bg-background/90 transition-all hover:scale-105">
              Получить консультацию
              <Icon name="MessageCircle" size={20} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
