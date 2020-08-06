function sendData(game, name, score){
    console.log("i came here");

    if (game === "Snake"){
        var url = "https://sheet2api.com/v1/ZSJQLefxRcO8/highscores";
        console.log("sending to snake");

    } else if (game === "Catch CupCakes") {
        var url = "https://sheet2api.com/v1/ZSJQLefxRcO8/highscores";
        console.log("sending to catch cupcakes");

    }  else if (game === "Floppyfish") {
        var url =  "https://sheet2api.com/v1/ZSJQLefxRcO8/highscores";
        console.log("sending til floppyfihs");

    }  else if (game === "Juggle") {
        var url = "https://sheet2api.com/v1/ZSJQLefxRcO8/highscores";
        console.log("sending to juggle");

    }  else if (game === "Eat the stars") {
        var url = "https://sheet2api.com/v1/ZSJQLefxRcO8/highscores";
        console.log("sending to eat");
    } else {
        console.log("didnt send ");
    }
    var data = JSON.stringify({
        "game": game,
        "name": name,
        "score": score, 
    });
    http = new XMLHttpRequest();
    http.onreadystatechange = function() {
        if (http.readyState === XMLHttpRequest.DONE) {
            return http.response;
        }
    };               
    http.open("POST", url, true);
    http.setRequestHeader("Content-Type", "application/json");
    http.send(data);
}
