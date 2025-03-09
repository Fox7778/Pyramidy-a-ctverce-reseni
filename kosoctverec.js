function kosoctverecF(rows){
    let kosoctverec = " ";
    for(let i = 1; i<=rows+1; i++){
        kosoctverec += radaMezer(rows - radaHvezdicek(i%2 == 0))/2 + radaHvezdicek(i%2==0) + radaMezer(rows - radaHvezdicek(i%2==0))/2 + "<br>";

    }
    return kosoctverec;
}