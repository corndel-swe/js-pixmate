import chalk from "chalk"

function gradients() {
  console.log(chalk.magenta.bgRed("█▓▒░") + chalk.red.bgYellow("█▓▒░") + chalk.yellow.bgGreen("█▓▒░") + chalk.green.bgCyan("█▓▒░"))
  console.log(chalk.magenta.bgRed("▓▒░") + chalk.red.bgYellow("█▓▒░") + chalk.yellow.bgGreen("█▓▒░") + chalk.green.bgCyan("█▓▒░") + chalk.cyan.bgBlue("█"))
  console.log(chalk.magenta.bgRed("▒░") + chalk.red.bgYellow("█▓▒░") + chalk.yellow.bgGreen("█▓▒░") + chalk.green.bgCyan("█▓▒░") + chalk.cyan.bgBlue("█▓"))
  console.log(chalk.magenta.bgRed("░") + chalk.red.bgYellow("█▓▒░") + chalk.yellow.bgGreen("█▓▒░") + chalk.green.bgCyan("█▓▒░") + chalk.cyan.bgBlue("█▓▒"))
  console.log(chalk.red.bgYellow("█▓▒░") + chalk.yellow.bgGreen("█▓▒░") + chalk.green.bgCyan("█▓▒░") + chalk.cyan.bgBlue("█▓▒░"))
  console.log(chalk.red.bgYellow("▓▒░") + chalk.yellow.bgGreen("█▓▒░") + chalk.green.bgCyan("█▓▒░") + chalk.cyan.bgBlue("█▓▒░") + chalk.blue.bgMagenta("█"))
  console.log(chalk.red.bgYellow("▒░") + chalk.yellow.bgGreen("█▓▒░") + chalk.green.bgCyan("█▓▒░") + chalk.cyan.bgBlue("█▓▒░") + chalk.blue.bgMagenta("█▓"))
  console.log(chalk.red.bgYellow("░") + chalk.yellow.bgGreen("█▓▒░") + chalk.green.bgCyan("█▓▒░") + chalk.cyan.bgBlue("█▓▒░") + chalk.blue.bgMagenta("█▓▒"))
}

gradients()
