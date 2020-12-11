let chai = require("chai");
let chaiHttp = require("chai-http");
let server = require("../server");

chai.use(chaiHttp);

suite("Integration tests for coin flip system", function () {
  test("Test GET /flip", function () {
    let app = server.app;

    chai
      .request(app)
      .get("/flip")
      .end(function (error, response) {
        chai.assert.equal(response.status, 200, "Wrong status code");
        chai.assert.include(
          ["Heads", "Tails"],
          response.text,
          "Wrong response text"
        );
      });
  });
});

suite("Integration test for adding numbers", function () {
  test("Test GET /number1/number2", function () {
    let app = server.app;

    chai
      .request(app)
      .get("/1/2")
      .end(function (error, response) {
        chai.assert.equal(response.status, 200, "Wrong status code");
        chai.assert.equal(response.text, "3", "Result not equal to 3");
      });
  });
});
