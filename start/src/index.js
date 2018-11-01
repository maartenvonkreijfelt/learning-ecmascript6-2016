var person = {
    first: "Doug",
    actions: ['bike', 'hike', 'ski', 'surf'],
    printActions: function() {
        var _this=this;
        this.actions.forEach(function(action) {
            var str = _this.first + " likes to " + action;
        console.log(str);
    });
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