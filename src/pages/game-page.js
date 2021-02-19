import { scene } from '../scene/index';
import Cuboid from '../block/cuboid';
import Cylinder from '../block/cylinder';

export default class GamePage {
  constructor(callbacks) {
    this.callbacks = callbacks;
  }

  init() {
    console.log('game page init');
    this.scene = scene;
    this.scene.init();
    this.addInitBlock();
    this.render();
  }

  render() {
    this.scene.render();
    requestAnimationFrame(this.render.bind(this));
  }

  addInitBlock() {
    const cuboidBlock = new Cuboid(-15, 0, 0);
    const cylinderBlock = new Cylinder(23, 0, 0);
    console.log(this.scene);
    this.scene.instance.add(cuboidBlock.instance);
    this.scene.instance.add(cylinderBlock.instance);
  }

  show() {
    console.log('game page show');
    // this.obj.visible = true;
  }

  hide() {
    // this.obj.visible = false;
  }

  restart() {
    console.log('game page restart');
  }
}