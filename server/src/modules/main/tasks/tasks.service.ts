import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TasksEntity } from './tasks.entity';
import { Repository } from 'typeorm';
import { AddTaskDto } from './dtos/add.task.dto';

@Injectable()
export class TasksService {
    constructor(@InjectRepository(TasksEntity) private readonly _taskRepo:Repository<TasksEntity>){}
    findAllTasksByItemsId   = (id:number)=>this._taskRepo.findBy({itemsId:id})
    findSingle              = (idItem:number,idTask:number)=>this._taskRepo.findOneBy({itemsId:idItem,tasksId:idTask})
    
    
    add                     = (data:AddTaskDto)=>{
        const tasksEntity   = new TasksEntity()
        tasksEntity.itemsId = data.itemsId
        tasksEntity.title   = data.title
        return this._taskRepo.save(tasksEntity)
    }
    edit                    = async(item:any,idTask:number)=>{
        const task      = await this.findSingle(item.itemsId,idTask)
        if(task===null)
            return
        task.is_active  = false
        return this._taskRepo.save(task)
    }
    removeTasks = async(item:any)=>this._taskRepo.remove(await this.findAllTasksByItemsId(item.itemsId))
}
