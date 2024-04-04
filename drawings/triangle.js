const defaultHeight = 5

function triangle(height) {
  // outer loop for rows
  for (let row = 1; row <= height; row++) {
    // empty line for each row
    let line = ""

    // only add as many stars as the row number
    for (let col = 1; col <= row; col++) {
      line += "*"
    }

    console.log(line)
  }
}

triangle(defaultHeight)
