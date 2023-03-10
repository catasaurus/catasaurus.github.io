var age = new Date('1/1/2010');
var date_2 = new Date();
var diff = date_2.getTime() - age.getTime()

window.onload = function() {
    document.getElementById("age").innerHTML=`Hi! I am catasaurus, a ${diff / 3.154e+10} year old person. I am passionate about programming and AI, and basically anything relating to that.`
}

let count = 0;
let colors = ["black", "red", "pink", "orange", "yellow", "white"];
const interval = setInterval(function() {
    document.getElementById("main").style.background = colors[count];
    if (count < 5) {
        count += 1;
    } else {
        count = 0;
    };
}, 1000);