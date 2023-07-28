import React from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Stage } from '@react-three/drei'
import { Head } from './Head'
import { styled } from 'styled-components';

const Desc = styled.div`
width:200px;
height:40px;
padding:20px;
background-color:white;
border-radius:10px;
position:absolute;
top:100px;
right:100px;
@media only screen and (max-width: 768px) {
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
  }
`;

const Development = () => {
    return (
        <>
          <Canvas camera={{ fov: 45, position: [2, 2, 5] }}>
            <Stage environment="city" intensity={1.5}>
              <Head />
            </Stage>
            <OrbitControls enableZoom={false} autoRotate={true} />
          </Canvas>
          <Desc>Producator de manele intergalactice numero uno pe tooate planetele din univers .</Desc>
        </>
      )
    }

export default Development