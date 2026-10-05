import { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import FloatingObjects from "./FloatingObjects";


function MouseTracker() {
    const groupRef = useRef();

    useFrame((state) => {
        if (!groupRef.current) return;

        const mouseX = state.pointer.x;
        const mouseY = state.pointer.y;

        const targetRotationY = mouseX * 0.10;
        const targetRotationX = -mouseY * 0.06;

        groupRef.current.rotation.y +=
            (targetRotationY - groupRef.current.rotation.y) * 0.035;

        groupRef.current.rotation.x +=
            (targetRotationX - groupRef.current.rotation.x) * 0.035;
    });

    return (
        <group ref={groupRef}>
            <FloatingObjects />
        </group>
    );
}


function SceneContent() {
    return (
        <>
            {/* Soft lighting */}
            <ambientLight intensity={1.2} />

            <directionalLight
                position={[3, 4, 5]}
                intensity={0.7}
            />

            <MouseTracker />

            <OrbitControls
                enableZoom={false}
                enablePan={false}
                enableRotate={false}
            />
        </>
    );
}


export default function HeroScene() {
    return (
        <Canvas
            camera={{
                position: [0, 0, 6],
                fov: 45,
            }}
            dpr={[1, 1.5]}
            gl={{
                antialias: true,
                alpha: true,
                powerPreference: "high-performance",
            }}
        >
            <Suspense fallback={null}>
                <SceneContent />
            </Suspense>
        </Canvas>
    );
}