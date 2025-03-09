function kosoctverecF(rows){
    let kosoctverec =  "";
    for(let i = 1; i<=(rows/2); i++){
        kosoctverec += radaMezer((rows/2) - i) + radaHvezdicek(2*i-1) + radaMezer((rows/2) - i) +  "<br>";
    
    }
    for(let i = (rows/2)-1; i>=1; i--){
        kosoctverec += radaMezer((rows/2) - i) + radaHvezdicek(2*i-1) + radaMezer((rows/2) - i) + "<br>";
    }
    return kosoctverec;
}