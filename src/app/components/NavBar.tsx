'use client'
import { useRouter, usePathname } from "next/navigation"
import Image from 'next/image';
import { useState } from 'react';

const navLinks = [
    { href: '/', label: 'Nossa missão' },
    { href: '/agendamento', label: 'Psicólogos' },
    { href: '/contato', label: 'Contato' },
    { href: '/sobre', label: 'Sobre' },
];

export default function NavBar() {
    const router = useRouter();
    const pathname = usePathname();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const isActive = (href: string) => pathname === href;

    return (
        <header className="fixed top-0 inset-x-0 z-50 bg-white shadow-sm">
            <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-14 items-center justify-between">
                    {/* Logo */}
                    <div className="flex items-center">
                        <button
                            type="button"
                            className="focus-visible:outline-none focus-visible:ring-2 rounded transition-transform hover:scale-105"
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

                    {/* Desktop: Links */}
                    <div className="hidden font-semibold lg:flex lg:items-center lg:gap-10 text-black">
                        {navLinks.map(link => (
                            <button
                                key={link.href}
                                type="button"
                                className={`relative px-2 py-1 transition-colors duration-200 ${isActive(link.href)
                                    ? 'text-blue-600 after:absolute after:left-0 after:bottom-0 after:w-full after:h-0.5 after:bg-blue-600 after:rounded-full'
                                    : 'hover:text-blue-500'
                                    }`}
                                onClick={() => router.push(link.href)}
                                aria-current={isActive(link.href) ? 'page' : undefined}
                            >
                                {link.label}
                            </button>
                        ))}
                    </div>

                    {/* Desktop: CTA */}
                    <div className="hidden lg:flex">
                        <button
                            type="button"
                            aria-label="Agendar consulta"
                            onClick={() => router.push('/agendamento')}
                            className=" bg-[#6DBFB8] hover:bg-blue-200 text-black font-semibold px-3 py-1 rounded-xl shadow-md hover:shadow-lg transition-all duration-200 focus:ring-2 focus:ring-blue-300 focus:outline-none"
                        >
                            Agendar agora!
                        </button>
                    </div>

                    {/* Mobile + Tablet: hamburguer */}
                    <div className="lg:hidden">
                        <button
                            type="button"
                            className="inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#026773]/60"
                            aria-controls="menu-mobile"
                            aria-expanded={isMobileMenuOpen}
                            aria-label={isMobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        >
                            <span className="sr-only">{isMobileMenuOpen ? 'Fechar' : 'Abrir'} menu</span>
                            {!isMobileMenuOpen ? (
                                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                </svg>
                            ) : (
                                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            </nav>

            {/* Mobile + Tablet menu */}
            {isMobileMenuOpen && (
                <div className="lg:hidden bg-white border-t border-gray-200 shadow-lg">
                    <div className="px-4 py-3 space-y-1">
                        {navLinks.map(link => (
                            <button
                                key={link.href}
                                type="button"
                                className={`block w-full text-left px-3 py-2 rounded-md font-semibold transition-colors ${isActive(link.href)
                                    ? 'text-blue-600 bg-blue-50 border-l-4 border-blue-600'
                                    : 'text-gray-900 hover:bg-gray-100'
                                    }`}
                                onClick={() => {
                                    setIsMobileMenuOpen(false);
                                    router.push(link.href);
                                }}
                                aria-current={isActive(link.href) ? 'page' : undefined}
                            >
                                {link.label}
                            </button>
                        ))}
                        <div className="pt-2">
                            <button
                                type="button"
                                aria-label="Agendar consulta"
                                onClick={() => {
                                    setIsMobileMenuOpen(false);
                                    router.push('/agendamento');
                                }}
                                className="w-full inline-flex items-center justify-center bg-gradient-to-r from-yellow-400 to-yellow-500 text-black font-semibold px-4 py-3 rounded-lg shadow-md transition-all duration-300 ease-out hover:shadow-lg"
                            >
                                Agendar agora
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
}

