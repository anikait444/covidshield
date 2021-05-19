var database;
var back_img;
var gameState =0;
var playerCount = 0;
var allPlayers;

var player, form,game;
var player1,player2;
var players;
var enemy;
var enemyGroup;
var virus1_img, virus2_img, virus3_img, virus4_img;
var player_img;


function preload(){
  back_img = loadImage("room.jpg");
  player_img = loadImage("vaccine.png");
  player2_img = loadImage("vaccine2.png");
  virus1_img = loadImage("enemy1.png");
  virus2_img = loadImage("enemy2.png");
  virus3_img = loadImage("enemy3.png");
  virus4_img = loadImage("enemy4.png");
  enemyGroup = new Group();
}
function setup() {
  createCanvas(1000, 600);
   database = firebase.database();
  game = new Game();
   game.getState()
  game.start();
  
}

function draw() {
  background(back_img);
  
   if (playerCount === 2) {
     game.update(1);
   }
   if (gameState === 1) {
     clear(); 
     game.play();
   }
   if (gameState === 2) {
    
     game.end();
   }
}