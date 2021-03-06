/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
author: luardimensi (https://sketchfab.com/luardimensi)
license: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
source: https://sketchfab.com/3d-models/diamond-structure-ba09212da83a452d97f73a8eac600286
title: Diamond structure
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model({ ...props }) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/scene.gltf')
  return (
    <group ref={group} {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <mesh geometry={nodes.diamond_diamond_0.geometry} material={materials.diamond} />
          <mesh geometry={nodes.ThinRing1_ThinRing1_0.geometry} material={materials.ThinRing1} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/scene.gltf')
