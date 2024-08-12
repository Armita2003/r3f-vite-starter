import {
    ContactShadows,
    Environment,
    Float,
    MeshDistortMaterial,
    MeshWobbleMaterial,
    OrbitControls,
    Sky,
    useScroll,
} from "@react-three/drei";
import { Avatar } from "./Avatar";
import { useControls } from "leva";
import { MyOffice } from "./MyOffice";
import { motion } from "framer-motion-3d";
import { useFrame, useThree } from "@react-three/fiber";
import { animate, useMotionValue } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { framerMotionConfig } from "../config";
import { Euler, Quaternion, Vector3 } from "three";
import { Projects } from "./Projects";
// import { Projects } from "./Projects";
// import { Projects } from "./Projects";

export const Experience = (props) => {
    const { menuOpened } = props;
    const { viewport } = useThree();
    const data = useScroll();

    const [section, setSection] = useState(0);

    const cameraPositionX = useMotionValue();
    const cameraLookAtX = useMotionValue();

    useEffect(() => {
        animate(cameraPositionX, menuOpened ? -5 : 0, {
            ...framerMotionConfig,
        });
        animate(cameraLookAtX, menuOpened ? 5 : 0, {
            ...framerMotionConfig,
        });
    }, [menuOpened]);
    const characterContainerAboutRef = useRef();

    const [charaterAnimation, setCharaterAnimation] = useState("Typing");
    useEffect(() => {
        setCharaterAnimation("Falling");
        setTimeout(() => {
            setCharaterAnimation(section === 0 ? "Typing" : "Standing");
        }, 600);
    }, [section]);
    useFrame((state) => {
        let curSection = Math.floor(data.scroll.current * data.pages);
        if (curSection > 3) {
            curSection = 3;
        }
        if (curSection !== section) {
            setSection(curSection);
        }

        state.camera.position.x = cameraPositionX.get();
        state.camera.lookAt(cameraLookAtX.get(), 0, 0);

        // const position = new Vector3();
        // characterContainerAboutRef.current.getWorldPosition(position);
        // console.log([position.x, position.y, position.z]);
        // const quaternion = new Quaternion();

        // characterContainerAboutRef.current.getWorldQuaternion(quaternion);
        // const euler = new Euler();
        // euler.setFromQuaternion(quaternion, "XYZ");
        // console.log([euler.x, euler.y, euler.z]);
    });

    const { animation } = useControls({
        animation: {
            value: "Typing",
            Options: ["Typing", "Falling", "Standing"],
        },
    });
    return (
        <>
            <motion.group
                position={[
                    2.2123846747879945, 0.24750000000000003, 2.3814229878180084,
                ]}
                rotation={[
                    -3.1415926535897927, 1.3523981633974482, 3.141592653589793,
                ]}
                animate={"" + section}
                transition={{
                    duration: 0.6,
                }}
                variants={{
                    0: {
                        scaleX: 0.9,
                        scaleY: 0.9,
                        scaleZ: 0.9,
                    },
                    1: {
                        x: 1.1,
                        y: -viewport.height + 0.5,
                        z: 7,
                        rotateX: 0,
                        rotateY: 0,
                        rotateZ: 0,
                    },
                    2: {
                        x: -2,
                        y: -viewport.height * 2 + 0.5,
                        z: 0,
                        rotateX: 0,
                        rotateY: Math.PI / 2,
                        rotateZ: 0,
                    },
                    3: {
                        y: -viewport.height * 3 + 1,
                        x: 0.3,
                        z: 10,
                        rotateX: 0,
                        rotateY: -Math.PI / 4,
                        rotateZ: 0,
                    },
                }}
            >
                <Avatar animation={charaterAnimation} />
            </motion.group>
            <ambientLight intensity={0.5} />
            <motion.group
                position={[1.8, 0, 3]}
                scale={0.9}
                rotation-y={-Math.PI / 4}
                animate={{
                    y: section === 0 ? 0 : -1,
                }}
            >
                <MyOffice section={section} />
                <group
                    ref={characterContainerAboutRef}
                    position={[-0.162, 0.275, -0.81]}
                    rotation={[-Math.PI, 0.567, -Math.PI]}
                ></group>
            </motion.group>
            <motion.group
                position={[0, -1.5, -10]}
                animate={{
                    z: section === 1 ? 0 : -10,
                    y: section === 1 ? -viewport.height : -1.5,
                }}
            >
                <directionalLight position={[-5, 3, 5]} intensity={0.4} />
                <Float>
                    <mesh position={[1, -3, -15]} scale={2}>
                        <sphereGeometry />
                        <MeshDistortMaterial
                            opacity={0.8}
                            transparent
                            distort={0.4}
                            speed={4}
                            color={"red"}
                        />
                    </mesh>
                </Float>
                <Float>
                    <mesh scale={3} position={[3, 1, -18]}>
                        <sphereGeometry />
                        <MeshDistortMaterial
                            opacity={0.8}
                            transparent
                            distort={1}
                            speed={5}
                            color={"yellow"}
                        />
                    </mesh>
                </Float>
                <Float>
                    <mesh scale={1.4} position={[-3, -1, -11]}>
                        <boxGeometry />
                        <MeshWobbleMaterial
                            opacity={0.8}
                            transparent
                            distort={1}
                            speed={5}
                            color={"blue"}
                        />
                    </mesh>
                </Float>
            </motion.group>
            {/* <Projects /> */}
            <Projects />
        </>
    );
};
