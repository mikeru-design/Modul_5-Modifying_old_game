let argButtonName, buttonPaper, buttonRock, buttonScissors;

buttonPaper = document.getElementById('button-paper');
buttonRock = document.getElementById('button-rock');
buttonScissors = document.getElementById('button-scissors');

function buttonClicked(argButtonName) {
  clearMessages();
  console.log(argButtonName + ' został kliknięty');
  
  let computerMove, playerMove, randomNumber;
  
  playerMove = argButtonName;
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
      
buttonRock.addEventListener('click', function(){ buttonClicked('papier'); });
buttonPaper.addEventListener('click', function(){ buttonClicked('kamień'); });
buttonScissors.addEventListener('click', function(){ buttonClicked('nożyce'); });


// Gra papier kamień nożyce
// 1. użytkownik wybiera swój ruch
//  1.1 tworzymy 3 guziki do wyboru ruchu nazwane papier, kamień, nożyce
//  1.2 pobieramy te guziki po ich id
//  1.3 naciśnięcie guzika wywołuje funkcję z wartością przypisaną guzikowi
//  1.3 przypisujemy zmiennej playerMove wartość wciśniętego guzika

// 2. komputer wybiera swój ruch
//  2.1 komputer losuje liczbę od 1 do 3 
//  2.2 przypisujemy zmiennej computerMove wartość poprzez uruchamienie funkcji z wylosowaną liczbą a następnie przypisującej wylosowanej liczbie wartość papier, kamień lub nożyce

// computerMove = getMoveName(randomNumber);

// 3. wyświetlony zostaje wynik pojedynku kto wygrał
  // 3.1 komputer porównuje wartości zmiennych playerMove i computerMove określając zwycięstwo
  // 3.2 komputer wyświetla jaki jest wynik pojedynku na podstawie zależności między wartościami