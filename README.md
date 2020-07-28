# `Share because you care` project
Project was created as part of Coders Lab course. Prototype of the project ("Oddam w dobre ręce") was prepared by Coders Lab graduate - Magda - in Adobe XD.

## Demo:
## [Share because you care link](https://mono258.github.io/Share_because_you_care)
project currently in progress (first sprint is done)

## This project uses
* create-react-app (This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).)
* React Router
* Bootstrap, Sass
* `react-js-pagination`
* API
* Firebase authentication (email & password)


## Useful info

### General stuff
For running app locally you need to follow below steps.

#### Step 1 - clone code and install needed packages
1. Clone app: `git clone https://github.com/MoNo258/Share_because_you_care`
2. Go to folder where files will be placed `cd Share_because_you_care`
3. In above folder run in terminal `npm i`

#### Step 2 - connect to Firebase
If you want to download this project locally and run it there you also need to connect the project with Firebase.
1. You need to create Firebase account and then project for web app that must be connected to this one (use Firebase tutorials).
2. Create file `secret.js` with details for Firebase.
    * create file: `src/services/secret.js`. Structure should be as follows:
```JavaScript
//Firebase web app configuration
export const firebaseConfig = {
    apiKey: 'YOUR_DATA',
    authDomain: 'YOUR_DATA',
    databaseURL: 'YOUR_DATA',
    projectId: 'YOUR_DATA',
    storageBucket: 'YOUR_DATA',
    messagingSenderId: 'YOUR_DATA',
    appId: 'YOUR_DATA'
};
```

#### Step 3 - run needed scripts

In the project directory, you can run:

##### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

##### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

##### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

#### Learn More about Create React App

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
