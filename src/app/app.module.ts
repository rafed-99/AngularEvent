import { BrowserModule } from '@angular/platform-browser';
import { AddeventComponent } from './addevent/addevent.component';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UpdateeventComponent } from './updateevent/updateevent.component';
import { FormsModule } from '@angular/forms';
import { NgModule ,CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { ListeventComponent } from './listevent/listevent.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
    AddeventComponent,
    UpdateeventComponent,
    ListeventComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
