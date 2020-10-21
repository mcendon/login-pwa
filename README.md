# LoginPwa

Install the Angular CLI to run this project: `npm install -g @angular/cli`

Clone repository in your local machine and run `npm install` on root project directory to install dependencies

## Run app on localhost

Run `ng serve`. Then navigate to `http://localhost:4200/`.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

# Project comments

Initially, the Firebase Authentication metadata.lastSignInTime field was proposed to be used as the last login field, but I found some issues like this one: https://github.com/firebase/firebase-js-sdk/issues/662 and the fact that lastSignInTime is updated before the login data is returned by the Auth service, causing the same result every time (clock always inits in zero).

I decided to use Firestore database with authentication to manage the lastSignInTime field read / update field manually as an approach to the solution.
