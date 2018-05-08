import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {AppRoutingModule} from './app-routing.module';
import {DataService} from './data.service';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { PurchaseComponent } from './purchase/purchase.component';
import { RefillComponent } from './refill/refill.component';
import { HomeComponent } from './home/home.component';
import {enableProdMode} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule, Routes} from '@angular/router';
import { AnalyzeComponent } from './analyze/analyze.component';
import {AuthUserGuard} from './auth-user.guard';
import { WelcomeComponent } from './welcome/welcome.component'; 

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    PurchaseComponent,
    RefillComponent,
    HomeComponent,
    AnalyzeComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [DataService, AuthUserGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
