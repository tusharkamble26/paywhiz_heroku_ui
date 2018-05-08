import { Component, OnInit } from '@angular/core';
import {User} from '../User'
import { DataService } from '../data.service';
import {Location} from '@angular/common';
import { Route, Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [DataService] 
})
export class LoginComponent implements OnInit {

  user =new User;
  user2 = new User;
  //submitted=false;
  check:boolean;
  constructor(private dataService: DataService,
    private location: Location, private router: Router) {}
    

  ngOnInit() {


  }

  save(): any {
    this.dataService.logIn(this.user)
      .then(response =>{ response as User
            this.getRes(response);
        }) 
         
  }

  onSubmit() {
    console.log(this.user.username+" "+this.user.password);
    this.save();
    
    
    //this.submitted = true;
  }

  goBack(): void {
    this.location.back();
  }

  getRes(user:User): User{
    
    this.dataService.user2=user;
    //console.log("getRes output", user.wallet);
    return this.user2;

  }

  goRegister():void
  {
    this.router.navigate(['/registration']);
  }
}
