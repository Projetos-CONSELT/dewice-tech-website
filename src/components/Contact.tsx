import React, { useState } from 'react'

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    mensagem: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [showPrivacyModal, setShowPrivacyModal] = useState(false)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulação do envio com resposta visual imediata
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitted(true)
    }, 600)
  }

  const handleReset = () => {
    setFormData({ nome: '', email: '', mensagem: '' })
    setSubmitted(false)
  }

  const handleWhatsAppDirect = () => {
    const text = encodeURIComponent(
      `Olá! Meu nome é ${formData.nome || 'Visitante'}.\nE-mail: ${formData.email || 'Não informado'}\n\nMensagem: ${formData.mensagem || 'Gostaria de saber mais sobre as soluções de automação da Dewice Tech.'}`
    )
    window.open(`https://wa.me/553432295277?text=${text}`, '_blank')
  }

  return (
    <section id="contato" className="py-10 sm:py-16">
      {/* 1. Título Central da Seção idêntico à referência e alinhado aos padrões da Dewice Tech */}
      <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-3">
        <span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold tracking-widest text-[#A00000] uppercase bg-red-50 border border-red-200/80 shadow-xs">
          Fale Conosco
        </span>
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#001A5C] tracking-tight">
          Contato
        </h2>
      </div>

      {/* 2. Container com fundo suave para criar o contraste perfeito com o Card Branco flutuante */}
      <div className="w-full bg-[#f4f5f8] border border-slate-200/90 rounded-3xl p-6 sm:p-10 lg:p-14 shadow-sm relative overflow-hidden">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Coluna Esquerda: "Fale com a gente" e Canais de Contato */}
          <div className="lg:col-span-5 flex flex-col justify-center space-y-7">
            <div>
              <h3 className="text-3xl sm:text-4xl font-extrabold text-[#001A5C] tracking-tight mb-4">
                Fale com a gente
              </h3>
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal max-w-md">
                Tem alguma dúvida ou quer saber mais sobre nossos serviços? Entre em contato pelos canais abaixo ou preencha o formulário.
              </p>
            </div>

            {/* Lista dos Canais exatamente no formato da imagem de referência */}
            <div className="space-y-5 pt-1">
              {/* E-mail */}
              <a
                href="mailto:contato@dewicetech.com.br"
                className="flex items-center gap-4 group text-slate-700 hover:text-[#A00000] transition-colors"
              >
                <div className="w-11 h-11 rounded-full bg-slate-200/90 group-hover:bg-[#001A5C] text-[#001A5C] group-hover:text-white flex items-center justify-center shrink-0 transition-all duration-300">
                  <svg
                    className="w-5 h-5 fill-none stroke-current"
                    strokeWidth="1.9"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <span className="text-base font-semibold leading-tight">
                  contato@dewicetech.com.br
                </span>
              </a>

              {/* Telefone (conforme informado na Imagem 2 da Dewice Tech) */}
              <a
                href="tel:+553432295277"
                className="flex items-center gap-4 group text-slate-700 hover:text-[#A00000] transition-colors"
              >
                <div className="w-11 h-11 rounded-full bg-slate-200/90 group-hover:bg-[#001A5C] text-[#001A5C] group-hover:text-white flex items-center justify-center shrink-0 transition-all duration-300">
                  <svg
                    className="w-5 h-5 fill-none stroke-current"
                    strokeWidth="1.9"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <span className="text-base font-semibold leading-tight">
                  (34) 3229-5277
                </span>
              </a>

              {/* Endereço (conforme informado na Imagem 2 da Dewice Tech) */}
              <a
                href="https://www.google.com/maps/search/?api=1&query=Av.+Jaime+Ribeiro+da+Luz,+971+-+Salas+45/47,+Bairro+Santa+M%C3%B4nica+-+Uberl%C3%A2ndia+/+MG,+CEP:+38.408-188"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 group text-slate-700 hover:text-[#A00000] transition-colors"
              >
                <div className="w-11 h-11 rounded-full bg-slate-200/90 group-hover:bg-[#001A5C] text-[#001A5C] group-hover:text-white flex items-center justify-center shrink-0 transition-all duration-300">
                  <svg
                    className="w-5 h-5 fill-none stroke-current"
                    strokeWidth="1.9"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <div className="text-base font-semibold leading-snug">
                  <p>Av. Jaime Ribeiro da Luz, 971 — Salas 45 / 47</p>
                  <p className="text-slate-500 font-normal text-sm">
                    Santa Mônica — Uberlândia, MG | CEP 38.408-188
                  </p>
                </div>
              </a>
            </div>

            {/* Redes Sociais nos ícones circulares/arredondados escuros da referência */}
            <div className="pt-2 flex items-center gap-3">
              {/* Instagram */}
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram da Dewice Tech"
                className="w-10 h-10 rounded-full bg-[#001A5C] hover:bg-[#A00000] text-white flex items-center justify-center shadow-md hover:scale-110 active:scale-95 transition-all duration-300"
              >
                <svg className="w-4 h-4 fill-currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn da Dewice Tech"
                className="w-10 h-10 rounded-full bg-[#001A5C] hover:bg-[#A00000] text-white flex items-center justify-center shadow-md hover:scale-110 active:scale-95 transition-all duration-300"
              >
                <svg className="w-4 h-4 fill-currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>

              {/* WhatsApp */}
              <a
                href="https://wa.me/553432295277"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp da Dewice Tech"
                className="w-10 h-10 rounded-full bg-[#001A5C] hover:bg-[#25D366] text-white flex items-center justify-center shadow-md hover:scale-110 active:scale-95 transition-all duration-300"
              >
                <svg className="w-4 h-4 fill-currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Coluna Direita: O Card Branco Exatamente no Estilo da Imagem 1 */}
          <div className="lg:col-span-7">
            <div className="w-full bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-9 shadow-xl shadow-slate-200/70 border border-slate-100">
              {submitted ? (
                <div className="py-8 text-center space-y-4">
                  <div className="w-14 h-14 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto border border-emerald-200">
                    <svg
                      className="w-7 h-7"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>

                  <h4 className="text-2xl font-bold text-[#001A5C]">
                    Mensagem Enviada!
                  </h4>
                  <p className="text-slate-600 max-w-sm mx-auto text-sm">
                    Agradecemos seu contato. Nossa equipe responderá em breve.
                  </p>

                  <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <button
                      type="button"
                      onClick={handleWhatsAppDirect}
                      className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-[#25D366] text-white font-bold text-xs shadow-sm hover:brightness-105 transition-all"
                    >
                      Conversar no WhatsApp
                    </button>
                    <button
                      type="button"
                      onClick={handleReset}
                      className="w-full sm:w-auto px-5 py-2.5 rounded-xl border border-slate-200 text-slate-700 font-bold text-xs hover:bg-slate-50 transition-all"
                    >
                      Enviar outra mensagem
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Nome */}
                  <div>
                    <label
                      htmlFor="contato-nome"
                      className="block text-sm font-bold text-slate-700 mb-1.5"
                    >
                      Nome
                    </label>
                    <input
                      id="contato-nome"
                      type="text"
                      name="nome"
                      required
                      value={formData.nome}
                      onChange={handleChange}
                      placeholder="Seu nome completo"
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-white text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#001A5C]/20 focus:border-[#001A5C] transition-all text-sm"
                    />
                  </div>

                  {/* E-mail */}
                  <div>
                    <label
                      htmlFor="contato-email"
                      className="block text-sm font-bold text-slate-700 mb-1.5"
                    >
                      E-mail
                    </label>
                    <input
                      id="contato-email"
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="seu@email.com"
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-white text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#001A5C]/20 focus:border-[#001A5C] transition-all text-sm"
                    />
                  </div>

                  {/* Mensagem */}
                  <div>
                    <label
                      htmlFor="contato-mensagem"
                      className="block text-sm font-bold text-slate-700 mb-1.5"
                    >
                      Mensagem
                    </label>
                    <textarea
                      id="contato-mensagem"
                      name="mensagem"
                      required
                      rows={4}
                      value={formData.mensagem}
                      onChange={handleChange}
                      placeholder="Como podemos ajudar?"
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-white text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#001A5C]/20 focus:border-[#001A5C] transition-all text-sm resize-none"
                    />
                  </div>

                  {/* Botão de Envio exatamente como na referência */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-3.5 px-6 rounded-xl bg-[#001A5C] hover:bg-[#A00000] text-white font-bold text-sm sm:text-base flex items-center justify-center gap-2.5 shadow-md hover:shadow-lg transition-all duration-300 active:scale-[0.99] cursor-pointer disabled:opacity-75 disabled:cursor-not-allowed group"
                    >
                      {isSubmitting ? (
                        <span>Enviando...</span>
                      ) : (
                        <>
                          {/* Ícone de aviãozinho inclinado conforme a imagem de referência */}
                          <svg
                            className="w-4 h-4 fill-none stroke-current transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5"
                            strokeWidth="2.2"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M22 2L11 13"
                            />
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M22 2L15 22L11 13L2 9L22 2Z"
                            />
                          </svg>
                          <span>Enviar Mensagem</span>
                        </>
                      )}
                    </button>
                  </div>

                  {/* Aviso de Política de Privacidade */}
                  <div className="pt-2 text-center">
                    <p className="text-xs text-slate-500 font-normal leading-relaxed">
                      Seus dados são protegidos de acordo com nossa Política de Privacidade.{' '}
                      <button
                        type="button"
                        onClick={() => setShowPrivacyModal(true)}
                        className="text-[#A00000] hover:text-[#001A5C] font-semibold underline underline-offset-2 transition-colors cursor-pointer inline-block ml-0.5"
                      >
                        Saiba mais
                      </button>
                    </p>
                  </div>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>

      {/* Modal Informativo da Política de Privacidade */}
      {showPrivacyModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-200">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl border border-slate-200 space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <h4 className="text-lg font-bold text-[#001A5C] flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#A00000]" />
                Privacidade & Segurança
              </h4>
              <button
                type="button"
                onClick={() => setShowPrivacyModal(false)}
                className="text-slate-400 hover:text-slate-700 p-1 rounded-lg cursor-pointer"
              >
                ✕
              </button>
            </div>
            <p className="text-sm text-slate-600 leading-relaxed">
              A <strong>Dewice Tech Automação</strong> zela pela confidencialidade e segurança dos dados fornecidos por nossos clientes e parceiros em total conformidade com a <strong>LGPD (Lei Geral de Proteção de Dados - Lei nº 13.709/2018)</strong>.
            </p>
            <p className="text-xs text-slate-500 leading-relaxed">
              As informações enviadas neste formulário serão utilizadas exclusivamente para responder à sua solicitação comercial e técnica, jamais sendo compartilhadas com terceiros.
            </p>
            <div className="pt-2 flex justify-end">
              <button
                type="button"
                onClick={() => setShowPrivacyModal(false)}
                className="px-5 py-2 rounded-xl bg-[#001A5C] text-white text-xs font-bold hover:bg-[#A00000] transition-colors cursor-pointer"
              >
                Entendido
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
