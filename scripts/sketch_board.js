function sketchPad() {

  const canvas = document.querySelector(".canvas");
  const redraw = document.querySelector(".redraw");
  const stylesheet = document.styleSheets[0];

  let numberOfSquares = 256;
  drawBoard();
  colourBoard();

  function drawBoard() {
    for(i = 0; i < numberOfSquares; i++) {
      let drawSquare = document.createElement("div");

      drawSquare.classList.add("square");
      canvas.appendChild(drawSquare);
    }
  }

  function clearBoard() {
    while (canvas.firstChild) {
      canvas.removeChild(canvas.firstChild);
    }
  }

  function colourBoard() {
    let squares = document.querySelectorAll(".square");

    squares.forEach(div => div.addEventListener("mouseenter", () => {
      div.classList.add("black");
    } ));
  }

  function resizeBoard(size) {
    let square

    for (let i = 0; i < stylesheet.cssRules.length; i++) {
      if (stylesheet.cssRules[i].selectorText === ".square") {
        square = stylesheet.cssRules[i];
      }
    }

    let height = (Math.floor(640 / size) - 1) + "px";
    let width = (Math.floor(640 / size) - 1) + "px";

    square.style.setProperty("height", height);
    square.style.setProperty("width", width);
  }

  function setBoardSize() {
    let size = prompt("Enter value");
    if (size <= 40 && size >= 1) {
      clearBoard();
      numberOfSquares = size * size;
      drawBoard();
      resizeBoard(size);
      colourBoard();
    }
    else {
      alert("Please enter a value between 1 & 40");
      return setBoardSize();
    }
  }

  redraw.addEventListener("click", () => {
    setBoardSize();
  });

}
