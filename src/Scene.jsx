import { useEffect, useRef } from 'react'
import useSpline from '@splinetool/r3f-spline'
import { OrthographicCamera } from '@react-three/drei'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function Scene({ ...props }) {
  const { nodes, materials } = useSpline('https://prod.spline.design/lK3OpKUw7OA1L3w3/scene.splinecode')
  const modelRef = useRef()

  useEffect(() => {
    if (!modelRef.current) return

    
    gsap.fromTo(
      modelRef.current.position,
      { x: 91 },
      {
        x: -70,
        scrollTrigger: {
          trigger: "#scroll-container",
          start: "top 59%",
          end: "+=400",
          scrub: true,
          toggleActions: "restart none reverse pause",
          markers: true,
          autorotate: true,
        },
      }
    );
    gsap.fromTo(
      modelRef.current.rotation,
      { y: -0.75 },
      {
        y:-0.01,
        scrollTrigger: {
          trigger: "#scroll-container",
          start: "top 59%",
          end: "+=400",
          scrub: true,
          toggleActions: "restart none reverse pause",
          markers: true,
          autorotate: true,
        },
      }
    );
    gsap.fromTo(
      modelRef.current.rotation,
      { z: 0.35 },
      {
        z:0,
        scrollTrigger: {
          trigger: "#scroll-container",
          start: "top 59%",
          end: "+=400",
          scrub: true,
          toggleActions: "restart none reverse pause",
          markers: true,
          autorotate: true,
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, []);

  return (
    <>
      <group name="BackgroundWrapper" scale={[2, 2, 2]}> 
        <group {...props} dispose={null}>
          <scene name="Scene 1">
            <OrthographicCamera
              name="Camera"
              makeDefault={true}
              zoom={3.55}
              far={10000}
              near={-10000}
              position={[-92.18, -50.58, 1998.71]}
              rotation={[0.05, -0.02, 0]}
            />
            <group 
              name="Eve" 
              position={[71, 14, -522.71]}
              rotation={[0.22, 0, 0]}
              scale={1.8}
            >
              <group ref={modelRef} name="eva whole" position={[11.42, 101.55, 420.36]} rotation={[-0.15, 0.75, 0]}>
                <mesh
                  name="Body 5"
                  geometry={nodes['Body 5'].geometry}
                  material={materials['Body 5 Material']}
                  castShadow
                  receiveShadow
                  position={[-0.04, -7.5, 0.2]}
                />
                <mesh
                  name="Boolean 5"
                  geometry={nodes['Boolean 5'].geometry}
                  material={nodes['Boolean 5'].material}
                  castShadow
                  receiveShadow
                  position={[-0.04, -7.31, 0.22]}
                />
                <mesh
                  name="Boolean 4"
                  geometry={nodes['Boolean 4'].geometry}
                  material={nodes['Boolean 4'].material}
                  castShadow
                  receiveShadow
                  position={[-0.04, -7.31, 0.22]}
                />
                <mesh
                  name="Boolean 3"
                  geometry={nodes['Boolean 3'].geometry}
                  material={nodes['Boolean 3'].material}
                  castShadow
                  receiveShadow
                  position={[-0.04, -7.31, 0.22]}
                />
                <mesh
                  name="Boolean 2"
                  geometry={nodes['Boolean 2'].geometry}
                  material={nodes['Boolean 2'].material}
                  castShadow
                  receiveShadow
                  position={[-0.04, -7.31, 0.22]}
                />
                <mesh
                  name="Right Arm"
                  geometry={nodes['Right Arm'].geometry}
                  material={materials['Right Arm Material']}
                  castShadow
                  receiveShadow
                  position={[0.45, -5.66, 2.06]}
                  rotation={[2.4, 0.25, -3.07]}
                  scale={1}
                />
                <mesh
                  name="Left Arm"
                  geometry={nodes['Left Arm'].geometry}
                  material={materials['Left Arm Material']}
                  castShadow
                  receiveShadow
                  position={[0.75, -4.74, 3.75]}
                  rotation={[-0.71, 0.18, 0.17]}
                  scale={1}
                />
                <group name="Head" position={[-0.14, 11.65, -0.11]}>
                  <mesh
                    name="Sphere 6"
                    geometry={nodes['Sphere 6'].geometry}
                    material={materials['Sphere 6 Material']}
                    castShadow
                    receiveShadow
                    position={[0, -0.19, 0]}
                    rotation={[0, 0, 0.01]}
                    scale={1}
                  />
                  <group name="Eyes" position={[0.11, 0.18, 8.08]}>
                    <mesh
                      name="Boolean 21"
                      geometry={nodes['Boolean 21'].geometry}
                      material={nodes['Boolean 21'].material}
                      castShadow
                      receiveShadow
                      position={[-0.11, 0.18, -7.85]}
                    />
                    <mesh
                      name="Boolean"
                      geometry={nodes.Boolean.geometry}
                      material={nodes.Boolean.material}
                      castShadow
                      receiveShadow
                      position={[0.1, 0.16, -7.88]}
                      rotation={[0, 0, 0]}
                      scale={[-1, 1, 1]}
                    />
                  </group>
                  <mesh
                    name="Black Glossy"
                    geometry={nodes['Black Glossy'].geometry}
                    material={nodes['Black Glossy'].material}
                    castShadow
                    receiveShadow
                    position={[0, 0, 1.54]}
                  />
                </group>
              </group>
            </group>
            <OrthographicCamera name="1" makeDefault={false} far={100000} near={-10000} />
            <hemisphereLight name="Default Ambient Light" intensity={0.75} color="#eaeaea" />
          </scene>
        </group>
      </group>
    </>
  )
}