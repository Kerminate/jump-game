export default class GamePage {
  constructor(callbacks) {
    this.callbacks = callbacks;
  }

  init() {
    console.log('game page init');
    const scene = new THREE.Scene();
    this.scene = scene;

    const axesHelper = new THREE.AxesHelper(100)
    this.scene.add(axesHelper);
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