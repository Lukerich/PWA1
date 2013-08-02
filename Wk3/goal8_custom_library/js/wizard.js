// Wizard Class File
// Keep the constructor small- Use the prototype

var Wizard = function(options){

    return new Wizard.prototype.init(options); // constructor of Wizard class

};

Wizard.prototype = {

    init: function(options){

        this.name = options.name;
        this.power = options.power;
        this.strength = options.strength;

    },

    location: 'Skyrim',

    hello:  function(){},

    die:    function(){
        console.log('AaaaaAArrghh, I, ' + this.name + ', hath been slain.');
    }

};

Wizard.prototype.init.prototype = Wizard.prototype;





