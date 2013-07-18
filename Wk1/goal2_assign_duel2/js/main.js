/**
 * Richard Luke
 * Duel Fight Game - FINISHED
 * Date: 7/15/13

 Assignment 1
 Part 1/3 of series
*/
(function(){
    console.log("FIGHT!!!");

    //player arrays
    var playerOne = ["Spiderman", 20, 100];
    var playerTwo = ["Batman", 20, 100];

//    //player damage
//    var player1Damage;
//    player1Damage = 20;
//    var player2Damage = 20;
//
//    //player health
//    var playerOneHealth = 100;
//    var playerTwoHealth = 100;

    //initiate round
    var round=1;

    function fight(){
        alert(playerOne.index[0]+":"+playerOne.index[2]+"  *START*  "+playerTwo.index[0]+":"+playerTwo.index[2]);
        for (var i = 0; i < 10; i++)
        {
            var f1 = Math.floor((Math.random()*playerOne.index[1])+playerOne.index[1] *.5);
            var f2 = Math.floor((Math.random()*playerTwo.index[1])+playerTwo.index[1] *.5);

            //inflict damage
            playerOneHealth-=f1;
            playerTwoHealth-=f2;

            console.log(playerOne.index[0]+": "+playerOne.index[2] + " " + playerTwo.index[0]+":"+playerTwo.index[2]);

            //check for victor
            var result = winnerCheck();
            console.log(result);
            if (result==="no winner")
            {
                round++;
                alert(playerOneName+":"+playerOneHealth+"  *ROUND "+round+" OVER"+"*  "+playerTwoName+":"+playerTwoHealth);

            } else{
                alert(result);
                break;
            };

        };
    };

    function winnerCheck(){
        var result="no winner";
        if (playerOneHealth < 1 && playerTwoHealth < 1)
        {
            result = "You Both Die";
        } else if(playerOneHealth < 1){
            result =playerTwoName+" WINS!!!"
        } else if (playerTwoHealth < 1)
        {
            result = playerOneName+" WINS!!!"
        };
       return result;
    };

    fight();

})();