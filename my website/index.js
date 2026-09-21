if (points !== null){
geometry.dispose();
material.dispose();
scene.remove(points);
}
material = new THREE.pointsmaterials({
    size: parameters.size,
    sizeAttenuation: true,
depthWrite: false,
blending: THREE.AdditiveBlending,
vertexColors: true
})

