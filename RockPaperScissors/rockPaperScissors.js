var userChoice = prompt("Do you choose rock, paper, scissors,  lizard, or spock");
var computerChoice = Math.random();

if (computerChoice < 0.20) {
    computerChoice = "rock";
} else if (computerChoice <= 0.40) {
    computerChoice = "paper";
} else if (computerChoice <= 0.60) {
    computerChoice = "scissors";
} else if (computerChoice <= 0.80) { 
    computerChoice = "lizard";
} else {
    computerChoice = "spock";
}

var compare = function (choice1, choice2) {
    if (choice1 === choice2) {
        return "the result is a tie!";
    }

    if (choice1 === "rock") {
        if (choice2 === "scissors") {
            return "rock crushes scissors to smitherines and wins!";
        } else if (choice2 === "paper") {
            return "Paper swallows rock and wins!";
        } else if (choice2 === "lizard") {
            return "rock crushes lizard";
        } else {
            if (choice2 === "spock") {
                return "spock vaporizes rock";
            }
        }
        
    }

    if (choice1 === "paper") {
        if (choice2 === "scissors") {
            return "scissors cuts paper apart and wins!";
        } else if (choice2 === "rock") {
            return "paper wraps rock and wins!";
        } else if (choice2 === "lizard") {
            return "lizard eats paper";
        } else {
            if (choice2 === "spock") {
                return "paper disproves spock";
            }
        }
    }

    if (choice1 === "scissors") {
        if (choice2 === "paper") {
            return "scissors cuts paper and wins!";
        } else if (choice2 === "rock") {
            return "rock crushes scissors and wins!"
        } else if (choice2 === "lizard") {
            return "scissors decapitates lizard";
        } else {
            if (choice2 === "spock") {
                return "spock smashes scissors";
            }
        }
    }

    if (choice1 === "lizard") {
        if (choice2 === "rock") {
            return "rock crushes lizard";
        } else if (choice2 === "paper") {
            return "lizard eats paper";
        } else if (choice2 === "scissors") {
            return "scissors decapitates lizard";
        } else {
            if (choice2 === "spock") {
                return "lizard poisons spock";
            }
        }
    }

    if (choice1 === "spock") {
        if (choice2 === "rock") {
            return "spock vaporizes rock";
        } else if (choice2 === "paper") {
            return "paper disproves spock";
        } else if (choice2 === "scissors") {
            return "spock smashes scissors";
        } else {
            if (choice2 === "lizard") {
                return "lizard poisons spock";
            }
        }
    }
};

alert("User choice: " + userChoice);
alert("Computer Choice: " + computerChoice);

alert(compare(userChoice, computerChoice));

