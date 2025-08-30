"use client"

import NavBar from "../components/NavBar"
import Image from "next/image"
import type { FC } from "react"
import { useState, useMemo } from "react"
import Footer from "../components/Footer"

interface PsychologistCardProps {
    name: string
    crp: string
    price: number
    photo: string
    specialties: string[]
    approach: string
    audience: string
    bio: string
    whatsapp: string
}

const UsersIcon: FC<{ className?: string }> = ({ className }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className={className}
        aria-hidden="true"
    >
        <path d="M16 11c1.933 0 3.5-1.567 3.5-3.5S17.933 4 16 4s-3.5 1.567-3.5 3.5S14.067 11 16 11zm-8 0c1.933 0 3.5-1.567 3.5-3.5S9.933 4 8 4 4.5 5.567 4.5 7.5 6.067 11 8 11zm0 2c-2.485 0-7 1.243-7 3.5V19a1 1 0 001 1h12a1 1 0 001-1v-2.5C15 14.243 10.485 13 8 13zm8 0c-.53 0-1.116.035-1.732.098 1.45.816 2.732 2.074 2.732 3.902V19a1 1 0 001 1h5a1 1 0 001-1v-2.5c0-2.257-4.515-3.5-7-3.5z" />
    </svg>
)

const PhoneIcon: FC<{ className?: string }> = ({ className }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className={className}
        aria-hidden="true"
    >
        <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.11.37 2.31.57 3.58.57a1 1 0 011 1V21a1 1 0 01-1 1C11.402 22 2 12.598 2 1a1 1 0 011-1h3.5a1 1 0 011 1c0 1.27.2 2.47.57 3.58a1 1 0 01-.24 1.01l-2.2 2.2z" />
    </svg>
)

const PsychologistCard: FC<PsychologistCardProps> = ({
    name,
    crp,
    price,
    photo,
    specialties,
    approach,
    audience,
    bio,
    whatsapp,
}) => {
    return (
        <div className="bg-white rounded-2xl shadow-md p-6 flex flex-col gap-4 w-full md:w-[700px]">
            {/* Topo: foto + nome */}
            <div className="flex items-center gap-4">
                <Image
                    src={photo}
                    alt={name}
                    width={80}
                    height={80}
                    className="rounded-full object-cover"
                />
                <div className="flex flex-col">
                    <h2 className="text-xl font-semibold">{name}</h2>
                    <span className="text-gray-600">Psicólogo(a)</span>
                    <span className="text-sm text-gray-500">CRP: {crp}</span>
                </div>
                <div className="ml-auto bg-gray-100 px-3 py-1 rounded-full text-sm font-medium">
                    R${price}
                </div>
            </div>

            {/* Especialidades */}
            <div className="flex flex-wrap gap-2">
                {specialties.map((item, index) => (
                    <span
                        key={index}
                        className="text-xs font-medium px-3 py-1 rounded-full bg-[#012030]/10 text-[#012030] ring-1 ring-[#012030]/20"
                    >
                        {item}
                    </span>
                ))}
            </div>

            {/* Abordagem e público */}
            <p className="text-sm">
                <strong>Abordagem:</strong> {approach} <br />
                <UsersIcon className="inline w-4 h-4 mr-1" />
                {audience}
            </p>

            {/* Bio */}
            <div>
                <h3 className="font-semibold">Sobre mim:</h3>
                <p className="text-sm text-gray-700 line-clamp-3">{bio}</p>
            </div>

            {/* Botão de contato */}
            <div className="flex items-center justify-between mt-4">
                <a
                    href={`https://wa.me/${whatsapp.replace(/\D/g, "")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-green-500 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-green-600 transition"
                >
                    Quero me consultar
                    <PhoneIcon className="w-4 h-4" />
                </a>
                <span className="text-green-600 text-sm">Telefone: {whatsapp}</span>
            </div>
        </div>
    )
}

export default function Agendamento() {
    const [searchTerm, setSearchTerm] = useState("")

    // Dados dos psicólogos movidos para fora do componente para evitar recriação
    const psychologists = [
        {
            name: "Fulana de Tal",
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
            name: "Beltrano Silva",
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
            name: "Ciclana Rocha",
            crp: "22/22222",
            price: 130,
            photo: "/image/logo.ico",
            specialties: ["Depressão", "Ansiedade", "Mindfulness"],
            approach: "Integrativa",
            audience: "Adultos",
            bio: "Integra diferentes abordagens com foco em qualidade de vida.",
            whatsapp: "(31) 98765-4321",
        },
    ]

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
    }, [searchTerm])

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