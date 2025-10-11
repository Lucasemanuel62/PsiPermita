"use client"
import Image from 'next/image';

export default function TelaInicio() {

    return (
        <section className="relative min-h-screen w-full overflow-hidden">
            {/* Imagem desktop (lg para cima) */}
            <div className="hidden lg:block absolute inset-0 w-full h-full">
                <Image
                    src="/image/fundo-desktop.jpg"
                    alt="Background"
                    fill
                    sizes="100vw"
                    priority
                    quality={90}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/70 pointer-events-none"></div>
            </div>
            {/* Imagem tablet (md até lg-1) */}
            <div className="hidden md:block lg:hidden absolute inset-0 w-full h-full">
                <Image
                    src="/image/fundo-tablet.jpg"
                    alt="Background"
                    fill
                    sizes="100vw"
                    priority
                    quality={90}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/70 pointer-events-none"></div>
            </div>
            {/* Imagem mobile (abaixo de md) */}
            <div className="block md:hidden absolute inset-0 w-full h-full">
                <Image
                    src="/image/fundo-mobile.png"
                    alt="Background"
                    fill
                    sizes="100vw"
                    priority
                    quality={90}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/70 pointer-events-none"></div>
            </div>

            <div className="relative z-10 flex flex-col items-center justify-center min-h-screen w-full text-center text-white">
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-light animate-fade-in leading-tight">
                    <span className="font-semibold">Aqui...</span>
                </h1>

                <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold font-light opacity-95 max-w-2xl lg:max-w-4xl mx-auto animate-fade-in [animation-delay:200ms]">
                    Acreditamos que bem-estar o começa em um espaço que acolhe, cuida e possibilita a transformação.
                </p>
            </div>
        </section>
    );
}