import { UserButton } from "@/feature/auth/components/user-button"

 
 const Sidebar = () => {
   return (
     <aside className="w-[70px] h-full bg-[#481349] flex flex-col gap-y-4 items-center pt-[9px] pb-4">
        <div>A</div>
        <div className="flex flex-col items-center justify-center gap-y-1 mt-auto">
            <UserButton />
        </div>
     </aside>
   )
 }
 
 export default Sidebar