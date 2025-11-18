import React, { useState } from 'react';

export default function AnadirFondosPage() {
  // Estado para controlar el input del monto
  const [amount, setAmount] = useState('');

  // Mapeo de colores extraídos del HTML original:
  // background-light: #f6f6f8
  // background-dark:  #101622
  // blue-primary:     #0A4DAA
  // grey-light:       #F0F2F5
  // grey-dark:        #333333
  // grey-medium:      #6C757D

  return (
    <>
      {/* Inyección de estilos (Fuentes e Iconos) */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined');
        
        .material-symbols-outlined {
          font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
        }
      `}</style>

      <div className="relative flex h-auto min-h-screen w-full flex-col font-['Manrope'] bg-[#f6f6f8] dark:bg-[#101622] group/design-root overflow-x-hidden">
        
        {/* Header Sticky */}
        <div className="flex items-center bg-[#f6f6f8] dark:bg-[#101622] p-4 pb-2 justify-between sticky top-0 z-10">
          <button className="text-[#333333] dark:text-[#F0F2F5] flex size-12 shrink-0 items-center justify-start hover:opacity-70 transition-opacity">
            <span className="material-symbols-outlined text-2xl">arrow_back</span>
          </button>
          <h2 className="text-[#333333] dark:text-[#F0F2F5] text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center">
            Añadir Fondos
          </h2>
          <div className="w-12"></div> {/* Spacer para centrar el título */}
        </div>

        {/* Main Content */}
        <div className="flex flex-col p-4 space-y-6 flex-grow">
          <div>
            <h3 className="text-[#333333] dark:text-[#F0F2F5] text-lg font-bold leading-tight tracking-[-0.015em] pb-3 pt-2">
              Monto a Añadir
            </h3>
            <div className="relative">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
                <span className="text-[#333333] dark:text-white text-2xl font-semibold">$</span>
              </div>
              <input 
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="form-input block w-full rounded-lg border-none bg-[#F0F2F5] dark:bg-gray-800 py-4 pl-10 pr-4 text-right text-3xl font-bold text-[#333333] dark:text-white placeholder:text-[#6C757D] focus:outline-none focus:ring-2 focus:ring-[#0A4DAA]/50 transition-all" 
                inputMode="decimal" 
                placeholder="0.00" 
                type="text" // Usamos text con inputmode decimal para mejor control de formato si quisieras validarlo
              />
            </div>
          </div>
        </div>

        {/* Spacer to push footer down if content is short */}
        <div className="flex-grow"></div>

        {/* Sticky Footer Button */}
        <div className="p-4 bg-[#f6f6f8] dark:bg-[#101622] sticky bottom-0">
          <button className="w-full bg-[#0A4DAA] text-white font-bold py-4 px-4 rounded-lg hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#0A4DAA] dark:focus:ring-offset-[#101622] transition-all active:scale-[0.99]">
            Añadir Fondos
          </button>
        </div>

      </div>
    </>
  );
}