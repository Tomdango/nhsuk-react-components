#!/bin/bash
if [ "$TRAVIS_BRANCH" == "prod" ]; then
  < ./coverage/lcov.info tr ' ' _ | ./node_modules/.bin/codacy-coverage
fi
