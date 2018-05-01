var userChoice = prompt("Do you choose rock, paper, or scissors");
var computerChoice = Math.random();

if (computerChoice < 0.33) {
    computerChoice = "rock";
} else if (computerChoice <= 0.66) {
    computerChoice = "paper";
} else {
    computerChoice = "scissors";
}

var compare = function (choice1, choice2) {
    if (choice1 === choice2) {
        return "the result is a tie!";
    }

    if (choice1 === "rock") {
        if (choice2 === "scissors") {
            return "rock crushes scissors to smitherines and wins!";
        } else {
            if (choice2 === "paper") {
                return "Paper swallows rock and wins!";
            }
        }
    }

    if (choice1 === "paper") {
        if (choice2 === "scissors") {
            return "scissors cuts paper apart and wins!";
        } else {
            if (choice2 === "rock") {
                return "paper wraps rock and wins!";
            }
        }
    }

    if (choice1 === "scissors") {
        if (choice2 === "paper") {
            return "scissors cuts paper and wins!";
        } else {
            if (choice2 === "rock") {
                return "rock crushes scissors and wins!"
            }
        }
    }
};

alert("User choice: " + userChoice);
alert("Computer Choice: " + computerChoice);

alert(compare(userChoice, computerChoice));

