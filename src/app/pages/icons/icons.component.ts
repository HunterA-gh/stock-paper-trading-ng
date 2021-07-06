import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {User} from '../../user';
import {Router} from '@angular/router';
import {UserService} from '../../user.service';

@Component({
  selector: 'app-icons',
  templateUrl: 'icons.component.html'
})
export class IconsComponent implements OnInit {


  ngOnInit() {}
}
