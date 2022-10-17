var pilihan = 2;
/*
1. light
2. dark
3. nocturne
4. teriminal
5. indigo

// Cara 1
/*
if(pilihan == 1)
    console.log("light");

    else if(pilihan == 2)
    console.log("dark");

    else if(pilihan == 3)
    console.log("nocturne");

    else if(pilihan == 4)
    console.log("terminal");

    else(pilihan == 5)
    console.log("indigo");
    

    // cara 2

    switch(pilihan){
        case 1: 
        console.log('light');
        break;

        case 2:
        console.log('dark');
        break;

        case 3: 
        console.log('nocturne');
        break;

        case 4:
        console.log('terminal');

        default:
        console.log('indigo')
    }

    */

    // cara 3 Ternery one line
    console.log(pilihan == 1 ? "light": (pilihan == 2 ? "dark": (pilihan == 3 ? "nocturne": (pilihan == 4 ? "terminal" : "indigo"))))
