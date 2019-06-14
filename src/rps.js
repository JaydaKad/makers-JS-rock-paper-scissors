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


r = new RockPaperScissors();
{
  console.log("expect to lose");
  r.play("rock", "paper");
  console.log(r.outcome);
}

p = new RockPaperScissors();
{
  console.log("expect a draw")
  p.play("scissors", "scissors");
  console.log(p.outcome);
}

s = new RockPaperScissors();
{
  console.log("expect to win")
  s.play("rock", "scissors");
  console.log(s.outcome);
}
