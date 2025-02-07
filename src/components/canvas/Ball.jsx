import {Suspense, useRef} from 'react'
import {Canvas} from '@react-three/fiber';
import {Decal, Float, OrbitControls, Preload, useTexture} from '@react-three/drei';
import CanvasLoader from '../Loader';

const Ball = (props) => {
  const [decal] = useTexture([props.imgUrl]);

  return (
    <Float speed={3} rotationIntensity={1} floatIntensity={0.5}>
      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 0, 0.05]} />
      <mesh castShadow receiveShadow scale={3}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          // color='#ffffff'
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading={true}
        />
        <Decal
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 6.25]}
          scale={1.1}
          flatShading
          map={decal}
        />
      </mesh>
    </Float>
  )
}

const BallCanvas = ({icon}) => {
  const controlsRef = useRef([0, 0, 10]);

  const handlePointerOut = () => {
    if(controlsRef.current){
      controlsRef.current.reset();
    }
  };

  return (
    <Canvas
      // frameLoop='demand'
      // gl={{preserveDrawingBuffer: true}}
      className='cursor-pointer'
      onPointerLeave={handlePointerOut}
      onPointerEnter={handlePointerOut}
    >
      <Suspense fallback={<CanvasLoader />}>

        <OrbitControls
          enableZoom={false}
          ref={controlsRef}
        />
        <Ball imgUrl={icon} />
      </Suspense>
      <Preload all />
    </Canvas>
  )
}
export default BallCanvas