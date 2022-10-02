import React, { useRef } from "react";
import MoonMap from './moonTexture.jpg'
import { useFrame, useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";
import {OrbitControls, Stars} from '@react-three/drei'

export function Moon(props){

    const [normalMap] = useLoader(TextureLoader, [MoonMap]);
    const moonRef = useRef();
    useFrame(({clock})=>{
        const elapsedTime = clock.getElapsedTime()
        moonRef.current.rotation.y = elapsedTime / 6
    })

    return(<>
    {/*<ambientLight  intensity={1}/>*/}
    <pointLight color="white" position={[2,0,5]} intensity={1.2}/>
    <Stars 
    radius ={300} 
    depth ={60} 
    count={5000} 
    factor ={7} 
    saturation={0} 
    fade={true} 
    />
    <mesh ref={moonRef} position={[0, 0, 3.3]}>
        <sphereGeometry args ={[1, 32, 32]} />
        <meshPhongMaterial specularMap={normalMap} />
        <meshStandardMaterial 
        map={normalMap}
         metalness ={0.4} 
         roughness={0.7
         }/>
       { /*<OrbitControls 
            enableZoom={true} 
            enablePan={true} 
            enableRotate={true} 
            zoomSpeed={0.6}
             panSpeed={0.5} 
             rotateSpeed={0.4} 
             /> */}
    </mesh>
    </>)
};