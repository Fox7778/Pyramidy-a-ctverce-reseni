function kosoctverecF(radky){
    let kosoctverec =  "";
    for(let i = 1; i<=(radky/2); i++){
        kosoctverec += radaMezer((radky/2) - i) + radaHvezdicek(2*i-1) + radaMezer((radky/2) - i) +  "<br>";
    
    }
    for(let i = (radky/2)-1; i>=1; i--){
        kosoctverec += radaMezer((radky/2) - i) + radaHvezdicek(2*i-1) + radaMezer((radky/2) - i) + "<br>";
    }
    return kosoctverec;
}