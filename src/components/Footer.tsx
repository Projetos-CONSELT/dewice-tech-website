import React from 'react'

const servicosList: string[] = [
  'Automação e Integração de Linhas de Produção',
  'Projetos e Programação de PLC (CLP)',
  'Redes Industriais',
  'Sistemas Supervisórios (ISA-101)',
  'IoT e Indústria 4.0',
]

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear()

  const handleScrollTo = (id: string) => {
    const el = document.querySelector(id)
    if (el) {
      const header = document.querySelector('header')
      const headerHeight = header?.getBoundingClientRect().height ?? 80
      const targetPos = el.getBoundingClientRect().top + window.scrollY - headerHeight - 12
      window.scrollTo({ top: targetPos, behavior: 'smooth' })
    }
  }

  return (
    <footer id="rodape" className="relative bg-[#001A5C] text-slate-100 overflow-hidden font-sans">
      {/* Linha de destaque superior no padrão Consulpsi em Vermelho Escuro (#A00000) */}
      <div className="h-1 w-full bg-gradient-to-r from-transparent via-[#A00000] to-transparent opacity-80" />

      <div className="container mx-auto px-5 sm:px-6 lg:px-8 py-14 lg:py-16">
        {/* Grid principal de 4 colunas */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 sm:gap-10 lg:gap-8 items-start">
          
          {/* Coluna 1: Identidade da Marca e Apresentação */}
          <div className="flex flex-col items-center sm:items-start text-center sm:text-left space-y-4">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="inline-block transition-transform duration-300 hover:scale-105 active:scale-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#A00000] rounded-xl p-1"
              aria-label="Dewice Tech - Voltar ao topo"
            >
              <img
                src="/dewice-tech-logo.png"
                alt="Dewice Tech Automação Industrial"
                className="h-14 sm:h-16 w-auto object-contain drop-shadow-[0_2px_8px_rgba(0,0,0,0.35)]"
                loading="lazy"
                decoding="async"
              />
            </button>
            <p className="text-sm leading-relaxed text-slate-300 font-normal">
              A Dewice Tech representa a essência da tecnologia com 15 anos de excelência e resiliência desenvolvendo soluções completas para a indústria moderna.
            </p>
            <div className="pt-2 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#A00000]">
              <span className="w-2 h-2 rounded-full bg-[#A00000] animate-pulse" />
              <span>Automação & Indústria 4.0</span>
            </div>
          </div>

          {/* Coluna 2: Serviços */}
          <div className="flex flex-col space-y-4 text-left">
            <h4 className="text-lg font-bold text-white tracking-wide flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#A00000]" />
              Serviços
            </h4>
            <ul className="space-y-3">
              {servicosList.map((servico) => (
                <li key={servico}>
                  <button
                    onClick={() => handleScrollTo('#servicos')}
                    className="text-sm text-slate-300 hover:text-white hover:translate-x-1.5 transition-all duration-300 ease-out text-left relative py-0.5 after:absolute after:bottom-0 after:left-0 after:w-0 hover:after:w-full after:h-px after:bg-[#A00000] after:transition-all after:duration-300 cursor-pointer block"
                  >
                    {servico}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Coluna 3: Contato & Informações Legais */}
          <div className="flex flex-col space-y-6 text-left">
            {/* Bloco de Contato */}
            <div>
              <h4 className="text-lg font-bold text-white tracking-wide mb-4 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#A00000]" />
                Contato
              </h4>

              <ul className="space-y-3.5 text-sm text-slate-300 font-normal">
                {/* Telefone */}
                <li>
                  <a
                    href="tel:+553432295277"
                    className="flex items-center gap-3 hover:text-white transition-colors duration-300 group"
                  >
                    <span className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-[#A00000] group-hover:bg-[#A00000] group-hover:text-white transition-all shrink-0">
                      <svg className="w-4 h-4 fill-none stroke-current" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </span>
                    <span className="font-semibold text-slate-200 group-hover:text-white transition-colors">
                      (34) 3229-5277
                    </span>
                  </a>
                </li>

                {/* Endereço Completo */}
                <li>
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=Av.+Jaime+Ribeiro+da+Luz,+971+-+Salas+45/47,+Bairro+Santa+M%C3%B4nica+-+Uberl%C3%A2ndia+/+MG,+CEP:+38.408-188"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-3 hover:text-white transition-colors duration-300 group leading-snug"
                  >
                    <span className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-[#A00000] group-hover:bg-[#A00000] group-hover:text-white transition-all shrink-0 mt-0.5">
                      <svg className="w-4 h-4 fill-none stroke-current" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </span>
                    <span>
                      Av. Jaime Ribeiro da Luz, nº 971 - Salas 45/47<br />
                      Bairro Santa Mônica - Uberlândia / MG<br />
                      CEP: 38.408-188 - Brasil
                    </span>
                  </a>
                </li>
              </ul>

              {/* Redes Sociais da Empresa (Estilo Consulpsi - SEM INSTAGRAM) */}
              <div className="flex items-center gap-3 mt-4 pt-1">
                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 hover:text-white hover:bg-[#A00000] hover:border-[#A00000] hover:scale-110 active:scale-95 transition-all duration-300"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>

                {/* WhatsApp */}
                <a
                  href="https://wa.me/553432295277"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp"
                  className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 hover:text-white hover:bg-[#25D366] hover:border-[#25D366] hover:scale-110 active:scale-95 transition-all duration-300"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Bloco Legal */}
            <div className="pt-2 border-t border-white/10">
              <h5 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2.5">
                Legal
              </h5>
              <ul className="space-y-1.5 text-xs text-slate-300 font-normal">
                <li>
                  <a
                    href="#privacidade"
                    onClick={(e) => {
                      e.preventDefault()
                      alert('Política de Privacidade da Dewice Tech em conformidade com a LGPD.')
                    }}
                    className="hover:text-white transition-colors duration-300 relative inline-block py-0.5 after:absolute after:bottom-0 after:left-0 after:w-0 hover:after:w-full after:h-px after:bg-[#A00000] after:transition-all after:duration-300"
                  >
                    Política de Privacidade
                  </a>
                </li>
                <li>
                  <a
                    href="#termos"
                    onClick={(e) => {
                      e.preventDefault()
                      alert('Termos e Condições de Uso da Dewice Tech.')
                    }}
                    className="hover:text-white transition-colors duration-300 relative inline-block py-0.5 after:absolute after:bottom-0 after:left-0 after:w-0 hover:after:w-full after:h-px after:bg-[#A00000] after:transition-all after:duration-300"
                  >
                    Condições de Uso
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Coluna 4: Localização (Google Maps Embed) */}
          <div className="flex flex-col space-y-4 text-left">
            <h4 className="text-lg font-bold text-white tracking-wide flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#A00000]" />
              Localização
            </h4>
            <div className="rounded-xl overflow-hidden border border-[#A00000]/40 shadow-lg bg-slate-900 group relative">
              <iframe
                title="Localização Dewice Tech Automação Industrial"
                src="https://www.google.com/maps?q=Av.+Jaime+Ribeiro+da+Luz,+971+-+Santa+M%C3%B4nica,+Uberl%C3%A2ndia+-+MG,+38408-188&output=embed"
                width="100%"
                height="170"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-44 object-cover filter contrast-[1.05]"
              />
            </div>
            <a
              href="https://www.google.com/maps/search/?api=1&query=Av.+Jaime+Ribeiro+da+Luz,+971+-+Santa+M%C3%B4nica,+Uberl%C3%A2ndia+-+MG"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs text-slate-300 hover:text-white transition-colors group"
            >
              <span className="underline decoration-[#A00000] underline-offset-4">
                Abrir rota no Google Maps
              </span>
              <svg className="w-3.5 h-3.5 text-[#A00000] transition-transform group-hover:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>

        </div>

        {/* Barra Inferior com Copyright */}
        <div className="border-t border-white/10 mt-12 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <p className="text-xs text-slate-300 font-normal tracking-wide">
            © {currentYear} Dewice Tech Automação Industrial — Todos os direitos reservados.
          </p>

          <p className="text-xs text-slate-300 font-normal flex items-center gap-2">
            <span>Soluções Inteligentes em Automação Industrial</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#A00000]" />
            <span>Uberlândia / MG</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
