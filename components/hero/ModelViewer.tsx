import { useEffect, useState, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import * as THREE from "three";

// 환경에 따라 GLTF 모델 경로 설정
const MODEL_PATH = `${
  process.env.NODE_ENV === "production" ? "/portfolio" : ""
}/3d/scene.gltf`;

const Model = () => {
  const [modelLoaded, setModelLoaded] = useState(false);
  const { scene } = useGLTF(MODEL_PATH);
  const modelRef = useRef<THREE.Group | null>(null);
  const [autoRotate, setAutoRotate] = useState(false);

  useEffect(() => {
    if (scene) {
      setModelLoaded(true);
      console.log("모델 로드됨:", scene);

      const modelCopy = scene.clone();
      const box = new THREE.Box3().setFromObject(modelCopy);
      const center = box.getCenter(new THREE.Vector3());
      modelCopy.position.set(-center.x, -center.y + 0.5, -center.z);

      const size = box.getSize(new THREE.Vector3());
      const maxDim = Math.max(size.x, size.y, size.z);
      const scale = 2.5 / maxDim;
      modelCopy.scale.set(scale, scale, scale);
      modelCopy.rotation.x = (-10.0 * Math.PI) / 180;

      if (modelRef.current) {
        while (modelRef.current.children.length > 0) {
          modelRef.current.remove(modelRef.current.children[0]);
        }
        modelRef.current.add(modelCopy);
        modelRef.current.position.z = 0;
      }

      const timer = setTimeout(() => {
        setAutoRotate(true);
        console.log("자동 회전 활성화됨");
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [scene]);

  useFrame(() => {
    if (modelRef.current && autoRotate) {
      modelRef.current.rotation.y += 0.05;
    }
  });

  return (
    <group ref={modelRef} position={[0, 0, 0]}>
      {!modelLoaded && (
        <mesh>
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial color={"red"} />
        </mesh>
      )}
    </group>
  );
};

const ModelViewer = () => {
  return (
    <div className="w-[280px] h-[512px] overflow-hidden">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 50, near: 0.1, far: 1000 }}
        gl={{
          alpha: true,
          antialias: true,
          preserveDrawingBuffer: true,
        }}
        onCreated={({ gl, camera }) => {
          console.log("Canvas 생성됨:", { gl, camera });
          gl.domElement.style.touchAction = "none";
          gl.domElement.style.pointerEvents = "none";
          camera.position.set(0, 0, 5);
          camera.lookAt(0, 0, 0);
          camera.updateProjectionMatrix();
        }}
        className="w-full h-full"
      >
        <ambientLight intensity={1.5} />
        <pointLight position={[10, 10, 10]} intensity={2.0} />
        <pointLight position={[-10, -10, -10]} intensity={1.0} />
        <pointLight position={[0, 5, 0]} intensity={1.5} />
        <pointLight position={[0, 0, 5]} intensity={1.5} />
        <hemisphereLight intensity={1.0} />
        <Model />
      </Canvas>
    </div>
  );
};

// 모델 사전 로드
useGLTF.preload(MODEL_PATH);

export default ModelViewer;
