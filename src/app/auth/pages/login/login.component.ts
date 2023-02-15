import { tap } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
// import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {



  //importar ReactiveFormsModule en el módulo.
  miFormulario: FormGroup = this.fb.group({
    email: ['', [ Validators.required, Validators.email ]],
    password: ['', [ Validators.required, Validators.minLength(4) ]]
  });

  constructor(private fb: FormBuilder,
              private router: Router,
              private authService: AuthService){}



  // login(){
  //
  //   const { email, password } = this.miFormulario.value;
  //
  //   this.authService.login(email,password)
  //     .subscribe(resp => {
  //       if(resp){
  //         this.router.navigateByUrl('dashboard');
  //       }else{
  //           Swal.fire('Error','Compruebe los datos introducidos e inténtelo de nuevo','error');
  //       }
  //     });
  // }

}
