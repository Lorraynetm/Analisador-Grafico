import CardKpi from "./cardkpi"

export default function VisualizaçaoDados () {
    return(
        <div>
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <CardKpi title="Vendas" value="R$ 125.400" percentage="15,6%" trend="up"/>
            <CardKpi title="Lucro" value="R$ 78.200" percentage="8,4%" trend="up"/>
            <CardKpi title="Custo" value="R$ 47.200" percentage="22,3%" trend="down"/>
            <CardKpi title="Clientes" value="320" percentage="12,5%" trend="up"/>
            </div>
        </div>
        
    )     
}
