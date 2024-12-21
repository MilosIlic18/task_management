import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './components/main/main.component';
import { HomeComponent } from './components/home/home.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { TaskAddComponent } from './components/task-add/task-add.component';
import { ItemAddComponent } from './components/item-add/item-add.component';
import { MainService } from './services/main.service';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    MainComponent,
    HomeComponent,
    TasksComponent,
    TaskAddComponent,
    ItemAddComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MainRoutingModule
  ],
  providers:[
    MainService
  ]
})
export class MainModule { }
