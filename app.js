/* 
const updateDateTime = moment.utc("2024-09-08 13:00:00", "YYYY-MM-DD HH:mm:ss");
let buttonAdded = false;
let timerAdded = false; 

setInterval(function() {
  const now = moment.utc();

  if (now.isAfter(updateDateTime)) { 
    if (!buttonAdded) {
      let htmlk = `<button id="wowButton" onclick="window.open('https://openuserjs.org/scripts/CatWarScript/CatWar_Script', '_blank')">Обновить CatWar Script!</button>`;
      $('.container').append(htmlk);
      buttonAdded = true;
    }
    document.title = "Обновление!";

    if (timerAdded) {
      $('#clockContainer').empty();
      timerAdded = false;
    }

  } else {
    if (!timerAdded) {
      let htmlk = `<div id="countdown"><h1></h1></div>`;
      $('#clockContainer').append(htmlk);
      timerAdded = true;
    }

    const remaining = updateDateTime.diff(now, 'milliseconds');
    const hours = Math.floor(remaining / (1000 * 60 * 60) % 24);
    const minutes = Math.floor((remaining % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((remaining % (1000 * 60)) / 1000);

    const formattedHours = hours < 10 ? `0${hours}` : `${hours}`;
    const formattedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
    const formattedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;

    $("#countdown div").text(`${formattedHours}:${formattedMinutes}:${formattedSeconds}`);
  }
}, 1000);
*/
