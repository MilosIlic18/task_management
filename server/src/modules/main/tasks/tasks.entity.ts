import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { ItemsEntity } from "../items/items.entity";

@Entity({name:'tasks'})
export class TasksEntity{
    @PrimaryGeneratedColumn({name:'tasks_id',type:'int',unsigned:true})
    tasksId:number
    @Column({name:'title',type:'varchar',length:130,nullable:false})
    title:string
    @Column({name:'is_active',type:'tinyint',width:1,default:true})
    is_active:boolean
    @CreateDateColumn()
    created_at: Date;
    @UpdateDateColumn()
    updated_at: Date;

    @ManyToOne(()=>ItemsEntity,items=>items.tasks,{nullable:false})
    @JoinColumn({name :"items_id"})
    itemsId:number
}