import { Component,NgZone } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { EventserviceService } from '../services/eventservice.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-addevent',
  templateUrl: './addevent.component.html',
  styleUrls: ['./addevent.component.css']
})
export class AddeventComponent {
  imageSrc: string = '';
  eventForm: FormGroup;
  constructor(
    public formBuilder: FormBuilder,private service: EventserviceService, private router:Router,private ngZone: NgZone, private toastr:ToastrService) { 
    this.eventForm = this.formBuilder.group({
      title: ['',Validators.required],
      description: ['',Validators.required],
      date: ['',Validators.required],
      address: ['',Validators.required],
      image: ['']
    })
  }
  ngOnInit() { }
  onSubmit(): any {
    this.service.addEvent(this.eventForm.value)
    .subscribe(() => {
        console.log('Data added successfully!')
        this.ngZone.run(() => this.router.navigateByUrl(''))
        this.toastr.success('Saved!','Event',
        {
          timeOut : 1500,
          progressBar : true
        }
        )
      })
  }

  onFileChange(event:any) {
    const reader = new FileReader();
     
    if(event.target.files && event.target.files.length) {
      const [file] = event.target.files;
      reader.readAsDataURL(file);
     
      reader.onload = () => {
    
        this.imageSrc = reader.result as string;
      
        this.eventForm.patchValue({
          fileSource: reader.result
        });
    
      };
    
    }
  }
  
}
