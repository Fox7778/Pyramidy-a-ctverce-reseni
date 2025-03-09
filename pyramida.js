function PyramidaF(radky) {
    let pyramida = '';
    for (let i = 1; i <= radky; i++) {
        pyramida += radaMezer(radky-i) + radaHvezdicek(2*i-1) + radaMezer(radky-i) + '<br>'; 
    }
    return pyramida;
}


function PyramidaObracenaF(radky) {
    let pyramida = '';
    for (let i = radky; i>=1 ; i--) {
        pyramida += radaMezer(radky-i) + radaHvezdicek(2*i-1) + radaMezer(radky-i) + '<br>'; 
    }
    return pyramida;
}

