import React from "react"
import './information.css';
import {Stars} from '@react-three/drei'
import { Canvas } from "@react-three/fiber";

function TopSection(){
    return(
        <div className="topsection">
                    <Canvas classname="stars">
                <Stars 
    radius ={300} 
    depth ={60} 
    count={8000} 
    factor ={7} 
    saturation={0} 
    fade={true} 
    /></Canvas>
            <div className="logo">
                <h1>
                MAKE A MOONQUAKE MAP!
                </h1>
                <div className="slogan">
                <h2>
                Background 
                </h2>
                <p >
                During 1969 and 1977,  NASA performed a series of experiments to study the moon's structure, called ALSEP( Apollo Lunar Surface Experiments Package). These experiments were a collection of geophysical instruments designed to monitor and analyze the landing sites after astronauts left the moon’s surface. Designed for a life of one year, they ended up working for over 8 years.
                </p>
                <p>
                The seismometers on these devices detected moonquakes as well as meteorite and artificial impacts, and transmitted their data to Earth where it is still available for use today.

                </p>
            </div>

        </div>
        </div>

    )

}

export default TopSection