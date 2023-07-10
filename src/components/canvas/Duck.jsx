import { Suspense, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';
import CanvasLoader from '../Loader';


const Duck = ({ isMobile }) => {

  const duck_scene = useGLTF('./concerto/scene.gltf')

  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor="black" />
      <pointLight intensity={1} />
      <spotLight 
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <primitive
        object={duck_scene.scene}
        scale={isMobile ? 0.50 : 0.75}
        position={isMobile ? [0, -3, -0.5] : [0, -3.25, -1.5]}
        rotation={[0, 0, -0.02]}
      />
    </mesh>
  )
}

const DuckCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 500px)');
    setIsMobile(mediaQuery.matches);
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener('change', handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange);
    };
  }, [])

  return (
    <Canvas
      frameloop='demand'
      shadows
      camera={{ position: [-25, -3, -5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls 
          autoRotate
          autoRotateSpeed={0.5}
          enableZoom={false} 
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Duck isMobile={isMobile}/>
      </Suspense>

      <Preload all />
    </Canvas>
  )
}
export default DuckCanvas