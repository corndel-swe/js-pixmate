const defaultWidth = 5
const defaultHeight = 7

function rectangle(width, height) {
  // make an outer loop for the rows
  for (let row = 0; row < height; row++) {
    // make a new empty line for each row
    let line = ''

    // now make an inner loop to add things to the line
    for (let col = 0; col < width; col++) {
      line += 'x'
    }

    // each time the inner loop has finished, print the line
    console.log(line)
  }
}

rectangle(defaultWidth, defaultHeight)
