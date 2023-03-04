const gameEngine = new GameEngine();

const ASSET_MANAGER = new AssetManager();


// spritesheets

ASSET_MANAGER.queueDownload("./sprites/realSonicSheet.png");
ASSET_MANAGER.queueDownload("./sprites/enemyCrab.png");
ASSET_MANAGER.queueDownload("./sprites/bug.png");
ASSET_MANAGER.queueDownload("./sprites/realsoniclogo.png");
ASSET_MANAGER.queueDownload("./sprites/groupName.png");
ASSET_MANAGER.queueDownload("./sprites/enterStart.png");
ASSET_MANAGER.queueDownload("./sprites/FinishedLevel.png");
ASSET_MANAGER.queueDownload("./sprites/goalplate.png");
ASSET_MANAGER.queueDownload("./sprites/RingReal.png");
// platform
ASSET_MANAGER.queueDownload("./sprites/floor.png");

ASSET_MANAGER.queueDownload("./sprites/backgroundHill.png");
ASSET_MANAGER.queueDownload("./sprites/cloud1.png");
ASSET_MANAGER.queueDownload("./sprites/cloud2.png");
ASSET_MANAGER.queueDownload("./sprites/cloud3.png");
ASSET_MANAGER.queueDownload("./sprites/water.png");
ASSET_MANAGER.queueDownload("./sprites/treesAndWaterfall.png");



ASSET_MANAGER.downloadAll(() => {
	const canvas = document.getElementById("gameWorld");
	const ctx = canvas.getContext("2d");
	ctx.imageSmoothingEnabled = false;
	
	PARAMS.BLOCKWIDTH = PARAMS.BITWIDTH * PARAMS.SCALE;
	// gameEngine.addEntity(new Sonic(SceneManager, gameEngine));
	gameEngine.addEntity(new EnemiesCrab(gameEngine));
	gameEngine.addEntity(new Bug(gameEngine));
	gameEngine.addEntity(new Platform(gameEngine));
	gameEngine.addEntity(new TreesAndWaterfall(gameEngine));
	gameEngine.addEntity(new BackgroundHill(gameEngine));
	gameEngine.addEntity(new Cloud1(gameEngine));
	gameEngine.addEntity(new Cloud2(gameEngine));
	gameEngine.addEntity(new Cloud3(gameEngine));
	gameEngine.addEntity(new Water(gameEngine));
	gameEngine.addEntity(new Checkpoint(gameEngine));
	gameEngine.addEntity(new SceneManager(gameEngine));
	gameEngine.addEntity(new Sonic(gameEngine));

	PARAMS.CANVAS_WIDTH = canvas.width;
	PARAMS.CANVAS_HEIGHT = canvas.height;

	gameEngine.init(ctx);

	gameEngine.start();
});
