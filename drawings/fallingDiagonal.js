const defaultHeight = 5

// same as triangle, but with spaces before the final star on each row
function fallingDiagonal(height) {
  // outer loop for rows
  for (let row = 1; row <= height; row++) {
    // empty line for each row
    let line = ""

    // only add as many spaces as the row number - 1
    for (let col = 1; col <= row - 1; col++) {
      line += " "
    }
    // then add the star
    line += "*"

    console.log(line)
  }
}

fallingDiagonal(defaultHeight)
