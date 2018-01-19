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
  MatToolbarModule,
  MatGridListModule
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
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { TextMaskModule } from 'angular2-text-mask';


/**
 * Pipes
 */
import { StringToHtmlPipe } from './pipes/string-to-html.pipe';

/**
 * Services
 */
import { FirebaseAuthenticationService } from './services/firebase/firebase-authentication.service';

/**
 * Settings
 */
import { firebaseEnvironment } from './../../../environments/environment';
export const firebaseConfig = firebaseEnvironment;

@NgModule({
  imports: [
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
    CommonModule,
    MatButtonModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDatepickerModule,
    MatDialogModule,
    MatIconModule,
    MatInputModule,
    MatGridListModule,
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
    AngularFireModule,
    AngularFirestoreModule,
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
    MatGridListModule,
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
    FirebaseAuthenticationService,
    AuthGuard,
    ProfileGuard
  ],
  entryComponents: [
    
  ]
})
export class SharedModule { }