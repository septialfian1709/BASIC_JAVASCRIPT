/*// latihan 1
function name(){
    console.log("this is function");
}
name();


function score(team1, team2){
    var a = "team 1 win"
    var b = "team 2 win"
    var c = "draw"
    if (team1 > 2){
        return a;
    } else if (team2 > 2) {
        return b;
    }
    else {
        return c
    }
}
console.log(score(2,4));

// latihan 3
function avg(a,b,c){
    d = (a+b+c)/3;
    console.log (d);
}
avg(3,6,9);*/

function main(){
    var amount = parsenInt(readline(), 10);
    var rate + parsenIntr(readline(), 10);

    console.log(convert(amount, rate));
}
function convert(a, b){
    var c = a^b
    return c
}