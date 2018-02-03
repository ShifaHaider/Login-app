

var accounts = JSON.parse(localStorage.getItem('accounts')) || [];
function save() {
    var saveData1 =
    {name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        password:  document.getElementById('password').value,
        phoneNumber:  document.getElementById('phone').value};

    var isMatch = false;
    for (var i = 0; i< accounts.length; i++) {
        if (accounts[i].email === saveData1.email) {
            isMatch = true;
        }
    }

        if (isMatch) {
            alert('email is not available')
        }
        else {
            accounts.push(saveData1.email);
            localStorage.setItem('accounts', JSON.stringify(accounts));
        }

     accounts.push(saveData1);
   localStorage.setItem('accounts' , JSON.stringify(accounts) );
    console.log(accounts);
}


