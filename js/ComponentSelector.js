// Mouse Down will enable click function
function onDocumentMouseDown( event ){

    event.preventDefault();

    mouse.x = ( event.clientX / window.innerWidth ) * 2 - 1;
	mouse.y = - ( event.clientY / window.innerHeight ) * 2 + 1;

	raycaster.setFromCamera( mouse, camera );

    var intersects = raycaster.intersectObjects( comp1Mesh, comp2Mesh, comp3Mesh, comp4Mesh, comp5Mesh, comp6Mesh, comp7Mesh, comp8Mesh );
    
    var color = (Math.random() * 0xffffff);

	if(intersects.length > 1) {
        /////if (intersects[0].object == mesh1) {
            intersects[0].object.material.color.setHex( color );
            //mesh2.material.color.setHex(0x493ab4);
            //document.getElementById("cube").style.display = "block";
            //document.getElementById("pipe").style.display = "none";
        ////}
       //// else
        ////{
            intersects[0].object.material.color.setHex( color );
            //mesh1.material.color.setHex(0x493ab4);
            //document.getElementById("cube").style.display = "none";
            //document.getElementById("pipe").style.display = "block";
        ////}
	}
	else
	{
		//mesh2.material.color.setHex(0x493ab4);
		//mesh1.material.color.setHex(0x156289);
		//document.getElementById("cube").style.display = "none";
		//document.getElementById("pipe").style.display = "none";
	}
}