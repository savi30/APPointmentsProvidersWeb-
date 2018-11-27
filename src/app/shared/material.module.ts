import {NgModule} from '@angular/core';
import {MatButtonModule, MatCardModule, MatToolbarModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

const MATERIAL_MODULES = [
  BrowserAnimationsModule,
  MatToolbarModule,
  MatButtonModule,
  MatCardModule
];

@NgModule({
  imports: [
    ...MATERIAL_MODULES
  ],
  exports: [
    ...MATERIAL_MODULES
  ]
})
export class MaterialModule {

}
