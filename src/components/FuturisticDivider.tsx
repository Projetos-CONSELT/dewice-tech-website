import React from 'react'

export const FuturisticDivider: React.FC = () => {
  return (
    <div className="relative w-full max-w-6xl mx-auto flex items-center justify-center my-14 sm:my-20 select-none" aria-hidden="true">
      {/* Linha esquerda em gradiente suave */}
      <div className="h-[2px] flex-1 bg-gradient-to-r from-transparent via-[#A00000]/40 to-[#A00000]" />

      {/* Elemento cibernético central */}
      <div className="mx-4 flex items-center gap-2.5">
        {/* Ponto angular esquerdo */}
        <span className="w-1.5 h-1.5 bg-[#A00000]/60 rotate-45" />

        {/* Traço de conexão esquerdo */}
        <span className="w-5 h-[2px] bg-[#A00000]" />

        {/* Núcleo com brilho e efeito neon sutil */}
        <div className="relative flex items-center justify-center">
          <span className="w-3.5 h-3.5 bg-[#A00000] rotate-45 shadow-[0_0_12px_#A00000]" />
          <span className="absolute w-1.5 h-1.5 bg-white rotate-45" />
        </div>

        {/* Traço de conexão direito */}
        <span className="w-5 h-[2px] bg-[#A00000]" />

        {/* Ponto angular direito */}
        <span className="w-1.5 h-1.5 bg-[#A00000]/60 rotate-45" />
      </div>

      {/* Linha direita em gradiente suave */}
      <div className="h-[2px] flex-1 bg-gradient-to-l from-transparent via-[#A00000]/40 to-[#A00000]" />
    </div>
  )
}
