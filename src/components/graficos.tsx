import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, BarChart, Bar, CartesianGrid } from "recharts";

export default function Graficos() {
    const receitaMensal = [
    { mes: "Jan", receita: 12000 },
    { mes: "Fev", receita: 18000 },
    { mes: "Mar", receita: 15000 },
    { mes: "Abr", receita: 22000 },
    { mes: "Mai", receita: 17000 },
    { mes: "Jun", receita: 25000 }, 
];

const despesasCategoria = [
    { categoria: "Marketing", valor: 5300 },
    { categoria: "Operacional", valor: 6000 },
    { categoria: "Fixa", valor: 20400 }
];

    return (
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-6 ">
            <article className="bg-gray-200 p-4 rounded-xl shadow">
                <h2 className="p-2 rounded-xl text-2xl font-bold text-gray-900">Receita Mensal</h2>
                <div className="w-full h-64">
                    <ResponsiveContainer  width="100%" height={250}>
                        <LineChart data={receitaMensal} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                            <XAxis dataKey="mes" />
                            <YAxis />
                            <Tooltip />
                            <Line type="monotone" dataKey="receita" stroke="#3b82f6" activeDot={{ r: 5 }} />
                            <CartesianGrid stroke="gray" strokeDasharray="5 5" />
                        </LineChart>
                    </ResponsiveContainer>
                    
                </div>
            </article>
            <article className="bg-gray-200 p-4 rounded-xl shadow">
                <h2 className="p-2 rounded-xl text-2xl font-bold text-gray-900"> Despesas por Categoria</h2>
                <div className="w-full h-64">
                    <ResponsiveContainer width="100%" height={250}>
                        <BarChart data={despesasCategoria} margin={{ top: 20, right: 30, left: 15, bottom: 5 }} barCategoryGap={10} >
                            <XAxis dataKey="categoria" />
                            <YAxis />
                            <Tooltip cursor={false}/>
                            <Bar dataKey="valor" fill="#3b82f6" barSize={40} />
                            <CartesianGrid stroke="gray" strokeDasharray="5 5" />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </article>
        </section>
    )
}