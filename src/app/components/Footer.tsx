import Link from "next/link"

export default function Footer() {

    const year = new Date().getFullYear()
    return (
        <footer className="bg-gray-900 text-white relative z-10 mt-16">
            {/* Aviso de Emergência - Destaque */}
            <div className="bg-red-600 py-4">
                <div className="max-w-6xl mx-auto px-4 text-center">
                    <div className="flex items-center justify-center gap-3">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                        </svg>
                        <p className="font-semibold text-lg">
                            Em caso de crise ou emergência psicológica, procure ajuda agora: ligue 192 (SAMU) ou vá ao hospital mais próximo.
                        </p>
                    </div>
                    <div className="mt-2 text-sm">
                        <p>Você não está sozinho. Buscar ajuda é um passo de coragem.</p>
                    </div>
                </div>
            </div>

            {/* Conteúdo Principal do Footer */}
            <div className="max-w-6xl mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Sobre o PsiPermita */}
                    <div className="md:col-span-2 mb-8 md:mb-0">
                        <h3 className="text-2xl font-bold text-blue-400 mb-4">PsiPermita</h3>
                        <p className="text-gray-300 mb-4 max-w-md">
                            Plataforma de busca e conexão que facilita o encontro entre pacientes e psicólogos qualificados.
                            Nossa missão é democratizar o acesso à saúde mental de qualidade.
                        </p>
                        <div className="flex space-x-4">
                            {/* WhatsApp */}
                            <a href="https://wa.me/5511999999999" className="text-gray-400 hover:text-green-500 transition-colors" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.488" />
                                </svg>
                            </a>
                            {/* Instagram */}
                            <a href="https://instagram.com/psipermita" className="text-gray-400 hover:text-pink-500 transition-colors" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                </svg>
                            </a>
                            {/* Email */}
                            <a href="mailto:contato@psipermita.com.br" className="text-gray-400 hover:text-blue-500 transition-colors" aria-label="Email">
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* Links Rápidos e Informações lado a lado no mobile */}
                    <div className="grid grid-cols-2 md:grid-cols-1 gap-8 md:gap-0 md:contents">
                        {/* Links Rápidos */}
                        <div className="md:col-start-3">
                            <h4 className="text-lg font-semibold mb-4 text-blue-400">Links Rápidos</h4>
                            <ul className="space-y-2">
                                <li>
                                    <Link href="/" className="text-gray-300 hover:text-blue-400 transition-colors">
                                        Início
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/sobre" className="text-gray-300 hover:text-blue-400 transition-colors">
                                        Sobre Nós
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/agendamento" className="text-gray-300 hover:text-blue-400 transition-colors">
                                        Encontrar Psicólogos
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/contato" className="text-gray-300 hover:text-blue-400 transition-colors">
                                        Contato
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        {/* Informações Importantes */}
                        <div className="md:col-start-4">
                            <h4 className="text-lg font-semibold mb-4 text-blue-400">Informações</h4>
                            <ul className="space-y-2 text-sm text-gray-300">
                                <li>• Psicólogos verificados</li>
                                <li>• Consultas particulares</li>
                                <li>• Sem cadastro obrigatório</li>
                                <li>• Conexão direta</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Linha de Separação */}
                <div className="border-t border-gray-700 mt-8 pt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <div className="text-gray-400 text-sm mb-4 md:mb-0">
                            <p>&copy; {year} PsiPermita. Todos os direitos reservados.</p>
                        </div>
                        <div className="flex space-x-6 text-sm">
                            <a href="/politicadeprivacidade" className="text-gray-400 hover:text-blue-400 transition-colors">
                                Política de Privacidade
                            </a>
                            <Link href="/termos" className="text-gray-400 hover:text-blue-400 transition-colors">
                                Termos de Uso
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}