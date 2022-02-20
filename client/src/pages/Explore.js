import React from 'react'
import { Link } from "react-router-dom"
import AdenineImg from "../assets/adenine.jpeg"
import BenzeneImg from "../assets/benzene.jpeg"
import DiamondImg from "../assets/diamond.jpeg"
import ThymineImg from "../assets/thymine.jpg"
import UracilImg from "../assets/uracil.jpeg"

export default function Explore() {
  return (
    <div className="">

      <div className="grid w-full py-10 place-items-center">
        <h1 className="pb-2 text-5xl text-white font-semibold tracking-wide">
          Choose Topic
        </h1>
        <div className="inline-flex h-1 bg-pink-500 rounded-full w-56"></div>
      </div>

      <div className="flex flex-wrap flex-col-2 justify-around w-full px-16 py-8">
        <Link to='/adenine'>
          <div className="m-8">
            <div className="w-72 h-72 cursor-pointer transition duration-500 transform hover:scale-105">
              <img className="pb-8 border-4 bg-primary border-secondary rounded-lg" alt="" src={AdenineImg} />
              <div className="grid place-items-center mx-1 -mt-8 text-xl font-semibold text-white bg-homeImg font-sourceSerifPro">Adenine</div>
            </div>
          </div>
        </Link>

        <Link to='/benzene'>
          <div className="m-8">
            <div className="w-96 h-72 cursor-pointer transition duration-500 transform hover:scale-105">
              <img className="pb-8 border-4 bg-primary border-secondary rounded-lg" alt="" src={BenzeneImg} />
              <div className="grid place-items-center mx-1 -mt-8 text-xl font-semibold text-white bg-homeImg font-sourceSerifPro">Benzene</div>
            </div>
          </div>
        </Link>

        <Link to='/diamond'>
          <div className="m-8">
            <div className="w-80 h-72 cursor-pointer transition duration-500 transform hover:scale-105">
              <img className="pb-8 border-4 bg-primary border-secondary rounded-lg" alt="" src={DiamondImg} />
              <div className="grid place-items-center mx-1 -mt-8 text-xl font-semibold text-white bg-homeImg font-sourceSerifPro">Diamond</div>
            </div>
          </div>
        </Link>

        <Link to='/thymine'>
          <div className="m-8">
            <div className="w-80 h-72 cursor-pointer transition duration-500 transform hover:scale-105">
              <img className="pb-8 border-4 bg-primary border-secondary rounded-lg" alt="" src={ThymineImg} />
              <div className="grid place-items-center mx-1 -mt-8 text-xl font-semibold text-white bg-homeImg font-sourceSerifPro">Thymine</div>
            </div>
          </div>
        </Link>

        <Link to='/uracil'>
          <div className="m-8">
            <div className="w-80 h-72 cursor-pointer transition duration-500 transform hover:scale-105">
              <img className="pb-8 border-4 bg-primary border-secondary rounded-lg" alt="" src={UracilImg} />
              <div className="grid place-items-center mx-1 -mt-8 text-xl font-semibold text-white bg-homeImg font-sourceSerifPro">Uracil</div>
            </div>
          </div>
        </Link>

        <div className="m-8">
          <div className="w-72 h-72 cursor-pointer transition duration-500 transform hover:scale-105 border-4 border-secondary rounded-lg bg-primary">
            <div className="grid place-content-center text-3xl text-center items-center align-middle h-full font-semibold text-white bg-homeImg font-sourceSerifPro">More topics comming soon..</div>
          </div>
        </div>

      </div>
    </div >
  )
}