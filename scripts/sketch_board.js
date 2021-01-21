function drawBoard() {

  const canvas = document.querySelector(".canvas");

  for(i = 0; i < 256; i++) {
    let drawSquare = document.createElement("div");

    drawSquare.classList.add("square");
    canvas.appendChild(drawSquare);
  }

  const squares = document.querySelectorAll(".square");

  squares.forEach(div => div.addEventListener("mouseenter", () => {
    div.classList.add("black");
  } ));

}
