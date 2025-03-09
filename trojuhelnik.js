
function TrojuhelnikLevyF(radky) {
    let trojuhelnik = '';
    for (let i = 1; i <= radky; i++) {
        trojuhelnik += radaHvezdicek(i) + radaMezer(radky - i) + '<br>';
    }
    return trojuhelnik;
}


function TrojuhelnikPravyF(radky) {
    let trojuhelnik = '';
    for (let i = 1; i <= radky; i++) {
        trojuhelnik += radaMezer(radky - i) + radaHvezdicek(i) + '<br>';
    }
    return trojuhelnik;
}