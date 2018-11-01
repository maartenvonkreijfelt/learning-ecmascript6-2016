var person = {
    first: "Doug",
    actions: ['bike', 'hike', 'ski', 'surf'],
    printActions: function() {

        this.actions.forEach(function(action) {
            var str = this.first + " likes to " + action;
            console.log(str);
        }.bind(this));
    }
};
person.printActions();
















/*
var person = {
    first: "Doug",
    actions: ['bike', 'hike', 'ski', 'surf'],
    printActions() {
        this.actions.forEach(action => {
            var str = this.first + " likes to " + action;
        console.log(str);
    });
    }
};
person.printActions();
    */