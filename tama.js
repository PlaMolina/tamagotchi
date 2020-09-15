
const input = require('readline-sync');

let cansancio = 1;
let hambre = 1;
let aburrimiento = 5;
let bala = 0
hacer();

function hacer() {
    let info = input.question("\nIntroduce: \n -comer \n -jugar \n -dormir \n -batallar \n -ruleta \n");
    if (info == "comer") {
        comer();
    } else if (info == "jugar") {
        jugar();
    } else if (info == "dormir") {
        dormir();
    } else if (info == "batallar") {
        batallar();
    } else if (info == "ruleta") {
        ruleta();
    } else {
        console.log("\nAcción desconocida.");
    }
    setTimeout(comprobar, 500);
}

function dormir() {
    cansancio = cansancio - 2;

    hambre = hambre + 2;

    aburrimiento++;

}

function jugar() {
    aburrimiento = aburrimiento - 2

    cansancio = cansancio + 2;

    hambre = hambre + 2;

}

function comer() {
    hambre = hambre - 2;

    cansancio++;

}

function batallar() {
    cansancio = Math.floor(Math.random() * (+3 - -3) + 1);

    hambre = Math.floor(Math.random() * (+3 - -3) + 1);

    aburrimiento = Math.floor(Math.random() * (+3 - -3) + 1);

}

function ruleta() {
    var prob = Math.random()
    if (prob >= 0.5) {
        aburrimiento = aburrimiento - 3;
        console.log("\n¡Click!")
    } else {
        console.log("\n¡Bang!")
        bala++;
    }
}

function comprobar() {
    if (cansancio >= 5) {
        cansancio = 5;
    }
    if (cansancio <= 1) {
        cansancio = 1;
    }

    if (hambre >= 5) {
        hambre = 5;
    }
    if (hambre <= 1) {
        hambre = 1;
    }

    if (aburrimiento <= 1) {
        aburrimiento = 1;
    }
    if (aburrimiento >= 5) {
        aburrimiento = 5;
    }
    if (bala > 0) {
        console.log('\nMala suerte.\n\n -------------\n|             |\n|     DEP     |    _(_)_\n|             |   (_)@(_)\n|             |    /(_)\n|             |   |/\n^^^^^^^^^^^^^^^^^^^^^^')
    }
    else if (cansancio >= 5 || hambre >= 5) {
        actualizarUI();
        console.log("\nHas perdido.");
        rematch()
    } else if (aburrimiento == 1) {
        actualizarUI();
        console.log("\n¡Has ganado!");
        rematch()
    } else {
        actualizarUI();
    }
}
function rematch() {
    var respuesta = input.question('\n Jugar otra vez? S/N\n')
    if (respuesta == 'S' || respuesta == 's') {
        cansancio = 1;
        hambre = 1;
        aburrimiento = 5;
        bala = 0
        hacer()
    }
}
function actualizarUI() {
    console.log(' -----------------\n| Cansancio: ' + cansancio + '    |');
    console.log('| Hambre: ' + hambre + '       |');
    console.log('| Aburrimiento: ' + aburrimiento + ' |\n -----------------');
    if (cansancio < 5 && hambre < 5 && aburrimiento > 1) {
        setTimeout(hacer, 1000);
    }
}




