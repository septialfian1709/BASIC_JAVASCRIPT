// Materi Object




// Introducing Objects
// latihan 1
var person = {
    name: "Septi", age: 18,
    favColor: "green", height: 158
};
var x = person.height;
var y = person['age'];

console.log(x);
console.log(y);


// latihan 2
var y = {name: "JS", lessons: 41};
console.log(y.name.length);

// latihan 4
console.log("Latihan object");







// Creating Your Own Object

//latihan 1
function manusia(name, age, color){
    this.name = name
    this.age = age
    this.favColor = color;
}

var p1 = new manusia("John", 42, "green")
var p2 = new manusia("amy", 21, "red")


var p1 = new manusia("John", 37, "red")
var p2 = new manusia ("Johan", 27, "red")


console.log(p1.name+ "data"+ p2.name+ "menyukai warna"+ p2.favColor)





// Object Initialization

// latihan 1
var John = {
    name: "John",
    age: 25
};
var James = {
    name: "James",
    age: 21
};

console.log(John.age);




// Adding Methods

// latihan 1
function orang(name, age){
    this.name = name;
    this.age = age;
    this.changeName = function (name){
        this.name = name;
    }
}

var a = new orang("David", 21)
a.changeName("John")

console.log(a.name)


// latihan 2 (method)
function contoh(name, age){
    this.name = name;
    this.age = age;
    this.yearOfBirth = bornYear;
}
function bornYear() {
    return 2016 - this.age;
}

var p = new contoh("A", 22);

console.log(p.yearOfBirth());


// latihan 3
function makan(status,food){
    this.status = status;
    this.food = food;
    this.changestatus = function(status){
        this.status=status
    }
}

var p1 = new makan('berdoa', 'mie');
p1.changestatus('sedang')
console.log(p1.status+" makan "+p1.food)

// Latihan 3
function main() {
    //take flight number and its status
    var flightNumber = "NGT 929";
    var flightStatus = "Landed" ;

    var flight1 = new Flight (flightNumber,flightStatus);
    //assign a flight object to flight1 variable

    //output
    console.log('The flight ' + flight1.number + ' is ' + flight1.status)

}

function Flight(flightNumber, status) {
    //fix the constructor
    this.number = flightNumber;
    this.status = status;
};
main()

