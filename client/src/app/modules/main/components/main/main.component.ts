import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MainService } from '../../services/main.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  items:any
  constructor(private readonly _router:Router,private readonly _mainService:MainService) { }
  logOut =()=>{
    sessionStorage.removeItem('user')
    this._router.navigate([''])
  
  }
  removeItem = (id:number)=>{
    this._mainService.removeItem(id).subscribe(()=>{
      this._router.navigate([''])
    })
  }
  ngOnInit(): void {
    this._mainService.getAllByUser(JSON.parse(sessionStorage.getItem('user') || 'null').usersId).subscribe(data=>this.items= data.items)
  }

}
