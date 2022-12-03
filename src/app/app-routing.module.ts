import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddeventComponent } from './addevent/addevent.component';
import { ListeventComponent } from './listevent/listevent.component';
import { UpdateeventComponent } from './updateevent/updateevent.component';

const routes: Routes = [
  {path: '', component: ListeventComponent},
  {path: 'addevent', component: AddeventComponent},
  {path: 'updateevent/:id', component : UpdateeventComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
