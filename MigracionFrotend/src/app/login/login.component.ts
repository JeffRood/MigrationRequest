import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public loginForm: FormGroup;
  public submitted = false;
  constructor(private router: Router,  public fb: FormBuilder,  private toastr: ToastrService ) { }

  ngOnInit(): void {
    // if (localStorage.removeItem('tokenKey')) {
    //   sdad
    // }
    this.buildLoginForm();

  }


  buildLoginForm() {
    // Validators.email
    this.loginForm = this.fb.group({
      Username: [null, [Validators.required]],
      Password: [null, [Validators.required]]     
    });

  }
  Login() {
    
this.submitted = true;
if (this.loginForm.invalid) {
  return;
}
this.submitted = false;
debugger;
this.router.navigate(['pages']);


  }

  

}
