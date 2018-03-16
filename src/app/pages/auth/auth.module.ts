import { LoginModule } from './login/login.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularFireModule, FirebaseAppConfig } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import {
  AuthMethods,
  AuthProvider,
  AuthProviderWithCustomConfig,
  CredentialHelper,
  FirebaseUIAuthConfig,
  FirebaseUIModule
} from 'firebaseui-angular';

const facebookCustomConfig: AuthProviderWithCustomConfig = {
  provider: AuthProvider.Facebook,
  customConfig: {
    scopes: [
      'public_profile',
      'email',
      'user_likes',
      'user_friends'
    ],
    customParameters: {
      // Forces password re-entry.
      auth_type: 'reauthenticate'
    }
  }
};

const firebaseUiAuthConfig: FirebaseUIAuthConfig = {
  providers: [
    AuthProvider.Google,
    facebookCustomConfig,
    AuthProvider.Twitter,
    AuthProvider.Github,
    AuthProvider.Password,
    AuthProvider.Phone
  ],
  method: AuthMethods.Popup,
  tos: '<your-tos-link>',
  credentialHelper: CredentialHelper.AccountChooser
};
export const firebaseConfig: FirebaseAppConfig = {
  apiKey: 'AIzaSyBV6B2zpL5Ry4V3qxfUOEg1RX19q48L2VY',
  authDomain: 'camp-creator-prod.firebaseapp.com',
  databaseURL: 'https://camp-creator-prod.firebaseio.com',
  projectId: 'camp-creator-prod',
  storageBucket: 'camp-creator-prod.appspot.com',
  messagingSenderId: '736189166545'
};

@NgModule({
  declarations: [],
  imports: [ CommonModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    FirebaseUIModule.forRoot(firebaseUiAuthConfig),
   ],
  exports: [ LoginModule ],
  providers: [  ],
})
export class AuthModule { }
