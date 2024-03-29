import { GLTFLoader } from './GLTFLoader.js';
import { OrbitControls } from './OrbitControls.js';

const renderer = new THREE.WebGLRenderer({ canvas: document.getElementById("c") });


const camera = new THREE.PerspectiveCamera(70, 2, 0.01, 1000);
camera.position.z = 0.09;

const scene = new THREE.Scene();
scene.background = new THREE.Color(0x161617);
//scene.background = new THREE.Color(0x000000);

const light = new THREE.AmbientLight(0xffffff); // soft white light
scene.add(light);

const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
scene.add(directionalLight);

directionalLight.position.set(0, 5, 10);

const controls = new OrbitControls(camera, renderer.domElement);
controls.screenSpacePanning = true;



var root
    //LOADING £D LOGO MODEL 
const loader2 = new GLTFLoader();
loader2.load('assets/logo11.glb', function(gltf) {

    gltf.scene.scale.set(1, 1, 1);
    scene.add(gltf.scene);
    root = gltf.scene

    gltf.scene.traverse(function(object) {

        object.frustumCulled = false;

    });


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

    if (root) root.rotation.y -= 0.03


    renderer.render(scene, camera);
    requestAnimationFrame(animate);

    controls.update();



}

requestAnimationFrame(animate);


let current_slide = 0

document.getElementById("prev").addEventListener("click", previous);
document.getElementById("next").addEventListener("click", next);

var element1 = document.getElementById("selection1")
var element2 = document.getElementById("selection2")

function previous() {
    current_slide = current_slide - 1
    console.log(current_slide)


    if (current_slide === 0) {
        element1.style.display = "block";
        element2.style.display = "none";

    }

    if (current_slide === 1) {
        element1.style.display = "none";
        element2.style.display = "block";

    }
    if (current_slide > 1) {
        current_slide = current_slide - 1
        element1.style.display = "none";
        element2.style.display = "block";
    }

    if (current_slide < 0) {
        element1.style.display = "block";
        element2.style.display = "none";
        current_slide = current_slide + 1
    }






}

function next() {

    current_slide = current_slide + 1
    console.log(current_slide)


    if (current_slide === 0) {
        element1.style.display = "block";
        element2.style.display = "none";

    }

    if (current_slide === 1) {
        element1.style.display = "none";
        element2.style.display = "block";

    }

    if (current_slide > 1) {
        current_slide = current_slide - 1
        element1.style.display = "none";
        element2.style.display = "block";
    }

    if (current_slide < 0) {
        element1.style.display = "block";
        element2.style.display = "none";
        current_slide = current_slide + 1
    }
}