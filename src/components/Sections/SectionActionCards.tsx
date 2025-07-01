'use client'
import React from 'react'

export function SectionActionCards() {
  const services = [
    {
      id: 1,
      icon: '/img/icons/card-icon-1.svg',
      title: 'MARCAR CONSULTA',
      description: 'Escolha a especialidade, dia e horário de sua interesse',
    },
    {
      id: 2,
      icon: '/img/icons/card-icon-2.svg',
      title: 'AGENDAR EXAME',
      description: 'Marque o dia e hora para seus exames',
    },
    {
      id: 3,
      icon: '/img/icons/card-icon-3.svg',
      title: 'RESULTADO DE EXAMES',
      description: 'Tenha acesso aos seus exames laboratoriais e de imagem',
    },
  ]

  return (
    <section className="pb-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all duration-300 cursor-pointer group flex items-center gap-4"
            >
              <div className="bg-red-500 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                <img
                  src={service.icon}
                  alt={service.title}
                  className="w-6 h-6 filter brightness-0 invert"
                />
              </div>
              <div className="flex-1">
                <h3 className="text-white font-bold text-lg mb-2 tracking-wide">
                  {service.title}
                </h3>
                <p className="text-white/80 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
