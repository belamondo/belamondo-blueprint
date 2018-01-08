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
import { LogoutComponent } from './components/logout/logout.component';
import { MenuSidenavComponent } from './components/menu-sidenav/menu-sidenav.component';

/**
 * Guards
 */
import { AuthGuard } from './guards/auth.guard';
import { ProfileGuard } from './guards/profile.guard';

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
import { AuthenticationService } from './services/laravel/authentication.service';
import { CrudService } from './services/laravel/crud.service';

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
    LogoutComponent,
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
    MenuSidenavComponent,
    ReactiveFormsModule,
    StringToHtmlPipe,
    TextMaskModule
  ],
  declarations: [
    LoginComponent,
    LogoutComponent,
    MenuSidenavComponent,
    StringToHtmlPipe
  ],
  providers: [
    AuthenticationService,
    AuthGuard,
    CrudService,
    ProfileGuard
  ],
  entryComponents: [
    
  ]
})
export class SharedModule { }