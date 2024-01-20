class GL {
  constructor() {
    this.grid = null;
    this.cols = width / 10;
    this.rows = height / 10;
    this.resolution = 10;
  }
  setup_grid() {
    this.grid = this.make2DArray(this.cols, this.rows);
    for (let i = 0; i < this.cols; i++) {
      for (let j = 0; j < this.rows; j++) {
        this.grid[i][j] = floor(random(2));
      }
    }
  }

  make2DArray(col, row) {
    let arr = new Array(col);
    for (let i = 0; i < arr.length; i++) {
      arr[i] = new Array(row);
    }
    return arr;
  }

  update() {
    let next = this.make2DArray(this.cols, this.rows);

    for (let i = 0; i < this.cols; i++) {
      for (let j = 0; j < this.rows; j++) {
        let state = this.grid[i][j];

        let sum = 0;
        let neighbors = this.countNeighbors(this.grid, i, j);

        if (state == 0 && neighbors == 3) {
          next[i][j] = 1;
        } else if (state == 1 && neighbors < 2 || neighbors > 3) {
          next[i][j] = 0;
        } else {
          next[i][j] = state;
        }
      }
    }
    this.grid = next;
  }

  draw() { //이게 저거 만드는건가 이걸 리셋 시키면 되는건가
    for (let i = 0; i < this.cols; i++) {
      for (let j = 0; j < this.rows; j++) {
        let x = i * this.resolution;
        let y = j * this.resolution;
        if (this.grid[i][j] == 1) {
          fill(255);
          stroke(0);
          rect(x, y, this.resolution - 1, this.resolution - 1);
        }
      }
    }
  }


  countNeighbors(grid, x, y) { //
    let sum = 0;
    for (let i = -1; i < 2; i++) {
      for (let j = -1; j < 2; j++) {
        let col = (x + i + this.cols) % this.cols;
        let row = (y + j + this.rows) % this.rows;
        sum += this.grid[col][row];
      }
    }
    sum -= grid[x][y]
    return sum;
  }

  clear_grid() {
    this.grid = this.make2DArray(this.cols, this.rows);
    for (let i = 0; i < this.cols; i++) {
      for (let j = 0; j < this.rows; j++) {
        this.grid[i][j] = 0;
      }
    }
  }

  showPattern1() {
    let x = round(random(this.cols));
    let y = round(random(this.rows));
    let r = round(random(4)) //5개

    for (let i = 0; i < Still_lifes[r][0].length; i++) {
      for (let j = 0; j < Still_lifes[r].length; j++) {
        let col = (x + i + this.cols) % this.cols;
        let row = (y + j + this.rows) % this.rows;
        this.grid[col][row] = Still_lifes[r][j][i];
      }
    }
  }

  showPattern2() {
    let x = round(mouseX/this.resolution);
    let y = round(mouseY/this.resolution);
    let r = round(random(4));
    for (let i = 0; i < Oscillator[r][0].length; i++) {
      for (let j = 0; j < Oscillator[r].length; j++) {
        let col = (x + i + this.cols) % this.cols;
        let row = (y + j + this.rows) % this.rows;
        this.grid[col][row] = Oscillator[r][j][i];
      }
    }
  }
  
  showPattern3() {
    let x = round(mouseX/this.resolution);
    let y = round(mouseY/this.resolution);
    let r = round(random(3));
    for (let i = 0; i < Spaceship[r][0].length; i++) {
      for (let j = 0; j < Spaceship[r].length; j++) {
        let col = (x + i + this.cols) % this.cols;
        let row = (y + j + this.rows) % this.rows;
        this.grid[col][row] = Spaceship[r][j][i];
      }
    }
  }
}