const id = Symbol();
const courseInfo = {
    title: "ES6",
    topics: ["babel", "syntax", "functions", "classes"],

};

courseInfo[id] = 41284;
console.log(courseInfo);