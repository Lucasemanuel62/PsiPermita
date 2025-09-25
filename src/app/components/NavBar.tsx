'use client'
import { useRouter, usePathname } from "next/navigation"
import Image from 'next/image';
import { useState } from 'react';


export default function NavBar() {
    const router = useRouter()
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const pathname = usePathname()
    const isActive = (href: string) => pathname === href
    const linkBase = "text-base transition-colors"
    const linkActive = "border-b-2 border-black pb-0.5"
    const linkIdle = "hover:underline underline-offset-4 decoration-2"

    return (
        <header className="fixed top-0 inset-x-0 z-50 bg-white">
            <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" aria-label="Menu principal">
                <div className="flex h-16 items-center justify-between">
                    <div className="flex items-center">
                        <button
                            type="button"
                            className="focus-visible:outline-none focus-visible:ring-2 rounded"
                            onClick={() => router.push('/')}
                            aria-label="Ir para início"
                        >
                            <Image
                                src="/image/logo.ico"
                                alt="imagem da logo"
                                width={160}
                                height={50}
                                style={{ height: 'auto' }}
                                className="relative bottom-1"
                                priority
                            />
                        </button>
                    </div>

                    <div className="hidden md:flex md:items-center md:gap-10 font-semibold text-black">
                        <button
                            type="button"
                            className={`${linkBase} ${isActive('/') ? linkActive : linkIdle}`}
                            onClick={() => router.push('/')}
                            aria-current={isActive('/') ? 'page' : undefined}
                        >
                            Nossa missão
                        </button>
                        <button
                            type="button"
                            className={`${linkBase} ${isActive('/agendamento') ? linkActive : linkIdle}`}
                            onClick={() => router.push('/agendamento')}
                            aria-current={isActive('/agendamento') ? 'page' : undefined}
                        >
                            Psicólogos
                        </button>
                        <button
                            type="button"
                            className={`${linkBase} ${isActive('/contato') ? linkActive : linkIdle}`}
                            onClick={() => router.push('/contato')}
                            aria-current={isActive('/profissionais') ? 'page' : undefined}
                        >
                            Contato
                        </button>
                        <button
                            type="button"
                            className={`${linkBase} ${isActive('/sobre') ? linkActive : linkIdle}`}
                            onClick={() => router.push('/sobre')}
                            aria-current={isActive('/sobre') ? 'page' : undefined}
                        >
                            Sobre
                        </button>
                    </div>

                    {/* CTA Desktop */}
                    <div className="hidden md:flex">
                        <button
                            type="button"
                            aria-label="Agendar consulta"
                            onClick={() => router.push('/agendamento')}
                            className="inline-flex items-center justify-center bg-yellow-500 border border-black py-1 text-black font-semibold px-5 rounded-lg shadow-md transition-all duration-300 ease-out hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#026773]/60"
                        >
                            Agendar agora
                        </button>
                    </div>

                    <div className="md:hidden flex items-center">
                        <button
                            type="button"
                            className="inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#026773]/60"
                            aria-controls="menu-mobile"
                            aria-expanded={isMobileMenuOpen}
                            aria-label="Abrir menu"
                            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
                        >
                            <span className="sr-only">Abrir menu</span>
                            <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                            </svg>
                        </button>
                    </div>
                </div>
            </nav>

            {/* Mobile menu */}
            <div id="menu-mobile" className={`${isMobileMenuOpen ? 'block' : 'hidden'} md:hidden border-t border-gray-200 bg-white`}>
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-3">
                    <div className="flex flex-col gap-2">
                        {/* CTA Mobile */}
                        <button
                            type="button"
                            aria-label="Agendar consulta"
                            onClick={() => { setIsMobileMenuOpen(false); router.push('/agendamento') }}
                            className="w-full inline-flex items-center justify-center bg-gradient-to-r from-[#012030] to-[#026773] hover:from-[#013746] hover:to-[#038492] text-white font-semibold px-4 py-3 rounded-lg shadow-md transition-all duration-300 ease-out hover:shadow-lg"
                        >
                            Agendar
                        </button>
                        <button
                            type="button"
                            className={`w-full text-left px-2 py-3 rounded-md font-semibold text-gray-900 hover:bg-gray-100 ${isActive('/') ? 'border-b-2 border-black' : ''}`}
                            onClick={() => { setIsMobileMenuOpen(false); router.push('/') }}
                            aria-current={isActive('/') ? 'page' : undefined}
                        >
                            Nossa missão
                        </button>
                        <button
                            type="button"
                            className={`w-full text-left px-2 py-3 rounded-md font-semibold text-gray-900 hover:bg-gray-100 ${isActive('/agendamento') ? 'border-b-2 border-black' : ''}`}
                            onClick={() => { setIsMobileMenuOpen(false); router.push('/agendamento') }}
                            aria-current={isActive('/agendamento') ? 'page' : undefined}
                        >
                            Psicólogos
                        </button>
                        <button
                            type="button"
                            className={`w-full text-left px-2 py-3 rounded-md font-semibold text-gray-900 hover:bg-gray-100 ${isActive('/profissionais') ? 'border-b-2 border-black' : ''}`}
                            onClick={() => { setIsMobileMenuOpen(false); router.push('/profissionais') }}
                            aria-current={isActive('/profissionais') ? 'page' : undefined}
                        >
                            Contato
                        </button>
                        <button
                            type="button"
                            className={`w-full text-left px-2 py-3 rounded-md font-semibold text-gray-900 hover:bg-gray-100 ${isActive('/sobre') ? 'border-b-2 border-black' : ''}`}
                            onClick={() => { setIsMobileMenuOpen(false); router.push('/sobre') }}
                            aria-current={isActive('/sobre') ? 'page' : undefined}
                        >
                            Sobre
                        </button>
                    </div>
                </div>
            </div>
        </header>
    )
}

