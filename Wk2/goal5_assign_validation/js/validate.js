/*
     Developed by the JavaScript team at Fullsail
     Date: 1306
*/

(function(){


        var button = document.getElementById('f_submit');

        var myForm = function(e){


            var f_username = document.getElementById('f_username')
            var f_email = document.getElementById('f_email')
            var f_phone = document.getElementById('f_phone')
            var f_password = document.getElementById('f_password')
            var f_ssn = document.getElementById('f_ssn')

            console.log(f_username.value);
            console.log(f_email.value);
            console.log(f_phone.value);
            console.log(f_password.value);
            console.log(f_ssn.value);

//        validateField(id);
//        validateField(id);
//        validateField(id);
//        validateField(id);

        e.preventDefault();
        return false;

     };
    var validateField = function(inputName){
         console.log(inputName);
         console.log(inputName.value);
        if (inputName == "f_username"){
            var pattern = /([A-Z]{1}\w\s)\1\?[A-Z]{1}\w]/;
            console.log("in pattern " + inputName);
        }
        if (inputName == 'f_email'){
            console.log("in pattern " + inputName);
            var pattern = /([a-zA-Z]{1}\w[-._\w]*\w@\w[-._\w]*\w\.\w{2,4})/;
        }
        if (inputName === 'f_phone'){
            console.log("in pattern " + inputName);
            var pattern = /((\(^[2-9]\d{2}-\))|(^[2-9]\d{2}-))\d{3}-\d{4}$/;
        }
        if (inputName === 'f_password'){
            console.log("in pattern " + inputName);
            var pattern = /^[\w_]{4,15}$/;
        }
        if (inputName === 'f_ssn'){
            console.log("in pattern " + inputName);
            var pattern = /^\d{3}-\d{2}-\d{4}$/;
        }

        var pass = pattern.test(inputName.value); // statement is needed here';
        console.log(pass);
        var errorMsg = inputName.nextSibling.nextSibling.nextSibling.nextSibling;
        console.log(errorMsg);

        if (!pass || inputName.value.length < 2){
            errorMsg.style.display='block';
            inputName.style.backgroundColor = 'red';
        } else if (pass && inputName.value.length > 5){
            errorMsg.style.display='none';
            inputName.style.backgroundColor = 'green';
        } else {
            errorMsg.style.display='none';
            inputName.style.backgroundColor = 'white';
        }

    };

    button.onclick = myForm;

})();  // end wrapper



