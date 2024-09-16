import { Button } from "@/components/ui/button"


const Toolbar = () => {
  return (
    <nav className="bg-[#481349] flex items-center justify-between h-10 p-1.5">
        <div className="flex-1"/>
        <div className="min-w-[280px] max-[642px] grow-[2] shrink">
            <Button size="sm" className="bg-accent/25 hover:bg-accent-25 w-full justify-start px-2">
                
            </Button>
        </div>
        Toolbar
    </nav>
  )
}

export default Toolbar