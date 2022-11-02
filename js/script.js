for (let x = 1; x <= 100; x++){
    if(x % 3 === 0 && x % 5 === 0){
        console.log("multiplo di tre e di cinque")
    } else if(x % 3 === 0){
        console.log("multiplo di tre");
    } else if (x % 5 === 0){
        console.log("multiplo di cinque")
    } else{
        console.log(x);
    }
}