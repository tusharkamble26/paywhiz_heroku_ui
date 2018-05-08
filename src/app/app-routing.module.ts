import {RegistrationComponent} from './registration/registration.component';
import {PurchaseComponent} from './purchase/purchase.component';
import {RefillComponent} from './refill/refill.component';
import {LoginComponent} from './login/login.component';
import {HomeComponent} from './home/home.component';
import {AnalyzeComponent} from './analyze/analyze.component';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { AppComponent } from './app.component';
import {AuthUserGuard} from './auth-user.guard'; 

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'registration', component: RegistrationComponent},
  {path: 'purchase', component: PurchaseComponent},
  {path: 'refill',  component: RefillComponent},
  {path: 'login', component: LoginComponent},
  {path: 'home', component: HomeComponent},
  {path: 'welcome', component: AppComponent},
  {path: 'analyze', component: AnalyzeComponent},
  {path: '**', redirectTo: 'welcome', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers:[AuthUserGuard]
})

export class AppRoutingModule {}
