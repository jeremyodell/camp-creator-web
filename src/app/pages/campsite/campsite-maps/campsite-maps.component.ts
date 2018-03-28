import { Component,OnInit } from '@angular/core';
import { AppSettings } from '../../../app.settings';
import { Settings } from '../../../app.settings.model';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore'; 
import { Observable } from 'rxjs/Observable';
import { AngularFireModule } from 'angularfire2';

export interface Campsite {
  amenities: string;
  campgroundCode: string;
  comments: string;
  datesOpen: string;
  distance: number;
  elevationFt: string;
  gps: string;
  lat: number;
  lon: number;
  name: string;
  numberOfCampsites: number;
  phone: string;
  state: string;
}


@Component({
  selector: 'campsite-maps',
  templateUrl: './campsite-maps.component.html',
  styleUrls: ['./campsite-maps.component.scss'],
})
export class CampsiteMapsComponent {
  //Houston, Texas 
  public lat: number = 29.761993;
  public lon: number = -95.366302;
  public zoom: number = 9;
  public settings: Settings;
  campsitesObservableRef: AngularFirestoreCollection<Campsite>;
  campsites$: Observable<Campsite[]>;

  constructor(private afs: AngularFirestore, public appSettings:AppSettings) { 
   this.campsitesObservableRef = this.afs.collection<Campsite>('campsites');
   this.campsites$ = this.campsitesObservableRef.valueChanges();
   this.settings = this.appSettings.settings; 
  }


}