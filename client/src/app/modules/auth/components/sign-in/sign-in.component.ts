import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  visible:boolean     = true
  changetype:boolean  = true
  message?:string
  constructor(private readonly _router:Router,private readonly _authService:AuthService) { }

  ngOnInit(): void {
  }
  psw =()=>{
    this.visible=!this.visible
    this.changetype=!this.changetype
  }

  onSubmit = (f:NgForm)=>{
    this._authService.signIn(f.value).subscribe(data=>{
      if(data.statusCode===-301 || data.statusCode===-302)
        return this.message = data.message
      
      this.message=''
      sessionStorage.setItem('user',JSON.stringify(data))
      this._router.navigate(['main'])
    })
  }
  login = ()=>{sessionStorage.setItem('user','milos'),this._router.navigate(['main'])}

}
