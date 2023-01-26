function js_style() {


    var e = document.getElementById('text');

    e.style.color = "red";
    e.style.fontSize = "35px";
    e.style.fontFamily = "Verdana";
    
}


function getFormvalue() {

    var first = document.getElementsByName('fname')[0].value;
    var last = document.getElementsByName('lname')[0].value;

    console.log(first + last);

   
    alert(first + last);
}


function removecolor(){
    var o = document.getElementById("colorSelect");

    o.remove(o.selectedIndex);


}


function getOptions() {

}