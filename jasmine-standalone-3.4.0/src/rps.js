function RockPaperScissors() {

  this.winConditions = { 'rock': 'scissors',
                        'paper': 'rock',
                        'scissors': 'paper'
                        };

  this.outcome;
}
debugger
RockPaperScissors.prototype.play = function(playerChoice, computerChoice) {

      if (playerChoice == computerChoice){
        this.outcome = "It's a draw"
      } else if (this.winConditions[playerChoice] == computerChoice){
        "Congatulations, you win!"
      } else {
        this.outcome = "You lose!"
      }

};


r = new RockPaperScissors();
{
  console.log("expect to lose");
  r.play("rock", "paper");
  console.log(r.outcome);
}

p = new RockPaperScissors();
{
  console.log("expect to draw")
  console.log(p.play("paper", "paper"));
}

s = new RockPaperScissors();
{
  console.log("expect to win")
  console.log(s.play("scissors", "paper"));
}
