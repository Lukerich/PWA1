/**
 * Richard Luke
 * Duel Fight Game - FINISHED
 * Date: 7/17/13

 Assignment 2
 Part 2/3 of series
*/
(function(){
    console.log("FIGHT!!!");

    //player arrays
    var playerOne = ["Spiderman", 20, 100];
    var playerTwo = ["Batman", 20, 100];


    //initiate round
    var round=1;

    function fight(){
        alert(playerOne[0]+":"+playerOne[2]+"  *START*  "+playerTwo[0]+":"+playerTwo[2]);
        for (var i = 0; i < 10; i++)
        {
            var f1 = Math.floor((Math.random()*playerOne[1])+playerOne[1] *.5);
            var f2 = Math.floor((Math.random()*playerTwo[1])+playerTwo[1] *.5);

            //inflict damage
            playerOne[2]-=f1;
            playerTwo[2]-=f2;

            console.log(playerOne[0]+": "+playerOne[2] + " " + playerTwo[0]+":"+playerTwo[2]);

            //check for victor
            var result = winnerCheck();
            console.log(result);
            if (result==="no winner")
            {
                round++;
                alert(playerOne[0]+":"+playerOne[2]+"  *ROUND "+round+" OVER"+"*  "+playerTwo[0]+":"+playerTwo[2]);

            } else{
                alert(result);
                break;
            };

        };
    };

    function winnerCheck(){
        var result="no winner";
        if (playerOne[2] < 1 && playerTwo[2] < 1)
        {
            result = "You Both Die";
        } else if(playerOne[2] < 1){
            result =playerTwo[0]+" WINS!!!"
        } else if (playerTwo[2] < 1)
        {
            result = playerOne[0]+" WINS!!!"
        };
       return result;
    };

    fight();

})();