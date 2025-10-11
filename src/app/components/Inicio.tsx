"use client"
import Image from 'next/image';

export default function TelaInicio() {

    return (
        <section className="relative min-h-screen w-full overflow-hidden">
            {/* Imagem desktop (lg para cima) */}
            <div className="hidden lg:block absolute inset-0 w-full h-full">
                <Image
                    src="/image/fundo-desktop.jpg"
                    alt="Ambiente acolhedor e tranquilo do consultório de psicologia"
                    fill
                    sizes="100vw"
                    priority
                    quality={85}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/75 pointer-events-none"></div>
            </div>
            {/* Imagem tablet (md até lg-1) */}
            <div className="hidden md:block lg:hidden absolute inset-0 w-full h-full">
                <Image
                    src="/image/fundo-tablet.jpg"
                    alt="Ambiente acolhedor e tranquilo do consultório de psicologia"
                    fill
                    sizes="100vw"
                    priority
                    quality={85}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/75 pointer-events-none"></div>
            </div>
            {/* Imagem mobile (abaixo de md) */}
            <div className="block md:hidden absolute inset-0 w-full h-full">
                <Image
                    src="/image/fundo-mobile.png"
                    alt="Ambiente acolhedor e tranquilo do consultório de psicologia"
                    fill
                    sizes="100vw"
                    priority
                    quality={85}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/75 pointer-events-none"></div>
            </div>

            <div className="relative z-10 flex flex-col items-center justify-center min-h-screen w-full text-center text-white px-4 sm:px-6 md:px-8">
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-6 md:mb-8 animate-fade-in leading-tight tracking-tight">
                    Aqui...
                </h1>

                <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-normal leading-relaxed opacity-95 max-w-2xl lg:max-w-4xl mx-auto animate-fade-in [animation-delay:200ms]">
                    Acreditamos que bem-estar o começa em um espaço que acolhe, cuida e possibilita a transformação.
                </p>
            </div>
        </section>
    );
}