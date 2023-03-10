var age = new Date('1/1/2010');
var date_2 = new Date();
var diff = age.getTime() - date_2.getTime()

window.onload() = function() {
    document.getElementById("age").innerHTML=`Hi! I am catasaurus, a ${diff / 365} year old person. I am passionate about programming and AI, and basically anything relating to that.`
}