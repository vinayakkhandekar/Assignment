import { Injectable } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/compat/auth'
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private fireauth:AngularFireAuth ,private router :Router) { }
  //login
  login(email:string,password:string)
  {
    this.fireauth.signInWithEmailAndPassword(email,password).then(()=>
    {
      localStorage.setItem('token','true'),
      this.router.navigate(["/dashboard"])
    } , err =>
    {
      alert(err.message);
      this.router.navigate(['/login'])
    })
  }

  //register

  register(email:string,password:string,usrname:string)
  {
    this.fireauth.createUserWithEmailAndPassword(email,password).then(()=>{
   alert('Registration succesfull'),
   this.router.navigate(['/login'])
    } , err=>{
      alert(err.message);
      this.router.navigate(['/createform'])
    })
  }
  logout()
  {
    this.fireauth.signOut().then(()=>{
       localStorage.removeItem('token'),
       this.router.navigate(['/login'])
    } , err =>{
       alert(err.message);
    })
  }
}
