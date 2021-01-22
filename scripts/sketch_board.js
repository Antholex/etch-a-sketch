function sketchPad() {

  const canvas = document.querySelector(".canvas");
  // const redraw = document.querySelector(".redraw");
  const redraw = document.querySelector(".submit-button");
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

    let height = ((639 / size) - 1)  + "px";
    let width = ((639 / size) - 1) + "px";

    square.style.setProperty("height", height);
    square.style.setProperty("width", width);
  }

  // function setBoardSize() {
  //   let size = prompt("Enter value");
  //   if (size >= 1 && size <= 50) {
  //     clearBoard();
  //     numberOfSquares = size * size;
  //     drawBoard();
  //     resizeBoard(size);
  //     colourBoard();
  //   }
  //   else if (size === null) {
  //     return;
  //   }
  //   else {
  //     alert("Please enter a value between 1 & 50");
  //     return setBoardSize();
  //   }
  // }

  function redrawBoard() {
    let size = document.querySelector(".size-input").value;
    clearBoard();
    numberOfSquares = size * size;
    drawBoard();
    resizeBoard(size);
    colourBoard();
    document.querySelector(".size-input").value = '';
  };

  redraw.addEventListener("click", () => {
    redrawBoard();
  });

}
