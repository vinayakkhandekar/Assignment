import { Component } from '@angular/core';
import { Form, FormControl, FormGroup, Validators } from '@angular/forms';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {
  form:FormGroup | any;
  constructor(private service:ServiceService)
  {
this.form=new FormGroup({
  'email': new FormControl('', [Validators.required, Validators.email]),
  'password':new FormControl()
})
  }
  show()
  {
    const a=this.form?.value.email;
    const b=this.form?.value.password;
    this.service.login(a,b)

    
  }
  getErrorMessage() {
    if (this.form.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.form.email.hasError('email') ? 'Not a valid email' : '';
  }

}
