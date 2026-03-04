import BarraSuperior from '../components/barrasuperior'
import VisualizaçaoDados from '../components/visualizaçaodados'
export default function Painel() {
    return(
        
        <div className='min-h-screen flex bg-white '>
            {/*barra lateral*/}
           <div className=" w-64 bg-gray-800 p-6  text-white flex flex-col">
                <h1 className="text-3xl mb-10 font-bold text-center">Analisador</h1>
                <div className="text-xl">
                <nav className="space-y-4">
                    <button className="w-full text-left px-4 py-2 cursor-pointer rounded-lg hover:bg-gray-900 transition ">Página Principal</button>
                    <button className="w-full text-left px-4 py-2 cursor-pointer rounded-lg hover:bg-gray-900 transition">Relatórios</button>
                    <button className="w-full text-left px-4 py-2 cursor-pointer rounded-lg hover:bg-gray-900 transition">Transações</button>
                    <button className="w-full text-left px-4 py-2 cursor-pointer rounded-lg hover:bg-gray-900 transition">Configurações</button>
                </nav>
                </div>
            </div>
            <div className='flex-1 p-8 bg-white'>
                <BarraSuperior />
                <VisualizaçaoDados/>

            </div>
        </div>

    )
}