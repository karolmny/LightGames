const name = document.getElementById('name');
//const gameName = document.getElementById('gameName');
const btn = document.getElementById('btn');


function getScore(gameName, playerName, score) {

    btn.addEventListener("click", function(event) {
        const data = JSON.stringify({
            "game": gameName,
            "name": playerName,
            "score": score
        });

        if (playerName != "") {
            const httpPOST = new XMLHttpRequest();
            const url = 'https://sheet2api.com/v1/fw6NK6fOQNGA/high-scores';

            httpPOST.onreadystatechange = function() {
                if (httpPOST.readyState === XMLHttpRequest.DONE) {
                    return httpPOST.response;
                }
            };

            httpPOST.open('POST', url, true);
            httpPOST.setRequestHeader("Content-Type", "application/json");
            httpPOST.send(data);

            console.log("Score: " + score);
            console.log(gameName);
            console.log(playerName);
        }
    });
}
