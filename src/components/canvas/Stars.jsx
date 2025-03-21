import {useRef, Suspense} from 'react';
import {Canvas, useFrame} from '@react-three/fiber';
import { Points,  PointMaterial } from '@react-three/drei';

import * as random from 'maath/random/dist/maath-random.esm';

const Stars = (props) => {
  const ref= useRef();

  const sphere = random.inSphere(new Float32Array(5000), {radius: 1});

  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 60;
    ref.current.rotation.y -= delta / 60;
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere}  frustumCulled {...props}>
        <PointMaterial transparent size={0.0015} sizeAttenuation={true} depthWrite={false} color='#f272c8' opacity={0.8}/>
      </Points>
    </group>
  )
}

const StarsCanvas = () => {
  return (
    <div className='w-full h-auto absolute inset-0 z-[-1]'>
      <Canvas camera={{
        position: [0, 0, 1]
      }}>
        <Suspense fallback={null}><Stars/></Suspense>
      </Canvas>
    </div>
  )
}
export default StarsCanvas