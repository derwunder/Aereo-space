'use client'
import {React, useEffect } from 'react'
import Link from 'next/link'
import {signInGoogle} from '../lib/firebase/auth/signInGoogle'
import { useAuth } from '../lib/context/AuthContext';
import { fb_auth } from '../lib/firebase/config';
import  Itemcard from './ItemCard'
import AddCar from './AddCard'
import AddCard from './AddCard';



const HomePG = () => {

  //const { user, loading } = useAuth();
 // const userName = user!=null? (user.displayName) : 'null';
  //const userEmail = user!= null? (user.email): 'null';   <p>Name: {userName}</p>    <p>Email: {userEmail}</p>

  return (
    <div className='container mx-auto flex flex-wrap gap-1.5'>
      <AddCard/>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-1.5 ">
        <Itemcard key="1" title="Item 1" description="Item 1 description" />
          <Itemcard key="2" title="Item 2" description="Item 2 description" />
          <Itemcard key="3" title="Item 3" description="Item 3 description" />
          <Itemcard key="4" title="Item 4" description="Item 4 description" />
          <Itemcard key="5" title="Item 5" description="Item 5 description" />
          <Itemcard key="6" title="Item 6" description="Item 6 description" />
          <Itemcard key="7" title="Item 7" description="Item 7 description" />
      </div>
    </div>
  )
}

export default HomePG