import './sphere.css';
import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { Moon } from './Moon'

function Globo() {
  return ( 
    
    <div className='ContenedorGlobo'>
      <Canvas>
        <Suspense fallback={null}>
          <Moon />
        </Suspense>
      </Canvas>
    </div>
  );

}

export default Globo;
