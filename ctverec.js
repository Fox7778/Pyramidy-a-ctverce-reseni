function CtverecF(radky) {
    let ctverec = '';
    for (let i = 1; i <= radky; i++) {
        ctverec += radaHvezdicek(radky) + '<br>';
    }
    return ctverec;
}