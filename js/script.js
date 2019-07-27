/* Custom javascript for index.html */

// Canvas
const canvas = document.getElementById("mainCanvas");

// Camera
let camera;

// Orbit Controls
let controls;

// THREE.Scene
let scene;

// THREE.WebGLRenderer
let renderer;

// Top Cylinder Mesh
let topCylinderMesh;
 
// Left Cylinder Mesh
let leftCylinderMesh;

// Right Cylinder Mesh
let rightCylinderMesh;

// init function loads the startup scripts on window load
function init() {
	camera = new THREE.PerspectiveCamera(85, window.innerWidth / window.innerHeight, 0.1, 2000);
	camera.position.set( 3, 1.5, 0.5);

    renderer = new THREE.WebGLRenderer({canvas,
		antialias: true});
	renderer.setClearColor("#A9A9A9");
	renderer.setSize(window.innerWidth, window.innerHeight);
	document.body.appendChild(renderer.domElement);

	controls = new THREE.OrbitControls(camera, renderer.domElement);
	controls.minDistance = 0;
	controls.maxDistance = 100000;

	document.addEventListener('resize', function(){
			renderer.setSize(window.innerWidth, window.innerHeight);
			camera.aspect = window.innerWidth / window.innerHeight;
			camera.updateProjectionMatrix();
	});

	var loader = new THREE.GLTFLoader();

    loader.load( '../models/MODEL_IR_ORIGIN1.gltf', function ( gltf ) {

        scene = gltf.scene;

        // group_90 of blender
        topCylinderMesh = scene.children[7].children[43].children[48];

        // Testing material for top cylinder
        topCylinderMeshMaterial = new THREE.MeshPhongMaterial({
            color: "red",
            emissive: 0x072534,
            side: THREE.DoubleSide,
            shading: THREE.FlatShading
        });
        topCylinderMesh.material = topCylinderMeshMaterial;

        // group_114 of blender
        leftCylinderMesh = scene.children[7].children[44].children[42];

        // Testing material for top cylinder
        leftCylinderMeshMaterial = new THREE.MeshPhongMaterial({
            color: "green",
            emissive: 0x072534,
            side: THREE.DoubleSide,
            shading: THREE.FlatShading
        });
        leftCylinderMesh.material = leftCylinderMeshMaterial;

        // group_300 of blender
        rightCylinderMesh = scene.children[7].children[578];

        // Testing material for top cylinder
        rightCylinderMeshMaterial = new THREE.MeshPhongMaterial({
            color: "blue",
            emissive: 0x072534,
            side: THREE.DoubleSide,
            shading: THREE.FlatShading
        });
        rightCylinderMesh.material = rightCylinderMeshMaterial;

        var spotLight = new THREE.SpotLight(0xFFFFFF,1);
        spotLight.position.set(30,40,20);
        scene.add(spotLight);

        var spotLight1 = new THREE.SpotLight(0xFFFFFF,1);
        spotLight1.position.set(-30,-40,-20);
        scene.add(spotLight1);

        var ambientLight = new THREE.AmbientLight(0xFFFFFF,0.4);
        scene.add(ambientLight);

        render();

    }, undefined, function ( error ) {

        console.error( error );

    } );	
}

// animate function renders everytime the screen is refreshed to produce animation
function animate() {
    // TODO
}

// render function will render THREE.js scene
function render() {
    // TODO
    requestAnimationFrame(render);
    renderer.render(scene, camera);
}
