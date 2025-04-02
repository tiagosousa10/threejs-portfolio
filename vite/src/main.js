import * as THREE from 'three';

const canvas = document.getElementById('canvas')

//1. Create a scene
const scene = new THREE.Scene();
scene.background = new THREE.Color('#F0F0F0')

//2. Create a camera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
camera.position.z=5;

//3. object
