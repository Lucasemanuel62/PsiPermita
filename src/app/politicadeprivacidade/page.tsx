import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

export default function PoliticaDePrivacidade() {
    return (
        <>
            <NavBar />
            <main className="min-h-screen bg-white text-zinc-900 pt-20">
                <div className="max-w-3xl mx-auto px-6 py-10">
                    <h1 className="text-3xl font-bold mb-2">Política de Privacidade – PsiPermita</h1>
                    <p className="text-sm text-zinc-600 mb-8">Última atualização: 28/08/2025</p>

                    <section className="mb-8">
                        <h2 className="text-xl font-semibold mb-2">1. Introdução</h2>
                        <p>
                            O <strong>PsiPermita</strong> valoriza a privacidade e a proteção dos dados pessoais de seus usuários. Esta Política de Privacidade explica como coletamos, usamos, armazenamos e protegemos suas informações ao utilizar nossa plataforma.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-xl font-semibold mb-2">2. Quais dados coletamos</h2>
                        <ul className="list-disc pl-6">
                            <li>Informações fornecidas por você: nome, e-mail, telefone, mensagens enviadas pelo formulário de contato.</li>
                            <li>Dados de navegação: endereço IP, tipo de navegador, páginas acessadas, cookies e dados de uso.</li>
                        </ul>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-xl font-semibold mb-2">3. Como usamos os dados</h2>
                        <ul className="list-disc pl-6">
                            <li>Para conectar pacientes e psicólogos de forma eficiente.</li>
                            <li>Para responder dúvidas e solicitações enviadas pelo site.</li>
                            <li>Para melhorar a experiência do usuário e a segurança da plataforma.</li>
                            <li>Para cumprir obrigações legais e regulatórias.</li>
                        </ul>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-xl font-semibold mb-2">4. Compartilhamento de dados</h2>
                        <p>
                            Não vendemos ou compartilhamos seus dados pessoais com terceiros, exceto quando necessário para o funcionamento da plataforma (ex: hospedagem, provedores de serviço) ou por obrigação legal.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-xl font-semibold mb-2">5. Cookies e tecnologias similares</h2>
                        <p>
                            Utilizamos cookies e tecnologias semelhantes para melhorar a navegação, analisar o uso do site e personalizar conteúdos. Você pode gerenciar as preferências de cookies no seu navegador.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-xl font-semibold mb-2">6. Direitos do usuário</h2>
                        <ul className="list-disc pl-6">
                            <li>Acessar, corrigir ou excluir seus dados pessoais.</li>
                            <li>Solicitar a portabilidade dos dados.</li>
                            <li>Revogar o consentimento a qualquer momento.</li>
                            <li>Obter informações sobre o tratamento dos seus dados.</li>
                        </ul>
                        <p className="mt-2">Para exercer seus direitos, entre em contato pelo e-mail: <a href="mailto:contato@psipermita.com" className="text-blue-600 underline">contato@psipermita.com</a></p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-xl font-semibold mb-2">7. Segurança</h2>
                        <p>
                            Adotamos medidas técnicas e organizacionais para proteger seus dados contra acesso não autorizado, perda, alteração ou divulgação indevida.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-xl font-semibold mb-2">8. Alterações nesta política</h2>
                        <p>
                            Esta Política de Privacidade pode ser atualizada periodicamente. Recomendamos que você revise este documento sempre que utilizar a plataforma. Mudanças relevantes serão comunicadas por meio do site.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-xl font-semibold mb-2">9. Contato</h2>
                        <p>
                            Em caso de dúvidas, solicitações ou para exercer seus direitos relacionados à privacidade, entre em contato pelo e-mail: <a href="mailto:contato@psipermita.com" className="text-blue-600 underline">contato@psipermita.com</a>
                        </p>
                    </section>

                    <div className="mt-10 rounded-2xl border border-zinc-200 bg-zinc-50 p-4">
                        <p className="text-sm text-zinc-700">
                            <span className="font-medium">Resumo importante:</span> O <strong>PsiPermita</strong> respeita sua privacidade e está comprometido com a proteção dos seus dados. Em caso de dúvidas, entre em contato conosco.
                        </p>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}