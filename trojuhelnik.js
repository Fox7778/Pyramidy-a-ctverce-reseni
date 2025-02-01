// Popis: Skript pro vykreslení trojúhelníků
// Autor: Martin Procházka

// Připraví HTML kód pro vykreslení levého trojúhelníku
function generateTrojuhelnikLevy(rows) {
    let trojuhelnik = '';
    for (let i = 1; i <= rows; i++) {
        trojuhelnik += radaHvezdicek(i) + radaMezer(rows - i) + '<br>';
    }
    return trojuhelnik;
}

// Připraví HTML kód pro vykreslení pravého trojúhelníku
function generateTrojuhelnikPravy(rows) {
    let trojuhelnik = '';
    for (let i = 1; i <= rows; i++) {
        trojuhelnik += radaMezer(rows - i) + radaHvezdicek(i) + '<br>';
    }
    return trojuhelnik;
}