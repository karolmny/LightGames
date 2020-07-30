console.log("tester");

const testdata = [
    {
        "game": "Snake",
        "name": "test",
        "score": 100
    },
	{
        "game": "Catch Cupcakes",
   	    "name": "roooyce",
        "score": 80
    },  
    {
        "game": "Catch Cupcakes",
   	    "name": "roooyceTest",
           "score": 40
    },
    {
        "game": "Snake",
   	    "name": "bossy",
        "score": 80
    },
    {
        "game": "Catch Cupcakes",
   	    "name": "peeyy",
        "score": 60
    }
           
];

const text = testdata;
const display1 = document.getElementById("score1");
const display2 = document.getElementById("score2");
const display3 = document.getElementById("score3");
const display4 = document.getElementById("score4");
const display5 = document.getElementById("score5");

for (let i=0; i<text.length; i++) {
    if (text[i].game == "Snake") {
        if (display1.innerHTML == "Mangler highscore-data..") {
            display1.innerHTML = "";
        }
        display1.innerHTML += "<li><b>" + text[i].name + "</b> --- " + text[i].score + "p</li>";
    }
    else if (text[i].game == "Eat the stars") {
        if (display2.innerHTML == "Mangler highscore-data..") {
            display2.innerHTML = "";
        }
        display2.innerHTML += "<li><b>" + text[i].name + "</b> --- " + text[i].score + "p</li>";
    }    
    else if (text[i].game == "Catch Cupcakes") {
        if (display3.innerHTML == "Mangler highscore-data..") {
            display3.innerHTML = "";
        }
        display3.innerHTML += "<li><b>" + text[i].name + "</b> --- " + text[i].score + "p</li>";
    }
    else if (text[i].game == "Juggle") {
        if (display4.innerHTML == "Mangler highscore-data..") {
            display4.innerHTML = "";
        }
        display4.innerHTML += "<li><b>" + text[i].name + "</b> --- " + text[i].score + "p</li>";
    }
    else if (text[i].game == "Floppy fish") {
        if (display5.innerHTML == "Mangler highscore-data..") {
            display5.innerHTML = "";
        }
        display5.innerHTML += "<li><b>" + text[i].name + "</b> --- " + text[i].score + "p</li>";
    }
}