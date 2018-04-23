import { Component, OnInit } from '@angular/core';
import { AppSettings } from '../../../app.settings'
import { Settings } from '../../../app.settings.model'
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { AngularFireModule } from 'angularfire2';


export interface Activity {
  description: string;
  name: string;
  requirements: boolean;
}

@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.scss']
})
export class ActivitiesComponent implements OnInit {

  activitiesObservableRef: AngularFirestoreCollection<Activity>;
  activities$: Observable<Activity[]>;

  public icons = ['home', 'person', 'alarm', 'work', 'mail', 'favorite']
  public colors = ['accent', 'primary', 'warn']
  public settings: Settings
  constructor(private afs: AngularFirestore, public appSettings:AppSettings) {
    this.activitiesObservableRef = this.afs.collection<Activity>('activities');
    this.activities$ = this.activitiesObservableRef.valueChanges();
    this.settings = this.appSettings.settings;
   }

  ngOnInit() {
  }

}
