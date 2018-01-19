import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {
  public eventForm: FormGroup;

  constructor() { }

  ngOnInit() {
    this.eventForm = new FormGroup({
      test: new FormControl(null, [Validators.required])
    })
  }

  onEventFormSubmit = () => {
  }
}
