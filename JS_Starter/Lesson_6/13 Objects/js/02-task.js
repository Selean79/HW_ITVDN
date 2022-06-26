let object1 = new Object();

object1.firstName = "Andrew";
object1.lastName = "Seleznyov";

let object2 = {
    firstName: "Andrew",
    lastName: "Seleznyov",
}

function print(myObject) {
    console.log(`First name: ${myObject.firstName}\nLast name: ${myObject.lastName}`);
}

print(object1);
print(object2);