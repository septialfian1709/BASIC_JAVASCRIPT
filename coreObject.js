// lesson 37.1 Arrays

var courses = new Array("menjahit", "berenang", "memasak");
courses[1] = "menyanyi"
console.log(courses[1]);



// LESSONS 38
var courses = new Array(3)
courses[0] = "menjahit"
courses[1] = "berenang"
courses[2] = "memasak"
console.log(courses[2]);




// lessons 39
var courses = new Array();
courses[0] = "kucing";
courses[1] = "anjing";
courses[2] = "kelinci";
courses[3] = "rusa";
console.log(courses[3]);




// lessona 40
var courses = ("lucu", "cute ");
var menu = ("kucing", "anjing");
var concatArray = courses.concat(menu);
console.log(concatArray);



// lessons 41
var person = [];
person["name"] = "Aku Adalah Manusia Keren";
person["age"] = 18;
console.log(person["name"]);

// lessons 42
function main(){
var year = Math.ceil(Math.year()*10);
console.log(calCent(year));
}
function calCent(y){
    return Math.ceil(y/100)
}