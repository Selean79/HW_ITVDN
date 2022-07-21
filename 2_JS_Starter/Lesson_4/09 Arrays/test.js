let values = [10, 20, 4, 6, 11, 9, 125, 1, 8, 0, 3];

let minValue = values[0];
let maxValue = minValue;
let minIndex = 0;
let maxIndex = 0;

for (let i = 0; i < values.length; i++) {
    if (values[i] > maxValue) {
        maxValue = values[i];
        maxIndex = i;
    }
    if (values[i] < minValue) {
        minValue = values[i];
        minIndex = i;
    }
}
values[minIndex] = maxValue;
values[maxIndex] = minValue;

console.log(values);