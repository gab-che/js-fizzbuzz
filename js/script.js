const squareGrid = document.querySelector(".square_grid");

for (let x = 1; x <= 100; x++){
    if(x % 3 === 0 && x % 5 === 0){
        squareGrid.innerHTML += '<div class="square square_fizz_buzz">FizzBuzz</div>';
        console.log("fizzbuzz");
    } else if (x % 3 === 0){
        squareGrid.innerHTML += '<div class="square square_fizz">Fizz</div>';
        console.log("fizz");
    } else if (x % 5 === 0){
        squareGrid.innerHTML += '<div class="square square_buzz">Buzz</div>';
        console.log("buzz");
    } else{
        squareGrid.innerHTML += `<div class="square">${x}</div>`;
        console.log(x);
    }   
}