import { Text } from "../atoms/Text";


interface DashboardBlockProps {
    value: number,
    typeOfData: string
}

export function DashboardBlock({ value, typeOfData }: DashboardBlockProps) {
    return(
        <div className="">
            <Text text=""></Text>
            <Text text=""></Text>
        </div>
    );
}