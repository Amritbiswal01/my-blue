import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { TermsComponent } from './terms/terms.component';
import { AccessComponent } from './access/access.component';
import { ResourceComponent } from './resource/resource.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { AppService } from './app.service';

const appRoute: Routes = [
  { path:'', component: HomeComponent },
  { path:'terms', component: TermsComponent },
  { path:'access', component: AccessComponent },
  { path:'resource', component: ResourceComponent },
]

@NgModule({
  declarations: [
    AppComponent,
    TermsComponent,
    AccessComponent,
    ResourceComponent,
    HeaderComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(appRoute)
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
