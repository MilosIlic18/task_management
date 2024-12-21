import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  constructor(private readonly _router:Router) { }

  ngOnInit(): void {
    if(sessionStorage.getItem('user')!==null)
      this._router.navigate(['main'])
  }

}
