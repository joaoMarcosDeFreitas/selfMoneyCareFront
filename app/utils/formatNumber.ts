export function formatNumber(number: number) {
    if(number >= 1000000000) {
        return new Intl.NumberFormat('pt-BR', {
            style: "currency",
            currency: "BRL",
            maximumFractionDigits: 4,
            notation: "compact",
            compactDisplay: "short"
        }).format(number); 
    }

    return new Intl.NumberFormat('pt-BR', {
        style: "currency",
        currency: "BRL",
        maximumFractionDigits: 4,
    }).format(number); 
}