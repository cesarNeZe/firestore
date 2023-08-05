import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layouts/header/header.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { DashboardComponent } from './dashboard/dashboard.component';


import { environment } from 'src/environments/environment.prod';
import { AngularFireModule } from "@angular/fire/compat";



import { CategoriesComponent } from './categories/categories.component';
import { AngularFirestore } from '@angular/fire/compat/firestore';








@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    DashboardComponent,
    CategoriesComponent
  ],
  imports: [
    
    AppRoutingModule,
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestore,
  
    FormsModule,
   
  


    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
