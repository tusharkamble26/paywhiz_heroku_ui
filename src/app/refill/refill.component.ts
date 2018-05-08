import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { User } from '../User';
import {Location} from '@angular/common';
import {Router} from '@angular/router';

@Component({
  selector: 'app-refill',
  templateUrl: './refill.component.html',
  styleUrls: ['./refill.component.css']
})
export class RefillComponent implements OnInit {

  user = new User;
  user2 = new User;
  submitted = false;

  constructor(private dataService: DataService, private location:Location, private router:Router) { }
  
  ngOnInit() {
    this.dataService.getCredit()
    .then(response =>{ response as User
      this.getRes(response)})
  }

  

  save(): void
  {
    console.log("in show()");
    //this.user.wallet=this.user.wallet+this.user2.wallet;
    this.dataService.postCredit(this.user2);
    this.dataService.getCredit()
    .then(response =>{ response as User
      this.getRes(response)})
    console.log("in shw complete");
    console.log(this.user.wallet);
  }
  
  getRes(user:User): User{
    this.user=user;
    console.log("Global User", user.username);
    return this.user;

  }  

  onSubmit() {
    this.submitted=false;
    this.save();
  }

  goPurchase():void
  {
    this.router.navigate(['/purchase']);
  }

  goHome():void
  {
    this.router.navigate(['/welcome']);
  }

  goAnalyze():void
  {
    this.router.navigate(['/analyze']);
  }

  goLogout():void
  {
    this.router.navigate(['/login']);
  }

}
