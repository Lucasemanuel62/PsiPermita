'use client'

const testimonials = [
    {
        name: "Maria S.",
        role: "Paciente desde 2023",
        text: "Encontrei uma psicóloga incrível através do PsiPermita. O processo foi simples e direto, sem burocracias. Hoje me sinto muito melhor e mais confiante.",
        rating: 5,
        avatar: "M"
    },
    {
        name: "João P.",
        role: "Paciente desde 2024",
        text: "A plataforma me ajudou a encontrar um profissional especializado em ansiedade. A transparência nos perfis e valores foi essencial para minha escolha.",
        rating: 5,
        avatar: "J"
    },
    {
        name: "Ana L.",
        role: "Paciente desde 2023",
        text: "Procurava terapia há meses mas não sabia por onde começar. O PsiPermita facilitou tudo! Em poucos dias já estava em consulta.",
        rating: 5,
        avatar: "A"
    }
]

export default function Testemunhos() {
    return (
        <section className="py-20 bg-white">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                        O que nossos <span className="text-[#6DBFB8]">usuários dizem</span>
                    </h2>
                    <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                        Histórias reais de pessoas que encontraram o apoio profissional que precisavam.
                    </p>
                </div>

                {/* Testimonials Grid */}
                <div className="grid md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <div
                            key={index}
                            className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-100"
                        >
                            {/* Stars */}
                            <div className="flex gap-1 mb-4" aria-label={`Avaliação: ${testimonial.rating} de 5 estrelas`}>
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <svg
                                        key={i}
                                        className="w-5 h-5 text-yellow-400 fill-current"
                                        viewBox="0 0 20 20"
                                        aria-hidden="true"
                                    >
                                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                                    </svg>
                                ))}
                            </div>

                            {/* Text */}
                            <p className="text-gray-700 mb-6 leading-relaxed italic">
                                &ldquo;{testimonial.text}&rdquo;
                            </p>

                            {/* Author */}
                            <div className="flex items-center gap-3">
                                <div className="w-12 h-12 bg-gradient-to-br from-[#6DBFB8] to-[#5AADA6] rounded-full flex items-center justify-center text-white font-bold text-lg">
                                    {testimonial.avatar}
                                </div>
                                <div>
                                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Trust Badge */}
                <div className="mt-12 text-center">
                    <div className="inline-flex items-center gap-2 bg-[#6DBFB8]/10 px-6 py-3 rounded-full">
                        <svg className="w-5 h-5 text-[#6DBFB8]" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                            <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className="text-[#6DBFB8] font-semibold">Todos os depoimentos são de usuários reais verificados</span>
                    </div>
                </div>
            </div>
        </section>
    )
}

