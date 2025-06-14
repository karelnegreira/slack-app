

interface HeaderProps {
    channelName: string, 
}

const Header = ( { channelName } : HeaderProps) => {
  return (
    <div className="bg-white border-b h-[49px] flex items-center px-4 overflow-hidden ">
       Header: {channelName}
    </div>
  )
}

export default Header
