#!/bin/bash

if [ -z "$TRAVIS_PULL_REQUEST" ] || [ "$TRAVIS_PULL_REQUEST" == "false" ]; then
      
    if [ "$TRAVIS_BRANCH" == "master" ]; then
        echo "Push on master branch, publishing lib to NPM"
	npm version minor
        npm publish
    else
        echo "Branch is not master, skipping NPM publish"
    fi
else
    echo "Pull request, skipping NPM publish"
fi
