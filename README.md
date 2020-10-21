# Login PWA Application

App is deployed in Firebase and running as a PWA on the following URL: https://login-app-1ff05.web.app/

It can be installed as a PWA application on a web browser and / or a mobile device

Available users to login with:

_User 1_

Email: user1@test.com

Password: 123456

_User 2_

Email: user2@test.com

Password: 123456

_User 3_

Email: user3@test.com

Password: 123456

# Development setup

_The project is developed on top of Angular 10_

Install the Angular CLI to run this project: `npm install -g @angular/cli`

Clone repository in your local machine and run `npm install` on root project directory to install dependencies

## Run app on localhost

Run `ng serve`. Then navigate to `http://localhost:4200/`.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Other project comments

Initially, the Firebase Authentication metadata.lastSignInTime field was proposed to be used as the last login field, but I found some issues like this one: https://github.com/firebase/firebase-js-sdk/issues/662 and the fact that lastSignInTime is updated before the login data is returned by the Auth service, causing the same result every time (clock always inits in zero).

I decided to use Firestore database with authentication to manage the lastSignInTime field read / update field manually as an approach to the solution.
