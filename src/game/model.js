import Event from '../utils/event';

class GameModal {
  constructor() {
    this.stage = '';
    this.stageChanged = new Event(this);
  }

  getStage() {
    return this.stage;
  }

  setStage(stage) {
    this.stage = stage;
    this.stageChanged.notify({
      stage: this.stage
    });
  }
}

export default new GameModal();