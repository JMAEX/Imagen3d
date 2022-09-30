let scene, camera, renderer;

function init() {

    scene = new THREE.Scene();
    scene.background = new THREE.Color(0xdddddd);

    var textura = new THREE.TextureLoader();
    textura.load("./Fondo/fondo.png", function (texture) {
        scene.background = texture;
    });
    //texturas

    //-----------------------------------------------------------------------Camara
    camera = new THREE.PerspectiveCamera(40, window.innerWidth / window.innerHeight, 1, 5000);
    camera.rotation.y = 45 / 180 * Math.PI;
    camera.position.x = 800;
    camera.position.y = 100;
    camera.position.z = 1000;

    /*  const controls = new THREE.OrbitControls(camera, renderer.domElement); */
    // camera.position.set(0, 20, 100);
    //camera.position.z = 10
    // controls.update();

    //--------------------------------------Luces
    hlight = new THREE.AmbientLight(0x404040, 100);
    scene.add(hlight);

    directionalLight = new THREE.DirectionalLight(0xffffff);
    directionalLight.position.set(1, 1, 1);
    directionalLight.castShadow = true;
    scene.add(directionalLight);
    /* light = new THREE.PointLight(0xc4c4c4, 10);
    light.position.set(0, 300, 500);
    scene.add(light);
    light2 = new THREE.PointLight(0xc4c4c4, 10);
    light2.position.set(500, 100, 0);
    scene.add(light2);
    light3 = new THREE.PointLight(0xc4c4c4, 10);
    light3.position.set(0, 100, -500);
    scene.add(light3);
    light4 = new THREE.PointLight(0xc4c4c4, 10);
    light4.position.set(-500, 300, 500);
    scene.add(light4); */


    //----------------------------Render
    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    let loader = new THREE.GLTFLoader();
    loader.load('./scene.gltf', function (gltf) {
        reloj = gltf.scene.children[0];
        reloj.scale.set(100, 100, 100);
        reloj.position.x = -200;
        reloj.position.y = 0;
        scene.add(gltf.scene);
        animate();
        const controls = new THREE.DragControls([reloj], camera, renderer.domElement);
    });

    loader.load('./Personajes/Grajero/scene.gltf', function (gltf) {
        granjer = gltf.scene.children[0];
        granjer.scale.set(60, 60, 60);
        granjer.position.x = 200;
        granjer.position.y = -200;
        scene.add(gltf.scene);
        animate();
        const controls = new THREE.DragControls([granjer], camera, renderer.domElement);
    });

    loader.load('./Personajes/Mapache/scene.gltf', function (gltf) {
        mapache = gltf.scene.children[0];
        mapache.scale.set(6, 6, 6);
        mapache.position.x = -500;
        mapache.position.y = 0;
        scene.add(gltf.scene);
        animate();
        const controls = new THREE.DragControls([mapache], camera, renderer.domElement);
    });

    loader.load('./Personajes/Diosa/scene.gltf', function (gltf) {
        Diosa = gltf.scene.children[0];
        Diosa.scale.set(70, 70, 70);
        Diosa.position.x = 400;
        Diosa.position.y = 0;
        scene.add(gltf.scene);
        animate();
        const controls = new THREE.DragControls([Diosa], camera, renderer.domElement);
    });
}
function animate() {
    requestAnimationFrame(animate);

    // required if controls.enableDamping or controls.autoRotate are set to true
    //controls.update();
    renderer.render(scene, camera);
}

init();