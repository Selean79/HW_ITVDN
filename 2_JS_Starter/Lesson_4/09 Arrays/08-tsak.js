let values = [10, 20, 10, 6, 11, 9, 0, 125, 10, 8, 0, 3, 5, 89, 12, 46, 5, 4,0,  77, 3, 6, 125, 125, 125];
let fixValue = 0;
let tempArray = [];

for (let x = 0; x < values.length; x++) {
    fixValue = values[x];
    for (let i = x + 1; i < values.length; i++) {
        if (fixValue === values[i]) {
            if(tempArray.includes(values[i])){
             continue;
            }
            else{
                tempArray.push(values[i]);
            }
        }
    }
}

console.log(tempArray);