import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import {DataService} from './data.service';

@Injectable()
export class AuthUserGuard implements CanActivate {

  constructor(private dataService : DataService, private router:Router){}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    //this.router.navigate(['/login']);  
    return true
  }


}
