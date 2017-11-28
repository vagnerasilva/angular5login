import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { AuthService } from './../auth/auth.service';
import { FormControl, Validators} from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
    emailform: string = '';
    senhaform: string='';
    answer: string = '';

    answerDisplay: string = '';
    senhaDisplay: string='';
    showSpinner: boolean = false;
    email = new FormControl('', [Validators.required, Validators.email]);
    senha = new FormControl('');
    getErrorMessage() {
      return this.email.hasError('required') ? 'Por favor coloque um email' :
        this.email.hasError('email') ? 'Não é um email valido' :
              '';
    }

  form: FormGroup; 
  private formSubmitAttempt: boolean;

  constructor(
    private fb: FormBuilder,         // {3}
    private authService: AuthService // {4}
  ) { }

  ngOnInit() {
    this.form = this.fb.group({     // {5}
      userName: ['', Validators.required],
      password: ['', Validators.required]
    });
  }
  isFieldInvalid(field: string) { // {6}
  return (
    (!this.form.get(field).valid && this.form.get(field).touched) ||
    (this.form.get(field).untouched && this.formSubmitAttempt)
  );
}
login(){
  console.log("Fazendo login")
  if(!this.email.invalid){
    this.showAnswer()
    console.log(this.email.value)
    console.log(this.senha.value)
    let user = {
      userName:this.email.value,
      password:this.senha.value
    }
    this.authService.login(user); // {7}
  }
}
onSubmit() {
  if (this.form.valid) {
    let user = {
      userName:this.email.value,
      password:this.senha.value
    }
    
    this.authService.login(user); // {7}
  }
  this.formSubmitAttempt = true;             // {8}
}

showAnswer() {
  this.showSpinner = true;

  setTimeout(() => {
    this.answerDisplay = this.answer;
    this.showSpinner = false;
  }, 2000);
}

}// fim 
