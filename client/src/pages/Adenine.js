import React, { Suspense, useRef, useState } from "react"
import { Link } from "react-router-dom"
import * as THREE from 'three'
import { GLTF } from 'three/examples/jsm/loaders/GLTFLoader'
import { Canvas } from "@react-three/fiber"
import { ContactShadows, Environment, useGLTF, OrbitControls, useAnimations } from "@react-three/drei"
import { proxy, useSnapshot } from "valtio"

const state = proxy({
  current: null,
})

function Model({ ...props }) {

  const group = useRef()
  const { nodes, materials } = useGLTF('/adenine/scene.gltf')
  const [hovered, set] = useState(null)
  console.log(hovered)
  return (
    <group ref={group} {...props} dispose={null}
      onPointerOver={(e) => (e.stopPropagation(), set(e.object.material.name))}
      onPointerOut={(e) => e.intersections.length === 0 && set(null)}
      onPointerMissed={() => (state.current = null)}
      onPointerDown={(e) => (e.stopPropagation(), (state.current = e.object.material.name))}
    >
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group position={[-2.9, -0.39, -2.68]}>
          <mesh geometry={nodes.mesh_0.geometry} material={nodes.mesh_0.material} />
          <mesh geometry={nodes.mesh_1.geometry} material={nodes.mesh_1.material} />
          <mesh geometry={nodes.mesh_2.geometry} material={nodes.mesh_2.material} />
          <mesh geometry={nodes.mesh_3.geometry} material={nodes.mesh_3.material} />
          <mesh geometry={nodes.mesh_4.geometry} material={nodes.mesh_4.material} />
          <mesh geometry={nodes.mesh_5.geometry} material={nodes.mesh_5.material} />
          <mesh geometry={nodes.mesh_6.geometry} material={nodes.mesh_6.material} />
          <mesh geometry={nodes.mesh_7.geometry} material={nodes.mesh_7.material} />
          <mesh geometry={nodes.mesh_8.geometry} material={nodes.mesh_8.material} />
          <mesh geometry={nodes.mesh_9.geometry} material={nodes.mesh_9.material} />
          <mesh geometry={nodes.mesh_10.geometry} material={nodes.mesh_10.material} />
          <mesh geometry={nodes.mesh_11.geometry} material={nodes.mesh_11.material} />
          <mesh geometry={nodes.mesh_12.geometry} material={nodes.mesh_12.material} />
          <mesh geometry={nodes.mesh_13.geometry} material={nodes.mesh_13.material} />
          <mesh geometry={nodes.mesh_14.geometry} material={nodes.mesh_14.material} />
          <mesh geometry={nodes.mesh_15.geometry} material={nodes.mesh_15.material} />
          <mesh geometry={nodes.mesh_16.geometry} material={nodes.mesh_16.material} />
          <mesh geometry={nodes.mesh_17.geometry} material={nodes.mesh_17.material} />
          <mesh geometry={nodes.mesh_18.geometry} material={nodes.mesh_18.material} />
          <mesh geometry={nodes.mesh_19.geometry} material={nodes.mesh_19.material} />
          <mesh geometry={nodes.mesh_20.geometry} material={nodes.mesh_20.material} />
          <mesh geometry={nodes.mesh_21.geometry} material={nodes.mesh_21.material} />
          <mesh geometry={nodes.mesh_22.geometry} material={nodes.mesh_22.material} />
          <mesh geometry={nodes.mesh_23.geometry} material={nodes.mesh_23.material} />
          <mesh geometry={nodes.mesh_24.geometry} material={nodes.mesh_24.material} />
          <mesh geometry={nodes.mesh_25.geometry} material={nodes.mesh_25.material} />
          <mesh geometry={nodes.mesh_26.geometry} material={nodes.mesh_26.material} />
          <mesh geometry={nodes.mesh_27.geometry} material={nodes.mesh_27.material} />
          <mesh geometry={nodes.mesh_28.geometry} material={nodes.mesh_28.material} />
        </group>
      </group>
    </group>
  )
}

function Details() {

  const snap = useSnapshot(state)
  if (snap.current === "k3050f8") {
    return (
      <div className="h-full md:flex md:flex-col md:justify-center">
        <h1 className="text-3xl uppercase">Nitrogen</h1>
      </div>
    )
  }
  else if (snap.current === "k909090") {
    return (
      <div className="h-full md:flex md:flex-col md:justify-center">
        <h1 className="text-3xl uppercase">Carbon</h1>
      </div>
    )
  }
  else if (snap.current === "kffffff") {
    return (
      <div className="h-full md:flex md:flex-col md:justify-center">
        <h1 className="text-3xl uppercase">Hydrogen</h1>
      </div>
    )
  }
  else {
    return (
      <div className="h-full md:flex md:flex-col md:justify-center">
        <h1 className="text-2xl tracking-wider">Click on diffrent parts of 3D model to know more</h1>
        <p className="self-center mx-8 text-xl tracking-wide text-justify">To view the 3D model in AR, scan the QR code or click on the button below.</p>

        <div className="grid justify-center grid-cols-1 gap-2 pb-8 mx-8 md:grid-cols-2 lg:grid-cols-2">
          <img className="flex p-6 text-6xl rounded-xl h-48 w-48" src="https://storage.echo3d.co/morning-hill-2019/4b3a1617-6b86-4f35-bcbb-b773cc7a86d6.png" alt="QR Code" />
          <a href="https://go.echo3d.co/kdXX" target="_blank" rel="noreferrer">
            <button className="h-12 px-8 ml-8 text-base font-semibold tracking-wider text-white border rounded-full shadow-sm mt-16 bg-red-50 bg-gradient-to-r from-purple-400 via-purple-500 to-pink-500  hover:shadow-lg">View in AR</button>
          </a>
        </div>
      </div>
    )
  }
}

export default function Adenine() {
  return (
    <>
      <div className="pt-8 text-white">

        <Link to="/explore" className="ml-8">Go Back</Link>

        <div className="grid w-full py-10 place-items-center">
          <h1 className="pb-2 text-5xl font-semibold tracking-wide font-carattere lg:text-6xl">
            Adenine
          </h1>
          <div className="inline-flex h-1 bg-secondary rounded-full w-72"></div>
          <div className="text-justify text-xl w-86 mt-2 mx-4 md:mx-44">Adenine (/'ædinin/) (symbol A or Ade) is a nucleobase (a purine derivative). It is one of the four nucleobases in the nucleic acid of DNA that are represented by the letters G-C-A-T. The three others are guanine, cytosine and thymine. Its derivatives have a variety of roles in biochemistry including cellular respiration, in the form of both the energy-rich adenosine triphosphate (ATP) and the cofactors nicotinamide adenine dinucleotide (NAD), flavin adenine dinucleotide (FAD) and Coenzyme A.</div>
        </div>

        <div className="md:grid md:grid-cols-3 md:pr-15 pr-1">

          <div className="w-full h-screen px-4 outline-none cursor-grab md:col-span-2 lg:block">
            <Canvas shadows dpr={[1, 2]} camera={{ position: [0, 0, 4], fov: 50 }}>
              <ambientLight intensity={0.7} />
              <spotLight intensity={0.5} angle={0.1} penumbra={1} position={[10, 15, 10]} castShadow />
              <Suspense fallback={null}>
                <Model scale={0.5} />
                <Environment preset="city" />
                <ContactShadows rotation-x={Math.PI / 2} position={[0, -0.8, 0]} opacity={0.25} width={10} height={10} blur={1.5} far={0.8} />
              </Suspense>
              <OrbitControls autoRotate />
            </Canvas>
          </div>

          <div className="mt-16 md:mt-0 md:col-span-1 p-4">
            <Details />
          </div>

        </div>

      </div>

    </>
  )
}
