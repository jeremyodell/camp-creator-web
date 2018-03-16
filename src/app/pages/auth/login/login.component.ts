import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { emailValidator } from '../../../theme/utils/app-validators';
import { AppSettings } from '../../../app.settings';
import { Settings } from '../../../app.settings.model';
import { AfterViewInit, OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { AngularFireAuth } from 'angularfire2/auth';
import { FirebaseUISignInSuccess } from 'firebaseui-angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements AfterViewInit, OnInit {
  public form: FormGroup;
  public settings: Settings;
  constructor(public appSettings: AppSettings, public fb: FormBuilder, public router: Router,
    private afAuth: AngularFireAuth) {
    this.settings = this.appSettings.settings;
    this.form = this.fb.group({
      'email': [null, Validators.compose([Validators.required, emailValidator])],
      'password': [null, Validators.compose([Validators.required, Validators.minLength(6)])]
    });
  }

  public onSubmit(values: Object): void {
    if (this.form.valid) {
      this.router.navigate(['/dashboard']);
    }
  }

  ngAfterViewInit() {
    this.settings.loadingSpinner = false;
  }
  successCallback(data: FirebaseUISignInSuccess) {
    console.log('successCallback', data);
  }



  ngOnInit(): void {
    this.afAuth.authState.subscribe(d => console.log(d));
    this.afAuth.authState.subscribe(this.firebaseAuthChangeListener);
  }

  logout() {
    this.afAuth.auth.signOut();
  }

private firebaseAuthChangeListener(response) {
    // if needed, do a redirect in here
    if (response) {
      console.log('Logged in :)');
    } else {
      console.log('Logged out :(');
    }
  }

}
