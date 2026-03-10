import BarraSuperior from '../components/barrasuperior'
import BarraLateral from '../components/barralateral'
import VisualizaçaoDados from '../components/visualizacaodados'

export default function Painel () {
    return(
    <main className='flex'>
        <BarraLateral/>
        <section className='flex-1 p-8 bg-gray-400'>
           <header><BarraSuperior /></header>
            <VisualizaçaoDados />
        </section>
    </main>
    )
}