import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MainService } from '../../services/main.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  itemsD:any
  constructor(private readonly _router:Router,private readonly _mainService:MainService) { }

  ngOnInit(): void {
    this._mainService.getAllByUser(JSON.parse(sessionStorage.getItem('user') || 'null').usersId).subscribe(data=>{
      this.itemsD = data.items.map((item:any)=>({itemTitle:item.title,activeTasks:item.tasks.filter((e:any)=>e.is_active===1)}))
    })
  }
  logOut = ()=>{sessionStorage.removeItem('user');this._router.navigate([''])}
}
