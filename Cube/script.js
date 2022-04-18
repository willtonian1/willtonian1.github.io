// The three.js scene: the 3D world where you put objects
import { OrbitControls } from 'https://cdn.skypack.dev/three@0.136.0/examples/jsm/controls/OrbitControls.js';

const scene = new THREE.Scene();

// The camera
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  1,
  1000
);


// The renderer: something that draws 3D objects onto the canvas
const renderer = new THREE.WebGLRenderer({ antialias: true });

renderer.setSize(innerWidth, innerHeight)

// Append the renderer canvas into <body>
document.body.appendChild(renderer.domElement);

const light = new THREE.DirectionalLight(0xFFFFFF, 1, )

light.position.set(0,0,1)
scene.add(light)

camera.position.z = 5

//plane time

const planeGeo = new THREE.PlaneGeometry(8,8,10,10)
const planeMat = new THREE.MeshPhongMaterial({
	color: 0xff00000,
	side: THREE.DoubleSide
})
const PlaneMesh = new THREE.Mesh(planeGeo, planeMat)
scene.add(PlaneMesh)


const controls = new OrbitControls(camera, renderer.domElement);
controls.screenSpacePanning = true;


function animate(){
	requestAnimationFrame(animate)
	renderer.render(scene, camera)
	  controls.update();
}

animate()
