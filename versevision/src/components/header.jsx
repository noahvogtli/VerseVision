import React from "react";
import logo from '../assets/NormalLogo.png';
import Sidebar from "./sidebar";
import { Link } from 'react-router-dom'
import VerseOfTheDay from "./verseOfTheDay";
import { useLocation } from "react-router-dom";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useAuth } from '../context/AuthContext';


function Header(props) {
  const location = useLocation();
  const browser = location.pathname;
  const {session, signOut} = useAuth();

  let firstname = props.name.split(' ')[0] || '';
  let lastname = props.name.split(' ')[1] || '';

  return (
    <>    
      <div className="flex flex-col">
        <header className="grid grid-cols-3 p-2 md:p-2 border-b border-gray-200 align-center h-18 md:h-20 fixed w-full bg-white">
          <div className="flex items-center pl-4" >
            <Sidebar />
          </div>
          <Link to="/">
          <div className={`flex justify-center items-center ${browser === '/chat' ? 'block' : 'invisible'}`}>
            <img src={logo} alt="VerseVision Logo" className="w-15 md:w-18" />
            </div>
          </Link>
          <div className="flex items-center justify-end pr-4 md:pr-10">
            {session ? (
                <DropdownMenu modal={false}>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon" className="rounded-full">
                      <Avatar size="lg" className="cursor-pointer">
                        <AvatarFallback className="text-black bg-white">{firstname.charAt(0)}{lastname.charAt(0)}</AvatarFallback>
                      </Avatar>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-48" align="end">
                    <DropdownMenuGroup>
                      <DropdownMenuItem>Profile</DropdownMenuItem>
                    <Link to="/settings"><DropdownMenuItem className="hover:cursor-pointer">Settings</DropdownMenuItem></Link>
                    </DropdownMenuGroup>
                    <DropdownMenuSeparator />
                    <DropdownMenuGroup>
                      <DropdownMenuItem variant="destructive" onClick={signOut} className="cursor-pointer hover:bg-gray-500/10">Log Out</DropdownMenuItem>
                    </DropdownMenuGroup>
                  </DropdownMenuContent>
                </DropdownMenu>
            ) : (
                <Link to="/login">
                  <Button variant="outline" size="sm">
                    Log in
                  </Button>
                </Link>
            )
            }
          </div>
        </header>
      </div>
      <div className="mt-15 md:mt-20">
        <div className={browser === '/' ? 'block' : 'hidden'}>        
          <VerseOfTheDay/>
        </div>
      </div>
    </>
  );
}

export default Header;
