import { Component, OnInit, group } from '@angular/core';
import { DataService } from '../data.service';
import {Purchase} from '../Purchase';
import {Location} from '@angular/common';
import {User} from '../User';
import { Router } from '@angular/router';
import { ControlContainer, NgControlStatusGroup } from '@angular/forms';

@Component({
  selector: 'app-purchase',
  templateUrl: './purchase.component.html',
  styleUrls: ['./purchase.component.css']
})
export class PurchaseComponent implements OnInit {

  purchase = new Purchase;
  user = new User;
  submitted = false;
  categories = ['Supermarkets', 'Medical',
            'Restaurants', 'Entertainment','Merchandise'];


  constructor(private dataService: DataService,
    private location: Location, private router:Router) {}

  ngOnInit() {
    this.dataService.getPurchase()
    .then(response =>{ response as User
      this.getRes(response)})
    
    //this.dataService.subject.subscribe(value => console.log("behavior ",value))

  }

  save(): void {
    this.dataService.transact(this.purchase);
    this.router.navigate(['/purchase']);
    this.dataService.getPurchase()
    .then(response =>{ response as User
      this.getRes(response)})

    //this.dataService.getReg();
  }

  onSubmit() {
    this.submitted = true;
    this.save();
    this.purchase.category='';
    this.purchase.purchaseAmt=0;
  }

  goBack(): void {
    this.location.back();
  }

  getRes(user:User): User{
    this.user=user;
    console.log("Global User", user.username);
    return this.user;

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

  goRefill():void
  {
    this.router.navigate(['/refill']);
  }

  goLogout():void
  {
    this.router.navigate(['/home']);
  }


 

}
