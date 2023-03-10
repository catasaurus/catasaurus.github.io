var age = new Date('1/1/2010');
var date_2 = new Date();
var diff = date_2.getTime() - age.getTime()

window.onload = function() {
    document.getElementById("age").innerHTML=`Hi! I am catasaurus, a ${diff / 3.154e+10} year old person. I am passionate about programming and AI, and basically anything relating to that.

    I am proficient in Python, C/C++, and Javascript. Generally I work on projects that involve Machine Learning, NLP, Data science, and sometimes some web development.`
}

let count = 0;
let colors = ["black", "#673147", "pink", "#E35335", "yellow", "white"];
const interval = setInterval(function() {
    document.getElementById("age").style.color = "white";
    document.getElementById("main").style.background = colors[count];
    if (colors[count] == "yellow" || colors[count] == "white") {
        document.getElementById("age").style.color = "black"
    }
    if (count < 5) {
        count += 1;
    } else {
        count = 0;
    };

    var date_2 = new Date();
    var diff = date_2.getTime() - age.getTime();
    document.getElementById("age").innerHTML=`Hi! I am catasaurus, a ${diff / 3.154e+10} year old person. I am passionate about programming and AI, and basically anything relating to that.

    I am proficient in Python, C/C++, and Javascript. Generally I work on projects that involve Machine Learning, NLP, Data science, and sometimes some web development.`
}, 2000);