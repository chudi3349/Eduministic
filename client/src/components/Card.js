import React from "react";
import Home from "../assets/home.svg"


export default function Card() {
    return (
      <div>
      <div className="lg:flex">
      <div className=" mx-px max-w-lg rounded overflow-hidden shadow-lg mt-8">
        <h1 className="ml-200px text-2xl font-bold bg-right-top">
          Lorem ipsum dolor sit amet, in eos esse nostrud reformidans
        </h1>
        <p>
          Lorem ipsum dolor sit amet, in eos esse nostrud reformidans, elitr iriure aliquando no 
          pro, salutandi scribentur ad mei. Duo euismod vivendum ex, ius id tritani lobortis. 
          Minim quodsi dolorum quo ne, quem veniam meliore at sed. 
        </p>
      </div>
        <div className="object-right">
          <img src={Home}>
          </img>
        </div>

      </div>
      <div className="lg:row object-center">
          <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>Get Started</button>
      </div>
      </div>
    );
}