#!/bin/bash
if [ "$TRAVIS_BRANCH" == "master" ]; then
  < ./coverage/lcov.info tr ' ' _ | ./node_modules/.bin/codacy-coverage
else
    echo "Not Sending Coverage..."
fi
