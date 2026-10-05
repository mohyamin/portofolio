import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";

function FloatingCube({
    position,
    scale = 1,
    speed = 0.4,
}) {
    const ref = useRef();

    useFrame((state, delta) => {
        if (!ref.current) return;

        ref.current.rotation.x += delta * speed;
        ref.current.rotation.y += delta * speed * 0.7;

        // Gerakan sangat halus
        ref.current.position.y +=
            Math.sin(state.clock.elapsedTime * 0.8) * 0.0008;
    });

    return (
        <Float
            speed={1}
            rotationIntensity={0.25}
            floatIntensity={0.35}
        >
            <mesh
                ref={ref}
                position={position}
                scale={scale}
            >
                <boxGeometry args={[1, 1, 1]} />

                <meshStandardMaterial
                    color="#2563eb"
                    transparent
                    opacity={0.12}
                    roughness={0.35}
                    metalness={0.15}
                />
            </mesh>
        </Float>
    );
}


function FloatingSphere({
    position,
    scale = 1,
}) {
    return (
        <Float
            speed={1.2}
            rotationIntensity={0.15}
            floatIntensity={0.5}
        >
            <mesh
                position={position}
                scale={scale}
            >
                <sphereGeometry args={[1, 24, 24]} />

                <meshStandardMaterial
                    color="#3b82f6"
                    transparent
                    opacity={0.14}
                    roughness={0.25}
                    metalness={0.1}
                />
            </mesh>
        </Float>
    );
}


/* 3D Orbit Ring */
function OrbitRing({
    rotation = [0, 0, 0],
    scale = 1,
}) {
    const ref = useRef();

    useFrame((state) => {
        if (!ref.current) return;

        ref.current.rotation.z =
            state.clock.elapsedTime * 0.08;
    });

    return (
        <mesh
            ref={ref}
            rotation={rotation}
            scale={scale}
        >
            <torusGeometry args={[2.25, 0.012, 12, 100]} />

            <meshBasicMaterial
                color="#93c5fd"
                transparent
                opacity={0.28}
            />
        </mesh>
    );
}


/* Small orbiting dot */
function OrbitDot() {
    const ref = useRef();

    useFrame((state) => {
        if (!ref.current) return;

        const time = state.clock.elapsedTime;

        ref.current.position.x =
            Math.cos(time * 0.45) * 2.25;

        ref.current.position.y =
            Math.sin(time * 0.45) * 2.25;

        ref.current.position.z =
            Math.sin(time * 0.45) * 0.5;
    });

    return (
        <mesh ref={ref}>
            <sphereGeometry args={[0.045, 16, 16]} />

            <meshBasicMaterial
                color="#2563eb"
                transparent
                opacity={0.8}
            />
        </mesh>
    );
}


export default function FloatingObjects() {
    return (
        <>
            {/* Orbit rings */}
            <OrbitRing />

            <OrbitRing
                rotation={[Math.PI / 2.8, 0.2, 0]}
                scale={0.82}
            />

            {/* Floating geometry */}
            <FloatingCube
                position={[-2.65, 1.65, -0.8]}
                scale={0.20}
                speed={0.28}
            />

            <FloatingCube
                position={[2.55, 1.55, -1.2]}
                scale={0.14}
                speed={0.4}
            />

            <FloatingSphere
                position={[2.65, -1.1, -0.8]}
                scale={0.11}
            />

            <FloatingSphere
                position={[-2.55, -1.25, -1.3]}
                scale={0.075}
            />

            {/* Orbiting blue dot */}
            <OrbitDot />
        </>
    );
}