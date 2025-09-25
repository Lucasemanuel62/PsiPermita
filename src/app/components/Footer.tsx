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
                            Se estiver em crise emocional ou emergência em saúde mental, procure ajuda agora: ligue 192 (SAMU) ou vá ao hospital mais próximo.
                        </p>
                    </div>
                    <div className="mt-2 text-sm">
                        <p>Você não está sozinho. Buscar ajuda é um passo de coragem.</p>
                    </div>
                </div>
            </div>

            {/* Conteúdo Principal do Footer */}
            <div className="max-w-6xl mx-auto px-4 py-12">
                <div className="grid md:grid-cols-4 gap-8">
                    {/* Sobre o PsiPermita */}
                    <div className="md:col-span-2">
                        <h3 className="text-2xl font-bold text-blue-400 mb-4">PsiPermita</h3>
                        <p className="text-gray-300 mb-4 max-w-md">
                            Plataforma de busca e conexão que facilita o encontro entre pacientes e psicólogos qualificados.
                            Nossa missão é democratizar o acesso à saúde mental de qualidade.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                                </svg>
                            </a>
                            <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z" />
                                </svg>
                            </a>
                            <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.192-.285.598-.6 1.231-.6 1.65 0 1.22 1.01 2.228 2.26 2.228 2.72 0 4.813-2.875 4.813-6.709 0-3.514-2.53-5.969-6.149-5.969-4.183 0-6.647 3.113-6.647 6.576 0 1.306.501 2.712 1.129 3.473.126.149.143.279.107.43-.116.484-.446 1.52-.507 1.654-.08.303-.259.367-.597.22-1.224-.571-1.99-2.342-1.99-3.772 0-2.51 1.828-4.814 5.262-4.814 2.763 0 4.913 1.972 4.913 4.62 0 2.757-1.739 4.976-4.151 4.976-.811 0-1.573-.421-1.834-.919l-.465 1.776c-.167.636-.644 1.44-.964 1.928 1.466.135 2.964.205 4.468.205 6.624 0 11.987-5.367 11.987-11.987C24.004 5.367 18.641.001 12.017.001z" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* Links Rápidos */}
                    <div>
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
                    <div>
                        <h4 className="text-lg font-semibold mb-4 text-blue-400">Informações</h4>
                        <ul className="space-y-2 text-sm text-gray-300">
                            <li>• Psicólogos verificados</li>
                            <li>• Consultas particulares</li>
                            <li>• Sem cadastro obrigatório</li>
                            <li>• Conexão direta</li>
                        </ul>
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