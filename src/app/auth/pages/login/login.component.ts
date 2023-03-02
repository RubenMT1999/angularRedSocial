import { delay, take, tap } from 'rxjs';
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

  
  public googleCredentials:string = '';
  public usuarioGoogle: string = '';
  public passwordGoogle: string = '';

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
      callback: (response:any) =>  this.handleCredentialResponse(response)
    });
    google.accounts.id.renderButton(
      document.getElementById("buttonDiv"),
      { theme: "outline", size: "large" }  // customization attributes
    );
  }
  

  handleCredentialResponse(response: any){
    console.log("Encoded JWT ID token: " + response.credential);
    this.googleCredentials = response.credential;
    this.loginGoogle();
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


  loginGoogle(){

    const password = '@@@'

    this.authService.googleSignIn(this.googleCredentials)
      .subscribe(resp => {
        this.usuarioGoogle = resp.email!;
        /* this.passwordGoogle = resp.password!; */
        console.log(this.usuarioGoogle);


        this.authService.login(this.usuarioGoogle, password)
        .pipe(delay(4000))
        .subscribe(resp => {
          if(resp){
            this.router.navigateByUrl('dashboard');
          }else{
              console.log(resp)
              Swal.fire('Error','Compruebe los datos introducidos e inténtelo de nuevo','error');
          }
        });
      });

        
  }

  


}
