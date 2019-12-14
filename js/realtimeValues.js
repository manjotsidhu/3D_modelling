/* Gets realtime values from firebase and updates compUniforms */

// Initialize firebase using firebaseConfig
firebase.initializeApp(firebaseConfig);

// Get a reference to the database service
var database = firebase.database(); 

// Collection
var finalCol = -1;

// Get last known collection number
var comp1Ref = database.ref("/current");
    comp1Ref.on("value", function(snapshot) {

        finalCol = snapshot.val();
        updateValues(finalCol);
    }, function (error) {
        console.log("Error: " + error.code);
    });

//updateValues(finalCol);

function updateValues(col) {

    // Comp1 colors reference to database
    var comp1Ref = database.ref(col + "/comp1");
    comp1Ref.on("value", function(snapshot) {
        finalCol = col;
        setCompValues(1, snapshot.val().value1, snapshot.val().value2);
    }, function (error) {
        console.log("Error: " + error.code);
        updateValues(finalCol);
    });

    // Comp2 colors reference to database
    var comp2Ref = database.ref(col + "/comp2");
    comp2Ref.on("value", function(snapshot) {
        finalCol = col;
        setCompValues(2, snapshot.val().value1, snapshot.val().value2);
    }, function (error) {
        console.log("Error: " + error.code);
    });

    // Comp3 colors reference to database
    var comp3Ref = database.ref(col + "/comp3");
    comp3Ref.on("value", function(snapshot) {
        finalCol = col;
        setCompValues(3, snapshot.val().value1, snapshot.val().value2);
    }, function (error) {
        console.log("Error: " + error.code);
    });

    // Comp4 colors reference to database
    var comp4Ref = database.ref(col + "/comp3");
    comp4Ref.on("value", function(snapshot) {
        finalCol = col;
        setCompValues(4, snapshot.val().value1, snapshot.val().value2);
    }, function (error) {
        console.log("Error: " + error.code);
    });

    // Comp5 colors reference to database
    var comp5Ref = database.ref(col + "/comp4");
    comp5Ref.on("value", function(snapshot) {
        finalCol = col;
        setCompValues(5, snapshot.val().value1, snapshot.val().value2);
    }, function (error) {
        console.log("Error: " + error.code);
    });

    // Comp6 colors reference to database
    var comp6Ref = database.ref(col + "/comp5");
    comp6Ref.on("value", function(snapshot) {
        finalCol = col;
        setCompValues(6, snapshot.val().value1, snapshot.val().value2);
    }, function (error) {
        console.log("Error: " + error.code);
    });

    // Comp7 colors reference to database
    var comp7Ref = database.ref(col + "/comp6");
    comp7Ref.on("value", function(snapshot) {
        finalCol = col;
        setCompValues(7, snapshot.val().value1, snapshot.val().value2);
    }, function (error) {
        console.log("Error: " + error.code);
    });

    // Comp1 colors reference to database
    var comp8Ref = database.ref(col + "/comp7");
    comp8Ref.on("value", function(snapshot) {
        finalCol = col;
        setCompValues(8, snapshot.val().value1, snapshot.val().value2);
    }, function (error) {
        console.log("Error: " + error.code);
    });

    // Comp1 colors reference to database
    var comp9Ref = database.ref(col + "/comp8");
    comp9Ref.on("value", function(snapshot) {
        finalCol = col;
        setCompValues(9, snapshot.val().value1, snapshot.val().value2);
    }, function (error) {
        console.log("Error: " + error.code);
    });

    // Get Date and TIme
    var dateTime = database.ref(col + "/DT");
    dateTime.on("value", function(snapshot) {
        finalCol = col;
        // TODO: Put to css box
    }, function (error) {
        console.log("Error: " + error.code);
    });

}

function changeValues() {
    database.ref("/current").set(finalCol+1);
    database.ref(finalCol).set({
        comp1: getCompValues(1),
        comp2: getCompValues(2),
        comp3: getCompValues(3),
        comp4: getCompValues(4),
        comp5: getCompValues(5),
        comp6: getCompValues(6),
        comp7: getCompValues(7),
        comp8: getCompValues(8),
        comp9: getCompValues(9),
        DT: new Date().toLocaleString(),
      });

}