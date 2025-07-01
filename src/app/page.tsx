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
    <main
      className="h-screen bg-cover bg-center bg-no-repeat bg-fixed relative -mt-20"
      style={{
        backgroundImage: "url('/img/doctor-bg.png')",
      }}
    >
      <div className="absolute bottom-0 left-0 right-0">
        <div className="flex justify-center ">
          <a
            href="https://ws.datasigh.com.br/portal-paciente/hospital-unigastro/horarios"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-brand-red text-white text-2xl font-bold px-8 py-4 rounded-lg uppercase shadow-lg cursor-pointer inline-block text-center"
          >
            ACESSAR O PORTAL DO PACIENTE
          </a>
        </div>
        <SectionActionCards />
      </div>
    </main>
  )
}
