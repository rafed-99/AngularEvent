import { Injectable } from '@angular/core';
import { Event } from '../models/event';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import {Observable} from "rxjs";



@Injectable({
  providedIn: 'root'
})
export class EventserviceService {

  
  
  constructor(private _http:HttpClient) { }
  
  retrieveEvent():Observable<Event[]>
  {
    return this._http.get<Event[]>("http://localhost:5000/event/getevents");
  }


  /*retrieveEvent(){
    return this._http.get("http://localhost:5000/event/getevents")
  }*/

  addEvent(data :Event){
    return this._http.post("http://localhost:5000/event/addevent",data)
  }

  updateEvent(data: Event) : Observable<Event>{
    return this._http.put<Event>("http://localhost:5000/event/updateevent/"+data._id,data);
}

  deleteEvent(id : any) {

    return this._http.delete<Event>("http://localhost:5000/event/deleteevent/"+id);
    }


  getEventById(id:any): Observable<Event>{
    return this._http.get<Event>("http://localhost:5000/event/getevent/"+id)
  }

  search(date :any): Observable<Event>{
    return this._http.get<Event>("http://localhost:5000/event/getbydate?date="+date)
  }
}
