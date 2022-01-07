const scene = new THREE.Scene();
const camera = new THREE.OrthographicCamera();

const renderer = new THREE.WebGLRenderer();
renderer.setSize( 800, 800 );
document.body.appendChild( renderer.domElement );

const dvd_geo = new THREE.PlaneGeometry(0.4,0.3);
const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
const dvd = new THREE.Mesh( dvd_geo, material );
scene.add( dvd );

camera.position.z = 10;

let xframe = 0.0023;
let yframe = 0.0033;
let bounce = 0;

dvd.position.x=0;
dvd.position.y=0;

function animate() {
    requestAnimationFrame( animate );
    
    dvd.position.x += xframe;
    dvd.position.y += yframe;

   if(dvd.position.x > 0.85 && bounce < 9){
       xframe = -0.0023;
       dvd.material.color.setRGB(Math.random(256),Math.random(256),Math.random(256));
       dvd.scale.x -= 0.1;
       dvd.scale.y -= 0.1;

       bounce++;
   }
   if(dvd.position.x < -0.85 && bounce < 9){
       xframe = 0.0023;
       dvd.material.color.setRGB(Math.random(256),Math.random(256),Math.random(256));
       dvd.scale.x -= 0.1;
       dvd.scale.y -= 0.1;

       bounce++;
   }
   if(dvd.position.y > 0.9 && bounce < 9){
       yframe = -0.0033;
       dvd.material.color.setRGB(Math.random(256),Math.random(256),Math.random(256));
       dvd.scale.x -= 0.1;
       dvd.scale.y -= 0.1;

       bounce++;
   }
   if(dvd.position.y < -0.9 && bounce < 9){
       yframe = 0.0033;
       dvd.material.color.setRGB(Math.random(256),Math.random(256),Math.random(256));
       dvd.scale.x -= 0.1;
       dvd.scale.y -= 0.1;

       bounce++;
   }
   if(bounce==8) {
       dvd.scale.x -= 0.1;
       dvd.scale.y -= 0.1;

       if(dvd.scale.x <=0 && dvd.scale.y <=0){
           dvd.visible=false;
       }
   }
    renderer.render( scene, camera );

};

animate();