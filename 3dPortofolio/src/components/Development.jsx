import React from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Stage } from '@react-three/drei'
import { Head } from './Head'

const Development = () => {
    return (
        <Canvas camera={{ fov: 45, position: [2, 2, 5] }}>
            <Stage environment="city" intensity={0.8}>
                <Head  />
            </Stage>
            <OrbitControls enableZoom={false}  autoRotate={true}/>
        </Canvas>
    )
}

export default Development