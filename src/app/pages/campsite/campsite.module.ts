import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AgmCoreModule } from '@agm/core';
import { SharedModule } from '../../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { CampsiteMapsComponent } from './campsite-maps/campsite-maps.component';
import { CampoutBuilderComponent } from './campout-builder/campout-builder.component';


export const routes = [
  { path: '', redirectTo: 'campsitemaps', pathMatch: 'full'},
  { path: 'campsitemaps', component: CampsiteMapsComponent, data: { breadcrumb: 'Campsite Maps' } },
  { path: 'campoutbuilder', component: CampoutBuilderComponent, data: { breadcrumb: 'Campout Builder' } },
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    AgmCoreModule,
    SharedModule
  ],
  declarations: [
    CampsiteMapsComponent,
    CampoutBuilderComponent
  ]
})
export class CampsiteModule { }