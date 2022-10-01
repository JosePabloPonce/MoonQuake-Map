import './sphere.css';
import {useState, useEffect, useRef, Suspense} from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import styled from 'styled-components'
import {Moon} from './Moon'
import { TopSection } from './TopSection';

function Globo() {
  return ( 
    
    <div className='ContenedorGlobo'>
      <TopSection/>
      <Canvas>
        <Suspense fallback={null}>
          <Moon />
        </Suspense>
      </Canvas>
    </div>
  );

}

export default Globo;
