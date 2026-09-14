import Image from "next/image";

export function Logo({ src, alt, width, height }: { src: string; alt: string; width: number; height: number }) {
    return (
        <Image src={src} alt={alt} width={width} height={height} />
    );
}