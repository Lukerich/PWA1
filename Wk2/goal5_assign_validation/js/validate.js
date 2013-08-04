/*
     Richard Luke
     8/3/2013
     Assignment: Goal 5 Assign Validation
*/

(function(){


        var button = document.getElementById('f_submit');               // button assigned to HTML ID

        var myForm = function(e){                                  // function to collect user input

                                                                          // user input from HTML ID's
            var f_username = document.getElementById('f_username');
            var f_email = document.getElementById('f_email');
            var f_phone = document.getElementById('f_phone');
            var f_password = document.getElementById('f_password');
            var f_ssn = document.getElementById('f_ssn');

            validateField(f_username);                        //calls to validate function for each field of user input
            validateField(f_email);
            validateField(f_phone);
            validateField(f_password);
            validateField(f_ssn);

        e.preventDefault();                                 // prevent to stop function
        return false;

     };
    var validateField = function(inputName){              // validation function
        if (inputName.name === "f_username"){
            var pattern = /^([A-Z]\w+\s?)*$/;                           // pattern makes username's names start with a upper case letter
        }
        if (inputName.name === 'f_email'){
            var pattern = /([a-zA-Z]{1}\w[-._\w]*\w@\w[-._\w]*\w\.\w{2,4})/;    // pattern enforces email address convention 1st char is a letter
        }                                                                       // then any char a-zA-Z0-9 an underscore - . - _ separators with remain chars
        if (inputName.name === 'f_phone'){                                       // a-zA-Z0-9 - an @ symbol and address name with .-_ and 2 - 4 char domain
            var pattern = /(\(\d{3}\) ?)\d{3}-\d{4}/;           // phone number must be (xxx)xxx-xxx
        }
        if (inputName.name === 'f_password'){                    // password must 4 - 15 chars letter first then alphanumeric and an underscore
            var pattern = /^([a-zA-Z])\w{3,14}$/;
        }
        if (inputName.name === 'f_ssn'){                         // ssn must xxx-xx-xxxx
            var pattern = /^\d{3}-\d{2}-\d{4}$/;
        }

        var pass = pattern.test(inputName.value);                                   // variable assigned to test input against pattern
        var errorMsg = inputName.nextSibling.nextSibling.nextSibling.nextSibling;          // error message selector
        if (pass && inputName.value.length > 4){
            errorMsg.style.display='none';
            inputName.style.backgroundColor = 'green';                       // style changer for good
        }else{
             if (!pass || inputName.value.length < 2){                       // for error
                errorMsg.style.display='block';
                inputName.style.backgroundColor = 'red';
            } else{                                                        // for initial display
                errorMsg.style.display='none';
                inputName.style.backgroundColor = 'white';
            }
        }
    };
                                                                       // onclick method to call myform function
    button.onclick = myForm;

})();  // end wrapper



