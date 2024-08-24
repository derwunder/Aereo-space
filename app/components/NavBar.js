'use client'
import  { useEffect, useState, React } from 'react'
import Link from 'next/link'
import { useAuth } from '../lib/context/AuthContext';


const NavBar = () => {
  const { user, loading } = useAuth();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null; // Avoid rendering until component is mounted
  }
  return (
    <div className="navbar  bg-neutral">
        <div className="flex-1">
            <Link href="/" className="btn btn-ghost text-xl">Der Wunder Nunez</Link>
        </div>
        <div className="flex-none">
            <ul className="menu menu-horizontal px-1">
            <li><Link href="/about">About</Link></li>
            </ul>
        </div>
    </div>
  )
}

export default NavBar