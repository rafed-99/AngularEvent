import { Component } from '@angular/core';
import { Event } from '../models/event';
import { EventserviceService } from '../services/eventservice.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-listevent',
  templateUrl: './listevent.component.html',
  styleUrls: ['./listevent.component.css']
})
export class ListeventComponent {
  imageUrl = "C:/Users/RafedDz/Desktop/New folder/nodejs/"
  events:any = []
  data : any
  searchDate : any
  totalLength: any;
  page: number = 1;
  constructor(private service:EventserviceService,private toastr:ToastrService){}

  ngOnInit(): void{
    this.service.retrieveEvent().subscribe(
      (data:any)=>{this.events = data
        this.totalLength = data.length;});
  }

  deleteData(id :any,i :any){
    this.service.deleteEvent(id).subscribe(res => {
      this.events.splice(i,1)
      this.toastr.error('Deleted!','Event',
        {
          timeOut : 1500,
          progressBar : true
        }
        )
    })
  }

  searchByDate(){
    this.service.search(this.searchDate).subscribe(
      (data:any)=>{this.events = data});
  }
  reset(){
    this.service.retrieveEvent().subscribe(
      (data:any)=>{this.events = data});
  }

}
