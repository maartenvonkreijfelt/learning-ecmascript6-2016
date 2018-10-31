
var cat = {
    meow: function(times) {
        console.log(Array(times).join("meow"));
    },
    purr: function(times) {
        console.log(Array(times).join("purr"));
    },
    snore: function(times) {
        console.log(Array(times).join("ZZZ"));
    }
};
cat.meow(3);
cat.purr(4);
cat.snore(5);













var cat2 = {
    meow(times) {
        console.log("meow".repeat(times));
    },
    purr(times) {
        console.log("purr".repeat(times));
    },
    snore(times) {
        console.log("ZZZ".repeat(times));
    }
};

cat2.meow(3);
cat2.purr(4);
cat2.snore(5);