// Arena Class

var Arena = function(options){

    this.name = options.name;
    this.location = options.location;

};

Arena.prototype = {

    fighters: [],

    register: function(fighter){
        this.fighters.push(fighter);
        console.log(fighter.name + ' has joined the  ' + this.name + '!!');
    },

    fight: function(){

        var f1 = Math.floor(Math.random()*this.fighters.length);
        var f2 = Math.floor(Math.random()*this.fighters.length);

        while(f1 === f2){
            f2 = Math.floor(Math.random()*this.fighters.length);
        }

    }
};

