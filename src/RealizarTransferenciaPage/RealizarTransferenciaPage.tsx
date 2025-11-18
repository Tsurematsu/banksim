import React, { useState } from 'react';

export default function RealizarTransferenciaPage() {
  // Estados del componente
  const [destinationType, setDestinationType] = useState('contacts'); // Tabs
  const [amount, setAmount] = useState(''); // Importe
  const [searchTerm, setSearchTerm] = useState(''); // Nuevo estado para la búsqueda

  // Colores extraídos (Referencia):
  // primary: #135bec
  // background-light: #f6f6f8
  // background-dark: #101622

  return (
    <>
      {/* Estilos Globales (Fuentes e Iconos) */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined');
        
        .material-symbols-outlined {
            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
        }
      `}</style>

      <div className="relative flex h-auto min-h-screen w-full flex-col bg-[#f6f6f8] dark:bg-[#101622] font-['Manrope'] group/design-root overflow-x-hidden">
        
        {/* Top App Bar */}
        <div className="flex items-center bg-[#f6f6f8] dark:bg-[#101622] p-4 pb-2 justify-between sticky top-0 z-10">
          <button className="text-slate-800 dark:text-white flex size-12 shrink-0 items-center justify-center -ml-3 hover:bg-slate-200 dark:hover:bg-slate-800 rounded-full transition-colors">
            <span className="material-symbols-outlined text-2xl">arrow_back</span>
          </button>
          <h1 className="text-slate-900 dark:text-white text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center">
            Realizar Transferencia
          </h1>
          <div className="size-12 shrink-0"></div> {/* Spacer */}
        </div>

        <main className="flex-grow px-4 pb-28">
          
          {/* Section: From Account */}
          <section className="mt-4">
            <h2 className="text-slate-900 dark:text-white text-lg font-bold leading-tight tracking-[-0.015em] pb-2 pt-4">
              Desde mi cuenta
            </h2>
            <div className="flex items-center gap-4 bg-white dark:bg-slate-800/50 p-4 min-h-[72px] rounded-xl shadow-sm cursor-pointer hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
              <div className="text-white flex items-center justify-center rounded-lg bg-[#135bec]/20 dark:bg-[#135bec]/30 shrink-0 size-12">
                <span className="material-symbols-outlined text-[#135bec] dark:text-blue-300">account_balance_wallet</span>
              </div>
              <div className="flex flex-col justify-center flex-grow">
                <p className="text-slate-900 dark:text-white text-base font-medium leading-normal line-clamp-1">
                  Cuenta Corriente
                </p>
                <p className="text-slate-500 dark:text-slate-400 text-sm font-normal leading-normal line-clamp-2">
                  **** 1234 - Saldo: € 1,250.50
                </p>
              </div>
              <div className="shrink-0">
                <button className="text-slate-600 dark:text-slate-300 flex size-7 items-center justify-center">
                  <span className="material-symbols-outlined text-2xl">expand_more</span>
                </button>
              </div>
            </div>
          </section>

          {/* Section: Destination Account */}
          <section className="mt-6">
            <h2 className="text-slate-900 dark:text-white text-lg font-bold leading-tight tracking-[-0.015em] pb-2 pt-4">
              Enviar a
            </h2>
            
            {/* Tabs Selector */}
            <div className="flex py-3">
              <div className="flex h-10 flex-1 items-center justify-center rounded-lg bg-slate-200 dark:bg-slate-800 p-1">
                <button 
                  onClick={() => setDestinationType('accounts')}
                  className={`flex cursor-pointer h-full grow items-center justify-center overflow-hidden rounded-lg px-2 text-sm font-medium leading-normal transition-all ${
                    destinationType === 'accounts' 
                      ? 'bg-white dark:bg-slate-700 shadow-sm text-slate-900 dark:text-white' 
                      : 'text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-300'
                  }`}
                >
                  <span className="truncate">Mis Cuentas</span>
                </button>
                <button 
                  onClick={() => setDestinationType('contacts')}
                  className={`flex cursor-pointer h-full grow items-center justify-center overflow-hidden rounded-lg px-2 text-sm font-medium leading-normal transition-all ${
                    destinationType === 'contacts' 
                      ? 'bg-white dark:bg-slate-700 shadow-sm text-slate-900 dark:text-white' 
                      : 'text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-300'
                  }`}
                >
                  <span className="truncate">Otros Contactos</span>
                </button>
              </div>
            </div>

            {/* NEW: Search Bar */}
            <div className="relative mt-2">
              <span className="material-symbols-outlined pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4 text-slate-500 dark:text-slate-400">
                search
              </span>
              <input 
                id="search_contact" 
                type="text" 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Buscar por nombre o IBAN" 
                className="w-full rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800/50 py-3 pl-12 pr-4 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:border-[#135bec] focus:ring-[#135bec] dark:focus:border-[#135bec] dark:focus:ring-[#135bec] focus:ring-1 outline-none transition-all" 
              />
            </div>

            {/* Contact List */}
            <div className="space-y-3 mt-4">
              {/* Contact Item */}
              <div className="flex items-center gap-4 bg-white dark:bg-slate-800/50 p-4 min-h-[72px] rounded-xl shadow-sm cursor-pointer hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors group">
                <div className="shrink-0">
                  <img 
                    className="size-10 rounded-full object-cover" 
                    alt="Profile picture of Ana García" 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCLq8wdTg0foUgMFNbpTkHLuAnPI6ewHT5_Lf8sQdYbLOiPIdlfvf1q3jRkobLvOREAPm5OsCZE5Y4t8WvajEzlge7ud6n6JFHN0srvgNQsO2lfEWsXRTQ8Ze2h7EEJVlIShXqdDKayt_cKD4EsntXhLjbpunrrIu3I00Nx4Qg-76PveZdxOH6hZxsRxn-qB-Ue4Yqgfy4tAuLHEQpoN4PJc3vLqDw0coesBCXjrUtj23o5lZhpdqNReyMjQ4sGCiuAL54iXdzDGQ"
                  />
                </div>
                <div className="flex flex-col justify-center flex-grow">
                  <p className="text-slate-900 dark:text-white text-base font-medium leading-normal line-clamp-1">
                    Ana García
                  </p>
                  <p className="text-slate-500 dark:text-slate-400 text-sm font-normal leading-normal line-clamp-2">
                    ES83 2038 **** **** **** 5678
                  </p>
                </div>
                <div className="shrink-0">
                  <button className="text-slate-600 dark:text-slate-300 flex size-7 items-center justify-center group-hover:translate-x-1 transition-transform">
                    <span className="material-symbols-outlined text-2xl">arrow_forward_ios</span>
                  </button>
                </div>
              </div>

              {/* Add New Contact */}
              <div className="flex items-center gap-4 bg-transparent p-4 min-h-[72px] rounded-xl border-2 border-dashed border-slate-300 dark:border-slate-700 cursor-pointer hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
                <div className="text-[#135bec] dark:text-blue-300 flex items-center justify-center rounded-lg bg-[#135bec]/10 dark:bg-[#135bec]/20 shrink-0 size-10">
                  <span className="material-symbols-outlined">add</span>
                </div>
                <div className="flex flex-col justify-center">
                  <p className="text-slate-900 dark:text-white text-base font-medium leading-normal line-clamp-1">
                    Añadir nuevo contacto
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Section: Details */}
          <section className="mt-6">
            <h2 className="text-slate-900 dark:text-white text-lg font-bold leading-tight tracking-[-0.015em] pb-2 pt-4">
              Detalles
            </h2>
            
            {/* Amount Input */}
            <div className="relative mt-2">
              <label className="text-sm font-medium text-slate-600 dark:text-slate-400" htmlFor="amount">
                Importe
              </label>
              <div className="relative mt-1">
                <span className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4 text-2xl font-bold text-slate-500 dark:text-slate-400">
                  €
                </span>
                <input 
                  id="amount" 
                  inputMode="decimal" 
                  type="text"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  placeholder="0.00" 
                  className="w-full rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800/50 p-4 pl-10 text-right text-3xl font-bold text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:border-[#135bec] focus:ring-[#135bec] dark:focus:border-[#135bec] dark:focus:ring-[#135bec] focus:ring-1 outline-none transition-all" 
                />
              </div>
            </div>

            {/* Concept Input */}
            <div className="relative mt-4">
              <label className="text-sm font-medium text-slate-600 dark:text-slate-400" htmlFor="concept">
                Concepto (Opcional)
              </label>
              <input 
                id="concept" 
                type="text"
                placeholder="Ej: Alquiler, Cena, etc." 
                className="mt-1 block w-full rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800/50 p-4 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:border-[#135bec] focus:ring-[#135bec] dark:focus:border-[#135bec] dark:focus:ring-[#135bec] focus:ring-1 outline-none transition-all" 
              />
            </div>
          </section>
        </main>

        {/* Footer Action Button */}
        <footer className="fixed bottom-0 left-0 w-full bg-gradient-to-t from-[#f6f6f8]/100 via-[#f6f6f8]/90 to-[#f6f6f8]/0 dark:from-[#101622]/100 dark:via-[#101622]/90 dark:to-[#101622]/0 p-4 pt-6 backdrop-blur-[2px]">
          <button className="w-full rounded-xl bg-[#135bec] px-6 py-4 text-base font-bold text-white shadow-lg shadow-[#135bec]/30 hover:bg-blue-600 focus:outline-none focus:ring-4 focus:ring-[#135bec]/50 disabled:bg-slate-300 disabled:dark:bg-slate-700 disabled:text-slate-500 disabled:dark:text-slate-400 disabled:shadow-none transition-all active:scale-[0.98]">
            Continuar
          </button>
        </footer>
        
      </div>
    </>
  );
}