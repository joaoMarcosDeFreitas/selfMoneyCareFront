import { Text } from "../atoms/Text";


interface DashboardBlockProps {
    value: number,
    typeOfData: string
}

export function DashboardBlock({ value, typeOfData }: DashboardBlockProps) {
    return(
        <div className="flex flex-col items-center gap-0.5">
            <Text text={value.toString()}/>
            <Text text={typeOfData}/>
        </div>
    );
}