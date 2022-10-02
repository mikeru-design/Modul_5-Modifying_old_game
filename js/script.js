const
buttonPaper = document.getElementById('button-paper'),
buttonRock = document.getElementById('button-rock'),
buttonScissors = document.getElementById('button-scissors');

function startGame(playerMove) {
  clearMessages();
  console.log(playerMove + ' został kliknięty');

  let computerMove, randomNumber;

   console.log('ruch gracza to: ' + playerMove);

        randomNumber = Math.floor(Math.random() * 3 + 1);
        console.log('wylosowana liczba to: ' + randomNumber);


        function computerMoveName(argMoveId) {
          console.log('wywołano funkcję getMoveName z argumentem: ' + argMoveId);
          if (argMoveId == 1) {
            return 'kamień';
          }
          else if (argMoveId == 2) {
            return 'papier';
          }
          else if (argMoveId == 3) {
            return 'nożyce';
          }
          else {
            printMessage('Nie znam ruchu o id ' + argMoveId + '. Zakładam, że chodziło o "papier".');
            return 'papier';
          }
        }

        computerMove = computerMoveName(randomNumber);
        console.log('Wylosowanej liczbie przypisano wartość ' + computerMove);
        console.log('ruch komputera to: ' + computerMove);

        function displayResult(argPlayerMove, argComputerMove) {
          console.log('wywołano funkcję displayResults z argumentami: ' + argPlayerMove + ', ' + argComputerMove);
          if (argPlayerMove == 'papier' && argComputerMove == 'kamień') {
            printMessage('Wygrywasz!');
          }
          else if (argPlayerMove == 'kamień' && argComputerMove == 'nożyce') {
            printMessage('Wygrywasz!');
          }
          else if (argPlayerMove == 'nożyce' && argComputerMove == 'papier') {
            printMessage('Wygrywasz!');
          }
          else if (argPlayerMove == argComputerMove) {
            printMessage('Remis!');
          }
          else {
            printMessage('Przegrywasz :(');
          }
          printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);
        }

        displayResult(playerMove, computerMove);
  }

buttonPaper.addEventListener('click', function(){ startGame('papier'); });
buttonRock.addEventListener('click', function(){ startGame('kamień'); });
buttonScissors.addEventListener('click', function(){ startGame('nożyce'); });