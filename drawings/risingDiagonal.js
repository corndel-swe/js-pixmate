const defaultHeight = 5

// same as invertedTriangle, but with spaces before the final star on each row
function risingDiagonal(height) {
  // outer loop for rows
  for (let row = 1; row <= height; row++) {
    // empty line for each row
    let line = ""

    // add as many spaces as (height - row)
    for (let col = 1; col <= height - row; col++) {
      line += " "
    }
    // then add the star
    line += "*"

    console.log(line)
  }
}

risingDiagonal(defaultHeight)
