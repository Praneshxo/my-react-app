import React, { useRef, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import gsap from 'gsap';

const Model = ({ path }) => {
  const { scene, animations } = useGLTF(path);
  const modelRef = useRef(null);

  useEffect(() => {
    if (modelRef.current) {
      // GSAP animation to rotate the model (satellite)
      gsap.to(modelRef.current.rotation, {
        y: "+=6.28", // Rotate 360 degrees (2π radians)
        duration: 10, // Animation duration in seconds
        repeat: -1, // Repeat forever
        ease: "linear", // Linear easing for constant speed
      });
    }
  }, []);

  return <primitive ref={modelRef} object={scene} />;
};

const Model3D = ({ modelPath }) => {
  return (
    <Canvas>
      <ambientLight />
      <directionalLight position={[10, 10, 10]} />
      <Model path={modelPath} />
      <OrbitControls />
    </Canvas>
  );
};

export default Model3D;


