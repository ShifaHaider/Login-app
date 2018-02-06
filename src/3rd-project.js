var accounts = JSON.parse(localStorage.getItem('accounts')) || [];

function save() {
    var saveData1 =
    {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        password: document.getElementById('password').value,
        phoneNumber: document.getElementById('phone').value
    };
    var isMatch = false;
    for (var i = 0; i < accounts.length; i++) {
        if (accounts[i].email === saveData1.email) {
            isMatch = true;
        }
    }
    if (isMatch) {
        alert('email is not available')
    }
    else {
        accounts.push(saveData1);
        localStorage.setItem('accounts', JSON.stringify(accounts));
    }
}
function login() {
    var loginData = {
        email: document.getElementById('logEmail').value,
        password: document.getElementById('logPassword').value
    };
    var logMatch = false;
    var div = document.getElementById('madeDiv');
    for (var j = 0; j < accounts.length; j++) {
        var inp = document.createElement('input');
        if (loginData.email === accounts[j].email && loginData.password === accounts[j].password) {
            localStorage.setItem('userData' , JSON.stringify(accounts[j]));
            //alert('Welcome ' + accounts[j].name);
            resultForLogin(accounts[j]);
            console.log(logMatch);
            logMatch = true;
            break;
        }
    }
    if (!logMatch) {
        alert('account not login');
    }
    console.log(logMatch);
}
function resultForLogin(user) {
    var div = document.getElementById('madeDiv');
    div.style.border = '1px solid #000' ;
    div.style. width = '220px';
    var h3 = document.createElement('h3');
    h3.innerHTML = 'User Data';
    var p1 = document.createElement('p');
    var p2 = document.createElement('p');
    var p3 = document.createElement('p');
    p1.innerHTML = 'Name : ' + user.name;
    p2.innerHTML = 'Email : ' + user.email;
    p3.innerHTML = 'Phone Number : ' + user.phoneNumber;
    div.appendChild(h3);
    div.appendChild(p1);
    div.appendChild(p2);
    div.appendChild(p3);

console.log(div);
}

