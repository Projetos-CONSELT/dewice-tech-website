import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { FuturisticDivider } from './components/FuturisticDivider'
import { Contact } from './components/Contact'
import painelFuturistaImg from './assets/painel-futurista.jpg'

const servicosData = [
  {
    titulo: 'Automação e Integração de Linhas de Produção',
    descricao:
      'Soluções completas e personalizadas para otimização contínua do fluxo produtivo, reduzindo gargalos e maximizando o rendimento operacional.',
    icone: '⚙️',
  },
  {
    titulo: 'Projetos e Programação de PLC (CLP)',
    descricao:
      'Desenvolvimento avançado de lógica de controle para os principais controladores programáveis do mercado com alta confiabilidade e segurança.',
    icone: '💻',
  },
  {
    titulo: 'Redes Industriais',
    descricao:
      'Estruturação, diagnóstico e certificação de redes de comunicação robustas (Profinet, Ethernet/IP, Modbus) para ambientes industriais críticos.',
    icone: '🌐',
  },
  {
    titulo: 'Sistemas Supervisórios (ISA-101 & Tradicionais)',
    descricao:
      'Interfaces operacionais (SCADA / IHM) de alta performance desenvolvidas sob os rigorosos padrões da norma ISA-101, garantindo usabilidade ergonômica.',
    icone: '📊',
  },
  {
    titulo: 'IoT e Indústria 4.0',
    descricao:
      'Sistemas inteligentes de sensoriamento e telemetria para coleta de dados e visualização de indicadores estratégicos (OEE) em tempo real.',
    icone: '📡',
  },
]

function App() {
  return (
    <div
      id="home"
      className="min-h-screen flex flex-col bg-white selection:bg-[#A00000] selection:text-white font-sans"
    >
      {/* 1. Cabeçalho Fixo Oficial (#001A5C e #A00000) */}
      <Header />

      {/* 2. Área central com ocupação harmônica, tipografia Open Sans e espaçamento correto para header fixo */}
      <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 sm:pt-36 pb-16 sm:pb-24">

        {/* Seção 1: QUEM SOMOS? */}
        <section id="quem-somos" className="py-10 sm:py-16">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-3">
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold tracking-widest text-[#A00000] uppercase bg-red-50 border border-red-200/80 shadow-xs">
              Sobre a Dewice Tech
            </span>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#001A5C] tracking-tight">
              QUEM SOMOS?
            </h2>
          </div>

          {/* Grid com quadro cinza à esquerda e imagem à direita com alinhamento e proporções harmônicas */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">

            {/* Quadro cinza com tipografia destacada na cor azul (#001A5C) */}
            <div className="lg:col-span-6 flex">
              <div className="w-full bg-gradient-to-br from-slate-50 via-slate-100 to-slate-50 border border-slate-300/90 rounded-3xl p-8 sm:p-12 shadow-xl shadow-slate-200/60 flex flex-col justify-center space-y-8 relative overflow-hidden">
                {/* Detalhe estético sutil de fundo */}
                <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl from-slate-200/50 via-transparent to-transparent rounded-bl-full pointer-events-none" />

                <p className="text-2xl sm:text-3xl lg:text-[28px] font-extrabold leading-snug text-[#001A5C] tracking-tight">
                  A Dewice Tech é{' '}
                  <span className="text-[#A00000] underline decoration-[#A00000]/30 underline-offset-4">
                    SINÔNIMO
                  </span>{' '}
                  de{' '}
                  <span className="text-[#A00000] underline decoration-[#A00000]/30 underline-offset-4">
                    RESILIÊNCIA
                  </span>{' '}
                  e representa a essência natural da{' '}
                  <span className="text-[#A00000] underline decoration-[#A00000]/30 underline-offset-4">
                    TECNOLOGIA
                  </span>
                  !
                </p>

                <div className="pt-6 border-t border-slate-300/80">
                  <p className="text-lg sm:text-xl font-bold leading-relaxed text-[#001A5C]/95">
                    Uma História de{' '}
                    <span className="font-extrabold text-[#001A5C]">
                      15 ANOS DE PAIXÃO EM DESENVOLVER SOLUÇÕES EFICIENTES PARA A INDÚSTRIA!
                    </span>
                  </p>
                </div>
              </div>
            </div>

            {/* Imagem futurista com moldura e cantos tecnológicos */}
            <div className="lg:col-span-6 flex">
              <div className="relative group w-full rounded-3xl overflow-hidden shadow-2xl shadow-slate-300/50 border border-slate-200 flex items-center justify-center bg-slate-900">
                <img
                  src={painelFuturistaImg}
                  alt="Mão humana tocando painel tecnológico e futurista"
                  className="w-full h-full min-h-[380px] lg:min-h-[460px] object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Overlay de ambiência tech */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#001A5C]/60 via-transparent to-[#001A5C]/20 pointer-events-none" />

                {/* Marcadores de cantos futuristas */}
                <div className="absolute top-4 left-4 w-6 h-6 border-t-2 border-l-2 border-[#A00000] pointer-events-none" />
                <div className="absolute top-4 right-4 w-6 h-6 border-t-2 border-r-2 border-[#A00000] pointer-events-none" />
                <div className="absolute bottom-4 left-4 w-6 h-6 border-b-2 border-l-2 border-[#A00000] pointer-events-none" />
                <div className="absolute bottom-4 right-4 w-6 h-6 border-b-2 border-r-2 border-[#A00000] pointer-events-none" />
              </div>
            </div>

          </div>
        </section>

        {/* Divisória Futurista 1 */}
        <FuturisticDivider />

        {/* Seção 2: MISSÃO, VISÃO E VALORES */}
        <section id="missao-visao-valores" className="py-10 sm:py-16">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-3">
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold tracking-widest text-[#A00000] uppercase bg-red-50 border border-red-200/80 shadow-xs">
              Nossos Pilares
            </span>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#001A5C] tracking-tight">
              MISSÃO, VISÃO E VALORES
            </h2>
          </div>

          {/* Grid dos 3 quadros cinzas com pesos e alturas harmônicas */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">

            {/* Quadro 1: MISSÃO */}
            <div className="bg-gradient-to-br from-slate-50 via-slate-100 to-slate-50 border border-slate-300/90 rounded-3xl p-8 sm:p-10 shadow-lg shadow-slate-200/50 hover:shadow-2xl hover:border-slate-400 transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-5 border-b border-slate-300/80 mb-6">
                  <h3 className="text-2xl sm:text-3xl font-black text-[#001A5C] tracking-tight">
                    MISSÃO
                  </h3>
                  <span className="w-9 h-9 rounded-xl bg-red-100/70 text-[#A00000] flex items-center justify-center text-sm font-extrabold border border-red-200">
                    01
                  </span>
                </div>

                <p className="text-base sm:text-lg font-bold text-[#001A5C] leading-relaxed mb-6">
                  Prover nossos clientes com soluções inovadoras e tecnológicas, que agregam valor aos seus processos e produtos, como:
                </p>

                <ul className="space-y-3 text-base sm:text-lg font-bold text-[#001A5C] pl-1">
                  {['Qualidade;', 'Produtividade;', 'Eficiência;', 'Competitividade;', 'Meio Ambiente.'].map((item, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#A00000] shrink-0 shadow-xs" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Quadro 2: VISÃO */}
            <div className="bg-gradient-to-br from-slate-50 via-slate-100 to-slate-50 border border-slate-300/90 rounded-3xl p-8 sm:p-10 shadow-lg shadow-slate-200/50 hover:shadow-2xl hover:border-slate-400 transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-5 border-b border-slate-300/80 mb-6">
                  <h3 className="text-2xl sm:text-3xl font-black text-[#001A5C] tracking-tight">
                    VISÃO
                  </h3>
                  <span className="w-9 h-9 rounded-xl bg-red-100/70 text-[#A00000] flex items-center justify-center text-sm font-extrabold border border-red-200">
                    02
                  </span>
                </div>

                <div className="py-6">
                  <p className="text-xl sm:text-2xl font-black text-[#001A5C] leading-relaxed tracking-tight">
                    Ser referência na indústria em soluções tecnológicas em Automação Industrial.
                  </p>
                </div>
              </div>

              <div className="pt-6 border-t border-slate-300/80 flex items-center gap-2 text-xs font-bold text-[#A00000] uppercase tracking-wider">
                <span className="w-2 h-2 rounded-full bg-[#A00000] animate-pulse" />
                Foco na Indústria 4.0
              </div>
            </div>

            {/* Quadro 3: VALORES */}
            <div className="bg-gradient-to-br from-slate-50 via-slate-100 to-slate-50 border border-slate-300/90 rounded-3xl p-8 sm:p-10 shadow-lg shadow-slate-200/50 hover:shadow-2xl hover:border-slate-400 transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-5 border-b border-slate-300/80 mb-6">
                  <h3 className="text-2xl sm:text-3xl font-black text-[#001A5C] tracking-tight">
                    VALORES
                  </h3>
                  <span className="w-9 h-9 rounded-xl bg-red-100/70 text-[#A00000] flex items-center justify-center text-sm font-extrabold border border-red-200">
                    03
                  </span>
                </div>

                <ul className="space-y-4 text-base sm:text-lg font-bold text-[#001A5C]">
                  <li className="flex items-center gap-3.5 p-2 rounded-xl hover:bg-slate-200/60 transition-colors">
                    <span className="text-2xl select-none" role="img" aria-label="Inovação">💡</span>
                    <span>Inovação</span>
                  </li>
                  <li className="flex items-center gap-3.5 p-2 rounded-xl hover:bg-slate-200/60 transition-colors">
                    <span className="text-2xl select-none" role="img" aria-label="Confiança e respeito">🤝</span>
                    <span>Confiança e respeito</span>
                  </li>
                  <li className="flex items-center gap-3.5 p-2 rounded-xl hover:bg-slate-200/60 transition-colors">
                    <span className="text-2xl select-none" role="img" aria-label="Ética">⚖️</span>
                    <span>Ética</span>
                  </li>
                  <li className="flex items-center gap-3.5 p-2 rounded-xl hover:bg-slate-200/60 transition-colors">
                    <span className="text-2xl select-none" role="img" aria-label="Qualidade e Pontualidade">⏱️</span>
                    <span>Qualidade e Pontualidade</span>
                  </li>
                  <li className="flex items-center gap-3.5 p-2 rounded-xl hover:bg-slate-200/60 transition-colors">
                    <span className="text-2xl select-none" role="img" aria-label="Responsabilidade Social">👥</span>
                    <span>Responsabilidade Social</span>
                  </li>
                </ul>
              </div>
            </div>

          </div>
        </section>

        {/* Divisória Futurista 2 */}
        <FuturisticDivider />

        {/* Seção 3: SERVIÇOS (Soluções Tecnológicas da Dewice Tech) */}
        <section id="servicos" className="py-10 sm:py-16">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-3">
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold tracking-widest text-[#A00000] uppercase bg-red-50 border border-red-200/80 shadow-xs">
              Áreas de Atuação
            </span>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#001A5C] tracking-tight">
              NOSSOS SERVIÇOS
            </h2>
            <p className="text-base sm:text-lg text-slate-600 font-normal max-w-2xl mx-auto pt-2">
              Com especialidade voltada à tecnologia industrial, a Dewice Tech automatiza e integra toda a linha de produção por meio de soluções de alta performance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicosData.map((servico, idx) => (
              <div
                key={idx}
                className="bg-white border border-slate-200/90 hover:border-[#A00000]/60 rounded-3xl p-8 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
              >
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-red-50 to-slate-100 border border-red-100 flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform">
                    {servico.icone}
                  </div>
                  <h3 className="text-xl font-bold text-[#001A5C] mb-3 leading-snug group-hover:text-[#A00000] transition-colors">
                    {servico.titulo}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed font-normal">
                    {servico.descricao}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between">
                  <a
                    href="https://wa.me/553432295277"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-bold text-[#A00000] uppercase tracking-wider hover:underline"
                  >
                    <span>Falar com especialista</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Divisória Futurista 3 */}
        <FuturisticDivider />

        {/* Seção 4: CASE DE SUCESSO */}
        <section id="case-de-sucesso" className="py-10 sm:py-16">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-3">
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold tracking-widest text-[#A00000] uppercase bg-red-50 border border-red-200/80 shadow-xs">
              Portfólio & Resultados
            </span>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#001A5C] tracking-tight">
              CASE DE SUCESSO
            </h2>
          </div>

          {/* Espaço reservado harmônico para os cases */}
          <div className="w-full min-h-[220px] rounded-3xl border-2 border-dashed border-slate-300 bg-gradient-to-br from-slate-50 to-slate-100/60 p-12 flex flex-col items-center justify-center text-slate-400 text-center space-y-3">
            <svg className="w-10 h-10 text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
            </svg>
            <span className="text-base font-semibold text-slate-500">
              [Espaço reservado para os Cases de Sucesso da Dewice Tech]
            </span>
          </div>
        </section>

        {/* Divisória Futurista 4 */}
        <FuturisticDivider />

        {/* Seção 5: CONTATO */}
        <Contact />

      </main>

      {/* 3. Rodapé Oficial (#001A5C e #A00000) */}
      <Footer />
    </div>
  )
}

export default App
