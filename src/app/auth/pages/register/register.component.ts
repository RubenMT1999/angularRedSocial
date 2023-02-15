import { LoginComponent } from './../login/login.component';
import { AuthService } from './../../services/auth.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
// import Swal from 'sweetalert2';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  //importar ReactiveFormsModule en el módulo.
  miFormulario: FormGroup = this.fb.group({
    email: ['', [ Validators.required, Validators.email ]],
    password: ['', [ Validators.required, Validators.minLength(4) ]]
  });

  constructor(private fb: FormBuilder, private router: Router,
              private authService: AuthService){}


  // registro(){
  //   const { email, password } = this.miFormulario.value;
  //
  //   this.authService.registro(email,password)
  //     .subscribe(resp => {
  //       if(resp){
  //         Swal.fire({
  //           position: 'center',
  //           icon: 'success',
  //           title: 'Te has registrado con éxito!',
  //           showConfirmButton: false,
  //           timer: 1500
  //         })
  //         this.router.navigateByUrl('auth');
  //       }else{
  //           Swal.fire('Error','Compruebe los datos introducidos e inténtelo de nuevo','error');
  //       }
  //     });
  // }

}
