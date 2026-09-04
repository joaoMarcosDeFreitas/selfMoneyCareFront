//define as propriedades do componente Text, incluindo texto, cor, tamanho da fonte e peso da fonte.
interface TextProps {
    text: string;
    color?: string; 
    fontSize?: 'sm' | 'md' | 'lg' | 'xl';
    fontWeight?: 'normal' | 'bold' | 'semibold' | 'extrabold';
    cursor?: 'pointer' | 'default';
    transition?: 'none' | 'all';
    pointerEvents?: 'auto' | 'none';
    hover?: 'brightness-90';
    duration?: '200' | '300' | '500';
}

//define um objeto que mapeia os tamanhos de fonte para suas classes correspondentes do Tailwind CSS.
const fontSizeClasses = {
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-lg',
    xl: 'text-xl',
};

//define um objeto que mapeia os pesos de fonte para suas classes correspondentes do Tailwind CSS.
const fontWeightClasses = {
    normal: 'font-normal',
    bold: 'font-bold',
    semibold: 'font-semibold',
    extrabold: 'font-extrabold',
};

//atomo de texto, utilizado para exibir texto em diferentes partes da aplicação
export function Text({text, color = 'black', fontSize = 'md', fontWeight = 'normal', cursor = 'default', transition = 'none', pointerEvents = 'auto', duration = '200', hover = 'brightness-90'}: TextProps) {
    return(
        <p 
            className={`text-${fontSizeClasses[fontSize]} font-${fontWeightClasses[fontWeight]} font-valley cursor-${cursor} transition-${transition} pointer-events-${pointerEvents} duration-${duration} hover:${hover}`}
            style = {{color: color}}>
                {text}
            </p>
    );
}