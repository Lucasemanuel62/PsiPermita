"use client"

import NavBar from "../components/NavBar"
import PsychologistCard from "../components/PsicologoCard"
import { useState, useMemo } from "react"
import Footer from "../components/Footer"

export default function Agendamento() {
    const [searchTerm, setSearchTerm] = useState("")

    // Dados dos psicólogos memoizados para evitar recriação
    const psychologists = useMemo(() => [
        {
            name: "Ana Luiza",
            crp: "00/00000",
            price: 120,
            photo: "/image/logo.ico",
            specialties: ["Ansiedade", "TCC", "Autoestima"],
            approach: "Terapia Cognitivo-Comportamental",
            audience: "Adultos e adolescentes",
            bio: "Atuação focada em ansiedade, depressão e desenvolvimento pessoal.",
            whatsapp: "(11) 91234-5678",
        },
        {
            name: "Lucas Oliveira",
            crp: "11/11111",
            price: 150,
            photo: "/image/logo.ico",
            specialties: ["Relacionamentos", "Estresse", "Terapia de Casal"],
            approach: "Humanista",
            audience: "Casais e jovens adultos",
            bio: "Acolhimento e escuta ativa para relações mais saudáveis.",
            whatsapp: "(21) 99876-5432",
        },
        {
            name: "Julia Santos",
            crp: "22/22222",
            price: 130,
            photo: "/image/logo.ico",
            specialties: ["Depressão", "Ansiedade", "Mindfulness"],
            approach: "Integrativa",
            audience: "Adultos",
            bio: "Integra diferentes abordagens com foco em qualidade de vida.",
            whatsapp: "(31) 98765-4321",
        },
    ], [])

    // Filtra os psicólogos baseado no termo de busca
    const filteredPsychologists = useMemo(() => {
        if (!searchTerm.trim()) return psychologists

        const term = searchTerm.toLowerCase()
        return psychologists.filter(psychologist =>
            psychologist.specialties.some(specialty =>
                specialty.toLowerCase().includes(term)
            ) ||
            psychologist.approach.toLowerCase().includes(term) ||
            psychologist.name.toLowerCase().includes(term)
        )
    }, [searchTerm, psychologists])

    return (
        <>
            <NavBar />
            <main className="min-h-screen pt-20 pb-16 bg-gray-50">
                <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
                    {/* Campo de busca */}
                    <div className="mb-8">
                        <div className="max-w-md mx-auto">
                            <label htmlFor="search" className="block text-sm font-medium text-gray-700 mb-2 text-center">
                                Buscar Psicólogos
                            </label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                    </svg>
                                </div>
                                <input
                                    type="text"
                                    id="search"
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    placeholder="Buscar por especialidade, abordagem ou nome..."
                                    className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                />
                            </div>
                            <p className="mt-2 text-xs text-gray-500 text-center">
                                Digite uma especialidade (ex: ansiedade, TCC) ou abordagem (ex: humanista, cognitivo)
                            </p>
                        </div>
                    </div>

                    {/* Resultados da busca */}
                    <div className="mb-6 text-center">
                        <p className="text-gray-600">
                            {filteredPsychologists.length === 0 ? (
                                <span className="text-red-500 font-medium">
                                    Nenhum psicólogo encontrado para &quot;{searchTerm}&quot;
                                </span>
                            ) : (
                                <span className="text-gray-700">
                                    {filteredPsychologists.length} psicólogo{filteredPsychologists.length !== 1 ? 's' : ''} encontrado{filteredPsychologists.length !== 1 ? 's' : ''}
                                    {searchTerm && ` para &quot;${searchTerm}&quot;`}
                                </span>
                            )}
                        </p>
                    </div>

                    {/** Dados de exemplo - depois podemos buscar de uma API */}
                    <div className="flex flex-col items-center gap-6">
                        {filteredPsychologists.map((p, idx) => (
                            <PsychologistCard key={idx} {...p} />
                        ))}
                    </div>

                    {/* Mensagem quando não há resultados */}
                    {filteredPsychologists.length === 0 && searchTerm && (
                        <div className="text-center py-8">
                            <p className="text-gray-500 mb-4">
                                Tente buscar por termos diferentes ou mais gerais
                            </p>
                            <button
                                onClick={() => setSearchTerm("")}
                                className="text-blue-600 hover:text-blue-800 underline"
                            >
                                Limpar busca
                            </button>
                        </div>
                    )}
                </div>
            </main>
            <Footer />
        </>
    )
}