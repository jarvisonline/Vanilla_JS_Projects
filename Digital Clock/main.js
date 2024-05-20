function clock() {
  let secdots = document.getElementById("secdots");
  let mindots = document.getElementById("mindots");
  let hrdots = document.getElementById("hrdots");

  var date = new Date();
  var hours = date.getHours() % 12;
  var amPm = date.getHours() >= 12 ? "PM" : "AM";

  hours = hours === 0 ? 12 : hours;
  var minutes = date.getMinutes();
  var seconds = date.getSeconds();

  var secondDots = "";
  for (var i = 1; i < 61; i++) {
    var rotation = i * 6;
    if (i === seconds) {
      secondDots +=
        '<div class="dot active" style="transform: rotate(' +
        rotation +
        'deg)"/></div>';
    } else {
      secondDots +=
        '<div class="dot" style="transform: rotate(' +
        rotation +
        'deg)"></div>';
    }
  }

  var minuteDots = "";
  for (var i = 1; i < 61; i++) {
    var rotation = i * 6;
    if (i === minutes) {
      minuteDots +=
        '<div class="dot active" style="transform: rotate(' +
        rotation +
        'deg)"/></div>';
    } else {
      minuteDots +=
        '<div class="dot" style="transform: rotate(' +
        rotation +
        'deg)"></div>';
    }
  }
 
  var hourDots = "";
  for (var i = 1; i < 13; i++) {
    var rotation = i * 30;
    if (i === hours) {
      hourDots +=
        '<div class="dot active" style="transform: rotate(' +
        rotation +
        'deg)"/></div>';
    } else {
      hourDots +=
        '<div class="dot" style="transform: rotate(' +
        rotation +
        'deg)"></div>';
    }
  }

  secdots.innerHTML =
    secondDots +
    "<b>" +
    amPm +
    "</b>" +
    "<h2>" +
    zero(seconds) +
    "<br><span>Seconds</span></h2>";
  mindots.innerHTML =
    minuteDots + "<h2>" + zero(minutes) + "<br><span>Minutes</span></h2>";
  hrdots.innerHTML = hourDots + "<h2>" + zero(hours) + "<br><span>Hours</span></h2>";
}

function zero(number) {
  if (number < 10) {
    return "0" + number;
  }
  return number;
}

setInterval(clock, 1000);
