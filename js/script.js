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

// Meshes of components
let comp1Mesh, comp2Mesh, comp3Mesh, comp4Mesh, comp5Mesh, comp6Mesh, comp7Mesh, comp8Mesh, comp9Mesh;

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
        comp1Mesh = scene.children[7].children[43].children[48];

        // Testing material
        comp1Mesh.material = new THREE.MeshPhongMaterial({
            color: "red",
            emissive: 0x072534,
            side: THREE.DoubleSide,
            shading: THREE.FlatShading
        });

        // group_114 of blender
        comp2Mesh = scene.children[7].children[44].children[42];

        // Testing material
        comp2Mesh.material = new THREE.MeshPhongMaterial({
            color: "green",
            emissive: 0x072534,
            side: THREE.DoubleSide,
            shading: THREE.FlatShading
        });

        // group_300 of blender
        comp3Mesh = scene.children[7].children[578];

        // Testing material
        comp3Mesh.material = new THREE.MeshPhongMaterial({
            color: "blue",
            emissive: 0x072534,
            side: THREE.DoubleSide,
            shading: THREE.FlatShading
        });

        // group_17.02 (17002) of blender
        comp4Mesh = scene.children[7].children[458];

        // Testing material
        comp4Mesh.material = new THREE.MeshPhongMaterial({
            color: "yellow",
            emissive: 0x072534,
            side: THREE.DoubleSide,
            shading: THREE.FlatShading
        });

        // group_37 of blender
        comp5Mesh = scene.children[7].children[469];

        // Testing material
        comp5Mesh.material = new THREE.MeshPhongMaterial({
            color: "grey",
            emissive: 0x072534,
            side: THREE.DoubleSide,
            shading: THREE.FlatShading
        });

        // group_36 of blender
        comp6Mesh = scene.children[7].children[468];

        // Testing material
        comp6Mesh.material = new THREE.MeshPhongMaterial({
            color: "grey",
            emissive: 0x072534,
            side: THREE.DoubleSide,
            shading: THREE.FlatShading
        });

        // group_132 of blender
        comp7Mesh = scene.children[7].children[530];
        
        //Testing material
        comp7Mesh.material = new THREE.MeshPhongMaterial({
            color: "violet",
            emissive: 0x072534,
            side: THREE.DoubleSide,
            shading: THREE.FlatShading
        });

        // group_235 of blender
        comp8Mesh = scene.children[7].children[627];
        
        //Testing material
        comp8Mesh.material = new THREE.MeshPhongMaterial({
            color: "red",
            emissive: 0x072534,
            side: THREE.DoubleSide,
            shading: THREE.FlatShading
        });

        // group_228.01 (22801) of blender
        comp9Mesh = scene.children[7].children[619];
        
        //Testing material
        comp9Mesh.material = new THREE.MeshPhongMaterial({
            color: "blue",
            emissive: 0x072534,
            side: THREE.DoubleSide,
            shading: THREE.FlatShading
        });

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
