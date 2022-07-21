let user = {
    balance: '$1,250.89',
    age: 24,
    name: {
        first: 'Golden',
        last: 'Clements'
    },
    company: 'EWAVES',
    email: 'golden.clements@ewaves.io',
    friends: [
        {
            id: 0,
            name: 'Buchanan Austin'
        },
        {
            id: 1,
            name: 'Richmond Garrison'
        },
        {
            id: 2,
            name: 'Burns Cook'
        },
        {
            id: 3,
            name: 'Sally Mcpherson'
        }
    ],
    favoriteFruit: 'strawberry'
}

user.balance = '$2000';
delete user.email;

console.log(`First name: ${user.name.first}`);
console.log(`Last name: ${user.name.last}`);
console.log(user);