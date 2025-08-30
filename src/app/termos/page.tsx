import NavBar from "../components/NavBar";
import Footer from "../components/Footer";


export default function TermsPage() {
    return (
        <>
            <NavBar />
            <main className="min-h-screen bg-white text-zinc-900 pt-20">
                {/* Header simples */}
                <header className="border-b border-zinc-200 bg-zinc-50">
                    <div className="mx-auto max-w-3xl px-6 py-6">
                        <h1 className="text-2xl font-semibold tracking-tight">Termos de Uso – PsiPermita</h1>
                        <p className="mt-1 text-sm text-zinc-600">Última atualização: 28/08/2025</p>
                    </div>
                </header>

                {/* Aviso de emergência */}
                <section className="bg-amber-50 border-y border-amber-200">
                    <div className="mx-auto max-w-3xl px-6 py-4">
                        <p className="text-sm leading-relaxed">
                            <span className="mr-2">⚠️</span>
                            <span className="font-medium">Se estiver em crise emocional ou emergência em saúde mental, procure ajuda agora:</span>
                            {" "}
                            ligue <span className="font-semibold">192 (SAMU)</span> ou vá ao <span className="font-semibold">hospital mais próximo</span>.
                        </p>
                    </div>
                </section>

                {/* Conteúdo */}
                <div className="mx-auto max-w-3xl px-6 py-10">
                    <section className="prose prose-zinc max-w-none">
                        <h2 className="text-xl font-semibold">1. Introdução</h2>
                        <p>
                            Bem-vindo(a) ao <strong>PsiPermita</strong>. Estes Termos de Uso regulam a utilização da nossa
                            plataforma online, que tem como objetivo aproximar pacientes e psicólogos de forma simples e
                            acessível. Ao utilizar nossos serviços, você declara que leu, entendeu e concorda com as
                            condições abaixo.
                        </p>

                        <h2 className="text-xl font-semibold">2. Natureza do Serviço</h2>
                        <p>
                            O <strong>PsiPermita</strong> é uma plataforma de intermediação entre profissionais de psicologia
                            e pessoas interessadas em atendimento. Não realizamos atendimento de emergência ou pronto-socorro.
                            Em situações de crise ou risco iminente, procure imediatamente o <strong>SAMU (192)</strong> ou o
                            <strong> hospital mais próximo</strong>.
                        </p>

                        <h2 className="text-xl font-semibold">3. Cadastro e Responsabilidades do Usuário</h2>
                        <ul>
                            <li>Fornecer informações verdadeiras e manter os dados atualizados.</li>
                            <li>Não utilizar a conta de terceiros nem ceder a sua própria conta.</li>
                            <li>Utilizar a plataforma em conformidade com a legislação vigente e princípios éticos.</li>
                        </ul>

                        <h2 className="text-xl font-semibold">4. Responsabilidade da Plataforma</h2>
                        <ul>
                            <li>Disponibilizamos o espaço digital para conexão entre psicólogos e pacientes.</li>
                            <li>Não nos responsabilizamos por condutas, diagnósticos ou tratamentos adotados pelos profissionais cadastrados.</li>
                            <li>Não substituímos consultas médicas ou atendimentos de urgência.</li>
                        </ul>

                        <h2 className="text-xl font-semibold">5. Privacidade e Proteção de Dados</h2>
                        <p>
                            Adotamos medidas para proteger a privacidade e a segurança dos dados dos usuários, em conformidade
                            com a <strong>Lei Geral de Proteção de Dados (LGPD)</strong>. Para mais detalhes, consulte nossa
                            Política de Privacidade.
                        </p>

                        <h2 className="text-xl font-semibold">6. Propriedade Intelectual</h2>
                        <p>
                            Todos os conteúdos da plataforma (marca, logotipo, layout, textos e funcionalidades) são de
                            propriedade do <strong>PsiPermita</strong>, sendo vedada a utilização sem autorização prévia.
                        </p>

                        <h2 className="text-xl font-semibold">7. Alterações dos Termos</h2>
                        <p>
                            O <strong>PsiPermita</strong> poderá atualizar estes Termos de Uso a qualquer momento. Alterações
                            relevantes serão comunicadas aos usuários por meio da própria plataforma.
                        </p>

                        <h2 className="text-xl font-semibold">8. Legislação e Foro</h2>
                        <p>
                            Estes Termos são regidos pela legislação brasileira. Quaisquer disputas deverão ser solucionadas no
                            foro da comarca de <em>[Cidade/UF]</em>.
                        </p>

                        <div className="mt-10 rounded-2xl border border-zinc-200 bg-zinc-50 p-4">
                            <p className="text-sm text-zinc-700">
                                <span className="font-medium">Resumo importante:</span> O <strong>PsiPermita</strong> conecta
                                pacientes e psicólogos, mas não substitui serviços de emergência. Em caso de crise, ligue
                                <strong> 192 (SAMU)</strong> ou vá ao <strong>hospital mais próximo</strong>.
                            </p>
                        </div>
                    </section>

                    {/* Rodapé local da página (opcional, caso você já tenha um global) */}
                    <footer className="mt-12 border-t border-zinc-200 pt-6 text-sm text-zinc-600">
                        <p>
                            © {new Date().getFullYear()} PsiPermita. Todos os direitos reservados.
                        </p>
                    </footer>
                </div>
            </main>
            <Footer />
        </>);
}
