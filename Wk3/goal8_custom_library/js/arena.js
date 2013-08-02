// Arena Class

var Arena = function(options){

    this.name = options.name;
    this.location = options.location;

};

Aerna.prototype = {

    figthers: [],

    register: function(fighter){
        this.fighters.push(fighter);
    }
};

