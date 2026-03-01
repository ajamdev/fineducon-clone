import { useEffect, useState } from 'react'

const IndexCalculator = () => {
  const [amount, setAmount] = useState(500000)
  const [months, setMonths] = useState(12)
  const [monthlyPayment, setMonthlyPayment] = useState(0)

  // Constants for credit calculation (example values)
  const monthlyInterestRate = 0.025 // 2.5% monthly

  const calculatePayment = (p, n, i) => {
    if (i === 0) return p / n
    const monthlyRate = i
    const payment =
      (p * monthlyRate * Math.pow(1 + monthlyRate, n)) /
      (Math.pow(1 + monthlyRate, n) - 1)
    return Math.round(payment)
  }

  useEffect(() => {
    const payment = calculatePayment(amount, months, monthlyInterestRate)
    setMonthlyPayment(payment)
  }, [amount, months])

  const formatCurrency = (value) => {
    return new Intl.NumberFormat('es-CO', {
      style: 'currency',
      currency: 'COP',
      maximumFractionDigits: 0,
    }).format(value)
  }

  return (
    <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-6 md:p-8 shadow-2xl text-white max-w-lg mx-auto overflow-hidden relative">
      <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-purple-500/20 rounded-full blur-3xl"></div>

      <h3 className="text-2xl font-bold mb-8 flex items-center gap-2">
        <span className="w-8 h-8 bg-purple-500 rounded-lg flex items-center justify-center text-sm">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect width="18" height="18" x="3" y="3" rx="2" />
            <line x1="8" x2="16" y1="12" y2="12" />
            <line x1="12" x2="12" y1="8" y2="16" />
          </svg>
        </span>
        Calcula tu Crédito
      </h3>

      {/* Amount Slider */}
      <div className="mb-10">
        <div className="flex justify-between items-end mb-4">
          <label className="text-sm font-medium text-purple-200 uppercase tracking-wider">
            Monto del crédito
          </label>
          <span className="text-2xl font-bold text-white">
            {formatCurrency(amount)}
          </span>
        </div>
        <input
          type="range"
          min="500000"
          max="1000000"
          step="50000"
          value={amount}
          onChange={(e) => setAmount(parseInt(e.target.value))}
          className="w-full h-2 bg-purple-900/50 rounded-lg appearance-none cursor-pointer accent-purple-400"
        />
        <div className="flex justify-between mt-2 text-xs text-purple-300/60 font-medium">
          <span>{formatCurrency(500000)}</span>
          <span>{formatCurrency(1000000)}</span>
        </div>
      </div>

      {/* Months Slider */}
      <div className="mb-10">
        <div className="flex justify-between items-end mb-4">
          <label className="text-sm font-medium text-purple-200 uppercase tracking-wider">
            Plazo en meses
          </label>
          <span className="text-2xl font-bold text-white">{months} meses</span>
        </div>
        <input
          type="range"
          min="6"
          max="24"
          step="1"
          value={months}
          onChange={(e) => setMonths(parseInt(e.target.value))}
          className="w-full h-2 bg-purple-900/50 rounded-lg appearance-none cursor-pointer accent-purple-400"
        />
        <div className="flex justify-between mt-2 text-xs text-purple-300/60 font-medium">
          <span>6 Meses</span>
          <span>24 Meses</span>
        </div>
      </div>

      {/* Results Card */}
      <div className="bg-purple-900/40 border border-purple-400/20 rounded-2xl p-6 relative overflow-hidden group hover:border-purple-400/40 transition-colors">
        <div className="relative z-10">
          <p className="text-sm text-purple-200/80 mb-1 text-center font-medium">
            Tu cuota mensual estimada es de:
          </p>
          <div className="text-4xl font-black text-center text-transparent bg-clip-text bg-linear-to-r from-white via-purple-100 to-purple-200 tracking-tight">
            {formatCurrency(monthlyPayment)}
          </div>
          <p className="text-[10px] text-purple-300/40 mt-4 text-center leading-tight uppercase tracking-widest">
            * Sujeto a aprobación y política de riesgos. Tasa del 2.5% M.V.
          </p>
        </div>
        <div className="absolute inset-0 bg-linear-to-br from-purple-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
      </div>

      <button className="w-full mt-8 bg-white text-purple-900 font-bold py-4 rounded-xl hover:bg-purple-50 transition-all transform active:scale-[0.98] shadow-lg shadow-purple-900/20">
        Solicitar mi Crédito Ahora
      </button>

      <style
        dangerouslySetInnerHTML={{
          __html: `
        input[type=range]::-webkit-slider-thumb {
          -webkit-appearance: none;
          height: 24px;
          width: 24px;
          border-radius: 50%;
          background: #e9d5ff;
          box-shadow: 0 0 10px rgba(168, 85, 247, 0.4);
          cursor: pointer;
          border: 4px solid #7c3aed;
          transition: all 0.2s ease;
        }
        input[type=range]:hover::-webkit-slider-thumb {
          transform: scale(1.15);
          background: #ffffff;
        }
      `,
        }}
      />
    </div>
  )
}

export default IndexCalculator
