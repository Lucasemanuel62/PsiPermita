"use client"
import Image from 'next/image';

export default function TelaInicio() {

    return (
        <section className="relative min-h-screen w-full mt-16 overflow-hidden">
            {/* Imagem desktop (lg para cima) */}
            <div className="hidden lg:block absolute inset-0 w-full h-full">
                <Image
                    src="/image/fundo-desktop.jpg"
                    alt="Background"
                    fill
                    sizes="100vw"
                    className="object-cover object-center"
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
            {/* Conteúdo */}
            <div className="relative z-10 flex flex-col items-center justify-center min-h-screen w-full p-10 text-center text-white">
                <h1 className="text-5xl md:text-7xl font-light mb-6 animate-fade-in leading-tight">
                    <span className="font-semibold">Aqui...</span>
                </h1>

                <p className="text-xl md:text-2xl mb-8 font-light opacity-95 max-w-2xl mx-auto animate-fade-in [animation-delay:200ms]">
                    Acreditamos que é sobre se sentir bem no espaço
                    que acolhe para transformar e cuidar para florecer.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in [animation-delay:400ms]">
                    {/* Botões ou outros conteúdos */}
                </div>
            </div>
        </section>
    );
}