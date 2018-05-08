import { Component, OnInit } from '@angular/core';
import {User} from '../User'
import { DataService } from '../data.service';
import {Location} from '@angular/common';
import {LoginComponent} from '../../app/login/login.component'
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  constructor(private dataService: DataService, private router:Router) {}
  user = this.dataService.user2
  ngOnInit() {
  }

  goLogin():void
  {
    this.router.navigate(['/login']);
  }

  goRegister():void
  {
    this.router.navigate(['/registration']);
  }

  goLogout():void
  {
    this.router.navigate(['/login']);
  }
  


}
