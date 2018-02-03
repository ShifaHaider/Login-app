

var accounts = JSON.parse(localStorage.getItem('accounts')) || [];
function save() {
    var saveData1 =
    {name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        password:  document.getElementById('password').value,
        phoneNumber:  document.getElementById('phone').value};
     accounts.push(saveData1);
   localStorage.setItem('accounts' , JSON.stringify(accounts) );
    console.log(accounts);
}


