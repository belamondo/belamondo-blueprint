import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import {
  MatButtonModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatIconModule,
  MatInputModule,
  MatNativeDateModule,
  MatProgressBarModule,
  MatRadioModule,
  MatSelectModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatStepperModule,
  MatToolbarModule
} from '@angular/material';
import { Routes, RouterModule } from '@angular/router';

/**
 * Third-party package
 */
import 'hammerjs';

/**
 * Components
 */

import { LoginComponent } from './components/login/login.component';

/**
 * Guards
 */

/**
 * Modules
 */
import { TextMaskModule } from 'angular2-text-mask';

/**
 * Pipes
 */
import { StringToHtmlPipe } from './pipes/string-to-html.pipe';

/**
 * Services
 */

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDatepickerModule,
    MatDialogModule,
    MatIconModule,
    MatInputModule,
    MatNativeDateModule,
    MatProgressBarModule,
    MatRadioModule,
    MatSelectModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatStepperModule,
    MatToolbarModule,
    ReactiveFormsModule,
    TextMaskModule
  ],
  exports:[
    LoginComponent,
    MatButtonModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDatepickerModule,
    MatDialogModule,
    MatIconModule,
    MatInputModule,
    MatNativeDateModule,
    MatProgressBarModule,
    MatRadioModule,
    MatSelectModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatStepperModule,
    MatToolbarModule,
    ReactiveFormsModule,
    StringToHtmlPipe,
    TextMaskModule
  ],
  declarations: [
    LoginComponent,
    StringToHtmlPipe
  ],
  providers: [
    StringToHtmlPipe
  ],
  entryComponents: [
    
  ]
})
export class SharedModule { }
