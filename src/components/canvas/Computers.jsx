import {Suspense, useEffect, useState, useRef} from 'react'
import {Canvas} from '@react-three/fiber'
import {OrbitControls, useGLTF} from '@react-three/drei'
import CanvasLoader from '../Loader'
import { useFrame } from '@react-three/fiber';

const Computers = () => {

  const meshRef = useRef(null); // create a ref for the mesh

  useFrame(() => {
    if (meshRef.current) {
      if (meshRef.current.rotation.y < Math.PI / 6) {
        meshRef.current.rotation.y += 0.003;

      }
    }
  });
  const computer = useGLTF('./desktop_pc/scene.gltf');
  return (
    <mesh className='cursor-pointer' ref={meshRef} >
     <hemisphereLight intensity={2.5} groundColor='black' />
      <pointLight intensity={1.5} />
     <spotLight
        position={[-20, 0, 10]} angle={0.12} penumbra={1} intensity={1} castShadow shadow-mapSize={1024}/>

      <primitive object={computer.scene} scale={0.75} position={[0, -3.4, -1.5]} rotation={[-0.01, -0.2, -0.1]}/>
    </mesh>
  )
}

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);




  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 700px)');
    setIsMobile(mediaQuery.matches);
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    }
    mediaQuery.addEventListener('change', handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange);
    }
  }, [])

  return (
    !isMobile ?
    <Canvas
      frameloop='demand'
      shadows
      dpr={[1, 1.5]}
      camera={{position: [20, 3, 5], fov: 25}}
      // gl={{preserveDrawingBuffer: true}}
      className="w-full h-full"
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
          rotation={[0,-2,0]}
        />
        <Computers/>
      </Suspense>
      {/* Preload can eagerly load all assets; skip for smaller initial payload */}
    </Canvas> : null
  )
}

export default ComputersCanvas