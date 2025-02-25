import { useRef, useEffect } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import * as THREE from "three";

const Model = () => {
  const modelRef = useRef<THREE.Group>();
  const scrollRef = useRef(0);

  // 스크롤 이벤트 핸들러
  useEffect(() => {
    const handleScroll = () => {
      scrollRef.current = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // glTF 모델 로드
  const gltf = useLoader(GLTFLoader, "/3d/scene.glTF"); // 모델 경로 수정

  // 모델 회전 애니메이션
  useFrame(() => {
    if (modelRef.current) {
      // 스크롤 위치에 따른 회전
      modelRef.current.rotation.y = scrollRef.current * 0.002;
      // 기본 자동 회전
      modelRef.current.rotation.y += 0.005;
    }
  });

  return <primitive ref={modelRef} object={gltf.scene} scale={1.5} />;
};

const ModelViewer = () => {
  return (
    <div className="h-screen w-full">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 75 }}
        style={{ background: "transparent" }}
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <Model />
        <OrbitControls enableZoom={false} />
      </Canvas>
    </div>
  );
};

export default ModelViewer;
