/**
 * GUESSING GAME:
 *
 * Created By: Richard Luke
 * Date:   7/26/2013
 * 
 * GUESSING GAME
 */

//Game variables
(function (){

    console.log('Start function');
    var buT = document.querySelector("button");
    console.log(buT);
    var cliKs = 0;
    console.log(cliKs);

    buT.onclick = function(e){

        console.log("in function");

        var inPut = document.getElementById('input');
            console.log(inPut);
        var magNum = Math.floor(Math.random() * 10);
            console.log(magNum);

        if (cliKs < 2){
            if (inPut < magNum){
                console.log("To Low");
            } else if (inPut > magNum){
                console.log("To High");
            }else if (inPut === magNum){
                console.log("You Win!!");
                gmOv();
            }                                            // If statement for clicks
        clKs();                                            //  calling clKs function
        }else{                                                     //else to end display and disable button
         gmOv();
        }

    e.preventDefault();                                 // prevent to stop function
    return false;
    };

    function gmOv(){
        console.log("in gmOv");
        var inBt = document.querySelector("button");       // variable to assign button
        inBt.innerHTML = ("DONE!!!");                            // assign DONE!!!
        document.querySelector("button").disabled=true;           //DOM to disable button
    }

    function clKs(){                                             // click function
        console.log("in clKs");
        document.querySelectorAll("button").value = ++cliKs;     // getElementById to add up clicks
    }

})();