function RockPaperScissors() {

  this._winConditions = { 'rock': 'scissors',
                        'paper': 'rock',
                        'scissors': 'paper'
                        };
  this.outcome;
  this.computerChoice;
  this.playerChoice;
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
  console.log('-----');
  r.randomComputerSelection();
  console.log(r.computerChoice);
  r.play("rock", r.computerChoice);
  console.log(r.outcome);
}

p = new RockPaperScissors();
{
  console.log('-----');
  p.randomComputerSelection()
  console.log(p.computerChoice);
  p.play("rock", p.computerChoice);
  console.log(p.outcome);
}

s = new RockPaperScissors();
{
  console.log('-----');
  s.randomComputerSelection()
  console.log(s.computerChoice);
  s.play("rock", s.computerChoice);
  console.log(s.outcome);
}
