import { Home, FileText, CreditCard, Settings, BarChart3 } from "lucide-react"

export default function BarraLateral() {
    return(
        
        <aside className="fixed left-0 top-0 h-screen flex flex-col w-2xs bg-gray-800 p-6 text-white">
           <div>
                <header className="flex text-2xl mb-4 font-bold justify-center items-center gap-2 border-b border-gray-700 pb-4"><BarChart3 size={23} />Analisador Gráfico</header>
                    <nav>
                        <ul className="flex flex-col divide-y divide-gray-700">
                            <li className="text-xl text-left px-4 py-3 flex items-center gap-3 cursor-pointer hover:bg-gray-900 transition"><Home /> Página Principal</li>
                            <li className="text-xl text-left px-4 py-3 flex items-center gap-3 cursor-pointer hover:bg-gray-900 transition"><FileText /> Relatórios</li>
                            <li className="text-xl text-left px-4 py-3 flex items-center gap-3 cursor-pointer hover:bg-gray-900 transition"><CreditCard /> Transações</li>
                            <li className="text-xl text-left px-4 py-3 flex items-center gap-3 cursor-pointer hover:bg-gray-900 transition"><Settings /> Configurações</li>
                        </ul>
                    </nav>
            </div>
             
        </aside>
    )
}