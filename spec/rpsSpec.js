describe("RockPaperScissors", function() {

  var rps;

  beforeEach(function() {
    rps = new RockPaperScissors();
  });

  it("should display player as winner of the game", function() {
    rps.play('rock', 'scissors')
    expect(rps.outcome).toEqual("Congatulations, you win!");
  });


});
//
// describe Game do
//   it 'can display player 1 winning the game' do
//     g = Game.new
//     g.player_1_choice = 'rock'
//     g.player_2_choice = 'scissors'
//     expect(g.outcome).to eq("Congatulations, you win!")
//   end
//
//   it 'can display player 2 winning the game' do
//     g = Game.new
//     g.player_1_choice = 'paper'
//     g.player_2_choice = 'scissors'
//     expect(g.outcome).to eq("You lose!")
//   end
//
//   it 'can display a draw' do
//     g = Game.new
//     g.player_1_choice = 'scissors'
//     g.player_2_choice = 'scissors'
//     expect(g.outcome).to eq("It's a draw")
//   end
// end
