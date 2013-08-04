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
         console.log(document.getElementsByTagName("button"));
    var buTn = document.getElementsByTagName('button');

    var cliKs = 0;

    buTn.onclick = function(){

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
        var inBt = document.getElementsByTagName();       // variable to assign button
        inBt.innerHTML = ("DONE!!!");                            // assign DONE!!!
        document.onclick = function() {return false;};           //DOM to disable button
    }

    function clKs(){                                             // click function
        document.getElementById('guess').value = ++cliKs;     // getElementById to add up clicks
    }

})();