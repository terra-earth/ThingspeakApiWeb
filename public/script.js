// api url
const api_url = "https://api.thingspeak.com/channels/2053442/feeds.json?api_key=GW1YEFR9KWUNFX0G&results=1";

setInterval(() => {
  fetch(api_url)
    .then((hasil) => hasil.json())
    .then((res) => {
      var field = JSON.stringify(res.feeds[0]);
      var obj = JSON.parse(field);
      document.getElementById("heading").innerHTML = obj.field1;
    });
}, 1000);