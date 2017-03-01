import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { LoginComponent } from './login.component';

// Elementos del template
import { TemplateModule } from '../../template/template.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    TemplateModule
  ],
  declarations: [LoginComponent],
  exports: [LoginComponent]
})
export class LoginModule { }
