#!/bin/bash
if [ "$TRAVIS_BRANCH" == "prod" ]; then
  cat ./coverage/lcov.info | ./node_modules/.bin/codacy-coverage
fi
