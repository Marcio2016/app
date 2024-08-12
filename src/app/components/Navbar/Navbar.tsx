import Image from 'next/image'
import { HomeIcon, GamepadIcon, PrizeIcon, RouteIcon, FaceHappyIcon } from "../../components";
import { cn } from '@/helper/cn';
import Link from 'next/link';


type NavbarProps = React.ComponentProps<"nav">;
type NavbarListProps = React.ComponentProps<"ul">;
type NavbarItemListProps = React.ComponentProps<"li">;
type NavbarItemLinkProps = React.ComponentProps<typeof Link>;

const NavbarList = ({ children, className, ...props }: NavbarListProps) => {
  return (
    <ul className={cn("my-4 border-t border-indigo-400/20 hover:border-indigo-400/40", className)}>
      {children}
    </ul>
  );
};

const NavbarListItem = ({children, className, ...props}: NavbarItemListProps) => {
  return (
    <li className={cn("my-2 rounded-lg bg-transparent p-2 hover:bg-indigo-800/40 hover:text-slate-100 cursor-pointer flex gap-2 items-center", className)}>
      {children}
     </li>
  );
}
const NavbarListLink = ({href, children, className, ...props}: NavbarItemLinkProps) => {
  return (
    <NavbarListItem className={cn("p-0", className)}>
      <Link href={href}
        className='flex gap-2 items-center rounded-lg p-2 w-full' {...props}>
        {children}
      </Link>
    </NavbarListItem>
    
  );
}


export const Navbar = ({className,...props }: NavbarProps) => {
    return (
      <nav className={cn("flex flex-col bg-slate-900 border-r border-indigo-400/20 hover:border-indigo-400/40 w-72 p-2  h-screen text-slate-300", className)}>
          <div className='flex items-center justify-center'>
            <Image
              src="/hunter-logo.png"
              width={120}
              height={120}
              alt="Logo"
            className="rounded-full p-2"/>
          </div>
          <NavbarList className={"flex-grow"}>
            <NavbarListLink href={'/'}>
              <HomeIcon className='w-4 h-4'/>Home
            </NavbarListLink>              
            
            <NavbarListLink href={'/games'}>
              <GamepadIcon className='w-4 h-4'/>  Games
            </NavbarListLink>
            
            <NavbarListLink href={'/top-10'}>
              <PrizeIcon className='w-4 h-4' />   Top 10
            </NavbarListLink>
            
            <NavbarListLink href={'/walkthroughs'}>
              <RouteIcon className='w-4 h-4' /> Walkthroughs
            </NavbarListLink>            
          </NavbarList>
          
          <NavbarList>            
            <NavbarListLink href={'/user'}>
              <FaceHappyIcon className='w-4 h-4' />  User
            </NavbarListLink>            
          </NavbarList>
        </nav> 
    );
}