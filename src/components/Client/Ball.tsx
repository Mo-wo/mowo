import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import {
  Decal,
  Float,
  OrbitControls,
  Preload,
  useTexture,
} from '@react-three/drei';
import CanvasLoader from './Loader';

const Ball = (props: any) => {
  // const [decal] = useTexture([props.imgUrl]);
  // console.log('logging decal', decal)
  // console.log('logging image', [props.imgUrl])

  return (
    <Float speed={2.5} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 0, 0.05]} />
      <mesh castShadow receiveShadow scale={2}>
        <icosahedronGeometry args={[1, 2]} />
        <meshStandardMaterial
          color="#A3492F"
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />
        <Decal
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 6.25]}
          flatShading
          // map={html}
        />
      </mesh>
    </Float>
  );
};

const BallCanvas = ({ icon }: any) => {
  console.log('logging icon', icon);

  return (
    <Canvas frameloop="always" gl={{ preserveDrawingBuffer: true }}>
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} position0={0} />
        <Ball imgUrl={icon} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default BallCanvas;
