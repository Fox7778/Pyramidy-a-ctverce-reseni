// Script, který zajistí vykreslování obrazců do DIV elementu s id="divVystup"
// Autor: Martin Procházka

// Připraví řetězec řady hvězdiček. Počet hvězdiček je dán parametrem. 
function radaHvezdicek(pocet){
    let radek = '';
    for (let i = 1; i <= pocet; i++) {
        radek += '*';
    }
    return radek;
}

// Připraví řetězec řady mezer. Počet mezer je dán parametrem.
function radaMezer(pocet){
    let radek = '';
    for (let i = 1; i <= pocet; i++) {
        radek += '&nbsp;';
    }
    return radek;
}

document.getElementById('btnCtverec').addEventListener('click', vykresliCtverec);
document.getElementById('btnTrojuhPravy').addEventListener('click', vykresliTrojuhPravy);
document.getElementById('btnTrojuhLevy').addEventListener('click', vykresliTrojuhLevy);
document.getElementById('btnPyramida').addEventListener('click', vykresliPyramidu);
document.getElementById('btnPyramidaObracena').addEventListener('click', vykresliPyramiduObracenou);

function vykresliCtverec() {
    document.getElementById('divVystup').innerHTML = generateCtverec(5); // Příklad s 5 řádky
}

function vykresliTrojuhPravy() {
    document.getElementById('divVystup').innerHTML = generateTrojuhelnikPravy(5); // Příklad s 5 řádky
}

function vykresliTrojuhLevy() {
    document.getElementById('divVystup').innerHTML = generateTrojuhelnikLevy(5); // Příklad s 5 řádky
}

function vykresliPyramidu() {
    document.getElementById('divVystup').innerHTML = generatePyramida(5); // Příklad s 5 řádky
}

function vykresliPyramiduObracenou() {
    document.getElementById('divVystup').innerHTML = generatePyramidaObracena(5); // Příklad s 5 řádky
}

