import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatToolbarModule,
  MatMenuModule, MatTabsModule, MatCardModule,
  MatFormFieldModule, MatInputModule,
  MatIconModule, MatCheckboxModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


@NgModule({
  imports: [MatButtonModule,
    MatToolbarModule, MatMenuModule,
    BrowserAnimationsModule, MatTabsModule,
    MatCardModule, MatFormFieldModule,
    MatInputModule, MatIconModule, MatCheckboxModule],
  exports: [MatButtonModule, MatToolbarModule,
    MatMenuModule, BrowserAnimationsModule,
    MatTabsModule, MatCardModule,
    MatFormFieldModule, MatInputModule,
    MatIconModule, MatCheckboxModule]
})
export class MaterialModule { }