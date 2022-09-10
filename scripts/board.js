function Cell(x, y, color) {
  this.x = x;
  this.y = y;
  this.color = color;
  this.piece = null;
  this.block = initElement(color);

  this.setPiece = function (currentPiece) {
    this.piece = currentPiece;
  };

  function initElement(currentColor) {
    const cellElement = document.createElement("div");
    cellElement.style.width = "80px";
    cellElement.style.height = "80px";
    cellElement.style.position = "relative";
    cellElement.style.backgroundColor = currentColor;

    return cellElement;
  }
}

function Row(line) {
  this.line = line;
  this.cells = []; // 8 cells
  this.block = initElement();

  this.render = function () {
    for (const cell of this.cells) {
      this.block.appendChild(cell.block);
    }
  };

  function initElement() {
    const rowElement = document.createElement("div");
    rowElement.style.width = "640px";
    rowElement.style.height = "80px";
    return rowElement;
  }
}

function Board() {
  this.rowNumbers = 8;
  this.columnNumbers = 8;
  this.rows = []; // 8 rows
  this.block = initElement();

  function initRows () {
    let currentRows = [];
    for (let rowNumber = 0; rowNumber < this.rowNumbers; rowNumber++) {
      const row = new Row(rowNumber);
      const currentCells = [];
      for (
        let columnNumber = 0;
        columnNumber < this.columnNumbers;
        columnNumber++
      ) {
        if (rowNumber % 2 == 0) {
          color = columnNumber % 2 == 0 ? "white" : "gray";
        } else {
          color = columnNumber % 2 == 0 ? "gray" : "white";
        }
        const cell = new Cell(columnNumber, rowNumber, color);
        currentCells.push(cell);
      }

      row.cells = currentCells;
      currentRows.push(row);
    }

    this.rows = currentRows;
  };

  function putChess (x, y, currentPiece) {
    const currentRow = this.rows.find((row) => row.line === x);
    const currentCell = currentRow.cells[y];
    currentCell.setPiece(currentPiece);
  };

  this.initChess = function () { // 
    // xu ly khoi tao quan co
    // đặt quân cờ bằng private method
  };

  this.render = function () {
    for (const row of this.rows) {
      row.render(); // y la cai render tu dong row
      this.block.appendChild(row.block);
    }

    // TODO
    // cap nhat render DOM cho quan co

  };

  this.init = function () {
    // init data
   initRows();
   initChess();
    // xu ly DOM
    this.render();
  };

  function initElement() {
    const boardElement = document.getElementById("chess-board");
    boardElement.style.display = "flex";
    boardElement.style.width = "640px";
    boardElement.style.height = "640px";
    boardElement.style.border = "3px solid black";

    return boardElement;
  }
}
