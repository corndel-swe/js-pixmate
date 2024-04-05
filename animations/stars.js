import animate from './animate.js'
import chalk from 'chalk'

const defaultLength = 5
const defaultWidth = 100
const defaultHeight = 15
const defaultNStars = 50

function stars(lengthInSeconds, width, height, nStars) {
  const frameRate = 4
  const nFrames = lengthInSeconds * frameRate
  const frames = []

  // randomly generate a bunch of stars
  const stars = []
  for (let i = 0; i < nStars; i++) {
    const starRow = Math.floor(Math.random() * height)
    const starCol = Math.floor(Math.random() * width)
    stars.push({
      row: starRow,
      col: starCol
    })
  }

  for (let i = 0; i <= nFrames; i++) {
    let frame = ""

    for (let row = 0; row < height; row++) {
      let line = ""
      const starsInThisRow = stars.filter(star => star.row === row)

      for (let col = 0; col < width; col++) {
        // is there a star here?
        if (!starsInThisRow.some(star => star.col === col)) {
          line += chalk.bgBlack(" ")
        } else {
          // decide pseudo-randomly which frame of the twinkle we use
          let starChar = ""
          if ((row + col + i) % 4 === 0) {
            starChar = "."
          } else if ((row + col + i) % 4 === 1) {
            starChar = "x"
          } else if ((row + col + i) % 4 === 2) {
            starChar = "*"
          } else if ((row + col + i) % 4 === 3) {
            starChar = "x"
          }

          // also randomly decide what colour the star is
          if ((row + col) % 3 === 0) {
            starChar = chalk.yellow.bgBlack(starChar)
          } else if ((row + col) % 3 === 1) {
            starChar = chalk.white.bgBlack(starChar)
          } else if ((row + col) % 3 === 2) {
            starChar = chalk.blue.bgBlack(starChar)
          }

          line += starChar
        }
      }

      line += "\n"
      frame += line
    }

    frames.push(frame)
  }

  animate(frames, 1/frameRate)
}

stars(defaultLength, defaultWidth, defaultHeight, defaultNStars)
