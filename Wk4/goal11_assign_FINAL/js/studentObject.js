/*
 Richard Luke
 8/02/2013
 Goal11: Assignment: FINAL
	* Final for PWA-1
*/

// Constructor and Prototype are here:
var Students = function(name, address, city, state, GPA, Date){    //variable assignment for Students constructor

    this.name = name;                                             // this keyword assignments
    this.address = address;                                       // for name - address
    this.city = city;                                             // city
    this.state = state;                                           // state
    this.GPA = GPA;                                               // GPA array
    this.Date = Date;                                             // today's date

Students.prototype.gpaAvg = function(){                       // prototype for GPA average calculation
    var total = 0;
    for (var i = 0, j = this.GPA.length; i < j; i++){         // for loop to collect GPA scores
        total += this.GPA[i];                                 // Accumulated total
        avgGpa = (total/this.GPA.length).toFixed(1);          //average calculation with method to fix results to 1 dec place
    }
    return avgGpa;                                           // return of calculated gpa average
};

};

