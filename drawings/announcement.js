import chalk from "chalk"

function announcement(message) {
  const announcementText = "ANNOUNCEMENT"
  const width = Math.max(message.length, announcementText.length)

  // pad strings to be the same width as each other
  let paddedAnnouncementText = announcementText
  if (announcementText.length < width) {
    paddedAnnouncementText = paddedAnnouncementText.padStart((width - announcementText.length) / 2 + announcementText.length, " ")
    paddedAnnouncementText = paddedAnnouncementText.padEnd(width, " ")
  }
  let paddedMessage = message
  if (message.length < width) {
    paddedMessage = paddedMessage.padStart((width - message.length) / 2 + message.length, " ")
    paddedMessage = paddedMessage.padEnd(width, " ")
  }

  console.log("╔═" + "═".repeat(width) + "═╗")
  console.log("║ " + chalk.red(paddedAnnouncementText) + " ║")
  console.log("╟─" + "─".repeat(width) + "─╢")
  console.log("║ " + chalk.blue(paddedMessage) + " ║")
  console.log("╚═" + "═".repeat(width) + "═╝")
}

announcement("Hello, world! How are you?")
announcement("Hi!")
