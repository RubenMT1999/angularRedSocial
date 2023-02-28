import { tap } from 'rxjs';
import { Component, OnInit, AfterViewInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import Swal from 'sweetalert2';

declare const google: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements AfterViewInit{

  

  //importar ReactiveFormsModule en el módulo.
  miFormulario: FormGroup = this.fb.group({
    email: ['', [ Validators.required, Validators.email ]],
    password: ['', [ Validators.required, Validators.minLength(4) ]]
  });

  constructor(private fb: FormBuilder,
              private router: Router,
              private authService: AuthService){}


              
  ngAfterViewInit(): void {
    this.googleInit();
  }


  googleInit(){
    google.accounts.id.initialize({
      client_id: "654622771453-jf22r6uopircg7fe0221dsd6kbjn5k60.apps.googleusercontent.com",
      callback: this.handleCredentialResponse
    });
    google.accounts.id.renderButton(
      document.getElementById("buttonDiv"),
      { theme: "outline", size: "large" }  // customization attributes
    );
  }
  

  handleCredentialResponse(response: any){
    console.log("Encoded JWT ID token: " + response.credential);
  }



  login(){

    const { email, password } = this.miFormulario.value;

    this.authService.login(email,password)
      .subscribe(resp => {
        if(resp){
          this.router.navigateByUrl('dashboard');
        }else{
            Swal.fire('Error','Compruebe los datos introducidos e inténtelo de nuevo','error');
        }
      });
  }

}
