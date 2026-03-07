import BarraSuperior from '../components/barrasuperior'

import BarraLateral from '../components/barralateral'

export default function Painel () {
    return(
    <div className='flex'>
        <BarraLateral/>
        <div className='flex-1 p-8 bg-gray-400'>
        <BarraSuperior />
        
        </div>
    </div>
    )
}