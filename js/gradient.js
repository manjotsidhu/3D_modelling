/* Contains implementation of gradient properties to components */

var comp1Uniforms = {
    colorA: {type: 'vec3', value: new THREE.Color("#0000FF")},
    colorB: {type: 'vec3', value: new THREE.Color("#FF0000")}
};

var comp2Uniforms = {
    colorA: {type: 'vec3', value: new THREE.Color("#0000FF")},
    colorB: {type: 'vec3', value: new THREE.Color("#FF0000")},
};

var comp3Uniforms = {
    colorA: {type: 'vec3', value: new THREE.Color("#0000FF")},
    colorB: {type: 'vec3', value: new THREE.Color("#FF0000")},
};

var comp4Uniforms = {
    colorA: {type: 'vec3', value: new THREE.Color("#0000FF")},
    colorB: {type: 'vec3', value: new THREE.Color("#FF0000")},
};

var comp5Uniforms = {
    colorA: {type: 'vec3', value: new THREE.Color("#0000FF")},
    colorB: {type: 'vec3', value: new THREE.Color("#FF0000")},
};

var comp6Uniforms = {
    colorA: {type: 'vec3', value: new THREE.Color("#0000FF")},
    colorB: {type: 'vec3', value: new THREE.Color("#FF0000")},
};

var comp7Uniforms = {
    colorA: {type: 'vec3', value: new THREE.Color("#0000FF")},
    colorB: {type: 'vec3', value: new THREE.Color("#FF0000")},
};

var comp8Uniforms = {
    colorA: {type: 'vec3', value: new THREE.Color("#0000FF")},
    colorB: {type: 'vec3', value: new THREE.Color("#FF0000")},
};

var comp9Uniforms = {
    colorA: {type: 'vec3', value: new THREE.Color("#0000FF")},
    colorB: {type: 'vec3', value: new THREE.Color("#FF0000")},
};

var compGroup = [comp1Uniforms, comp2Uniforms, comp3Uniforms, comp4Uniforms, comp5Uniforms, comp6Uniforms, comp7Uniforms, comp8Uniforms, comp9Uniforms];

// Sets color by giving component number and color (int %)
function setCompUniforms(compNo, colorA, colorB) {
    compGroup[compNo-1].colorA.value.setRGB(colorA/100, 0, (100-colorA)/100);
    compGroup[compNo-1].colorB.value.setRGB(colorB/100, 0, (100-colorB)/100);
}

// Sets Values for component gradient and as well as of annotation
function setCompValues(compNo, leftTemp, rightTemp) {
    setCompUniforms(compNo, leftTemp, rightTemp);
    setAnnotationValues(compNo, leftTemp, rightTemp);
}

function getCompValues(compNo) {
    var value1 = compGroup[compNo-1].colorA.value.r*100;
    var value2 = compGroup[compNo-1].colorB.value.r*100;

    return { value1, value2};
}