import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { ItemsEntity } from './items.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { AddItemDto } from './dtos/add.item.dto';

@Injectable()
export class ItemsService {
    constructor(@InjectRepository(ItemsEntity) private readonly _itemRepo:Repository<ItemsEntity>){}
    findSingleItemAllTasks        = (id:number)=>this._itemRepo.findOne({where:{itemsId:id},relations:['tasks']})
    add                           = (body:AddItemDto)=>{
        const itemsEntity    = new ItemsEntity()
        itemsEntity.usersId  = body.users_id
        itemsEntity.title    = body.title
        return this._itemRepo.save(itemsEntity) 
    }
    removeSingle                  = (item:any)=>this._itemRepo.remove(item)
        
    
}
