'use client'
import React from 'react'

export function SectionActionCards() {
  const services = [
    {
      id: 1,
      icon: '/img/icons/card-icon-1.svg',
      title: 'MARCAR CONSULTA',
      description: 'Escolha a especialidade, dia e horário',
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
      description: 'Acesso aos seus exames laboratoriais',
    },
  ]

  return (
    <section className="py-4 md:py-8 px-2 md:px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:justify-center md:items-center gap-4 md:gap-8">
          {services.map((service, index) => (
            <div
              key={service.id}
              className={`backdrop-blur-sm rounded-lg p-4 md:p-6 hover:bg-white/20 transition-all duration-300 cursor-pointer group flex items-center gap-3 md:gap-4 w-full md:w-auto ${
                index < services.length - 1
                  ? 'md:border-r border-gray-300/30'
                  : ''
              }`}
            >
              <div className="bg-red-500 w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                <img
                  src={service.icon}
                  alt={service.title}
                  className="w-5 h-5 md:w-6 md:h-6"
                />
              </div>
              <div className="text-left flex-1">
                <h3 className="text-white font-bold text-sm md:text-lg mb-1 md:mb-2 tracking-wide">
                  {service.title}
                </h3>
                <p className="text-white/80 text-xs md:text-sm leading-relaxed">
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
