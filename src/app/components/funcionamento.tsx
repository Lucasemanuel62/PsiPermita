'use client'
import { useRouter } from 'next/navigation'

const steps = [
    {
        number: "01",
        icon: "🔍",
        title: "Busque por Especialidade",
        description: "Digite sua necessidade e encontre psicólogos especializados na sua região.",
    },
    {
        number: "02",
        icon: "👥",
        title: "Compare Perfis Verificados",
        description: "Veja CRP, formação, experiência e valores de cada psicólogo.",
    },
    {
        number: "03",
        icon: "💬",
        title: "Contato Direto",
        description: "Converse diretamente via WhatsApp e agende sua consulta.",
    }
]

const differentials = [
    { icon: "🎯", title: "Curadoria Rigorosa", text: "Todos os psicólogos têm CRP ativo e formação comprovada" },
    { icon: "💰", title: "Sem Taxas Ocultas", text: "Pague apenas a consulta, sem intermediários" },
    { icon: "🔒", title: "100% Seguro", text: "Seus dados e conversas são confidenciais" },
    { icon: "⚡", title: "Rápido e Prático", text: "Encontre seu psicólogo em poucos minutos" }
]

export default function Funcionamento() {
    const router = useRouter()

    return (
        <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                        Como funciona o
                        <span className="text-[#6DBFB8] block mt-2">PsiPermita</span>
                    </h2>
                    <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                        Conectamos você aos melhores psicólogos da sua região de forma simples e segura.
                    </p>
                </div>

                {/* Steps */}
                <div className="grid sm:grid-cols-3 gap-8 mb-16">
                    {steps.map((step, index) => (
                        <div key={index} className="text-center">
                            <div className="w-20 h-20 bg-gradient-to-br from-[#6DBFB8] to-[#5AADA6] rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                                <span className="text-3xl" role="img" aria-label={step.title}>{step.icon}</span>
                            </div>
                            <div className="mb-3">
                                <span className="text-sm font-bold text-[#6DBFB8] bg-[#6DBFB8]/10 px-3 py-1 rounded-full">
                                    {step.number}
                                </span>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">
                                {step.title}
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                {step.description}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Differentials */}
                <div className="bg-white rounded-3xl shadow-xl p-8 lg:p-12 mb-16">
                    <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
                        Por que escolher o PsiPermita?
                    </h3>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {differentials.map((item, index) => (
                            <div key={index} className="text-center p-4">
                                <div className="text-4xl mb-4" role="img" aria-label={item.title}>{item.icon}</div>
                                <h4 className="font-bold text-gray-900 mb-2">{item.title}</h4>
                                <p className="text-gray-600 text-sm leading-relaxed">{item.text}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* CTA Section */}
                <div className="text-center bg-gradient-to-r from-[#6DBFB8] to-[#5AADA6] rounded-3xl p-12 text-white shadow-2xl">
                    <h3 className="text-3xl md:text-4xl font-bold mb-4">
                        Encontre seu psicólogo ideal
                    </h3>
                    <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
                        Comece sua jornada de bem-estar hoje mesmo. É grátis e sem compromisso.
                    </p>
                    <button
                        onClick={() => router.push('/agendamento')}
                        aria-label="Buscar psicólogos disponíveis"
                        className="bg-white text-[#6DBFB8] font-bold py-4 px-8 rounded-xl hover:bg-gray-50 transition-all duration-300 transform hover:scale-105 shadow-lg focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#6DBFB8] focus:outline-none min-h-[48px]"
                    >
                        Buscar Psicólogos
                    </button>
                </div>
            </div>
        </section>
    )
}