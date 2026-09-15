//define as propriedades do componente Text, incluindo texto, cor, tamanho da fonte e peso da fonte.
interface TextProps {
    text: string;
    color?: string; 
    fontSize?: string;
    fontWeight?: string;
    decoration?: string,
    textCase?: 'normal-case' | 'uppercase' | 'lowercase', 
    cursor?: 'pointer' | 'default';
    transition?: 'none' | 'all';
    pointerEvents?: 'auto' | 'none';
    hover?: 'brightness-90' | 'hidden';
    duration?: '200' | '300' | '500';
}

//atomo de texto, utilizado para exibir texto em diferentes partes da aplicação
export function Text({text, color = 'black', fontSize = '20px', fontWeight = 'normal', decoration = 'none', textCase = "normal-case", cursor = 'default', transition = 'none', pointerEvents = 'auto', duration = '200', hover = 'brightness-90'}: TextProps) {
    return(
        <p 
            className={`font-valley cursor-${cursor} transition-${transition} pointer-events-${pointerEvents} duration-${duration} hover:${hover} ${textCase}`}
            style = {{color: color, fontSize: fontSize, fontWeight: fontWeight, textDecoration: decoration}}>
                {text}
            </p>
    );
}