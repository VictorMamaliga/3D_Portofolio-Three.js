import React from 'react'
import { useLoader } from '@react-three/fiber'
import { TextureLoader, RepeatWrapping } from 'three'
// import { Mesh } from '@react-three/drei'

const Cube = () => {
  const texture1 = useLoader(TextureLoader, '../../public/img/gutaMoon.png')
  const texture2 = useLoader(TextureLoader, '../../public/img/gutaMoon.png')
  const texture3 = useLoader(TextureLoader, '../../public/img/gutaMoon.png')
  const texture4 = useLoader(TextureLoader, '../../public/img/gutaMoon.png')
  const texture5 = useLoader(TextureLoader, '../../public/img/gutaMoon.png')
  const texture6 = useLoader(TextureLoader, '../../public/img/gutaMoon.png')

  const materials = [
    texture1,
    texture2,
    texture3,
    texture4,
    texture5,
    texture6
  ].map(texture => {
    texture.wrapS = RepeatWrapping
    texture.wrapT = RepeatWrapping
    return { map: texture }
  })

  return (
    <mesh>
      <boxGeometry args={[1, 1, 1]} />
      {materials.map((material, index) => (
        <meshStandardMaterial attachArray="material" key={index} {...material} />
      ))}
    </mesh>
  )
}

export default Cube