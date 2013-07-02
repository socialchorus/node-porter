var mocha = require('mocha');
var chai = require('chai');
chai.should();
chai.Assertion.includeStack = true;

var Porter = require('../porter.js');

describe("Porter", function () {
  var porter;
  var argv = [
    'node',
    '/Users/socialchorus/Projects/linktivator/server.js',
    '-p',
    '2020'
  ]

  describe("when PORT from env is passed in", function() {
    it('returns the correct argument', function () {
      porter = new Porter(3030, null);
      porter.number().should.equal(3030);
    });
  });

  describe("when a porter argument is given", function() {
    it('returns the correct argument', function () {
      porter = new Porter(null, argv);
      porter.number().should.equal(2020);
    });
  });

  describe("when no information is given", function() {
    it('returns a default porter', function () {
      porter = new Porter(null, ['node', 'some-path']);
      porter.number().should.equal(5000);
    });
  });
});


