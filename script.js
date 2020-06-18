
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

// ##############################
var fruitContainer = document.getElementById("fruitContainer");
var fruitList = [
    {
        name: "tomato",
        imgSrc: "Images/tomato.jpg"
    },
    {
        name: "cucumbers",
        imgSrc: "Images/cucumbers.jpg"
    }
];
console.log(fruitList[0].imgSrc);

for (i = 0; i < fruitList.length; i++){
    var div = document.createElement("div");
    div.setAttribute("id", fruitList[i].name)
    div.setAttribute("class", "zone box");
    var img = document.createElement("img");
    img.setAttribute("src", fruitList[i].imgSrc);
    div.appendChild(img);
    fruitContainer.appendChild(div);
};

var boxes = document.getElementsByClassName("box");
var input = document.getElementById("inputbox");
var cover = document.getElementsByClassName("cover")[0];

function boxClick(event) {
    console.log(event);
}

function keypress(event){
    console.log(event.keyCode);
}

function toggleCoolStyle(obj) {
    obj.classList.toggle("coolStyle");
    console.log(obj.classList);
}

cover.addEventListener("mouseover", toggleCoolStyle(cover));
cover.addEventListener("mouseout", toggleCoolStyle(cover));

for (i = 0; i < boxes.length; i++){
    boxes[i].addEventListener("click", boxClick);
};

// box.addEventListener("click", boxClick);
// box.addEventListener("mouseover", boxClick);

input.addEventListener("keypress", keypress);