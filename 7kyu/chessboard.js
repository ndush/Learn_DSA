// A grid is a perfect starting point for many games (Chess, battleships, Candy Crush!).

// Making a digital chessboard I think is an interesting way of visualising how loops can work together.

// Your task is to write a function that takes two integers rows and columns and returns a chessboard pattern as a two dimensional array.

// So chessBoard(6,4) should return an array like this:

// [
//     ["O","X","O","X"],
//     ["X","O","X","O"],
//     ["O","X","O","X"],
//     ["X","O","X","O"],
//     ["O","X","O","X"],
//     ["X","O","X","O"]
// ]
// And chessBoard(3,7) should return this:

// [
//     ["O","X","O","X","O","X","O"],
//     ["X","O","X","O","X","O","X"],
//     ["O","X","O","X","O","X","O"]
// ]
// The white spaces should be represented by an: 'O'

// and the black an: 'X'

// The first row should always start with a white space 'O'

function chessBoard(rows, columns) {
  // Step 1: Initialize an empty array to hold the board
  const board = [];

  // Step 2: Outer loop to create each row
  for (let i = 0; i < rows; i++) {
    // Step 3: Create a new empty row for the current iteration
    const row = [];

    // Step 4: Inner loop to fill the row with "O" and "X"
    for (let j = 0; j < columns; j++) {
      // Step 5: Determine whether to add "O" or "X" based on the sum of indices
      row.push((i + j) % 2 === 0 ? "O" : "X");
    }

    // Step 6: Push the completed row into the board
    board.push(row);
  }

  // Step 7: Return the completed board
  return board;
}
