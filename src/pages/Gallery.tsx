import { useState } from 'react'
import Icon from '@/components/ui/icon'

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState('all')

  const categories = [
    { id: 'all', label: 'Все работы' },
    { id: 'before-after', label: 'До и после' },
    { id: 'welding', label: 'Сварочные работы' },
    { id: 'frame-repair', label: 'Правка рам' },
    { id: 'reinforcement', label: 'Усиление' },
  ]

  const projects = [
    {
      category: 'before-after',
      title: 'Восстановление рамы КАМАЗ',
      description: 'Полное восстановление геометрии после ДТП',
      badge: 'Сложный ремонт',
    },
    {
      category: 'welding',
      title: 'Сварка трещин на раме МАЗ',
      description: 'Аргонная сварка трещин лонжерона',
      badge: 'Сварка',
    },
    {
      category: 'frame-repair',
      title: 'Правка рамы грузовика',
      description: 'Устранение деформации после перегруза',
      badge: 'Правка',
    },
    {
      category: 'reinforcement',
      title: 'Усиление рамы УРАЛ',
      description: 'Установка дополнительных усилителей',
      badge: 'Усиление',
    },
    {
      category: 'before-after',
      title: 'Ремонт рамы седельного тягача',
      description: 'Замена поврежденного участка рамы',
      badge: 'Замена',
    },
    {
      category: 'welding',
      title: 'Сварочные работы по усилению',
      description: 'Приварка накладок к раме',
      badge: 'Сварка',
    },
    {
      category: 'frame-repair',
      title: 'Восстановление геометрии',
      description: 'Правка на стапеле после деформации',
      badge: 'Геометрия',
    },
    {
      category: 'reinforcement',
      title: 'Модернизация рамы',
      description: 'Комплексное усиление для увеличения грузоподъемности',
      badge: 'Модернизация',
    },
    {
      category: 'before-after',
      title: 'Капитальный ремонт рамы',
      description: 'Полный цикл работ: правка, сварка, покраска',
      badge: 'Комплексный ремонт',
    },
  ]

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(p => p.category === selectedCategory)

  return (
    <div>
      <section className="bg-gradient-to-br from-primary/10 to-background py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Галерея наших работ</h1>
            <p className="text-xl text-muted-foreground">
              Примеры выполненных ремонтов рам грузовых автомобилей. 
              Каждый проект — это результат профессионализма и внимания к деталям.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-3 mb-12 justify-center">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-lg font-medium transition-all ${
                  selectedCategory === category.id
                    ? 'bg-primary text-primary-foreground shadow-lg scale-105'
                    : 'bg-card border border-border hover:border-primary hover:bg-accent'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project, index) => (
              <div
                key={index}
                className="group bg-card border border-border rounded-xl overflow-hidden hover:border-primary transition-all hover:shadow-xl"
              >
                <div className="relative aspect-[4/3] bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center overflow-hidden">
                  <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
                  <Icon name="Image" size={64} className="text-primary/30 group-hover:scale-110 transition-transform" />
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 bg-primary text-primary-foreground text-xs font-semibold rounded-full">
                      {project.badge}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">{project.description}</p>
                </div>
              </div>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-16">
              <Icon name="Search" size={64} className="text-muted-foreground mx-auto mb-4" />
              <p className="text-muted-foreground">Работы в этой категории пока не добавлены</p>
            </div>
          )}
        </div>
      </section>

      <section className="py-16 md:py-24 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Icon name="Camera" size={48} className="text-primary mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Хотите увидеть процесс работы?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Приезжайте в наш сервис на экскурсию или запросите фото/видео отчет о ходе ремонта вашего автомобиля
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+74951234567" className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-lg font-semibold hover:bg-primary/90 transition-all hover:scale-105">
                <Icon name="Phone" size={20} />
                Позвонить
              </a>
              <a href="/contact" className="inline-flex items-center justify-center gap-2 bg-background border-2 border-border px-8 py-4 rounded-lg font-semibold hover:bg-accent transition-all">
                <Icon name="MessageCircle" size={20} />
                Написать
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
