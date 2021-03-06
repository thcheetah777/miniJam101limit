// Greenhouse Limit
/*^*^*^*^*^*^*^*
config.js
The Phaser framework config.
*^*^*^*^*^*^*^*/

const config = {
  type: Phaser.AUTO,
  scale: {
    autoCenter: Phaser.Scale.CENTER_BOTH,
    mode: Phaser.Scale.RESIZE
  },
  render: {
    pixelArt: true
  },
  backgroundColor: 0x46c762,
  physics: {
    default: "arcade",
    arcade: {
      gravity: {
        y: 1500
      },
      enableBody: true,
      // debug: true
    }
  },
  scene: [Game]
};
const phaserGame = new Phaser.Game(config);
