'use client'
import  { useEffect, useState, React } from 'react'
import Link from 'next/link'
import { useAuth } from '../lib/context/AuthContext';
import {signInGoogle, signOut} from '../lib/firebase/auth/signInGoogle'



const NavBar = () => {
  const { user, loading } = useAuth();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null; // Avoid rendering until component is mounted
  }else{

    if(user){
      console.log("User Photo URL:", user.photoURL); // Log the photo URL to the console
    } else{ console.log("No user is logged in.");}

  return (
    <div className="navbar  bg-neutral">
        <div className="flex-1">
            <Link href="/" className="btn btn-ghost text-xl">Aero Space</Link>
        </div>
        <div className="flex-none">
            <ul className="menu menu-horizontal px-1">
            <li><Link href="/about">About</Link></li>
            </ul>
        </div>

        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img
                alt="User photo"
                src={!user? 'User':user.photoURL} />
            </div>
          </div>
          {!user
            ?
            <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
             <li><a onClick={signInGoogle}>Login</a></li>
             <li><a className="justify-between">Theme</a></li>
             </ul> 
            :
            <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
             <li><a >{user.displayName}</a></li>
             <li><a className="justify-between">Theme</a></li>
             <li><a onClick={signOut} className="justify-between">Logout</a></li>
             </ul> 
          }
          
        </div>

    </div>
  )
}
}

export default NavBar