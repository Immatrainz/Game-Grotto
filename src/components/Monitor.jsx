import React, { useEffect, useState } from "react";
import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { createRoot } from "react-dom/client";

const Monitor = () => {

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(50, window.innerWidth/window.innerHeight, 1, 1000);

    camera.position.z = 15;

    const canvas = document.getElementById('threeJSCanvas');
    const renderer = new THREE.WebGLRenderer({canvas, antialias:true});
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor( 0xffffff, 0);
    document.body.appendChild(renderer.domElement);

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.75);
    ambientLight.castShadow = true;
    scene.add(ambientLight);

    const spotLight = new THREE.SpotLight(0xffffff, 1);
    spotLight.castShadow = true;
    spotLight.position.set(10, 30, 0);
    scene.add(spotLight);

    let model;
    const loader = new GLTFLoader();
    loader.load('/computer2.glb', (gltf) => {
      model = gltf.scene;
      scene.add(gltf.scene);
    }, undefined, err => {console.log(err);});

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableZoom = false;
    controls.enableRotate = false;
    controls.enablePan = false;

    const animate = () => {
      controls.update();
      if (model) {
        model.rotation.y += 0.01;
      }
      renderer.render(scene, camera);
      window.requestAnimationFrame(animate);
    }
    animate();
  }, []);
  return (
    <div>
      <canvas id='threeJSCanvas'>
      </canvas>
    </div>
  )
}

export default Monitor;