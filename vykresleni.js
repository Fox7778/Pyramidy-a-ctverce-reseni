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

// Zavedení obsluhy tlačítek pro vykreslení obrazců
let pocetRadku = 10;    // číslo určuje počet řádků v obrazcích
let divVystup = document.getElementById('divVystup'); // odkaz na element, kam se bude výstup zobrazovat

document.getElementById('btnCtverec').onclick = function() {
    divVystup.innerHTML = generateCtverec(pocetRadku);
}
document.getElementById('btnTrojuhelnikPravy').onclick = function() {
    divVystup.innerHTML = generateTrojuhelnikPravy(pocetRadku);
}

document.getElementById('btnTrojuhelnikLevy').onclick = function() {
    divVystup.innerHTML = generateTrojuhelnikLevy(pocetRadku);
}

document.getElementById('btnPyramida').onclick = function() {
    divVystup.innerHTML = generatePyramida(pocetRadku); 
}

document.getElementById('btnPyramidaObracena').onclick = function() {
    divVystup.innerHTML = generatePyramidaObracena(pocetRadku);
}
