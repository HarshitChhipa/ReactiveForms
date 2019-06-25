import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule, MatInputModule} from '@angular/material';

@NgModule({
  declarations: [],
  imports: [
    MatCardModule,
    CommonModule,
    MatInputModule,
    MatButtonModule
  ],
  exports: [
    MatCardModule,
    MatInputModule,
    MatButtonModule
  ]
})
export class AngularMaterialComponentsModule {
}
