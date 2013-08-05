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

    var buT = document.querySelector("button");

    var cliKs = 0;

    var magNum = Math.floor(Math.random() * 10 + 1);
    console.log(magNum);

    buT.onclick = function(e){

        var inPut = document.getElementById('input').value;    // variable assigned to user input

        if (cliKs < 3){                                 // if else logic to evaluate input against Magic Number
            if (inPut < magNum){
                document.getElementById("output").innerHTML = ("To Low");
            } else if (inPut > magNum){
                document.getElementById("output").innerHTML = ("To High");
            }else if (inPut == magNum){
                document.getElementById("output").innerHTML = ("You Win!!!");
                gmOv();                                   // call game over function
            }                                            // If statement for clicks
            cliKs++;                                            //  adding to click count
        }else{                                                     //else to end display and disable button
         gmOv();
        }

    e.preventDefault();                                 // prevent to stop function
    return false;
    };

    function gmOv(){                                     //game over function - disables button
        var inBt = document.querySelector("button");       // variable to assign button
        inBt.innerHTML = ("DONE!!!");                            // assign DONE!!!
        document.querySelector("button").disabled=true;           //DOM to disable button
    }

})();