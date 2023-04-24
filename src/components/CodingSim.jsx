import React, { useEffect, useState } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { createRoot } from "react-dom/client";

const CodingSim = () => {
  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      50,
      window.innerWidth / window.innerHeight,
      1,
      1000
    );

    camera.position.z = -10;
    camera.position.y = 2;

    const canvas = document.getElementById("threeJSCanvas");
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setClearColor(0xffffff, 0);
    document.body.appendChild(renderer.domElement);

    const ambientLight = new THREE.AmbientLight(0xffffff);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0xffffff, 1);
    camera.add(pointLight);
    scene.add(camera);

    const spotLight = new THREE.SpotLight(0xffffff, 1);
    spotLight.castShadow = true;
    spotLight.position.set(10, 30, 0);
    scene.add(spotLight);

    let macbook;
    const loader = new GLTFLoader();
    loader.load(
      "/MacBookPro_blend.glb",
      (gltf) => {
        macbook = gltf.scene;
        macbook.position.set(0, -2, 0);
        console.log(macbook);
        macbook.getObjectByName("Cube004").material.color.set("#000000");
        macbook.getObjectByName("Cube004_4").material.color.set("#ffffff");
        scene.add(gltf.scene);
      },
      undefined,
      (err) => {
        console.log(err);
      }
    );

    loader.load(
      "/Desk0.5.glb",
      (gltf) => {
        scene.add(gltf.scene);
        gltf.scene.scale.set(6, 6, 6);
        gltf.scene.position.set(-4, -3.5, -2);
        gltf.scene.getObjectByName("Desk").material.color.set("#331313");
      },
      undefined,
      (err) => {
        console.log(err);
      }
    );

    loader.load(
      "/Monitor.glb",
      (gltf) => {
        scene.add(gltf.scene);
        gltf.scene.scale.set(0.1, 0.1, 0.1);
        gltf.scene.position.set(4.5, -1.23, -1);
        gltf.scene.getObjectByName("Monitor").material.color.set("#cdb2db");
        gltf.scene.getObjectByName("Base").material.color.set("#443a4a");
        gltf.scene.rotateY(Math.PI / 1.6);
      },
      undefined,
      (err) => {
        console.log(err);
      }
    );

    const bgLoader = new THREE.TextureLoader();
    bgLoader.load(
      "https://images.unsplash.com/photo-1473893604213-3df9c15611c0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80",
      (texture) => {
        scene.background = texture;
      }
    );

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableZoom = false;
    controls.enableRotate = false;
    controls.enablePan = false;

    const animate = () => {
      // if (model) {
      //   model.rotation.y += 0.005;
      // }
      renderer.render(scene, camera);
      window.requestAnimationFrame(animate);
    };
    animate();
  }, []);
  return (
    <div>
      <canvas id="threeJSCanvas"></canvas>
    </div>
  );
};

export default CodingSim;
