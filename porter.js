function Porter(envVar, argv) {
  this.envVar = envVar || process.env.PORT;
  this.argv = argv || process.argv;
}

Porter.prototype.defaultPort = 5000;

Porter.prototype.number = function () {
  return Number(this.envVar || this.argPort() || this.defaultPort);
};

Porter.prototype.argPort = function () {
  var i = this.argv.indexOf('-p');
  if (i > 0 && this.argv[i+1]) {
    return this.argv[i+1];
  }
};

module.exports = Porter;
