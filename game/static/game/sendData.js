const snakeUrl = "urlen til snake"


function sendData(game, name, score){
    

    if (game === "Snake"){
        var url = "https://sheet2api.com/v1/ZSJQLefxRcO8/snake-highscores-test";

    } else if (game === "Catch CupCakes") {
        const url = "https://sheet2api.com/v1/ZSJQLefxRcO8/snake-highscores-test";

    }  else if (game === "Floppyfish") {
        const url = "https://sheet2api.com/v1/ZSJQLefxRcO8/snake-highscores-test";

    }  else if (game === "juggle") {
        const url = "https://sheet2api.com/v1/ZSJQLefxRcO8/snake-highscores-test";

    }  else if (game === "eat") {
        const url = "https://sheet2api.com/v1/ZSJQLefxRcO8/snake-highscores-test";
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
