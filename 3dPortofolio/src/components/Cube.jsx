import React, { useMemo } from 'react'
import { useLoader } from '@react-three/fiber'
import { TextureLoader } from 'three'

const Cube = () => {
  const [texture1, texture2, texture3, texture4, texture5, texture6] = useMemo(() => {
    const loader = new TextureLoader()
    return [
      loader.load('../../public/img/gtaImage1.jpg'),
      loader.load('../../public/img/gtaImage5.png'),
      loader.load('../../public/img/gta1.jpg'),
      loader.load('../../public/img/gtaImage2.jpg'),
      loader.load('../../public/img/gtaImage4.jpg'),
      loader.load('../../public/img/gta1.jpg')
    ]
  }, [])

  const materials = useMemo(
    () => [texture1, texture2, texture3, texture4, texture5, texture6].map(map => ({ map })),
    [texture1, texture2, texture3, texture4, texture5, texture6]
  )

  return (
    <mesh>
      <boxGeometry args={[1, 1, 1]} />
      {materials.map((material, index) => (
        <meshBasicMaterial attachArray="material" key={index} {...material} />
      ))}
    </mesh>
  )
}

export default Cube
