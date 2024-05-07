import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import {
  Decal,
  Float,
  OrbitControls,
  Preload,
  useTexture,
  Html
} from '@react-three/drei';
import CanvasLoader from './Loader';

const Ball = ({ icon, text}: any) => {
  const decal = useTexture(icon.src);

  return (
    <Float speed={2.5} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 0, 0.05]} />
      <group>

      <mesh castShadow receiveShadow scale={2}>
        <icosahedronGeometry args={[1, 2]} />
        <meshStandardMaterial
          color="#5C5C5C"
          // color="#E3DDDD"
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />
        {/* <Decal
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 6.25]}
          flatShading
          map={decal}
        /> */}
      </mesh>

      <Html position={[0, 0, 1.5]} transform scale={[1, 1.2, 1]}>
          <div style={{ textAlign: 'center' }}>
            <img src={icon.src} alt={`${text}-icon`} width="70" height="70" />
            {/* <p>{text}</p> */}
          </div>
        </Html>

      </group> 
    </Float>
  );
};

const BallCanvas = ({ icon, text }: any) => {

  return (
    <div style={{width: '150px', height: '150px'}}>
    <Canvas frameloop="always" gl={{ preserveDrawingBuffer: true }}>
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} position0={0} />
        <Ball icon={icon} text={text} />
      </Suspense>
      <Preload all />
    </Canvas>
    </div>
  );
};

export default BallCanvas;
