import { DashboardBlock } from "../molecules/DashboardBlock"

export function DashboardRow() {
    const valorRecebido = 100;
    const valorGasto = 80;
    const total = valorRecebido - valorGasto;

    return(
        <div className="flex gap-2 justify-between p-10">
            <DashboardBlock value={valorRecebido} typeOfData="Dinheiro Recebido"/>
            <DashboardBlock value={valorGasto} typeOfData="Dinheiro Gasto"/>
            <DashboardBlock value={total} typeOfData="Total"/>
        </div>
    )
}