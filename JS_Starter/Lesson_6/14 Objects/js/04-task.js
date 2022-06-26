function users(firstName, lastName){
    return{
        firstName,
        lastName,

        print(){
            console.log("First Name: " + this.firstName);
            console.log("Last Name: " + this.lastName);
        }
    }
}

let user1 = users("Andrew", "Seleznyov");
let user2 = users("Nikita", "Pivovarov");

user1.print();
user2.print();

//
// let obj1 = {
//     firstName: "Ivan",
//     lastName: "Ivanov"
// };
//
// let obj2 = {
//     firstName: "Jhon",
//     lastName: "Doe"
// };
//
// function print(obj) {
//     console.log("First Name: " + obj.firstName);
//     console.log("Last Name: " + obj.lastName);
// }

