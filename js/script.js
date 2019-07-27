/* Custom javascript for index.html */

// Canvas
const canvas = document.getElementById("mainCanvas");

// Camera
let camera;
camera = new THREE.PerspectiveCamera(75,window.innerWidth / window.innerHeight,0.1,100);
camera.position.set(0,0,10);

// Orbit Controls
let controls;
controls = new THREE.OrbitControls(camera, renderer.domElement);
controls.minDistance = 0;
controls.maxDistance = 100000;


// THREE.Scene
let scene;

// THREE.WebGLRenderer
let renderer;
renderer = new THREE.WebGLRenderer({antialias: true});
renderer.setClearColor("#A9A9A9");
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

document.addEventListener('resize', function(){
        renderer.setSize(window.innerWidth, window.innerHeight);
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
});

//GLTF loader
 var loader = new THREE.GLTFLoader();

    loader.load( '3DModels/IR1_COMPRESSOR_.gltf', function ( gltf ) {

        var compressor = gltf.scene;
        compressor.scale.set(1,1,1);
        var compressor_material = new THREE.MeshBasicMaterial({map: new THREE.TextureLoader().load("3DModel/Textures/Fencing_Diamond_Mesh.png"), side: THREE.DoubleSide});
        scene.add( compressor );
        render();

    }, undefined, function ( error ) {

        console.error( error );

    } );

//Lights
var spotLight = new THREE.SpotLight(0xFFFFFF,1);
spotLight.position.set(30,40,20);
scene.add(spotLight);

var spotLight1 = new THREE.SpotLight(0xFFFFFF,1);
spotLight1.position.set(-30,-40,-20);
scene.add(spotLight1);

var ambientLight = new THREE.AmbientLight(0xFFFFFF,0.4);
scene.add(ambientLight);

// init function loads the startup scripts on window load
function init() {
    // TODO
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
