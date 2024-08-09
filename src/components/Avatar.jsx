import React, { useEffect, useRef } from "react";
import { useAnimations, useFBX, useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { Vector3 } from "three";

import { useControls } from "leva";

export function Avatar(props) {
    const { headFollow, cursorFollow, wireframe } = useControls({
        headFollow: false,
        cursorFollow: false,
        wireframe: false,
    });

    const { animation } = props;

    const group = useRef();

    const { nodes, materials } = useGLTF("models/66ae0f57c503a3da8b2c6034.glb");
    const { animations: typingAnimation } = useFBX("animations/Typing.fbx");
    const { animations: fallingAnimation } = useFBX(
        "animations/Falling Idle.fbx"
    );
    const { animations: standingAnimation } = useFBX(
        "animations/Standing Idle.fbx"
    );

    typingAnimation[0].name = "Typing";
    standingAnimation[0].name = "Standing";
    fallingAnimation[0].name = "Falling";

    const { actions } = useAnimations(
        [typingAnimation[0], fallingAnimation[0], standingAnimation[0]],
        group
    );

    // Play selected animation
    useEffect(() => {
        const boneNameMap = {
            mixamorigHips: "Hips",
            mixamorigSpine: "Spine",
            mixamorigSpine1: "Spine1",
            mixamorigSpine2: "Spine2",
            mixamorigNeck: "Neck",
            mixamorigHead: "Head",
            mixamorigLeftShoulder: "LeftShoulder",
            mixamorigLeftArm: "LeftArm",
            mixamorigLeftForeArm: "LeftForeArm",
            mixamorigLeftHand: "LeftHand",
            mixamorigRightShoulder: "RightShoulder",
            mixamorigRightArm: "RightArm",
            mixamorigRightForeArm: "RightForeArm",
            mixamorigRightHand: "RightHand",
            mixamorigLeftUpLeg: "LeftUpLeg",
            mixamorigLeftLeg: "LeftLeg",
            mixamorigLeftFoot: "LeftFoot",
            mixamorigRightUpLeg: "RightUpLeg",
            mixamorigRightLeg: "RightLeg",
            mixamorigRightFoot: "RightFoot",
            // Add more mappings if necessary
        };

        // Remap the bone names in the animation tracks
        [typingAnimation, fallingAnimation, standingAnimation].forEach(
            (animations) => {
                animations.forEach((clip) => {
                    clip.tracks.forEach((track) => {
                        const originalBoneName = track.name.split(".")[0];
                        if (boneNameMap[originalBoneName]) {
                            track.name = track.name.replace(
                                originalBoneName,
                                boneNameMap[originalBoneName]
                            );
                        }
                    });
                });
            }
        );

        actions[animation].reset().fadeIn(0.5).play();
        return () => {
            actions[animation].fadeOut(0.5);
        };
    }, [animation, typingAnimation, fallingAnimation, standingAnimation]);

    useEffect(() => {
        Object.values(materials).forEach((material) => {
            material.wireframe = wireframe;
        });
    }, [wireframe]);

    useFrame((state) => {
        if (headFollow) {
            group.current.getObjectByName("Head").lookAt(state.camera.position);
        }
        if (cursorFollow) {
            const target = new Vector3(state.mouse.x, state.mouse.y, 1);

            group.current.getObjectByName("Spine2").lookAt(target);
        }
    });
    return (
        <group {...props} ref={group} dispose={null}>
            <primitive object={nodes.Hips} />
            <skinnedMesh
                name='EyeLeft'
                geometry={nodes.EyeLeft.geometry}
                material={materials.Wolf3D_Eye}
                skeleton={nodes.EyeLeft.skeleton}
                morphTargetDictionary={nodes.EyeLeft.morphTargetDictionary}
                morphTargetInfluences={nodes.EyeLeft.morphTargetInfluences}
            />
            <skinnedMesh
                name='EyeRight'
                geometry={nodes.EyeRight.geometry}
                material={materials.Wolf3D_Eye}
                skeleton={nodes.EyeRight.skeleton}
                morphTargetDictionary={nodes.EyeRight.morphTargetDictionary}
                morphTargetInfluences={nodes.EyeRight.morphTargetInfluences}
            />
            <skinnedMesh
                name='Wolf3D_Head'
                geometry={nodes.Wolf3D_Head.geometry}
                material={materials.Wolf3D_Skin}
                skeleton={nodes.Wolf3D_Head.skeleton}
                morphTargetDictionary={nodes.Wolf3D_Head.morphTargetDictionary}
                morphTargetInfluences={nodes.Wolf3D_Head.morphTargetInfluences}
            />
            <skinnedMesh
                name='Wolf3D_Teeth'
                geometry={nodes.Wolf3D_Teeth.geometry}
                material={materials.Wolf3D_Teeth}
                skeleton={nodes.Wolf3D_Teeth.skeleton}
                morphTargetDictionary={nodes.Wolf3D_Teeth.morphTargetDictionary}
                morphTargetInfluences={nodes.Wolf3D_Teeth.morphTargetInfluences}
            />
            <skinnedMesh
                geometry={nodes.Wolf3D_Hair.geometry}
                material={materials.Wolf3D_Hair}
                skeleton={nodes.Wolf3D_Hair.skeleton}
            />
            <skinnedMesh
                geometry={nodes.Wolf3D_Glasses.geometry}
                material={materials.Wolf3D_Glasses}
                skeleton={nodes.Wolf3D_Glasses.skeleton}
            />
            <skinnedMesh
                geometry={nodes.Wolf3D_Outfit_Top.geometry}
                material={materials.Wolf3D_Outfit_Top}
                skeleton={nodes.Wolf3D_Outfit_Top.skeleton}
            />
            <skinnedMesh
                geometry={nodes.Wolf3D_Outfit_Bottom.geometry}
                material={materials.Wolf3D_Outfit_Bottom}
                skeleton={nodes.Wolf3D_Outfit_Bottom.skeleton}
            />
            <skinnedMesh
                geometry={nodes.Wolf3D_Outfit_Footwear.geometry}
                material={materials.Wolf3D_Outfit_Footwear}
                skeleton={nodes.Wolf3D_Outfit_Footwear.skeleton}
            />
            <skinnedMesh
                geometry={nodes.Wolf3D_Body.geometry}
                material={materials.Wolf3D_Body}
                skeleton={nodes.Wolf3D_Body.skeleton}
            />
        </group>
    );
}

useGLTF.preload("models/66ae0f57c503a3da8b2c6034.glb");
