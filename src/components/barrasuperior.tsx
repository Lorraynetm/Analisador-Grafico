export default function BarraSuperior () {
    return(
        <div className="flex items-center justify-between mb-6 border-b border-gray-300 pb-4 mb-6">
            <h1 className="text-2xl font-bold text-gray-800">Análise Financeira</h1>
            <div className="flex gap-4 ">
                <select className="bg-gray-700 text-white border border-gray-600 rounded-lg px-4 py-2 min-w-[180px]" name="" id="">
                    <option value="">Selecionar empresa</option>
                </select>
                <select className="bg-gray-700 text-white border border-gray-600 rounded-lg px-4 py-2 min-w-[180px]" name="" id="">
                    <option value="">Últimos 30 dias</option>
                </select>
            </div>
        </div>
    )
}