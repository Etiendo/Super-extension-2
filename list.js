/* Boutons Javanscript */

var savoir = ["HTML", "CSS", "Javascript", "PHP"];
var savoir_length = savoir.length;
var text = "<ul>";
for (var i = 0; i < savoir_length; i++) {
    text += "<li><button>" + savoir[i] + "</button></li>";
}
text += "</ul>";
document.body.innerHTML += text;
