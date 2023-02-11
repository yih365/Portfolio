import './style.css'
import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('#bg')
});

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);

camera.position.set( 1, 1, 20 );

renderer.render(scene, camera);

// ISSUE: object is not being loaded into canvas
/*
const loader = new GLTFLoader();
loader.load('./blender_models/book.glb', function(gltf) {
  gltf.scene.position.setX(0);
  gltf.scene.position.setY(0);
  gltf.scene.position.setZ(0);
  console.log('book is loaded');
  scene.add(gltf.scene);
  console.log('book is added');
});

const pointLight = new THREE.PointLight(0xffffff);
pointLight.position.set(5,5,5);
*/

const geometry = new THREE.TorusGeometry(10,3,16,100);
const material = new THREE.MeshBasicMaterial({color: 0xFF6347, wireframe: true});
const torus = new THREE.Mesh( geometry, material);

scene.add(torus);

function animate() {
  requestAnimationFrame( animate );
  renderer.render(scene, camera);
}

animate();
