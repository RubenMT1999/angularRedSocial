import { tap } from 'rxjs';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  private user:string = '';

  //importar ReactiveFormsModule en el módulo.
  miFormulario: FormGroup = this.fb.group({
    email: ['', [ Validators.required, Validators.email ]],
    password: ['', [ Validators.required, Validators.minLength(4) ]]
  });

  constructor(private fb: FormBuilder,
              private router: Router,
              private authService: AuthService){}


  login(){
    console.log(this.miFormulario.value);
    const { email, password } = this.miFormulario.value;

    this.authService.login(email,password)
      .subscribe(resp => {
        //console.log(resp);
        if(resp){
          this.user = email;
          console.log(this.user);
          this.router.navigateByUrl('dashboard');
        }else{

        }
      });



    /* this.router.navigateByUrl('/dashboard'); */
  }

}
