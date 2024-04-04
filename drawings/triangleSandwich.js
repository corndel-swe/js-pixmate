const defaultWidth = 5

function triangle(width) {
  // first, go up
  for (let row = 1; row <= width; row++) {
    // empty line for each row
    let line = ""

    // only add as many stars as the row number
    for (let col = 1; col <= row; col++) {
      line += "*"
    }

    console.log(line)
  }

  // then, go down!
  for (let row = 1; row <= width - 1; row++) {
    // empty line for each row
    let line = ""

    // add as many stars as (width - row)
    // same as invertedTriangle, but - 1 (because we need one fewer)
    for (let col = 1; col <= width - row; col++) {
      line += "*"
    }

    console.log(line)
  }
}

triangle(defaultWidth)
