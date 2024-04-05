import animate from './animate.js'
import chalk from 'chalk'

const defaultLength = 16

function loading(length) {
  const frames = []

  for (let i = 0; i <= length * 4; i++) {
    let frame = ""

    // top of frame
    frame += "╔" + "═".repeat(length) + "╤" + "═".repeat(4) + "╗" + "\n"

    // loading bar
    frame += "║"
    // full blocks
    frame += chalk.red("█").repeat(Math.floor(i / 4))
    // faded block
    if (i % 4 === 1) {
      frame += chalk.red("░")
    } else if (i % 4 === 2) {
      frame += chalk.red("▒")
    } else if (i % 4 === 3) {
      frame += chalk.red("▓")
    }
    // empty blocks
    frame += " ".repeat(length - Math.ceil(i / 4))

    // divider before %
    frame += "│"

    // % indicator
    const percent = Math.floor(i * 25 / length)  // simplified form of (i * 100)/(length * 4)
    frame += chalk.blue(percent.toString().padStart(3, " ") + "%")

    // end of middle row
    frame += "║" + "\n"

    // bottom of frame
    frame += "╚" + "═".repeat(length) + "╧" + "═".repeat(4) + "╝"

    frames.push(frame)
  }

  animate(frames, 0.1)
}

loading(defaultLength)
