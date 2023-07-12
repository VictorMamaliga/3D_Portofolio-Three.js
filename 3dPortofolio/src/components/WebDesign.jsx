import { Canvas } from '@react-three/fiber'
import React from 'react'
import { OrbitControls, Stage } from '@react-three/drei'
import { HeadMiky } from './HeadMiky'

const WebDesign = () => {
  return (
    <Canvas camera={{fov:45, position:[2,2,5]} }>
        <Stage environment="city" intensity={0.8}>
            <HeadMiky />
        </Stage>
        <OrbitControls enableZoom={false} autoRotate={true}/>
    </Canvas>
  )
}

export default WebDesign