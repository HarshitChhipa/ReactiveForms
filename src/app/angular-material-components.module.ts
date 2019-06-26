import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule, MatCheckboxModule, MatChipsModule, MatInputModule} from '@angular/material';

@NgModule({
  declarations: [],
  imports: [
    MatCardModule,
    CommonModule,
    MatInputModule,
    MatButtonModule,
    MatChipsModule,
    MatCheckboxModule
  ],
  exports: [
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatChipsModule,
    MatCheckboxModule
  ]
})
export class AngularMaterialComponentsModule {
}
