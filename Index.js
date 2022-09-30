

const scene = new THREE.Scene();
scene.background = new THREE.Color(0xdddddd)
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

let loader = new THREE.GTLFLoader();
loader.load('./Reloj/scene.gtlf', function (gltf) {
    car = gltf.scene.children[0];
    car.scale.set(0.5, 0.5, 0.5);
    scene.add(gltf.scene);
    animate();
}


camera.position.z = 10
    function animate() {
        requestAnimationFrame(animate);
        renderer.render(scene, camera);
    }
    animate();