import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UsersEntity } from './users.entity';
import { Repository } from 'typeorm';
import { UserSignIn } from '../auth/dtos/user.signin';

@Injectable()
export class UsersService {
    constructor(@InjectRepository(UsersEntity) private readonly _userRepo:Repository<UsersEntity>){}
    findByUsername       = (username:string)=>this._userRepo.findOneBy({username:username})
    findAllItemsAndTasks = (id:number)=>this._userRepo.findOne({where:{usersId:id},relations:['items','items.tasks']})
    
    save            = (data:UserSignIn)=>{
        const userEntity = new UsersEntity()
        userEntity.firstname = data.firstname
        userEntity.lastname  = data.lastname
        userEntity.username  = data.username
        userEntity.password  = data.password
        return this._userRepo.save(userEntity)
    }
}
