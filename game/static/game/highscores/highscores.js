const display1 = document.getElementById("score1");
const display2 = document.getElementById("score2");
const display3 = document.getElementById("score3");
const display4 = document.getElementById("score4");
const display5 = document.getElementById("score5");

//  KOMMENTERT UT FOR Å IKKE "MISBRUKE" REQUESTS
const httpPOST = new XMLHttpRequest();
const httpGET = new XMLHttpRequest();
const url = 'https://sheet2api.com/v1/fw6NK6fOQNGA/high-scores';
const defaultText = "Mangler highscore-data..";

/*
// ------ POST-request -------- (utføres i score.js)
httpPOST.onreadystatechange = function() {
  if (httpPOST.readyState === XMLHttpRequest.DONE) {
    return httpPOST.response;
  }
};

httpPOST.open('POST', url, true);
httpPOST.setRequestHeader("Content-Type", "application/json");
httpPOST.send(data);
*/

/*
// ------ GET-request --------
httpGET.open("GET", url, true);
httpGET.send();

httpGET.onreadystatechange = function() {
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
            else if (text[i].game == "Floppy Fish") {
                if (display5.innerHTML == defaultText) {
                    display5.innerHTML = "";
                }
                display5.innerHTML += "<li><b>" + text[i].name + "</b> --- " + text[i].score + "p</li>";
            }
        }
    }
}
*/