const GRID_SIZE = 10;
const TILE_WIDTH = 100;
const TILE_HEIGHT = 50;
const MAX_HEIGHT = 80;

let grid = [
  [14, 23, 23, 23, 33, 35 , 23, 23, 23, 13],
  [21, 33, 33, 33, 33, 33, 33, 33, 33, 20],
  [21, 33,  0,  0, 33, 33, 33,  1, 33, 20],
  [21, 33,  0,  0, 33,  1,  1, 10, 33, 20],
  [36, 33, 33, 33, 33, 33, 33, 33, 33, 20],
  [36, 33,  4,  7, 33, 18, 17, 10, 33, 20],
  [21, 33,  4,  7, 33, 16, 19, 10, 33, 20],
  [21, 33,  6,  8, 33, 10, 10, 10, 33, 20],
  [21, 33, 33, 33, 33, 33, 33, 33, 33, 20],
  [11, 22, 22, 22, 22, 22, 22, 22, 22, 12],
];
// global road tiles = 33
// road junctions, road straight, road turn
road = [29, 30, 31, 32, 33, 34, 35, 36];

for(x = 0; x < GRID_SIZE-1; x++) {//vertical roads
  for(y = 0; y < GRID_SIZE-1; y++) {
    if(grid[x][y] == grid[x+1][y] && grid [x][y] == 33) {
      grid[x][y] = 34;
    }
  }
}
for(x = 0; x < GRID_SIZE-1; x++) { // ↱ roads
  for(y = 0; y < GRID_SIZE-1; y++) {
    if(grid[x+1][y] == 34 && grid[x][y+1] == 33) {
      grid[x][y] = 32;
    }
  }
}
for(x = 0; x < GRID_SIZE-1; x++) { // ↰ roads
  for(y = 0; y < GRID_SIZE-1; y++) {
    if(grid[x][y] == 33 && grid[x+1][y+1] == 34) {
      grid[x][y+1] = 31;
    }
  }
}
for(x = 0; x < GRID_SIZE-1; x++) { // ↲ roads
  for(y = 0; y < GRID_SIZE-1; y++) {
    if(grid[x][y] == 33 && grid[x-1][y+1] == 34) {
      grid[x][y+1] = 30;
    }
  }
}
for(x = 0; x < GRID_SIZE-1; x++) { // ↳ roads
  for(y = 0; y < GRID_SIZE-1; y++) {
    if(grid[x][y] == 33 && grid[x-1][y] == 34){
      grid[x][y] = 29;
    }
  }
}
for(x = 0; x < GRID_SIZE-1; x++) { // T juctions up roads
  for(y = 0; y < GRID_SIZE-1; y++) {
    if((grid[x+1][y] == 29|| grid[x+1][y]==32 || grid[x+1][y] ==33 || grid[x+1][y] == 34 || grid[x+1][y] == 25 || grid[x+1][y] == 26 || grid[x+1][y] == 28 || grid[x+1][y] == 24) && //left
    (grid[x][y+1] == 34 || grid[x][y+1] == 33 || grid[x][y+1] == 32 || grid[x][y+1] == 31 || grid[x][y+1] == 25 || grid[x][y+1] == 27 || grid[x][y+1] == 28 || grid[x][y+1] == 24) && //up
    (grid[x+1][y+2] == 34 || grid[x+1][y+2] == 33 || grid[x+1][y+2] == 30 || grid[x+1][y+2] == 31 || grid[x+1][y+2] == 26 || grid[x+1][y+2] == 27 || grid[x+1][y+2] == 28 || grid[x+1][y+2] == 24) //right
    &&
    ( grid[x+1][y+1] == 24 || grid[x+1][y+1] == 25 || grid[x+1][y+1] == 26 || grid[x+1][y+1] == 27 || grid[x+1][y+1] == 28 ||
      grid[x+1][y+1] == 29 || grid[x+1][y+1] == 30 || grid[x+1][y+1] == 31 || grid[x+1][y+1] == 32 || grid[x+1][y+1] == 33 || 
      grid[x+1][y+1] == 34 || grid[x+1][y+1] == 35 || grid[x+1][y+1] == 36))//middle
    {
      grid[x+1][y+1] = 26;  
    }
  }
}
for(x = 0; x < GRID_SIZE-1; x++) { // T juctions down roads
  for(y = 0; y < GRID_SIZE-1; y++) {
    if((grid[x+1][y] == 29 || grid[x+1][y]==32 || grid[x+1][y] ==33 || grid[x+1][y] == 34 || grid[x+1][y] == 25 || grid[x+1][y] == 26 || grid[x+1][y] == 28 || grid[x+1][y] == 24) && //left
    (grid[x+2][y+1] == 34 || grid[x+2][y+1] == 33 || grid[x+2][y+1] == 30 || grid[x+2][y+1] == 29 || grid[x+2][y+1] == 25 || grid[x+2][y+1] == 26 || grid[x+2][y+1] == 27 || grid[x+2][y+1] == 24) && //down
    (grid[x+1][y+2] == 34 || grid[x+1][y+2] == 33 || grid[x+1][y+2] == 30 || grid[x+1][y+2] == 31 || grid[x+1][y+2] == 26 || grid[x+1][y+2] == 27 || grid[x+1][y+2] == 28 || grid[x+1][y+2] == 24) //right
    && 
    ( grid[x+1][y+1] == 24 || grid[x+1][y+1] == 25 || grid[x+1][y+1] == 26 || grid[x+1][y+1] == 27 || grid[x+1][y+1] == 28 ||
      grid[x+1][y+1] == 29 || grid[x+1][y+1] == 30 || grid[x+1][y+1] == 31 || grid[x+1][y+1] == 32 || grid[x+1][y+1] == 33 || 
      grid[x+1][y+1] == 34 || grid[x+1][y+1] == 35 || grid[x+1][y+1] == 36))//middle
    {
      grid[x+1][y+1] = 28;  
    }
  }
}
for(x = 0; x < GRID_SIZE-1; x++) { // T juctions left roads
  for(y = 0; y < GRID_SIZE-1; y++) {
    if((grid[x+1][y] == 29|| grid[x+1][y]==32 || grid[x+1][y] ==33 || grid[x+1][y] == 34 || grid[x+1][y] == 25 || grid[x+1][y] == 26 || grid[x+1][y] == 28 || grid[x+1][y] == 24) && //left
    (grid[x][y+1] == 34 || grid[x][y+1] == 33 || grid[x][y+1] == 32 || grid[x][y+1] == 31 || grid[x][y+1] == 25 || grid[x][y+1] == 27 || grid[x][y+1] == 28 || grid[x][y+1] == 24) && //up
    (grid[x+2][y+1] == 34 || grid[x+2][y+1] == 33 || grid[x+2][y+1] == 30 || grid[x+2][y+1] == 29 || grid[x+2][y+1] == 25 || grid[x+2][y+1] == 26 || grid[x+2][y+1] == 27 || grid[x+2][y+1] == 24) //down
    &&
    ( grid[x+1][y+1] == 24 || grid[x+1][y+1] == 25 || grid[x+1][y+1] == 26 || grid[x+1][y+1] == 27 || grid[x+1][y+1] == 28 ||
      grid[x+1][y+1] == 29 || grid[x+1][y+1] == 30 || grid[x+1][y+1] == 31 || grid[x+1][y+1] == 32 || grid[x+1][y+1] == 33 || 
      grid[x+1][y+1] == 34 || grid[x+1][y+1] == 35 || grid[x+1][y+1] == 36))//middle
    {
      grid[x+1][y+1] = 27;  
    }
  }
}
for(x = 0; x < GRID_SIZE-1; x++) { // T juctions right roads
  for(y = 0; y < GRID_SIZE-1; y++) {
    if((grid[x][y+1] == 34 || grid[x][y+1] == 33 || grid[x][y+1] == 32 || grid[x][y+1] == 31 || grid[x][y+1] == 25 || grid[x][y+1] == 27 || grid[x][y+1] == 28 || grid[x][y+1] == 24) && //up
    (grid[x+1][y+2] == 34 || grid[x+1][y+2] == 33 || grid[x+1][y+2] == 30 || grid[x+1][y+2] == 31 || grid[x+1][y+2] == 26 || grid[x+1][y+2] == 27 || grid[x+1][y+2] == 28 || grid[x+1][y+2] == 24) && //right
    (grid[x+2][y+1] == 34 || grid[x+2][y+1] == 33 || grid[x+2][y+1] == 30 || grid[x+2][y+1] == 29 || grid[x+2][y+1] == 25 || grid[x+2][y+1] == 26 || grid[x+2][y+1] == 27 || grid[x+2][y+1] == 24) //down
    &&
    ( grid[x+1][y+1] == 24 || grid[x+1][y+1] == 25 || grid[x+1][y+1] == 26 || grid[x+1][y+1] == 27 || grid[x+1][y+1] == 28 ||
      grid[x+1][y+1] == 29 || grid[x+1][y+1] == 30 || grid[x+1][y+1] == 31 || grid[x+1][y+1] == 32 || grid[x+1][y+1] == 33 || 
      grid[x+1][y+1] == 34 || grid[x+1][y+1] == 35 || grid[x+1][y+1] == 36))//middle
    {
      grid[x+1][y+1] = 25;  
    }
  }
}
for(x = 0; x < GRID_SIZE-1; x++) { // x juctions roads
  for(y = 0; y < GRID_SIZE-1; y++) {
    if((grid[x][y+1] == 34 || grid[x][y+1] == 33 || grid[x][y+1] == 32 || grid[x][y+1] == 31 || grid[x][y+1] == 25 || grid[x][y+1] == 27 || grid[x][y+1] == 28 || grid[x][y+1] == 24) && //up
    (grid[x+1][y] == 29|| grid[x+1][y]==32 || grid[x+1][y] ==33 || grid[x+1][y] == 34 || grid[x+1][y] == 25 || grid[x+1][y] == 26 || grid[x+1][y] == 28 || grid[x+1][y] == 24) && //left
    (grid[x+1][y+2] == 34 || grid[x+1][y+2] == 33 || grid[x+1][y+2] == 30 || grid[x+1][y+2] == 31 || grid[x+1][y+2] == 26 || grid[x+1][y+2] == 27 || grid[x+1][y+2] == 28 || grid[x+1][y+2] == 24) && //right
    (grid[x+2][y+1] == 34 || grid[x+2][y+1] == 33 || grid[x+2][y+1] == 30 || grid[x+2][y+1] == 29 || grid[x+2][y+1] == 25 || grid[x+2][y+1] == 26 || grid[x+2][y+1] == 27 || grid[x+2][y+1] == 24) //down
    &&
    ( grid[x+1][y+1] == 24 || grid[x+1][y+1] == 25 || grid[x+1][y+1] == 26 || grid[x+1][y+1] == 27 || grid[x+1][y+1] == 28 ||
      grid[x+1][y+1] == 29 || grid[x+1][y+1] == 30 || grid[x+1][y+1] == 31 || grid[x+1][y+1] == 32 || grid[x+1][y+1] == 33 || 
      grid[x+1][y+1] == 34 || grid[x+1][y+1] == 35 || grid[x+1][y+1] == 36))//middle
    {
      grid[x+1][y+1] = 24;  
    }
  }
}
grid[1][0] = 33;



let tile_images = [];

let x_start = 0;
let y_start = 0;

function draw_grid() {
  x_start = width/2 - TILE_WIDTH/2;
  y_start = 50;
  for (let i = 0; i < GRID_SIZE; i++) {
    for (let j = 0; j < GRID_SIZE; j++) {
      draw_tile((tile_images[grid[j][i]]), i, j);
    }
  }
}

function draw_tile(img, x, y) {
  let x_screen = x_start + (x - y) * TILE_WIDTH/2;
  let y_screen = y_start + (x + y) * TILE_HEIGHT/2;
  let z_offset = MAX_HEIGHT - img.height;
  image(img, x_screen, y_screen + z_offset);
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  for (let i = 0; i <= 36; i++) {
    tile_images.push(loadImage("./tiles/tile-" + i + ".png"));
  }
}

function draw() {
  background("black");
  draw_grid();
}