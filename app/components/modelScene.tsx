"use client";
import React, { useRef, useEffect } from "react";
import { OBJLoader } from "three/addons/loaders/OBJLoader.js";
import { MTLLoader } from "three/addons/loaders/MTLLoader.js";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import * as THREE from "three";

const ThreeScene: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const width = 600 / 12;
    const height = 500 / 12;
    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(
      width / -2,
      width / 2,
      height / 2,
      height / -2,
      1,
      1000
    );
    camera.zoom = 1;
    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      precision: "highp",
      antialias: true,
    });
    renderer.setSize(600, 500);
    containerRef.current?.appendChild(renderer.domElement);
    camera.position.set(20, 20, 20);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableZoom = false;
    controls.minPolarAngle = 1;
    controls.maxPolarAngle = Math.PI - 1;
    controls.update();

    const models = new THREE.Group();

    const circleGeometry = new THREE.CircleGeometry(12, 32);
    const circleMaterial = new THREE.MeshBasicMaterial({ color: 0x000000 });
    const circle = new THREE.Mesh(circleGeometry, circleMaterial);
    circle.rotation.set(3.14 * 0.5, 0, 0);
    models.add(circle);

    const mtlLoader = new MTLLoader();
    mtlLoader.load("GamesAndCulture/GWD_Church.mtl", (materials) => {
      materials.preload();
      console.log(materials);
      const objLoader = new OBJLoader();
      objLoader.setMaterials(materials);
      objLoader.load(
        "GamesAndCulture/GWD_Church.obj",
        (object) => {
          object.castShadow = true;
          models.add(object);
        },
        (xhr) => {
          console.log((xhr.loaded / xhr.total) * 100 + "% loaded");
        },
        (error) => {
          console.log("An error happened");
        }
      );
    });

    models.position.set(0, -15, 0);
    scene.add(models);
    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    const light = new THREE.DirectionalLight(0xffffff, 2); // white ambient light
    light.position.set(-10, 50, 50);
    scene.add(light);

    const backLight = new THREE.DirectionalLight(0xffffff, 0.5); // white ambient light
    backLight.position.set(10, 50, -50);
    scene.add(backLight);

    // Add this function inside the useEffect hook
    const renderScene = () => {
      models.rotation.y += 0.005;
      cube.rotation.y += 0.01;

      renderer.render(scene, camera);
      requestAnimationFrame(renderScene);
    };

    // Call the renderScene function to start the animation loop
    renderScene();
  }, []);
  return <div ref={containerRef} />;
};
export default ThreeScene;
