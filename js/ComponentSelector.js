// Mouse Down will enable click function
function onDocumentMouseDown( event ){

    event.preventDefault();

    mouse.x = ( event.clientX / window.innerWidth ) * 2 - 1;
	mouse.y = - ( event.clientY / window.innerHeight ) * 2 + 1;

	raycaster.setFromCamera( mouse, camera );

    var intersects = raycaster.intersectObjects( [comp1Mesh, comp2Mesh, comp3Mesh, comp4Mesh, comp5Mesh, comp6Mesh, comp7Mesh, comp8Mesh]);
    
    var color = (Math.random() * 0xffffff);

	if(intersects.length > 1) {
        var m = -1;
        switch (intersects[0].object) {
            case comp1Mesh : m = 0; break;
            case comp2Mesh : m = 1; break;
            case comp3Mesh : m = 2; break;
            case comp4Mesh : m = 3; break;
            case comp5Mesh : m = 4; break;
            case comp6Mesh : m = 5; break;
            case comp7Mesh : m = 6; break;
            case comp8Mesh : m = 7; break;
            case comp9Mesh : m = 8; break;
        }
        console.log(m);
        
        for (var i = 0; i < 2; i++) {
            var s = i+1;
            if (! i == m) {
                document.getElementById("anComp"+s).style.display = "none";
            } else
                document.getElementById("anComp"+s).style.display = "block";
        }
    }
}

function anComp1Update() {
    const vector = new THREE.Vector3(600, 400, 120);
    const canvas = renderer.domElement;

    vector.project(camera);

    vector.x = Math.round((0.5 + vector.x / 2) * (canvas.width / window.devicePixelRatio));
    vector.y = Math.round((0.5 - vector.y / 2) * (canvas.height / window.devicePixelRatio));

    document.getElementById("anComp1").style.top = `${vector.y}px`;
    document.getElementById("anComp1").style.left = `${vector.x}px`;
    //document.getElementById("anComp1").style.opacity = spriteBehindObject ? 0.25 : 1;
}

function anComp2Update() {
    const vector = new THREE.Vector3(600, 400, 120);
    const canvas = renderer.domElement;

    vector.project(camera);

    vector.x = Math.round((0.5 + vector.x / 2) * (canvas.width / window.devicePixelRatio));
    vector.y = Math.round((0.5 - vector.y / 2) * (canvas.height / window.devicePixelRatio));

    document.getElementById("anComp2").style.top = `${vector.y}px`;
    document.getElementById("anComp2").style.left = `${vector.x}px`;
    //document.getElementById("anComp2").style.opacity = spriteBehindObject ? 0.25 : 1;
}

function updateScreenPosition() {
    anComp1Update();
    anComp2Update();
}