
var a = document.getElementsByClassName('data');
var b = document.getElementsByClassName('secData');
var c = [];
var d = [];
var saveData2 =[];
var saveData1 =
    {name: "",
    email: "",
    password: "",
    phoneNumber: ""};
function save() {
for(var i = 0; i< a.length; i++) {
        if (saveData1.name === '') {
            saveData1.name = a[i].value;
        }
        else if (saveData1.email === '') {
            saveData1.email = a[i].value;
        }
        else if (saveData1.password === '') {
            saveData1.password = a[i].value;
        }
        else if (saveData1.phoneNumber === '') {
            saveData1.phoneNumber = a[i].value;
        }
    a[i].value = '';
}
      d.push(saveData1);
    console.log(saveData1);
      console.log(d);
}
console.log(a);
console.log(b);

