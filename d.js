const meteo = (array) => {
    let temp = 0;
    array.forEach(element => {
        if(element > temp){
            temp = element;
        }
    });
    return temp;
}

console.log(meteo([1, 5, 9, 5, 2, 3, 500]));