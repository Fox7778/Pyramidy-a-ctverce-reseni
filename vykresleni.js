
function radaHvezdicek(pocet){
    let radek = '';
    for (let i = 1; i <= pocet; i++) {
        radek += '*';
    }
    return radek;
}

function radaMezer(pocet){
    let radek = '';
    for (let i = 1; i <= pocet; i++) {
        radek += '&nbsp;';
    }
    return radek;
}


let pocetRadku = 10;    
let divVystup = document.getElementById('Vystup'); 

document.getElementById('btnCtverec').onclick = function() {
    divVystup.innerHTML = CtverecF(pocetRadku);
}
document.getElementById('btnTrojuhelnikPravy').onclick = function() {
    divVystup.innerHTML = TrojuhelnikPravyF(pocetRadku);
}

document.getElementById('btnTrojuhelnikLevy').onclick = function() {
    divVystup.innerHTML = TrojuhelnikLevyF(pocetRadku);
}

document.getElementById('btnPyramida').onclick = function() {
    divVystup.innerHTML = PyramidaF(pocetRadku); 
}

document.getElementById('btnPyramidaObracena').onclick = function() {
    divVystup.innerHTML = PyramidaObracenaF(pocetRadku);
}
document.getElementById('btnKos').onclick = function() {
    divVystup.innerHTML = kosoctverecF(pocetRadku);
}