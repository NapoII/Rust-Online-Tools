let betPercentages = new Map();
betPercentages.set('0', {
  betColor: "BLUE 5x",
  kellyBetPct: "0.023972872",
  currentColor: "RED 20x"
});
betPercentages.set('1', {
  betColor: "BLUE 5x",
  kellyBetPct: "0.024021592",
  currentColor: "YELLOW 1x"
});
betPercentages.set('2', {
  betColor: "BLUE 5x",
  kellyBetPct: "0.015140644",
  currentColor: " 3x"
});
betPercentages.set('3', {
  betColor: "PURPLE 10x",
  kellyBetPct: "0.010842996",
  currentColor: "YELLOW 1x"
});
betPercentages.set('4', {
  betColor: "PURPLE 10x",
  kellyBetPct: "0.017316848",
  currentColor: "BLUE 5x"
});
betPercentages.set('5', {
  betColor: "PURPLE 10x",
  kellyBetPct: "0.017370286",
  currentColor: "YELLOW 1x"
});
betPercentages.set('6', {
  betColor: "PURPLE 10x",
  kellyBetPct: "0.009207527",
  currentColor: " 3x"
});
betPercentages.set('7', {
  betColor: "BLUE 5x",
  kellyBetPct: "0.016999792",
  currentColor: "YELLOW 1x"
});
betPercentages.set('8', {
  betColor: "BLUE 5x",
  kellyBetPct: "0.023926348",
  currentColor: "PURPLE 10x"
});
betPercentages.set('9', {
  betColor: "BLUE 5x",
  kellyBetPct: "0.01513888",
  currentColor: "YELLOW 1x"
});
betPercentages.set('10', {
  betColor: "NONE",
  kellyBetPct: "0",
  currentColor: " 3x"
});
betPercentages.set('11', {
  betColor: "NONE",
  kellyBetPct: "0",
  currentColor: "BLUE 5x"
});
betPercentages.set('12', {
  betColor: " 20x",
  kellyBetPct: "0.0059727175",
  currentColor: "YELLOW 1x"
});
betPercentages.set('13', {
  betColor: " 20x",
  kellyBetPct: "0.0060228235",
  currentColor: "BLUE 5x"
});
betPercentages.set('14', {
  betColor: " 20x",
  kellyBetPct: "0.00602548",
  currentColor: "YELLOW 1x"
});
betPercentages.set('15', {
  betColor: " 20x",
  kellyBetPct: "0.0059895385",
  currentColor: "GREEN 3x"
});
betPercentages.set('16', {
  betColor: " 20x",
  kellyBetPct: "0.006000217",
  currentColor: "YELLOW 1x"
});
betPercentages.set('17', {
  betColor: " 20x",
  kellyBetPct: "0.0059564845",
  currentColor: "PURPLE 10x"
});
betPercentages.set('18', {
  betColor: " 20x",
  kellyBetPct: "0.0059984845",
  currentColor: "YELLOW 1x"
});
betPercentages.set('19', {
  betColor: " 20x",
  kellyBetPct: "0.006039634",
  currentColor: " 3x"
});
betPercentages.set('20', {
  betColor: " 20x",
  kellyBetPct: "0.0059838685",
  currentColor: "YELLOW 1x"
});
betPercentages.set('21', {
  betColor: " 20x",
  kellyBetPct: "0.0060115465",
  currentColor: "BLUE 5x"
});
betPercentages.set('22', {
  betColor: " 20x",
  kellyBetPct: "0.0060124495",
  currentColor: "YELLOW 1x"
});
betPercentages.set('23', {
  betColor: "NONE",
  kellyBetPct: "0",
  currentColor: " 3x"
});
betPercentages.set('24', {
  betColor: "BLUE 5x",
  kellyBetPct: "0.016948948",
  currentColor: "YELLOW 1x"
});

let betReturns = new Map();
betReturns.set("NONE", {ret: 0});
betReturns.set("YELLOW 1x", {ret: 2});
betReturns.set(" 3x", {ret: 4});
betReturns.set("BLUE 5x", {ret: 6});
betReturns.set("PURPLE 10x", {ret: 11});
betReturns.set(" 20x", {ret: 21});


(function() {
  var R2D, active, angle, center, init, rotate, rotation, start, startAngle, stop;

  active = false;

  angle = 0;

  rotation = 0;

  startAngle = 0;

  center = {
    x: 0,
    y: 0
  };

  document.ontouchmove = function(e) {
    return e.preventDefault();
  };

  init = function() {
    target.addEventListener("mousedown", start, false);
    target.addEventListener("mousemove", rotate, false);
    target.addEventListener("mouseup", stop, false);
    
    target.addEventListener("touchstart", start, false);
    target.addEventListener("touchmove", rotate, false);
    target.addEventListener("touchend", stop, false);
  };
  

  R2D = 180 / Math.PI;

  start = function(e) {
    var height, left, top, width, x, y, _ref;
    e.preventDefault();
    _ref = this.getBoundingClientRect(), top = _ref.top, left = _ref.left, height = _ref.height, width = _ref.width;
    center = {
      x: left + (width / 2),
      y: top + (height / 2)
    };
    x = e.clientX - center.x;
    y = e.clientY - center.y;
    startAngle = R2D * Math.atan2(y, x);
    return active = true;
  };

  rotate = function(e) {
    var d, x, y;
    e.preventDefault();
    x = e.clientX - center.x;
    y = e.clientY - center.y;
    d = R2D * Math.atan2(y, x);
    rotation = d - startAngle;
    updateGraphics();
    if (active) {
      return this.style.webkitTransform = "rotate(" + (angle + rotation) + "deg)";
    }
  };

  stop = function() {
    angle += rotation;
    return active = false;
  };

  updateGraphics = function() {
  var slot = (Math.floor(angle % 360 / (360 / 25)) + 25) % 25;
    document.getElementById('currPos').innerHTML = slot;
    document.getElementById('currCol').innerHTML = betPercentages.get("" + slot).currentColor;
  };

  init();

}).call(this);

function clearBets() {
document.getElementById("betAmt").innerHTML = 0;
  document.getElementById("betAdvice").innerHTML = "NONE";
}


function updateTable() {
  var scrap = document.getElementById("currScrap").value;
  var position = document.getElementById("currPos").innerHTML;
  var positionField = document.getElementById("currCol").innerHTML;
  var bet = document.getElementById("betAmt").innerHTML;
  var prediction = document.getElementById("betAdvice").innerHTML;
  
  var table = document.querySelector("table");
  var newRow = table.insertRow(-1);
  var scrapCell = newRow.insertCell(0);
  var positionCell = newRow.insertCell(1);
  var positionFieldCell = newRow.insertCell(2);
  var betCell = newRow.insertCell(3);
  var predictionCell = newRow.insertCell(4);
  
  scrapCell.innerHTML = scrap;
  positionCell.innerHTML = position;
  positionFieldCell.innerHTML = positionField;
  betCell.innerHTML = bet;
  predictionCell.innerHTML = prediction;
}



function calcButtonClicked() {
  var intvalue = document.getElementById('currPos').innerHTML;
  var betPct = 0;
  var betColor = "nothing";
  var currentColor = "NONE";
  if (betPercentages.has(intvalue)) {
    console.log("Landed on " + intvalue);
    betPct = betPercentages.get(intvalue).kellyBetPct;
    betColor = betPercentages.get(intvalue).betColor;
    currentColor = betPercentages.get(intvalue).currentColor;
  } else {
    console.error("Didn't land for " + intvalue);
  }

  var currentScrap = parseInt(document.getElementById('currScrap').value);
  if (document.getElementById('doScrapCalc').checked) {
    var lastAmtToBet = parseInt(document.getElementById('betAmt').innerHTML);
    var lastBetColor = document.getElementById('betAdvice').innerHTML;
    currentScrap -= lastAmtToBet;
    if (currentColor == lastBetColor) {
      currentScrap += lastAmtToBet * parseInt(betReturns.get(currentColor).ret); // TODO fix this as well
    }
  }
  var currentScrap = document.getElementById('currScrap').value = currentScrap;

  var amtToBet = Math.floor(betPct * currentScrap);
  document.getElementById("betAmt").innerHTML = amtToBet;
  document.getElementById("betAdvice").innerHTML = betColor;
  updateTable();
}
