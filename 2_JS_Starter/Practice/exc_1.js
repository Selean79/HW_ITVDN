let str = prompt("Введите значение: ").toLowerCase().trim();

if(str.startsWith(str[0])  === str.endsWith(str[0]))
{
    alert("Ваша строка является палидромом");
}
else{
    alert("Ваша строка не является палидромом");
}