import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {User} from '../../user';
import {UserService} from '../../user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {


  experienceOptions = [
    { key: 'none', value: 'Absolute Beginner', },
    { key: 'some', value: 'Some Experience', },
    { key: 'very', value: 'Very Experienced', },
    { key: 'most', value: 'Warren Buffett\'s Uncle'}
  ];

  signUpForm: FormGroup;

  user = new User();


  constructor(private formBuilder: FormBuilder, private userService: UserService, private router: Router) {
    this.signUpForm = this.formBuilder.group({
        user: formBuilder.control('', [Validators.required]),
        pass: formBuilder.control('', [Validators.required, Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[A-Za-z\d].{6,}')]),
        exp: formBuilder.control('', [Validators.required]),
        balance: formBuilder.control('', [Validators.required, Validators.min(1)])
      }
    );
  }

  public onSubmit(): void {
    this.user.username = this.signUpForm.get('user').value;
    this.user.password = this.signUpForm.get('pass').value;
    this.user.balance = this.signUpForm.get('balance').value;
    this.userService.createUser(this.user).subscribe( () => {
        this.router.navigate(['login']);
      }
    );
  }

  get pass(){
    return this.signUpForm.get('pass');
  }

  ngOnInit(): void {
  }

}
