import { useGLTF, useTexture } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { animate, useMotionValue } from "framer-motion";
import { motion } from "framer-motion-3d";
import React, { useEffect } from "react";

import * as THREE from "three";

export function MyOffice(props) {
    const { section } = props;
    const { nodes, materials } = useGLTF("models/newRoom.glb");
    const texture = useTexture("textures/baked.jpg");
    texture.flipY = false;
    texture.encoding = THREE.sRGBEncoding;

    const textureMaterial = new THREE.MeshStandardMaterial({
        map: texture,
        transparent: true,
        opacity: 1,
    });

    const textureGlassMaterial = new THREE.MeshStandardMaterial({
        map: texture,
        transparent: true,
        opacity: 0.42,
    });

    const textureOpacity = useMotionValue(0);
    const glassTextureOpacity = useMotionValue(0);

    useEffect(() => {
        animate(textureOpacity, section === 0 ? 1 : 0);
        animate(glassTextureOpacity, section === 0 ? 0.42 : 0);
    }, [section]);

    useFrame(() => {
        textureMaterial.opacity = textureOpacity.get();
        textureGlassMaterial.opacity = glassTextureOpacity.get();
    });

    return (
        <group {...props} dispose={null}>
            <group
                name='Desk'
                position={[-0.07, 0, -1.52]}
                rotation={[0, -Math.PI / 2, 0]}
            >
                <mesh
                    name='Plane001_Plane002_BlackWood001'
                    geometry={nodes.Plane001_Plane002_BlackWood001.geometry}
                    material={textureMaterial}
                />
                <mesh
                    name='Plane001_Plane002_BlackWood001_1'
                    geometry={nodes.Plane001_Plane002_BlackWood001_1.geometry}
                    material={textureMaterial}
                />
                <mesh
                    name='Plane001_Plane002_BlackWood001_2'
                    geometry={nodes.Plane001_Plane002_BlackWood001_2.geometry}
                    material={textureMaterial}
                />
                <mesh
                    name='Plane001_Plane002_BlackWood001_3'
                    geometry={nodes.Plane001_Plane002_BlackWood001_3.geometry}
                    material={textureMaterial}
                />
                <mesh
                    name='Plane001_Plane002_BlackWood001_4'
                    geometry={nodes.Plane001_Plane002_BlackWood001_4.geometry}
                    material={textureMaterial}
                />
            </group>

            <group name='SM_ShelfSM_Shelf1' position={[-0.87, 1.69, -2.04]}>
                <mesh
                    name='SM_ShelfSM_Shelf1_1'
                    geometry={nodes.SM_ShelfSM_Shelf1_1.geometry}
                    material={textureMaterial}
                />
                <mesh
                    name='SM_ShelfSM_Shelf1_1_1'
                    geometry={nodes.SM_ShelfSM_Shelf1_1_1.geometry}
                    material={textureMaterial}
                />
            </group>

            <motion.group
                scale={[0, 0, 0]}
                animate={{
                    scale: section === 0 ? 1 : 0,
                }}
                name='LavaLamp'
                position={[-1.3, 2.07, -1.99]}
            >
                <mesh
                    name='Node-Mesh001'
                    geometry={nodes["Node-Mesh001"].geometry}
                    material={textureMaterial}
                />
                <mesh
                    name='Node-Mesh001_1'
                    geometry={nodes["Node-Mesh001_1"].geometry}
                    material={textureMaterial}
                />
                <mesh
                    name='Node-Mesh001_2'
                    geometry={nodes["Node-Mesh001_2"].geometry}
                    material={textureMaterial}
                />
            </motion.group>
            <motion.mesh
                scale={[0, 0, 0]}
                animate={{
                    scale: section === 0 ? 1 : 0,
                }}
                name='WawaRug'
                geometry={nodes.WawaRug.geometry}
                material={textureMaterial}
                position={[-0.28, 0.01, 0.76]}
            />

            {/* <group
                name='keyboard'
                position={[-0.04, 0.98, -1.35]}
                rotation={[0, -0.17, 0]}
            >
                <mesh
                    name='mesh425587018'
                    geometry={nodes.mesh425587018.geometry}
                    material={textureMaterial}
                />
                <mesh
                    name='mesh425587018_1'
                    geometry={nodes.mesh425587018_1.geometry}
                    material={textureMaterial}
                />
                <mesh
                    name='mesh425587018_2'
                    geometry={nodes.mesh425587018_2.geometry}
                    material={textureMaterial}
                />
                <mesh
                    name='mesh425587018_3'
                    geometry={nodes.mesh425587018_3.geometry}
                    material={textureMaterial}
                />
            </group> */}
            <group
                name='keyboard'
                position={[-0.053, 0.981, -1.316]}
                rotation={[0.106, -0.208, -0.069]}
                scale={0.647}
            >
                <mesh
                    name='mesh425587018'
                    geometry={nodes.mesh425587018.geometry}
                    material={textureMaterial}
                />
                <mesh
                    name='mesh425587018_1'
                    geometry={nodes.mesh425587018_1.geometry}
                    material={textureMaterial}
                />
                <mesh
                    name='mesh425587018_2'
                    geometry={nodes.mesh425587018_2.geometry}
                    material={textureMaterial}
                />
                <mesh
                    name='mesh425587018_3'
                    geometry={nodes.mesh425587018_3.geometry}
                    material={textureMaterial}
                />
            </group>

            <motion.group
                scale={[0, 0, 0]}
                animate={{
                    scale: section === 0 ? 1 : 0,
                }}
                name='iMac'
                position={[0.45, 0.94, -1.72]}
                rotation={[Math.PI, -1.1, Math.PI]}
            >
                <mesh
                    name='iMac_1'
                    geometry={nodes.iMac_1.geometry}
                    material={textureMaterial}
                />
                <mesh
                    name='iMac_1_1'
                    geometry={nodes.iMac_1_1.geometry}
                    material={textureMaterial}
                />
                <mesh
                    name='iMac_1_2'
                    geometry={nodes.iMac_1_2.geometry}
                    material={textureMaterial}
                />
            </motion.group>

            {/* <mesh
                name='Comp_Mouse'
                geometry={nodes.Comp_Mouse.geometry}
                material={textureMaterial}
            /> */}
            <mesh
                name='Comp_Mouse'
                geometry={nodes.Comp_Mouse.geometry}
                material={textureMaterial}
                position={[-0.137, 0.204, -0.251]}
                scale={0.79}
            />

            <motion.group
                scale={[0, 0, 0]}
                animate={{
                    scale: section === 0 ? 1 : 0,
                }}
                name='plant'
                position={[-0.78, 1.07, -1.61]}
            >
                <mesh
                    name='mesh24448074'
                    geometry={nodes.mesh24448074.geometry}
                    material={textureMaterial}
                />
                <mesh
                    name='mesh24448074_1'
                    geometry={nodes.mesh24448074_1.geometry}
                    material={textureMaterial}
                />
                <mesh
                    name='mesh24448074_2'
                    geometry={nodes.mesh24448074_2.geometry}
                    material={textureMaterial}
                />
            </motion.group>

            {/* <motion.group
                scale={[0, 0, 0]}
                animate={{
                    scale: section === 0 ? 1 : 0,
                }}
                name='Chair'
                position={[-0.28, 0, -0.71]}
                rotation={[0, -0.38, 0]}
            >
                <mesh
                    name='Node-Mesh'
                    geometry={nodes["Node-Mesh"].geometry}
                    material={textureMaterial}
                />
                <mesh
                    name='Node-Mesh_1'
                    geometry={nodes["Node-Mesh_1"].geometry}
                    material={textureMaterial}
                />
            </motion.group> */}
            <motion.group
                name='Chair'
                position={[-0.278, -0.031, -0.708]}
                rotation={[0, -0.376, 0]}
                // scale={[0.906, 1.04, 0.906]}
                scale={[0, 0, 0]}
                animate={{
                    scale: section === 0 ? 0.999 : 0,
                }}
            >
                <mesh
                    name='Node-Mesh'
                    geometry={nodes["Node-Mesh"].geometry}
                    material={textureMaterial}
                />
                <mesh
                    name='Node-Mesh_1'
                    geometry={nodes["Node-Mesh_1"].geometry}
                    material={textureMaterial}
                />
            </motion.group>
            {/*  */}
            <motion.group
                scale={0}
                animate={{
                    scale: section === 0 ? 1 : 0,
                }}
                position={[-2.497, 1.025, -1.063]}
                rotation={[0, 1.571, 0]}
            >
                <mesh
                    geometry={nodes.Houseplant_7001.geometry}
                    material={materials["mat14.001"]}
                />
                <mesh
                    geometry={nodes.Houseplant_7001_1.geometry}
                    material={materials.mat20}
                />
                <mesh
                    geometry={nodes.Houseplant_7001_2.geometry}
                    material={materials["mat13.001"]}
                />
                <mesh
                    geometry={nodes.Houseplant_7001_3.geometry}
                    material={materials["mat11.001"]}
                />
                <mesh
                    geometry={nodes.Houseplant_7001_4.geometry}
                    material={materials.mat9}
                />
                <mesh
                    geometry={nodes.Houseplant_7001_5.geometry}
                    material={materials.mat10}
                />
                <mesh
                    geometry={nodes.Houseplant_7001_6.geometry}
                    material={materials.mat8}
                />
                <mesh
                    geometry={nodes.Houseplant_7001_7.geometry}
                    material={materials.mat0}
                />
                <mesh
                    geometry={nodes.Houseplant_7001_8.geometry}
                    material={materials.mat12}
                />
                <mesh
                    geometry={nodes.Houseplant_7001_9.geometry}
                    material={textureMaterial}
                />
                <mesh
                    geometry={nodes.Houseplant_7001_10.geometry}
                    material={textureMaterial}
                />
                <mesh
                    geometry={nodes.Houseplant_7001_11.geometry}
                    material={materials.mat22}
                />
                <mesh
                    geometry={nodes.Houseplant_7001_12.geometry}
                    material={materials.mat15}
                />
                <mesh
                    geometry={nodes.Houseplant_7001_13.geometry}
                    material={materials.mat23}
                />
                <mesh
                    geometry={nodes.Houseplant_7001_14.geometry}
                    material={materials.mat16}
                />
                <mesh
                    geometry={nodes.Houseplant_7001_15.geometry}
                    material={materials.mat3}
                />
                <mesh
                    geometry={nodes.Houseplant_7001_16.geometry}
                    material={materials.mat17}
                />
                <mesh
                    geometry={nodes.Houseplant_7001_17.geometry}
                    material={materials.mat5}
                />
                <mesh
                    geometry={nodes.Houseplant_7001_18.geometry}
                    material={materials.mat6}
                />
            </motion.group>

            <motion.group
                animate={{
                    scale: section === 0 ? 0.161 : 0,
                }}
                position={[-0.145, 0.98, -1.854]}
                scale={0}
            >
                <mesh
                    geometry={nodes.Laptop_1.geometry}
                    material={materials["mat16.002"]}
                    // material={textureMaterial}
                />
                <mesh
                    geometry={nodes.Laptop_2.geometry}
                    material={materials["mat23.002"]}
                    // material={textureMaterial}
                />
                <mesh
                    geometry={nodes.Laptop_3.geometry}
                    // material={materials["mat17.001"]}
                    material={textureMaterial}
                />
                <mesh
                    geometry={nodes.Laptop_4.geometry}
                    // material={materials["mat15.001"]}
                    material={textureMaterial}
                />
                <mesh
                    geometry={nodes.Laptop_5.geometry}
                    // material={materials.mat25}
                    material={textureMaterial}
                />
            </motion.group>
            <motion.mesh
                geometry={nodes.polySurface5.geometry}
                material={materials.blinn5SG}
                position={[-0.463, 1.978, -1.858]}
                rotation={[Math.PI / 2, 0, 1.5]}
                scale={-0.00001}
                animate={{
                    scale: section === 0 ? -0.001 : 0,
                }}
            />

            <mesh
                geometry={nodes.Plane001.geometry}
                material={textureMaterial}
            />
            <mesh
                geometry={nodes.Plane001_1.geometry}
                material={textureMaterial}
            />
            <mesh
                geometry={nodes.Plane001_2.geometry}
                material={textureMaterial}
            />
            <mesh
                geometry={nodes.Plane001_3.geometry}
                material={textureGlassMaterial}
            />
        </group>
    );
}

useGLTF.preload("models/newRoom.glb");
