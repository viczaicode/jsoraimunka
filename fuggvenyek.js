var szam = 5;
export function ottelOszthatoak(szam) {
    let igazE = false;
    if(Number.isInteger(szam)) {
        if (szam<Number.MAX_SAFE_INTEGER) {
            if (szam % 5 === 0) {
                igazE = true;
            } 
        } 
        else {
            igazE = "Túl nagy szám"
        }
    } else {
        igazE = "Nem szám!"
    }
    return igazE;
}

export function ottelOszthatoTeszt() {
        //tesztelés
    // 0 -> true
    console.log(`szam=0-> true`);
    console.log(`szam=0-> ${ottelOszthatoak(0)}`);
    // 1 -> false
    console.log(`szam=1-> false`);
    console.log(`szam=1-> ${ottelOszthatoak(1)}`);
    // 2 -> false
    console.log(`szam=2-> false`);
    console.log(`szam=2-> ${ottelOszthatoak(2)}`);
    // 3 -> false
    console.log(`szam=3-> false`);
    console.log(`szam=3-> ${ottelOszthatoak(3)}`);
    // 4 -> false
    console.log(`szam=4-> false`);
    console.log(`szam=4-> ${ottelOszthatoak(4)}`);
    // 5 -> true
    console.log(`szam=5-> true`);
    console.log(`szam=5-> ${ottelOszthatoak(5)}`);
    // 55.68 -> false
    console.log(`szam=55.68-> false`);
    console.log(`szam=55.68-> ${ottelOszthatoak(55.68)}`);
    // -25 -> true
    console.log(`szam=-25-> true`);
    console.log(`szam=-25-> ${ottelOszthatoak(-25)}`);
    // rókarudi -> le se fut | hibás
    console.log(`szam=rókarudi-> LE SE FUT`);
    console.log(`szam=rókarudi-> ${ottelOszthatoak("rókarudi")}`);
    // 555555555555555555555555 -> false
    console.log(`szam=55555555555555555555555555555555-> false`);
    console.log(`szam=55555555555555555555555555555555-> ${ottelOszthatoak(55555555555555555555555555555555)}`);
}