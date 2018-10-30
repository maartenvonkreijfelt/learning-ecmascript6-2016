var cats = ["Tabby", "Siamese", "Persian"];
var dogs = ["Golden Retriever", "Pug", "Schnauzer"];

var animals = ["Whale", "Giraffe", cats, "Snake", dogs, "Coyote"];
console.log(animals);

var animals = ["Whale", "Giraffe", ...cats, "Snake", ...dogs, "Coyote"];
console.log(animals);