import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { HomeComponent } from './components/home/home.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { TaskAddComponent } from './components/task-add/task-add.component';
import { ItemAddComponent } from './components/item-add/item-add.component';

const routes: Routes = [
  {path:'',component:MainComponent,
    children:[
      {path:'',component:HomeComponent},
      {path:':id/add-task',component:TaskAddComponent},
      {path:'add-item',component:ItemAddComponent},
      {path:'item/:id/tasks',component:TasksComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
