function RockPaperScissors() {

  this._winConditions = { 'rock': 'scissors',
                        'paper': 'rock',
                        'scissors': 'paper'
                        };
  this.outcome;
  this.computerChoice;

}

RockPaperScissors.prototype.play = function(playerChoice, computerChoice) {
    if (playerChoice == computerChoice){
      this.outcome = "It's a draw"
    } else if (this._winConditions[playerChoice] == computerChoice){
      this.outcome = "Congatulations, you win!"
    } else {
      this.outcome = "You lose!"
    }
};

RockPaperScissors.prototype.randomComputerSelection = function() {
  choices = ["rock", "paper", "scissors"];
  this.computerChoice = choices[Math.floor(Math.random() * choices.length)];
}



r = new RockPaperScissors();
{
  console.log("expect to lose");
  r.randomComputerSelection()
  console.log(r.computerChoice);
  r.play("rock", "paper");
  console.log(r.outcome);

}

p = new RockPaperScissors();
{
  console.log("expect a draw")
  console.log(p.randomComputerSelection())
  p.play("scissors", "scissors");
  console.log(p.outcome);
}

s = new RockPaperScissors();
{
  console.log("expect to win")
  s.play("rock", "scissors");
  console.log(s.outcome);
}
