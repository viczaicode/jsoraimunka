import { ottelOszthatoTeszt, ottelOszthatoak } from "./fuggvenyek.js";
//console.log(ottelOszthatoak(5));
//ottelOszthatoTeszt()
//ottelOszthatoak()
let valt1; // deklaráció

function fv1() {
    {
        let valt1=25;
        console.log(`blokkon belöl vált1: ${valt1}`);
    }
    let valt1 = 10; /* lokális változó */
    console.log(`fv-1en belül valt1: ${valt1}`);
}

console.log(`valt1: ${valt1}`);
valt1= 5;/* globális változó */


fv1();

//felemelés azt jelenti, hogy ha egy változót/függvényt deklarálok/létrehozok, bárhol is deklarálom a programban, 
//a változó/függvény úgy viselkedik, mintha a hatóköre tetején lett létrehozva

//a varral megadott változó 2féle láthatósággal rendelkezik, vagy modul szintű, vagy fájl szintű ugyanúgy globális változó, vagy függvény szintű lokális változó
//let változó esetében a hatókör lehet globális/modulszintű, vagy *blokkszintű*

function fv2() {
    for (var index = 0; index < 3; index++) {
        console.log(index);;
        
    }
    console.log(index);
}
fv2()