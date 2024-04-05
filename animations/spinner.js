import animate from './animate.js'

const defaultCycles = 4

function spinner(cycles) {
  const frames = []

  for (let i = 0; i <= cycles * 4; i++) {
    let frame = ""

    // do a "switch" statement on the remainder of the frame number
    // after division by 4.
    // this means we get a different "frame" that cycles every 4 frames
    switch (i % 4) {
      case 0:
        frame += "-"
        break;
      case 1:
        frame += "/"
        break;
      case 2:
        frame += "|"
        break;
      case 3:
        frame += "\\"  // two slashes because the first one is an escape character!
        break;
    }

    frames.push(frame)
  }

  animate(frames, 0.1)
}

spinner(defaultCycles)
