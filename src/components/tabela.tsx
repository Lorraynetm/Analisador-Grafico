export default function Tabela() {
    return (
      <section className="bg-gray-200 p-4 rounded-lg shadow">
        <table className="text-left w-full  border-collapse">
          <caption className="font-bold pb-4 text-left text-2xl">Transações Recentes</caption>
          <thead>
            <tr>
              <th scope="col" className="p-2">Data</th>
              <th scope="col" className="p-2">Descrição</th>
              <th scope="col" className="p-2">Categoria</th>
              <th scope="col" className="p-2">Valor</th>
              <th scope="col" className="p-2">Status</th>
            </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-2">02/03/2026</td>
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
              <tr>
                <td className="p-2">29/02/2026</td>
                <td className="p-2">Pagamento dos Funcionarios</td>
                <td className="p-2">Fixa</td>
                <td className="p-2">R$ 20.400</td>
                <td className="p-2"><span className="bg-green-500 text-black font-semibold py-1 px-2 rounded">Concluida</span></td>
              </tr>
            </tbody>
          
        </table>
      </section>
    )
}