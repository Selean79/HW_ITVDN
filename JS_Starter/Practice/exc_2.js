let str1 = prompt("Введите первое значение").toLowerCase().trim();
let str2 = prompt("Введите второе значение").toLowerCase().trim();

if (sortString(str1) === sortString(str2)){
    alert("строки являются анаграммой");
}
else{
    alert("строки не являются анаграммой");
}

function sortString(str) {
   return  str
        .split('')
        .sort()
        .join('');
}

