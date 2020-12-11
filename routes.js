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
  let numberOne = Number(request.params.number1);
  let numberTwo = Number(request.params.number2);

  let result = logic.addNumber(numberOne, numberTwo);

  response.send(result.toString());
}

module.exports.coinFlipRoute = coinFlipRoute;
module.exports.addNumberRoute = addNumberRoute;
