/*
  Richard Luke
 8/02/2013
 Goal11: Assignment: FINAL
	* Final for PWA-1
*/
(function(){                                                    // self executing function

        var clKS = 0;                                            //variable to count click of the mouse
        var nxtBtn = document.getElementById("info_btn");        //variable to get the button

        //Initial array of objects with nested GPA array for constructor Students
        var students = [
            new Students('Jo Ann Smith', '123 University Blvd', 'Orlando', 'FL', [3.6, 3.4, 3.7], new Date()),
            new Students('Russell Humphreys', '321 Universe Blvd', 'Miami', 'FL', [3.8, 3.9, 3.8], new Date())
        ];

        nxtBtn.onclick = shwStd;                           // using variable to evoke function shwStd using .onclick method

        function shwStd(e){                             // beginning of function shwStd

        if (clKS == 0){                                //if statement to evaluate number of clicks
            console.log("----------------------------Student list before new addition------------------------------");
            for (var i = 0; i < 2; i++){               // for loop to output student info to console.log
                conlog(i);                             // function call to console log output with first set of students
            }
            addStd();                                   // function call for addStd
            console.log("----------------------------Student list after new addition------------------------------");

            for (var i = 0; i < 3; i++){               //if statement to evaluate number of clicks
                conlog(i);                            // function call to console log output with added student
            }
        }

        function conlog(i){                            // function to output student information to console
             console.log("Name: "+ students[i].name);                 // student name - address - GPA scores - today's date
             console.log("Address: "+ students[i].address + ', ' + students[i].city + ', ' + students[i].state);
             console.log("GPA: " + "[" + students[i].GPA.toString().replace(/,/g , ", ") + "]");      // gpa array with formatting
             console.log("Date: " + students[i].Date.toLocaleDateString().replace(/2013/g , "13"));   // today's date with fomatting
        }
                                                                                       // document output to innerHTML for
        document.getElementById("name").innerHTML = ('Name: ' + students[clKS].name);   // student information - name - address is concatenated
        document.getElementById("address").innerHTML = ('Address: ' + students[clKS].address + ", " + students[clKS].city + ", " + students[clKS].state);
        document.getElementById("gpa").innerHTML = ('GPA: ' + "[" + students[clKS].GPA.toString().replace(/,/g , ", ") + "]");  // GPA array values formatted
        document.getElementById("date").innerHTML = ('Date: ' + students[clKS].Date.toLocaleDateString().replace(/2013/g , "13"));   // today's date with formatting
        document.getElementById("gpaavg").innerHTML = ("Average GPA: " + students[clKS].gpaAvg());  // output the average to HTML

        if (clKS < 2){                                            // If statement for clicks
            cKs();                                            //  calling clKs function
        }else{                                                     //else to end display and disable button
            var inBt = document.querySelector('#info_btn a');       // variable to assign button
            inBt.innerHTML = ("DONE!!!");                            // assign DONE!!!
            document.onclick = function() {return false;};           //DOM to disable button
        }

        e.preventDefault();                        // stops the default event from happening
        return false;                             //  stops further running of the function
        }

        function addStd(){                          // function to add new student via constructor Students
            var puStd = new Students('James Bond', '123 Test Dr', 'Orlando', 'Florida', [2.5, 3.9, 2.2], new Date());
            students.push(puStd);                        // method push of data
        }

        function cKs(){                                             // click function
            document.getElementById('info_btn').value = ++clKS;     // getElementById to add up clicks
        }

})();                                                        // end of self executing function (wrapper)