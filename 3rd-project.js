//var data = document.getElementsByClassName('data');
//var secData = document.getElementsByClassName('b');
//var saveFirstData = [];
var data = document.getElementsByClassName('data');
var secData = document.getElementsByClassName('2-Data');
var saveFirstData = JSON.parse(localStorage.getItem('saveFirstData')) || [] ;
var saveSecondData = [];
function save() {
    for (var i = 0; i < data.length; i++) {
        saveFirstData[i] = data[i].value;
        localStorage.setItem('saveFirstData', JSON.stringify(saveFirstData));
        console.log(saveFirstData);
        data[i].value = '';
    }
}

//var userEmailAndPass = document.getElementById("userEmailAndPass")
//var userEmailserPass = document.getElementById("userPass")
function login (){
for(var i= 0; i<secData.length; i++ ){
     saveSecondData[i] = secData[i].value;
     for(var j = 0; j <= saveSecondData.length;j++){
         if( saveFirstData[i]===  saveSecondData[j]){
             //alert("afaf")


         }
     }
}

}
//var a = document.getElementsByClassName('data');
//var b = document.getElementsByClassName('2-Data');
//var c = document.getElementById('last');
//var saveData1 =[];
//var saveData2 =[];
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
function again() {
    //var datas = false;
    for (var j = 0; j < secData.length; j++) {
        saveSecondData[j] = secData[j].value;
        if (saveSecondData[j] === saveFirstData[j]) {
            save();
        }
    }
//if(datas){
    //   alert('ok');
    //}
    //    else {
    //        alert('Not ok');
    secData[j].value = '';
    console.log(saveSecondData);
}
