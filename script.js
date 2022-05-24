import { GLTFLoader } from './GLTFLoader.js';
import { OrbitControls } from './OrbitControls.js';

const renderer = new THREE.WebGLRenderer({ canvas: document.querySelector("canvas") });

// There's no reason to set the aspect here because we're going
// to set it every frame anyway so we'll set it to 2 since 2
// is the the aspect for the canvas default size (300w/150h = 2)
const camera = new THREE.PerspectiveCamera(70, 2, 1, 0.01);
camera.position.z = 1;

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








const loader2 = new GLTFLoader();
loader2.load('logo2.glb', function(gltf) {
    console.log(gltf);
    const root2 = gltf.scene;
    root2.scale.set(0.5, 0.5, 0.5);
    scene.add(root2);


    root2.traverse(function(obj) { obj.frustumCulled = false; });
    root2.frustumCulled = false

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

    //root2.rotation.x = time * 0.5;

    //mesh.rotation.x = time * 0.5;
    //mesh.rotation.y = time * 1;

    texture2.needsUpdate = true;

    renderer.render(scene, camera);
    requestAnimationFrame(animate);

    controls.update();
}

requestAnimationFrame(animate);