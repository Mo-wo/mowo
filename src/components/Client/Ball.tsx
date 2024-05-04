import React, { Suspense } from 'react';
import { extend } from '@react-three/fiber'
import { Canvas } from '@react-three/fiber';
import {
  Decal,
  Float,
  Loader,
  OrbitControls,
  Preload,
  useTexture,
} from '@react-three/drei';
extend({Decal,
  Float,
  Loader,
  OrbitControls,
  Preload,
  useTexture})
// import Loader from '../Loader';

const Ball = (props: { imgUrl: any; }) => {
  const [decal] = useTexture([props.imgUrl]);

  return (
    <Float speed={2.5} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 0, 0.05]} />
      <mesh castShadow receiveShadow scale={2.75}>
        <icosahedronGeometry args={[1, 2]} />
        <meshStandardMaterial
          color="#3d3d3d"
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />
        <Decal
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 6.25]}
          flatShading
          map={decal}
        />
      </mesh>
    </Float>
  );
};

export const BallCanvas = ({ icon }: any) => {
  return (
    <Canvas style={{backgroundColor: 'red'}} frameloop="always" gl={{ preserveDrawingBuffer: true }}>
      <Suspense fallback={null}>
        <OrbitControls enableZoom={false} position0={0} />
        <Ball imgUrl={icon} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

