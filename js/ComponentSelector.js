// Mouse Down will enable click function
function onDocumentMouseDown( event ){

    event.preventDefault();

    mouse.x = ( event.clientX / window.innerWidth ) * 2 - 1;
	mouse.y = - ( event.clientY / window.innerHeight ) * 2 + 1;

	raycaster.setFromCamera( mouse, camera );

    var intersects = raycaster.intersectObjects( [comp1Mesh, comp2Mesh, comp3Mesh, comp4Mesh, comp5Mesh, comp6Mesh, comp7Mesh, comp8Mesh, comp9Mesh]);

	if(intersects.length > 1) {
        var m = -1;
        switch (intersects[0].object) {
            case comp1Mesh : m = 1; break;
            case comp2Mesh : m = 2; break;
            case comp3Mesh : m = 3; break;
            case comp4Mesh : m = 4; break;
            case comp5Mesh : m = 5; break;
            case comp6Mesh : m = 6; break;
            case comp7Mesh : m = 7; break;
            case comp8Mesh : m = 8; break;
            case comp9Mesh : m = 9; break;
        }
        console.log(m);
        
        for (var i = 1; i <= 9; i++) {
            if (i == m) 
                document.getElementById("anComp"+i).style.display = "block";
            else
                document.getElementById("anComp"+i).style.display = "none";
        }
    }
    else
    {
        for(var i=1; i<=9; i++){
            document.getElementById("anComp"+i).style.display = "none";
        }
    }
}

function anComp1Update() {
    const vector = new THREE.Vector3(0.5, 1.7, -2.0);
    const canvas = renderer.domElement;

    vector.project(camera);

    vector.x = Math.round((0.5 + vector.x / 2) * (canvas.width / window.devicePixelRatio));
    vector.y = Math.round((0.5 - vector.y / 2) * (canvas.height / window.devicePixelRatio));

    document.getElementById("anComp1").style.top = `${vector.y}px`;
    document.getElementById("anComp1").style.left = `${vector.x}px`;
    //document.getElementById("anComp1").style.opacity = spriteBehindObject ? 0.25 : 1;
}

function anComp2Update() {
    const vector = new THREE.Vector3(0.2, -0.25, -1.5);
    const canvas = renderer.domElement;

    vector.project(camera);

    vector.x = Math.round((0.5 + vector.x / 2) * (canvas.width / window.devicePixelRatio));
    vector.y = Math.round((0.5 - vector.y / 2) * (canvas.height / window.devicePixelRatio));

    document.getElementById("anComp2").style.top = `${vector.y}px`;
    document.getElementById("anComp2").style.left = `${vector.x}px`;
    //document.getElementById("anComp2").style.opacity = spriteBehindObject ? 0.25 : 1;
}

function anComp3Update() {
    const vector = new THREE.Vector3(-0.2, -0.2, -0.85);
    const canvas = renderer.domElement;

    vector.project(camera);

    vector.x = Math.round((0.5 + vector.x / 2) * (canvas.width / window.devicePixelRatio));
    vector.y = Math.round((0.5 - vector.y / 2) * (canvas.height / window.devicePixelRatio));

    document.getElementById("anComp3").style.top = `${vector.y}px`;
    document.getElementById("anComp3").style.left = `${vector.x}px`;
    //document.getElementById("anCom3").style.opacity = spriteBehindObject ? 0.25 : 1;
}

function anComp4Update() {
    const vector = new THREE.Vector3(0, 0.25, 2.2);
    const canvas = renderer.domElement;

    vector.project(camera);

    vector.x = Math.round((0.5 + vector.x / 2) * (canvas.width / window.devicePixelRatio));
    vector.y = Math.round((0.5 - vector.y / 2) * (canvas.height / window.devicePixelRatio));

    document.getElementById("anComp4").style.top = `${vector.y}px`;
    document.getElementById("anComp4").style.left = `${vector.x}px`;
    //document.getElementById("anComp4").style.opacity = spriteBehindObject ? 0.25 : 1;
}

function anComp5Update() {
    const vector = new THREE.Vector3(0, 2, 1.2);
    const canvas = renderer.domElement;

    vector.project(camera);

    vector.x = Math.round((0.5 + vector.x / 2) * (canvas.width / window.devicePixelRatio));
    vector.y = Math.round((0.5 - vector.y / 2) * (canvas.height / window.devicePixelRatio));

    document.getElementById("anComp5").style.top = `${vector.y}px`;
    document.getElementById("anComp5").style.left = `${vector.x}px`;
    //document.getElementById("anComp5").style.opacity = spriteBehindObject ? 0.25 : 1;
}

function anComp6Update() {
    const vector = new THREE.Vector3(0, 2, 1.6);
    const canvas = renderer.domElement;

    vector.project(camera);

    vector.x = Math.round((0.5 + vector.x / 2) * (canvas.width / window.devicePixelRatio));
    vector.y = Math.round((0.5 - vector.y / 2) * (canvas.height / window.devicePixelRatio));

    document.getElementById("anComp6").style.top = `${vector.y}px`;
    document.getElementById("anComp6").style.left = `${vector.x}px`;
    //document.getElementById("anComp2").style.opacity = spriteBehindObject ? 0.25 : 1;
}

function anComp7Update() {
    const vector = new THREE.Vector3(0, 2.2, 0);
    const canvas = renderer.domElement;

    vector.project(camera);

    vector.x = Math.round((0.5 + vector.x / 2) * (canvas.width / window.devicePixelRatio));
    vector.y = Math.round((0.5 - vector.y / 2) * (canvas.height / window.devicePixelRatio));

    document.getElementById("anComp7").style.top = `${vector.y}px`;
    document.getElementById("anComp7").style.left = `${vector.x}px`;
    //document.getElementById("anComp2").style.opacity = spriteBehindObject ? 0.25 : 1;
}

function anComp8Update() {
    const vector = new THREE.Vector3(-1, 0.4, -1.8);
    const canvas = renderer.domElement;

    vector.project(camera);

    vector.x = Math.round((0.5 + vector.x / 2) * (canvas.width / window.devicePixelRatio));
    vector.y = Math.round((0.5 - vector.y / 2) * (canvas.height / window.devicePixelRatio));

    document.getElementById("anComp8").style.top = `${vector.y}px`;
    document.getElementById("anComp8").style.left = `${vector.x}px`;
    //document.getElementById("anComp2").style.opacity = spriteBehindObject ? 0.25 : 1;
}

function anComp9Update() {
    const vector = new THREE.Vector3(-1, 0, 0.45);
    const canvas = renderer.domElement;

    vector.project(camera);

    vector.x = Math.round((0.5 + vector.x / 2) * (canvas.width / window.devicePixelRatio));
    vector.y = Math.round((0.5 - vector.y / 2) * (canvas.height / window.devicePixelRatio));

    document.getElementById("anComp9").style.top = `${vector.y}px`;
    document.getElementById("anComp9").style.left = `${vector.x}px`;
    //document.getElementById("anComp2").style.opacity = spriteBehindObject ? 0.25 : 1;
}

function updateScreenPosition() {
    anComp1Update();
    anComp2Update();
    anComp3Update();
    anComp4Update();
    anComp5Update();
    anComp6Update();
    anComp7Update();
    anComp8Update();
    anComp9Update();
}

// Sets value of annotations by passing component number, left end temp and right end temp
function setAnnotationValues(compNo, lT, rT) {
    document.getElementById("anComp" + compNo + "LT").textContent = lT;
    document.getElementById("anComp" + compNo + "RT").textContent = rT;
}