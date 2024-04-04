const defaultWidth = 9
const defaultHeight = 5

function checkerboard(width, height) {
  // make an outer loop for the rows
  for (let row = 0; row < height; row++) {
    // make a new empty line for each row
    let line = ''

    // now make an inner loop to add things to the line
    for (let col = 0; col < width; col++) {
      // do some maths with the row and column numbers
      // on even-numbered rows, we start with a star
      // therefore, on even-numbered rows, the even-numbered columns have stars
      // equivalently, on odd-numbered rows, the odd-numbered columns have stars
      // even + even = even, and odd + odd = even
      // so, we place a star everywhere (row + col) is even
      if ((row + col) % 2 === 0) {
        line += "*"
      } else {
        line += " "
      }
    }

    // each time the inner loop has finished, print the line
    console.log(line)
  }
}

checkerboard(defaultWidth, defaultHeight)
