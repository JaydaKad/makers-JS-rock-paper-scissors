$(document).ready(function() {
  var rps = new RockPaperScissors();

  $('#rock').click(function(){
    rps.play("rock", "paper");
    $('#outcome').text(rps.outcome);
  });
  $('#paper').click(function(){
    rps.play("paper", "paper");
    $('#outcome').text(rps.outcome);
  });
  $('#scissors').click(function(){
    rps.play("scissors", "paper");
    $('#outcome').text(rps.outcome);
  });
});



//   function updateTemp() {
//     $('#player-choice').text(thermostat.playerChoice);



// $(document).ready(function() {
//   var thermostat = new Thermostat();
//   updateTemp();
//   $('#temp-up').click(function(){
//     thermostat.uptemp();
//     updateTemp();
//   });
//   $('#temp-down').click(function(){
//     thermostat.downtemp();
//     updateTemp();
//   });
//   $('#temp-reset').click(function() {
//     thermostat.reset();
//     updateTemp();
//   });
//
//   $('#psm').click(function() {
//     thermostat.pswitch();
//     updateTemp();
//   })
//
//   function updateTemp() {
//     $('#temperature').text(thermostat.temp);
//     $('#temperature').attr('class', thermostat.hello());
//   };
//   $.get('http://api.openweathermap.org/data/2.5/weather?q=London&appid=a3d9eb01d4de82b9b8d0849ef604dbed&units=metric', function(data) {
//   $('#current-temperature').text(data.main.temp);
// });
// });
