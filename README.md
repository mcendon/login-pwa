# Login PWA Application

App is deployed in Firebase and running as a PWA on the following URL: https://login-app-1ff05.web.app/

It can be installed as a PWA application on a web browser and / or a mobile device

Available users to login with:

_User 1_

- Email: user1@test.com
- Password: T3stuser1\$
- User disabled?: NO

_User 2_

- Email: user2@test.com
- Password: T3stuser2\$
- User disabled?: NO

_User 3_

- Email: user3@test.com
- Password: T3stuser3\$
- User disabled?: YES

# Technologies used

- Angular 10 (https://angular.io/)
- Karma (Unit testing) (http://karma-runner.github.io/5.2/)
- Protractor (e2e) (http://www.protractortest.org/)
- Bootstrap 4 (https://getbootstrap.com/)
- Animate CSS (https://animate.style/)
- Sweetalert2 (https://sweetalert2.github.io/)
- Moment.js (https://momentjs.com/)
- Firebase Authentication (https://firebase.google.com/docs/auth/)
- Firebase Cloud Firestore (https://firebase.google.com/docs/firestore)
- Firebase Hosting (https://firebase.google.com/docs/hosting)

# Development setup

Install the Angular CLI to run this project: `npm install -g @angular/cli`.

Clone repository in your local machine and run `npm install` on root project directory to install dependencies.

App has implemented unit test, linter and e2e tests. All tests are passed.

## Run app on localhost

Run `ng serve`. Then navigate to `http://localhost:4200/`.

## Running linter

Run `ng lint` to execute the linter.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Code Coverage report

To get a code coverage report you can run the `ng test --no-watch --code-coverage` command. 

Output will be an HTML under /coverage folder in the project

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Other project comments

Initially, the Firebase Authentication metadata.lastSignInTime field was proposed to be used as the last login field, but I found some issues like this one: https://github.com/firebase/firebase-js-sdk/issues/662 and the fact that lastSignInTime is updated before the login data is returned by the Auth service, causing the same result every time (clock always inits in zero).

I decided to use Firestore database with authentication to manage the lastSignInTime field read / update field manually as an approach to the solution.

# Build and Deployment

- You can build the project for production running `ng build --prod` in the root project dir.
- Deploy the app in Firebase using Firebase CLI (https://firebase.google.com/docs/cli/) and run the command `firebase deploy`.
- Target build dir is `<root-project-dir>/dist/login-pwa`.

# Service Worker config

After ng build --prod command, Angular PWA generates a service worker configuration based on ngsw-config.json and the src/manifest.webmanifest.

The file is called ngsw.json and can be found under the dist folder:

https://login-app-1ff05.web.app/ngsw.json

It defines in JSON format, the cache update strategy for the app and assets, and define a hashtable with version information for each file


