const checkWin = require("../checkwin");

const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ]

describe("Win checker function", () => {
    // Given a winning combination of 3 has been hit, return true
    test("Given a winning combination of 3 has been hit, return true", () => {
        expect(checkWin(winningCombos, [0, 1, 2])).toEqual(true);
    });

    // Given a non winning combination of 3 has been hit, return false
    test("Given a non winning combination of 3 has been hit, return false", () => {
        expect(checkWin(winningCombos, [1, 2, 3])).toEqual(false);
    });

    // Given a winning combination of 3 not in order has been hit, return true
    test("Given a winning combination of 3 not in order has been hit, return true", () => {
        expect(checkWin(winningCombos, [1, 0, 2])).toEqual(true);
    });

   // Given no combination has been hit, return false
    test("Given a winning combination of 3 has been hit, return true", () => {
        expect(checkWin(winningCombos, [])).toEqual(false);
    }); 

    // Given a winning combination of 3 in 5 moves has been hit, return true
    test("Given a winning combination of 3 in 5 moves has been hit, return true", () => {
        expect(checkWin(winningCombos, [0, 1, 2, 3, 4])).toEqual(true);
    }); 

    // Given a winning combination of 3 in 4 moves has been hit, return true
    test("Given a winning combination of 3 in 4 moves has been hit, return true", () => {
        expect(checkWin(winningCombos, [0, 1, 2, 3])).toEqual(true);
    });

    // Given a non winning combination of 3 in 4 moves has been hit, return false
    test("Given a winning combination of 3 in 4 moves has been hit, return false", () => {
        expect(checkWin(winningCombos, [0, 2, 3, 4])).toEqual(false);
    }); 

    // Given a non winning combination of 3 in 5 moves has been hit, return true
    test("Given a winning combination of 3 in 5 moves has been hit, return true", () => {
    expect(checkWin(winningCombos, [0, 2, 3, 4, 7])).toEqual(false);
}); 

});

