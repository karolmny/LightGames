/*
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
    },
    {
        "game": "Snake",
        "name": "wihuuu",
        "score": 100
    }     
];

const text = testdata;
*/
const display1 = document.getElementById("score1");
const display2 = document.getElementById("score2");
const display3 = document.getElementById("score3");
const display4 = document.getElementById("score4");
const display5 = document.getElementById("score5");

const http = new XMLHttpRequest();
const url = 'https://sheet2api.com/v1/HxiceVkT7C4B/high-scores2';
const defaultText = "Mangler highscore-data..";

http.open("GET", url, true);
http.send();

http.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        const text = JSON.parse(this.responseText);
        
        for (let i=0; i<text.length; i++) {
            if (text[i].game == "Snake") {
                if (display1.innerHTML == defaultText) {
                    display1.innerHTML = "";
                }
                display1.innerHTML += "<li><b>" + text[i].name + "</b> --- " + text[i].score + "p</li>";
            }
            else if (text[i].game == "Eat the stars") {
                if (display2.innerHTML == defaultText) {
                    display2.innerHTML = "";
                }
                display2.innerHTML += "<li><b>" + text[i].name + "</b> --- " + text[i].score + "p</li>";
            }    
            else if (text[i].game == "Catch Cupcakes") {
                if (display3.innerHTML == defaultText) {
                    display3.innerHTML = "";
                }
                display3.innerHTML += "<li><b>" + text[i].name + "</b> --- " + text[i].score + "p</li>";
            }
            else if (text[i].game == "Juggle") {
                if (display4.innerHTML == defaultText) {
                    display4.innerHTML = "";
                }
                display4.innerHTML += "<li><b>" + text[i].name + "</b> --- " + text[i].score + "p</li>";
            }
            else if (text[i].game == "Floppy fish") {
                if (display5.innerHTML == defaultText) {
                    display5.innerHTML = "";
                }
                display5.innerHTML += "<li><b>" + text[i].name + "</b> --- " + text[i].score + "p</li>";
            }
        }
    }
}

// -----DUMMY DATA -------
const data = JSON.stringify(
    {"game": "Catch Cupcakes",
    "name": "test",
    "score": 100}
);
/*
http.onreadystatechange = function() {
  if (http.readyState === XMLHttpRequest.DONE) {
    return http.response;
  }
};

http.open('POST', url, true);
http.setRequestHeader("Content-Type", "application/json");
http.send(data);
*/