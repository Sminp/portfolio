import { useEffect, useState, useRef } from "react";
import * as THREE from "three";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";

// 환경에 따라 GLTF 모델 경로 설정
const MODEL_PATH = `${
  process.env.NODE_ENV === "production" ? "/portfolio" : ""
}/model/scene.gltf`;

// 전역 회전값을 관리하기 위한 변수들
const globalRotationSpeed = { value: 0 };
const globalTargetRotation = { value: 0 };

const Model = () => {
  const [modelLoaded, setModelLoaded] = useState(false);
  const { scene } = useGLTF(MODEL_PATH);
  const modelRef = useRef<THREE.Group | null>(null);
  const { gl } = useThree();
  const isVisibleRef = useRef(false);

  // Intersection Observer를 사용해 뷰포트에 요소가 보이는지 감지
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          isVisibleRef.current = entry.isIntersecting;
        });
      },
      { threshold: 0.1 }
    );

    // Canvas의 부모 요소 관찰
    const canvasParent = gl.domElement.parentElement;
    if (canvasParent) {
      observer.observe(canvasParent);
    }

    return () => {
      if (canvasParent) {
        observer.unobserve(canvasParent);
      }
      observer.disconnect();
    };
  }, [gl]);

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
    }
  }, [scene]);

  // 부드러운 애니메이션을 위한 프레임 업데이트
  useFrame(() => {
    if (modelRef.current && isVisibleRef.current) {
      // 현재 회전 속도와 목표 회전값 사이의 차이를 부드럽게 보간
      const diff = globalTargetRotation.value - globalRotationSpeed.value;
      globalRotationSpeed.value += diff * 1; // 보간 계수 (값이 클수록 더 빠른 반응)

      // 회전 적용
      modelRef.current.rotation.y += globalRotationSpeed.value;

      // 매우 작은 움직임은 점차 감소
      if (Math.abs(globalRotationSpeed.value) < 0.0001) {
        globalRotationSpeed.value = 0;
      }
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
  const viewerRef = useRef<HTMLDivElement>(null);

  // 전역 스크롤 이벤트 리스너 등록
  useEffect(() => {
    // 스크롤 이벤트 설정 - 페이지 전체에 적용
    const handleGlobalWheel = (event: WheelEvent) => {
      // 스크롤 감도 조절
      const scrollSensitivity = 0.05;
      const scrollDirection = event.deltaY > 0 ? 1 : -1;

      // 목표 회전값 증가 (즉각적 반응과 부드러움의 균형)
      globalTargetRotation.value = scrollDirection * scrollSensitivity * 2;

      // 이벤트 전파는 막지 않음 (페이지 스크롤도 작동하도록)
    };

    // 전역 이벤트 리스너 등록 (전체 윈도우에 적용)
    window.addEventListener("wheel", handleGlobalWheel, { passive: true });

    return () => {
      window.removeEventListener("wheel", handleGlobalWheel);
    };
  }, []);

  return (
    <div
      ref={viewerRef}
      className="md:w-[280px] md:h-[512px] w-[140px] h-[256px] overflow-hidden"
    >
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
