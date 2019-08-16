import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { FormsModule } from '@angular/forms';
import { CarouselComponent } from './components/carousel/carousel.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginheaderComponent } from './components/loginheader/loginheader.component';
import { FooterComponent } from './components/footer/footer.component';
import { SubscribeComponent } from './components/subscribe/subscribe.component';
import { PanelsComponent } from './components/panels/panels.component';
import { UserComponent } from './components/user/user.component';
import { PlanheadingComponent } from './components/planheading/planheading.component';
import { RegisterComponent } from './components/register/register.component';
import { MessageboxComponent } from './components/messagebox/messagebox.component';
import { ClientprofileComponent } from './components/clientprofile/clientprofile.component';

@NgModule({
  declarations: [
    AppComponent,
    CarouselComponent,
    NavbarComponent,
    LoginheaderComponent,
    FooterComponent,
    SubscribeComponent,
    PanelsComponent,
    UserComponent,
    PlanheadingComponent,
    RegisterComponent,
    MessageboxComponent,
    ClientprofileComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MDBBootstrapModule.forRoot(),
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
