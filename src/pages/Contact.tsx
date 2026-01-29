import { useState } from 'react'
import Icon from '@/components/ui/icon'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    alert('Спасибо за обращение! Мы свяжемся с вами в ближайшее время.')
    setFormData({ name: '', phone: '', email: '', message: '' })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const contacts = [
    {
      icon: 'Phone',
      title: 'Телефоны',
      items: ['+7 (495) 123-45-67', '+7 (800) 555-35-35'],
      link: 'tel:+74951234567',
    },
    {
      icon: 'Mail',
      title: 'Email',
      items: ['info@ramaservice.ru', 'support@ramaservice.ru'],
      link: 'mailto:info@ramaservice.ru',
    },
    {
      icon: 'MapPin',
      title: 'Адрес',
      items: ['г. Москва, ул. Промышленная, 15', 'Метро Шоссе Энтузиастов'],
      link: '#',
    },
    {
      icon: 'Clock',
      title: 'Режим работы',
      items: ['Пн-Пт: 08:00 - 20:00', 'Сб: 09:00 - 18:00', 'Вс: Выходной'],
      link: '#',
    },
  ]

  return (
    <div>
      <section className="bg-gradient-to-br from-primary/10 to-background py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Контакты</h1>
            <p className="text-xl text-muted-foreground">
              Свяжитесь с нами удобным способом. Мы всегда готовы ответить на ваши вопросы 
              и проконсультировать по любым вопросам ремонта рам.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contacts.map((contact, index) => (
              <div
                key={index}
                className="p-6 bg-card border border-border rounded-xl hover:border-primary transition-all hover:shadow-xl text-center"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name={contact.icon} className="text-primary" size={28} />
                </div>
                <h3 className="text-lg font-semibold mb-3">{contact.title}</h3>
                <div className="space-y-1 text-sm text-muted-foreground">
                  {contact.items.map((item, i) => (
                    <div key={i}>{item}</div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div>
              <h2 className="text-3xl font-bold mb-6">Отправьте заявку</h2>
              <p className="text-muted-foreground mb-8">
                Заполните форму, и наш специалист свяжется с вами в течение 15 минут 
                для уточнения деталей и записи на диагностику.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Ваше имя *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                    placeholder="Иван Иванов"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-2">
                    Телефон *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                    placeholder="+7 (900) 123-45-67"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                    placeholder="ivan@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Сообщение
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all resize-none"
                    placeholder="Опишите вашу проблему или вопрос..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-lg font-semibold hover:bg-primary/90 transition-all hover:scale-105"
                >
                  Отправить заявку
                  <Icon name="Send" size={20} />
                </button>
              </form>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-6">Как нас найти</h2>
              <div className="bg-card border border-border rounded-xl p-6 mb-6">
                <div className="aspect-video bg-gradient-to-br from-primary/20 to-primary/5 rounded-lg flex items-center justify-center mb-6">
                  <Icon name="Map" size={64} className="text-primary/30" />
                </div>
                <div className="space-y-4 text-sm">
                  <div className="flex items-start gap-3">
                    <Icon name="MapPin" className="text-primary mt-1 flex-shrink-0" size={20} />
                    <div>
                      <div className="font-medium mb-1">Адрес сервиса</div>
                      <div className="text-muted-foreground">
                        г. Москва, ул. Промышленная, 15<br />
                        Метро Шоссе Энтузиастов (10 мин пешком)
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon name="Car" className="text-primary mt-1 flex-shrink-0" size={20} />
                    <div>
                      <div className="font-medium mb-1">Как добраться</div>
                      <div className="text-muted-foreground">
                        От МКАД 5 км по Энтузиастов шоссе.<br />
                        Парковка для грузовиков на территории.
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-primary/5 border border-primary/20 rounded-xl p-6">
                <div className="flex items-start gap-3 mb-4">
                  <Icon name="Info" className="text-primary mt-1 flex-shrink-0" size={20} />
                  <div>
                    <div className="font-medium mb-2">Важная информация</div>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Предварительная запись не обязательна, но желательна</li>
                      <li>• Диагностика проводится бесплатно</li>
                      <li>• Возможен выезд специалиста на место</li>
                      <li>• Работаем с НДС, полный пакет документов</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Остались вопросы?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Позвоните нам прямо сейчас, и мы ответим на все ваши вопросы. 
              Консультация бесплатна!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+74951234567" className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-lg font-semibold hover:bg-primary/90 transition-all hover:scale-105">
                <Icon name="Phone" size={20} />
                +7 (495) 123-45-67
              </a>
              <a href="https://wa.me/74951234567" className="inline-flex items-center justify-center gap-2 bg-green-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-700 transition-all hover:scale-105">
                <Icon name="MessageCircle" size={20} />
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
