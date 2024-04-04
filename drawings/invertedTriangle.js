const defaultHeight = 5

function invertedTriangle(height) {
  // outer loop for rows
  for (let row = 1; row <= height; row++) {
    // empty line for each row
    let line = ""

    // add as many stars as (height - row + 1)
    // this will give the desired pattern (trust me)
    for (let col = 1; col <= height - row + 1; col++) {
      line += "*"
    }

    console.log(line)
  }
}

invertedTriangle(defaultHeight)
