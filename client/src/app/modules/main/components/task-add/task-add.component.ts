import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MainService } from '../../services/main.service';

@Component({
  selector: 'app-task-add',
  templateUrl: './task-add.component.html',
  styleUrls: ['./task-add.component.css']
})
export class TaskAddComponent implements OnInit {

  constructor(private readonly _activatedRouter:ActivatedRoute,private readonly _mainService:MainService,private readonly _router:Router){}
  param:any
  ngOnInit(): void {
    this._activatedRouter.params.subscribe( params => 
      {
        this._mainService.getAllByUser(JSON.parse(sessionStorage.getItem('user') || 'null').usersId).subscribe(data=>{
          const item = data.items.find((e:any)=>e.itemsId===Number(params['id']))
          if(item===undefined)
              this._router.navigate(['notFound'])
            this.param = params['id']
          })
      });
  }

  onSubmit =(f:NgForm)=>{
    
        f.value.itemsId=this.param
        this._mainService.saveTask(f.value).subscribe(()=>{
          this._router.navigate([''])
        })
      
  }

}
