/*
      Задание:
      Доработайте сценарий.
      Воспользуйтесь делегированием при добавлении обработчиков на событие click для li
      В данном сценарии обработчик добавляется для каждого li, сделайте так, чтобы обработчик добавлялся для ul
      Строка, которая требует изменений, помечена комментарием '!!!'
*/

let users = [
    {
        balance: '1250.89',
        age: 24,
        name: {
            first: 'Golden',
            last: 'Clements'
        },
        company: 'EWAVES',
        email: 'golden.clements@ewaves.io'
    },
    {
        balance: '3637.94',
        age: 23,
        name: {
            first: 'Francis',
            last: 'Hebert'
        },
        company: 'XPLOR',
        email: 'francis.hebert@xplor.biz'
    },
    {
        balance: '1106.44',
        age: 31,
        name: {
            first: 'Hale',
            last: 'Cross'
        },
        company: 'EARTHPURE',
        email: 'hale.cross@earthpure.us'
    },
    {
        balance: '2502.43',
        age: 25,
        name: {
            first: 'Delores',
            last: 'Sykes'
        },
        company: 'ASSITIA',
        email: 'delores.sykes@assitia.com'
    },
    {
        balance: '3651.54',
        age: 21,
        name: {
            first: 'Ryan',
            last: 'Bolton'
        },
        company: 'MOLTONIC',
        email: 'ryan.bolton@moltonic.biz'
    },
    {
        balance: '1345.79',
        age: 21,
        name: {
            first: 'Carey',
            last: 'Schwartz'
        },
        company: 'UXMOX',
        email: 'carey.schwartz@uxmox.info'
    },
    {
        balance: '3261.11',
        age: 30,
        name: {
            first: 'Trevino',
            last: 'Mullins'
        },
        company: 'TERRASYS',
        email: 'trevino.mullins@terrasys.org'
    },
    {
        balance: '1659.17',
        age: 20,
        name: {
            first: 'Gilliam',
            last: 'Mendez'
        },
        company: 'ZENTHALL',
        email: 'gilliam.mendez@zenthall.tv'
    },
    {
        balance: '2340.54',
        age: 32,
        name: {
            first: 'Brewer',
            last: 'Vargas'
        },
        company: 'QIMONK',
        email: 'brewer.vargas@qimonk.co.uk'
    },
    {
        balance: '1736.91',
        age: 24,
        name: {
            first: 'Newman',
            last: 'Wynn'
        },
        company: 'VISALIA',
        email: 'newman.wynn@visalia.name'
    }
];

let userList = document.querySelector("#userList");

for (let index = 0; index < users.length; index++) {
    const currentUser = users[index];
    let li = document.createElement("li");
    li.textContent = currentUser.name.first + " " + currentUser.name.last;
    li.dataset.userNumber = index;
    userList.append(li);
}
userList.addEventListener("click", mouseEnterHandler); /*!!!*/


function mouseEnterHandler(e) {
    const currentUser = users[e.target.dataset.userNumber];
    let message = "";
    message += "Company " + currentUser.company + "<br />";
    message += "Balance " + currentUser.balance + "<br />";
    message += "Email " + currentUser.email + "<br />";
    message += "Age " + currentUser.age + "<br />";

    document.querySelector("#output").innerHTML = message;
}