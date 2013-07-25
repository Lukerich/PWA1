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
    var fhtBtn = document.querySelector("#fight_btn");
    var round = document.querySelector("#round_number input");

    console.log(round);
    fhtBtn.onclick = fight;
    function fight(){
                    console.log("in fight");
                    var scrLks = document.querySelectorAll('#scores p');
                        scrLks[0].innerHTML = ('id', players[0].name+':'+players[0].health);
                        scrLks[1].innerHTML = ('id', players[1].name+':'+players[1].health);
                        console.log(scrLks[0].innerHTML + scrLks[1].innerHTML);
            for (var i = 0; i < 10; i++){
                    var f1 = Math.floor((Math.random()*players[0].damage)+players[0].damage *.5);
                    var f2 = Math.floor((Math.random()*players[1].damage)+players[1].damage *.5);
                     console.log(f1 + f2);
                    //inflict damage
                    players[0].health-=f1;
                    players[1].health-=f2;

                    console.log(players[0].name+": "+players[0].health + " " + players[1].name+":"+players[1].health);

                    //check for victor
                    var result = winnerCheck();
                    console.log(result);
                    if (result==="no winner")
                    {
                    round++;
                        var scrLks = document.querySelectorAll('#scores p');
                        scrLks[0].innerHTML = ('id',f1);
                        scrLks[1].innerHTML = ('id',f2);

                        console.log(scrLks[0].innerHTML + scrLks[1].innerHTML);
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