import { SideBarOptions } from "../molecules/SideBarOptions";
import { Logo } from "../atoms/Logo";

export function NavBar() {
    return (
        <div className="flex flex-col items-center gap-10 w-1/5 min-w-1/5 shrink-0 h-screen bg-[#B1D3B9] p-8">
            <Logo src="/images/logo_self_money_care2.png" alt="Logo" width={300} height={300}/>
            <SideBarOptions />
        </div>
    );
}