import {
    ContactShadows,
    Environment,
    OrbitControls,
    Sky,
} from "@react-three/drei";
import { Avatar } from "./Avatar";
import { useControls } from "leva";
import { Office } from "./Office";
import { MyOffice } from "./MyOffice";

export const Experience = () => {
    const { animation } = useControls({
        animation: {
            value: "Typing",
            Options: ["Typing", "Falling", "Standing"],
        },
    });
    return (
        <>
            <OrbitControls />
            <Sky />
            <Environment preset='sunset' />
            <group position-y={-1}>
                <ContactShadows
                    opacity={0.42}
                    scale={10}
                    blur={1}
                    far={10}
                    resolution={256}
                    color='#000000'
                />
                <Avatar animation={animation} position-y={0.09} />
                {animation === "Typing" && (
                    <mesh scale={[0.8, 0.5, 0.8]} position-y={0.25}>
                        <boxGeometry />
                        <meshStandardMaterial color='white' />
                    </mesh>
                )}
                <mesh
                    receiveShadow
                    scale={5}
                    rotation-x={-Math.PI * 0.5}
                    position-y={-0.001}
                >
                    <planeGeometry />
                    <meshStandardMaterial color='white' />
                </mesh>
                <MyOffice />
            </group>
        </>
    );
};
