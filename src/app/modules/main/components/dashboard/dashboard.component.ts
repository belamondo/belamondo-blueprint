import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';

/**
 * Services
 */
import { FirebaseAuthenticationService } from './../../../shared/services/firebase/firebase-authentication.service';

/**
 * Firestore sets
 */
import { firebaseEnvironment } from './../../../../../environments/environment';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  afsCollection: AngularFirestoreCollection<any>;
  afsResponse$: Observable<any>;
  uid: any;
  userForm: FormGroup;

  constructor(
    private afs: AngularFirestore,
    private _auth: FirebaseAuthenticationService
  ) {
    
  }

  ngOnInit() {
    this.afsCollection = this.afs.collection('users', ref => ref.orderBy('name').limit(2));

    this.afsResponse$ = this.afsCollection.valueChanges();

    this.afsResponse$
    .subscribe(res => {
      console.log(res);
    })

    this._auth.setUser()
    .then(res => {
      this.uid = res;

      this.userForm.get('userId').setValue(this.uid);
    })

    this.userForm = new FormGroup({
      userId: new FormControl(),
      name: new FormControl(null)
    })
  }

  onSubmit = () => {
    let date = new Date().getTime();
    let uid = this._auth.uid + "-" + date;
    this.afsCollection = this.afs.collection('users');
    this.afsCollection.doc(uid).set(this.userForm.value);

    this.userForm.reset();
  }
}
