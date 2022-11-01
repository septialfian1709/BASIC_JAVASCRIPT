//TUGAS 01 NOVEMBER 2022


// Cuboid Volume 31.1
var cuboid = {
    length: 25,
    width: 50,
    heihgt: 200
};
console.log (cuboid.length*cuboid.width*cuboid.heihgt);



// Landed 32.2
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


// Code Project
function contact(name, number) {
    this.name = name;
    this.number = number;
    this.print = print;
}

function print(){
    console.log(this.name+": "+ this.number);
}

var a = new contact("David", 12345);
var b = new contact("Amy", 987654321);
a.print();
b.print();

// Calculating The Discount
function main() {
    var prodID = "LD1493";
    var price = 1700;
    var discount = 15;

    var prod1= new Product(prodID, price);
    console.log(prod1.prodID + " price: " + prod1.price);

    prod1.changePrice(discount);
    console.log(prod1.prodID + " new price: " + prod1.price);
}

function Product(prodID, price) {
    this.prodID = prodID;
    this.price = price;

    this.changePrice = function(discount) {
        //your code goes here
        return this.price = this.price - ((discount/100) * this.price );   
    }
}
main()
