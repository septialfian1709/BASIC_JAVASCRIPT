/*function person(name, age, color) {
        this.name = name;
        this.age = age
        this.color = color;
        this.changeName = function(name, age, color){
            this.name = name;
            this.age = age;
            this.color = color;
         }
        }
        var p = new person('septi', 18, 'blue');
        p.changeName("Manusia ", 19 , "black ")
        console.log(p.name+p.age+p.color)

    function person(name, age, color)
        this.name = name;
        this.age = age;
        this.favColor = color;
        this.changeName = function changeName(name){
            this.name = name
        }
         this.changeAge = function changeAge(age){
            this.age = age
         }
         this.changeFavColor = function changeFavColor(color){
            this.favColor = color
         }

         var p = new person('John', 30, 'blue');
         console.log(p.name)
         console.log(p.age)
         console.log(p.favColor)
         p.changeName('Asep')
         p.changeAge(32)
         p.changeFavColor('black')
         console.log(p.name)
         console.log(p.age)
         console.log(p.favColor)

         */

         function bilangan(x, y){
            this.x = x,
            this.y = y,
            this.jumlah = function jumlah(x, y){
                c = x + y;
                return c;
            }
         }
         var b = new bilangan(3, 1)
         var a = b.jumlah(b.x, b.y)
         console.log(a);
