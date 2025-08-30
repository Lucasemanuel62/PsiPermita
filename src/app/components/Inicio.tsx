"use client"
import Image from 'next/image';

export default function TelaInicio() {

    return (
        <section className={`min-h-screen flex items-center p-10 justify-center`}>
            {/* Background */}
            <div className=" bg-cover bg-center bg-no-repeat">
                <Image
                    src="/image/fundo.jpeg"
                    alt="Background"
                    fill
                    className="object-center"
                    priority
                />
                {/* Filtro/Overlay com gradiente */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/70"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 max-w-4xl mx-auto px-5 text-center text-white">
                <h1 className="text-5xl md:text-7xl font-light mb-6 animate-fade-in leading-tight">
                    <span className="font-semibold">Aqui...</span>
                </h1>

                <p className="text-xl md:text-2xl mb-8 font-light opacity-95 max-w-2xl mx-auto animate-fade-in [animation-delay:200ms]">
                    Acreditamos que é sobre se sentir bem no espaço
                    que acolhe para transformar e cuidar para florecer.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in [animation-delay:400ms]">

                </div>
            </div>
        </section>
    );
}