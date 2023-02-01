import { NgModule } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatOptionModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';

const AngularMaterialComponents = [
  MatSidenavModule,
  MatFormFieldModule,
  MatOptionModule,
  MatSelectModule,
  MatButtonModule,
  MatDialogModule,
  MatIconModule,
];

@NgModule({
  imports: [AngularMaterialComponents],
  exports: [AngularMaterialComponents],
})
export class AngularMaterialModule {}
