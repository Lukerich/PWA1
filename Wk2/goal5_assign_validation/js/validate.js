/*
     Developed by the JavaScript team at Fullsail
     Date: 1306
*/

(function(){


    myform.onsubmit = function(e){

        var id = document.getElementById('f_username');

        console.log(document.getElementById('f_username').value);
        console.log(document.getElementById('f_username'));
        validateField(id);
//        validateField(id[1].name);
//        validateField(id[2].id);
//        validateField(id[3].id);
//        validateField(id[4].id);

        e.preventDefault();
        return false;

     };
    var validateField = function(inputName){
         console.log(inputName);
        if (inputName === 'f_username'){
            var pattern = /([A-Z]{1}\w\s)\1\?[A-Z]{1}\w]/;
            console.log(inputName.value);
        }
        if (inputName.value === 'f_email'){
            var pattern = /([a-zA-Z]{1}\w[-._\w]*\w@\w[-._\w]*\w\.\w{2,4})/;
        }
        if (inputName.value === 'f_phone'){
            var pattern = /((\(^[2-9]\d{2}-\))|(^[2-9]\d{2}-))\d{3}-\d{4}$/;
        }
        if (inputName.value === 'f_password'){
            var pattern = /^[\w_]{4,15}$/;
        }
        if (inputName.value === 'f_ssn'){
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

//    myform.onsubmit = function(e){
//
//        //Below is one example of the validateField call with an argument.
//        //You must dynamically retrieve the ID name from the DOM/HTML.
//
//        validateField(id);  //id = is the form input field ID
//
//
//        e.preventDefault();
//        return false;
//    };
//
//
//    var validateField = function(inputName){
//
//        if (inputName.name === 'id name goes here'){
//            var pattern = 'a RegEx pattern goes here'
//
//            //You will need to create an else-if statement for each input field id.  The
//            //      format will be similar to the above IF statement.
//
//
//        };
//
//        var pass = 'the RegEx .test statement is needed here';
//        var errorMsg = inputName.nextSibling.nextSibling.nextSibling.nextSibling;
//
//        if (!pass || inputName.value.length < 2){
//            errorMsg.style.display='block';
//            inputName.style.backgroundColor = 'red';
//        } else if (pass && inputName.value.length > 5){
//            errorMsg.style.display='none';
//            inputName.style.backgroundColor = 'green';
//        } else {
//            errorMsg.style.display='none';
//            inputName.style.backgroundColor = 'white';
//        };
//    };
    };
})();  // end wrapper



