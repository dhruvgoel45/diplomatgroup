import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes,RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { NewsletterComponent } from './components/newsletter/newsletter.component';
import { ContactusComponent } from './contactus/contactus.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ContComponent } from './components/cont/cont.component';
const routes: Routes=[
 { path:'',
  component :AboutusComponent
},
{ path:'contact',
component :ContactusComponent
}


];

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    AboutusComponent,
    NewsletterComponent,
    ContactusComponent,
    NavbarComponent,
    ContComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule , 
    RouterModule.forRoot(routes),

  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
