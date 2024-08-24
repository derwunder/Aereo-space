import React from 'react'
import Link from 'next/link'

const AboutOne = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
        <div className="hero-content text-center">
            <div className="max-w-7xl">
            <h1 className="text-5xl font-bold">Custom Build & Component Install</h1>
            <p className="py-6">Providen</p>
            <div className="carousel w-full">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src="https://images.squarespace-cdn.com/content/v1/5fe4caeadae61a2f19719512/5511469c-8e21-484d-9239-de6dbf70d2c2/Epic+Duel+Rover+WuWa" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide4" className="btn btn-circle">❮</a> 
                    <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div> 
                <div id="slide2" className="carousel-item relative w-full">
                    <img src="https://images.squarespace-cdn.com/content/v1/5fe4caeadae61a2f19719512/5511469c-8e21-484d-9239-de6dbf70d2c2/Epic+Duel+Rover+WuWa" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle">❮</a> 
                    <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div> 
            </div>
            <button className="btn btn-primary">Log out</button>
            </div>
        </div>
    </div>
  )
}

export default AboutOne