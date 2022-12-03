
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { EventserviceService } from '../services/eventservice.service';
import { Event } from '../models/event';

import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-updateevent',
  templateUrl: './updateevent.component.html',
  styleUrls: ['./updateevent.component.css']
})
export class UpdateeventComponent {
 
  currentEvent = new Event();
  
  constructor(private activatedRoute: ActivatedRoute,
              private router :Router,
              private service: EventserviceService,private toastr:ToastrService) { }

  ngOnInit(): void {
    console.log(this.activatedRoute.snapshot.params['id'])
    this.service.getEventById(this.activatedRoute.snapshot.params['id']).
    subscribe( event =>{ this.currentEvent = event;console.log(event) });
    
  }


 
  updateAbonement() {
    console.log(this.currentEvent)
    this.service.updateEvent(this.currentEvent).subscribe(() => {
    this.router.navigate(['']);
    this.toastr.success('Updated!','Event',
        {
          timeOut : 1500,
          progressBar : true
        }
        )
    }
    ,(error) => { alert("Problème lors de la modification !"); }
    );
    }
}
