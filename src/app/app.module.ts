import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MatCarouselModule } from '@ngmodule/material-carousel';
import { IvyCarouselModule } from 'angular-responsive-carousel';
import {MatButtonModule} from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
// import { MatCheckboxModule } from '@angular/material';
// import { MatFormFieldModule} from '@angular/material';
// import { MatInputModule} from '@angular/material';
// import AddIcCallIcon  from '@material-ui/icons/AddIcCall';
import { CarouselModule } from 'ng-carousel-cdk';
import { MatDividerModule } from '@angular/material/divider';
import { ButtonsModule, InputsModule } from 'angular-bootstrap-md'
import { BodyComponent } from './body/body.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { Header1Component } from './header1/header1.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ContactusComponent } from './contactus/contactus.component';
import { AboutComponent } from './about/about.component'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BodyComponent,
    Header1Component,
    ContactusComponent,
    AboutComponent,
    // AppRoutingModule
  ],
  imports: [
    BrowserModule,
     AppRoutingModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatSidenavModule,
    MatToolbarModule,
    MatCarouselModule,
    CarouselModule,
    // AddIcCallIcon,
    MatDividerModule,
    IvyCarouselModule,
    ButtonsModule, InputsModule,
    MatButtonModule,
    FontAwesomeModule,
   
    MatButtonModule,
   
    MatCarouselModule.forRoot()
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }