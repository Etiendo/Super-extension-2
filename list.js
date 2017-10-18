/* Boutons Javanscript */

/*
var savoir = ["HTML", "CSS", "Javascript", "PHP"];
var savoir_length = savoir.length;
var text = "<ul>";
for (var i = 0; i < savoir_length; i++) {
    text += "<li><button>" + savoir[i] + "</button></li>"; //
}

text += "</ul>";
*/

// var gb = document.write("<button>Have a nice day!</button>");

document.body.innerHTML += "<button class='button1'>HTML</button>"; //pas encore cliquable
document.body.innerHTML += "<button>CSS</button>"; //pas encore cliquable
document.body.innerHTML += "<button>Javascript</button>"; //pas encore cliquable
document.body.innerHTML += "<button>PHP</button>"; //pas encore cliquable




//window.onload = myFunction(); //alert('test');

function myFunction() {

    document.getElementById("lst-ib").value = 'html'; //gs_htif0 gs_taif0 lst-ib

}
//document.getElementsById("lst-ib").value = 'test';


document.addEventListener("click", (e) => {
    if (e.target.classList.contains('button1')) {

        alert('lancer fx');
    } else  {
        //alert('soucis pour lancer fx');
        myFunction();

    }
});

/*
var savoir = document.getElementsById("HTML");
var savoirCount = savoir.length;
for (var i = 0; i < buttonsCount; i += 1) {
    savoir[i].onclick = function () {
        {
            myFunction()
        };

        function myFunction() {
            document.getElementById("HTML") .innerHTML
        }
    }
}
*/

/*
document.addEventListener("click", function () {
    alert("Hello World!");
});
*/
