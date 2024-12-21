import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from '@nestjs/common';
import { AuthGuard } from 'src/guard/auth.guard';
import { ItemsService } from './items.service';
import { AddItemDto } from './dtos/add.item.dto';
import { AddTaskDto } from '../tasks/dtos/add.task.dto';
import { TasksService } from '../tasks/tasks.service';

@Controller()
@UseGuards(AuthGuard)
export class ItemsController {
    constructor(private readonly _itemsService:ItemsService,private readonly _tasksService:TasksService){}

    @Post()
    save(@Body() data:AddItemDto){
        return this._itemsService.add(data)
    }

    @Post('task')
    async saveTask(@Body() data:AddTaskDto){
        const item = await this._itemsService.findSingleItemAllTasks(data.itemsId)
        if(item===null)
            return        
        return this._tasksService.add(data)
    }

    @Put(':idItem/task/:idTask')
    async editTask(@Param('idItem') itemId:number,@Param('idTask') taskId){
        const item = await this._itemsService.findSingleItemAllTasks(itemId)
        if(item===null)
            return
        return this._tasksService.edit(item,taskId)
    }

    @Delete(':id')
    async remove(@Param('id') id:number){
        const singleItem = await this._itemsService.findSingleItemAllTasks(id)
        if(singleItem===null)
            return
        await this._tasksService.removeTasks(singleItem)
        return this._itemsService.removeSingle(singleItem)
    }
}
