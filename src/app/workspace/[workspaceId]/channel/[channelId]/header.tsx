

interface HeaderProps {
    channelName: string, 
}

const Header = ( { channelName } : HeaderProps) => {
  return (
    <div>
       Header: {channelName}
    </div>
  )
}

export default Header
