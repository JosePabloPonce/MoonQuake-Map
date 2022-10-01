import React from "react";


export function Moon(props){
    return(<>
    <ambientLight  intensity={1}/>
    <mesh>
        <sphereGeometry args ={[1, 32, 32]} />
            <meshPhongMaterial color="red"/>
    </mesh>
    </>)
};