function sketchPad() {

  const canvas = document.querySelector(".canvas");
  const redraw = document.querySelector(".submit-button");
  const newSize = document.querySelector("#new-board-size");
  const stylesheet = document.styleSheets[0];
  const inputField = document.querySelector(".form-field");

  redraw.addEventListener("click", () => {
    redrawBoard();
  });

  function drawBoard(lengthOfSide) {
    clearBoard();

    let numberOfSquares = lengthOfSide * lengthOfSide;

    for(i = 0; i < numberOfSquares; i++) {
      let drawSquare = document.createElement("div");

      drawSquare.classList.add("square");
      canvas.appendChild(drawSquare);
    }
    resizeBoardSquares(lengthOfSide);
    colourBoard();
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

  function resizeBoardSquares(size) {
    let square;

    for (let i = 0; i < stylesheet.cssRules.length; i++) {
      if (stylesheet.cssRules[i].selectorText === ".square") {
        square = stylesheet.cssRules[i];
      }
    }

    //Remove 1 from overall canvas size to acccount for margin at top and right-hand side, then remove margin of each
    //square before dividing by number of squares
    let height = ((639 - size) / size) + "px";
    let width = ((639 - size) / size) + "px";

    square.style.setProperty("height", height);
    square.style.setProperty("width", width);
  }

  function redrawBoard() {
    let size = newSize.value;

    if (size >= 1 && size <= 50) {
      drawBoard(size);
      newSize.value = '';
      removeErrorMessage();
    }
    else {
      removeErrorMessage();
      errorMessage();
      newSize.value = '';
    }
  }

  function errorMessage() {
    let errorMessage = document.createElement("div");

    errorMessage.textContent = "Please enter a value between 1 and 50";
    errorMessage.className = "error-message";
    newSize.classList.toggle("error-field");
    inputField.appendChild(errorMessage);
  }

  function removeErrorMessage() {
    let errorMessage = document.querySelector(".error-message");
    if (errorMessage) {
      inputField.removeChild(errorMessage);
      newSize.classList.toggle("error-field");
    }
    else {
      return;
    }
  }

  // Initalise board on page load
  drawBoard(16);

}
