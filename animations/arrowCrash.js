import animate from './animate.js'
import chalk from 'chalk'

const defaultDistance = 10

function arrowCrash(distance) {
  const frames = []

  // arrows
  for (let i = 0; i <= Math.floor(distance / 2); i++) {
    let frame = ""
    frame += " ".repeat(i)
    frame += "-->"
    frame += " ".repeat(distance - (i * 2))
    frame += "<--"

    frames.push(frame)
  }

  // explosion                                    v add 3 to include the "-->"
  frames.push(" ".repeat(Math.floor(distance / 2) + 3) + chalk.red("."))
  frames.push(" ".repeat(Math.floor(distance / 2) + 3) + chalk.yellow("o"))
  frames.push(" ".repeat(Math.floor(distance / 2) + 3) + chalk.red("X"))
  frames.push(" ".repeat(Math.floor(distance / 2) + 3) + chalk.yellow("▓"))
  frames.push(" ".repeat(Math.floor(distance / 2) + 3) + chalk.red("░"))

  animate(frames, 0.5)
}

arrowCrash(defaultDistance)
