let pos = [];

function drawBoard(size) {
    let board = "<table>";
    for (i = 0; i < size; i++) {
        board += "<tr>";
        pos[i] = [];
        for (j = 0; j < size; j++) {
            board += "<td onclick='changeStatus(this, " + i + ", " + j + ")'></td>";
            pos[i][j] = -1;
        }
        board += "</tr>";
    }
    board += "</table>";
    document.getElementById("gameboard").innerHTML = board;
}

let status = "X";

function changeStatus(cell, xPos, yPos) {
    cell.innerHTML = status;
    if (status == "X") {
        pos [xPos][yPos] = 1;
        status = "O";
    } else {
        pos [xPos][yPos] = 0;
        status = "X";
    }
    checkwin(xPos, yPos);
}

function checkwin(xPos, yPos) {
    let count = 1;
    let i = xPos;
    let j = yPos;
    let valueCell = pos[xPos][yPos];

    while (pos[i][j + 1] == valueCell) {
        count++;
        confirmWinner(count, 5);
        j++;
    }
    i = xPos;
    j = yPos;
    while (pos[i][j - 1] == valueCell) {
        count++;
        confirmWinner(count, 5);
        j--;
    }

    count = 1;
    while (pos[i + 1][j] == valueCell) {
        count++;
        confirmWinner(count, 5);
        i++;
    }
    i = xPos;
    j = yPos;
    while (pos[i - 1][j] == valueCell) {
        count++;
        confirmWinner(count, 5);
        i--;
    }

    count = 1;
    while (pos[i + 1][j + 1] == valueCell) {
        count++;
        confirmWinner(count, 5);
        i++;
        j++;
    }
    i = xPos;
    j = yPos;
    while (pos[i - 1][j - 1] == valueCell) {
        count++;
        confirmWinner(count, 5);
        i--;
        j--;
    }

    count = 1;
    while (pos[i + 1][j - 1] == valueCell) {
        count++;
        confirmWinner(count, 5);
        i++;
        j--;
    }
    i = xPos;
    j = yPos;
    while (pos[i - 1][j + 1] == valueCell) {
        count++;
        confirmWinner(count, 5);
        i--;
        j++;
    }

}

function confirmWinner(count, number) {
    if (count == number) {
        alert("You are the winner!");
        return;
    }

}