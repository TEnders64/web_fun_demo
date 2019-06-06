function Print(){
    for(var i=1; i<=255;i++){
        console.log(i);
    }
}
Print();

// 0 to 255; print sum with integer
function PrintSum(){
    sum = 0;
    for(var i=0; i<256; i++){
        sum = sum + i;
        console.log(i + ' ' + sum);
    }
}
PrintSum();