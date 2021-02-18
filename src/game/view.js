import GamePage from '../pages/game-page';
import GameOverPage from '../pages/game-over-page';

class GameView {
  constructor() {

  }

  showGameOverPage() {
    this.gamePage.hide();
    this.gameOverPage.show();
  }

  showGamePage() {
    this.gameOverPage.hide();
    this.gamePage.restart();
    this.gamePage.show();
  }

  restartGame() {
    this.gamePage.restart();
  }

  initGameOverPage(callacks) {
    this.gameOverPage = new GameOverPage(callacks);
    this.gameOverPage.init({
      scene: this.gamePage.scene
    });
  }

  initPages(callacks) {
    this.gamePage = new GamePage(callacks);
    this.gamePage.init();
  }
}

export default new GameView();