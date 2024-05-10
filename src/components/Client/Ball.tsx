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
import styles from 'styles/skills.module.css'

const Ball = ({ skills, icon, text}: any) => {
  const decal = useTexture(icon.src);

  return (
    <Float speed={2.5} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 0, 0.05]} />
      <group>

      {/* <mesh castShadow receiveShadow scale={2}>
        <icosahedronGeometry args={[1, 2]} />
        <meshStandardMaterial
          color="#5C5C5C"
          // color="#E3DDDD"
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
      </mesh> */}

      <Html position={[0, 0, 1.5]} transform scale={[1, 1.2, 1]}>
          {skills.map((skill: any, index:number) => (
          <div key={index.toString()} className={styles.imgWrapper}>
            <img src={skill.icon.src} alt={`${text}-icon`} className={styles.icon} />
            <p className={styles.text}>{skill.name}</p>
          </div>))}
        </Html>

      </group> 
    </Float>
  );
};

const BallCanvas = ({ skills, icon, text }: any) => {

  return (
    <div style={{width: '100%', height: '100%'}}>
    <Canvas frameloop="always" gl={{ preserveDrawingBuffer: true }}>
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} position0={0} />
        {skills.map(() => (<Ball skills={skills} icon={icon} text={text} />))}
      </Suspense>
      <Preload all />
    </Canvas>
    </div>
  );
};

export default BallCanvas;
