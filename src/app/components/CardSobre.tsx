import { FaHome, FaUserFriends, FaLock, FaClock } from "react-icons/fa";

export default function CardSobre() {
    const cardsData = [
        {
            id: 1,
            title: 'Consultas no conforto do seu lar',
            description: 'Agende sua consulta online e receba atendimento com praticidade e segurança, sem precisar sair de casa.',
            icon: <FaHome className="w-10 h-10 text-blue-500" />,
            color: 'bg-white/70 backdrop-blur-md shadow-lg',
        },
        {
            id: 2,
            title: 'Atendimento acessível e prático',
            description: 'Com apenas alguns cliques, você tem acesso a profissionais qualificados. Economia de tempo, praticidade e qualidade no cuidado com a sua saúde mental.',
            icon: <FaUserFriends className="w-10 h-10 text-green-500" />,
            color: 'bg-white/70 backdrop-blur-md shadow-lg',
        },
        {
            id: 3,
            title: 'Privacidade e segurança garantidas',
            description: 'Suas sessões são realizadas em ambiente seguro e sigiloso, preservando sua confidencialidade.',
            icon: <FaLock className="w-10 h-10 text-amber-500" />,
            color: 'bg-white/70 backdrop-blur-md shadow-lg',
        },
        {
            id: 4,
            title: 'Flexibilidade para sua rotina',
            description: 'Escolha o melhor horário e local para suas consultas. A psicoterapia online se adapta ao seu dia a dia.',
            icon: <FaClock className="w-10 h-10 text-red-500" />,
            color: 'bg-white/70 backdrop-blur-md shadow-lg',
        },
    ];
    return (
        <section className="w-full min-h-[60vh] py-16 bg-gradient-to-br from-[#f0f4f8] to-[#e0e7ef]">
            <div className="max-w-7xl mx-auto px-4">
                <h2 className="text-center text-4xl sm:text-5xl font-extrabold tracking-tight leading-tight text-gray-900 mb-2">
                    Psicoterapia Online: Benefícios para Você
                </h2>
                <p className="mx-auto max-w-2xl pb-8 text-center text-lg text-gray-600 leading-relaxed">
                    Descubra como a terapia online pode transformar sua rotina, trazendo acolhimento, flexibilidade e segurança para o seu bem-estar emocional.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    {cardsData.map((card) => (
                        <div
                            key={card.id}
                            className={`rounded-2xl p-8 flex flex-col items-center text-center ${card.color} transition duration-300 hover:shadow-2xl hover:scale-[1.03]`}
                            tabIndex={0}
                        >
                            <div className="mb-4">{card.icon}</div>
                            <h3 className="text-lg font-bold text-gray-800 mb-2">{card.title}</h3>
                            <p className="text-gray-600 text-base">{card.description}</p>
                        </div>
                    ))}
                </div>
                <div className="mt-12 text-center">
                    <button aria-label="Agendar consulta" className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-7 rounded-xl shadow-md transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400/60 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-50">
                        Agendar minha consulta
                    </button>
                </div>
            </div>
        </section>
    )
}