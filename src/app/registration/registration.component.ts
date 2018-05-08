import { Component, OnInit } from '@angular/core';
import {User} from '../User'
import { DataService } from '../data.service';
import {Location} from '@angular/common';
import { NavigationEnd, Router } from '@angular/router';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  user = new User;
  submitted = false;

  constructor(private dataService: DataService,
    private location: Location, private router:Router) {}

  ngOnInit() {
  }

  newUser(): void {
    this.submitted = false;
    this.user = new User();
  }

  save(): void {
    this.dataService.create(this.user);
    this.router.navigate(['home'])
    //this.dataService.getReg();
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }

  goBack(): void {
    this.location.back();
  }

}
