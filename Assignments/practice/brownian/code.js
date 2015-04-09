window.onload = function brownian() {
  var place = 0;
  var init = 250;

  var numbers = [];
  numbers.push({
    "pos": 0,
    "val": 250
  });
  var b = document.getElementById("taco");

  var svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');

  setInterval(function() {
    var num = {
      "pos": 0,
      "val": 250
    };
    place = place + 1;
    prob = normal_random();
    if (prob > 0.5) {
      init = init - 5;
    } else {
      init = init + 5;
    }
    num.pos = place;
    num.val = init;
    numbers.push(num);

    var aLine = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    aLine.setAttribute('x1', numbers[place - 1].pos);
    aLine.setAttribute('x2', numbers[place].pos);
    aLine.setAttribute('y1', numbers[place - 1].val);
    aLine.setAttribute('y2', numbers[place].val);
    aLine.setAttribute('stroke', "white");
    aLine.setAttribute('stroke-width', "1");

    svg.appendChild(aLine);

    b.appendChild(svg);

  }, 50);

  function normal_random() {
    var pos = [Math.random(), Math.random()];
    while (Math.sin(pos[0] * Math.PI) > pos[1]) {
      pos = [Math.random(), Math.random()];
    }
    return pos[0];
  }

  //for random_normal
  // http://stackoverflow.com/questions/25582882/javascript-math-random-normal-distribution-gaussian-bell-curve
  // http://bl.ocks.org/benjchristensen/1148374
  //http://codereview.stackexchange.com/questions/40145/making-lines-with-svg-and-javascript
}
