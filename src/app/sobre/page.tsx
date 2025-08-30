import NavBar from "../components/NavBar"
import Footer from "../components/Footer"

export default function Sobre() {
    return (
        <>
            <NavBar />
            <main className="min-h-screen pt-20 pb-16 bg-gray-50">
                <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                    <header className="text-center max-w-3xl mx-auto">
                        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight leading-tight bg-black bg-clip-text text-transparent">
                            Sobre a nossa plataforma de psicoterapia
                        </h1>
                        <div className="mt-3 mb-6 flex justify-center">
                            <span className="h-1.5 w-24 sm:w-28 rounded-full bg-black" />
                        </div>
                        <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                            Conectamos pacientes a psicólogos(as) qualificados para atendimentos online com segurança,
                            acolhimento e praticidade. Nosso objetivo é facilitar o acesso à saúde mental com uma
                            experiência simples, transparente e humana.
                        </p>
                    </header>

                    <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
                        <article className="bg-white rounded-2xl shadow p-6 ring-1 ring-black/5">
                            <h2 className="text-xl font-semibold text-gray-900">Como funciona</h2>
                            <p className="mt-2 text-gray-600 leading-relaxed">
                                Você encontra profissionais por especialidade, abordagem e perfil, escolhe o melhor horário e
                                realiza a consulta por videochamada. O processo é 100% online e pensado para se adaptar à sua rotina.
                            </p>
                            <ul className="mt-4 space-y-2 text-gray-700">
                                <li className="flex gap-2"><span className="text-[#026773]">•</span> Triagem rápida e agendamento simplificado</li>
                                <li className="flex gap-2"><span className="text-[#026773]">•</span> Profissionais verificados e qualificados</li>
                                <li className="flex gap-2"><span className="text-[#026773]">•</span> Atendimento seguro e sigiloso</li>
                            </ul>
                        </article>

                        <article className="bg-white rounded-2xl shadow p-6 ring-1 ring-black/5">
                            <h2 className="text-xl font-semibold text-gray-900">Por que escolher a plataforma</h2>
                            <p className="mt-2 text-gray-600 leading-relaxed">
                                Unimos tecnologia e cuidado para proporcionar acessibilidade, qualidade e conforto.
                                Nosso time busca continuamente melhorar a jornada de quem precisa de apoio psicológico.
                            </p>
                            <ul className="mt-4 space-y-2 text-gray-700">
                                <li className="flex gap-2"><span className="text-[#012030]">•</span> Acesso de qualquer lugar, no seu tempo</li>
                                <li className="flex gap-2"><span className="text-[#012030]">•</span> Ferramentas simples e intuitivas</li>
                                <li className="flex gap-2"><span className="text-[#012030]">•</span> Foco em resultados e bem-estar</li>
                            </ul>
                        </article>
                    </div>

                    <section className="mt-12 bg-white rounded-2xl shadow p-6 ring-1 ring-black/5">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div>
                                <h3 className="text-lg font-semibold text-gray-900">Nossa missão</h3>
                                <p className="mt-2 text-gray-600 leading-relaxed">
                                    Tornar o cuidado em saúde mental mais acessível, acolhedor e eficiente para todas as pessoas.
                                </p>
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold text-gray-900">Nossa visão</h3>
                                <p className="mt-2 text-gray-600 leading-relaxed">
                                    Ser a plataforma referência em psicoterapia online, conectando pessoas e profissionais com qualidade.
                                </p>
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold text-gray-900">Nossos valores</h3>
                                <ul className="mt-2 space-y-2 text-gray-700">
                                    <li className="flex gap-2"><span className="text-[#026773]">•</span> Ética e sigilo</li>
                                    <li className="flex gap-2"><span className="text-[#026773]">•</span> Respeito e empatia</li>
                                    <li className="flex gap-2"><span className="text-[#026773]">•</span> Inovação com responsabilidade</li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    <div className="mt-12 text-center">
                        <a
                            href="/agendamento"
                            className="inline-flex items-center justify-center bg-gradient-to-r from-[#012030] to-[#026773] text-white font-semibold px-6 py-3 rounded-xl shadow-md hover:shadow-lg transition"
                        >
                            Agendar minha consulta
                        </a>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    )
}

