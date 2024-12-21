import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MainService } from '../../services/main.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-item-add',
  templateUrl: './item-add.component.html',
  styleUrls: ['./item-add.component.css']
})
export class ItemAddComponent implements OnInit {

  constructor(private readonly _mainService:MainService,private readonly _router:Router) { }

  ngOnInit(): void {
  }
  onSubmit =(f:NgForm)=>{
    f.value.users_id = JSON.parse(sessionStorage.getItem('user') || 'null').usersId
    this._mainService.saveItem(f.value).subscribe(()=>this._router.navigate(['']))
  }

}
