/**
 * Richard Luke
 * Goal4: Assignment: The Duel - Part III
 * Date: 7/24/13

 Assignment 3
 Part 3/3 of series
*/
(function(){
    console.log("FIGHT!!!");


    var plyLst = {players:[
                    {name:'Spiderman', damage:20, health:100},
                    {name:'Batman', damage:20, health:100}
    ]
    };

        id.fight_btn.addEventListener('click',function(e){
            fight()(e);

            e.preventDefault();
            return false;
        }, false)


    //initiate round
    var round=1;

    function fight(){

        alert(plyLst.players[0].name+":"+plyLst.players[0].health+plyLst.players[1].name+":"+plyLst.players[1].health);

        for (var i = 0; i < 10; i++){
                var f1 = Math.floor((Math.random()*plyLst.players[0].damage)+plyLst.players[0].damage *.5);
                var f2 = Math.floor((Math.random()*plyLst.players[1].damage)+plyLst.players[1].damage *.5);

                //inflict damage
                plyLst.players[0].health-=f1;
                plyLst.players[1].health-=f2;

                console.log(plyLst.players[0].name+": "+plyLst.players[0].health + " " + plyLst.players[1].name+":"+plyLst.players[1].health);

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