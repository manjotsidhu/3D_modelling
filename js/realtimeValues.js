/* Gets realtime values from firebase and updates compUniforms */

// Initialize firebase using firebaseConfig
firebase.initializeApp(firebaseConfig);

// Get a reference to the database service
var database = firebase.database(); 

// Comp1 colors reference to database
var comp1Ref = firebase.database().ref("IR-Compressor/comp1");
comp1Ref.on("value", function(snapshot) {
    setCompValues(1, snapshot.val().value1, snapshot.val().value2);
}, function (error) {
    console.log("Error: " + error.code);
});

// Comp2 colors reference to database
var comp2Ref = firebase.database().ref("IR-Compressor/comp2");
comp2Ref.on("value", function(snapshot) {
    setCompValues(2, snapshot.val().value1, snapshot.val().value2);
}, function (error) {
    console.log("Error: " + error.code);
});

// Comp3 colors reference to database
var comp3Ref = firebase.database().ref("IR-Compressor/comp3");
comp3Ref.on("value", function(snapshot) {
    setCompValues(3, snapshot.val().value1, snapshot.val().value2);
}, function (error) {
    console.log("Error: " + error.code);
});

// Comp4 colors reference to database
var comp4Ref = firebase.database().ref("IR-Compressor/comp4");
comp4Ref.on("value", function(snapshot) {
    setCompValues(4, snapshot.val().value1, snapshot.val().value2);
}, function (error) {
    console.log("Error: " + error.code);
});

// Comp5 colors reference to database
var comp5Ref = firebase.database().ref("IR-Compressor/comp5");
comp5Ref.on("value", function(snapshot) {
    setCompValues(5, snapshot.val().value1, snapshot.val().value2);
}, function (error) {
    console.log("Error: " + error.code);
});

// Comp6 colors reference to database
var comp6Ref = firebase.database().ref("IR-Compressor/comp6");
comp6Ref.on("value", function(snapshot) {
    setCompValues(6, snapshot.val().value1, snapshot.val().value2);
}, function (error) {
    console.log("Error: " + error.code);
});

// Comp7 colors reference to database
var comp7Ref = firebase.database().ref("IR-Compressor/comp7");
comp7Ref.on("value", function(snapshot) {
    setCompValues(7, snapshot.val().value1, snapshot.val().value2);
}, function (error) {
    console.log("Error: " + error.code);
});

// Comp1 colors reference to database
var comp8Ref = firebase.database().ref("IR-Compressor/comp8");
comp8Ref.on("value", function(snapshot) {
    setCompValues(8, snapshot.val().value1, snapshot.val().value2);
}, function (error) {
    console.log("Error: " + error.code);
});

// Comp1 colors reference to database
var comp9Ref = firebase.database().ref("IR-Compressor/comp9");
comp9Ref.on("value", function(snapshot) {
    setCompValues(9, snapshot.val().value1, snapshot.val().value2);
}, function (error) {
    console.log("Error: " + error.code);
});