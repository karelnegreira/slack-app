import { UserButton } from "@/feature/auth/components/user-button"
import { WorkspacesSwitcher } from "./workspace-switcher"

 
 const Sidebar = () => {
   return (
     <aside className="w-[70px] h-full bg-[#481349] flex flex-col gap-y-4 items-center pt-[9px] pb-4">
        <WorkspacesSwitcher />
        <div className="flex flex-col items-center justify-center gap-y-1 mt-auto">
            <UserButton />
        </div>
     </aside>
   )
 }
 
 export default Sidebar