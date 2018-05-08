import { Injectable, Output, EventEmitter } from '@angular/core';
import { Headers, Http,RequestOptions,Response } from '@angular/http';
import { RouterModule, Routes, Router } from '@angular/router';
 
import 'rxjs/add/operator/toPromise';
import {User} from './User';
import {Purchase} from './Purchase';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';


@Injectable()
export class DataService{

    private userUrl = 'purchase';  // URL to web API
    private creditUrl = 'refill';  // URL to web API
    private headers = new Headers({'Content-Type': 'application/json'});
    public user2 = new User;
    public submitted;
    public resJson : JSON;
    public username = new User;
    isUserLog = false;
    logcheck: boolean = false;
    @Output() loginCheck : EventEmitter<any> = new EventEmitter();
 
    constructor(private http: Http, private router:Router) {}

    create(user: User): Promise<User> {
        return this.http
          .post("registration", JSON.stringify(user), {headers : this.headers})
          .toPromise()
          .then(res =>{ this.http.get(this.userUrl)
          .toPromise()
          .then(response => response.json() as User)
          .catch(this.handleError)})
          //.then(res => res.json() as User)
          .catch(this.handleError);
      }

    handleError(error: any): any {
        console.error('An error occurred', error); // for demo purposes only
        this.router.navigate(['/purchase']);
        //return Promise.reject(error.message || error);

     }
    /* 
    logIn(user: User):Promise<User>{
        return this.http
          // tslint:disable-next-line:quotemark
          .post("login", JSON.stringify(user), {headers : this.headers})
          .toPromise()
          .then(data =>{ data.json() as User
                    console.log("result : ",data.json() as User);
                    this.isUserLog=true;
                    this.username=user;
                    //this.getuserLoggedIn();
                    console.log("isUserlog : ",this.isUserLog);
                   // return data.json() as User
                })
          .catch(this.handleError);
      }*/

      logIn(user: User):Promise<User>{
        return this.http
          // tslint:disable-next-line:quotemark
          .post("login", JSON.stringify(user), {headers : this.headers})
          .toPromise()
          .then(data =>{
                    if(data.ok!=false)
                    {
                        data.json() as User
                    console.log("result : ",data.json() as User);
                    this.isUserLog=true;
                    this.username=user;
                    this.toggle(true);
                    //this.getuserLoggedIn();
                    console.log("logcheck : ",this.logcheck);
                    this.router.navigate(['/purchase']);
                   // return data.json() as User
                    }
                    else
                    {
                        this.router.navigate(['/purchase']);
                    } 
                    
                })
          .catch(this.handleError);
      }

    transact(purchase: Purchase): Promise<Purchase> {
        return this.http
          .post("purchase", JSON.stringify(purchase), {headers : this.headers})
          .toPromise()
          .then(res =>{ this.http.get(this.userUrl)
          .toPromise()
          .then(response => response.json() as Purchase)
          .catch(this.handleError)})
          //.then(res => res.json() as User)
          .catch(this.handleError);
      }
      
    getAD(): Promise<any>
        {
            return this.http
                .get("analyze").toPromise()
                .then(response => response.json())
                .catch(this.handleError)
        }

    getCredit(): Promise<User>
        {
            return this.http
                .get("refill").toPromise()
                .then(response => response.json() as User)
                .catch(this.handleError)
        }    
       
    getPurchase(): Promise<User>
        {
            return this.http
                .get("purchase").toPromise()
                .then(response => response.json() as User)
                .catch(this.handleError)
        }    

    postCredit(user: User): Promise<User> {

            //console.log(user.username+" "+user.wallet);
            return this.http
              .post("refill", JSON.stringify(user), {headers : this.headers})
              .toPromise()
              .then(res =>{ this.http.get('refill')
              .toPromise()
              .then(response => response.json() as User)
              .catch(this.handleError)})
              .catch(this.handleError);
          }

    toggle(logcheck:boolean):Observable<boolean> {
            this.logcheck = logcheck;
            this.loginCheck.emit(this.logcheck);
            return of(logcheck);
          }      
          
    getAnalyze(): Promise<any> {
            return this.http
              .get("analyze")
              .toPromise()
              .then(res =>{
                    res.json();       
                })
              .catch(this.handleError);
        }  
 

    getuserLoggedIn()
    {
        return this.isUserLog;
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

         
}