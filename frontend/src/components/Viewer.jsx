import { Canvas } from "@react-three/fiber";

import {
  OrbitControls,
  useGLTF
} from "@react-three/drei";

function Model({
  modelUrl
}) {
  const gltf = useGLTF(
    modelUrl
  );

  return (
    <primitive
      object={gltf.scene}
      scale={1}
    />
  );
}

const Viewer = ({
  modelUrl
}) => {
  return (
    <div className="h[500px] bg-gray-200">
      <Canvas camera={{ position: [0, 2, 5] }}>
        <ambientLight intensity={2} />

        <directionalLight
          position={[2, 2, 5]}
        />

        <Model modelUrl={modelUrl} />

        <OrbitControls
          enableZoom
          enablePan
          enableRotate
        />
      </Canvas>
    </div>
  );
};

export default Viewer;