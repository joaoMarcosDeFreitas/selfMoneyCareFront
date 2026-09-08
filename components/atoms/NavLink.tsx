import Link from "next/link";

interface NavLinkProps {
    href: string;
    text: string;
    transition?: 'none' | 'all';
    pointerEvents?: 'auto' | 'none';
    hover?: 'brightness-90';
    duration?: '200' | '300' | '500';
}

export function NavLink({ href, text, transition, pointerEvents, hover, duration }: NavLinkProps) {
    return (
        <Link href={href} className={`text-[#778873] font-valley text-base font-normal cursor-pointer transition-${transition} pointer-events-${pointerEvents} hover:${hover} duration-${duration}}`}>
            {text}
        </Link>
    );
}