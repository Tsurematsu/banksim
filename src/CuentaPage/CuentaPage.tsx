
export default function CuentaPage() {
  // Definición de colores locales (para referencia o uso en estilos en línea si fuera necesario)
  // En el JSX he usado directamente los valores hexadecimales con Tailwind:
  // primary: #135bec
  // background-light: #f6f6f8
  // background-dark: #101622

  const accounts = [
    {
      id: 1,
      name: 'Cuenta Corriente',
      number: '**** 1234',
      balance: '$15,520.50',
      icon: 'account_balance_wallet',
    },
    {
      id: 2,
      name: 'Cuenta de Ahorros',
      number: '**** 5678',
      balance: '$8,300.25',
      icon: 'savings',
    },
    {
      id: 3,
      name: 'Tarjeta Visa Gold',
      number: '**** 8890',
      balance: '$1,500.20',
      icon: 'credit_card',
    },
  ];

  return (
    <>
      {/* Estilos específicos para este componente (Fuentes e Iconos) */}
      {/* NOTA: Asegúrate de importar estas fuentes en tu index.html o _document.js si no cargan */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined');
        
        .material-symbols-outlined {
          font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
        }
      `}</style>

      <div className="relative flex h-auto min-h-screen w-full flex-col bg-[#f6f6f8] dark:bg-[#101622] group/design-root overflow-x-hidden font-['Manrope']">
        
        {/* Top App Bar */}
        <div className="flex flex-col gap-2 p-4 pb-2 bg-[#f6f6f8] dark:bg-[#101622]">
          <div className="flex items-center h-12 justify-between">
            <div className="flex size-12 shrink-0 items-center">
              <div 
                className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10" 
                style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAlCdPYjY6KojroTgpXrocfydM6dZDaYlL6adXCYQ_olyhwgEoR8v0LIsyKhu8adBqRPIJhL-ZYDF7CCu6rlyUK8CBoDK9xSWfg6f3UyYVlheEtouD6AFNnzoiqbkaPF4VoA3a3eO_YZQyVCGLcEWZ9dwijnOLC4eP3NIY-74aihLocWhju7DvIbOiEFZCQgWi0vAJJBeknP9FMnIBix38MHeC4dA4r61Ys2hLVxlcJRY5T8XHWpbm5mC_ZB7VP_WiToxuyYHPOMg")' }}
              ></div>
            </div>
            <div className="flex w-12 items-center justify-end">
              <button className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 w-10 bg-transparent text-slate-800 dark:text-white gap-2 text-base font-bold leading-normal tracking-[0.015em] min-w-0 p-0">
                <span className="material-symbols-outlined text-slate-800 dark:text-white">notifications</span>
              </button>
            </div>
          </div>
          <p className="text-slate-900 dark:text-white tracking-light text-[28px] font-bold leading-tight">
            Hola, María
          </p>
        </div>

        {/* Total Balance Card */}
        <div className="p-4 @container">
          <div className="flex flex-col items-stretch justify-start rounded-xl @xl:flex-row @xl:items-start bg-slate-900 dark:bg-slate-800/50 shadow-lg overflow-hidden">
            <div className="flex w-full min-w-72 grow flex-col items-stretch justify-center gap-2 p-6">
              <div className="flex items-center justify-between">
                <p className="text-slate-300 text-sm font-normal leading-normal">Saldo Total</p>
                <button className="text-slate-300 hover:text-white transition-colors">
                  <span className="material-symbols-outlined text-xl">visibility</span>
                </button>
              </div>
              <p className="text-white text-3xl font-bold leading-tight tracking-[-0.015em]">$25,320.95</p>
              <div className="flex items-end gap-3 justify-between mt-2">
                <div className="flex flex-col gap-1">
                  <p className="text-slate-400 text-sm font-normal leading-normal">Actualizado ahora mismo</p>
                  <p className="text-green-400 text-sm font-normal leading-normal">+$550.20 hoy</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section Header */}
        <h3 className="text-slate-900 dark:text-white text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">
          Mis Cuentas
        </h3>

        {/* Accounts List */}
        <div className="flex flex-col gap-0 px-4">
          {accounts.map((account, index) => (
            <div 
              key={account.id}
              className={`flex items-center gap-4 bg-transparent min-h-[72px] py-3 justify-between ${
                index !== accounts.length - 1 ? 'border-b border-slate-200 dark:border-slate-800' : ''
              }`}
            >
              <div className="flex items-center gap-4">
                <div className="text-slate-900 dark:text-white flex items-center justify-center rounded-lg bg-slate-200 dark:bg-slate-800 shrink-0 size-12">
                  <span className="material-symbols-outlined">{account.icon}</span>
                </div>
                <div className="flex flex-col justify-center">
                  <p className="text-slate-900 dark:text-white text-base font-medium leading-normal line-clamp-1">
                    {account.name}
                  </p>
                  <p className="text-slate-500 dark:text-slate-400 text-sm font-normal leading-normal line-clamp-2">
                    {account.number}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <p className="text-slate-900 dark:text-white text-base font-medium leading-normal">
                  {account.balance}
                </p>
                <span className="material-symbols-outlined text-slate-400 dark:text-slate-500">chevron_right</span>
              </div>
            </div>
          ))}
        </div>

        {/* Floating Action Button */}
        <div className="fixed bottom-6 right-6 z-10">
          <button className="flex items-center justify-center w-14 h-14 rounded-full bg-[#135bec] text-white shadow-lg hover:bg-[#135bec]/90 transition-colors">
            <span className="material-symbols-outlined text-3xl">add</span>
          </button>
        </div>

        {/* Bottom Navigation Bar */}
        <div className="sticky bottom-0 mt-auto w-full bg-[#f6f6f8]/80 dark:bg-[#101622]/80 backdrop-blur-sm border-t border-slate-200 dark:border-slate-800 z-0">
          <div className="flex justify-around items-center h-20 px-4">
            <button className="flex flex-col items-center gap-1 text-[#135bec]">
              <span className="material-symbols-outlined">home</span>
              <span className="text-xs font-medium">Inicio</span>
            </button>
            <button className="flex flex-col items-center gap-1 text-slate-500 dark:text-slate-400 hover:text-[#135bec] dark:hover:text-[#135bec] transition-colors">
              <span className="material-symbols-outlined">sync_alt</span>
              <span className="text-xs font-medium">Transferir</span>
            </button>
            <button className="flex flex-col items-center gap-1 text-slate-500 dark:text-slate-400 hover:text-[#135bec] dark:hover:text-[#135bec] transition-colors">
              <span className="material-symbols-outlined">receipt_long</span>
              <span className="text-xs font-medium">Pagar</span>
            </button>
            <button className="flex flex-col items-center gap-1 text-slate-500 dark:text-slate-400 hover:text-[#135bec] dark:hover:text-[#135bec] transition-colors">
              <span className="material-symbols-outlined">account_circle</span>
              <span className="text-xs font-medium">Perfil</span>
            </button>
          </div>
        </div>

      </div>
    </>
  );
}