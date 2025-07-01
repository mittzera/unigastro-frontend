'use client'
import { useWindowScroll } from 'react-use'
import Link from 'next/link'
import { Container } from '../Partials/Container'
import { useEffect } from 'react'
import Icon from '../Adapters/Icon'

export function Header() {
  const { y } = useWindowScroll()
  const pathname = typeof window !== 'undefined' ? window.location.pathname : ''

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [pathname])

  return (
    <header
      className={`sticky top-10 z-50 max-w-7xl w-full mx-auto transition-all duration-500 rounded-lg 
         overflow-hidden bg-cover bg-center bg-no-repeat 
      
      
      `}
      style={{
        backgroundImage: "url('/img/header-bg.png')",
      }}
    >
      <Container>
        <div className="flex items-center justify-between relative z-10">
          <Link href="/">
            <img
              src="/img/logos/logo-unigastro.svg"
              alt=""
              className="cursor-pointer  py-4 transition-all duration-300 hover:scale-105 drop-shadow-sm"
              style={{ height: y > 0 ? '5rem' : '5rem' }}
            />
          </Link>
          <div className="hidden items-center gap-3 md:flex">
            {/* <NavLinks /> */}
            <div className="flex items-center gap-2 ">
              <Icon
                icon="ic:baseline-whatsapp"
                className="transition-all bg-gradient-to-br from-[#38B841] to-[#2da635] rounded-full p-1 text-white shadow-md hover:shadow-lg hover:scale-110"
                fontSize={24}
              />
              <p className="uppercase font-bold text-gray-700 text-sm">
                Atendimento whatsapp (91) 98463-2182
              </p>
            </div>

            <div className="flex items-center gap-2">
              <Icon
                icon="mdi:headset"
                className="transition-all bg-gradient-to-br from-[#696DFF] to-[#5a5edd] rounded-full p-1 text-white shadow-md hover:shadow-lg hover:scale-110"
                fontSize={24}
              />
              <p className="uppercase font-bold text-gray-700 text-sm">
                call center (91) 3246-3939
              </p>
            </div>
          </div>
        </div>
      </Container>
    </header>
  )
}
