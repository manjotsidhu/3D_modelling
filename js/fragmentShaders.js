/* Collection of fragment Shaders for various components */

function comp1FragmentShader() {
    return `
      uniform vec3 colorA; 
      uniform vec3 colorB;
      varying vec3 vUv;
      
      void main() {
        gl_FragColor = vec4(mix(colorA,colorB,(vUv.y-50.0)/33.0),1.0);
      }
      `
}

function comp2FragmentShader() {
    return `
      uniform vec3 colorA; 
      uniform vec3 colorB;
      varying vec3 vUv;
      
      void main() {
        gl_FragColor = vec4(mix(colorA,colorB,(vUv.y-46.0)/26.0),1.0);
      }
      `
}

function comp3FragmentShader() {
    return `
      uniform vec3 colorA; 
      uniform vec3 colorB;
      varying vec3 vUv;
      
      void main() {
        gl_FragColor = vec4(mix(colorA,colorB,(vUv.y-46.0)/26.0),1.0);
      }
      `
}

function comp4FragmentShader() {
    return `
      uniform vec3 colorA; 
      uniform vec3 colorB;
      varying vec3 vUv;
      
      void main() {
        gl_FragColor = vec4(mix(colorA,colorB,(vUv.y-10.0)/26.0),1.0);
      }
      `
}

function comp5FragmentShader() {
    return `
      uniform vec3 colorA; 
      uniform vec3 colorB;
      varying vec3 vUv;
      
      void main() {
        gl_FragColor = vec4(mix(colorA,colorB,(vUv.y-10.0)/20.0),1.0);
      }
      `
}

function comp6FragmentShader() {
    return `
      uniform vec3 colorA; 
      uniform vec3 colorB;
      varying vec3 vUv;
      
      void main() {
        gl_FragColor = vec4(mix(colorA,colorB,(vUv.y-10.0)/20.0),1.0);
      }
      `
}

function comp7FragmentShader() {
    return `
      uniform vec3 colorA; 
      uniform vec3 colorB;
      varying vec3 vUv;
      
      void main() {
        gl_FragColor = vec4(mix(colorA,colorB,(vUv.z+3.0)/4.5),1.0);
      }
      `
}

function comp8FragmentShader() {
    return `
      uniform vec3 colorA; 
      uniform vec3 colorB;
      varying vec3 vUv;
      
      void main() {
        gl_FragColor = vec4(mix(colorA,colorB,(vUv.x+15.0)/10.0),1.0);
      }
      `
}

function comp9FragmentShader() {
    return `
      uniform vec3 colorA; 
      uniform vec3 colorB;
      varying vec3 vUv;
      
      void main() {
        gl_FragColor = vec4(mix(colorA,colorB,(vUv.x+8.0)/10.0),1.0);
      }
      `
}