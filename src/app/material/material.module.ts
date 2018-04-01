import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatToolbarModule,
  MatMenuModule, MatTabsModule, MatCardModule,
  MatFormFieldModule, MatInputModule,MatTooltipModule,
  MatIconModule, MatCheckboxModule, MatSidenavModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


@NgModule({
  imports: [MatButtonModule,
    MatToolbarModule, MatMenuModule,MatTooltipModule,
    BrowserAnimationsModule, MatTabsModule,
    MatCardModule, MatFormFieldModule,MatSidenavModule,
    MatInputModule, MatIconModule, MatCheckboxModule],
  exports: [MatButtonModule, MatToolbarModule,
    MatMenuModule, BrowserAnimationsModule,MatTooltipModule,
    MatTabsModule, MatCardModule,MatSidenavModule,
    MatFormFieldModule, MatInputModule,
    MatIconModule, MatCheckboxModule]
})
export class MaterialModule { }