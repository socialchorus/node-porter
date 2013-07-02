node-porter
===========

Determines the port from the env, argv or a default

## Install

In your package.json install dependency via the git option:

  // ... beginning of package.json
  dependencies: {
    "porter": "git://github.com/socialchorus/node-porter.git#master"
  }
  // ... end of package.json

## Usage

    var Porter = require('porter');
    var portNumber = (new Porter()).number();
    // then listen on your port
