export default function Funcionamento() {
    return (
        <section className="py-16 bg-gray-50">
            <div className="max-w-6xl mx-auto px-4">
                {/* Título da seção */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">
                        Como Funciona o PsiPermita
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Conectamos você aos melhores psicólogos da sua região para consultas particulares
                    </p>
                </div>

                {/* Passo a passo */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Passo 1 */}
                    <div className="text-center">
                        <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                            <span className="text-white text-xl font-bold">1</span>
                        </div>
                        <h3 className="text-xl font-semibold text-gray-800 mb-3">
                            Busque Psicólogos
                        </h3>
                        <p className="text-gray-600">
                            Explore nossa base de psicólogos especializados por localização, especialidade e disponibilidade.
                        </p>
                    </div>

                    {/* Passo 2 */}
                    <div className="text-center">
                        <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                            <span className="text-white text-xl font-bold">2</span>
                        </div>
                        <h3 className="text-xl font-semibold text-gray-800 mb-3">
                            Analise os Perfis
                        </h3>
                        <p className="text-gray-600">
                            Leia sobre a formação, especialidades, abordagem terapêutica e avaliações de cada profissional.
                        </p>
                    </div>

                    {/* Passo 3 */}
                    <div className="text-center">
                        <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                            <span className="text-white text-xl font-bold">3</span>
                        </div>
                        <h3 className="text-xl font-semibold text-gray-800 mb-3">
                            Entre em Contato
                        </h3>
                        <p className="text-gray-600">
                            Use as informações de contato fornecidas para falar diretamente com o psicólogo escolhido.
                        </p>
                    </div>

                    {/* Passo 4 */}
                    <div className="text-center">
                        <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                            <span className="text-white text-xl font-bold">4</span>
                        </div>
                        <h3 className="text-xl font-semibold text-gray-800 mb-3">
                            Agende Diretamente
                        </h3>
                        <p className="text-gray-600">
                            Combine horários, valores e modalidade de consulta diretamente com o profissional escolhido.
                        </p>
                    </div>
                </div>

                {/* Informações adicionais */}
                <div className="mt-16 bg-white rounded-lg shadow-lg p-8">
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="text-center">
                            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                            </div>
                            <h4 className="font-semibold text-gray-800 mb-2">Busca Personalizada</h4>
                            <p className="text-gray-600 text-sm">
                                Filtros por especialidade, localização e disponibilidade
                            </p>
                        </div>

                        <div className="text-center">
                            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <h4 className="font-semibold text-gray-800 mb-2">Profissionais Verificados</h4>
                            <p className="text-gray-600 text-sm">
                                Todos os psicólogos são certificados e avaliados
                            </p>
                        </div>

                        <div className="text-center">
                            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                                </svg>
                            </div>
                            <h4 className="font-semibold text-gray-800 mb-2">Contato Direto</h4>
                            <p className="text-gray-600 text-sm">
                                Comunicação direta entre paciente e psicólogo
                            </p>
                        </div>
                    </div>
                </div>

                {/* Informações sobre consultas particulares */}
                <div className="mt-12 bg-blue-50 rounded-lg p-8 text-center">
                    <h3 className="text-2xl font-semibold text-blue-800 mb-4">
                        Consultas Particulares
                    </h3>
                    <p className="text-blue-700 max-w-3xl mx-auto">
                        O PsiPermita é uma plataforma de busca e conexão. As consultas são agendadas e realizadas
                        diretamente entre você e o psicólogo escolhido, com valores e horários definidos por cada profissional.
                        Nossa missão é facilitar o encontro entre pacientes e psicólogos qualificados.
                    </p>
                </div>

                {/* Call to action */}
                <div className="text-center mt-12">
                    <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition duration-300 transform hover:scale-105">
                        Encontrar Psicólogo
                    </button>
                    <p className="text-gray-500 mt-4 text-sm">
                        Conecte-se com profissionais qualificados da sua região
                    </p>
                </div>
            </div>
        </section>
    )
}