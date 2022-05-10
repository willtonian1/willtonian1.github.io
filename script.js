// The three.js scene: the 3D world where you put objects
import { OrbitControls } from 'https://cdn.skypack.dev/three@0.136.0/examples/jsm/controls/OrbitControls.js';

const scene = new THREE.Scene();

// The camera
const camera = new THREE.PerspectiveCamera(
    75,
    (window.innerWidth / 2) / window.innerHeight,
    1,
    1000
);


// The renderer: something that draws 3D objects onto the canvas
const renderer = new THREE.WebGLRenderer({
    antialias: true,
    canvas: document.querySelector('canvas')
});

renderer.setSize(innerWidth / 2, innerHeight)

// Append the renderer canvas into <body>
//document.body.appendChild(renderer.domElement);

const light = new THREE.DirectionalLight(0xFFFFFF, 0.3, )

light.position.set(0, 0, 1)
scene.add(light)


const color = 0xFFFFFF;
const intensity = 0.5;
const light2 = new THREE.AmbientLight(color, intensity);
scene.add(light2);

camera.position.z = 10



const controls = new OrbitControls(camera, renderer.domElement);
controls.screenSpacePanning = true;








//texture

var textureLoader2 = new THREE.TextureLoader();
const planeTexture2 = new textureLoader2.load("ocean.jpg")

//sphere time 

const geometry = new THREE.SphereGeometry(2, 32, 16);
const material = new THREE.MeshBasicMaterial({ color: 0xffffff, map: planeTexture2 });
const sphere = new THREE.Mesh(geometry, material);
scene.add(sphere);
sphere.position.set(0, 0, 3)

function animate() {

    requestAnimationFrame(animate)
    renderer.render(scene, camera)
    controls.update();

}

animate()
