import { Text } from "../atoms/Text";

interface DashboardBlockProps {
    value: string,
    fontSize?: string,
    typeOfData: string
}

export function DashboardBlock({ value, typeOfData, fontSize = "20px" }: DashboardBlockProps) {
    return(
        <div className="flex flex-col items-center gap-0.5">
            <Text text={value.toString()} color="#FFEF91" fontSize={fontSize} fontWeight="bold" hover="hidden" cursor="default"/>
            <Text text={typeOfData} color="#E4DFB5" fontSize="25px" hover="hidden" cursor="default"/>
        </div>
    );
}