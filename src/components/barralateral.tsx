import { Home, FileText, CreditCard, Settings, BarChart3 } from "lucide-react"

export default function BarraLateral() {
    return(
        
        <div className="min-h-screen flex">
            {/*barra lateral*/}
           <div className=" w-2xs bg-gray-800 p-6 text-white flex flex-col">
                <h1 className="flex text-2xl mb-4 font-bold justify-center items-center gap-2 border-b border-gray-700 pb-4 "><BarChart3 size={25} />Analisador</h1>
                <div className="text-xl">
                <nav className="flex flex-col divide-y divide-gray-700">
                    <button className="text-left px-4 py-3 flex items-center gap-3 cursor-pointer hover:bg-gray-900 transition"><Home /> Página Principal</button>
                    <button className="text-left px-4 py-3 flex items-center gap-3 cursor-pointer hover:bg-gray-900 transition"><FileText /> Relatórios</button>
                    <button className="text-left px-4 py-3 flex items-center gap-3 cursor-pointer hover:bg-gray-900 transition"><CreditCard /> Transações</button>
                    <button className="text-left px-4 py-3 flex items-center gap-3 cursor-pointer hover:bg-gray-900 transition"><Settings /> Configurações</button>
                </nav>
                </div>
            </div>
             
        </div>
    )
}