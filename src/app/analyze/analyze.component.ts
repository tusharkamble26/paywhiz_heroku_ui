import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import {Purchase} from '../Purchase';
import {Location} from '@angular/common';
import {User} from '../User';
//import {PurchaseComponent} from '../purchase/purchase.component'
import { Headers, Http,RequestOptions,Response } from '@angular/http';
import {Chart} from 'chart.js'
import { Router } from '@angular/router';

@Component({
  selector: 'app-analyze',
  templateUrl: './analyze.component.html',
  styleUrls: ['./analyze.component.css']
})
export class AnalyzeComponent implements OnInit {

  constructor(private dataService: DataService,
    private location: Location, private router:Router) { }
  chart=[]; 
  //user = this.pcomp.user;
  result:JSON; 

  //categories = ['Entertainment','Games', 'Merchandise', 'Restaurants', 'Food'];
  //amount = [1000,2000,500,3900,2000];
  categories = [];
  amount=[];
  ngOnInit() {
    this.dataService.getAD()
    .then(response =>{ response as User
      this.getRes(response)});
    //console.log(this.user);  
  }

  getRes(user:JSON): void{
    this.result=user;
    console.log("Global User",this.result );
    //return this.result;
    for ( var i in this.result) {
      this.categories.push(this.result[i][0]);
      console.log(this.result[i][0]);              
    }
    for ( var i in this.result) {
      this.amount.push(this.result[i][1]);              
    }

  }

  save():void
  {
    this.dataService.getAnalyze().then(response =>{ 
      this.getRes(response)});

    this.chart = new Chart('canvas', {
      type: 'pie',
      data: {
        datasets: [{
          data: this.amount,
          backgroundColor: ['Red', 'Blue', 'Yellow', 'Green','Cyan'],
          hoverBackgroundColor: ['Red', 'Blue', 'Yellow', 'Green','Orange'],
          hoverBorderColor:['Red', 'Blue', 'Yellow', 'Green','Orange']
        }],
      // These labels appear in the legend and in the tooltips when hovering different arcs
      labels: this.categories,
        
      }
    });
    
  }

  goPurchase():void
  {
    this.router.navigate(['/purchase']);
  }

  goRefill():void
  {
    this.router.navigate(['/refill']);
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
