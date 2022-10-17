//pertama
let n = 5;

for (let i = 0; i < n; i++) {
  for (let k = 0; k < n - i; k++) {
    process.stdout.write('*');
  }
  console.log();
}

let stars = ""
for (let i = 5; i >= 1; i--){
    stars += "*";
    console.log(stars)
}

let r = 5;
let string = "";

//diamon pattern
  let a = 5;
  let star = "";

  for (let i = 1; i <= a; i++) {
    for (let j = a; j > i; j--) {
      star += " ";
    }
    for (let k = 0; k < i * 2 - 1; k++) {
      star += "*";
    }
    star += "\n";
  }
  for (let i = 1; i <= a - 1; i++) {

    for (let j = 0; j < i; j++) {
      star += " ";
    }
    for (let k = (a - i) * 2 - 1; k > 0; k--) {
      star += "*";
    }
    star += "\n";
  }
  console.log(star);

  //pattern love
  for (let i = 1; i <= n; i++) {

    for (let j = 0; j < n - i; j++) {
      string += " ";
    }
    for (let k = 0; k < i; k++) {
      string += "*";
    }
    string += "\n";
  }

  for (let i = 0; i < n; i++) {
      for (let k = 0; k < n - i; k++) {
        string += '*'
      }
      string += "\n";
    }
    console.log(string)


    var c = 6;
    var str = "";
    for (let i = c / 2; i < c; i += 2) {
      for (let j = 1; j < c - i; j += 2) {
        str += " ";
      }
      for (let j = 1; j < i + 1; j++) {
        str += "*";
      }
      for (let j = 1; j < c - i + 1; j++) {
        str += " ";
      }
      for (let j = 1; j < i + 1; j++) {
        str += "*";
      }
      str += "\n";
    }
    for (let i = c; i > 0; i--) {
      for (let j = 0; j < c - i; j++) {
        str += " ";
      }
      for (let j = 1; j < i * 2; j++) {
        str += "*";
      }
      str += "\n";
    }
    console.log(str);


var k = 8;
var l = "";

for(let i = 1; i < k; i++) {
    for(let j = 0; j < k; j++) {
      if(i === 0 || i === k - 1) {
        l += "*";
      }
      else {
        if(j === 0 || j === k - 1) {
          l += "*";
        }
        else {
          l += " ";
        }
      }
    }
    l += "\n";
  }
  console.log(l);