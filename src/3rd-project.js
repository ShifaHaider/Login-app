//var data = document.getElementsByClassName('data');
//var secData = document.getElementsByClassName('2-Data');
//var saveFirstData = JSON.parse(localStorage.getItem('saveFirstData')) || [] ;
//var saveSecondData = [];
//function save() {
//    for (var i = 0; i < data.length; i++) {
//        saveFirstData[i] = data[i].value;
//        localStorage.setItem('saveFirstData', JSON.stringify(saveFirstData));
//        console.log(saveFirstData);
//        data[i].value = '';
//    }
//}
//console.log(data);
//function login (){
//for(var i = 0; i < secData.length; i++ ) {
//    saveSecondData[i] = secData[i].value;
//    localStorage.setItem('saveFirstData', JSON.stringify(saveFirstData));
//    secData[i].value = '';
//        if (saveSecondData[i] == localStorage.getItem('saveFirstData')) {
//            alert('Wow!')
//
//    }
//}
//}

//var b = document.getElementsByTagName('div')[0];
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
function login(){
    for(var j = 0; j < a.length; j++) {
        if (b[j].value  === d[j].email) {
            console.log(d);
        }
    }
}
console.log(a);
console.log(b);

















//function save(){
//    for(var i = 0; i< a.length; i++){
//        saveData1[i] = a[i].value;
//        a[i].value = '';
//    }
//    console.log(saveData1);
//}
//function again(){
//    for(var j = 0; j< b.length; j++){
//        saveData2[j] = b[j].value;
//        if(a[j].value == b.value){
//            //c.appendChild(a[j]);
//            alert('very Good');
//        }
//        else{
//            alert('please type correct password & E-mail');
//        }
//    }
//
//    console.log(saveData2);
//}
//function last(){
//    for(var i = 0; i <4; i++) {
//        var div = document.getElementsByTagName('div');
//        var inp = document.createElement('input');
//        inp.setAttribute('value',data[i].value) ;
//        data[i].appendChild(inp);
//        console.log(div);
//    }
//}