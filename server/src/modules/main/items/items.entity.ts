import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { UsersEntity } from "../users/users.entity";
import { TasksEntity } from "../tasks/tasks.entity";

@Entity({name:"items"})
export class ItemsEntity{
    @PrimaryGeneratedColumn({name:'items_id',type:'int',unsigned:true})
    itemsId:number
    @Column({name:'title',type:'varchar',length:130,nullable:false})
    title:string
    @CreateDateColumn()
    created_at: Date;
    @UpdateDateColumn()
    updated_at: Date;

    @ManyToOne(()=>UsersEntity,user=>user.items,{nullable:false})
    @JoinColumn({name :"users_id"})
    usersId:number

    @OneToMany(()=>TasksEntity,task=>task.itemsId)
    tasks:TasksEntity[]
 
}