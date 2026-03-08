import { ArrowDownRight, ArrowUpRight } from "lucide-react"

export default function CardKpi (props : {title: string, value: string, percentage: string, trend:"up" | "down"}) { 
    return(
        <div className={`flex flex-col gap-2 bg-gray-300 rounded-xl p-4 border shadow-xl`}>
            <div className="font-bold text-xl">{props.title}</div>
            <div className="font-bold text-2xl">{props.value}</div>
            <div className={`font-bold text-lg flex items-center gap-1 ${props.trend === "up" ? "text-green-700" : "text-red-500"}`}>
                {props.trend === "up" ? <ArrowUpRight /> : <ArrowDownRight />}
                {props.percentage}
            </div>
        </div>
    )
}