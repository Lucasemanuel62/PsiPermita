"use client"
import NavBar from "../components/NavBar"
import { useState } from "react"
import Footer from "../components/Footer"

type ContactRole = "paciente" | "psicologo"

export default function Contatos() {
    const [role, setRole] = useState<ContactRole>("paciente")

    const buildMailto = (to: string, subject: string, body: string) => {
        return `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    }

    return (
        <>
            <NavBar />
            <main className="min-h-screen pt-20 pb-16 bg-gray-50">
                <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
                    <header className="mb-8 text-center">
                        <h1 className="text-3xl font-extrabold tracking-tight text-gray-900">Contato</h1>
                        <p className="mt-2 text-gray-600">Fale com a plataforma como paciente ou psicólogo.</p>
                    </header>

                    {/* Seletor de perfil */}
                    <div className="flex items-center justify-center gap-3 mb-8">
                        <button
                            type="button"
                            onClick={() => setRole("paciente")}
                            className={`px-4 py-2 rounded-lg text-sm font-semibold transition ${role === "paciente" ? "bg-[#012030] text-white" : "bg-white text-gray-800 ring-1 ring-gray-200 hover:bg-gray-100"}`}
                        >
                            Sou Paciente
                        </button>
                        <button
                            type="button"
                            onClick={() => setRole("psicologo")}
                            className={`px-4 py-2 rounded-lg text-sm font-semibold transition ${role === "psicologo" ? "bg-[#026773] text-white" : "bg-white text-gray-800 ring-1 ring-gray-200 hover:bg-gray-100"}`}
                        >
                            Sou Psicólogo(a)
                        </button>
                    </div>

                    {/* Formulários */}
                    {role === "paciente" ? (
                        <section aria-labelledby="form-paciente" className="bg-white rounded-2xl shadow p-6">
                            <h2 id="form-paciente" className="text-xl font-semibold mb-4">Contato para Paciente</h2>
                            <form
                                onSubmit={(e) => {
                                    e.preventDefault()
                                    const form = e.currentTarget as HTMLFormElement
                                    const formData = new FormData(form)
                                    const nome = String(formData.get("nome") || "")
                                    const email = String(formData.get("email") || "")
                                    const mensagem = String(formData.get("mensagem") || "")
                                    const mail = buildMailto("suporte@plataforma.com", `Contato Paciente - ${nome}`, `Email: ${email}\n\nMensagem:\n${mensagem}`)
                                    window.location.href = mail
                                }}
                                className="space-y-4"
                            >
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700">Nome</label>
                                        <input name="nome" required className="mt-1 w-full rounded-lg border-gray-300 focus:border-[#026773] focus:ring-[#026773]" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700">Email</label>
                                        <input name="email" type="email" required className="mt-1 w-full rounded-lg border-gray-300 focus:border-[#026773] focus:ring-[#026773]" />
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">Mensagem</label>
                                    <textarea name="mensagem" rows={5} required className="mt-1 w-full rounded-lg border-gray-300 focus:border-[#026773] focus:ring-[#026773]" />
                                </div>
                                <div className="flex items-center gap-3">
                                    <button type="submit" className="inline-flex items-center justify-center bg-gradient-to-r from-[#012030] to-[#026773] text-white font-semibold px-5 py-2.5 rounded-lg shadow-md hover:shadow-lg transition">Enviar por Email</button>
                                    <a
                                        href="https://wa.me/5599999999999"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center justify-center px-5 py-2.5 rounded-lg font-semibold text-[#012030] ring-1 ring-[#012030]/30 hover:bg-[#012030]/5 transition"
                                    >Falar no WhatsApp</a>
                                </div>
                            </form>
                        </section>
                    ) : (
                        <section aria-labelledby="form-psicologo" className="bg-white rounded-2xl shadow p-6">
                            <h2 id="form-psicologo" className="text-xl font-semibold mb-4">Cadastro/Contato para Psicólogo(a)</h2>
                            <form
                                onSubmit={(e) => {
                                    e.preventDefault()
                                    const form = e.currentTarget as HTMLFormElement
                                    const formData = new FormData(form)
                                    const nome = String(formData.get("nome") || "")
                                    const crp = String(formData.get("crp") || "")
                                    const email = String(formData.get("email") || "")
                                    const especialidades = String(formData.get("especialidades") || "")
                                    const mensagem = String(formData.get("mensagem") || "")
                                    const body = `Nome: ${nome}\nCRP: ${crp}\nEmail: ${email}\nEspecialidades: ${especialidades}\n\nMensagem:\n${mensagem}`
                                    const mail = buildMailto("cadastro@plataforma.com", `Cadastro Psicólogo - ${nome}`, body)
                                    window.location.href = mail
                                }}
                                className="space-y-4"
                            >
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700">Nome</label>
                                        <input name="nome" required className="mt-1 w-full rounded-lg border-gray-300 focus:border-[#026773] focus:ring-[#026773]" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700">CRP</label>
                                        <input name="crp" required className="mt-1 w-full rounded-lg border-gray-300 focus:border-[#026773] focus:ring-[#026773]" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700">Email</label>
                                        <input name="email" type="email" required className="mt-1 w-full rounded-lg border-gray-300 focus:border-[#026773] focus:ring-[#026773]" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700">Especialidades</label>
                                        <input name="especialidades" placeholder="Ex.: TCC, Ansiedade" className="mt-1 w-full rounded-lg border-gray-300 focus:border-[#026773] focus:ring-[#026773]" />
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">Mensagem</label>
                                    <textarea name="mensagem" rows={5} required className="mt-1 w-full rounded-lg border-gray-300 focus:border-[#026773] focus:ring-[#026773]" />
                                </div>
                                <div className="flex items-center gap-3">
                                    <button type="submit" className="inline-flex items-center justify-center bg-gradient-to-r from-[#012030] to-[#026773] text-white font-semibold px-5 py-2.5 rounded-lg shadow-md hover:shadow-lg transition">Enviar por Email</button>
                                    <a
                                        href="https://wa.me/5599999999999"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center justify-center px-5 py-2.5 rounded-lg font-semibold text-[#012030] ring-1 ring-[#012030]/30 hover:bg-[#012030]/5 transition"
                                    >Falar no WhatsApp</a>
                                </div>
                            </form>
                        </section>
                    )}
                </div>
            </main>
            <Footer />
        </>
    )
}