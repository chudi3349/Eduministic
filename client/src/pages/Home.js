import React from "react";
import HomeImg from "../assets/home.svg"
import { Link } from "react-router-dom"

export default function Home() {
  return (
    <div className='md:mx-28 mx-4 text-white pt-10 pb-12'>
      <div className='md:grid md:grid-cols-2 items-center pt-10'>
        <div className=''>
          <h1 className='text-3xl md:text-6xl'>Eduministic</h1>
          <p className='text-xl md:text-2xl py-4 tracking-wider text-justify'>Eduministic is adopting a different approach to bringing chemistry home by simplifying the details that seemed difficult for many to understand using 3D models, and augmented reality of different topics.</p>

          <Link to="/explore">
            <button className='bg-secondary py-2 px-8 rounded-md text-xl md:text-2xl'>Explore</button>
          </Link>

        </div>
        <div className="grid place-items-center py-4 drop-shadow-3xl shadow-black">
          <img src={HomeImg} alt="img" width="600" height="600" />
        </div>
      </div>
    </div >
  );
}
