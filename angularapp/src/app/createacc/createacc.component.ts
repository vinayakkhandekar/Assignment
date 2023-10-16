import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-createacc',
  templateUrl: './createacc.component.html',
  styleUrls: ['./createacc.component.css']
})
export class CreateaccComponent {
  form:FormGroup | any;
  constructor(private service:ServiceService)
  {
    this.form=new FormGroup({
      'email': new FormControl(),
      'password':new FormControl(),
      'username':new FormControl()
    })
  }
  show()
  {
    const a=this.form?.value.email;
    const b=this.form?.value.password;
    const c=this.form?.value.username
    this.service.register(a,b,c)

  }
  

}
