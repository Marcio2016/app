import { cn } from '@/helper/cn';
import Image from 'next/image'

import { FaceHappyIcon, GamepadIcon, HomeIcon, PrizeIcon, RouteIcon } from "../../components";
import { NavbarList } from './NavbarList';
import { NavbarListLink } from './NavbarListItemLink';

type NavbarProps = React.ComponentProps<"nav">;

export const Navbar = ({ className, ...props }: NavbarProps) => {
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