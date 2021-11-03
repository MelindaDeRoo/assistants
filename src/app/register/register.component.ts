import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import '../../assets/js/smtp.js';
declare let Email: any;

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router){}

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      phone: ['', [Validators.required]]
    });
  }

  sendForm(): void {
    if(this.registerForm.valid){
      Email.send({
          SecureToken : "6a30fa84-2fe0-4ada-8fb6-025875476939",
          To : 'melinda.deroo@luminis.eu',
          From : "melindaderoo@gmail.com",
          Subject : "Apeldoorn Assistants",
          Body : "Gegevens: " + this.registerForm.controls['name'].value + ', ' + this.registerForm.controls['phone'].value
      }).then(
        (message: any) => console.log(message)
      );
    }
    //this.router.navigate(['/phishing']);
  }
}
