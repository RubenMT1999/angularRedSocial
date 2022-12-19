import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component } from '@angular/core';
import { Router } from '@angular/router';


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

  constructor(private fb: FormBuilder,
    private router: Router){}


  registro(){
    console.log(this.miFormulario.value);
    this.router.navigateByUrl('/dashboard')
  }

}
