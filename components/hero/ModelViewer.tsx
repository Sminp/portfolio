import { useEffect, useState, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import * as THREE from "three";

// 나중에 다시 보기 공부
const Model = () => {
  const [modelLoaded, setModelLoaded] = useState(false);
  const { scene } = useGLTF("/3d/scene.gltf");
  const modelRef = useRef<THREE.Group>();
  const [autoRotate, setAutoRotate] = useState(false);

  // 모델 로드 후 처리
  useEffect(() => {
    if (scene) {
      // 모델 로드 성공 표시
      setModelLoaded(true);
      console.log("모델 로드됨:", scene);

      // 모델 복사본 생성 (원본 보존)
      const modelCopy = scene.clone();

      // 모델의 중심점을 원점으로 이동
      const box = new THREE.Box3().setFromObject(modelCopy);
      const center = box.getCenter(new THREE.Vector3());
      modelCopy.position.set(-center.x, -center.y + 0.5, -center.z); // y축 조정

      // 모델의 크기 계산
      const size = box.getSize(new THREE.Vector3());
      const maxDim = Math.max(size.x, size.y, size.z);

      // 모델이 뷰에 맞게 표시되도록 스케일 조정 (더 큰 스케일 값 사용)
      const scale = 2.5 / maxDim;
      modelCopy.scale.set(scale, scale, scale);

      // 모델에 직접 기울기 적용
      modelCopy.rotation.x = (-10.0 * Math.PI) / 180;

      // modelRef에 복사된 모델 설정
      if (modelRef.current) {
        // 기존 자식 요소 모두 제거
        while (modelRef.current.children.length > 0) {
          modelRef.current.remove(modelRef.current.children[0]);
        }

        // 새 모델 추가
        modelRef.current.add(modelCopy);

        // 카메라 시야에 확실히 들어오도록 z축 위치 조정
        modelRef.current.position.z = 0;
      }

      // // 디버그 정보 출력
      // console.log("모델 설정 완료:", {
      //   position: modelCopy.position,
      //   scale: modelCopy.scale,
      //   rotation: modelCopy.rotation,
      //   boundingBox: box,
      // });

      // 1초 후에 자동 회전 활성화
      const timer = setTimeout(() => {
        setAutoRotate(true);
        console.log("자동 회전 활성화됨");
      }, 1000);

      // 컴포넌트 언마운트 시 타이머 정리
      return () => clearTimeout(timer);
    }
  }, [scene]);

  // 자동 회전 구현
  useFrame(() => {
    // autoRotate 상태가 true일 때만 회전 적용
    if (modelRef.current && autoRotate) {
      // y축을 기준으로 회전 (0.05 라디안/프레임) - 속도 조정
      modelRef.current.rotation.y += 0.05;

      // // 간헐적으로 현재 상태 로깅 (디버깅용)
      // if (Math.random() < 0.01) {
      //   console.log("회전 중:", modelRef.current.rotation);
      // }
    }
  });

  return (
    <group ref={modelRef} position={[0, 0, 0]}>
      {!modelLoaded && (
        // 로딩 중에 표시할 기본 박스 (빨간색으로 변경하여 가시성 확보)
        <mesh>
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial color={"red"} />
        </mesh>
      )}
      {/* scene은 useEffect에서 복제 후 group에 추가됨 */}
    </group>
  );
};

const ModelViewer = () => {
  return (
    // 고정된 512px x 512px 컨테이너
    <div className="w-[280px] h-[512px] overflow-hidden">
      <Canvas
        camera={{
          position: [0, 0, 5], // 카메라 위치 조정 - 모델로부터 적당히 떨어짐
          fov: 50, // 시야각 조정
          near: 0.1,
          far: 1000,
        }}
        gl={{
          alpha: true, // 투명 배경
          antialias: true, // 부드러운 렌더링
          preserveDrawingBuffer: true, // 디버깅용 버퍼 유지
        }}
        // 마우스 이벤트 비활성화
        onCreated={({ gl, camera, scene: canvasScene }) => {
          console.log("Canvas 생성됨:", { gl, camera, scene: canvasScene });

          // 이벤트 비활성화 (드래그, 클릭 방지)
          gl.domElement.style.touchAction = "none";
          gl.domElement.style.pointerEvents = "none";

          // 카메라 위치 재설정으로 모델 전체가 보이도록 함
          camera.position.set(0, 0, 5);
          camera.lookAt(0, 0, 0);
          camera.updateProjectionMatrix();
        }}
        className="w-full h-full"
      >
        {/* 장면 전체 밝기 */}
        <ambientLight intensity={1.5} />
        {/* 다양한 방향에서 조명을 주어 모델이 잘 보이게 함 */}
        <pointLight position={[10, 10, 10]} intensity={2.0} />
        <pointLight position={[-10, -10, -10]} intensity={1.0} />
        <pointLight position={[0, 5, 0]} intensity={1.5} />
        <pointLight position={[0, 0, 5]} intensity={1.5} />
        {/* 모든 방향에서 균일한 조명 (모델이 어두워 보이지 않도록) */}
        <hemisphereLight intensity={1.0} />

        {/* 디버깅용 축 헬퍼 (x, y, z 축 표시)
        <axesHelper args={[5]} /> */}

        {/* 모델 컴포넌트 */}
        <Model />
      </Canvas>
    </div>
  );
};

// 모델 사전 로드 설정
useGLTF.preload("/3d/scene.gltf");

export default ModelViewer;
