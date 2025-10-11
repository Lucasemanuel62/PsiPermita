import Image from "next/image"
import type { FC } from "react"

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
                    alt={`Foto do psicólogo ${name}`}
                    width={80}
                    height={80}
                    className="rounded-full object-cover"
                    quality={85}
                />
                <div className="flex flex-col">
                    <h2 className="text-xl font-semibold">{name}</h2>
                    <span className="text-gray-600">Psicólogo(a)</span>
                    <span className="text-sm text-gray-500">CRP: {crp}</span>
                </div>
                <div className="ml-auto bg-[#6DBFB8]/10 px-4 py-2 rounded-full text-sm font-semibold text-[#6DBFB8]">
                    R${price}
                </div>
            </div>

            {/* Especialidades */}
            <div className="flex flex-wrap gap-2">
                {specialties.map((item, index) => (
                    <span
                        key={index}
                        className="text-xs font-semibold px-3 py-1.5 rounded-full bg-[#6DBFB8]/10 text-[#6DBFB8] ring-1 ring-[#6DBFB8]/30"
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
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mt-4">
                <a
                    href={`https://wa.me/${whatsapp.replace(/\D/g, "")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Entrar em contato com ${name} via WhatsApp`}
                    className="bg-green-500 text-white px-6 py-3 min-h-[48px] rounded-xl flex items-center justify-center gap-2 hover:bg-green-600 transition-all duration-300 hover:shadow-lg focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:outline-none font-semibold"
                >
                    Quero me consultar
                    <PhoneIcon className="w-5 h-5" />
                </a>
                <span className="text-green-600 text-sm text-center sm:text-left font-medium">Telefone: {whatsapp}</span>
            </div>
        </div>
    )
}

export default PsychologistCard
