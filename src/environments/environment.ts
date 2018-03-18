// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase:  {
    apiKey: "AIzaSyBV6B2zpL5Ry4V3qxfUOEg1RX19q48L2VY",
    authDomain: "camp-creator-prod.firebaseapp.com",
    databaseURL: "https://camp-creator-prod.firebaseio.com",
    projectId: "camp-creator-prod",
    storageBucket: "camp-creator-prod.appspot.com",
    messagingSenderId: "736189166545"
  }
};