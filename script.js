import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.121.1/build/three.module.js';

import { GLTFLoader } from 'https://cdn.jsdelivr.net/npm/three@0.121.1/examples/jsm/loaders/GLTFLoader.js';
import { OrbitControls } from 'https://cdn.jsdelivr.net/npm/three@0.121.1/examples/jsm/controls/OrbitControls.js';


const renderer = new THREE.WebGLRenderer({ canvas: document.querySelector("canvas") });

// There's no reason to set the aspect here because we're going
// to set it every frame anyway so we'll set it to 2 since 2
// is the the aspect for the canvas default size (300w/150h = 2)
const camera = new THREE.PerspectiveCamera(70, 2, 1, 1000);
camera.position.z = 400;

const scene = new THREE.Scene();
scene.background = new THREE.Color(0x0a192f);



let video = document.getElementById('video');
let texture2 = new THREE.VideoTexture(video);
texture2.needsUpdate;
texture2.minFilter = THREE.LinearFilter;
texture2.magFilter = THREE.LinearFilter;

video.src = "assets/get-hyper.mp4";
video.load();
video.play();



const geometry = new THREE.PlaneGeometry(200, 200);
const material = new THREE.MeshBasicMaterial({

    shading: THREE.SmoothShading,
    map: texture2,
    side: THREE.DoubleSide,
    color: 0xffffff


});

const light = new THREE.AmbientLight(0xffffff); // soft white light
scene.add(light);

const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
scene.add(directionalLight);

directionalLight.position.set(0, 5, 10);

const controls = new OrbitControls(camera, renderer.domElement);
controls.screenSpacePanning = true;





const loader = new GLTFLoader();
loader.load('assets/logo2.glb', function(glb) {
    console.log(glb);
    const root = glb.scene;
    root.scale.set(0.1, 0.1, 0.1);
    scene.add(root);

});

renderer.render(scene, camera);

function resizeCanvasToDisplaySize() {
    const canvas = renderer.domElement;
    const width = canvas.clientWidth;
    const height = canvas.clientHeight;
    if (canvas.width !== width || canvas.height !== height) {
        // you must pass false here or three.js sadly fights the browser
        renderer.setSize(width, height, false);
        camera.aspect = width / height;
        camera.updateProjectionMatrix();

        // set render target sizes here
        controls.update();
    }
}


function animate(time) {
    time *= 0.001; // seconds

    resizeCanvasToDisplaySize();

    //mesh.rotation.x = time * 0.5;
    //mesh.rotation.y = time * 1;

    texture2.needsUpdate = true;

    renderer.render(scene, camera);
    requestAnimationFrame(animate);

    controls.update();
}

requestAnimationFrame(animate);