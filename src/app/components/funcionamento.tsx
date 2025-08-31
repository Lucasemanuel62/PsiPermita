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

                {/* imagem aqui */}
                <div className="mt-16 bg-white rounded-lg shadow-lg p-8">

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