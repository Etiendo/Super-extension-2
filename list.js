/* Boutons Javanscript */

var fruits, text, fLen, i;

fruits = ["Bouton HTML.js", "Bouton CSS.js", "Bouton Javascript.js", "Bouton PHP.js"];
fLen = fruits.length;
text = "<ul>";
for (i = 0; i < fLen; i++) {
    text += "<li>" + fruits[i] + "</li>";
}
text += "</ul>";
document.body.innerHTML += text;
