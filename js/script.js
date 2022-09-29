var argButtonName, buttonPaper, buttonRock, buttonScissors, argMoveId, playerMove, computerMove, randomNumber, playerInput;


function buttonClicked(argButtonName) {

  clearMessages();
  console.log(argButtonName + ' został kliknięty');

  playerMove = getMoveName(argButtonName);
  console.log('wybór ruchu gracza to: ' + playerMove);
  console.log('ruch gracza to: ' + playerMove);

  randomNumber = Math.floor(Math.random() * 3 + 1);
  console.log('wylosowana liczba to: ' + randomNumber);

  function getMoveName(argMoveId) {
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
      printMessage('Nie znam ruchu o id ' + argMoveId + '. Zakładam, że chodziło o "kamień".');
      return 'kamień';
    }
  }

  computerMove = getMoveName(randomNumber);
  console.log('ruch komputera to: ' + computerMove);

  function displayResult(playerMove, computerMove) {
    console.log('wywołano funkcję displayResults z argumentami: ' + playerMove + ', ' + computerMove);
    if (playerMove == 'papier' && computerMove == 'kamień') {
      printMessage('Wygrywasz!');
    }
    else if (playerMove == 'kamień' && computerMove == 'nożyce') {
      printMessage('Wygrywasz!');
    }
    else if (playerMove == 'nożyce' && computerMove == 'papier') {
      printMessage('Wygrywasz!');
    }
    else if (playerMove == computerMove) {
      printMessage('Remis!');
    }
    else {
      printMessage('Przegrywasz :(');
    }
    printMessage('Zagrałem ' + computerMove + ', a Ty ' + playerMove);
  }

  displayResult(playerMove, computerMove);
}

buttonRock = document.getElementById('button-rock');
buttonRock.addEventListener('click', function(){ buttonClicked(1); });

buttonPaper = document.getElementById('button-paper');
buttonPaper.addEventListener('click', function(){ buttonClicked(2); });

buttonScissors = document.getElementById('button-scissors');
buttonScissors.addEventListener('click', function(){ buttonClicked(3); });
