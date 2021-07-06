import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {User} from '../../user';
import {UserService} from '../../user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {


  loginForm: FormGroup;

  routedId: number;

  users: User[];

  enteredUser: string;
  enteredPass: string;

  constructor(private formBuilder: FormBuilder, private userService: UserService, private router: Router) {
    this.loginForm = this.formBuilder.group({
      user: formBuilder.control('', [Validators.required]),
      pass: formBuilder.control('', [Validators.required])
    });
  }



  public onSubmit(): void{
    this.userService.getAllUsers().subscribe(response => {
      this.users = response;
      this.enteredUser = this.loginForm.get('user').value;
      this.enteredPass = this.loginForm.get('pass').value;

      this.users.forEach(user => {
        if (user.username === this.enteredUser && user.password === this.enteredPass) {
          this.routedId = user.id;
        }
      });

      this.router.navigate(['trading', this.routedId]);
    });
  }


  ngOnInit(): void {
  }

}
