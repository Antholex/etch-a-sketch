function drawBoard() {

  const canvas = document.querySelector(".canvas");

  for(i = 0; i < 256; i++) {
    let square = document.createElement("div");

    square.className = "square";
    canvas.appendChild(square);
  }

}
