import { Suspense } from 'react';
import { OrbitControls } from '@react-three/drei/core/OrbitControls';
import './App.css';
import { Canvas } from '@react-three/fiber';
import Shoe from './Shoe';
import ColorPicker from './ColorPicker';
import { Stats } from '@react-three/drei';
import { Html } from './Html';
import MaterialProvider from './ContextProvider';

function App() {
  return (
    <MaterialProvider>
      <Canvas camera={{ position: [10, -5, 3], fov: 35 }}>
        <ambientLight intensity={1}></ambientLight>
        <spotLight
          intensity={0.3}
          angle={0.2}
          penumbra={1}
          position={[10, 15, 10]}
          castShadow
        />
        <Suspense fallback={null}>
          <Shoe />
          <Html>
            <ColorPicker />
          </Html>
          <OrbitControls />
        </Suspense>
        <Stats />
      </Canvas>
    </MaterialProvider>
  );
}

export default App;
