import { NavLink } from "../atoms/NavLink";

export function SideBarOptions() {
    return (
        <div className="flex flex-col items-center gap-4">
            <NavLink href="/pages/dashboard" text="Dashboard" transition="all" pointerEvents="auto" hover="brightness-90" duration="200" />
            <NavLink href="/pages/transactions" text="Transações" transition="all" pointerEvents="auto" hover="brightness-90" duration="200" />
            <NavLink href="/pages/options" text="Configurações" transition="all" pointerEvents="auto" hover="brightness-90" duration="200" />
        </div>
    );
}