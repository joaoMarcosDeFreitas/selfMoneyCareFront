//define as propriedades do componente Button, incluindo texto, função de clique, cor, tamanho da fonte, peso da fonte, cor de fundo e raio da borda.
interface ButtonProps {
    text: string;
    onClick: () => void;
    color?: string;
    fontSize?: 'sm' | 'md' | 'lg' | 'xl';
    fontWeight?: 'normal' | 'bold' | 'semibold' | 'extrabold';
    backgroundColor?: string;
    borderRadius?: 'sm' | 'md' | 'lg' | 'xl';
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

//define um objeto que mapeia os raios de borda para suas classes correspondentes do Tailwind CSS.
const borderRadiusClasses = {
    sm: 'rounded-sm',
    md: 'rounded-md',
    lg: 'rounded-lg',
    xl: 'rounded-xl',
};

//atomo de botão, utilizado para exibir botões em diferentes partes da aplicação
export function Button({text, onClick, color = 'black', fontSize = 'md', fontWeight = 'normal', backgroundColor = 'gray', borderRadius = 'md'}: ButtonProps) {
    return(
        <button 
            onClick={onClick} 
            className={`p-2 ${fontSizeClasses[fontSize]} ${fontWeightClasses[fontWeight]} ${borderRadiusClasses[borderRadius]} cursor-pointer font-valley`}
            style={{color: color, backgroundColor: backgroundColor}}>
                {text}
        </button>
    );
}