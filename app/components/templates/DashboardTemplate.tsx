import { DashboardBlock } from "../molecules/DashboardBlock"
import { formatNumber } from "@/app/utils/formatNumber"
import { Text } from "../atoms/Text";

export function DashboardTemplate() {
    const valorRecebido = 1232131
    const valorGasto = 50000;
    const total = valorRecebido - valorGasto;

    const nomeReceita = "Salário"
    const desricaoReceita = "Salário do mês de setembro."
    const valorReceita = 6000
    const dataReceita = "05/10/2026"
    const origemReceita = "sedur"
    const categoriaReceita = "Salário"

    const nomeDespesa = "Gasolina"
    const desricaoDespesa = "Gasolina do carro"
    const valorDespesa = 100
    const dataDespesa = "02/10/2026"
    const origemDespesa = "Posto Ipiranga"
    const categoriaDespesa = "Transporte"

    return(
        <div className="flex flex-col justify-center border-5 border-[#769826] rounded-[20px] mr-10 ml-10 mt-10 max-h-[calc(100vh-40px)] bg-[#8B9A6E] pl-20 pr-20 pt-10">
            <div className="flex flex-col w-full justify-start gap-15 border-b pb-5">
                <Text text="Total de Dinheiro Movimentado" color="#B1E5E6" fontSize="25px" fontWeight="bold" textCase="uppercase" hover="hidden"/>
                <div className="flex justify-between items-center ">
                    <DashboardBlock value={formatNumber(valorRecebido)} fontSize="30px" typeOfData="Valor Recebido"/>
                    <DashboardBlock value={formatNumber(valorGasto)} fontSize="30px" typeOfData="Valor Gasto"/>
                    <DashboardBlock value={formatNumber(total)} fontSize="30px" typeOfData="Total"/>
                </div>
            </div>
            <div className="flex flex-col w-full justify-start gap-15 pt-5 border-b pb-5">
                <Text text="Receitas" color="#B1E5E6" fontSize="25px" textCase="uppercase" fontWeight="bold" hover="hidden"/>
                <div className="flex justify-center gap-10 items-center ">
                    <DashboardBlock value={nomeReceita} fontSize="25px" typeOfData="Nome"/>
                    <DashboardBlock value={desricaoReceita} fontSize="25px" typeOfData="Descrição"/>
                    <DashboardBlock value={formatNumber(valorReceita)} fontSize="25px" typeOfData="Valor"/>
                    <DashboardBlock value={dataReceita} fontSize="25px" typeOfData="Data"/>
                    <DashboardBlock value={origemReceita} fontSize="25px" typeOfData="Origem"/>
                    <DashboardBlock value={categoriaReceita} fontSize="25px" typeOfData="Categoria"/>
                </div>
            </div>
            <div className="flex flex-col w-full justify-start gap-15 pt-5 pb-10">
                <Text text="Despesa Mais Recente" color="#B1E5E6" fontSize="25px" textCase="uppercase" fontWeight="bold" hover="hidden"/>
                <div className="flex justify-center gap-10 items-center ">
                    <DashboardBlock value={nomeDespesa} fontSize="25px" typeOfData="Nome"/>
                    <DashboardBlock value={desricaoDespesa} fontSize="25px" typeOfData="Descrição"/>
                    <DashboardBlock value={formatNumber(valorDespesa)} fontSize="25px" typeOfData="Valor"/>
                    <DashboardBlock value={dataDespesa} fontSize="25px" typeOfData="Data"/>
                    <DashboardBlock value={origemDespesa} fontSize="25px" typeOfData="Origem"/>
                    <DashboardBlock value={categoriaDespesa} fontSize="25px" typeOfData="Categoria"/>
                </div>
            </div>
        </div>
    )
}