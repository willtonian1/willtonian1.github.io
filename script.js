import { GLTFLoader } from './GLTFLoader.js';
import { OrbitControls } from './OrbitControls.js';

const renderer = new THREE.WebGLRenderer({ canvas: document.querySelector("canvas") });

// There's no reason to set the aspect here because we're going
// to set it every frame anyway so we'll set it to 2 since 2
// is the the aspect for the canvas default size (300w/150h = 2)
const camera = new THREE.PerspectiveCamera(70, 2, 0.01, 1000);
camera.position.z = 0.12;

const scene = new THREE.Scene();
scene.background = new THREE.Color(0x0a192f);

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
loader2.load('assets/logo8.glb', function(gltf) {

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

    //root.rotation.y += 0.05;

    renderer.render(scene, camera);
    requestAnimationFrame(animate);

    controls.update();
}

requestAnimationFrame(animate);