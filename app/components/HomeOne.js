'use client'
import {React, useEffect } from 'react'
import Link from 'next/link'
import {signInGoogle} from '../lib/firebase/auth/signInGoogle'
import { useAuth } from '../lib/context/AuthContext';
import { fb_auth } from '../lib/firebase/config';


const LoginDataShow = () => {
  const { user, loading } = useAuth();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!user) {
    return <div>User not authenticated</div>;
  }

  return (
    <div>
      <h1>Profile</h1>
      <p>Name: {user.displayName}</p>
      <p>Email: {user.email}</p>
    </div>
  );
};
const signOut = () => {
  fb_auth.signOut();
};

const HomeOne = () => {

  //const { user, loading } = useAuth();
 // const userName = user!=null? (user.displayName) : 'null';
  //const userEmail = user!= null? (user.email): 'null';   <p>Name: {userName}</p>    <p>Email: {userEmail}</p>

  return (
    <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
            <img src="https://images.squarespace-cdn.com/content/v1/5fe4caeadae61a2f19719512/5511469c-8e21-484d-9239-de6dbf70d2c2/Epic+Duel+Rover+WuWa" className="max-w-sm rounded-lg shadow-2xl" />
            <div>
            <h1 className="text-5xl font-bold">Hi, I'm Der Wunder</h1>
            <h2 className="text-xl">A Software Developer,  dedicated and technically proficient individual with a passion for solving complex computer-relate challenge.</h2>
            <LoginDataShow/>
            <button className="btn btn-primary" onClick={signInGoogle}>Google login</button>
            <button className='btn btn-secondary' onClick={signOut}>Logout</button>
            </div>
        </div>
    </div>
  )
}

export default HomeOne