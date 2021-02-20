
import bottleConf from '../../confs/bottle-conf';
import blockConf from '../../confs/block-conf';

class Bottle {
  constructor() {

  }

  init() {
    this.obj = new THREE.Object3D();
    this.obj.name = 'bottle';
    this.obj.position.set(bottleConf.initPosition.x, bottleConf.initPosition.y + blockConf.height / 2, bottleConf.initPosition.z);

    this.bottle = new THREE.Object3D();
    const basicMaterial = new THREE.MeshPhongMaterial({
      color: 0x800080
    });

    const headRadius = bottleConf.headRadius;
    this.head = new THREE.Mesh(
      new THREE.OctahedronGeometry(headRadius),
      basicMaterial
    );
    this.head.castShadow = true;

    const bottom = new THREE.Mesh(
      new THREE.CylinderGeometry(
        0.62857 * headRadius, 0.907143 * headRadius, 1.91423 * headRadius, 20
      ),
      basicMaterial
    );
    bottom.castShadow = true;

    const middle = new THREE.Mesh(
      new THREE.CylinderGeometry(
        headRadius / 1.4, headRadius / 1.4 * 0.8, headRadius * 1.2, 20
      ),
      basicMaterial
    );
    middle.castShadow = true;
    middle.position.y = 1.3857 * headRadius;
    middle.position.x = 0;
    middle.position.z = 0;

    const topGeometry = new THREE.SphereGeometry(headRadius / 1.4, 20, 20);
    topGeometry.scale(1, 0.54, 1);
    const top = new THREE.Mesh(
      topGeometry,
      basicMaterial
    );
    top.castShadow = true;
    top.position.y = 1.8143 * headRadius;
    top.position.x = 0;
    top.position.z = 0;

    this.body = new THREE.Object3D();
    this.body.add(bottom);
    this.body.add(middle);
    this.body.add(top);

    this.head.position.y = 3.57143 * headRadius;
    this.head.position.x = 0;
    this.head.position.z = 0;

    this.bottle.add(this.head);
    this.bottle.add(this.body);

    this.bottle.position.y = 2.2;
    this.bottle.position.x = 0;
    this.bottle.position.z = 0;
    this.obj.add(this.bottle);
  }
}

export default new Bottle();