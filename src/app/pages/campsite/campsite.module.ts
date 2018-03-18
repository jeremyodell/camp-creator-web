import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AgmCoreModule } from '@agm/core';
import { SharedModule } from '../../shared/shared.module';
import { CampsiteMapsComponent } from './campsite-maps/campsite-maps.component';


export const routes = [
  { path: '', redirectTo: 'campsitemaps', pathMatch: 'full'},
  { path: 'campsitemaps', component: CampsiteMapsComponent, data: { breadcrumb: 'Campsite Maps' } },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    AgmCoreModule,
    SharedModule
  ],
  declarations: [
    CampsiteMapsComponent
  ]
})
export class CampsiteModule { }