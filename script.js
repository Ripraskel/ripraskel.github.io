function sing(song) {
    console.log(song);
}

function jump(height) {
    console.log(height*2);
}

var hello_song = "Hi hi hi hi"
sing(hello_song);
sing("hi there! see you there");

var list = ["tiger", "cat", "bear", "bird"];

sing(list[0]);
list[0] = "monkey";
sing(list[0]);

var functionList = [sing, jump];
functionList[0]("man");

var user = {
    name : "John",
    age: 30,
    isMarried: false,
};

console.log(user.age);

user.favouriteFood = "Banana";

console.log(user.favouriteFood);