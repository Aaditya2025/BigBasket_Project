import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  showMessage: string = '';
  loginObj: any = {
    userName: '', 
    password: ''
  }

  constructor(private router: Router){

  }

  onSignIn(){
    if(this.loginObj.userName == "aditya" && this.loginObj.password == ""){
      this.router.navigateByUrl('/shop')
    }else{
      this.showMessage = "That username and password combination is incorrect."
    }
  }
}
