import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  visible:boolean     = true
  changetype:boolean  = true
  visible1:boolean     = true
  changetype1:boolean  = true
  message?:string
  constructor(private readonly _authService:AuthService,private _router:Router) { }

  ngOnInit(): void {
  }

  psw =()=>{
    this.visible=!this.visible
    this.changetype=!this.changetype
  }

  psw1 =()=>{
    this.visible1=!this.visible1
    this.changetype1=!this.changetype1
  }
  onSubmit =(f:NgForm)=>{
      
    if(f.value.password!==f.value.repassword)
      this.message = 'Lozinke moraju da se podudaraju'
    else
      this._authService.signUp(f.value).subscribe(data=>{
          if(data.statusCode===-300)
            this.message = data.message
          else
            this._router.navigate([''])
        })
    
  }

}
