import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatToolbarModule,
  MatMenuModule, MatTabsModule, MatCardModule,
  MatFormFieldModule, MatInputModule,
  MatIconModule, MatCheckboxModule, MatSidenavModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


@NgModule({
  imports: [MatButtonModule,
    MatToolbarModule, MatMenuModule,
    BrowserAnimationsModule, MatTabsModule,
    MatCardModule, MatFormFieldModule,MatSidenavModule,
    MatInputModule, MatIconModule, MatCheckboxModule],
  exports: [MatButtonModule, MatToolbarModule,
    MatMenuModule, BrowserAnimationsModule,
    MatTabsModule, MatCardModule,MatSidenavModule,
    MatFormFieldModule, MatInputModule,
    MatIconModule, MatCheckboxModule]
})
export class MaterialModule { }