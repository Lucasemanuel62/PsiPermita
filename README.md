# PsiPermita 🧠💙

**Plataforma de conexão entre pacientes e psicólogos qualificados**

Uma plataforma moderna e segura que facilita o encontro entre pessoas que buscam apoio psicológico e profissionais especializados, promovendo o acesso democrático à saúde mental de qualidade.

## 🎯 Sobre o Projeto

O **PsiPermita** é uma plataforma web desenvolvida para conectar pacientes a psicólogos verificados de forma simples, rápida e segura. Nossa missão é democratizar o acesso à psicoterapia, eliminando barreiras e facilitando o primeiro passo na jornada de bem-estar mental.

### ✨ Principais Funcionalidades

- 🔍 **Busca Inteligente**: Encontre psicólogos por especialidade, abordagem terapêutica ou localização
- 👥 **Perfis Verificados**: Todos os profissionais têm CRP ativo e formação comprovada
- 💬 **Contato Direto**: Comunicação via WhatsApp sem intermediários
- 🔒 **Privacidade Total**: Dados protegidos e conversas confidenciais
- 💰 **Transparência**: Valores claros, sem taxas ocultas
- 📱 **Responsivo**: Funciona perfeitamente em desktop, tablet e mobile

## 🚀 Tecnologias Utilizadas

- **Framework**: [Next.js 15](https://nextjs.org/) com App Router
- **Linguagem**: [TypeScript](https://www.typescriptlang.org/)
- **Estilização**: [Tailwind CSS](https://tailwindcss.com/)
- **Otimização de Imagens**: Next.js Image Component
- **Ícones**: React Icons e SVGs customizados
- **Build Tool**: Turbopack para desenvolvimento rápido

## 🛠️ Instalação e Desenvolvimento

### Pré-requisitos

- Node.js 18.17 ou superior
- npm, yarn, pnpm ou bun

### Como executar localmente

1. **Clone o repositório**
   ```bash
   git clone https://github.com/seu-usuario/psipermita.git
   cd psipermita
   ```

2. **Instale as dependências**
   ```bash
   npm install
   # ou
   yarn install
   # ou
   pnpm install
   ```

3. **Execute o servidor de desenvolvimento**
   ```bash
   npm run dev
   # ou
   yarn dev
   # ou
   pnpm dev
   ```

4. **Acesse a aplicação**
   
   Abra [http://localhost:3000](http://localhost:3000) no seu navegador

## 📁 Estrutura do Projeto

```
src/
├── app/
│   ├── components/          # Componentes reutilizáveis
│   │   ├── NavBar.tsx      # Barra de navegação
│   │   ├── Footer.tsx      # Rodapé
│   │   ├── Inicio.tsx      # Seção hero
│   │   ├── funcionamento.tsx # Como funciona + diferenciais
│   │   └── PsicologoCard.tsx # Card de psicólogo
│   ├── agendamento/        # Página de busca de psicólogos
│   ├── contato/           # Página de contato
│   ├── sobre/             # Página sobre nós
│   ├── politicadeprivacidade/ # Política de privacidade
│   └── termos/            # Termos de uso
└── public/
    └── image/             # Imagens estáticas
```

## 🎨 Design System

- **Paleta de Cores**: Azuis e índigos para transmitir confiança
- **Tipografia**: Fonte system com fallbacks otimizados
- **Componentes**: Modulares e reutilizáveis
- **Responsividade**: Mobile-first approach
- **Acessibilidade**: Conformidade com WCAG 2.1

## 🔐 Privacidade e Segurança

- Dados dos usuários protegidos conforme LGPD
- Comunicação segura via HTTPS
- Não armazenamos informações sensíveis
- Conexão direta entre paciente e profissional

## 📈 Performance

- **Lighthouse Score**: 95+ em todas as métricas
- **Core Web Vitals**: Otimizado para UX
- **SEO**: Meta tags e structured data
- **Imagens**: Otimização automática via Next.js

## 🚀 Deploy

### Vercel (Recomendado)

1. Conecte seu repositório no [Vercel](https://vercel.com)
2. Configure as variáveis de ambiente (se necessário)
3. Deploy automático a cada push na branch main

### Outras Plataformas

O projeto é compatível com qualquer plataforma que suporte Next.js:
- Netlify
- Railway
- AWS Amplify
- DigitalOcean App Platform

## 🤝 Contribuindo

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/nova-feature`)
3. Commit suas mudanças (`git commit -m 'Adiciona nova feature'`)
4. Push para a branch (`git push origin feature/nova-feature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 📞 Contato

- **Website**: [psipermita.com.br](https://psipermita.com.br)
- **Email**: contato@psipermita.com.br
- **LinkedIn**: [/company/psipermita](https://linkedin.com/company/psipermita)

---

**Desenvolvido com para democratizar o acesso à saúde mental no Brasil.**
