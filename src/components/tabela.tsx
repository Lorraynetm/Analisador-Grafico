export default function Tabela() {
    return (
      <div className="bg-gray-300 p-4 rounded-lg shadow">
        <h3 className="font-bold text-2xl">Transações Recentes</h3>
        <table className="text-left w-full mt-4 border-collapse">
          <thead>
            <tr>
              <th className="p-2 text-base">Data</th>
              <th className="p-2 text-base">Descrição</th>
              <th className="p-2 text-base">Categoria</th>
              <th className="p-2 text-base">Valor</th>
              <th className="p-2 text-base">Status</th>
            </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-2 text-base">02/03/2026</td>
                <td className="p-2">Venda de Produtos</td>
                <td className="p-2">Vendas</td>
                <td className="p-2">R$ 12.500</td>
                <td className="p-2"><span className="bg-green-500 text-black font-semibold py-1 px-2 rounded">Concluida</span></td>
              </tr>
              <tr>
                <td className="p-2">01/03/2026</td>
                <td className="p-2">Serviços Marketing</td>
                <td className="p-2">Marketing</td>
                <td className="p-2">R$ 5.300</td>
                <td className="p-2"><span className="bg-yellow-300 text-black font-semibold py-1 px-2 rounded">Pendente</span></td>
              </tr>
              <tr>
                <td className="p-2">29/02/2026</td>
                <td className="p-2">Compra de Equipamentos</td>
                <td className="p-2">Operacional</td>
                <td className="p-2">R$ 8.000</td>
                <td className="p-2"><span className="bg-green-500 text-black font-semibold py-1 px-2 rounded">Concluida</span></td>
              </tr>
              <tr>
                <td className="p-2">28/02/2026</td>
                <td className="p-2">Assinatura de Software</td>
                <td className="p-2">RH</td>
                <td className="p-2">R$ 1.200</td>
                <td className="p-2"><span className="bg-red-500 text-black font-semibold py-1 px-2 rounded">Cancelada</span></td>
              </tr>
            </tbody>
          
        </table>
      </div>
    )
}