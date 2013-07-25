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


    //initiate round
    var round=1;
    document.id.fight_box.fight_btn.onclick = function(e){
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
                            alert(plyLst.players[0].name+":"+plyLst.players[0].health+plyLst.players[1].name+":"+plyLst.players[1].health);

                        } else{
                            alert(result);
                            break;
                        };

                    };
                e.preventDefault();
                return false;
    };
    };
                function winnerCheck(){
                    var result="no winner";
                    if (plyLst.players[0].health < 1 && plyLst.players[1].health < 1)
                    {
                        result = "You Both Die";
                    } else if(playerOne[2] < 1){
                        result = plyLst.players[1].name+" WINS!!!"
                    } else if (playerTwo[2] < 1)
                    {
                        result = plyLst.players[0].name+" WINS!!!"
                    };
                    return result;
                };

    fight();

})();