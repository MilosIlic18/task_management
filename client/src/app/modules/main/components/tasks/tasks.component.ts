import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MainService } from '../../services/main.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  item:any
  constructor(private readonly _activatedRouter:ActivatedRoute,private readonly _mainService:MainService,private readonly _router:Router) { }

  edit=(ItemId:number,taskId:number)=>{
    this._mainService.edit(ItemId,taskId).subscribe(()=>{
      location.reload()
    })
  }

  ngOnInit(): void {
    this._activatedRouter.params.subscribe( params => 
    {
        this._mainService.getAllByUser(JSON.parse(sessionStorage.getItem('user') || 'null').usersId).subscribe(data=>{
        const item = data.items.find((e:any)=>e.itemsId===Number(params['id']))
        if(item===undefined)
            this._router.navigate(['notFound'])
          this.item = item
        })
    });
  
      
  }

}
