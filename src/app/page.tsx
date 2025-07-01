import { SectionActionCards } from '@/components/Sections/SectionActionCards'
import { Metadata } from 'next'
export async function generateMetadata(): Promise<Metadata> {
  return {
    openGraph: {
      images: [
        {
          url: 'https://' + process.env.VERCEL_URL + '/seo.png',
        },
      ],
    },
  }
}

export default async function Home() {
  return (
    <main className="max-h-screen">
      <div className="min-h-screen relative overflow-hidden">
        <div
          className="fixed inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/img/doctor-bg.png')",
          }}
        >
          <div className="absolute inset-0 bg-black/30"></div>
        </div>

        <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 py-8">
          {/* Texto animado superior esquerdo */}
          <div className="fixed top-52 left-1/2 transform -translate-x-1/2 md:top-80 md:left-32 md:transform-none text-white animate-fade-in-left max-w-xs md:max-w-md text-center md:text-left">
            <div className="relative">
              <h2 className="text-lg sm:text-xl text-nowrap md:text-2xl lg:text-4xl font-black mb-2 md:mb-4 tracking-tight leading-tight bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent animate-pulse-soft">
                Em breve novidades...
              </h2>
              <div className="w-12 md:w-16 h-0.5 md:h-1 bg-gradient-to-r from-brand-blue-50 to-brand-blue-100 rounded-full animate-width-expand mx-auto md:mx-0"></div>
            </div>
          </div>

          {/* Texto animado superior direito */}
          <div className="fixed top-80 left-1/2 transform -translate-x-1/2 md:top-80 md:right-32 md:left-auto md:transform-none text-white animate-fade-in-right max-w-xs md:max-w-md text-center md:text-right">
            <div className="relative">
              <h2 className="text-lg sm:text-xl text-nowrap md:text-2xl lg:text-4xl font-black mb-2 md:mb-4 tracking-tight leading-tight bg-gradient-to-r from-white via-red-100 to-white bg-clip-text text-transparent animate-pulse-soft">
                Um novo site para você
              </h2>
              <div className="w-16 md:w-20 h-0.5 md:h-1 bg-gradient-to-r from-red-400 to-red-600 rounded-full animate-width-expand-delayed mx-0"></div>
            </div>
          </div>

          {/* Seção inferior com botão e cards */}
          <div className="absolute bottom-4 md:bottom-20 left-0 right-0 px-4">
            {/* Botão do Portal */}
            <div className="backdrop-blur-md bg-brand-red rounded-lg p-4 md:p-6 text-center w-full max-w-sm md:max-w-md hover:bg-brand-red/90 mx-auto transition-all duration-300 cursor-pointer group transform hover:-translate-y-1 md:hover:-translate-y-2 mb-4 md:mb-8">
              <a
                href="https://ws.datasigh.com.br/portal-paciente/hospital-unigastro/horarios"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <h3 className="font-bold text-sm md:text-xl mb-1 md:mb-2 tracking-wide text-white uppercase">
                  Acessar o portal do paciente
                </h3>
              </a>
            </div>

            {/* Cards de Ação */}
            <div className="w-full">
              <SectionActionCards />
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
