/**
 * Richard Luke
 * Goal4: Assignment: The Duel - Part III
 * Date: 7/24/13

 Assignment 3
 Part 3/3 of series
*/
(function(){
    console.log("FIGHT!!!");



    var players = [{name:'Spiderman', damage:20, health:100},
                   {name:'Batman', damage:20, health:100}]



    //initiate round
    var round = 1;
    var fhtBtn = document.querySelector("#fight_btn");
    fhtBtn.onclick = fight;
    function fight(){
                    console.log("in fight");
                    var scrLks = document.querySelectorAll('#scores p');
                        scrLks[0].innerHTML = ('id', players[0].name+':'+players[0].health);
                        scrLks[1].innerHTML = ('id', players[1].name+':'+players[1].health);

            for (var i = 0; i < 10; i++){
                    var f1 = Math.floor((Math.random()*players[0].damage)+players[0].damage *.5);
                    var f2 = Math.floor((Math.random()*players[1].damage)+players[1].damage *.5);

                    //inflict damage
                    players[0].health-=f1;
                    players[1].health-=f2;

                    //check for victor
                    var result = winnerCheck();
                    console.log(result);
                    if (result==="no winner")
                    {
                        round++;
                        console.log(round);
                        var round = document.querySelectorAll('#round_number input');
                        var scrLks = document.querySelectorAll('#scores p');
                        scrLks[0].innerHTML = ('id', players[0].name+':'+players[0].health);
                        scrLks[1].innerHTML = ('id', players[1].name+':'+players[1].health);
                }else{
                    scrRsl = document.querySelector('scores');
                    scrRsl= result;
                    break;
                    }
            };
    };

                function winnerCheck(){
                    var result="no winner";
                    if (players[0].health < 1 && players[1].health < 1)
                    {
                        result = "You Both Die";
                    } else if(players[0].health < 1){
                        result = players[1].name+" WINS!!!"
                    } else if (players[1].health < 1)
                    {
                        result = players[0].name+" WINS!!!"
                    };
                    return result;
                };
})();