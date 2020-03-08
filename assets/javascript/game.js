
    // Generates random number to guess
    var Random=Math.floor(Math.random()*102+19)
    console.log(Random)
    // Display random number
    $('#scoreToMatch').text(Random);
    
    //Generate random number for each crystal
    var num1= Math.floor(Math.random()*12+1)
    $(".red").attr("data-crystalvalue", num1)
    var num2= Math.floor(Math.random()*12+1)
    $(".blue").attr("data-crystalvalue", num2)
    var num3= Math.floor(Math.random()*12+1)
    $(".yellow").attr("data-crystalvalue", num3)
    var num4= Math.floor(Math.random()*12+1)
    $(".green").attr("data-crystalvalue", num4)
    // Variables to keep track of wins, losses and total
    var playerTotal= 0; 
    var wins= 0;
    var losses = 0;
    $('#wins').text(wins);
    $('#losses').text(losses);

// Reset game
function reset(){
      Random=Math.floor(Math.random()*102+19);
      console.log(Random)
      $('#scoreToMatch').text(Random);
      num1= Math.floor(Math.random()*12+1);
      $(".red").attr("data-crystalvalue", num1)
      num2= Math.floor(Math.random()*12+1);
      $(".blue").attr("data-crystalvalue", num2)
      num3= Math.floor(Math.random()*12+1);
      $(".yellow").attr("data-crystalvalue", num3)
      num4= Math.floor(Math.random()*12+1);
      $(".green").attr("data-crystalvalue", num4)
      playerTotal= 0;
      $('#totalScore').text(playerTotal);
      } 

      // Display wins
    function woohoo(){
    alert("Congrats! You won!");
      wins++; 
      $('#wins').text(wins);
      reset();
    }
    // Display losses
    function loser(){
    alert ("Sorry! You lose!");
      losses++;
      $('#losses').text(losses);
      reset()
    }

    $('.img-thumnail').on ('click', function() {
         var number = $(this).attr('data-crystalvalue');
         number =parseInt(number);
         console.log( "img-thumnail :"+number);
         playerTotal = playerTotal +number;        
         $('#totalScore').text(playerTotal); 
         console.log("New playerTotal= " + playerTotal);
         //Win & lose conditions
        if (playerTotal == Random){
          woohoo();
        }
        else if ( playerTotal > Random){
          loser();
        }   
    })
  

