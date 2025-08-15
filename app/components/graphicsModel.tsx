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
    controls.rotateSpeed = 0.5;
    controls.update();

    const models = new THREE.Group();
    const loader = new THREE.TextureLoader();

    const planeGeometry = new THREE.PlaneGeometry(5, 5);
    const planeMaterial = new THREE.MeshPhongMaterial({
      color: 0xefefef,
      specular: 0x222222,
      shininess: 35,
      map: loader.load("GraphicsProg/patterned_concrete_wall_diff_4k.png"),
      normalMap: loader.load(
        "GraphicsProg/patterned_concrete_wall_nor_gl_4k.png"
      ),
      side: THREE.DoubleSide,
    });

    const plane = new THREE.Mesh(planeGeometry, planeMaterial);
    plane.rotation.set(3.14 * -0.5, 0, 0);
    plane.position.set(0, -1.15, 0);
    models.add(plane);

    const mtlLoader = new MTLLoader();
    mtlLoader.load("GraphicsProg/Chest.mtl", (materials) => {
      materials.side = THREE.DoubleSide;
      materials.preload();
      console.log(materials);
      const objLoader = new OBJLoader();
      objLoader.setMaterials(materials);
      objLoader.load(
        "GraphicsProg/Chest.obj",
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

    mtlLoader.load("GraphicsProg/coffee.mtl", (materials) => {
      materials.side = THREE.DoubleSide;
      materials.preload();
      console.log(materials);
      const objLoader = new OBJLoader();
      objLoader.setMaterials(materials);
      objLoader.load(
        "GraphicsProg/coffee.obj",
        (object) => {
          object.castShadow = true;
          object.position.set(2.2, -1, 2.2);
          object.scale.set(0.9, 0.9, 0.9);

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

    models.position.set(0, 0, 0);
    models.scale.set(5, 5, 5);
    scene.add(models);

    const light = new THREE.DirectionalLight(0xffffff, 2); // white ambient light
    light.position.set(-10, 50, 50);
    scene.add(light);

    const backLight = new THREE.DirectionalLight(0xffffff, 0.5); // white ambient light
    backLight.position.set(10, 50, -50);
    scene.add(backLight);

    // Add this function inside the useEffect hook
    const renderScene = () => {
      models.rotation.y += 0.0025;
      //plane.rotation += 0.005;

      renderer.render(scene, camera);
      requestAnimationFrame(renderScene);
    };

    // Call the renderScene function to start the animation loop
    renderScene();
  }, []);
  return <div ref={containerRef} />;
};
export default ThreeScene;
