let logic = require("./logic");

function coinFlipRoute(request, response) {
  let flip = logic.flipCoin();

  if (flip) {
    response.send("Heads");
  } else {
    response.send("Tails");
  }
}

function addNumberRoute(request, response) {
  let numberOne = request.params.number1;
  let numberTwo = request.params.number2;

  let result = logic.addNumber(numberOne, numberTwo);

  response.send(result);
}

module.exports.coinFlipRoute = coinFlipRoute;
module.exports.addNumberRoute = addNumberRoute;
