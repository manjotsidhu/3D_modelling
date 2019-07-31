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

// Mouse, Intersected , Raycaster
var mouse = new THREE.Vector2(), INTERSECTED, raycaster;

// init function loads the startup scripts on window load
function init() {
    
    // Prespective Camera
	camera = new THREE.PerspectiveCamera(85, window.innerWidth / window.innerHeight, 0.1, 2000);
    camera.position.set( 3, 1.5, 0.5);
    
    // Initialize Scene
    scene = new THREE.Scene();

    // Initialize Renderer
    renderer = new THREE.WebGLRenderer({canvas, antialias: true});
	renderer.setClearColor("#A9A9A9");
	renderer.setSize(window.innerWidth, window.innerHeight);
	document.body.appendChild(renderer.domElement);

    // Initialize Orbit Controls
	controls = new THREE.OrbitControls(camera, renderer.domElement);
	controls.minDistance = 0;
	controls.maxDistance = 100000;

    // Spot Lights
    var spotLight = new THREE.SpotLight(0xFFFFFF,1);
    spotLight.position.set(30,40,20);
    scene.add(spotLight);

    var spotLight1 = new THREE.SpotLight(0xFFFFFF,1);
    spotLight1.position.set(-30,-40,-20);
    scene.add(spotLight1);

    // Ambient Lights
    var ambientLight = new THREE.AmbientLight(0xFFFFFF,0.4);
    scene.add(ambientLight);

    // Update camera and renderer whenever window is resized
	window.addEventListener('resize', function(){
		renderer.setSize(window.innerWidth, window.innerHeight);
		camera.aspect = window.innerWidth / window.innerHeight;
		camera.updateProjectionMatrix();
    });    

    // RayCaster for annotation
    raycaster = new THREE.Raycaster();
    document.addEventListener( 'mousedown', onDocumentMouseDown, false );

    // GLTF Loader
    var loader = new THREE.GLTFLoader();
    
    // Loading GLTF Scene
    loader.load( '../models/MODEL_IR_ORIGIN1.gltf', function ( gltf ) {

        const root = gltf.scene;
        scene.add(root);

        // group_90 of blender
        comp1Mesh = root.children[7].children[43].children[48];

        // Gradient Shader material
        comp1Mesh.material = new THREE.ShaderMaterial({
            uniforms: comp1Uniforms,
            fragmentShader: comp1FragmentShader(),
            vertexShader: compVertexShader()
        });

        // group_114 of blender
        comp2Mesh = root.children[7].children[44].children[42];

        // Gradient Shader material
        comp2Mesh.material = new THREE.ShaderMaterial({
            uniforms: comp2Uniforms,
            fragmentShader: comp2FragmentShader(),
            vertexShader: compVertexShader()
        });

        // group_300 of blender
        comp3Mesh = root.children[7].children[578];

        // Gradient Shader material
        comp3Mesh.material = new THREE.ShaderMaterial({
            uniforms: comp3Uniforms,
            fragmentShader: comp3FragmentShader(),
            vertexShader: compVertexShader()
        });

        // group_17.02 (17002) of blender
        comp4Mesh = root.children[7].children[458];

        // Gradient Shader material
        comp4Mesh.material = new THREE.ShaderMaterial({
            uniforms: comp4Uniforms,
            fragmentShader: comp4FragmentShader(),
            vertexShader: compVertexShader()
        });

        // group_37 of blender
        comp5Mesh = root.children[7].children[469];

        // Gradient Shader material
        comp5Mesh.material = new THREE.ShaderMaterial({
            uniforms: comp5Uniforms,
            fragmentShader: comp5FragmentShader(),
            vertexShader: compVertexShader()
        });

        // group_36 of blender
        comp6Mesh = root.children[7].children[468];

        // Gradient Shader material
        comp6Mesh.material = new THREE.ShaderMaterial({
            uniforms: comp6Uniforms,
            fragmentShader: comp6FragmentShader(),
            vertexShader: compVertexShader()
        });

        // group_132 of blender
        comp7Mesh = root.children[7].children[530];
        
        // Gradient Shader material
        comp7Mesh.material = new THREE.ShaderMaterial({
            uniforms: comp7Uniforms,
            fragmentShader: comp7FragmentShader(),
            vertexShader: compVertexShader()
        });

        // group_235 of blender
        comp8Mesh = root.children[7].children[627];
        
        // Gradient Shader material
        comp8Mesh.material = new THREE.ShaderMaterial({
            uniforms: comp8Uniforms,
            fragmentShader: comp8FragmentShader(),
            vertexShader: compVertexShader()
        });

        // group_228.01 (22801) of blender
        comp9Mesh = root.children[7].children[619];
        
        // Gradient Shader material
        comp9Mesh.material = new THREE.ShaderMaterial({
            uniforms: comp9Uniforms,
            fragmentShader: comp9FragmentShader(),
            vertexShader: compVertexShader()
        });

        render();

    }, undefined, function ( error ) {

        console.error( error );

    } );
    
    var axesHelper = new THREE.AxesHelper( 1000 );
    scene.add( axesHelper );
    
}

// animate function renders everytime the screen is refreshed to produce animation
function animate() {
    // TODO
    requestAnimationFrame( animate );
	controls.update();
	//annotation.hidden(false);
}

// render function will render THREE.js scene
function render() {
    // TODO
    requestAnimationFrame(render);
    renderer.render(scene, camera);
    updateScreenPosition();
}
