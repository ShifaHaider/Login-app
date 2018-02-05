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
    for (var j = 0; j < accounts.length; j++) {
        console.log(loginData);
        if (loginData.email === accounts[j].email && loginData.password === accounts[j].password) {
            localStorage.setItem('userData' , JSON.stringify(accounts[j]));
            alert('Welcome ' + accounts[j].name);
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
