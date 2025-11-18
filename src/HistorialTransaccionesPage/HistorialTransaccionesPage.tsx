
export default function HistorialTransaccionesPage() {
  // Definición de datos para simular la carga dinámica
  const transactionGroups = [
    {
      date: "Hoy",
      transactions: [
        {
          id: 1,
          title: "Spotify",
          time: "14:30",
          amount: "-$9.99",
          isPositive: false,
          img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAtchdMywpctTefxy0wg-F7LD4h-JK_RyEI2MhgjHYwKXmJpt160FxjcFKERkOW6NczdOUf063Ux1Bg2ZWgmmbohf6pHQe1Eie8DvHvZs5qN7N8SCZ6vXMA5c3cqK7Uqolx8zb1pYVz_y8HBR_gE9Aw6Dk2ZWQ62QXln1QdNVvbiPnuU3whCKmRbHirYkWFaFkLu7Y6101X4CuE_-yfg094Y--QK09ADSYedrWOdR-e5S0I99_zNFemziaCjtRT3unCtNn4AIhOSA"
        },
        {
          id: 2,
          title: "Viaje en Uber",
          time: "10:15",
          amount: "-$15.50",
          isPositive: false,
          img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDsowN2Vyi-Qo_kqPWBcXsSzUmi14W4TnUoKS-vBHjl7k8XkuxQDyCmJc4-An6JeDgmNHih-AYAHjxk7u8g5y4D_r78gNhqRngc9WeTT_KKDIyudfrV3HVF90VTsn9pl5J2dZlSbqKq_7xYRwIrmI0I32EXL4UarEvTaumrzl9BL2qGDjTE9GGO2zE40PJfn6OpE_wcEOFBKuVs5-qZxat-qHtTatfIMlXaVoiHaGJ8HardcqmT28BcAE3G09ql3tln0pQUZdSNRQ"
        },
        {
          id: 3,
          title: "Sueldo",
          time: "09:00",
          amount: "+$2,500.00",
          isPositive: true,
          img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDnzQdFNiKaGmlw0qfeKkzNiyVJgV9d92mocXPR6SY42kGKiqiIDY0zt1DDoGAfVUhqmEqfhC8EACNIPvSvLCEMij4n8457HIHSSgxjJ886Zr-R_SYLi9tlu36N7AKKTqyzLEe0zVOsjO5fr9WnNo8iaelFb8bgjLKOaLL-9B-0xNUqxjm5yzPLVJiwRg_l6PtdWVfUuKu0AXmuxxMvdciiFMpbbi47aJ405CiOAKZYLbQcXJXqtaBRy8qP1jDHEHOn6QYoVXQtzA"
        }
      ]
    },
    {
      date: "Ayer",
      transactions: [
        {
          id: 4,
          title: "Netflix",
          time: "20:05",
          amount: "-$15.99",
          isPositive: false,
          img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBbfRk8anFNKl1JoxzcCeSbgZUjcBFzp-v2BxFmd3YfDw2Pis1sQD-7EC2ldJdobTBMmTflAAGq9xDkcCv2AHCU6a0kWtosv0SsH5rknlQO0MmoxlO2x4H-RpRBGYM0kyEJAwynm96q-Y_29Hi1HYp8d-PyUg4OZ8GgPbO7fTkR0sw14zTts_t6WPtMnqHb_L6T8l6eXWMMKZN_wvFTFsqGR_tjBTkKRVBc1KTPNFyCgkndQg0_l2_3WB53ZLlrzwMzI5UYgf-1aw"
        },
        {
          id: 5,
          title: "Transferencia de Ana",
          time: "18:45",
          amount: "+$50.00",
          isPositive: true,
          img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDa_Qmb5kEGZJNkZ1lz3PYOii1tDoD0YgBBRAW35Gokva8DQL3s6KA2P3inzxfyW2U63leUjDMxwWAFSOaNhUuCAKcibSNtzH3OG8mka4wbOcnE9ii0zE4Q4wUvFOq9oE-o2ZZj5Db-HbKt_lVxBs16NIwkyh1mYu1mXWu84-nStavow0iKH71PAUAcw-7zZ6FYyVsgmMJLtYwkKwjpeMa5Lwb1PyFR5hdllVcq-SM3NRtajajCeDtMjICKqBcTUslrpbKrOfHsbA"
        }
      ]
    },
    {
      date: "15 de Septiembre",
      transactions: [
        {
          id: 6,
          title: "Starbucks",
          time: "08:22",
          amount: "-$6.75",
          isPositive: false,
          img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBLmIi0kKJPoAJ4A6Ogcdsupd9-oBKwkupIecdDh9-oDq_MWu4GVFr5giu78IMJy9pjhxc7VQG96t-xWtucYsWvQ1ZVqQbnINv7E3IgYcrLWEFMCZw0evS-hpSeVbBpGU6i3THHO7gzm0RkHNMEgkMG_7dNWJQfDNkdbDEHDSilzZukt1CFmP-8fIJ2jPo21cHzwaTyeXZ4fhHGyFIGwgs954K3U4i58sjo1jCU5q69x-9PJ-FZfQAB21o7C95ZVCw9aJ-aKMYWeg"
        }
      ]
    }
  ];

  // Colores extraídos (Mapeo):
  // primary -> #135bec
  // background-light -> #f6f6f8
  // background-dark -> #101622
  // El HTML también usa hardcoded: dark:bg-[#1a2233] para las tarjetas en modo oscuro.

  return (
    <>
      {/* Estilos para fuentes e iconos */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;700;800&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined');
        
        .material-symbols-outlined {
            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
        }
      `}</style>

      <div className="relative flex h-auto min-h-screen w-full flex-col bg-[#f6f6f8] dark:bg-[#101622] font-['Manrope']">
        
        {/* Top App Bar */}
        <header className="sticky top-0 z-10 flex items-center justify-between bg-[#f6f6f8] dark:bg-[#101622] p-4 pb-2">
          <div className="flex size-12 shrink-0 items-center justify-start">
            <button className="material-symbols-outlined text-gray-800 dark:text-gray-200">arrow_back</button>
          </div>
          <h1 className="flex-1 text-center text-lg font-bold leading-tight tracking-[-0.015em] text-gray-900 dark:text-white">
            Historial
          </h1>
          <div className="flex size-12 shrink-0 items-center justify-end">
            <button className="material-symbols-outlined text-gray-800 dark:text-gray-200">more_vert</button>
          </div>
        </header>

        {/* Search Bar */}
        <div className="px-4 py-3">
          <label className="flex flex-col min-w-40 h-12 w-full">
            <div className="flex w-full flex-1 items-stretch rounded-xl h-full shadow-sm">
              <div className="text-gray-500 dark:text-gray-400 flex border-r-0 bg-white dark:bg-[#1a2233] items-center justify-center pl-4 rounded-l-xl">
                <span className="material-symbols-outlined">search</span>
              </div>
              <input 
                className="flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-r-xl text-gray-900 dark:text-white focus:outline-0 focus:ring-0 border-none bg-white dark:bg-[#1a2233] h-full placeholder:text-gray-500 dark:placeholder:text-gray-400 px-4 pl-2 text-base font-normal leading-normal" 
                placeholder="Buscar en transacciones..." 
                type="text"
              />
            </div>
          </label>
        </div>

        {/* Chips */}
        <div className="flex gap-3 px-4 py-2 overflow-x-auto scrollbar-hide">
          <button className="flex h-10 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-[#135bec] pl-4 pr-3 text-white">
            <p className="text-sm font-medium leading-normal">Este Mes</p>
            <span className="material-symbols-outlined">expand_more</span>
          </button>
          <button className="flex h-10 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-white dark:bg-[#1a2233] pl-4 pr-3 text-gray-800 dark:text-gray-200">
            <p className="text-sm font-medium leading-normal">Ingresos</p>
            <span className="material-symbols-outlined">expand_more</span>
          </button>
          <button className="flex h-10 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-white dark:bg-[#1a2233] pl-4 pr-3 text-gray-800 dark:text-gray-200">
            <p className="text-sm font-medium leading-normal">Gastos</p>
            <span className="material-symbols-outlined">expand_more</span>
          </button>
          <button className="flex size-10 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-white dark:bg-[#1a2233] text-gray-800 dark:text-gray-200">
            <span className="material-symbols-outlined">tune</span>
          </button>
        </div>

        {/* Transaction List */}
        <main className="flex-1 px-4 pt-4 pb-8">
          {transactionGroups.map((group, index) => (
            <div key={index}>
              <h3 className={`text-gray-900 dark:text-white text-lg font-bold leading-tight tracking-[-0.015em] pb-2 ${index !== 0 ? 'pt-6' : 'pt-4'}`}>
                {group.date}
              </h3>
              
              <div className="flex flex-col gap-2">
                {group.transactions.map((tx) => (
                  <div key={tx.id} className="flex items-center gap-4 bg-white dark:bg-[#1a2233] rounded-xl p-3 min-h-[72px] justify-between">
                    <div className="flex items-center gap-4">
                      <div 
                        className="bg-center bg-no-repeat aspect-square bg-cover rounded-lg size-12" 
                        style={{ backgroundImage: `url("${tx.img}")` }}
                      ></div>
                      <div className="flex flex-col justify-center">
                        <p className="text-gray-900 dark:text-white text-base font-medium leading-normal line-clamp-1">
                          {tx.title}
                        </p>
                        <p className="text-gray-500 dark:text-gray-400 text-sm font-normal leading-normal line-clamp-2">
                          {tx.time}
                        </p>
                      </div>
                    </div>
                    <div className="shrink-0">
                      <p className={`text-base font-medium leading-normal ${
                        tx.isPositive 
                          ? 'text-green-600 dark:text-green-500' 
                          : 'text-gray-800 dark:text-gray-200'
                      }`}>
                        {tx.amount}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </main>
      </div>
    </>
  );
}