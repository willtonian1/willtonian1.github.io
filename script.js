"use strict";


// The three.js scene: the 3D world where you put objects
import { OrbitControls } from 'https://cdn.skypack.dev/three@0.136.0/examples/jsm/controls/OrbitControls.js';




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

const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);




const geometry2 = new THREE.BoxGeometry(220, 10, 10);
const material2 = new THREE.MeshBasicMaterial({ color: 0x1f2aff });
const mesh2 = new THREE.Mesh(geometry2, material2);
scene.add(mesh2);
mesh2.position.set(0, 105, 0);


const mesh3 = new THREE.Mesh(geometry2, material2);
scene.add(mesh3);
mesh3.position.set(105, 0, 0);
mesh3.rotation.z = 1.5708;

const mesh4 = new THREE.Mesh(geometry2, material2);
scene.add(mesh4);
mesh4.position.set(-105, 0, 0);
mesh4.rotation.z = 1.5708;




const mesh5 = new THREE.Mesh(geometry2, material2);
scene.add(mesh5);
mesh5.position.set(0, -105, 0);



const geometry6 = new THREE.BoxGeometry(50, 10, 10);
const material6 = new THREE.MeshBasicMaterial({ color: 0x1f2aff });

const mesh6 = new THREE.Mesh(geometry6, material6);
scene.add(mesh6);
mesh6.position.set(-17, -125, 0);
mesh6.rotation.z = 1.5708 / 2;




const mesh7 = new THREE.Mesh(geometry6, material6);
scene.add(mesh7);
mesh7.position.set(17, -125, 0);
mesh7.rotation.z = -1.5708 / 2;





const geometry8 = new THREE.BoxGeometry(30, 70, 30);
const material8 = new THREE.MeshBasicMaterial({ color: 0x1f2aff });
const mesh8 = new THREE.Mesh(geometry8, material8);
scene.add(mesh8);
mesh8.position.set(145, -110, 5);


const geometry9 = new THREE.SphereGeometry(15, 32, 16);
const material9 = new THREE.MeshBasicMaterial({ color: 0x000000 });
const sphere = new THREE.Mesh(geometry9, material9);
scene.add(sphere);

sphere.position.set(145, -100, 10)




const geometry10 = new THREE.SphereGeometry(15, 32, 16);
const material10 = new THREE.MeshBasicMaterial({ color: 0x000000 });
const sphere2 = new THREE.Mesh(geometry10, material10);
scene.add(sphere2);

sphere2.position.set(145, -125, 10)









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