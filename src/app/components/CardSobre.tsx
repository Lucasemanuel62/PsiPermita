export default function CardSobre() {
    const cardsData = [
        {
            id: 1,
            title: 'Consultas no conforto do seu lar',
            description: 'Agende sua consulta online e receba atendimento com praticidade e segurança, sem precisar sair de casa. Mais conforto, mais cuidado, mais saúde para você.',
            color: 'bg-[#012030]/30 text-blue-600',
        },
        {
            id: 2,
            title: 'Atendimento acessível e prático',
            description: 'Com apenas alguns cliques, você tem acesso a profissionais qualificados. Economia de tempo, praticidade e qualidade no cuidado com a sua saúde mental.',
            color: 'bg-[#024959]/30 text-green-600',
        },
        {
            id: 3,
            title: 'Privacidade e segurança garantidas',
            description: 'Suas sessões são realizadas em ambiente seguro e sigiloso, preservando sua confidencialidade. Você fala com tranquilidade e confiança.',
            color: 'bg-[#026773]/30 text-amber-600',
        },
        {
            id: 4,
            title: 'Flexibilidade para sua rotina',
            description: 'Escolha o melhor horário e local para suas consultas. A psicoterapia online se adapta ao seu dia a dia, oferecendo equilíbrio e bem-estar sem complicações.',
            color: 'bg-[#3CA6A6]/30 text-red-600',
        },
    ];
    return (
        <section className="w-full min-h-[100vh]">
            <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">

                <div className="max-w-7xl mx-auto">
                    <h2 className="text-center text-4xl sm:text-5xl font-extrabold tracking-tight leading-tight bg-black bg-clip-text text-transparent" id="beneficios-psicoterapia">
                        Benefícios da Psicoterapia Online
                    </h2>
                    <div className="mt-3 mb-6 flex justify-center">
                        <span className="h-1.5 w-24 sm:w-28 rounded-full bg-black" />
                    </div>
                    <p className="mx-auto max-w-prose pb-4 text-center text-base sm:text-lg text-gray-600 leading-relaxed">
                        Confira abaixo
                    </p>

                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                        {cardsData.map((card) => (
                            <div
                                key={card.id}
                                tabIndex={0}
                                className="group bg-white rounded-xl shadow-md overflow-hidden ring-1 ring-black/5 transition duration-300 ease-out will-change-transform hover:shadow-lg hover:ring-black/10 motion-safe:hover:-translate-y-1 motion-safe:hover:scale-[1.02] motion-reduce:transform-none motion-reduce:transition-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/50"
                            >
                                <div className="p-6">
                                    <div className={`flex flex-col p-6 items-center justify-center w-full rounded-lg ${card.color} mb-4 transition-colors duration-300 group-hover:brightness-105`}>
                                        <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mt-1">
                                            {card.title}
                                        </h3>
                                        <p className="mt-2 text-gray-600">{card.description}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-12 text-center">
                        <button aria-label="Agendar consulta" className="relative inline-flex items-center justify-center bg-gradient-to-r from-[#012030] to-[#026773] hover:from-[#013746] hover:to-[#038492] text-white font-semibold py-3 px-7 rounded-xl shadow-md transition-all duration-300 ease-out hover:shadow-xl motion-safe:hover:-translate-y-0.5 motion-safe:hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#026773]/60 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-50">
                            Agendar minha consulta
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}