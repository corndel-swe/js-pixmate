import chalk from "chalk"

// utility function, or this will be very tedious
function pieceOnSquare(piece, pieceColour, squareColour) {
  let pieceCharacter = "  "
  if (pieceColour === squareColour) {
    // piece is same colour as square, so it should be the transparent version
    switch (piece) {
      case "pawn":
        pieceCharacter = "♙ "
        break
      case "knight":
        pieceCharacter = "♘ "
        break
      case "bishop":
        pieceCharacter = "♗ "
        break
      case "rook":
        pieceCharacter = "♖ "
        break
      case "queen":
        pieceCharacter = "♕ "
        break
      case "king":
        pieceCharacter = "♔ "
        break
    }
  } else {
    // piece is opposite colour to square, so it should be the solid version
    switch (piece) {
      case "pawn":
        pieceCharacter = "♟︎ "
        break
      case "knight":
        pieceCharacter = "♞ "
        break
      case "bishop":
        pieceCharacter = "♝ "
        break
      case "rook":
        pieceCharacter = "♜ "
        break
      case "queen":
        pieceCharacter = "♛ "
        break
      case "king":
        pieceCharacter = "♚ "
        break
    }
  }

  // colour of piece character should be the opposite to the square colour
  // (regardless of the in-game colour of the piece)
  if (squareColour === "black") {
    let result = chalk.white.bgBlack(pieceCharacter)
    return result
  } else {
    let result = chalk.black.bgWhite(pieceCharacter)
    return result
  }
}

function chessboard() {
  for (let row = 1; row <= 8; row++) {
    let line = ""
    for (let col = 1; col <= 8; col++) {
      // if (row + col) is even, it should be a black square
      // otherwise, white
      let squareColour
      if ((row + col) % 2 === 0) {
        squareColour = "black"
      } else {
        squareColour = "white"
      }

      // row-specific logic
      if (row === 1) {
        // black's back row
        if (col === 1 || col === 8) {
          // black rook
          line += pieceOnSquare("rook", "black", squareColour)
        } else if (col === 2 || col === 7) {
          // black knight
          line += pieceOnSquare("knight", "black", squareColour)
        } else if (col === 3 || col === 6) {
          // black bishop
          line += pieceOnSquare("bishop", "black", squareColour)
        } else if (col === 4) {
          // black queen
          line += pieceOnSquare("queen", "black", squareColour)
        } else if (col === 5) {
          // black king
          line += pieceOnSquare("king", "black", squareColour)
        }
      } else if (row === 2) {
        // black's front row
        line += pieceOnSquare("pawn", "black", squareColour)
      } else if (row === 7) {
        // white's front row
        line += pieceOnSquare("pawn", "white", squareColour)
      } else if (row === 8) {
        // white's back row
        if (col === 1 || col === 8) {
          // white rook
          line += pieceOnSquare("rook", "white", squareColour)
        } else if (col === 2 || col === 7) {
          // white knight
          line += pieceOnSquare("knight", "white", squareColour)
        } else if (col === 3 || col === 6) {
          // white bishop
          line += pieceOnSquare("bishop", "white", squareColour)
        } else if (col === 4) {
          // white queen
          line += pieceOnSquare("queen", "white", squareColour)
        } else if (col === 5) {
          // white king
          line += pieceOnSquare("king", "white", squareColour)
        }
      } else {
        // blank rows in middle
        line += pieceOnSquare("empty", "empty", squareColour)
      }
    }
    console.log(line)
  }
}

chessboard()
